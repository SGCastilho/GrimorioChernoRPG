import { authenticate, clearSessionCookie, verifyCsrf } from '../_lib/admin/auth.mjs';
import { vercelHandler } from '../_lib/admin/adapter.mjs';
import { assertSameOrigin, json, methodNotAllowed, safe } from '../_lib/admin/http.mjs';

export const POST = safe(async request => {
  assertSameOrigin(request);
  const session = authenticate(request);
  verifyCsrf(request, session);
  return json({ ok: true, authenticated: false }, 200, { 'Set-Cookie': clearSessionCookie() });
});

export default vercelHandler(request => request.method === 'POST' ? POST(request) : methodNotAllowed(['POST']));
