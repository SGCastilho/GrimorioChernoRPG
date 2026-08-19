import { createHash } from 'node:crypto';
import { parse } from 'acorn';
import { FEAT_CONTENT_FILES } from './config.mjs';
import { fail } from './errors.mjs';

export const FEAT_FIELDS = Object.freeze([
  'name', 'originalName', 'aliases', 'sourcePage', 'category', 'description',
  'prerequisite', 'originalPrerequisite', 'prerequisites', 'repeatable', 'choices'
]);

export const FEAT_DEFAULTS = Object.freeze({
  originalName: '', aliases: [], category: '', prerequisite: '', originalPrerequisite: '', prerequisites: [], repeatable: false, choices: []
});

const hash = value => createHash('sha256').update(value).digest('hex');

function propertyName(property) {
  if (property.type !== 'Property' || property.computed || property.kind !== 'init' || property.method) fail(500, 'INVALID_FEAT_SOURCE', 'Um arquivo de talentos contém uma propriedade não suportada.');
  if (property.key.type === 'Identifier') return property.key.name;
  if (property.key.type === 'Literal' && typeof property.key.value === 'string') return property.key.value;
  fail(500, 'INVALID_FEAT_SOURCE', 'Um arquivo de talentos contém uma chave não suportada.');
}

function propertiesOf(node) {
  if (node?.type !== 'ObjectExpression') fail(500, 'INVALID_FEAT_SOURCE', 'Um talento não usa objeto literal.');
  const properties = new Map();
  for (const property of node.properties) {
    const name = propertyName(property);
    if (properties.has(name)) fail(500, 'INVALID_FEAT_SOURCE', `O talento contém a propriedade duplicada ${name}.`);
    properties.set(name, property);
  }
  return properties;
}

function literalValue(node) {
  if (node?.type === 'Literal' && ['string', 'number', 'boolean'].includes(typeof node.value)) return node.value;
  if (node?.type === 'UnaryExpression' && ['+', '-'].includes(node.operator) && node.argument?.type === 'Literal' && typeof node.argument.value === 'number') return node.operator === '-' ? -node.argument.value : node.argument.value;
  if (node?.type === 'ArrayExpression') return node.elements.map(literalValue);
  if (node?.type === 'ObjectExpression') return Object.fromEntries([...propertiesOf(node)].map(([name, property]) => [name, literalValue(property.value)]));
  fail(500, 'INVALID_FEAT_SOURCE', 'Os campos editáveis de talentos devem usar valores literais seguros.');
}

