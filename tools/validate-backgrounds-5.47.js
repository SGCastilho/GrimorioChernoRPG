#!/usr/bin/env node
'use strict';

const fs=require('fs');
const path=require('path');
const vm=require('vm');
const root=path.resolve(__dirname,'..');
const context={console};context.window=context;vm.createContext(context);
const load=file=>vm.runInContext(fs.readFileSync(path.join(root,file),'utf8'),context,{filename:file});
['js/registry.js','data/sources.js','data/phb-backgrounds.js','js/background-browser.js'].forEach(load);

const errors=[];
const assert=(condition,message)=>{if(!condition)errors.push(message);};
const catalogs=context.GRIMORIO_REGISTRY.getBackgroundCatalogs();
const backgrounds=context.GRIMORIO_BACKGROUND_BROWSER.getBackgrounds();
const raw=catalogs.flatMap(catalog=>catalog.backgrounds);
const byId=id=>backgrounds.find(item=>item.id===id);
const base=backgrounds.filter(item=>item.type==='base');
const variants=backgrounds.filter(item=>item.type==='variant');

assert(catalogs.length===1,`Esperado 1 catálogo, encontrado ${catalogs.length}.`);
assert(backgrounds.length===18,`Esperadas 18 entradas, encontradas ${backgrounds.length}.`);
assert(base.length===13,`Esperados 13 antecedentes-base, encontrados ${base.length}.`);
assert(variants.length===5,`Esperadas 5 variações, encontradas ${variants.length}.`);
assert(new Set(backgrounds.flatMap(item=>item.skills)).size===16,'O catálogo deve usar exatamente 16 perícias distintas.');
assert(new Set(backgrounds.map(item=>item._sourceId)).size===1,'O catálogo 5.47.0 deve usar uma fonte.');

for(const item of base){
  assert(item.suggested?.traits?.rows?.length===8,`${item.id}: traços incompletos.`);
  for(const key of ['ideals','bonds','flaws']) assert(item.suggested?.[key]?.rows?.length===6,`${item.id}: ${key} incompletos.`);
  for(const table of [item.suggested?.traits,item.suggested?.ideals,item.suggested?.bonds,item.suggested?.flaws,...(item.auxiliaryTables||[])]){
    if(!table)continue;
    assert(table.rows.every((row,index)=>row.roll===index+1),`${item.id}/${table.title}: sequência de dados inválida.`);
    assert(table.rows.every(row=>String(row.result||'').trim()),`${item.id}/${table.title}: resultado vazio.`);
  }
}

const merchant=byId('mercador-de-guilda'),artisan=byId('artesao-de-guilda');
assert(merchant?.variantOf==='artesao-de-guilda','Mercador deve variar Artesão de Guilda.');
assert(merchant?.tools?.length===0 && /navegador|idioma adicional/i.test(merchant?.languages?.text||''),'Mercador deve trocar a proficiência por ferramentas de navegador ou idioma adicional.');
assert(/mula/i.test(merchant?.equipment||'') && /carroça/i.test(merchant?.equipment||''),'Mercador deve possuir equipamento alternativo.');
assert(merchant?.feature?.name===artisan?.feature?.name,'Mercador deve herdar a característica do Artesão.');

const gladiator=byId('gladiador'),entertainer=byId('artista');
assert(gladiator?.variantOf==='artista','Gladiador deve variar Artista.');
assert(gladiator?.feature?.name===entertainer?.feature?.name,'Gladiador deve manter a característica do Artista.');
assert(/arma incomum/i.test(gladiator?.equipment||''),'Gladiador deve trocar o instrumento por arma apropriada.');

const spy=byId('espiao'),criminal=byId('criminoso');
assert(spy?.variantOf==='criminoso','Espião deve variar Criminoso.');
for(const key of ['skills','tools','equipment']) assert(JSON.stringify(spy?.[key])===JSON.stringify(criminal?.[key]),`Espião deve herdar ${key} do Criminoso.`);
assert(spy?.feature?.name===criminal?.feature?.name,'Espião deve herdar Contato Criminal.');

const pirate=byId('pirata');
assert(pirate?.variantOf==='marinheiro' && pirate?.feature?.name==='Má Reputação','Pirata deve substituir Passagem de Navio por Má Reputação.');
const knight=byId('cavaleiro');
assert(knight?.variantOf==='nobre' && knight?.feature?.name==='Retentores','Cavaleiro deve substituir Posição Privilegiada por Retentores.');

for(const item of variants){
  assert(raw.some(parent=>parent.id===item.variantOf),`${item.id}: antecedente-base ausente.`);
  assert(item.inheritedFields?.includes('suggested'),`${item.id}: tabelas sugeridas devem ser herdadas.`);
}

if(errors.length){console.error(`\nAntecedentes 5.47.0: ${errors.length} erro(s)`);errors.forEach(error=>console.error('✗ '+error));process.exit(1);}
console.log(`✓ Antecedentes 5.47.0: 18 entradas, 13 bases, 5 variações e 16 perícias`);
console.log('✓ Relações, substituições mecânicas, tabelas e sequências validadas');
