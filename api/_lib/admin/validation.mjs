import { ART_FILES, RACE_ART_FILES, imageHosts } from './config.mjs';
import { fail } from './errors.mjs';

function exactKeys(value, allowed, label) {
  if (!value || Array.isArray(value) || typeof value !== 'object' || Object.getPrototypeOf(value) !== Object.prototype) fail(400, 'INVALID_PAYLOAD', `${label} deve ser um objeto.`);
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

function validAlt(value) {
  return typeof value === 'string' && value.length <= 240 && !/[\u0000-\u001f]/.test(value) && value.trim() === value;
}

function validateFields(kind, fields, descriptors = ART_FILES) {
  exactKeys(fields, descriptors[kind].fields, kind);
  if (!Object.keys(fields).length) fail(400, 'EMPTY_CHANGES', 'Informe ao menos uma alteração.');
  for (const [field, value] of Object.entries(fields)) {
    const valid = field === 'image' ? validImage(value)
      : field === 'alt' ? validAlt(value)
      : field === 'position' ? validPosition(value)
      : field === 'blur' ? validNumber(value, 0, 12)
      : field === 'overlay' ? validNumber(value, 0, 0.9)
      : field === 'scale' ? validNumber(value, 1, 1.25) : false;
    if (!valid) fail(400, 'INVALID_VALUE', `Valor inválido para ${kind}.${field}.`);
  }
}

function validateArtPayload(payload, ids, descriptors, idField, entityLabel, unknownCode) {
  exactKeys(payload, [idField, 'changes', 'expected'], 'payload');
  const entityId = payload[idField];
  if (typeof entityId !== 'string' || !ids.has(entityId)) fail(400, unknownCode, `A ${entityLabel} informada não existe no Grimório.`);
  exactKeys(payload.changes, Object.keys(descriptors), 'changes');
  if (!Object.keys(payload.changes).length) fail(400, 'EMPTY_CHANGES', 'Nenhuma alteração foi informada.');
  for (const [kind, fields] of Object.entries(payload.changes)) validateFields(kind, fields, descriptors);
  exactKeys(payload.expected, ['coverFileSha', 'coverEntryHash', 'detailFileSha', 'detailEntryHash'], 'expected');
  for (const kind of Object.keys(payload.changes)) {
    const prefix = kind === 'cover' ? 'cover' : 'detail';
    for (const suffix of ['FileSha', 'EntryHash']) {
      const value = payload.expected[`${prefix}${suffix}`];
      if (typeof value !== 'string' || value.length < 8 || value.length > 128) fail(400, 'INVALID_REVISION', 'A revisão esperada é inválida.');
    }
  }
  return payload;
}

export function validateLoginPayload(payload) {
  exactKeys(payload, ['password'], 'login');
  if (typeof payload.password !== 'string' || payload.password.length < 1 || payload.password.length > 256) fail(400, 'INVALID_CREDENTIALS', 'Credencial administrativa inválida.');
  return payload.password;
}

export function validateSavePayload(payload, classIds) {
  return validateArtPayload(payload, classIds, ART_FILES, 'classId', 'classe', 'UNKNOWN_CLASS');
}

export function validateRaceArtSavePayload(payload, raceIds) {
  return validateArtPayload(payload, raceIds, RACE_ART_FILES, 'raceId', 'raça', 'UNKNOWN_RACE');
}

export function validateEffectiveRaceArt(entry) {
  if (entry.image && !validAlt(entry.alt)) fail(400, 'INVALID_VALUE', 'Toda imagem racial precisa de uma descrição acessível válida.');
  if (entry.image && !entry.alt) fail(400, 'INVALID_VALUE', 'Toda imagem racial precisa de uma descrição acessível.');
  return entry;
}

export const validationInternals = { validImage, validPosition, validAlt };
