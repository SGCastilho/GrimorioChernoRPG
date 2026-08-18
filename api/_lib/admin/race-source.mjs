import { createHash } from 'node:crypto';
import { parse } from 'acorn';
import { RACE_CONTENT_FILES } from './config.mjs';
import { fail } from './errors.mjs';

export const RACE_FIELDS = Object.freeze(['name', 'originalName', 'sourcePage', 'summary', 'abilityScore']);
export const RACE_META_FIELDS = Object.freeze([
  'creatureTypes', 'lifeExpectancy', 'nationalAlignment', 'planarOrigin', 'planetouched',
  'regions', 'size', 'alignment', 'languages', 'speed'
]);
export const SUBRACE_FIELDS = Object.freeze(['name', 'page', 'ability', 'description']);

const digest = value => createHash('sha256').update(value).digest('hex');
const keyFor = (raceId, subraceId) => `${raceId}\u0000${subraceId}`;

function propertyName(property) {
  if (property?.type !== 'Property' || property.computed || property.kind !== 'init' || property.method || property.shorthand) {
    fail(500, 'INVALID_RACE_SOURCE', 'Um arquivo racial contém uma propriedade não suportada.');
  }
  if (property.key.type === 'Identifier') return property.key.name;
  if (property.key.type === 'Literal' && typeof property.key.value === 'string') return property.key.value;
  fail(500, 'INVALID_RACE_SOURCE', 'Um arquivo racial contém uma chave não suportada.');
}

function propertiesOf(node) {
  if (node?.type !== 'ObjectExpression') fail(500, 'INVALID_RACE_SOURCE', 'Uma entidade racial não usa objeto literal.');
  const result = new Map();
  for (const property of node.properties) {
    const name = propertyName(property);
    if (result.has(name)) fail(500, 'INVALID_RACE_SOURCE', `A entidade racial contém a propriedade duplicada ${name}.`);
    result.set(name, property);
  }
  return result;
}

function scalar(node, fallback = undefined) {
  if (!node) return fallback;
  if (node.type === 'Literal' && ['string', 'number'].includes(typeof node.value)) return node.value;
  if (node.type === 'UnaryExpression' && ['+', '-'].includes(node.operator) && node.argument?.type === 'Literal' && typeof node.argument.value === 'number') {
    return node.operator === '-' ? -node.argument.value : node.argument.value;
  }
  return fallback;
}

function traverse(root, visit) {
  const stack = [root];
  while (stack.length) {
    const node = stack.pop();
    if (!node || typeof node !== 'object') continue;
    visit(node);
    for (const [name, value] of Object.entries(node)) {
      if (['start', 'end', 'loc', 'range'].includes(name)) continue;
      if (Array.isArray(value)) stack.push(...value);
      else if (value && typeof value === 'object') stack.push(value);
    }
  }
}

function parseProgram(source, path) {
  try { return parse(source, { ecmaVersion: 'latest', sourceType: 'script' }); }
  catch { fail(500, 'INVALID_RACE_SOURCE', `O arquivo ${path} contém JavaScript inválido.`); }
}

function owner(path, property) {
  return { path, start: property.value.start, end: property.value.end };
}

