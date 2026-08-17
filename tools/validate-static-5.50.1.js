#!/usr/bin/env node
'use strict';
const fs=require('fs');
const path=require('path');
const root=path.resolve(__dirname,'..');
const exists=relative=>fs.existsSync(path.join(root,relative));
const read=relative=>fs.readFileSync(path.join(root,relative),'utf8');
const containsFiles=relative=>{
  const target=path.join(root,relative);
  if(!fs.existsSync(target))return false;
  if(fs.statSync(target).isFile())return true;
  return fs.readdirSync(target,{withFileTypes:true}).some(entry=>entry.isFile()||containsFiles(path.join(relative,entry.name)));
};
const errors=[];
const ok=(condition,message)=>condition?console.log('✓ '+message):errors.push(message);

const manifest=JSON.parse(read('manifest.json'));
ok(manifest.version==='5.50.1','manifesto está na versão estática 5.50.1');
ok(read('js/config.js').includes("APP_VERSION='5.50.1'"),'config está na versão 5.50.1');
ok(!manifest.adminIntegrated&&!manifest.adminWriteDefault,'flags administrativas foram retiradas');
for(const target of ['admin/index.html','api/admin','api/_lib/admin','js/admin','tests/admin','css/admin.css','vercel.json','.env.example','package.json','package-lock.json','docs/GRIMORIO-ADMIN.md'])ok(!containsFiles(target),'infraestrutura retirada: '+target);
ok(exists('data/class-covers.js')&&exists('data/class-detail-art.js'),'mapas de arte de classes preservados');
ok(exists('data/race-covers.js')&&exists('data/race-detail-art.js')&&exists('js/race-art-runtime.js')&&exists('css/race-art.css'),'arte racial estática preservada');
ok(exists('data/phb-backgrounds.js')&&exists('js/background-browser.js'),'Antecedentes preservados');

if(errors.length){for(const error of errors)console.error('✗ '+error);console.error(`Modo estático 5.50.1 reprovado: ${errors.length} erro(s).`);process.exit(1);}
console.log('Modo estático 5.50.1 aprovado: Admin/API/Vercel ausentes e conteúdo preservado.');
