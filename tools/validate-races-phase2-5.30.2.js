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
const context={console,localStorage:{getItem:k=>storage.has(k)?storage.get(k):null,setItem:(k,v)=>storage.set(k,String(v))},document:{getElementById:()=>null},render:()=>{},navigate:()=>{}};
context.window=context;
vm.createContext(context);
const load=['data/lyre-races.js','data/lyre-races-phase2-structure.js','data/lyre-races-phase2-text.js','js/race-browser.js'];
for(const rel of load){try{vm.runInContext(fs.readFileSync(path.join(root,rel),'utf8'),context,{filename:rel});}catch(e){fail(`Falha ao carregar ${rel}: ${e.message}`);}}
if(errors.length)finish();
const races=context.GRIMORIO_RACES;
const api=context.GRIMORIO_RACE_BROWSER;
const phase2Ids=['arhcoon','beast-tribe','birdfolk','capy-hado','dragonkin','dwarf','elf','enaretos','feralus','firbolg','flooflin','framebilt'];
const expected={
 'arhcoon':[5,21],'beast-tribe':[9,28],'birdfolk':[4,23],'capy-hado':[4,20],dragonkin:[6,27],dwarf:[5,26],elf:[11,45],enaretos:[7,32],feralus:[5,26],firbolg:[5,27],flooflin:[4,24],framebilt:[4,23]
};
let phase2TraitCount=0,phase2SubCount=0;
const placeholder=/^(Modifica testes ou salvaguardas nas condições descritas\.|Concede vantagem nas situações descritas\.|Modifica recuperação ou pontos de vida\.|Ação bônus\.|1 uso por Descanso Curto ou Longo\.|1 uso por Descanso Longo\.|Concede a característica racial referenciada pelo traço\.)$/i;
for(const id of phase2Ids){
 const r=races.find(x=>x.id===id); if(!r){fail(`Raça ${id} ausente.`);continue;}
 if(r.textRevision!=='full')fail(`${r.name}: não está marcada como texto integral.`);
 if(!Array.isArray(r.lore)||!r.lore.length)fail(`${r.name}: lore integral ausente.`);
 const all=[...r.coreTraits,...r.legacyTraits,...r.mixedBloodTraits,...r.subraces.flatMap(s=>s.traits)];
 phase2TraitCount+=all.length; phase2SubCount+=r.subraces.length;
 const [sc,tc]=expected[id];
 if(r.subraces.length!==sc)fail(`${r.name}: esperadas ${sc} subraças; encontrou ${r.subraces.length}.`);
 if(all.length!==tc)fail(`${r.name}: esperados ${tc} registros mecânicos; encontrou ${all.length}.`);
 for(const s of r.subraces)if(!s.description||s.description.trim().length<50)fail(`${r.name}/${s.name}: descrição de subraça ausente ou curta.`);
 for(const t of all){
   const d=(t.description||'').trim();
   if(d.length<20)fail(`${r.name}/${t.name}: description integral ausente.`);
   if(placeholder.test(d))fail(`${r.name}/${t.name}: ainda usa placeholder genérico.`);
   if(/\b(Choose two|You gain proficiency|When you make|saving throws made|per Long Rest|your proficiency bonus)\b/i.test(d))fail(`${r.name}/${t.name}: descrição ainda contém trecho mecânico em inglês.`);
 }
}
if(phase2SubCount!==69)fail(`Fase 2 deveria revisar 69 subraças; encontrou ${phase2SubCount}.`); else ok('69 subraças da Fase 2 revisadas');
if(phase2TraitCount!==322)fail(`Fase 2 deveria revisar 322 registros mecânicos; encontrou ${phase2TraitCount}.`); else ok('322 registros mecânicos da Fase 2 revisados');
if(phase2Ids.every(id=>races.find(r=>r.id===id)?.textRevision==='full'))ok('12 raças da Fase 2 marcadas como texto integral');

