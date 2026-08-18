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
if(subCount!==382)fail(`Esperadas 382 subraças; encontradas ${subCount}.`);else ok('382 subraças globais');
const traitCount=races.reduce((n,r)=>n+(r.coreTraits||[]).length+(r.legacyTraits||[]).length+(r.mixedBloodTraits||[]).length+(r.subraces||[]).reduce((m,s)=>m+(s.traits||[]).length,0),0);
if(traitCount!==1743)fail(`Esperados 1.743 registros mecânicos raciais; encontrados ${traitCount}.`);else ok('1.743 registros mecânicos raciais');

const baseExpected={
  bouyan:{page:38,core:11,legacy:6,mixed:3,ability:'Sabedoria +2; Constituição +1.'},
  horma:{page:39,core:10,legacy:6,mixed:2,ability:'Destreza +2; Carisma +1.'},
  silvistar:{page:40,core:10,legacy:6,mixed:2,ability:'Destreza +2; Sabedoria +1.'},
  tinderbine:{page:41,core:11,legacy:6,mixed:2,ability:'Constituição +2; Força +1.'}
};
for(const [id,e] of Object.entries(baseExpected)){
  const race=races.find(r=>r.id===id);
  if(!race){fail(`Raça ausente: ${id}`);continue;}
  if(race.sourceId!=='paraprismatic-tempest'||race.source!=='Somnus Domina — Paraprismatic Tempest')fail(`${id}: fonte incorreta.`);
  if(race.sourcePage!==e.page)fail(`${id}: página inicial divergente.`);
  if(race.textRevision!=='full'||race.abilityScore!==e.ability)fail(`${id}: revisão/ASI divergente.`);
  if((race.coreTraits||[]).length!==e.core||(race.legacyTraits||[]).length!==e.legacy||(race.mixedBloodTraits||[]).length!==e.mixed)fail(`${id}: buckets raciais incompletos.`);
  if((race.subraces||[]).length!==0)fail(`${id}: continua sendo mono-raça na fonte e não deve receber as Subraças Convergentes.`);
  if(race.dominantLegacyBonus!==1)fail(`${id}: Traço de Legado Adicional ausente.`);
}
if(!errors.length)ok('4 mono-raças de Paraprismatic preservadas');

