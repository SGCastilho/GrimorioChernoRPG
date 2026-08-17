import { createHash } from 'node:crypto';
import { parse } from 'acorn';
import { METADATA_CONTENT_FILES } from './config.mjs';
import { fail } from './errors.mjs';

export const CLASS_METADATA_FIELDS = Object.freeze(['name', 'originalName', 'desc', 'hitDie', 'ability', 'saves', 'armor', 'weapons', 'tools', 'skills', 'sigilKey', 'color', 'tablePage']);
export const SUBCLASS_METADATA_FIELDS = Object.freeze(['name', 'originalName', 'desc', 'sourcePage']);
export const SOURCE_METADATA_FIELDS = Object.freeze(['title', 'pages', 'chapter']);

const digest = value => createHash('sha256').update(value).digest('hex');
const canonical = value => {
  if (Array.isArray(value)) return value.map(canonical);
  if (value && typeof value === 'object') return Object.fromEntries(Object.keys(value).sort().map(key => [key, canonical(value[key])]));
  return value;
};

function propertyName(property, code = 'INVALID_METADATA_SOURCE') {
  if (property.type !== 'Property' || property.computed || property.kind !== 'init' || property.method || property.shorthand) fail(500, code, 'Um arquivo de conteúdo contém uma propriedade não suportada.');
  if (property.key.type === 'Identifier') return property.key.name;
  if (property.key.type === 'Literal' && typeof property.key.value === 'string') return property.key.value;
  fail(500, code, 'Um arquivo de conteúdo contém uma chave não suportada.');
}

function propertiesOf(node, code = 'INVALID_METADATA_SOURCE') {
  if (node?.type !== 'ObjectExpression') fail(500, code, 'Uma entidade do Grimório não usa objeto literal.');
  const result = new Map();
  for (const property of node.properties) {
    const name = propertyName(property, code);
    if (result.has(name)) fail(500, code, `A entidade contém a propriedade duplicada ${name}.`);
    result.set(name, property);
  }
  return result;
}

function scalar(node, fallback = undefined) {
  if (!node) return fallback;
  if (node.type === 'Literal' && ['string', 'number'].includes(typeof node.value)) return node.value;
  if (node.type === 'UnaryExpression' && ['+', '-'].includes(node.operator) && node.argument?.type === 'Literal' && typeof node.argument.value === 'number') return node.operator === '-' ? -node.argument.value : node.argument.value;
  return fallback;
}

function traverse(root, visit) {
  const stack = [root];
  while (stack.length) {
    const node = stack.pop();
    if (!node || typeof node !== 'object') continue;
    visit(node);
    for (const [key, value] of Object.entries(node)) {
      if (['start', 'end', 'loc', 'range'].includes(key)) continue;
      if (Array.isArray(value)) stack.push(...value);
      else if (value && typeof value === 'object') stack.push(value);
    }
  }
}

function sourceValue(properties) {
  const sourceProperty = properties.get('source');
  if (!sourceProperty) return { title: '', pages: '', chapter: '' };
  const nested = propertiesOf(sourceProperty.value);
  return Object.fromEntries(SOURCE_METADATA_FIELDS.map(field => [field, scalar(nested.get(field)?.value, '')]));
}

function entityFromNode(source, path, node) {
  if (node.properties.some(property => property.type !== 'Property' || property.computed || property.kind !== 'init' || property.method || property.shorthand || !(property.key.type === 'Identifier' || (property.key.type === 'Literal' && typeof property.key.value === 'string')))) return null;
  const properties = propertiesOf(node);
  const id = scalar(properties.get('id')?.value);
  if (typeof id !== 'string') return null;
  const isSubclass = typeof scalar(properties.get('classId')?.value) === 'string' && properties.get('features')?.value?.type === 'ArrayExpression';
  const isClass = !isSubclass && typeof scalar(properties.get('hitDie')?.value) === 'string' && properties.get('features')?.value?.type === 'ArrayExpression';
  if (!isClass && !isSubclass) return null;
  const fields = isClass ? CLASS_METADATA_FIELDS : SUBCLASS_METADATA_FIELDS;
  const metadata = Object.fromEntries(fields.map(field => [field, scalar(properties.get(field)?.value, field === 'tablePage' || field === 'sourcePage' ? null : '')]));
  metadata.source = sourceValue(properties);
  return {
    type: isClass ? 'class' : 'subclass', id, classId: isSubclass ? scalar(properties.get('classId').value) : null,
    metadata, path, node, properties, raw: source.slice(node.start, node.end), entryHash: digest(source.slice(node.start, node.end))
  };
}

