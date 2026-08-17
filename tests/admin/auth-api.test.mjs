import assert from 'node:assert/strict';
import { test } from 'node:test';
import { authenticate, createSession, csrfToken, hashPassword, sessionCookie, verifyPassword } from '../../api/_lib/admin/auth.mjs';
import { POST as login } from '../../api/admin/login.mjs';
import { POST as logout } from '../../api/admin/logout.mjs';
import { GET as session } from '../../api/admin/session.mjs';
import { GET as classArtGet, POST as classArtPost } from '../../api/admin/class-art.mjs';
import { GET as raceArtGet, POST as raceArtPost } from '../../api/admin/race-art.mjs';

process.env.VERCEL_ENV = 'development';
process.env.GRIMORIO_SESSION_SECRET = 'test-session-secret-with-at-least-32-chars';
process.env.GRIMORIO_ADMIN_PASSWORD_HASH = await hashPassword('uma-senha-administrativa-forte', Buffer.alloc(16, 7));

test('hash scrypt verifica a senha sem armazená-la', async () => {
  const encoded = process.env.GRIMORIO_ADMIN_PASSWORD_HASH;
  assert.match(encoded, /^scrypt\$16384\$8\$1\$/);
  assert.equal(encoded.includes('uma-senha'), false);
  assert.equal(await verifyPassword('uma-senha-administrativa-forte', encoded), true);
  assert.equal(await verifyPassword('senha-incorreta', encoded), false);
});

test('sessão assinada expira, invalida adulteração e gera cookie seguro', () => {
  const now = Date.now();
  const created = createSession(now);
  const cookie = sessionCookie(created.token);
  const request = new Request('http://localhost/api/admin/session', { headers: { cookie } });
  assert.equal(authenticate(request, now + 1000).nonce, created.payload.nonce);
  const tampered = cookie.replace(/=([^.;]+)\./, (_match, body) => `=${body.slice(0, -1)}x.`);
  assert.throws(() => authenticate(new Request(request.url, { headers: { cookie: tampered } }), now + 1000), /sessão/i);
  assert.throws(() => authenticate(request, now + 9 * 60 * 60 * 1000), /sessão/i);
  assert.match(cookie, /HttpOnly/); assert.match(cookie, /SameSite=Strict/); assert.doesNotMatch(cookie, /Secure/);
});

test('cookie recebe prefixo __Host e Secure em Production', () => {
  process.env.VERCEL_ENV = 'production';
  const cookie = sessionCookie(createSession().token);
  assert.match(cookie, /^__Host-grimorio_admin=/); assert.match(cookie, /Secure/);
  process.env.VERCEL_ENV = 'development';
});

test('login, consulta de sessão, CSRF e logout funcionam ponta a ponta', async () => {
  const origin = 'http://localhost';
  const loginResponse = await login(new Request(`${origin}/api/admin/login`, { method: 'POST', headers: { origin, 'content-type': 'application/json' }, body: JSON.stringify({ password: 'uma-senha-administrativa-forte' }) }));
  assert.equal(loginResponse.status, 200);
  const body = await loginResponse.json();
  const cookie = loginResponse.headers.get('set-cookie');
  assert.equal(body.authenticated, true); assert.ok(body.csrfToken); assert.match(cookie, /HttpOnly/);

  const sessionResponse = await session(new Request(`${origin}/api/admin/session`, { headers: { cookie } }));
  assert.equal((await sessionResponse.json()).authenticated, true);

  const rejected = await logout(new Request(`${origin}/api/admin/logout`, { method: 'POST', headers: { origin, cookie, 'x-csrf-token': 'invalid' } }));
  assert.equal(rejected.status, 403); assert.equal((await rejected.json()).error.code, 'INVALID_CSRF');

  const accepted = await logout(new Request(`${origin}/api/admin/logout`, { method: 'POST', headers: { origin, cookie, 'x-csrf-token': body.csrfToken } }));
  assert.equal(accepted.status, 200); assert.match(accepted.headers.get('set-cookie'), /Max-Age=0/);
});

test('origem ausente e credencial incorreta não autenticam', async () => {
  const missingOrigin = await login(new Request('http://localhost/api/admin/login', { method: 'POST', body: JSON.stringify({ password: 'x' }) }));
  assert.equal(missingOrigin.status, 403);
  const bad = await login(new Request('http://localhost/api/admin/login', { method: 'POST', headers: { origin: 'http://localhost' }, body: JSON.stringify({ password: 'incorreta' }) }));
  assert.equal(bad.status, 401); assert.equal((await bad.json()).error.code, 'INVALID_CREDENTIALS');
});

test('API de artes bloqueia anônimo, CSRF inválido e payload excessivo', async () => {
  const origin = 'http://localhost';
  const anonymous = await classArtGet(new Request(`${origin}/api/admin/class-art`));
  assert.equal(anonymous.status, 401);
  const anonymousRace = await raceArtGet(new Request(`${origin}/api/admin/race-art`));
  assert.equal(anonymousRace.status, 401);
  const created = createSession();
  const cookie = sessionCookie(created.token);
  const invalidCsrf = await classArtPost(new Request(`${origin}/api/admin/class-art`, { method: 'POST', headers: { origin, cookie, 'x-csrf-token': 'invalid' }, body: '{}' }));
  assert.equal(invalidCsrf.status, 403);
  const invalidRaceCsrf = await raceArtPost(new Request(`${origin}/api/admin/race-art`, { method: 'POST', headers: { origin, cookie, 'x-csrf-token': 'invalid' }, body: '{}' }));
  assert.equal(invalidRaceCsrf.status, 403);
  const oversized = await classArtPost(new Request(`${origin}/api/admin/class-art`, { method: 'POST', headers: { origin, cookie, 'x-csrf-token': csrfToken(created.payload) }, body: JSON.stringify({ padding: 'x'.repeat(17 * 1024) }) }));
  assert.equal(oversized.status, 413); assert.equal((await oversized.json()).error.code, 'PAYLOAD_TOO_LARGE');
});
