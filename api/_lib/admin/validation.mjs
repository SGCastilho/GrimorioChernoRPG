import { ART_FILES, imageHosts } from './config.mjs';
import { CLASS_METADATA_FIELDS, SOURCE_METADATA_FIELDS, SUBCLASS_METADATA_FIELDS } from './metadata-source.mjs';
import { fail } from './errors.mjs';

function exactKeys(value, allowed, label) {
  if (!value || Array.isArray(value) || typeof value !== 'object' || Object.getPrototypeOf(value) !== Object.prototype) {
    fail(400, 'INVALID_PAYLOAD', `${label} deve ser um objeto.`);
  }
  const extras = Object.keys(value).filter(key => !allowed.includes(key));
  if (extras.length) fail(400, 'INVALID_FIELD', `Campo não permitido em ${label}: ${extras[0]}.`);
}

function validImage(value) {
  if (typeof value !== 'string' || value.length > 2048 || /[\u0000-\u001f]/.test(value)) return false;
  if (value === '') return true;
  if (/^assets\/[A-Za-z0-9._~!$&'()+,;=@%/-]+$/.test(value) && !value.includes('..') && !value.includes('//')) return true;
  try {
    const url = new URL(value);
    return url.protocol === 'https:' && !url.username && !url.password && imageHosts().has(url.hostname.toLowerCase());
  } catch {
    return false;
  }
}

function validPosition(value) {
  if (typeof value !== 'string' || value.length > 40 || value.trim() !== value) return false;
  const tokens = value.split(/\s+/);
  if (tokens.length < 1 || tokens.length > 2) return false;
  const validTokens = tokens.every(token => /^(left|center|right|top|bottom)$/.test(token) || (/^(?:\d{1,2}(?:\.\d+)?|100(?:\.0+)?)%$/.test(token) && Number.parseFloat(token) <= 100));
  if (!validTokens || tokens.length === 1) return validTokens;
  const horizontal = token => token === 'left' || token === 'right';
  const vertical = token => token === 'top' || token === 'bottom';
  return !(horizontal(tokens[0]) && horizontal(tokens[1])) && !(vertical(tokens[0]) && vertical(tokens[1]));
}

function validNumber(value, minimum, maximum) {
  return typeof value === 'number' && Number.isFinite(value) && value >= minimum && value <= maximum;
}

function validateFields(kind, fields) {
  exactKeys(fields, ART_FILES[kind].fields, kind);
  if (!Object.keys(fields).length) fail(400, 'EMPTY_CHANGES', 'Informe ao menos uma alteração.');
  for (const [field, value] of Object.entries(fields)) {
    const valid = field === 'image' ? validImage(value)
      : field === 'position' ? validPosition(value)
      : field === 'blur' ? validNumber(value, 0, 12)
      : field === 'overlay' ? validNumber(value, 0, 0.9)
      : field === 'scale' ? validNumber(value, 1, 1.25)
      : false;
    if (!valid) fail(400, 'INVALID_VALUE', `Valor inválido para ${kind}.${field}.`);
  }
}

export function validateLoginPayload(payload) {
  exactKeys(payload, ['password'], 'login');
  if (typeof payload.password !== 'string' || payload.password.length < 1 || payload.password.length > 256) {
    fail(400, 'INVALID_CREDENTIALS', 'Credencial administrativa inválida.');
  }
  return payload.password;
}

export function validateSavePayload(payload, classIds) {
  exactKeys(payload, ['classId', 'changes', 'expected'], 'payload');
  if (typeof payload.classId !== 'string' || !classIds.has(payload.classId)) fail(400, 'UNKNOWN_CLASS', 'A classe informada não existe no Grimório.');
  exactKeys(payload.changes, Object.keys(ART_FILES), 'changes');
  if (!Object.keys(payload.changes).length) fail(400, 'EMPTY_CHANGES', 'Nenhuma alteração foi informada.');
  for (const [kind, fields] of Object.entries(payload.changes)) validateFields(kind, fields);
  exactKeys(payload.expected, ['coverEntryHash', 'detailArtEntryHash'], 'expected');
  for (const kind of Object.keys(payload.changes)) {
    const key = kind === 'cover' ? 'coverEntryHash' : 'detailArtEntryHash';
    const value = payload.expected[key];
    if (typeof value !== 'string' || value.length < 32 || value.length > 128) fail(400, 'INVALID_REVISION', 'A revisão esperada é inválida.');
  }
  return payload;
}

function validText(value, minimum, maximum) {
  return typeof value === 'string' && value.length >= minimum && value.length <= maximum && value.trim() === value && !/[\u0000-\u0008\u000b\u000c\u000e-\u001f]/.test(value);
}

function validateMetadataFields(type, changes, current) {
  const allowed = type === 'class' ? CLASS_METADATA_FIELDS : SUBCLASS_METADATA_FIELDS;
  exactKeys(changes, [...allowed, 'source'], 'changes');
  if (!Object.keys(changes).length) fail(400, 'EMPTY_CHANGES', 'Nenhuma alteração foi informada.');
  const limits = {
    name: [1, 100], originalName: [0, 100], desc: [1, 16000], hitDie: [2, 4], ability: [1, 200], saves: [1, 300],
    armor: [1, 1000], weapons: [1, 1000], tools: [1, 1000], skills: [1, 1500], sigilKey: [1, 64], color: [7, 7]
  };
  for (const [field, value] of Object.entries(changes)) {
    if (field === 'source') continue;
    let valid = false;
    if (field === 'tablePage') valid = Number.isInteger(value) && value >= 1 && value <= 9999;
    else if (field === 'sourcePage') valid = (Number.isInteger(value) && value >= 1 && value <= 9999) || (validText(value, 1, 20) && /^\d+(?:[–-]\d+)?$/.test(value));
    else if (field === 'hitDie') valid = /^d(?:4|6|8|10|12|20)$/.test(value);
    else if (field === 'sigilKey') valid = validText(value, ...limits[field]) && /^[A-Za-z0-9-]+$/.test(value);
    else if (field === 'color') valid = /^#[0-9a-fA-F]{6}$/.test(value);
    else if (limits[field]) valid = validText(value, ...limits[field]);
    if (!valid) fail(400, 'INVALID_VALUE', `Valor inválido para ${field}.`);
  }
  if (changes.source !== undefined) {
    exactKeys(changes.source, SOURCE_METADATA_FIELDS, 'changes.source');
    if (!Object.keys(changes.source).length) fail(400, 'EMPTY_CHANGES', 'Nenhuma alteração de fonte foi informada.');
    for (const [field, value] of Object.entries(changes.source)) {
      const maximum = field === 'title' ? 250 : field === 'chapter' ? 200 : 60;
      if (!validText(value, 1, maximum)) fail(400, 'INVALID_VALUE', `Valor inválido para source.${field}.`);
    }
    const effective = { ...current.metadata.source, ...changes.source };
    const previouslyAbsent = SOURCE_METADATA_FIELDS.every(field => !current.metadata.source[field]);
    if (previouslyAbsent && SOURCE_METADATA_FIELDS.some(field => !effective[field])) fail(400, 'INCOMPLETE_SOURCE', 'Ao adicionar uma fonte, informe título, páginas e capítulo.');
  }
}

export function validateMetadataSavePayload(payload, registry) {
  exactKeys(payload, ['entityType', 'entityId', 'changes', 'expected'], 'payload');
  if (!['class', 'subclass'].includes(payload.entityType)) fail(400, 'INVALID_ENTITY_TYPE', 'Tipo de entidade não permitido.');
  if (typeof payload.entityId !== 'string' || !/^[a-z0-9][a-z0-9-]{0,99}$/.test(payload.entityId)) fail(400, 'UNKNOWN_ENTITY', 'A entidade informada não existe no Grimório.');
  const collection = payload.entityType === 'class' ? registry.classes : registry.subclasses;
  const current = collection.get(payload.entityId);
  if (!current) fail(400, 'UNKNOWN_ENTITY', 'A entidade informada não existe no Grimório.');
  validateMetadataFields(payload.entityType, payload.changes, current);
  exactKeys(payload.expected, ['entryHash'], 'expected');
  if (typeof payload.expected.entryHash !== 'string' || !/^[0-9a-f]{64}$/i.test(payload.expected.entryHash)) fail(400, 'INVALID_REVISION', 'A revisão esperada é inválida.');
  if (payload.changes.name) {
    const peers = payload.entityType === 'class' ? [...registry.classes.values()] : [...registry.subclasses.values()].filter(item => item.classId === current.classId);
    if (peers.some(item => item.id !== current.id && item.metadata.name.toLocaleLowerCase('pt-BR') === payload.changes.name.toLocaleLowerCase('pt-BR'))) fail(400, 'DUPLICATE_NAME', 'Já existe uma entidade desse grupo com esse nome.');
  }
  return { ...payload, current };
}

export const validationInternals = Object.freeze({ validImage, validPosition, validText });
