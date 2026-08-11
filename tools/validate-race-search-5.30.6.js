'use strict';
const fs=require('fs'),vm=require('vm'),path=require('path');
const root=path.resolve(__dirname,'..');
global.window=global;
const store={};
global.localStorage={getItem:k=>store[k]??null,setItem:(k,v)=>{store[k]=String(v);}};
global.document={querySelectorAll:()=>[],getElementById:()=>null};
global.navigate=()=>{};
for(const rel of ['data/lyre-races.js','data/lyre-races-phase2-structure.js','data/lyre-races-phase2-text.js','data/lyre-races-phase3-structure.js','data/lyre-races-phase3-text.js','data/lyre-races-phase4-structure.js','data/lyre-races-phase4-text.js','js/race-browser.js']){
  vm.runInThisContext(fs.readFileSync(path.join(root,rel),'utf8'),{filename:rel});
}
function visibleIds(query){
  GRIMORIO_RACE_BROWSER.setSearch(query);
  const html=GRIMORIO_RACE_BROWSER.renderCatalog();
  const ids=[...html.matchAll(/data-race-id="([^"]+)" ([^>]*) class="race-card"/g)]
    .filter(m=>!m[2].includes('hidden'))
    .map(m=>m[1]);
  const count=Number((html.match(/raceCatalogCount" class="race-catalog-count">(\d+) de/)||[])[1]);
  if(count!==ids.length)throw new Error(`Contagem divergente para ${query}: ${count} vs ${ids.length}`);
  return ids;
}
function eq(actual,expected,label){
  if(JSON.stringify(actual)!==JSON.stringify(expected))throw new Error(`${label}: esperado ${JSON.stringify(expected)}, obtido ${JSON.stringify(actual)}`);
  console.log('OK',label,actual);
}
eq(visibleIds('humano'),['human'],'Humano');
eq(visibleIds('jackman'),['human'],'Jackman');
eq(visibleIds('dragon'),['dragonkin'],'Dragon');
const humanoide=visibleIds('humanoide');
if(!humanoide.includes('human')||humanoide.length<20)throw new Error('Humanoide deveria buscar pelo tipo de criatura.');
console.log('OK Humanoide',humanoide.length,'resultados');
const highWave=visibleIds('high wave');
if(!highWave.length)throw new Error('High Wave deveria encontrar raças por região.');
console.log('OK High Wave',highWave);
GRIMORIO_RACE_BROWSER.setSearch('');
const catalog=GRIMORIO_RACE_BROWSER.renderCatalog();
if(catalog.includes('Revisão textual em andamento')||catalog.includes('Regras de atributos e exceções da 5.19')||catalog.includes('race-card-revision'))throw new Error('Elementos removidos da UI reapareceram.');
console.log('OK elementos removidos permanecem ausentes');
console.log('VALIDAÇÃO 5.30.6 CONCLUÍDA');
