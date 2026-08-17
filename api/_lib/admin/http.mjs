import { AdminError, fail } from './errors.mjs';

const baseHeaders = {
  'Cache-Control': 'no-store, private',
  'Content-Type': 'application/json; charset=utf-8',
  'Referrer-Policy': 'no-referrer',
  'X-Content-Type-Options': 'nosniff'
};

export function json(data, status = 200, headers = {}) {
  return new Response(JSON.stringify(data), { status, headers: { ...baseHeaders, ...headers } });
}

export const methodNotAllowed = allowed => json({ ok: false, error: { code: 'METHOD_NOT_ALLOWED', message: 'Método HTTP não permitido.' } }, 405, { Allow: allowed.join(', ') });

export async function readJson(request, maximumBytes) {
  const advertised = Number(request.headers.get('content-length') || 0);
  if (advertised > maximumBytes) fail(413, 'PAYLOAD_TOO_LARGE', 'O conteúdo enviado excede o limite permitido.');
  const text = await request.text();
  if (Buffer.byteLength(text, 'utf8') > maximumBytes) fail(413, 'PAYLOAD_TOO_LARGE', 'O conteúdo enviado excede o limite permitido.');
  try {
    const value = JSON.parse(text);
    if (!value || Array.isArray(value) || typeof value !== 'object') throw new Error('object required');
    return value;
  } catch {
    fail(400, 'INVALID_JSON', 'A requisição não contém JSON válido.');
  }
}

export function assertSameOrigin(request) {
  const origin = request.headers.get('origin');
  const expected = new URL(request.url).origin;
  if (!origin || origin !== expected) fail(403, 'INVALID_ORIGIN', 'A origem da requisição não é permitida.');
}

export function safe(handler) {
  return async request => {
    try {
      return await handler(request);
    } catch (error) {
      if (error instanceof AdminError) {
        return json({ ok: false, error: { code: error.code, message: error.publicMessage } }, error.status);
      }
      console.error('[Grimorio Admin]', error?.name || 'Error', error?.message || 'Falha desconhecida');
      return json({ ok: false, error: { code: 'INTERNAL_ERROR', message: 'O servidor não conseguiu concluir a operação.' } }, 500);
    }
  };
}
