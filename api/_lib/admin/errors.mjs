export class AdminError extends Error {
  constructor(status, code, message) {
    super(message);
    this.name = 'AdminError';
    this.status = status;
    this.code = code;
    this.publicMessage = message;
  }
}

export const fail = (status, code, message) => {
  throw new AdminError(status, code, message);
};