const expectedSubs={
  'arhcoon':{id:'azeban-arhcoon',original:'Azeban Arhcoon',page:43,ability:'Sabedoria +1',bloodline:'Hunting Nose',traits:3},
  'capy-hado':{id:'guardieth',original:'Guardieth',page:43,ability:'Inteligência +1',bloodline:'Sunk and Breathless',traits:3},
  'dragonkin':{id:'elemental-dragonkin',original:'Elemental Dragonkin',page:44,ability:'Força +1',bloodline:'Fortified Scales',traits:4},
  'enaretos':{id:'destruction',original:'Destruction',page:45,ability:'Força +1',bloodline:'Knowledge of the Mythical',traits:3},
  'feralus':{id:'pyrline',original:'Pyrline',page:45,ability:'Força +1',bloodline:'Bright Light Eyes',traits:3},
  'flooflin':{id:'guairnean',original:'Guairneán',page:45,ability:'Constituição +1',bloodline:'Quick',traits:4},
  'hadislin':{id:'beryl',original:'Beryl',page:46,ability:'Sabedoria +1',bloodline:'Tempest Attunement',traits:4},
  'hanyou':{id:'emberash',original:'Emberash',page:46,ability:'Nenhum',bloodline:'Tempest Incense & Incense Weakness',traits:11},
  'ilthrak-yar':{id:'prismette',original:'Prismette',page:47,ability:'Constituição +1',bloodline:'Prismatic Shielding',traits:3},
  'kaijou':{id:'outer-breed',original:'Outer Breed',page:47,ability:'Carisma +1',bloodline:'Tempest Resistance',traits:3},
  'kits-adria':{id:'burjelle',original:'Burjelle',page:47,ability:'Carisma +1',bloodline:'Tempest Strike & Tempest Type',traits:4},
  'kobold':{id:'silverskin-kobold',original:'Silverskin Kobold',page:47,ability:'Constituição +1',bloodline:'Swim and Slide',traits:3},
  'nephilim':{id:'traversal',original:'Traversal',page:48,ability:'Constituição ou Carisma +1',bloodline:'Bound Step',traits:2},
  'vanquis':{id:'ashbone',original:'Ashbone',page:48,ability:'Força +1',bloodline:'Pyre Body',traits:3}
};
for(const [raceId,e] of Object.entries(expectedSubs)){
  const race=races.find(r=>r.id===raceId);
  const sub=race?.subraces?.find(s=>s.id===e.id);
  if(!race){fail(`Raça-base ausente: ${raceId}`);continue;}
  if(!sub){fail(`Subraça ausente: ${raceId}/${e.id}`);continue;}
  if(sub.originalName!==e.original||sub.page!==e.page||sub.ability!==e.ability)fail(`${raceId}/${e.id}: identidade, página ou ASI divergente.`);
  if(sub.sourceId!=='paraprismatic-tempest'||sub.source!=='Somnus Domina — Paraprismatic Tempest')fail(`${raceId}/${e.id}: fonte incorreta.`);
  if(sub.originalBloodlineTrait!==e.bloodline)fail(`${raceId}/${e.id}: Bloodline Trait original divergente (${sub.originalBloodlineTrait}).`);
  if(!sub.bloodlineTrait||!sub.description)fail(`${raceId}/${e.id}: descrição/Bloodline Trait ausente.`);
  if((sub.traits||[]).length!==e.traits)fail(`${raceId}/${e.id}: esperados ${e.traits} traços; encontrados ${(sub.traits||[]).length}.`);
  for(const trait of sub.traits||[])if(!trait.id||!trait.name||!trait.originalName||!trait.description||!trait.page)fail(`${raceId}/${e.id}: traço incompleto.`);
}
if(!errors.length)ok('14 Subraças Convergentes com identidade, fonte, ASI, Bloodline Trait e traços completos');

const dragon=races.find(r=>r.id==='dragonkin')?.subraces.find(s=>s.id==='elemental-dragonkin');
const heritage=dragon?.traits.find(t=>t.originalName==='Elemental Heritage')?.description||'';
for(const needle of ['Ácido','Frio','Fogo','Elétrico','Veneno','Plano da Terra','Plano da Água','Plano do Fogo','Plano do Ar'])if(!heritage.includes(needle))fail(`Dragonkin Elemental: Herança Elemental não preserva ${needle}.`);
if(!errors.length)ok('Dragonkin Elemental preserva 5 heranças e planos');

const beryl=races.find(r=>r.id==='hadislin')?.subraces.find(s=>s.id==='beryl');
if(beryl?.cursedLegacySpells?.characterLevel3!=='Flecha Cromática'||beryl?.cursedLegacySpells?.characterLevel5!=='Sopro do Dragão')fail('Berilo: magias de Legado Amaldiçoado não foram vinculadas.');
if(!beryl?.editorialNote?.includes('Conflito entre fontes'))fail('Berilo: conflito de Sangue Misto/Crystal Hádislin não foi sinalizado.');
else ok('Berilo preserva Legado Amaldiçoado e conflito entre fontes');

const ember=races.find(r=>r.id==='hanyou')?.subraces.find(s=>s.id==='emberash');
if(!ember)fail('Emberash ausente.');
else {
  const roles=role=>ember.traits.filter(t=>t.heritageRole===role);
  if(roles('rule').length!==2||roles('positive').length!==4||roles('detrimental').length!==3||roles('lineage').length!==2)fail('Emberash: grupos de Herança não correspondem à fonte.');
  if(ember.heritageRules?.positiveChoices!==2||ember.heritageRules?.detrimentalChoices!==1)fail('Emberash: quantidades específicas de Herança incorretas.');
  if(!ember.editorialNote?.includes('escolher 1')||!ember.editorialNote?.includes('“o segundo”'))fail('Emberash: inconsistência editorial não foi preservada.');
  const weakness=ember.traits.find(t=>t.originalName==='Incense Weakness')?.description||'';
  for(const needle of ['ácido — fraqueza a elétrico','frio — fraqueza a fogo','fogo — fraqueza a ácido','elétrico — fraqueza a frio','veneno — fraqueza a elétrico'])if(!weakness.includes(needle))fail(`Emberash: Fraqueza do Incenso perdeu ${needle}.`);
  if(!errors.length)ok('Emberash preserva Herança específica, Bloodline duplo e inconsistência editorial');
}

