#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { parseArtSource } from '../api/_lib/admin/art-source.mjs';
import { SPELL_FIELDS } from '../api/_lib/admin/spell-source.mjs';

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
  'js/admin/history-view.js',
  'js/admin/metadata-editor.js',
  'js/admin/feat-editor.js',
  'js/admin/race-editor.js',
  'js/admin/spell-editor.js',
  'api/admin/login.mjs',
  'api/admin/logout.mjs',
  'api/admin/session.mjs',
  'api/admin/class-art.mjs',
  'api/admin/history.mjs',
  'api/admin/class-metadata.mjs',
  'api/admin/feat.mjs',
  'api/admin/race.mjs',
  'api/admin/spell.mjs',
  'api/_lib/admin/auth.mjs',
  'api/_lib/admin/class-art-service.mjs',
  'api/_lib/admin/history-service.mjs',
  'api/_lib/admin/metadata-source.mjs',
  'api/_lib/admin/metadata-service.mjs',
  'api/_lib/admin/feat-source.mjs',
  'api/_lib/admin/feat-service.mjs',
  'api/_lib/admin/race-source.mjs',
  'api/_lib/admin/race-service.mjs',
  'api/_lib/admin/spell-source.mjs',
  'api/_lib/admin/spell-service.mjs',
  'api/_lib/admin/art-source.mjs',
  'api/_lib/admin/repository.mjs',
  'tests/admin/auth-api.test.mjs',
  'tests/admin/repository-service.test.mjs',
  'tests/admin/history.test.mjs',
  'tests/admin/metadata-source.test.mjs',
  'tests/admin/metadata-service.test.mjs',
  'tests/admin/feat-source.test.mjs',
  'tests/admin/feat-service.test.mjs',
  'tests/admin/race-source.test.mjs',
  'tests/admin/race-service.test.mjs',
  'tests/admin/spell-source.test.mjs',
  'tests/admin/spell-service.test.mjs',
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
check(manifest.version === '5.66.0' && packageJson.version === '5.66.0' && packageLock.version === '5.66.0' && read('js/config.js').includes("APP_VERSION='5.66.0'"), 'versão 5.66.0 sincronizada');
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
  'api/_lib/admin/class-art-service.mjs',
  'api/_lib/admin/history-service.mjs',
  'api/_lib/admin/metadata-source.mjs',
  'api/_lib/admin/metadata-service.mjs',
  'api/_lib/admin/feat-source.mjs',
  'api/_lib/admin/feat-service.mjs'
  ,'api/_lib/admin/race-source.mjs'
  ,'api/_lib/admin/race-service.mjs'
  ,'api/_lib/admin/spell-source.mjs'
  ,'api/_lib/admin/spell-service.mjs'
];
const serverSource = serverFiles.map(read).join('\n');
check(serverSource.includes("path: 'data/class-covers.js'") && serverSource.includes("path: 'data/class-detail-art.js'"), 'allowlist fixa contém os dois mapas de classe');
check(!/\beval\s*\(|\bnew Function\s*\(|node:vm/.test(serverSource), 'backend não usa avaliação dinâmica');
check(serverSource.includes('force: false') && serverSource.includes("writeMode() === 'github'"), 'commit sem force e modo real fail-closed');
check(serverSource.includes("'X-GitHub-Api-Version': '2026-03-10'"), 'versão GitHub REST fixada');
check(serverSource.includes('/commits?sha=') && serverSource.includes("message.startsWith('Grimório Admin:')"), 'histórico GitHub é filtrado no servidor');
check(serverSource.includes('METADATA_CONTENT_FILES') && serverSource.includes("'data/classes.js'") && serverSource.includes("'data/homebrew-spellblade-class.js'"), 'allowlist fixa cobre os arquivos reais de classes e subclasses');
check(serverSource.includes('editManifestClassName') && serverSource.includes('UNSAFE_METADATA_EDIT'), 'edição estrutural e sincronização do manifesto estão protegidas');
check(serverSource.includes('FEAT_CONTENT_FILES') && serverSource.includes("'data/feats/phb-2014-feats.js'") && serverSource.includes("'data/feats/lyre-retia-feats.js'"), 'allowlist fixa cobre os três catálogos de talentos');
check(serverSource.includes('UNSAFE_FEAT_EDIT') && serverSource.includes('INCONSISTENT_PREREQUISITES'), 'edição de talentos reanalisa a saída e valida estruturas avançadas');
check(serverSource.includes('RACE_CONTENT_FILES') && serverSource.includes("'data/lyre-races-phase2-text.js'") && serverSource.includes("'data/zagalhta-exolunar-races.js'") && serverSource.includes("'data/paraprismatic-tempest-races.js'"), 'allowlist fixa cobre base, fases e expansões raciais');
check(serverSource.includes('UNSAFE_RACE_EDIT') && serverSource.includes('editManifestRaceName') && serverSource.includes('UNEDITABLE_RACE_FIELD'), 'edição racial reanalisa a saída, protege proprietários e sincroniza o manifesto');
check(!/coreTraits\s*:\s*changes|legacyTraits\s*:\s*changes|mixedBloodTraits\s*:\s*changes/.test(serverSource), 'API racial não expõe coleções mecânicas protegidas');
check(serverSource.includes('SPELL_CATALOG_FILES') && serverSource.includes("'data/phb-spells.js'") && serverSource.includes("'data/paraprismatic-tempest-spells.js'") && serverSource.includes("'data/homebrew-sage-spells.js'"), 'allowlist fixa cobre os onze catálogos reais de magias');
check(serverSource.includes('UNSAFE_SPELL_EDIT') && serverSource.includes('registerSpellCatalog') && serverSource.includes('SpreadElement'), 'edição de magias usa AST, reanálise e sobrescrita segura de campos compartilhados');
check(['id', 'source', 'sourceTitle', 'category', 'aliases', 'legacyVersions', 'otherSources'].every(field => !SPELL_FIELDS.includes(field)), 'identidade, proveniência e versões históricas das magias não são editáveis');

const publicFiles = ['admin/index.html', 'css/admin.css', 'js/admin/api-client.js', 'js/admin/app.js', 'js/admin/class-art-editor.js', 'js/admin/metadata-editor.js', 'js/admin/feat-editor.js', 'js/admin/race-editor.js', 'js/admin/spell-editor.js', 'js/admin/history-view.js', 'js/admin/confirm-dialog.js', 'js/admin/router.js'];
const publicSource = publicFiles.map(read).join('\n');
for (const forbidden of ['GITHUB_TOKEN', 'GRIMORIO_ADMIN_PASSWORD_HASH', 'GRIMORIO_SESSION_SECRET', 'localStorage', 'sessionStorage']) {
  check(!publicSource.includes(forbidden), `frontend não contém ${forbidden}`);
}
check(publicSource.includes('Pré-visualizar') && publicSource.includes('Confirmar e salvar') && publicSource.includes('scale'), 'preview, confirmação e scale presentes');
check(publicSource.includes('Abrir commit no GitHub') && publicSource.includes("adminRequest('history')"), 'interface de histórico read-only presente');
check(publicSource.includes("adminRequest('class-metadata')") && publicSource.includes('ID protegido'), 'interface de metadados presente e identifica campos protegidos');
check(publicSource.includes("adminRequest('feat')") && publicSource.includes('Estrutura de pré-requisitos (JSON)') && publicSource.includes('Pré-visualizar'), 'interface de talentos possui estruturas validadas e preview');
check(publicSource.includes("adminRequest('race')") && publicSource.includes('46 raças e 382 subraças') && publicSource.includes('originalName protegido'), 'interface racial usa catálogo real, preview e sinaliza campos protegidos');
check(publicSource.includes("adminRequest('spell')") && publicSource.includes('1.208 registros') && publicSource.includes('aliases, versões históricas'), 'interface de magias usa índice real, preview e sinaliza estruturas protegidas');
check(!publicSource.includes('data/class-covers.js') && !publicSource.includes('data/class-detail-art.js'), 'frontend não escolhe paths de arquivos');

const rewrites = vercel.rewrites || [];
check(rewrites.some(item => item.source === '/admin' && item.destination === '/admin/index.html') && rewrites.some(item => item.source === '/admin/:path*'), 'rewrites administrativos configurados');
const included = vercel.functions?.['api/admin/*.mjs']?.includeFiles;
check(typeof included === 'string' && included === '{manifest.json,data/**/*.js}' && included.length === 28 && included.length <= 256, 'Vercel usa um único glob curto de 28 caracteres e não pode regredir para lista longa');
check(JSON.stringify(vercel).includes("frame-ancestors 'none'") && JSON.stringify(vercel).includes('no-store'), 'CSP e cache privado configurados');

const envExample = read('.env.example');
check(envExample.includes('GRIMORIO_ADMIN_WRITE_MODE=mock') && /GITHUB_TOKEN=\s*(?:\r?\n|$)/.test(envExample), '.env.example usa mock e não contém token');
check(read('docs/GRIMORIO-ADMIN.md').includes('Contents: Read and write') && read('docs/GRIMORIO-ADMIN.md').includes('Production'), 'documentação cobre GitHub e Vercel');

for (const item of passed) console.log(`✓ ${item}`);
if (errors.length) {
  for (const item of errors) console.error(`✗ ${item}`);
  console.error(`Admin 5.66.0 reprovado: ${errors.length} erro(s).`);
  process.exit(1);
}
console.log(`Admin 5.66.0 aprovado: ${passed.length} verificações, 0 erros, 0 avisos.`);
