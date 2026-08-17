export function vercelHandler(handler) {
  return async (request, response) => {
    if (request instanceof Request) return handler(request);
    const protocol = request.headers?.['x-forwarded-proto'] || (request.socket?.encrypted ? 'https' : 'http');
    const host = request.headers?.host || 'localhost';
    const url = new URL(request.url || '/', `${protocol}://${host}`);
    let body;
    if (!['GET', 'HEAD'].includes(request.method || 'GET')) {
      if (request.body !== undefined) body = typeof request.body === 'string' || Buffer.isBuffer(request.body) ? request.body : JSON.stringify(request.body);
      else body = await new Promise((resolve, reject) => {
        const chunks = [];
        request.on('data', chunk => chunks.push(chunk));
        request.on('end', () => resolve(Buffer.concat(chunks)));
        request.on('error', reject);
      });
    }
    const init = { method: request.method, headers: request.headers, body };
    if (body !== undefined) init.duplex = 'half';
    const webRequest = new Request(url, init);
    const result = await handler(webRequest);
    response.statusCode = result.status;
    result.headers.forEach((value, key) => response.setHeader(key, value));
    response.end(Buffer.from(await result.arrayBuffer()));
  };
}