// Correções estruturais que motivaram a releitura por página.
const capy=races.find(r=>r.id==='capy-hado');
if(!capy.mixedBloodTraits.some(t=>t.id==='bloodline'))fail('Capy’hado: Linhagem de Sangue Misto continua ausente.'); else ok('Capy’hado — Linhagem restaurada');
const sermian=races.find(r=>r.id==='dwarf')?.subraces.find(s=>s.id==='sermian-dwarf');
if(!sermian?.traits.some(t=>t.id==='blindsight'))fail('Anão Sermiano: Visão às Cegas ausente.'); else ok('Anão Sermiano — Visão às Cegas restaurada');
const feralus=races.find(r=>r.id==='feralus');
if(!feralus?.coreTraits.some(t=>t.id==='feline-haste'))fail('Feralus: Pressa Felina não consta nos Traços Fixos.'); else ok('Feralus — Pressa Felina restaurada como traço fixo');
const wild=races.find(r=>r.id==='elf')?.subraces.find(s=>s.id==='wild-elf');
if(wild?.traits.some(t=>['autumn-form','spring-form'].includes(t.id))||!wild?.traits.find(t=>t.id==='seasonal-form')?.description.includes('Inverno:')||!wild.traits.find(t=>t.id==='seasonal-form')?.description.includes('Verão:'))fail('Elfo Selvagem: Forma Sazonal ainda está fragmentada.'); else ok('Elfo Selvagem — Forma Sazonal consolidada');
const ena=races.find(r=>r.id==='enaretos');
if(ena.mixedBloodTraits.map(t=>t.id).join(',')!=='bloodline,celestial-wings')fail('Enáretos: Sangue Misto ainda contém traços deslocados.');
if(!ena.subraces.find(s=>s.id==='discovery')?.traits.some(t=>t.id==='radiant-passage'))fail('Enáretos Descoberta: Passagem Radiante ausente.');
if(!ena.subraces.find(s=>s.id==='prophecy')?.traits.some(t=>t.id==='reading-forward'))fail('Enáretos Profecia: Ler Adiante ausente.');
if(!errors.some(e=>e.startsWith('Enáretos')))ok('Enáretos — continuidades de página corrigidas');

const totalTraits=races.reduce((n,r)=>n+r.coreTraits.length+r.legacyTraits.length+r.mixedBloodTraits.length+r.subraces.reduce((a,s)=>a+s.traits.length,0),0);
if(totalTraits!==937)fail(`Catálogo deveria ter 937 registros de traços após correções; encontrou ${totalTraits}.`); else ok('937 registros de traços no catálogo corrigido');
const full=races.filter(r=>r.textRevision==='full').map(r=>r.id);
if(full.length!==13||!full.includes('human'))fail(`Esperadas 13 raças integralmente revisadas (Humano + Fase 2); encontrou ${full.length}.`); else ok('13/34 raças com texto integral revisado');
const pending=api.renderRace('gnome');
if(!pending.includes('revisão integral pendente'))fail('Raça ainda não revisada não mantém aviso de pendência.'); else ok('Raças futuras permanecem marcadas como pendentes');
for(const id of ['dragonkin','elf','framebilt']){
 const html=api.renderRace(id); if(!html.includes('Texto integral revisado')||!html.includes('Contexto e identidade'))fail(`${id}: ficha não renderiza conteúdo integral.`);
}
if(!errors.length)ok('Renderização das fichas revisadas conferida');

const index=fs.readFileSync(path.join(root,'index.html'),'utf8');
const a=index.indexOf('data/lyre-races.js'),b=index.indexOf('data/lyre-races-phase2-structure.js'),c=index.indexOf('data/lyre-races-phase2-text.js'),d=index.indexOf('js/race-browser.js');
if(!(a>=0&&a<b&&b<c&&c<d))fail('Ordem dos módulos raciais da Fase 2 no index.html está incorreta.'); else ok('Ordem de carregamento dos módulos da Fase 2');
const manifest=JSON.parse(fs.readFileSync(path.join(root,'manifest.json'),'utf8'));
if(!/^5\.30\.[2-9]$/.test(manifest.version)||manifest.races!==34||manifest.raceSubraces!==196||manifest.racesTextReviewed<13)fail('Manifest não é compatível com a Fase 2.'); else ok(`Manifest ${manifest.version} compatível com a Fase 2`);
const cfg=fs.readFileSync(path.join(root,'js/config.js'),'utf8');
if(!/APP_VERSION='5\.30\.[2-9]'/.test(cfg))fail('APP_VERSION não é compatível com 5.30.2+.'); else ok('APP_VERSION compatível com a Fase 2');
finish();
function finish(){if(errors.length){console.error('\nFalhas:');for(const e of errors)console.error('✗ '+e);process.exit(1);}console.log('\nFase 2 da revisão textual racial validada com sucesso.');}