const silver=races.find(r=>r.id==='kobold')?.subraces.find(s=>s.id==='silverskin-kobold');
if(!silver?.traits.find(t=>t.originalName==='Ice Shell')?.description.includes('três quartos') && !silver?.traits.find(t=>t.originalName==='Swim and Slide')?.description.includes('três quartos'))fail('Kobold Pele de Prata: cobertura de três quartos ausente.');
if(!silver?.traits.find(t=>t.originalName==='Ice Shell')?.description.includes('dano de fogo'))fail('Kobold Pele de Prata: encerramento por dano de fogo ausente.');
else ok('Kobold Pele de Prata conferido');

const planar=rules.paraprismaticTempest;
if(planar?.convergentSubraces!==14||planar?.subracePages!=='43–48')fail('Metadados de Subraças Convergentes ausentes em GRIMORIO_RACE_RULES.');
if(!Array.isArray(planar?.tempestDamageTypes)||planar.tempestDamageTypes.join('|')!=='Ácido|Frio|Fogo|Elétrico|Veneno')fail('Tipos de Tempest Damage não foram registrados para a integração racial.');
if(!Array.isArray(planar?.planarLegacyTraits)||planar.planarLegacyTraits.length!==6)fail('6 Traços de Legado Planares não foram preservados.');
else ok('Metadados raciais de Paraprismatic Tempest sincronizados');

const api=context.GRIMORIO_RACE_BROWSER;
if(!api)fail('Race Browser não carregado.');
else {
  const azebanHtml=api.renderRace('arhcoon','azeban-arhcoon');
  for(const needle of ['Arhcoon Azeban','Traço de Linhagem (Bloodline Trait)','Faro de Caçador','Grito de Impacto das Ondas'])if(!azebanHtml.includes(needle))fail(`Detalhe Azeban não renderiza ${needle}.`);
  const emberHtml=api.renderRace('hanyou','emberash');
  for(const needle of ['Emberash','escolha 2 Traços de Herança positivos e 1 prejudicial','Regras da Herança','Incenso Tempestuoso','Fraqueza do Incenso','Nota editorial'])if(!emberHtml.includes(needle))fail(`Detalhe Emberash não renderiza ${needle}.`);
  const berylHtml=api.renderRace('hadislin','beryl');
  for(const needle of ['Berilo','Flecha Cromática','Sopro do Dragão','Conflito entre fontes'])if(!berylHtml.includes(needle))fail(`Detalhe Berilo não renderiza ${needle}.`);
  if(!errors.length)ok('Race Browser renderiza Bloodline Trait e exceções de Hanyou/Hádislin');
}

const manifest=JSON.parse(read('manifest.json'));
if(manifest.version!=='5.58.0'||manifest.races!==46||manifest.raceSubraces!==382||manifest.raceTraitRecords!==1743||manifest.racesTextReviewed!==46)fail('Manifest racial 5.58.0 não está sincronizado.');
else ok('Manifest 5.58.0 sincronizado');
const index=read('index.html');
if(!index.includes('data/paraprismatic-tempest-races.js')||index.indexOf('data/paraprismatic-tempest-races.js')>index.indexOf('js/race-browser.js'))fail('Módulo racial Paraprismatic não está carregado antes do browser.');else ok('Ordem de carregamento racial correta');
finish();
function finish(){if(errors.length){console.error('\nFalhas:');for(const e of errors)console.error('✗ '+e);process.exit(1);}console.log('\nParaprismatic Tempest — Raças + Subraças v5.58.0 validado com sucesso.');}
