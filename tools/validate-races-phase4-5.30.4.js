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
  document:{getElementById:()=>null},render:()=>{},navigate:()=>{}
};
context.window=context; vm.createContext(context);
const scripts=[
  'data/lyre-races.js','data/lyre-races-phase2-structure.js','data/lyre-races-phase2-text.js',
  'data/lyre-races-phase3-structure.js','data/lyre-races-phase3-text.js',
  'data/lyre-races-phase4-structure.js','data/lyre-races-phase4-text.js','js/race-browser.js'
];
for(const rel of scripts){try{vm.runInContext(fs.readFileSync(path.join(root,rel),'utf8'),context,{filename:rel});}catch(e){fail(`Falha ao carregar ${rel}: ${e.message}`);}}
const races=context.GRIMORIO_RACES,api=context.GRIMORIO_RACE_BROWSER;
if(!Array.isArray(races))fail('GRIMORIO_RACES não foi exposto.');
if(!api)fail('GRIMORIO_RACE_BROWSER não foi exposto.');
if(errors.length)finish();
const phase4={
  'kits-adria':{sub:5,traits:24},'kobold':{sub:5,traits:22},'kua-hono':{sub:7,traits:30},'merfolk':{sub:4,traits:18},
  'minotaur':{sub:5,traits:23},'nephilim':{sub:4,traits:21},'orc':{sub:4,traits:20},'petratara':{sub:3,traits:20},
  'primordia':{sub:8,traits:29},'tarnished':{sub:5,traits:23},'trealtin':{sub:4,traits:21},'vanquis':{sub:6,traits:29}
};
const generic=['Modifica testes ou salvaguardas nas condições descritas.','Concede vantagem nas situações descritas.','Modifica recuperação ou pontos de vida.','Ação bônus.','Ação.','Reação.','1 uso por Descanso Curto ou Longo.','1 uso por Descanso Longo.','Concede a característica racial referenciada pelo traço.','Benefício racial especial'];
function allTraits(r){return [...r.coreTraits,...r.legacyTraits,...r.mixedBloodTraits,...r.subraces.flatMap(s=>s.traits)];}
for(const [id,expect] of Object.entries(phase4)){
  const r=races.find(x=>x.id===id); if(!r){fail(`${id}: raça ausente.`);continue;}
  if(r.textRevision!=='full')fail(`${r.name}: textRevision deveria ser full.`);
  if(r.subraces.length!==expect.sub)fail(`${r.name}: esperadas ${expect.sub} subraças; encontrou ${r.subraces.length}.`);
  const traits=allTraits(r); if(traits.length!==expect.traits)fail(`${r.name}: esperados ${expect.traits} registros mecânicos; encontrou ${traits.length}.`);
  if(!Array.isArray(r.lore)||!r.lore.length)fail(`${r.name}: contexto narrativo integral ausente.`);
  for(const s of r.subraces)if(!s.description||s.description.trim().length<40)fail(`${r.name}/${s.name}: descrição de subraça ausente ou curta demais.`);
  for(const t of traits){const d=String(t.description||'').trim();if(!d)fail(`${r.name}/${t.name}: description integral ausente.`);if(generic.some(g=>d.includes(g)))fail(`${r.name}/${t.name}: descrição ainda usa placeholder genérico.`);}
}
if(!errors.length)ok('12 raças da Fase 4 possuem texto integral PT-BR e descrições de subraça');
const phaseSub=Object.keys(phase4).reduce((n,id)=>n+races.find(r=>r.id===id).subraces.length,0);
const phaseTraits=Object.keys(phase4).reduce((n,id)=>n+allTraits(races.find(r=>r.id===id)).length,0);
if(phaseSub!==60)fail(`Fase 4 deveria cobrir 60 subraças; encontrou ${phaseSub}.`); else ok('60 subraças revisadas na Fase 4');
if(phaseTraits!==280)fail(`Fase 4 deveria cobrir 280 registros mecânicos; encontrou ${phaseTraits}.`); else ok('280 registros mecânicos revisados na Fase 4');