export function parseMetadataSource(source, path) {
  let program;
  try { program = parse(source, { ecmaVersion: 'latest', sourceType: 'script' }); }
  catch { fail(500, 'INVALID_METADATA_SOURCE', `O arquivo ${path} contém JavaScript inválido.`); }
  const entities = [];
  traverse(program, node => {
    if (node.type !== 'ObjectExpression') return;
    const entity = entityFromNode(source, path, node);
    if (entity) entities.push(entity);
  });
  return entities;
}

export function parseMetadataFiles(files) {
  const classes = new Map();
  const subclasses = new Map();
  for (const path of METADATA_CONTENT_FILES) {
    const source = files[path]?.content;
    if (typeof source !== 'string') fail(500, 'FILE_NOT_FOUND', 'Um arquivo de conteúdo configurado não foi encontrado.');
    for (const entity of parseMetadataSource(source, path)) {
      const target = entity.type === 'class' ? classes : subclasses;
      if (target.has(entity.id)) fail(500, 'DUPLICATE_ENTITY', `O ID ${entity.id} está duplicado nos arquivos de conteúdo.`);
      target.set(entity.id, entity);
    }
  }
  return { classes, subclasses };
}

function replacementForInsertion(source, objectNode, properties, additions) {
  const names = Object.keys(additions);
  if (!names.length) return null;
  const existing = [...properties.values()];
  const newline = source.includes('\r\n') ? '\r\n' : '\n';
  const multiline = source.slice(objectNode.start, objectNode.end).includes('\n');
  if (!multiline) {
    const last = existing.at(-1);
    const comma = last && !source.slice(last.end, objectNode.end - 1).includes(',') ? ',' : '';
    return { start: objectNode.end - 1, end: objectNode.end - 1, text: `${comma}${names.map(name => `${JSON.stringify(name)}:${JSON.stringify(additions[name])}`).join(',')}` };
  }
  const first = existing[0];
  const lineStart = first ? source.lastIndexOf('\n', first.start - 1) + 1 : objectNode.start + 1;
  const indent = first ? source.slice(lineStart, first.start).match(/^\s*/)?.[0] || '  ' : '  ';
  const closingLineStart = source.lastIndexOf('\n', objectNode.end - 1) + 1;
  const closingIndent = source.slice(closingLineStart, objectNode.end - 1).match(/^\s*/)?.[0] || '';
  const last = existing.at(-1);
  const comma = last && !source.slice(last.end, objectNode.end - 1).includes(',') ? ',' : '';
  const lines = names.map(name => `${indent}${JSON.stringify(name)}: ${JSON.stringify(additions[name])}`).join(`,${newline}`);
  return { start: objectNode.end - 1, end: objectNode.end - 1, text: `${comma}${newline}${lines}${newline}${closingIndent}` };
}

function applyChanges(source, entity, changes) {
  const replacements = [];
  const direct = { ...changes };
  delete direct.source;
  const missing = {};
  for (const [field, value] of Object.entries(direct)) {
    const property = entity.properties.get(field);
    if (property) replacements.push({ start: property.value.start, end: property.value.end, text: JSON.stringify(value) });
    else missing[field] = value;
  }
  if (changes.source) {
    const sourceProperty = entity.properties.get('source');
    if (!sourceProperty) {
      missing.source = changes.source;
    } else {
      const nested = propertiesOf(sourceProperty.value);
      const nestedMissing = {};
      for (const [field, value] of Object.entries(changes.source)) {
        const property = nested.get(field);
        if (property) replacements.push({ start: property.value.start, end: property.value.end, text: JSON.stringify(value) });
        else nestedMissing[field] = value;
      }
      const insertion = replacementForInsertion(source, sourceProperty.value, nested, nestedMissing);
      if (insertion) replacements.push(insertion);
    }
  }
  const directInsertion = replacementForInsertion(source, entity.node, entity.properties, missing);
  if (directInsertion) replacements.push(directInsertion);
  let updated = source;
  for (const replacement of replacements.sort((a, b) => b.start - a.start)) updated = updated.slice(0, replacement.start) + replacement.text + updated.slice(replacement.end);
  return updated;
}

