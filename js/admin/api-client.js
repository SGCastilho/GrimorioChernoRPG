export class AdminApiError extends Error {
  constructor(status, code, message) {
    super(message);
    this.status = status;
    this.code = code;
  }
}

let csrfToken = '';
export const setCsrfToken = value => { csrfToken = value || ''; };

export async function adminRequest(path, options = {}) {
  const headers = { Accept: 'application/json', ...options.headers };
  if (options.body !== undefined) headers['Content-Type'] = 'application/json';
  if (options.method && options.method !== 'GET' && csrfToken) headers['X-CSRF-Token'] = csrfToken;
  let response;
  try {
    response = await fetch(`/api/admin/${path}`, { credentials: 'same-origin', ...options, headers, body: options.body === undefined ? undefined : JSON.stringify(options.body) });
  } catch {
    throw new AdminApiError(0, 'NETWORK_ERROR', 'Não foi possível comunicar com o servidor.');
  }
  let data;
  try { data = await response.json(); } catch { data = null; }
  if (!response.ok || !data?.ok) throw new AdminApiError(response.status, data?.error?.code || 'INVALID_RESPONSE', data?.error?.message || 'O servidor retornou uma resposta inválida.');
  return data;
}
