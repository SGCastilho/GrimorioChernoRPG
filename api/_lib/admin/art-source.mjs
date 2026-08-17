import { createHash } from 'node:crypto';
import { parse } from 'acorn';
import { ART_FILES } from './config.mjs';
import { fail } from './errors.mjs';

const stable = value => JSON.stringify(value, Object.keys(value).sort());
export const sourceHash = source => createHash('sha256').update(source).digest('hex');
export const entryHash = entry => createHash('sha256').update(stable(entry)).digest('hex');

function propertyName(property) {
  if (property.type !== 'Property' || property.computed || property.kind !== 'init' || property.method || property.shorthand) {
    fail(500, 'INVALID_ART_SOURCE', 'O mapa de artes contém uma propriedade não suportada.');
  }
  if (property.key.type === 'Identifier') return property.key.name;
  if (property.key.type === 'Literal' && typeof property.key.value === 'string') return property.key.value;
  fail(500, 'INVALID_ART_SOURCE', 'O mapa de artes contém uma chave não suportada.');
}

function literalValue(node) {
  if (node.type === 'Literal' && (typeof node.value === 'string' || typeof node.value === 'number')) return node.value;
  if (node.type === 'UnaryExpression' && ['+', '-'].includes(node.operator) && node.argument.type === 'Literal' && typeof node.argument.value === 'number') {
    return node.operator === '-' ? -node.argument.value : node.argument.value;
  }
  fail(500, 'INVALID_ART_SOURCE', 'Os valores dos mapas de arte devem ser literais simples.');
}

function objectProperties(node, label) {
  if (node.type !== 'ObjectExpression') fail(500, 'INVALID_ART_SOURCE', `${label} deve ser um objeto literal.`);
  const result = new Map();
  for (const property of node.properties) {
    const name = propertyName(property);
    if (result.has(name)) fail(500, 'DUPLICATE_ART_PROPERTY', `Há uma propriedade duplicada em ${label}.`);
    result.set(name, property);
  }
  return result;
}

export function parseArtSource(source, variableName) {
  let program;
  try {
    program = parse(source, { ecmaVersion: 'latest', sourceType: 'script', ranges: true });
  } catch {
    fail(500, 'INVALID_ART_SOURCE', 'Um arquivo de arte contém JavaScript inválido.');
  }
  let declaration;
  const stack = [...program.body];
  while (stack.length) {
    const current = stack.pop();
    if (!current || typeof current !== 'object') continue;
    if (current.type === 'VariableDeclarator' && current.id?.type === 'Identifier' && current.id.name === variableName) {
      if (declaration) fail(500, 'INVALID_ART_SOURCE', `A variável ${variableName} foi declarada mais de uma vez.`);
      declaration = current;
    }
    for (const [key, value] of Object.entries(current)) {
      if (['start', 'end', 'range', 'loc'].includes(key)) continue;
      if (Array.isArray(value)) stack.push(...value);
      else if (value && typeof value === 'object') stack.push(value);
    }
  }
  if (!declaration?.init) fail(500, 'INVALID_ART_SOURCE', `A variável ${variableName} não foi encontrada.`);
  const entryProperties = objectProperties(declaration.init, variableName);
  const entries = {};
  const nodes = new Map();
  for (const [classId, property] of entryProperties) {
    const fieldProperties = objectProperties(property.value, `${variableName}.${classId}`);
    const entry = {};
    for (const [field, fieldProperty] of fieldProperties) entry[field] = literalValue(fieldProperty.value);
    entries[classId] = entry;
    nodes.set(classId, { object: property.value, properties: fieldProperties });
  }
  return { entries, nodes };
}

export function effectiveEntry(kind, entry, descriptors = ART_FILES) {
  return { ...descriptors[kind].defaults, ...entry };
}

function insertedProperties(source, objectNode, properties, changes) {
  const missing = Object.keys(changes).filter(field => !properties.has(field));
  if (!missing.length) return null;
  const existing = [...properties.values()];
  const newline = source.includes('\r\n') ? '\r\n' : '\n';
  let indent = '      ';
  if (existing.length) {
    const lineStart = source.lastIndexOf('\n', existing[0].start - 1) + 1;
    indent = source.slice(lineStart, existing[0].start).match(/^\s*/)?.[0] || indent;
  }
  const closingLineStart = source.lastIndexOf('\n', objectNode.end - 1) + 1;
  const closingIndent = source.slice(closingLineStart, objectNode.end - 1).match(/^\s*/)?.[0] || '';
  const last = existing.at(-1);
  const hasTrailingComma = last ? source.slice(last.end, objectNode.end - 1).includes(',') : false;
  const prefix = last && !hasTrailingComma ? ',' : '';
  const lines = missing.map(field => `${indent}${field}: ${JSON.stringify(changes[field])}`).join(`,${newline}`);
  return { start: objectNode.end - 1, end: objectNode.end - 1, text: `${prefix}${newline}${lines}${newline}${closingIndent}` };
}

export function editArtSource(source, kind, classId, changes, descriptors = ART_FILES) {
  const descriptor = descriptors[kind];
  if (!descriptor) fail(400, 'INVALID_ART_KIND', 'Tipo de arte não permitido.');
  const before = parseArtSource(source, descriptor.variable);
  const target = before.nodes.get(classId);
  if (!target) fail(400, 'UNKNOWN_CLASS', 'A classe não possui entrada no mapa de artes.');
  const replacements = [];
  for (const [field, value] of Object.entries(changes)) {
    const property = target.properties.get(field);
    if (property) replacements.push({ start: property.value.start, end: property.value.end, text: JSON.stringify(value) });
  }
  const insertion = insertedProperties(source, target.object, target.properties, changes);
  if (insertion) replacements.push(insertion);
  let updated = source;
  for (const replacement of replacements.sort((a, b) => b.start - a.start)) {
    updated = updated.slice(0, replacement.start) + replacement.text + updated.slice(replacement.end);
  }
  const after = parseArtSource(updated, descriptor.variable);
  const beforeIds = Object.keys(before.entries);
  if (JSON.stringify(beforeIds) !== JSON.stringify(Object.keys(after.entries))) fail(500, 'UNSAFE_ART_EDIT', 'A edição alteraria a estrutura do mapa de artes.');
  for (const id of beforeIds) {
    if (id !== classId && stable(before.entries[id]) !== stable(after.entries[id])) fail(500, 'UNSAFE_ART_EDIT', 'A edição atingiria outra classe.');
  }
  for (const [field, value] of Object.entries(before.entries[classId])) {
    if (!(field in changes) && after.entries[classId][field] !== value) fail(500, 'UNSAFE_ART_EDIT', 'A edição atingiria um campo não solicitado.');
  }
  for (const [field, value] of Object.entries(changes)) {
    if (after.entries[classId][field] !== value) fail(500, 'UNSAFE_ART_EDIT', 'A alteração não pôde ser confirmada após a edição estrutural.');
  }
  return { source: updated, before: before.entries[classId], after: after.entries[classId], entryHash: entryHash(after.entries[classId]) };
}
