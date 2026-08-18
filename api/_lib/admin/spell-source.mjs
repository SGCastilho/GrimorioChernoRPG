import { createHash } from 'node:crypto';
import { parse } from 'acorn';
import { SPELL_CONTENT_FILES } from './config.mjs';
import { fail } from './errors.mjs';

export const SPELL_FIELDS = Object.freeze([
  'name', 'originalName', 'level', 'levelLabel', 'school', 'time', 'range', 'comp',
  'material', 'duration', 'classes', 'ritual', 'concentration', 'desc', 'higher',
  'sourcePage', 'sourceNote', 'traits'
]);

export const SPELL_DEFAULTS = Object.freeze({
  originalName: '', levelLabel: '', material: '', higher: '', sourcePage: null,
  sourceNote: '', traits: []
});

const hash = value => createHash('sha256').update(value).digest('hex');

function propertyName(property) {
  if (property.type !== 'Property' || property.computed || property.kind !== 'init' || property.method) fail(500, 'INVALID_SPELL_SOURCE', 'Um arquivo de magias contém uma propriedade não suportada.');
  if (property.key.type === 'Identifier') return property.key.name;
  if (property.key.type === 'Literal' && typeof property.key.value === 'string') return property.key.value;
  fail(500, 'INVALID_SPELL_SOURCE', 'Um arquivo de magias contém uma chave não suportada.');
}

function directProperties(node) {
  if (node?.type !== 'ObjectExpression') fail(500, 'INVALID_SPELL_SOURCE', 'Uma magia não usa objeto literal.');
  const properties = new Map();
  for (const property of node.properties) {
    if (property.type === 'SpreadElement') continue;
    const name = propertyName(property);
    if (properties.has(name)) fail(500, 'INVALID_SPELL_SOURCE', `Uma magia contém a propriedade duplicada ${name}.`);
    properties.set(name, property);
  }
  return properties;
}

