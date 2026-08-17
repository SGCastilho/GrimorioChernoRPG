import { createSession, csrfToken, sessionCookie, verifyPassword } from '../_lib/admin/auth.mjs';
import { authConfig, writeMode } from '../_lib/admin/config.mjs';
import { fail } from '../_lib/admin/errors.mjs';
import { assertSameOrigin, json, methodNotAllowed, readJson, safe } from '../_lib/admin/http.mjs';
import { vercelHandler } from '../_lib/admin/adapter.mjs';
import { validateLoginPayload } from '../_lib/admin/validation.mjs';

export const POST = safe(async request => {
  const started = Date.now();
  assertSameOrigin(request);
  const password = validateLoginPayload(await readJson(request, 4096));
  const { passwordHash } = authConfig();
  const valid = await verifyPassword(password, passwordHash);
  const remaining = 350 - (Date.now() - started);
  if (remaining > 0) await new Promise(resolve => setTimeout(resolve, remaining));
  if (!valid) fail(401, 'INVALID_CREDENTIALS', 'Credencial administrativa inválida.');
  const session = createSession();
  return json({ ok: true, authenticated: true, csrfToken: csrfToken(session.payload), expiresAt: new Date(session.payload.exp * 1000).toISOString(), mode: writeMode() }, 200, { 'Set-Cookie': sessionCookie(session.token) });
});

export default vercelHandler(request => request.method === 'POST' ? POST(request) : methodNotAllowed(['POST']));
