import { authConfig, writeMode } from '../_lib/admin/config.mjs';
import { createSession, csrfToken, sessionCookie, verifyPassword } from '../_lib/admin/auth.mjs';
import { fail } from '../_lib/admin/errors.mjs';
import { assertSameOrigin, json, readJson, safe } from '../_lib/admin/http.mjs';
import { validateLoginPayload } from '../_lib/admin/validation.mjs';

export const POST = safe(async request => {
  assertSameOrigin(request);
  const password = validateLoginPayload(await readJson(request, 4 * 1024));
  if (!await verifyPassword(password, authConfig().passwordHash)) {
    fail(401, 'INVALID_CREDENTIALS', 'Credencial administrativa inválida.');
  }
  const session = createSession();
  return json({
    ok: true,
    authenticated: true,
    csrfToken: csrfToken(session.payload),
    expiresAt: session.payload.exp,
    mode: writeMode()
  }, 200, { 'Set-Cookie': sessionCookie(session.token) });
});
