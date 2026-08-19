import { createHash, createHmac, randomBytes, scrypt as scryptCallback, timingSafeEqual } from 'node:crypto';
import { promisify } from 'node:util';
import { authConfig, cookieName, isProduction } from './config.mjs';
import { fail } from './errors.mjs';

const scrypt = promisify(scryptCallback);
const SESSION_SECONDS = 8 * 60 * 60;
const SCRYPT = Object.freeze({ N: 16384, r: 8, p: 1, length: 64 });
const encode = value => Buffer.from(value).toString('base64url');
const sign = (value, secret) => createHmac('sha256', secret).update(value).digest();
const same = (left, right) => left.length === right.length && timingSafeEqual(left, right);

export async function hashPassword(password, salt = randomBytes(16)) {
  if (typeof password !== 'string' || password.length < 12 || password.length > 256) {
    fail(400, 'INVALID_PASSWORD', 'A senha deve ter entre 12 e 256 caracteres.');
  }
  const derived = await scrypt(password, salt, SCRYPT.length, {
    N: SCRYPT.N,
    r: SCRYPT.r,
    p: SCRYPT.p,
    maxmem: 64 * 1024 * 1024
  });
  return `scrypt$${SCRYPT.N}$${SCRYPT.r}$${SCRYPT.p}$${encode(salt)}$${encode(derived)}`;
}

export async function verifyPassword(password, encoded) {
  try {
    if (typeof password !== 'string' || password.length > 256) return false;
    const [algorithm, n, r, p, saltValue, hashValue, extra] = String(encoded).split('$');
    if (algorithm !== 'scrypt' || extra !== undefined) return false;
    const options = { N: Number(n), r: Number(r), p: Number(p) };
    if (options.N !== SCRYPT.N || options.r !== SCRYPT.r || options.p !== SCRYPT.p) return false;
    const expected = Buffer.from(hashValue, 'base64url');
    if (expected.length !== SCRYPT.length) return false;
    const actual = await scrypt(password, Buffer.from(saltValue, 'base64url'), expected.length, {
      ...options,
      maxmem: 64 * 1024 * 1024
    });
    return same(actual, expected);
  } catch {
    return false;
  }
}

function authVersion(passwordHash) {
  return createHash('sha256').update(passwordHash).digest('base64url').slice(0, 16);
}

export function createSession(now = Date.now()) {
  const { passwordHash, sessionSecret } = authConfig();
  const issuedAt = Math.floor(now / 1000);
  const payload = {
    v: 1,
    iat: issuedAt,
    exp: issuedAt + SESSION_SECONDS,
    nonce: randomBytes(18).toString('base64url'),
    av: authVersion(passwordHash)
  };
  const body = encode(JSON.stringify(payload));
  return { token: `${body}.${encode(sign(body, sessionSecret))}`, payload };
}

export function parseCookies(header = '') {
  return Object.fromEntries(String(header).split(';').map(part => part.trim()).filter(Boolean).map(part => {
    const index = part.indexOf('=');
    return index < 0 ? [part, ''] : [part.slice(0, index), part.slice(index + 1)];
  }));
}

export function authenticate(request, now = Date.now()) {
  const { passwordHash, sessionSecret } = authConfig();
  const token = parseCookies(request.headers.get('cookie') || '')[cookieName()];
  try {
    if (!token) throw new Error('missing');
    const [body, signature, extra] = token.split('.');
    if (!body || !signature || extra !== undefined) throw new Error('format');
    const expectedSignature = sign(body, sessionSecret);
    const actualSignature = Buffer.from(signature, 'base64url');
    if (!same(expectedSignature, actualSignature)) throw new Error('signature');
    const payload = JSON.parse(Buffer.from(body, 'base64url').toString('utf8'));
    const nowSeconds = Math.floor(now / 1000);
    if (payload.v !== 1 || payload.exp <= nowSeconds || payload.iat > nowSeconds + 60 || payload.av !== authVersion(passwordHash)) throw new Error('expired');
    return payload;
  } catch {
    fail(401, 'UNAUTHENTICATED', 'A sessão administrativa é inválida ou expirou.');
  }
}

export function csrfToken(payload) {
  return encode(sign(`csrf:${payload.nonce}:${payload.exp}`, authConfig().sessionSecret));
}

export function verifyCsrf(request, payload) {
  const supplied = Buffer.from(request.headers.get('x-csrf-token') || '', 'utf8');
  const expected = Buffer.from(csrfToken(payload), 'utf8');
  if (!same(supplied, expected)) fail(403, 'INVALID_CSRF', 'A proteção da sessão não pôde ser validada.');
}

export function sessionCookie(token, maxAge = SESSION_SECONDS) {
  const parts = [`${cookieName()}=${token}`, 'Path=/', 'HttpOnly', 'SameSite=Strict', `Max-Age=${maxAge}`];
  if (isProduction()) parts.push('Secure');
  return parts.join('; ');
}

export const clearSessionCookie = () => sessionCookie('', 0);
