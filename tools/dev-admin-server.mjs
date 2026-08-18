#!/usr/bin/env node
import { createReadStream, existsSync, statSync } from 'node:fs';
import { createServer } from 'node:http';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const port = Number(process.env.PORT || 3000);
process.env.VERCEL_ENV = 'development';
const functions = new Map([
  ['/api/admin/login', await import('../api/admin/login.mjs')],
  ['/api/admin/logout', await import('../api/admin/logout.mjs')],
  ['/api/admin/session', await import('../api/admin/session.mjs')],
  ['/api/admin/class-art', await import('../api/admin/class-art.mjs')],
  ['/api/admin/class-metadata', await import('../api/admin/class-metadata.mjs')],
  ['/api/admin/feat', await import('../api/admin/feat.mjs')],
  ['/api/admin/race', await import('../api/admin/race.mjs')],
  ['/api/admin/spell', await import('../api/admin/spell.mjs')],
  ['/api/admin/history', await import('../api/admin/history.mjs')]
]);
const mime = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml'
};

async function webRequest(request, url) {
  const chunks = [];
  let total = 0;
  for await (const chunk of request) {
    total += chunk.length;
    if (total > 112 * 1024) throw new Error('Payload local excede 112 KiB.');
    chunks.push(chunk);
  }
  const body = chunks.length ? Buffer.concat(chunks) : undefined;
  const init = { method: request.method, headers: request.headers };
  if (body !== undefined) {
    init.body = body;
    init.duplex = 'half';
  }
  return new Request(url, init);
}

function sendWebResponse(result, response) {
  response.statusCode = result.status;
  result.headers.forEach((value, key) => response.setHeader(key, value));
  return result.arrayBuffer().then(buffer => response.end(Buffer.from(buffer)));
}

createServer(async (request, response) => {
  try {
    const url = new URL(request.url, `http://${request.headers.host || `localhost:${port}`}`);
    const api = functions.get(url.pathname);
    if (api) {
      const handler = api[request.method || 'GET'];
      if (!handler) {
        response.writeHead(405, { Allow: Object.keys(api).filter(key => /^[A-Z]+$/.test(key)).join(', ') });
        response.end('Método não permitido');
        return;
      }
      await sendWebResponse(await handler(await webRequest(request, url)), response);
      return;
    }
    let relative = decodeURIComponent(url.pathname).replace(/^\/+/, '');
    if (!relative || relative === 'admin' || relative.startsWith('admin/')) relative = relative === 'admin/index.html' ? relative : 'admin/index.html';
    if (relative.startsWith('api/') || relative.split('/').some(part => part.startsWith('.'))) {
      response.writeHead(404);
      response.end('Não encontrado');
      return;
    }
    const absolute = path.resolve(root, relative);
    if (!absolute.startsWith(root + path.sep) || !existsSync(absolute) || !statSync(absolute).isFile()) {
      response.writeHead(404);
      response.end('Não encontrado');
      return;
    }
    response.setHeader('Content-Type', mime[path.extname(absolute).toLowerCase()] || 'application/octet-stream');
    if (relative.startsWith('admin/') || relative.startsWith('js/admin/') || relative === 'css/admin.css') response.setHeader('Cache-Control', 'no-store');
    createReadStream(absolute).pipe(response);
  } catch (error) {
    console.error(error?.message || error);
    if (!response.headersSent) response.writeHead(500);
    response.end('Erro interno');
  }
}).listen(port, '127.0.0.1', () => {
  console.log(`Grimório Admin local: http://127.0.0.1:${port}/admin`);
  console.log('Modo de escrita efetivo: mock');
});
