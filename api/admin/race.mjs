import { authenticate, verifyCsrf } from '../_lib/admin/auth.mjs';
import { assertSameOrigin, json, readJson, safe } from '../_lib/admin/http.mjs';
import { RaceService } from '../_lib/admin/race-service.mjs';

export const GET = safe(async request => {
  authenticate(request);
  return json({ ok: true, ...await new RaceService().list() });
});

export const POST = safe(async request => {
  assertSameOrigin(request);
  const session = authenticate(request);
  verifyCsrf(request, session);
  const payload = await readJson(request, 32 * 1024);
  return json({ ok: true, ...await new RaceService().save(payload) });
});
