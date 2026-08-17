#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { parseArtSource } from '../api/_lib/admin/art-source.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const read = relative => fs.readFileSync(path.join(root, relative), 'utf8');
const exists = relative => fs.existsSync(path.join(root, relative));
const errors = [];
const passed = [];
const check = (condition, message) => condition ? passed.push(message) : errors.push(message);

const required = [
  'admin/index.html',
  'css/admin.css',
  'js/admin/app.js',
  'js/admin/class-art-editor.js',
  'api/admin/login.mjs',
  'api/admin/logout.mjs',
  'api/admin/session.mjs',
  'api/admin/class-art.mjs',
  'api/_lib/admin/auth.mjs',
  'api/_lib/admin/class-art-service.mjs',
  'api/_lib/admin/art-source.mjs',
  'api/_lib/admin/repository.mjs',
  'tests/admin/auth-api.test.mjs',
  'tests/admin/repository-service.test.mjs',
  'docs/GRIMORIO-ADMIN.md',
  '.env.example',
  'vercel.json',
  'package.json',
  'package-lock.json'
];
for (const file of required) check(exists(file), `arquivo obrigatório: ${file}`);

const manifest = JSON.parse(read('manifest.json'));
const packageJson = JSON.parse(read('package.json'));
const packageLock = exists('package-lock.json') ? JSON.parse(read('package-lock.json')) : {};
const vercel = JSON.parse(read('vercel.json'));
check(manifest.version === '5.51.0' && packageJson.version === '5.51.0' && packageLock.version === '5.51.0' && read('js/config.js').includes("APP_VERSION='5.51.0'"), 'versão 5.51.0 sincronizada');
check(packageJson.dependencies?.acorn === '8.18.0', 'Acorn 8.18.0 fixado como dependência de produção');
check(Array.isArray(manifest.classIndex) && manifest.classIndex.length === manifest.classes && manifest.classes === 27, 'manifest.classIndex preserva as 27 classes reais');

const covers = parseArtSource(read('data/class-covers.js'), 'covers').entries;
const details = parseArtSource(read('data/class-detail-art.js'), 'detailArt').entries;
const classIds = manifest.classIndex.map(item => item.id);
check(Object.keys(covers).length === 27 && Object.keys(details).length === 27, 'mapas de classe preservam 27 entradas');
check(classIds.every(id => covers[id] && details[id]), 'todos os IDs do manifesto existem nos dois mapas');

const serverFiles = [
  'api/_lib/admin/config.mjs',
  'api/_lib/admin/auth.mjs',
  'api/_lib/admin/validation.mjs',
  'api/_lib/admin/art-source.mjs',
  'api/_lib/admin/repository.mjs',
  'api/_lib/admin/class-art-service.mjs'
];
const serverSource = serverFiles.map(read).join('\n');
check(serverSource.includes("path: 'data/class-covers.js'") && serverSource.includes("path: 'data/class-detail-art.js'"), 'allowlist fixa contém os dois mapas de classe');
check(!/\beval\s*\(|\bnew Function\s*\(|node:vm/.test(serverSource), 'backend não usa avaliação dinâmica');
check(serverSource.includes('force: false') && serverSource.includes("writeMode() === 'github'"), 'commit sem force e modo real fail-closed');
check(serverSource.includes("'X-GitHub-Api-Version': '2026-03-10'"), 'versão GitHub REST fixada');

const publicFiles = ['admin/index.html', 'css/admin.css', 'js/admin/api-client.js', 'js/admin/app.js', 'js/admin/class-art-editor.js', 'js/admin/confirm-dialog.js', 'js/admin/router.js'];
const publicSource = publicFiles.map(read).join('\n');
for (const forbidden of ['GITHUB_TOKEN', 'GRIMORIO_ADMIN_PASSWORD_HASH', 'GRIMORIO_SESSION_SECRET', 'localStorage', 'sessionStorage']) {
  check(!publicSource.includes(forbidden), `frontend não contém ${forbidden}`);
}
check(publicSource.includes('Pré-visualizar') && publicSource.includes('Confirmar e salvar') && publicSource.includes('scale'), 'preview, confirmação e scale presentes');
check(!publicSource.includes('data/class-covers.js') && !publicSource.includes('data/class-detail-art.js'), 'frontend não escolhe paths de arquivos');

const rewrites = vercel.rewrites || [];
check(rewrites.some(item => item.source === '/admin' && item.destination === '/admin/index.html') && rewrites.some(item => item.source === '/admin/:path*'), 'rewrites administrativos configurados');
const included = vercel.functions?.['api/admin/*.mjs']?.includeFiles;
check(typeof included === 'string' && included === '{manifest.json,data/class-covers.js,data/class-detail-art.js}', 'Vercel usa glob string para incluir somente os dados necessários às Functions');
check(JSON.stringify(vercel).includes("frame-ancestors 'none'") && JSON.stringify(vercel).includes('no-store'), 'CSP e cache privado configurados');

const envExample = read('.env.example');
check(envExample.includes('GRIMORIO_ADMIN_WRITE_MODE=mock') && /GITHUB_TOKEN=\s*(?:\r?\n|$)/.test(envExample), '.env.example usa mock e não contém token');
check(read('docs/GRIMORIO-ADMIN.md').includes('Contents: Read and write') && read('docs/GRIMORIO-ADMIN.md').includes('Production'), 'documentação cobre GitHub e Vercel');

for (const item of passed) console.log(`✓ ${item}`);
if (errors.length) {
  for (const item of errors) console.error(`✗ ${item}`);
  console.error(`Admin 5.51.0 reprovado: ${errors.length} erro(s).`);
  process.exit(1);
}
console.log(`Admin 5.51.0 aprovado: ${passed.length} verificações, 0 erros, 0 avisos.`);
