#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';
import { parseArtSource } from '../api/_lib/admin/art-source.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const read = relative => fs.readFileSync(path.join(root, relative), 'utf8');
const exists = relative => fs.existsSync(path.join(root, relative));
const errors = [];
const passed = [];
const check = (condition, message) => condition ? passed.push(message) : errors.push(message);

const required = [
  'admin/index.html', 'css/admin.css', 'js/admin/app.js', 'js/admin/api-client.js', 'js/admin/class-art-editor.js',
  'api/admin/login.mjs', 'api/admin/logout.mjs', 'api/admin/session.mjs', 'api/admin/class-art.mjs',
  'api/_lib/admin/auth.mjs', 'api/_lib/admin/validation.mjs', 'api/_lib/admin/art-source.mjs',
  'api/_lib/admin/repository.mjs', 'api/_lib/admin/class-art-service.mjs', 'vercel.json', '.env.example',
  'docs/GRIMORIO-ADMIN.md', 'ADMIN_AUDIT_5.48.0.md', 'tools/dev-admin-server.mjs', 'package-lock.json'
];
for (const file of required) check(exists(file), `arquivo obrigatório: ${file}`);

const manifest = JSON.parse(read('manifest.json'));
const packageJson = JSON.parse(read('package.json'));
const lock = JSON.parse(read('package-lock.json'));
const vercel = JSON.parse(read('vercel.json'));
check(manifest.version === '5.48.0' && packageJson.version === '5.48.0' && read('js/config.js').includes("APP_VERSION='5.48.0'"), 'versão 5.48.0 sincronizada');
check(packageJson.dependencies?.acorn === '8.15.0' && lock.packages?.['node_modules/acorn']?.version === '8.15.0', 'Acorn 8.15.0 fixado no lockfile');

const indexHtml = read('index.html');
const scriptPaths = [...indexHtml.matchAll(/<script\s+src="([^"]+)"/g)].map(match => match[1]).filter(file => !/^js\/(app|ui-enhancements|dynamic-consultation)\.js$/.test(file));
const context = { console: { log() {}, warn() {}, error() {} } }; context.window = context; vm.createContext(context);
for (const relative of scriptPaths) vm.runInContext(read(relative), context, { filename: relative });
const actualIndex = (context.GRIMORIO_CLASSES || []).map(({ id, name }) => ({ id, name }));
check(actualIndex.length === 27, 'catálogo público mantém 27 classes');
check(JSON.stringify(manifest.classIndex) === JSON.stringify(actualIndex), 'manifest.classIndex deriva de GRIMORIO_CLASSES sem divergências');

const covers = parseArtSource(read('data/class-covers.js'), 'covers').entries;
const details = parseArtSource(read('data/class-detail-art.js'), 'detailArt').entries;
check(Object.keys(covers).length === 27 && Object.keys(details).length === 27, 'mapas de Cover e Detail Art mantêm 27 entradas');
check(actualIndex.every(item => covers[item.id] && details[item.id]), 'todos os IDs reais existem nos dois mapas');

const rewrites = vercel.rewrites || [];
check(rewrites.some(item => item.source === '/admin' && item.destination === '/admin/index.html'), 'rewrite de /admin registrado');
check(rewrites.some(item => item.source === '/admin/:path*' && item.destination === '/admin/index.html'), 'rewrite modular do Admin registrado');
const headers = JSON.stringify(vercel.headers || []);
check(headers.includes('Content-Security-Policy') && headers.includes("frame-ancestors 'none'") && headers.includes('no-store') && headers.includes('nosniff'), 'cabeçalhos de segurança e no-store registrados');

const apiSource = ['api/_lib/admin/auth.mjs', 'api/_lib/admin/config.mjs', 'api/_lib/admin/validation.mjs', 'api/_lib/admin/art-source.mjs', 'api/_lib/admin/repository.mjs'].map(read).join('\n');
check(!/\beval\s*\(|\bnew Function\s*\(|node:vm/.test(apiSource), 'backend não usa eval, Function ou vm');
check(apiSource.includes("path: 'data/class-covers.js'") && apiSource.includes("path: 'data/class-detail-art.js'"), 'allowlist fixa contém somente os mapas de arte');
check(apiSource.includes("writeMode() === 'github'") && read('api/_lib/admin/config.mjs').includes("process.env.VERCEL_ENV === 'production'"), 'GitHub permanece bloqueado fora de Production');
check(apiSource.includes('force: false') && apiSource.includes("'/git/blobs'") && apiSource.includes("'/git/trees'") && apiSource.includes("'/git/commits'"), 'commit GitHub usa blobs, árvore, commit e ref sem force');
check(apiSource.includes('SameSite=Strict') && apiSource.includes('HttpOnly') && apiSource.includes('createHmac') && apiSource.includes('scrypt'), 'sessão, cookie e hash seguem o contrato de segurança');

const publicSource = ['admin/index.html', 'css/admin.css', 'js/admin/app.js', 'js/admin/api-client.js', 'js/admin/class-art-editor.js', 'js/admin/confirm-dialog.js', 'js/admin/router.js'].map(read).join('\n');
check(!/(GITHUB_TOKEN|GRIMORIO_ADMIN_PASSWORD_HASH|GRIMORIO_SESSION_SECRET|secret-sentinel)/.test(publicSource), 'frontend não contém nomes ou sentinelas de secrets');
check(!/localStorage|sessionStorage/.test(publicSource), 'Admin não persiste edição ou credencial no navegador');
check(publicSource.includes('/admin/class-art') && publicSource.includes('/admin/history'), 'rotas do editor e Histórico registradas');
check(publicSource.includes('Pré-visualizar') && publicSource.includes('Confirmar e salvar') && publicSource.includes('Recarregar do GitHub'), 'fluxos de preview, confirmação e conflito presentes');

const envExample = read('.env.example');
for (const variable of ['GRIMORIO_ADMIN_PASSWORD_HASH', 'GRIMORIO_SESSION_SECRET', 'GRIMORIO_ADMIN_WRITE_MODE', 'GRIMORIO_ADMIN_IMAGE_HOSTS', 'GITHUB_TOKEN', 'GITHUB_OWNER', 'GITHUB_REPO', 'GITHUB_BRANCH']) check(envExample.includes(`${variable}=`), `.env.example documenta ${variable}`);
check(!/GRIMORIO_ADMIN_PASSWORD=/.test(envExample), 'senha em texto puro não é configurável');
check(read('.gitignore').includes('.env.') && read('.gitignore').includes('*.zip') && read('.gitignore').includes('node_modules/'), 'artefatos sensíveis e ZIP excluídos do versionamento');

for (const item of passed) console.log(`✓ ${item}`);
if (errors.length) {
  for (const item of errors) console.error(`✗ ${item}`);
  console.error(`Admin 5.48.0 reprovado: ${errors.length} erro(s).`);
  process.exit(1);
}
console.log(`Admin 5.48.0 aprovado: ${passed.length} verificações, 0 erros, 0 avisos.`);
