import { authenticate, verifyCsrf } from '../_lib/admin/auth.mjs';
import { SpellService } from '../_lib/admin/spell-service.mjs';
import { assertSameOrigin, json, readJson, safe } from '../_lib/admin/http.mjs';

export const GET = safe(async request => {
  authenticate(request);
  const parameters = new URL(request.url).searchParams;
  const spellId = parameters.get('id');
  const catalogId = parameters.get('catalog');
  const service = new SpellService();
  return json({ ok: true, ...(spellId ? await service.get(spellId, catalogId) : await service.list()) });
});

export const POST = safe(async request => {
  assertSameOrigin(request);
  const session = authenticate(request);
  verifyCsrf(request, session);
  const payload = await readJson(request, 96 * 1024);
  return json({ ok: true, ...await new SpellService().save(payload) });
});
