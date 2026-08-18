import { authenticate, csrfToken } from '../_lib/admin/auth.mjs';
import { writeMode } from '../_lib/admin/config.mjs';
import { AdminError } from '../_lib/admin/errors.mjs';
import { json, safe } from '../_lib/admin/http.mjs';

export const GET = safe(async request => {
  try {
    const session = authenticate(request);
    return json({
      ok: true,
      authenticated: true,
      csrfToken: csrfToken(session),
      expiresAt: session.exp,
      mode: writeMode()
    });
  } catch (error) {
    if (error instanceof AdminError && error.code === 'UNAUTHENTICATED') {
      return json({ ok: true, authenticated: false, mode: writeMode() });
    }
    throw error;
  }
});
