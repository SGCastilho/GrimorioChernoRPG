import { authenticate } from '../_lib/admin/auth.mjs';
import { AdminHistoryService } from '../_lib/admin/history-service.mjs';
import { json, safe } from '../_lib/admin/http.mjs';

export const GET = safe(async request => {
  authenticate(request);
  return json({ ok: true, ...await new AdminHistoryService().list() });
});