function slug(value) {
  return String(value || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[’']/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

function subraceFromObject(source, path, raceId, node) {
  const properties = propertiesOf(node);
  const id = scalar(properties.get('id')?.value);
  if (typeof id !== 'string') fail(500, 'INVALID_RACE_SOURCE', `Uma subraça de ${raceId} não possui ID literal.`);
  const metadata = Object.fromEntries(SUBRACE_FIELDS.map(field => [field, scalar(properties.get(field)?.value, field === 'page' ? null : '')]));
  const owners = new Map();
  for (const field of SUBRACE_FIELDS) if (properties.has(field)) owners.set(field, owner(path, properties.get(field)));
  return {
    type: 'subrace', id, raceId, metadata, owners, path, node, raw: source.slice(node.start, node.end),
    originalName: scalar(properties.get('originalName')?.value, ''),
    source: scalar(properties.get('source')?.value, ''), sourceId: scalar(properties.get('sourceId')?.value, '')
  };
}

function subraceFromFactory(source, path, raceId, node) {
  if (node?.type !== 'CallExpression' || node.callee?.type !== 'Identifier' || node.callee.name !== 'S' || node.arguments.length < 7) return null;
  const originalName = scalar(node.arguments[1]);
  if (typeof originalName !== 'string') fail(500, 'INVALID_RACE_SOURCE', `Uma subraça gerada de ${raceId} não possui nome original literal.`);
  const fields = { name: 0, page: 2, ability: 3, description: 4 };
  const metadata = Object.fromEntries(Object.entries(fields).map(([field, index]) => [field, scalar(node.arguments[index], field === 'page' ? null : '')]));
  const owners = new Map(Object.entries(fields).map(([field, index]) => [field, { path, start: node.arguments[index].start, end: node.arguments[index].end }]));
  return { type: 'subrace', id: slug(originalName), raceId, metadata, owners, path, node, raw: source.slice(node.start, node.end), originalName, source: '', sourceId: '', generatedId: true };
}

function subraceFromNode(source, path, raceId, node) {
  if (node?.type === 'ObjectExpression') return subraceFromObject(source, path, raceId, node);
  const generated = subraceFromFactory(source, path, raceId, node);
  if (generated) return generated;
  fail(500, 'INVALID_RACE_SOURCE', `A lista de subraças de ${raceId} contém uma entrada não suportada.`);
}

function raceFromNode(source, path, node) {
  let properties;
  try { properties = propertiesOf(node); } catch { return null; }
  const id = scalar(properties.get('id')?.value);
  if (typeof id !== 'string' || properties.get('coreTraits')?.value?.type !== 'ArrayExpression' || properties.get('subraces')?.value?.type !== 'ArrayExpression') return null;
  const metadata = Object.fromEntries(RACE_FIELDS.map(field => [field, scalar(properties.get(field)?.value, field === 'sourcePage' ? null : '')]));
  metadata.meta = Object.fromEntries(RACE_META_FIELDS.map(field => [field, '']));
  const owners = new Map();
  for (const field of RACE_FIELDS) if (properties.has(field)) owners.set(field, owner(path, properties.get(field)));
  const metaProperty = properties.get('meta');
  if (metaProperty) {
    const meta = propertiesOf(metaProperty.value);
    for (const field of RACE_META_FIELDS) {
      if (!meta.has(field)) continue;
      metadata.meta[field] = scalar(meta.get(field).value, '');
      owners.set(`meta.${field}`, owner(path, meta.get(field)));
    }
  }
  const subraces = properties.get('subraces').value.elements.map(item => subraceFromNode(source, path, id, item));
  return {
    type: 'race', id, metadata, owners, path, node, raw: source.slice(node.start, node.end), subraces,
    source: scalar(properties.get('source')?.value, ''), sourceId: scalar(properties.get('sourceId')?.value, ''),
    textRevision: scalar(properties.get('textRevision')?.value, '')
  };
}

function additionalSubraces(source, path, program) {
  const result = [];
  traverse(program, node => {
    if (node.type === 'CallExpression' && node.callee?.type === 'Identifier' && node.callee.name === 'append' && node.arguments[0]?.type === 'Literal' && typeof node.arguments[0].value === 'string' && node.arguments[1]?.type === 'ArrayExpression') {
      const raceId = node.arguments[0].value;
      for (const item of node.arguments[1].elements) result.push(subraceFromNode(source, path, raceId, item));
    }
    if (node.type !== 'VariableDeclarator' || node.id?.type !== 'Identifier' || node.id.name !== 'additionalByParent' || node.init?.type !== 'ObjectExpression') return;
    for (const property of node.init.properties) {
      const raceId = propertyName(property);
      if (property.value.type !== 'ArrayExpression') fail(500, 'INVALID_RACE_SOURCE', `As subraças adicionais de ${raceId} não usam array literal.`);
      for (const item of property.value.elements) result.push(subraceFromNode(source, path, raceId, item));
    }
  });
  return result;
}

function phasePatches(path, program) {
  const patches = [];
  traverse(program, node => {
    if (node.type !== 'VariableDeclarator' || node.id?.type !== 'Identifier' || node.id.name !== 'P' || node.init?.type !== 'ObjectExpression') return;
    for (const raceProperty of node.init.properties) {
      const raceId = propertyName(raceProperty);
      const racePatch = propertiesOf(raceProperty.value);
      const metaProperty = racePatch.get('meta');
      if (metaProperty) {
        for (const property of metaProperty.value.properties) {
          const field = propertyName(property);
          if (RACE_META_FIELDS.includes(field)) patches.push({ type: 'race', raceId, field: `meta.${field}`, value: scalar(property.value, ''), owner: owner(path, property) });
        }
      }
      const subracesProperty = racePatch.get('subraces');
      if (!subracesProperty) continue;
      for (const subraceProperty of subracesProperty.value.properties) {
        const subraceId = propertyName(subraceProperty);
        const subracePatch = propertiesOf(subraceProperty.value);
        const description = subracePatch.get('description');
        if (description) patches.push({ type: 'subrace', raceId, subraceId, field: 'description', value: scalar(description.value, ''), owner: owner(path, description) });
      }
    }
  });
  return patches;
}

function revision(entity) {
  return digest(JSON.stringify({ id: entity.id, raceId: entity.raceId || null, metadata: entity.metadata }));
}

export function parseRaceFiles(files) {
  const programs = new Map();
  const races = new Map();
  const subraces = new Map();
  const patches = [];
  for (const path of RACE_CONTENT_FILES) {
    const source = files[path]?.content;
    if (typeof source !== 'string') fail(500, 'FILE_NOT_FOUND', 'Um arquivo racial configurado não foi encontrado.');
    const program = parseProgram(source, path);
    programs.set(path, program);
    traverse(program, node => {
      if (node.type !== 'ObjectExpression') return;
      const race = raceFromNode(source, path, node);
      if (!race) return;
      if (races.has(race.id)) fail(500, 'DUPLICATE_RACE', `O ID racial ${race.id} está duplicado.`);
      races.set(race.id, race);
      for (const subrace of race.subraces) {
        const key = keyFor(race.id, subrace.id);
        if (subraces.has(key)) fail(500, 'DUPLICATE_SUBRACE', `A subraça ${subrace.id} está duplicada em ${race.id}.`);
        subraces.set(key, subrace);
      }
    });
    for (const subrace of additionalSubraces(source, path, program)) {
      const key = keyFor(subrace.raceId, subrace.id);
      if (subraces.has(key)) fail(500, 'DUPLICATE_SUBRACE', `A subraça ${subrace.id} está duplicada em ${subrace.raceId}.`);
      subraces.set(key, subrace);
    }
    patches.push(...phasePatches(path, program));
  }
  for (const subrace of subraces.values()) if (!races.has(subrace.raceId)) fail(500, 'INVALID_RACE_INDEX', `A subraça ${subrace.id} referencia a raça ausente ${subrace.raceId}.`);
  for (const patch of patches) {
    const entity = patch.type === 'race' ? races.get(patch.raceId) : subraces.get(keyFor(patch.raceId, patch.subraceId));
    if (!entity) fail(500, 'INVALID_RACE_PATCH', 'Uma sobreposição textual referencia uma entidade racial ausente.');
    const target = patch.field.startsWith('meta.') ? entity.metadata.meta : entity.metadata;
    const field = patch.field.startsWith('meta.') ? patch.field.slice(5) : patch.field;
    target[field] = patch.value;
    entity.owners.set(patch.field, patch.owner);
  }
  for (const race of races.values()) race.entryHash = revision(race);
  for (const subrace of subraces.values()) subrace.entryHash = revision(subrace);
  return { races, subraces };
}

function same(value, other) {
  return JSON.stringify(value) === JSON.stringify(other);
}

function metadataValue(entity, field) {
  return field.startsWith('meta.') ? entity.metadata.meta[field.slice(5)] : entity.metadata[field];
}

export function editRaceFiles(files, entityType, raceId, subraceId, changes) {
  const before = parseRaceFiles(files);
  const target = entityType === 'race' ? before.races.get(raceId) : before.subraces.get(keyFor(raceId, subraceId));
  if (!target) fail(400, 'UNKNOWN_RACE_ENTITY', 'A raça ou subraça informada não existe no Grimório.');
  const replacements = new Map();
  const flattened = [];
  for (const [field, value] of Object.entries(changes)) {
    if (field === 'meta') for (const [metaField, metaValue] of Object.entries(value)) flattened.push([`meta.${metaField}`, metaValue]);
    else flattened.push([field, value]);
  }
  for (const [field, value] of flattened) {
    const location = target.owners.get(field);
    if (!location) fail(500, 'UNEDITABLE_RACE_FIELD', `O campo ${field} não possui uma origem editável segura.`);
    if (!replacements.has(location.path)) replacements.set(location.path, []);
    replacements.get(location.path).push({ start: location.start, end: location.end, text: JSON.stringify(value) });
  }
  const updatedFiles = Object.fromEntries(Object.entries(files).map(([path, file]) => [path, { ...file }]));
  const changedFiles = {};
  for (const [path, items] of replacements) {
    let source = updatedFiles[path].content;
    for (const item of items.sort((a, b) => b.start - a.start)) source = source.slice(0, item.start) + item.text + source.slice(item.end);
    updatedFiles[path].content = source;
    changedFiles[path] = source;
  }
  const after = parseRaceFiles(updatedFiles);
  if (after.races.size !== before.races.size || after.subraces.size !== before.subraces.size) fail(500, 'UNSAFE_RACE_EDIT', 'A edição alteraria a estrutura do catálogo racial.');
  const targetKey = entityType === 'race' ? raceId : keyFor(raceId, subraceId);
  for (const [id, entity] of before.races) {
    if (entityType === 'race' && id === targetKey) continue;
    if (!same(after.races.get(id)?.metadata, entity.metadata)) fail(500, 'UNSAFE_RACE_EDIT', 'A edição atingiria outra raça.');
  }
  for (const [id, entity] of before.subraces) {
    if (entityType === 'subrace' && id === targetKey) continue;
    if (!same(after.subraces.get(id)?.metadata, entity.metadata)) fail(500, 'UNSAFE_RACE_EDIT', 'A edição atingiria outra subraça.');
  }
  const edited = entityType === 'race' ? after.races.get(raceId) : after.subraces.get(keyFor(raceId, subraceId));
  for (const [field, value] of flattened) if (!same(metadataValue(edited, field), value)) fail(500, 'UNSAFE_RACE_EDIT', `A alteração de ${field} não pôde ser confirmada.`);
  const allowed = entityType === 'race' ? [...RACE_FIELDS, ...RACE_META_FIELDS.map(field => `meta.${field}`)] : SUBRACE_FIELDS;
  for (const field of allowed) if (!flattened.some(([changed]) => changed === field) && !same(metadataValue(edited, field), metadataValue(target, field))) fail(500, 'UNSAFE_RACE_EDIT', 'A edição atingiria um campo não solicitado.');
  return { files: changedFiles, entity: edited };
}

export function editManifestRaceName(source, raceId, oldName, newName) {
  if (oldName === newName) return source;
  let manifest;
  try { manifest = JSON.parse(source); } catch { fail(500, 'INVALID_MANIFEST', 'O manifesto do projeto contém JSON inválido.'); }
  const current = manifest.raceIndex?.find(item => item.id === raceId);
  if (!current || current.name !== oldName) fail(500, 'INVALID_MANIFEST', 'O índice racial do manifesto está inconsistente.');
  if (manifest.raceIndex.some(item => item.id !== raceId && item.name.toLocaleLowerCase('pt-BR') === newName.toLocaleLowerCase('pt-BR'))) fail(400, 'DUPLICATE_NAME', 'Já existe uma raça com esse nome.');
  let program;
  try { program = parse(`(${source})`, { ecmaVersion: 'latest' }); } catch { fail(500, 'INVALID_MANIFEST', 'O manifesto não pôde ser analisado estruturalmente.'); }
  const root = propertiesOf(program.body[0].expression);
  const index = root.get('raceIndex')?.value;
  let nameNode;
  for (const element of index?.elements || []) {
    const properties = propertiesOf(element);
    if (scalar(properties.get('id')?.value) === raceId) nameNode = properties.get('name')?.value;
  }
  if (!nameNode) fail(500, 'INVALID_MANIFEST', 'A entrada racial não foi localizada no manifesto.');
  const start = nameNode.start - 1;
  const end = nameNode.end - 1;
  const updated = source.slice(0, start) + JSON.stringify(newName) + source.slice(end);
  let actual;
  try { actual = JSON.parse(updated); } catch { fail(500, 'UNSAFE_MANIFEST_EDIT', 'A sincronização do manifesto produziria JSON inválido.'); }
  const expected = structuredClone(manifest);
  expected.raceIndex.find(item => item.id === raceId).name = newName;
  if (JSON.stringify(actual) !== JSON.stringify(expected)) fail(500, 'UNSAFE_MANIFEST_EDIT', 'A sincronização alteraria outro campo do manifesto.');
  return updated;
}

export const raceSourceInternals = Object.freeze({ keyFor, slug });
