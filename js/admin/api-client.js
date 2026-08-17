let csrfToken = '';

export class AdminApiError extends Error {
  constructor(status, code, message) {
    super(message);
    this.name = 'AdminApiError';
    this.status = status;
    this.code = code;
  }
}

export function setCsrfToken(value) {
  csrfToken = String(value || '');
}

export async function adminRequest(endpoint, options = {}) {
  const init = {
    method: options.method || 'GET',
    credentials: 'same-origin',
    headers: { Accept: 'application/json' }
  };
  if (options.body !== undefined) {
    init.headers['Content-Type'] = 'application/json';
    init.body = JSON.stringify(options.body);
  }
  if (init.method !== 'GET' && init.method !== 'HEAD' && csrfToken) init.headers['X-CSRF-Token'] = csrfToken;
  let response;
  try {
    response = await fetch(`/api/admin/${endpoint}`, init);
  } catch {
    throw new AdminApiError(0, 'NETWORK_ERROR', 'Não foi possível acessar a API administrativa.');
  }
  let payload;
  try {
    payload = await response.json();
  } catch {
    throw new AdminApiError(response.status, 'INVALID_RESPONSE', 'A API retornou uma resposta inválida.');
  }
  if (!response.ok || payload.ok === false) {
    if (response.status === 401) setCsrfToken('');
    throw new AdminApiError(response.status, payload.error?.code || 'REQUEST_FAILED', payload.error?.message || 'A operação falhou.');
  }
  return payload;
}