// Sentinelas de alta complexidade contra a fonte.
const kits=races.find(r=>r.id==='kits-adria');
const shift=kits.coreTraits.find(t=>t.id==='kits-adrian-shapeshifting')?.description||'';
if(!shift.includes('Força e Constituição')||!shift.includes('concentração')||!shift.includes('Descanso Curto ou Longo'))fail('Kits’adria: Metamorfose incompleta.');else ok('Kits’adria — Metamorfose conferida');
const kob=races.find(r=>r.id==='kobold');
const exploit=kob.coreTraits.find(t=>t.id==='exploitation-tactics')?.description||'';
if(!exploit.includes('vantagem')||!exploit.includes('bônus de proficiência'))fail('Kobold: Táticas de Exploração incompletas.');else ok('Kobold — Táticas de Exploração conferidas');
const kua=races.find(r=>r.id==='kua-hono');
const lizard=kua.subraces.find(s=>s.id==='lizard');
if(!lizard.traits.some(t=>t.id==='scent-tracker'))fail('Kua Hono/Lagarto: Rastreador pelo Olfato continua ausente.');else ok('Kua Hono — Rastreador pelo Olfato restaurado');
const regen=kua.coreTraits.find(t=>t.id==='reptilian-regeneration')?.description||'';
if(!regen.includes('metade')||!regen.includes('Dados de Vida')||!regen.includes('restauração menor'))fail('Kua Hono: Regeneração Reptiliana incompleta.');else ok('Kua Hono — Regeneração Reptiliana conferida');
const mer=races.find(r=>r.id==='merfolk');
const shoreline=mer.subraces.find(s=>s.id==='shoreline');
if(!shoreline.editorialNote||!/incompleta/i.test(shoreline.editorialNote)||!/atributo/i.test(shoreline.ability))fail('Povo do Mar/Litorâneo: lacuna do ASI não foi explicitada sem inferência.');else ok('Povo do Mar — lacuna editorial do Litorâneo preservada');
const min=races.find(r=>r.id==='minotaur');
const horn=min.coreTraits.find(t=>t.id==='stone-horns')?.description||'';
if(!horn.includes('10 pés')||!horn.includes('Caído')||!horn.includes('vantagem'))fail('Minotauro: Chifres de Pedra incompletos.');else ok('Minotauro — Chifres de Pedra conferidos');
const neph=races.find(r=>r.id==='nephilim');
if(!neph.mixedBloodTraits.some(t=>t.id==='bloodline'))fail('Nefilim: Linhagem de Sangue Misto continua ausente.');else ok('Nefilim — Linhagem de Sangue Misto restaurada');
const orc=races.find(r=>r.id==='orc');
const relentless=orc.coreTraits.find(t=>t.id==='relentless-endurance')?.description||'';
if(!relentless.includes('1 ponto de vida')||!relentless.includes('desvantagem')||!relentless.includes('Descanso Curto ou Longo'))fail('Orc: Resistência Implacável incompleta.');else ok('Orc — Resistência Implacável conferida');
const pet=races.find(r=>r.id==='petratara');
const mystic=pet.legacyTraits.find(t=>t.id==='cursed-mystic-eyes')?.description||'';
if(!mystic.includes('1º nível')||!mystic.includes('usos adicionais')||!mystic.includes('bônus de proficiência'))fail('Pétratára: Olhos Místicos Amaldiçoados incompletos.');else ok('Pétratára — Olhos Místicos Amaldiçoados conferidos');
const prim=races.find(r=>r.id==='primordia');
if(prim.subraces.some(s=>!s.elementalMagicSpells))fail('Primordia: tabela de Magia Elemental não foi vinculada às 8 subraças.');else ok('Primordia — 8 conjuntos de Magia Elemental vinculados');
const primHtml=api.renderRace('primordia');
for(const n of ['Magia Elemental — magias desta subraça','Truque','1º nível','2º nível'])if(!primHtml.includes(n))fail(`Primordia: interface não renderiza ${n}.`);
if(!errors.some(e=>e.startsWith('Primordia: interface')))ok('Primordia — painel de Magia Elemental renderizado');
const tar=races.find(r=>r.id==='tarnished');
const lucid=tar.coreTraits.find(t=>t.id==='lucid-form')?.description||'';
if(!lucid.includes('aparência')||!lucid.includes('ilus'))fail('Maculado: Forma Lúcida incompleta.');else ok('Maculado — Forma Lúcida conferida');
const tre=races.find(r=>r.id==='trealtin');
const fungal=tre.subraces.find(s=>s.id==='fungalform');
if(fungal.traits.some(t=>['communicative-spores','healing-cloud','pacifying-spores','poison-spores'].includes(t.id)))fail('Trealtin/Fúngico: opções internas de Sopro de Esporos ainda estão achatadas.');
const puff=fungal.traits.find(t=>t.id==='spore-puff')?.description||'';
if(!['Esporos Comunicativos','Nuvem Curativa','Esporos Pacificadores','Esporos Venenosos'].every(x=>puff.includes(x)))fail('Trealtin/Fúngico: Sopro de Esporos não reúne as quatro opções.');else ok('Trealtin — Sopro de Esporos consolidado corretamente');
const van=races.find(r=>r.id==='vanquis');
const ghoul=van.subraces.find(s=>s.id==='ghoul');
if(ghoul.traits.some(t=>['tiny','small','medium','large-and-larger'].includes(t.id)))fail('Vanquis/Carniçal: linhas de tamanho de Frenesi Alimentar ainda estão achatadas.');
const feed=ghoul.traits.find(t=>t.id==='feeding-frenzy')?.description||'';
if(!['Minúscula','Pequena','Média','Grande'].every(x=>feed.includes(x)))fail('Vanquis/Carniçal: tabela de Frenesi Alimentar incompleta.');else ok('Vanquis — Frenesi Alimentar consolidado corretamente');
const shambled=van.subraces.find(s=>s.id==='amalgamation')?.traits.find(t=>t.id==='shambled-body')?.description||'';
if(!shambled.includes('dois Traços de Legado adicionais')||!shambled.includes('raças diferentes'))fail('Vanquis/Amálgama: Corpo Remendado incompleto.');else ok('Vanquis — Corpo Remendado conferido');