function walk(root, visit) {
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

function findFeatArray(program) {
  let result;
  walk(program, node => {
    if (node.type !== 'VariableDeclarator' || node.id?.type !== 'Identifier' || node.id.name !== 'feats') return;
    const candidate = node.init?.type === 'ArrayExpression' ? node.init : node.init?.type === 'CallExpression' && node.init.callee?.type === 'MemberExpression' ? node.init.callee.object : null;
    if (candidate?.type !== 'ArrayExpression' || result) {
      if (candidate || result) fail(500, 'INVALID_FEAT_SOURCE', 'A declaração feats é ambígua ou inválida.');
      return;
    }
    result = candidate;
  });
  if (!result) fail(500, 'INVALID_FEAT_SOURCE', 'O array literal feats não foi encontrado.');
  return result;
}

function findCatalog(program) {
  let catalog;
  walk(program, node => {
    if (node.type !== 'CallExpression' || node.callee?.type !== 'MemberExpression' || node.callee.property?.name !== 'registerFeatCatalog') return;
    if (catalog || node.arguments.length !== 1) fail(500, 'INVALID_FEAT_SOURCE', 'O registro do catálogo de talentos é ambíguo.');
    const properties = propertiesOf(node.arguments[0]);
    catalog = Object.fromEntries(['id', 'sourceId', 'label', 'chapter', 'pages'].map(field => [field, literalValue(properties.get(field)?.value)]));
  });
  if (!catalog || Object.values(catalog).some(value => typeof value !== 'string' || !value)) fail(500, 'INVALID_FEAT_SOURCE', 'Os metadados do catálogo de talentos são inválidos.');
  return catalog;
}

function featFromNode(source, path, catalog, node) {
  const properties = propertiesOf(node);
  const id = literalValue(properties.get('id')?.value);
  if (typeof id !== 'string') fail(500, 'INVALID_FEAT_SOURCE', 'Um talento não possui ID literal válido.');
  const metadata = { ...FEAT_DEFAULTS };
  for (const field of FEAT_FIELDS) {
    const property = properties.get(field);
    if (property) metadata[field] = literalValue(property.value);
  }
  if (typeof metadata.name !== 'string' || typeof metadata.description !== 'string' || !Number.isInteger(metadata.sourcePage)) fail(500, 'INVALID_FEAT_SOURCE', `O talento ${id} não possui os metadados obrigatórios.`);
  return { id, path, catalog, metadata, node, properties, raw: source.slice(node.start, node.end), entryHash: hash(source.slice(node.start, node.end)) };
}

export function parseFeatSource(source, path) {
  let program;
  try { program = parse(source, { ecmaVersion: 'latest', sourceType: 'script' }); }
  catch { fail(500, 'INVALID_FEAT_SOURCE', `O arquivo ${path} contém JavaScript inválido.`); }
  const catalog = findCatalog(program);
  const array = findFeatArray(program);
  const feats = array.elements.map(node => featFromNode(source, path, catalog, node));
  const ids = new Set();
  for (const feat of feats) {
    if (ids.has(feat.id)) fail(500, 'DUPLICATE_FEAT', `O ID ${feat.id} está duplicado no catálogo.`);
    ids.add(feat.id);
  }
  return { catalog, feats };
}

export function parseFeatFiles(files) {
  const catalogs = [];
  const feats = new Map();
  for (const path of FEAT_CONTENT_FILES) {
    const source = files[path]?.content;
    if (typeof source !== 'string') fail(500, 'FILE_NOT_FOUND', 'Um arquivo de talentos configurado não foi encontrado.');
    const parsed = parseFeatSource(source, path);
    catalogs.push({ ...parsed.catalog, path, featIds: parsed.feats.map(feat => feat.id) });
    for (const feat of parsed.feats) {
      if (feats.has(feat.id)) fail(500, 'DUPLICATE_FEAT', `O ID ${feat.id} está duplicado entre catálogos.`);
      feats.set(feat.id, feat);
    }
  }
  return { catalogs, feats };
}

function serialized(value, source, anchor) {
  if (!value || typeof value !== 'object') return JSON.stringify(value);
  const newline = source.includes('\r\n') ? '\r\n' : '\n';
  const lineStart = source.lastIndexOf('\n', anchor - 1) + 1;
  const indent = source.slice(lineStart, anchor).match(/^\s*/)?.[0] || '';
  return JSON.stringify(value, null, 2).replace(/\n/g, `${newline}${indent}`);
}

function insertion(source, target, missing) {
  const names = Object.keys(missing);
  if (!names.length) return null;
  const properties = [...target.properties.values()];
  const newline = source.includes('\r\n') ? '\r\n' : '\n';
  const first = properties[0];
  const lineStart = first ? source.lastIndexOf('\n', first.start - 1) + 1 : target.node.start + 1;
  const indent = first ? source.slice(lineStart, first.start).match(/^\s*/)?.[0] || '  ' : '  ';
  const closingStart = source.lastIndexOf('\n', target.node.end - 1) + 1;
  const closingIndent = source.slice(closingStart, target.node.end - 1).match(/^\s*/)?.[0] || '';
  const last = properties.at(-1);
  const comma = last && !source.slice(last.end, target.node.end - 1).includes(',') ? ',' : '';
  const lines = names.map(name => `${indent}${JSON.stringify(name)}: ${serialized(missing[name], source, lineStart)}`).join(`,${newline}`);
  return { start: target.node.end - 1, end: target.node.end - 1, text: `${comma}${newline}${lines}${newline}${closingIndent}` };
}

export function editFeatSource(source, path, featId, changes) {
  const before = parseFeatSource(source, path);
  const target = before.feats.find(feat => feat.id === featId);
  if (!target) fail(400, 'UNKNOWN_FEAT', 'O talento informado não existe no Grimório.');
  const replacements = [];
  const missing = {};
  for (const [field, value] of Object.entries(changes)) {
    const property = target.properties.get(field);
    if (property) replacements.push({ start: property.value.start, end: property.value.end, text: serialized(value, source, property.start) });
    else missing[field] = value;
  }
  const addition = insertion(source, target, missing);
  if (addition) replacements.push(addition);
  let updated = source;
  for (const replacement of replacements.sort((a, b) => b.start - a.start)) updated = updated.slice(0, replacement.start) + replacement.text + updated.slice(replacement.end);
  const after = parseFeatSource(updated, path);
  if (before.feats.length !== after.feats.length || before.catalog.id !== after.catalog.id) fail(500, 'UNSAFE_FEAT_EDIT', 'A edição alteraria a estrutura do catálogo de talentos.');
  for (const feat of before.feats) {
    const current = after.feats.find(candidate => candidate.id === feat.id);
    if (!current) fail(500, 'UNSAFE_FEAT_EDIT', 'A edição removeria um talento do catálogo.');
    if (feat.id !== featId && current.raw !== feat.raw) fail(500, 'UNSAFE_FEAT_EDIT', 'A edição atingiria outro talento.');
  }
  const edited = after.feats.find(feat => feat.id === featId);
  for (const [field, value] of Object.entries(changes)) if (JSON.stringify(edited.metadata[field]) !== JSON.stringify(value)) fail(500, 'UNSAFE_FEAT_EDIT', `A alteração de ${field} não pôde ser confirmada.`);
  for (const field of FEAT_FIELDS) if (!(field in changes) && JSON.stringify(edited.metadata[field]) !== JSON.stringify(target.metadata[field])) fail(500, 'UNSAFE_FEAT_EDIT', 'A edição atingiria um campo não solicitado.');
  return { source: updated, feat: edited };
}
