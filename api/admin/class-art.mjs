import { authenticate, verifyCsrf } from '../_lib/admin/auth.mjs';
import { ClassArtService } from '../_lib/admin/class-art-service.mjs';
import { vercelHandler } from '../_lib/admin/adapter.mjs';
import { assertSameOrigin, json, methodNotAllowed, readJson, safe } from '../_lib/admin/http.mjs';

export const GET = safe(async request => {
  authenticate(request);
  return json({ ok: true, ...(await new ClassArtService().list()) });
});

export const POST = safe(async request => {
  assertSameOrigin(request);
  const session = authenticate(request);
  verifyCsrf(request, session);
  const payload = await readJson(request, 16 * 1024);
  return json({ ok: true, ...(await new ClassArtService().save(payload)) });
});

export default vercelHandler(async request => request.method === 'GET' ? GET(request) : request.method === 'POST' ? POST(request) : methodNotAllowed(['GET', 'POST']));
