import { authenticate, verifyCsrf } from '../_lib/admin/auth.mjs';
import { RaceArtService } from '../_lib/admin/race-art-service.mjs';
import { vercelHandler } from '../_lib/admin/adapter.mjs';
import { assertSameOrigin, json, methodNotAllowed, readJson, safe } from '../_lib/admin/http.mjs';

export const GET = safe(async request => {
  authenticate(request);
  return json({ ok: true, ...(await new RaceArtService().list()) });
});

export const POST = safe(async request => {
  assertSameOrigin(request);
  const session = authenticate(request);
  verifyCsrf(request, session);
  const payload = await readJson(request, 16 * 1024);
  return json({ ok: true, ...(await new RaceArtService().save(payload)) });
});

export default vercelHandler(async request => request.method === 'GET' ? GET(request) : request.method === 'POST' ? POST(request) : methodNotAllowed(['GET', 'POST']));