export function editMetadataSource(source, path, type, id, changes) {
  const beforeEntities = parseMetadataSource(source, path);
  const target = beforeEntities.find(entity => entity.type === type && entity.id === id);
  if (!target) fail(400, 'UNKNOWN_ENTITY', 'A entidade informada não existe no Grimório.');
  const updated = applyChanges(source, target, changes);
  const afterEntities = parseMetadataSource(updated, path);
  const after = afterEntities.find(entity => entity.type === type && entity.id === id);
  if (!after || beforeEntities.length !== afterEntities.length) fail(500, 'UNSAFE_METADATA_EDIT', 'A edição alteraria a estrutura do arquivo de conteúdo.');
  for (const entity of beforeEntities) {
    if (entity.type === type && entity.id === id) continue;
    const preserved = afterEntities.find(candidate => candidate.type === entity.type && candidate.id === entity.id);
    if (!preserved || preserved.raw !== entity.raw) fail(500, 'UNSAFE_METADATA_EDIT', 'A edição atingiria outra entidade do Grimório.');
  }
  for (const [field, value] of Object.entries(changes)) {
    if (field === 'source') {
      for (const [sourceField, sourceValue] of Object.entries(value)) if (after.metadata.source[sourceField] !== sourceValue) fail(500, 'UNSAFE_METADATA_EDIT', 'A alteração de fonte não pôde ser confirmada.');
    } else if (after.metadata[field] !== value) fail(500, 'UNSAFE_METADATA_EDIT', `A alteração de ${field} não pôde ser confirmada.`);
  }
  for (const [field, value] of Object.entries(target.metadata)) {
    if (field === 'source') continue;
    if (!(field in changes) && after.metadata[field] !== value) fail(500, 'UNSAFE_METADATA_EDIT', 'A edição atingiria um campo não solicitado.');
  }
  for (const field of SOURCE_METADATA_FIELDS) if (!(changes.source && field in changes.source) && after.metadata.source[field] !== target.metadata.source[field]) fail(500, 'UNSAFE_METADATA_EDIT', 'A edição atingiria outro campo de fonte.');
  return { source: updated, entity: after };
}

export function editManifestClassName(source, classId, oldName, newName) {
  if (oldName === newName) return source;
  let manifest;
  try { manifest = JSON.parse(source); } catch { fail(500, 'INVALID_MANIFEST', 'O manifesto do projeto contém JSON inválido.'); }
  if (manifest.classIndex.some(item => item.id !== classId && item.name === newName) || Object.hasOwn(manifest.subclassCounts, newName)) fail(400, 'DUPLICATE_NAME', 'Já existe uma classe com esse nome.');
  const expected = structuredClone(manifest);
  const item = expected.classIndex.find(candidate => candidate.id === classId);
  if (!item || item.name !== oldName || !expected.classNames.includes(oldName) || !Object.hasOwn(expected.subclassCounts, oldName)) fail(500, 'INVALID_MANIFEST', 'Os índices derivados da classe estão inconsistentes.');
  item.name = newName;
  expected.classNames = expected.classNames.map(name => name === oldName ? newName : name).sort((a, b) => a.localeCompare(b, 'pt-BR'));
  expected.subclassCounts = Object.fromEntries(Object.entries(expected.subclassCounts).map(([name, count]) => [name === oldName ? newName : name, count]));
  let program;
  try { program = parse(`(${source})`, { ecmaVersion: 'latest' }); } catch { fail(500, 'INVALID_MANIFEST', 'O manifesto não pôde ser analisado estruturalmente.'); }
  const root = program.body[0].expression;
  const rootProperties = propertiesOf(root, 'INVALID_MANIFEST');
  const replacements = [];
  const classIndex = rootProperties.get('classIndex')?.value;
  for (const element of classIndex?.elements || []) {
    const props = propertiesOf(element, 'INVALID_MANIFEST');
    if (scalar(props.get('id')?.value) === classId) replacements.push({ start: props.get('name').value.start - 1, end: props.get('name').value.end - 1, text: JSON.stringify(newName) });
  }
  const namesNode = rootProperties.get('classNames')?.value;
  const newline = source.includes('\r\n') ? '\r\n' : '\n';
  const formattedNames = JSON.stringify(expected.classNames, null, 2).replace(/\n/g, `${newline}  `);
  replacements.push({ start: namesNode.start - 1, end: namesNode.end - 1, text: formattedNames });
  const counts = propertiesOf(rootProperties.get('subclassCounts')?.value, 'INVALID_MANIFEST');
  const countProperty = counts.get(oldName);
  replacements.push({ start: countProperty.key.start - 1, end: countProperty.key.end - 1, text: JSON.stringify(newName) });
  let updated = source;
  for (const replacement of replacements.sort((a, b) => b.start - a.start)) updated = updated.slice(0, replacement.start) + replacement.text + updated.slice(replacement.end);
  let actual;
  try { actual = JSON.parse(updated); } catch { fail(500, 'UNSAFE_MANIFEST_EDIT', 'A sincronização do manifesto produziria JSON inválido.'); }
  if (JSON.stringify(canonical(actual)) !== JSON.stringify(canonical(expected))) fail(500, 'UNSAFE_MANIFEST_EDIT', 'A sincronização alteraria outro campo do manifesto.');
  return updated;
}
