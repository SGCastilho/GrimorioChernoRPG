#!/usr/bin/env node
import { createReadStream, existsSync, statSync } from 'node:fs';
import { createServer } from 'node:http';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const port = Number(process.env.PORT || 3000);
process.env.VERCEL_ENV = 'development';
const functions = new Map([
  ['/api/admin/login', (await import('../api/admin/login.mjs')).default],
  ['/api/admin/logout', (await import('../api/admin/logout.mjs')).default],
  ['/api/admin/session', (await import('../api/admin/session.mjs')).default],
  ['/api/admin/class-art', (await import('../api/admin/class-art.mjs')).default],
  ['/api/admin/race-art', (await import('../api/admin/race-art.mjs')).default]
]);
const mime = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8', '.json': 'application/json; charset=utf-8', '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.webp': 'image/webp', '.svg': 'image/svg+xml' };

createServer(async (request, response) => {
  try {
    const url = new URL(request.url, `http://${request.headers.host || `localhost:${port}`}`);
    const api = functions.get(url.pathname);
    if (api) { await api(request, response); return; }
    let relative = decodeURIComponent(url.pathname).replace(/^\/+/, '');
    if (!relative || relative === 'admin' || relative.startsWith('admin/')) relative = relative === 'admin/index.html' ? relative : 'admin/index.html';
    const absolute = path.resolve(root, relative);
    if (!absolute.startsWith(root + path.sep) || !existsSync(absolute) || !statSync(absolute).isFile()) { response.writeHead(404); response.end('Não encontrado'); return; }
    response.setHeader('Content-Type', mime[path.extname(absolute).toLowerCase()] || 'application/octet-stream');
    if (relative.startsWith('admin/') || relative.startsWith('js/admin/')) response.setHeader('Cache-Control', 'no-store');
    createReadStream(absolute).pipe(response);
  } catch (error) {
    console.error(error?.message || error);
    if (!response.headersSent) response.writeHead(500);
    response.end('Erro interno');
  }
}).listen(port, '127.0.0.1', () => {
  console.log(`Grimório Admin local: http://127.0.0.1:${port}/admin`);
  console.log(`Modo de escrita efetivo: mock`);
});
