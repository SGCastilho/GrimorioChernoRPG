export class AdminError extends Error {
  constructor(status, code, publicMessage) {
    super(publicMessage);
    this.name = 'AdminError';
    this.status = status;
    this.code = code;
    this.publicMessage = publicMessage;
  }
}

export function fail(status, code, publicMessage) {
  throw new AdminError(status, code, publicMessage);
}