function literalValue(node, environment = new Map()) {
  if (node?.type === 'Literal' && (node.value === null || ['string', 'number', 'boolean'].includes(typeof node.value))) return node.value;
  if (node?.type === 'Identifier' && environment.has(node.name)) return environment.get(node.name);
  if (node?.type === 'UnaryExpression' && ['+', '-'].includes(node.operator) && node.argument?.type === 'Literal' && typeof node.argument.value === 'number') return node.operator === '-' ? -node.argument.value : node.argument.value;
  if (node?.type === 'ArrayExpression') return node.elements.map(item => literalValue(item, environment));
  if (node?.type === 'ObjectExpression') {
    const result = {};
    for (const property of node.properties) {
      if (property.type === 'SpreadElement') {
        const spread = literalValue(property.argument, environment);
        if (!spread || Array.isArray(spread) || typeof spread !== 'object') fail(500, 'INVALID_SPELL_SOURCE', 'Uma expansão de magia não é um objeto literal seguro.');
        Object.assign(result, spread);
      } else result[propertyName(property)] = literalValue(property.value, environment);
    }
    return result;
  }
  fail(500, 'INVALID_SPELL_SOURCE', 'Os campos de magias devem usar valores literais seguros.');
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

function literalEnvironment(program) {
  const declarations = [];
  walk(program, node => {
    if (node.type === 'VariableDeclarator' && node.id?.type === 'Identifier' && node.init) declarations.push(node);
  });
  declarations.sort((left, right) => left.start - right.start);
  const environment = new Map();
  let changed = true;
  while (changed) {
    changed = false;
    for (const declaration of declarations) {
      if (environment.has(declaration.id.name)) continue;
      try {
        environment.set(declaration.id.name, literalValue(declaration.init, environment));
        changed = true;
      } catch (error) {
        if (error?.code !== 'INVALID_SPELL_SOURCE') throw error;
      }
    }
  }
  return environment;
}

function findSpellArray(program) {
  const candidates = [];
  walk(program, node => {
    if (node.type !== 'ArrayExpression' || !node.elements.length || !node.elements.every(item => item?.type === 'ObjectExpression')) return;
    const spellLike = node.elements.every(item => {
      const properties = directProperties(item);
      const id = properties.get('id')?.value;
      return id?.type === 'Literal' && typeof id.value === 'string' && properties.has('name') && properties.has('desc');
    });
    if (spellLike) candidates.push(node);
  });
  candidates.sort((left, right) => right.elements.length - left.elements.length);
  if (!candidates.length || (candidates[1] && candidates[1].elements.length === candidates[0].elements.length)) fail(500, 'INVALID_SPELL_SOURCE', 'O array literal de magias não foi encontrado de forma inequívoca.');
  return candidates[0];
}

function findCatalog(program, environment) {
  let catalog;
  walk(program, node => {
    if (node.type !== 'CallExpression' || node.callee?.type !== 'MemberExpression' || node.callee.property?.name !== 'registerSpellCatalog') return;
    if (catalog || node.arguments.length !== 1) fail(500, 'INVALID_SPELL_SOURCE', 'O registro do catálogo de magias é ambíguo.');
    const properties = directProperties(node.arguments[0]);
    catalog = {
      id: literalValue(properties.get('id')?.value, environment),
      sourceId: literalValue(properties.get('sourceId')?.value, environment)
    };
  });
  if (!catalog || !Object.values(catalog).every(value => typeof value === 'string' && value)) fail(500, 'INVALID_SPELL_SOURCE', 'Os metadados do catálogo de magias são inválidos.');
  return catalog;
}

function spellFromNode(source, path, catalog, node, environment) {
  const properties = directProperties(node);
  const values = literalValue(node, environment);
  const id = values.id;
  if (typeof id !== 'string' || !id) fail(500, 'INVALID_SPELL_SOURCE', 'Uma magia não possui ID literal válido.');
  const metadata = { ...SPELL_DEFAULTS };
  for (const field of SPELL_FIELDS) if (values[field] !== undefined) metadata[field] = values[field];
  const missing = [
    typeof metadata.name === 'string' || 'name',
    (Number.isInteger(metadata.level) || metadata.level === null) || 'level',
    typeof metadata.school === 'string' || 'school',
    typeof metadata.desc === 'string' || 'desc'
  ].filter(value => typeof value === 'string');
  if (missing.length) fail(500, 'INVALID_SPELL_SOURCE', `A magia ${id} não possui os metadados obrigatórios: ${missing.join(', ')}.`);
  const raw = source.slice(node.start, node.end);
  return { id, path, catalog, metadata, node, properties, raw, entryHash: hash(`${raw}\0${JSON.stringify(metadata)}`) };
}

export function parseSpellSource(source, path) {
  let program;
  try { program = parse(source, { ecmaVersion: 'latest', sourceType: 'script' }); }
  catch { fail(500, 'INVALID_SPELL_SOURCE', `O arquivo ${path} contém JavaScript inválido.`); }
  const environment = literalEnvironment(program);
  const catalog = findCatalog(program, environment);
  const array = findSpellArray(program);
  const spells = array.elements.map(node => spellFromNode(source, path, catalog, node, environment));
  const ids = new Set();
  for (const spell of spells) {
    if (ids.has(spell.id)) fail(500, 'DUPLICATE_SPELL', `O ID ${spell.id} está duplicado no catálogo.`);
    ids.add(spell.id);
  }
  const first = literalValue(array.elements[0], environment);
  catalog.label = String(first.sourceTitle || first.source || first.category || catalog.id);
  return { catalog, spells };
}

export function parseSpellFiles(files) {
  const catalogs = [];
  const spells = new Map();
  for (const path of SPELL_CONTENT_FILES) {
    const source = files[path]?.content;
    if (typeof source !== 'string') fail(500, 'FILE_NOT_FOUND', 'Um arquivo de magias configurado não foi encontrado.');
    const parsed = parseSpellSource(source, path);
    catalogs.push({ ...parsed.catalog, path, spellIds: parsed.spells.map(spell => spell.id) });
    for (const spell of parsed.spells) {
      if (spells.has(spell.id)) fail(500, 'DUPLICATE_SPELL', `O ID ${spell.id} está duplicado entre catálogos.`);
      spells.set(spell.id, spell);
    }
  }
  return { catalogs, spells };
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
  const direct = [...target.properties.values()];
  const newline = source.includes('\r\n') ? '\r\n' : '\n';
  const first = direct[0];
  const lineStart = first ? source.lastIndexOf('\n', first.start - 1) + 1 : target.node.start + 1;
  const indent = first ? source.slice(lineStart, first.start).match(/^\s*/)?.[0] || '  ' : '  ';
  const closingStart = source.lastIndexOf('\n', target.node.end - 1) + 1;
  const closingIndent = source.slice(closingStart, target.node.end - 1).match(/^\s*/)?.[0] || '';
  const last = direct.at(-1);
  const comma = last && !source.slice(last.end, target.node.end - 1).includes(',') ? ',' : '';
  const lines = names.map(name => `${indent}${JSON.stringify(name)}: ${serialized(missing[name], source, lineStart)}`).join(`,${newline}`);
  return { start: target.node.end - 1, end: target.node.end - 1, text: `${comma}${newline}${lines}${newline}${closingIndent}` };
}

export function editSpellSource(source, path, spellId, changes) {
  const before = parseSpellSource(source, path);
  const target = before.spells.find(spell => spell.id === spellId);
  if (!target) fail(400, 'UNKNOWN_SPELL', 'A magia informada não existe no Grimório.');
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
  for (const replacement of replacements.sort((left, right) => right.start - left.start)) updated = updated.slice(0, replacement.start) + replacement.text + updated.slice(replacement.end);
  const after = parseSpellSource(updated, path);
  if (before.spells.length !== after.spells.length || before.catalog.id !== after.catalog.id || before.catalog.sourceId !== after.catalog.sourceId) fail(500, 'UNSAFE_SPELL_EDIT', 'A edição alteraria a estrutura do catálogo de magias.');
  for (const spell of before.spells) {
    const current = after.spells.find(candidate => candidate.id === spell.id);
    if (!current) fail(500, 'UNSAFE_SPELL_EDIT', 'A edição removeria uma magia do catálogo.');
    if (spell.id !== spellId && current.raw !== spell.raw) fail(500, 'UNSAFE_SPELL_EDIT', 'A edição atingiria outra magia.');
  }
  const edited = after.spells.find(spell => spell.id === spellId);
  for (const [field, value] of Object.entries(changes)) if (JSON.stringify(edited.metadata[field]) !== JSON.stringify(value)) fail(500, 'UNSAFE_SPELL_EDIT', `A alteração de ${field} não pôde ser confirmada.`);
  for (const field of SPELL_FIELDS) if (!(field in changes) && JSON.stringify(edited.metadata[field]) !== JSON.stringify(target.metadata[field])) fail(500, 'UNSAFE_SPELL_EDIT', 'A edição atingiria um campo não solicitado.');
  return { source: updated, spell: edited };
}
