#!/usr/bin/env node
'use strict';
const fs=require('fs');
const path=require('path');
const vm=require('vm');
const root=path.resolve(__dirname,'..');
const read=rel=>fs.readFileSync(path.join(root,rel),'utf8');
const errors=[];
const ok=m=>console.log('✓ '+m);
const fail=m=>errors.push(m);
const storage=new Map();
const context={console,localStorage:{getItem:k=>storage.has(k)?storage.get(k):null,setItem:(k,v)=>storage.set(k,String(v))},document:{querySelectorAll:()=>[],getElementById:()=>null}};
context.window=context;context.render=()=>{};context.navigate=()=>{};
vm.createContext(context);
for(const file of [
  'data/lyre-races.js','data/lyre-races-phase2-structure.js','data/lyre-races-phase2-text.js','data/lyre-races-phase3-structure.js','data/lyre-races-phase3-text.js','data/lyre-races-phase4-structure.js','data/lyre-races-phase4-text.js','data/blade-bone-benefit-races.js','data/zagalhta-exolunar-races.js','data/paraprismatic-tempest-races.js','js/race-browser.js'
]){
  try{vm.runInContext(read(file),context,{filename:file});}catch(error){fail(`${file}: ${error.message}`);}
}
if(errors.length)finish();
const races=context.GRIMORIO_RACES||[];
const rules=context.GRIMORIO_RACE_RULES||{};
if(races.length!==46)fail(`Esperadas 46 raças; encontradas ${races.length}.`);else ok('46 raças globais');
const subCount=races.reduce((n,r)=>n+(r.subraces||[]).length,0);
if(subCount!==368)fail(`Esperadas 368 subraças nesta fase; encontradas ${subCount}.`);else ok('368 subraças preservadas');
const expected={
  bouyan:{page:38,core:11,legacy:6,mixed:3,ability:'Sabedoria +2; Constituição +1.'},
  horma:{page:39,core:10,legacy:6,mixed:2,ability:'Destreza +2; Carisma +1.'},
  silvistar:{page:40,core:10,legacy:6,mixed:2,ability:'Destreza +2; Sabedoria +1.'},
  tinderbine:{page:41,core:11,legacy:6,mixed:2,ability:'Constituição +2; Força +1.'}
};
for(const [id,e] of Object.entries(expected)){
  const race=races.find(r=>r.id===id);
  if(!race){fail(`Raça ausente: ${id}`);continue;}
  if(race.sourceId!=='paraprismatic-tempest'||race.source!=='Somnus Domina — Paraprismatic Tempest')fail(`${id}: fonte incorreta.`);
  if(race.sourcePage!==e.page)fail(`${id}: página inicial ${race.sourcePage}, esperado ${e.page}.`);
  if(race.textRevision!=='full')fail(`${id}: texto integral não marcado.`);
  if(race.abilityScore!==e.ability)fail(`${id}: aumento de atributo divergente.`);
  if((race.coreTraits||[]).length!==e.core)fail(`${id}: esperados ${e.core} traços fixos.`);
  if((race.legacyTraits||[]).length!==e.legacy)fail(`${id}: esperados ${e.legacy} Traços de Legado.`);
  if((race.mixedBloodTraits||[]).length!==e.mixed)fail(`${id}: esperados ${e.mixed} Traços de Sangue Misto.`);
  if((race.subraces||[]).length!==0)fail(`${id}: a fonte apresenta a raça como mono-raça.`);
  if(race.dominantLegacyBonus!==1)fail(`${id}: Traço de Legado Adicional não foi modelado como +1 escolha própria.`);
  for(const bucket of ['coreTraits','legacyTraits','mixedBloodTraits'])for(const trait of race[bucket]||[]){
    if(!trait.id||!trait.name||!trait.originalName||!trait.description||!trait.page)fail(`${id}/${bucket}: traço incompleto.`);
  }
}
const bouyan=races.find(r=>r.id==='bouyan');
if(!bouyan?.coreTraits.some(t=>t.originalName==='Aqua Evasion'&&/errar automaticamente/.test(t.description)&&/Descanso Curto/.test(t.description)))fail('Bouyan: Evasão Aquática incompleta.');else ok('Bouyan conferido');
const horma=races.find(r=>r.id==='horma');
if(!horma?.legacyTraits.some(t=>t.originalName==='Harden Shell'&&/reduzido à metade/.test(t.description)&&/Descanso Curto/.test(t.description)))fail('Horma: Endurecer Carapaça incompleto.');else ok('Horma conferido');
const silvistar=races.find(r=>r.id==='silvistar');
if(!/Pequeno.*Médio.*Médio ou Grande/.test(silvistar?.meta?.size||'')||!silvistar?.editorialNote?.includes('inconsistência'))fail('Silvistar: divergência de tamanho não foi preservada explicitamente.');else ok('Silvistar: divergência editorial preservada');
const tinderbine=races.find(r=>r.id==='tinderbine');
if(!tinderbine?.coreTraits.some(t=>t.originalName==='Overburn'&&/1d6/.test(t.description))||!tinderbine?.legacyTraits.some(t=>t.originalName==='Hyperburn'&&/1d10/.test(t.description)))fail('Tinderbine: Supercombustão/Hipercombustão incompletas.');else ok('Tinderbine conferido');
const planar=rules.paraprismaticTempest?.planarLegacyTraits;
if(!Array.isArray(planar)||planar.length!==6)fail('Esperados 6 Traços de Legado Planares opcionais.');
else {
  const names=planar.map(t=>t.originalName);
  for(const name of ['Adept Geomentalist','Energy Resistance','Planar Traveler','Prismatic Rebuke','Uncanny Energy','Unified Elemental Core'])if(!names.includes(name))fail(`Traço Planar ausente: ${name}`);
  if(planar.some(t=>t.page!==37||!t.description))fail('Traços Planares sem página 37/texto integral.');else ok('6 Traços de Legado Planares preservados');
}
const api=context.GRIMORIO_RACE_BROWSER;
if(!api)fail('Race Browser não carregado.');
else {
  const catalog=api.renderCatalog();
  for(const needle of ['46','368','Traços de Legado Planares','Geomentalista Adepto','Núcleo Elemental Unificado'])if(!catalog.includes(needle))fail(`Catálogo não renderiza ${needle}.`);
  const detail=api.renderRace('bouyan');
  for(const needle of ['Bouyan','0 / 3','Traço de Legado Adicional','Evasão Aquática','Sem subraças'])if(!detail.includes(needle))fail(`Detalhe Bouyan não renderiza ${needle}.`);
  if(!errors.length)ok('Race Browser suporta mono-raças e terceira escolha racial');
}
const manifest=JSON.parse(read('manifest.json'));
if(manifest.version!=='5.57.0'||manifest.races!==46||manifest.raceSubraces!==368||manifest.raceTraitRecords!==1690||manifest.racesTextReviewed!==46)fail('Manifest racial 5.57.0 não está sincronizado.');
else ok('Manifest 5.57.0 sincronizado');
for(const id of Object.keys(expected))if(!manifest.raceIndex.some(r=>r.id===id))fail(`Manifest sem ${id}.`);
const index=read('index.html');
if(!index.includes('data/paraprismatic-tempest-races.js')||index.indexOf('data/paraprismatic-tempest-races.js')>index.indexOf('js/race-browser.js'))fail('Novo módulo racial não está carregado antes do browser.');else ok('Ordem de carregamento racial correta');
const source=read('data/sources.js');
if(!source.includes("id: 'paraprismatic-tempest'")||!source.includes('Somnus Domina — Paraprismatic Tempest'))fail('Fonte Paraprismatic Tempest não registrada.');else ok('Fonte registrada');
finish();
function finish(){if(errors.length){console.error('\nFalhas:');for(const e of errors)console.error('✗ '+e);process.exit(1);}console.log('\nParaprismatic Tempest — Raças Fase 1 validado com sucesso.');}
