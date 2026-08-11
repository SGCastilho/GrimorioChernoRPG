#!/usr/bin/env node
'use strict';
const fs=require('fs');
const path=require('path');
const vm=require('vm');
const root=path.resolve(__dirname,'..');
const errors=[];
const ok=m=>console.log('✓ '+m);
const fail=m=>errors.push(m);
const storage=new Map();
const context={
  console,
  localStorage:{getItem:k=>storage.has(k)?storage.get(k):null,setItem:(k,v)=>storage.set(k,String(v))},
  document:{getElementById:()=>null},
  render:()=>{},
  navigate:()=>{}
};
context.window=context;
vm.createContext(context);
const scripts=['data/lyre-races.js','data/lyre-races-phase2-structure.js','data/lyre-races-phase2-text.js','data/lyre-races-phase3-structure.js','data/lyre-races-phase3-text.js','js/race-browser.js'];
for(const rel of scripts){
  try{vm.runInContext(fs.readFileSync(path.join(root,rel),'utf8'),context,{filename:rel});}
  catch(e){fail(`Falha ao carregar ${rel}: ${e.message}`);}
}
const races=context.GRIMORIO_RACES;
const api=context.GRIMORIO_RACE_BROWSER;
if(!Array.isArray(races))fail('GRIMORIO_RACES não foi exposto.');
if(!api)fail('GRIMORIO_RACE_BROWSER não foi exposto.');
if(errors.length)finish();

const phase3={
  'gnome':{sub:5,traits:27},
  'goblin':{sub:5,traits:26},
  'goliath':{sub:5,traits:25},
  'hadislin':{sub:19,traits:51},
  'halfling':{sub:5,traits:21},
  'hanyou':{sub:8,traits:84},
  'hobgoblin':{sub:4,traits:19},
  'ilthrak-yar':{sub:4,traits:21},
  'kaijou':{sub:5,traits:27}
};
const generic=[
  'Modifica testes ou salvaguardas nas condições descritas.',
  'Concede vantagem nas situações descritas.',
  'Modifica recuperação ou pontos de vida.',
  'Ação bônus.','Ação.','Reação.',
  '1 uso por Descanso Curto ou Longo.','1 uso por Descanso Longo.',
  'Concede a característica racial referenciada pelo traço.',
  'Benefício racial especial'
];
const english=/\b(you|your|when|choose|must|saving throw|ability check|long rest|short rest|bonus action|proficiency bonus|spellcasting ability)\b/i;
function allTraits(r){return [...r.coreTraits,...r.legacyTraits,...r.mixedBloodTraits,...r.subraces.flatMap(s=>s.traits)];}
for(const [id,expect] of Object.entries(phase3)){
  const r=races.find(x=>x.id===id);
  if(!r){fail(`${id}: raça ausente.`);continue;}
  if(r.textRevision!=='full')fail(`${r.name}: textRevision deveria ser full.`);
  if(r.subraces.length!==expect.sub)fail(`${r.name}: esperadas ${expect.sub} subraças; encontrou ${r.subraces.length}.`);
  const traits=allTraits(r);
  if(traits.length!==expect.traits)fail(`${r.name}: esperados ${expect.traits} registros mecânicos; encontrou ${traits.length}.`);
  if(!Array.isArray(r.lore)||!r.lore.length)fail(`${r.name}: contexto narrativo integral ausente.`);
  for(const s of r.subraces){
    if(!s.description||s.description.trim().length<45)fail(`${r.name}/${s.name}: descrição de subraça ausente ou curta demais.`);
  }
  for(const t of traits){
    const d=String(t.description||'').trim();
    if(!d)fail(`${r.name}/${t.name}: description integral ausente.`);
    if(generic.some(g=>d.includes(g)))fail(`${r.name}/${t.name}: descrição ainda usa placeholder genérico.`);
    if(english.test(d))fail(`${r.name}/${t.name}: descrição ainda contém mecânica em inglês: ${d.slice(0,100)}`);
  }
}
if(!errors.length)ok('9 raças da Fase 3 possuem texto integral PT-BR e descrições de subraça');

const phaseSub=Object.keys(phase3).reduce((n,id)=>n+races.find(r=>r.id===id).subraces.length,0);
const phaseTraits=Object.keys(phase3).reduce((n,id)=>n+allTraits(races.find(r=>r.id===id)).length,0);
if(phaseSub!==60)fail(`Fase 3 deveria cobrir 60 subraças; encontrou ${phaseSub}.`); else ok('60 subraças revisadas na Fase 3');
if(phaseTraits!==301)fail(`Fase 3 deveria cobrir 301 registros mecânicos; encontrou ${phaseTraits}.`); else ok('301 registros mecânicos revisados na Fase 3');