const totalTraits=races.reduce((n,r)=>n+allTraits(r).length,0), totalSubs=races.reduce((n,r)=>n+r.subraces.length,0), full=races.filter(r=>r.textRevision==='full');
if(races.length!==34)fail(`Esperadas 34 raças; encontrou ${races.length}.`);else ok('34 raças preservadas');
if(totalSubs!==196)fail(`Esperadas 196 subraças; encontrou ${totalSubs}.`);else ok('196 subraças preservadas');
if(totalTraits!==928)fail(`Esperados 928 registros após correções estruturais; encontrou ${totalTraits}.`);else ok('928 registros mecânicos após consolidações estruturais');
if(full.length!==34)fail(`Esperadas 34 raças integralmente revisadas; encontrou ${full.length}.`);else ok('34/34 raças com texto integral revisado');
const catalog=api.renderCatalog();
if(catalog.includes('Resumo — revisão pendente'))fail('Catálogo ainda exibe raças pendentes após a Fase 4.');else ok('Catálogo não possui mais raças pendentes');
api.selectSubrace('merfolk','shoreline'); const shoreHtml=api.renderRace('merfolk'); if(!shoreHtml.includes('Nota editorial')||!shoreHtml.includes('atributo'))fail('Nota editorial do Litorâneo não renderiza.');else ok('Nota editorial do Litorâneo renderizada');

const index=fs.readFileSync(path.join(root,'index.html'),'utf8');
let last=-1;for(const item of scripts){const p=index.indexOf(item);if(p<0||p<=last)fail(`index.html: ordem incorreta/ausente para ${item}.`);last=p;}
if(!errors.some(e=>e.startsWith('index.html')))ok('Ordem de carregamento da Fase 4');
const manifest=JSON.parse(fs.readFileSync(path.join(root,'manifest.json'),'utf8'));
if(!/^5\.30\.(?:[4-9]|[1-9][0-9]+)$/.test(manifest.version)||manifest.races!==34||manifest.raceSubraces!==196||manifest.raceTraitRecords!==928||manifest.racesTextReviewed!==34)fail('Manifest pós-5.30.4 inconsistente.');else ok('Manifest pós-5.30.4 sincronizado');
const cfg=fs.readFileSync(path.join(root,'js/config.js'),'utf8'); if(!cfg.includes("APP_VERSION='"+manifest.version+"'"))fail('APP_VERSION não está sincronizado ao manifest.');else ok('APP_VERSION sincronizado ao manifest');
finish();
function finish(){if(errors.length){console.error('\nFalhas:');for(const e of errors)console.error('✗ '+e);process.exit(1);}console.log('\nFase 4 da revisão textual racial validada com sucesso.');}
