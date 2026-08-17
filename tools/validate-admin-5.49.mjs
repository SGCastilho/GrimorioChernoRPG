#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';
import { parseArtSource } from '../api/_lib/admin/art-source.mjs';

const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..'),read=relative=>fs.readFileSync(path.join(root,relative),'utf8'),exists=relative=>fs.existsSync(path.join(root,relative));
const errors=[],passed=[],check=(condition,message)=>condition?passed.push(message):errors.push(message);
const required=['admin/index.html','css/admin.css','js/admin/app.js','js/admin/class-art-editor.js','js/admin/race-art-editor.js','api/admin/class-art.mjs','api/admin/race-art.mjs','api/_lib/admin/class-art-service.mjs','api/_lib/admin/race-art-service.mjs','api/_lib/admin/art-source.mjs','api/_lib/admin/repository.mjs','data/race-covers.js','data/race-detail-art.js','docs/GRIMORIO-ADMIN.md','ADMIN_AUDIT_5.49.0.md','tools/dev-admin-server.mjs','package-lock.json'];
for(const file of required)check(exists(file),`arquivo obrigatório: ${file}`);

const manifest=JSON.parse(read('manifest.json')),packageJson=JSON.parse(read('package.json')),lock=JSON.parse(read('package-lock.json')),vercel=JSON.parse(read('vercel.json'));
check(manifest.version==='5.49.0'&&packageJson.version==='5.49.0'&&lock.version==='5.49.0'&&read('js/config.js').includes("APP_VERSION='5.49.0'"),'versão 5.49.0 sincronizada');

const indexHtml=read('index.html'),scriptPaths=[...indexHtml.matchAll(/<script\s+src="([^"]+)"/g)].map(match=>match[1]).filter(file=>!/^js\/(app|ui-enhancements|dynamic-consultation|race-art-runtime)\.js$/.test(file));
const context={console:{log(){},warn(){},error(){}}};context.window=context;vm.createContext(context);for(const relative of scriptPaths)vm.runInContext(read(relative),context,{filename:relative});
const classIndex=(context.GRIMORIO_CLASSES||[]).map(({id,name})=>({id,name})),raceIndex=(context.GRIMORIO_RACES||[]).map(({id,name})=>({id,name}));
check(JSON.stringify(manifest.classIndex)===JSON.stringify(classIndex),'manifest.classIndex sincronizado com as 27 classes');
check(JSON.stringify(manifest.raceIndex)===JSON.stringify(raceIndex),'manifest.raceIndex sincronizado com as 42 raças');

const classCovers=parseArtSource(read('data/class-covers.js'),'covers').entries,classDetails=parseArtSource(read('data/class-detail-art.js'),'detailArt').entries,raceCovers=parseArtSource(read('data/race-covers.js'),'covers').entries,raceDetails=parseArtSource(read('data/race-detail-art.js'),'detailArt').entries;
check(Object.keys(classCovers).length===27&&Object.keys(classDetails).length===27,'mapas de classes preservam 27 entradas');
check(Object.keys(raceCovers).length===42&&Object.keys(raceDetails).length===42,'mapas de raças possuem 42 entradas');
check(raceIndex.every(item=>raceCovers[item.id]&&raceDetails[item.id]),'todos os IDs raciais existem nos dois mapas');

const source=['api/_lib/admin/config.mjs','api/_lib/admin/validation.mjs','api/_lib/admin/art-source.mjs','api/_lib/admin/repository.mjs','api/_lib/admin/race-art-service.mjs'].map(read).join('\n');
check(source.includes("path: 'data/race-covers.js'")&&source.includes("path: 'data/race-detail-art.js'"),'allowlist contém somente os mapas raciais declarados');
check(!/\beval\s*\(|\bnew Function\s*\(|node:vm/.test(source),'backend não usa avaliação dinâmica');
check(source.includes('force: false')&&source.includes("writeMode() === 'github'"),'commit sem force e escrita real restrita preservados');

const publicSource=['js/admin/app.js','js/admin/race-art-editor.js','css/admin.css'].map(read).join('\n');
check(publicSource.includes('/admin/race-art')&&publicSource.includes('Artes de Raças'),'rota e módulo de Artes de Raças registrados');
check(publicSource.includes('Pré-visualizar')&&publicSource.includes('Descrição acessível')&&publicSource.includes('Recarregar do GitHub'),'preview, acessibilidade e conflito presentes');
check(!/localStorage|sessionStorage/.test(publicSource),'editor racial não persiste dados no navegador');

const included=vercel.functions?.['api/admin/*.mjs']?.includeFiles||[];
check(included.includes('data/race-covers.js')&&included.includes('data/race-detail-art.js'),'Vercel inclui os mapas raciais');
check(read('tools/dev-admin-server.mjs').includes('/api/admin/race-art'),'servidor local registra endpoint racial');

for(const item of passed)console.log(`✓ ${item}`);
if(errors.length){for(const item of errors)console.error(`✗ ${item}`);console.error(`Admin 5.49.0 reprovado: ${errors.length} erro(s).`);process.exit(1);}
console.log(`Admin 5.49.0 aprovado: ${passed.length} verificações, 0 erros, 0 avisos.`);
