import { authenticate, verifyCsrf } from '../_lib/admin/auth.mjs';
import { assertSameOrigin, json, readJson, safe } from '../_lib/admin/http.mjs';
import { MetadataService } from '../_lib/admin/metadata-service.mjs';

export const GET = safe(async request => {
  authenticate(request);
  return json({ ok: true, ...await new MetadataService().list() });
});

export const POST = safe(async request => {
  assertSameOrigin(request);
  const session = authenticate(request);
  verifyCsrf(request, session);
  const payload = await readJson(request, 64 * 1024);
  return json({ ok: true, ...await new MetadataService().save(payload) });
});
