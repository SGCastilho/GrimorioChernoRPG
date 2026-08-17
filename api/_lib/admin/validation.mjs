import { ART_FILES, imageHosts } from './config.mjs';
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

export const validationInternals = Object.freeze({ validImage, validPosition });
