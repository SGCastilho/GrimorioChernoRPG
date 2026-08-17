import { authenticate, csrfToken } from '../_lib/admin/auth.mjs';
import { writeMode } from '../_lib/admin/config.mjs';
import { AdminError } from '../_lib/admin/errors.mjs';
import { vercelHandler } from '../_lib/admin/adapter.mjs';
import { json, methodNotAllowed, safe } from '../_lib/admin/http.mjs';

export const GET = safe(async request => {
  try {
    const session = authenticate(request);
    return json({ ok: true, authenticated: true, csrfToken: csrfToken(session), expiresAt: new Date(session.exp * 1000).toISOString(), mode: writeMode() });
  } catch (error) {
    if (error instanceof AdminError && error.status === 401) return json({ ok: true, authenticated: false });
    throw error;
  }
});

export default vercelHandler(request => request.method === 'GET' ? GET(request) : methodNotAllowed(['GET']));
