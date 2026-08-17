import { authenticate, verifyCsrf } from '../_lib/admin/auth.mjs';
import { FeatService } from '../_lib/admin/feat-service.mjs';
import { assertSameOrigin, json, readJson, safe } from '../_lib/admin/http.mjs';

export const GET = safe(async request => {
  authenticate(request);
  return json({ ok: true, ...await new FeatService().list() });
});

export const POST = safe(async request => {
  assertSameOrigin(request);
  const session = authenticate(request);
  verifyCsrf(request, session);
  const payload = await readJson(request, 96 * 1024);
  return json({ ok: true, ...await new FeatService().save(payload) });
});