// Pontos mecânicos de alta complexidade conferidos contra a fonte.
const gnome=races.find(r=>r.id==='gnome');
const clever=gnome.coreTraits.find(t=>t.id==='gift-of-cleverness')?.description||'';
if(!clever.includes('10 minutos')||!clever.includes('d20')||!clever.includes('como 10'))fail('Gnomo: Dom da Esperteza não preserva tempo/resultado mínimo.'); else ok('Gnomo — Dom da Esperteza conferido');

const goblin=races.find(r=>r.id==='goblin');
const fairy=goblin.subraces.find(s=>s.id==='wild-goblin')?.traits.find(t=>t.id==='fairy-step')?.description||'';
if(!fairy.includes('9 metros')||!fairy.includes('retorna')||!fairy.includes('Atordoado'))fail('Goblin Selvagem: Passo Feérico incompleto.'); else ok('Goblin Selvagem — Passo Feérico conferido');

const goliath=races.find(r=>r.id==='goliath');
const stone=goliath.coreTraits.find(t=>t.id==='stone-s-endurance')?.description||'';
if(!stone.includes('1d12')||!stone.includes('Constituição')||!stone.includes('bônus de proficiência'))fail('Golias: Resistência da Pedra incompleta.'); else ok('Golias — Resistência da Pedra conferida');

const hadislin=races.find(r=>r.id==='hadislin');
if(hadislin.subraces.length!==19||hadislin.subraces.some(s=>!s.cursedLegacySpells))fail('Hádislin: tabela de Legado Amaldiçoado não foi vinculada às 19 subraças.'); else ok('Hádislin — 19 tabelas de Legado Amaldiçoado vinculadas');
const cursed=hadislin.coreTraits.find(t=>t.id==='cursed-legacy')?.description||'';
if(!cursed.includes('3º nível')||!cursed.includes('5º nível')||!cursed.includes('bônus de proficiência'))fail('Hádislin: Legado Amaldiçoado incompleto.'); else ok('Hádislin — Legado Amaldiçoado conferido');
const hadHtml=api.renderRace('hadislin');
if(!hadHtml.includes('Legado Amaldiçoado — magias desta subraça')||!hadHtml.includes('Nível 3')||!hadHtml.includes('Nível 5'))fail('Hádislin: painel de magias por subraça não renderiza.'); else ok('Hádislin — painel de magias por subraça renderizado');

const halfling=races.find(r=>r.id==='halfling');
const favor=halfling.coreTraits.find(t=>t.id==='luck-and-favor')?.description||'';
if(!favor.includes('ponto de Favor')||!favor.includes('bônus de proficiência')||!favor.includes('Descanso Longo'))fail('Halfling: Sorte e Favor incompleta.'); else ok('Halfling — Sorte e Favor conferida');

const hanyou=races.find(r=>r.id==='hanyou');
const hr=hanyou.heritageRules||{};
if(hr.positiveChoices!==2||hr.detrimentalChoices!==2||String(hr.removeDetrimentalAt)!=='8,13'||hr.secondaryPositiveChoices!==1||hr.secondaryDetrimentalChoices!==1||!hr.secondaryBloodlineAutomatic||hr.secondaryLegacySlotsUsed!==1)fail('Hanyou: regras estruturadas de Herança não correspondem à fonte.'); else ok('Hanyou — regra 2 positivos + 2 prejudiciais e níveis 8/13 preservada');
for(const s of hanyou.subraces){
  const roles=s.traits.reduce((o,t)=>(o[t.heritageRole||'none']=(o[t.heritageRole||'none']||0)+1,o),{});
  if(roles.rule!==1||roles.positive!==4||!roles.lineage||roles.detrimental<3)fail(`Hanyou/${s.name}: categorias de Herança inconsistentes.`);
}
const regen=hanyou.coreTraits.find(t=>t.id==='demonic-regeneration')?.description||'';
if(!regen.includes('todos os seus Dados de Vida')||!regen.toLowerCase().includes('como uma ação')||!regen.includes('bônus de proficiência'))fail('Hanyou: Regeneração Demoníaca incompleta.'); else ok('Hanyou — Regeneração Demoníaca conferida');
const hanyouHtml=api.renderRace('hanyou');
for(const needle of ['Escolhas de Herança Hanyou','Traços de Herança positivos — escolha 2','Traços de Herança prejudiciais — escolha 2','8º nível','13º nível'])if(!hanyouHtml.includes(needle))fail(`Hanyou: interface não renderiza ${needle}.`);
if(!errors.some(e=>e.startsWith('Hanyou: interface')))ok('Hanyou — interface especial de Herança renderizada');

const hob=races.find(r=>r.id==='hobgoblin');
if(hob.legacyTraits.some(t=>['hospitality','passage','spite'].includes(t.id)))fail('Hobgoblin: opções internas de Orientação Feérica ainda foram achatadas como Legados.');
const fey=hob.legacyTraits.find(t=>t.id==='fey-guidance')?.description||'';
if(!fey.includes('Hospitalidade')||!fey.includes('Passagem')||!fey.includes('Despeito'))fail('Hobgoblin: Orientação Feérica não contém suas três opções internas.'); else ok('Hobgoblin — Orientação Feérica consolidada corretamente');

const ilthrak=races.find(r=>r.id==='ilthrak-yar');
const hands=ilthrak.legacyTraits.find(t=>t.id==='extra-hands')?.description||'';
if(!hands.includes('ação bônus ou interação adicional')||!hands.includes('ações diferentes'))fail('Ilthrak-yar: Mãos Extras não preserva restrição de ações diferentes.'); else ok('Ilthrak-yar — Mãos Extras conferidas');

const kaijou=races.find(r=>r.id==='kaijou');
const thag=kaijou.legacyTraits.find(t=>t.id==='thagomizer')?.description||'';
if(!thag.includes('1d4')||!thag.includes('bônus de proficiência')||!thag.includes('Força'))fail('Kaijou: Thagomizer incompleto.'); else ok('Kaijou — Thagomizer conferido');

const totalTraits=races.reduce((n,r)=>n+allTraits(r).length,0);
const totalSubs=races.reduce((n,r)=>n+r.subraces.length,0);
const full=races.filter(r=>r.textRevision==='full').map(r=>r.id);
if(races.length!==34)fail(`Catálogo deveria manter 34 raças; encontrou ${races.length}.`); else ok('34 raças preservadas');
if(totalSubs!==196)fail(`Catálogo deveria manter 196 subraças; encontrou ${totalSubs}.`); else ok('196 subraças preservadas');
if(totalTraits!==934)fail(`Catálogo deveria ter 934 registros após a correção do Hobgoblin; encontrou ${totalTraits}.`); else ok('934 registros de traços após correções estruturais');
if(full.length!==22)fail(`Esperadas 22 raças integralmente revisadas; encontrou ${full.length}.`); else ok('22/34 raças com texto integral revisado');
const pending=api.renderRace('kits-adria');
if(!pending.includes('revisão integral pendente'))fail('Próxima raça ainda não revisada não mantém aviso de pendência.'); else ok('Raças futuras permanecem explicitamente pendentes');

const index=fs.readFileSync(path.join(root,'index.html'),'utf8');
const order=['data/lyre-races.js','data/lyre-races-phase2-structure.js','data/lyre-races-phase2-text.js','data/lyre-races-phase3-structure.js','data/lyre-races-phase3-text.js','js/race-browser.js'];
let last=-1;for(const item of order){const p=index.indexOf(item);if(p<0||p<=last)fail(`index.html: ordem incorreta/ausente para ${item}.`);last=p;}
if(!errors.some(e=>e.startsWith('index.html')))ok('Ordem de carregamento dos módulos da Fase 3');

const manifest=JSON.parse(fs.readFileSync(path.join(root,'manifest.json'),'utf8'));
if(!/^5\.30\.[3-9]$/.test(manifest.version)||manifest.races!==34||manifest.raceSubraces!==196||manifest.racesTextReviewed<22)fail('Manifest não é compatível com a Fase 3.'); else ok(`Manifest ${manifest.version} compatível com a Fase 3`);
const cfg=fs.readFileSync(path.join(root,'js/config.js'),'utf8');
if(!/APP_VERSION='5\.30\.[3-9]'/.test(cfg))fail('APP_VERSION não é compatível com 5.30.3+.'); else ok('APP_VERSION compatível com a Fase 3');

finish();
function finish(){
  if(errors.length){console.error('\nFalhas:');for(const e of errors)console.error('✗ '+e);process.exit(1);}
  console.log('\nFase 3 da revisão textual racial validada com sucesso.');
}
