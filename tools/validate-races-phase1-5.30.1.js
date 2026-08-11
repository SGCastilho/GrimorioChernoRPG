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
for(const rel of ['data/lyre-races.js','data/lyre-races-phase2-structure.js','data/lyre-races-phase2-text.js','js/race-browser.js']){
  try{vm.runInContext(fs.readFileSync(path.join(root,rel),'utf8'),context,{filename:rel});}
  catch(e){fail(`Falha ao carregar ${rel}: ${e.message}`);}
}
if(errors.length)finish();
const races=context.GRIMORIO_RACES;
const api=context.GRIMORIO_RACE_BROWSER;
const human=races.find(r=>r.id==='human');
if(!human)fail('Raça Humano não encontrada.');
else{
  if(human.textRevision!=='full')fail('Humano não está marcado como revisão integral.'); else ok('Humano marcado como texto integral revisado');
  if(!Array.isArray(human.lore)||human.lore.length<4)fail('Descrição narrativa do Humano está incompleta.'); else ok('Descrição narrativa estruturada do Humano');
  if(human.subraces.length!==7)fail(`Humano deveria ter 7 subraças; encontrou ${human.subraces.length}.`); else ok('7 subraças humanas preservadas');
  for(const s of human.subraces)if(!s.description||s.description.length<60)fail(`Subraça humana ${s.name} sem descrição suficiente.`);
  const all=[...human.coreTraits,...human.legacyTraits,...human.mixedBloodTraits,...human.subraces.flatMap(s=>s.traits)];
  if(all.length!==25)fail(`Esperados 25 registros mecânicos humanos; encontrados ${all.length}.`); else ok('25 registros mecânicos humanos auditados');
  for(const t of all){
    if(!t.description||!t.description.trim())fail(`${t.name}: description ausente.`);
    const d=(t.description||'').trim();
    if(/^(Modifica testes ou salvaguardas nas condições descritas\.|Concede vantagem nas situações descritas\.|Modifica recuperação ou pontos de vida\.|Ação bônus\.|1 uso por Descanso Curto ou Longo\.|1 uso por Descanso Longo\.)$/i.test(d))fail(`${t.name}: description ainda parece placeholder.`);
    if(/\b(Choose|When you|You gain|saving throw|ability score|Short Rest|Long Rest)\b/.test(t.description||''))fail(`${t.name}: description ainda contém inglês mecânico.`);
  }
  const ingrained=human.coreTraits.find(t=>t.id==='ingrained-skill');
  if(!ingrained?.description.includes('Escolha dois atributos')||!ingrained.description.includes('metade do seu bônus de proficiência')||!ingrained.description.includes('substituir esse atributo'))fail('Perícia Enraizada não contém os três elementos mecânicos da fonte.'); else ok('Perícia Enraizada conferida');
  const jack=human.subraces.find(s=>s.id==='jackman');
  if(jack?.ability!=='Qualquer atributo à sua escolha (exceto Sabedoria) +1')fail('Aumento de atributo de Jackman incorreto.');
  const expanded=jack?.traits.find(t=>t.id==='expanded-skill-set');
  if(!expanded?.description.includes('todos os testes de resistência')||!expanded.description.includes('em vez de apenas aos dois'))fail('Conjunto Expandido de Perícias continua incompleto.'); else ok('Jackman — Conjunto Expandido de Perícias conferido');
  const feat=jack?.traits.find(t=>t.id==='feat');
  if(!feat?.description.includes('talento')||!feat.description.includes('pré-requisitos'))fail('Jackman — Talento incompleto.'); else ok('Jackman — Talento conferido');
  const swimmer=human.subraces.find(s=>s.id==='coastal')?.traits.find(t=>t.id==='swimmer');
  if(!swimmer?.description.includes('deslocamento de natação')||!swimmer.description.includes('reação'))fail('Nadador do Litorâneo não foi corrigido.'); else ok('Litorâneo — Nadador corrigido');
  const quickRest=human.subraces.find(s=>s.id==='sermian')?.traits.find(t=>t.id==='quick-rest');
  if(!quickRest?.description.includes('5 minutos')||!quickRest.description.includes('uma vez por Descanso Longo'))fail('Descanso Rápido do Sermian não foi completado.'); else ok('Sermian — Descanso Rápido conferido');
}

const humanHtml=api.renderRace('human');
for(const needle of ['Texto integral revisado','Contexto e identidade','Perícia Enraizada','Escolha dois atributos','Idiomas','Deslocamento'])if(!humanHtml.includes(needle))fail(`Ficha do Humano não renderiza: ${needle}`);
else{}
api.selectSubrace('human','jackman');
const jackHtml=api.renderRace('human');
for(const needle of ['Jackman','Qualquer atributo à sua escolha (exceto Sabedoria) +1','Conjunto Expandido de Perícias','todos os testes de resistência','Talento'])if(!jackHtml.includes(needle))fail(`Ficha de Jackman não renderiza: ${needle}`);
const gnomeHtml=api.renderRace('gnome');
if(!gnomeHtml.includes('revisão integral pendente'))fail('Raças ainda não revisadas não exibem aviso de pendência.'); else ok('Status de revisão pendente visível nas raças ainda não auditadas');
const catalog=api.renderCatalog();
if(catalog.includes('Revisão textual em andamento'))fail('Aviso de revisão textual não deveria permanecer no catálogo após o hotfix de UI.'); else ok('Aviso de revisão textual removido do catálogo');

const manifest=JSON.parse(fs.readFileSync(path.join(root,'manifest.json'),'utf8'));
if(!/^5\.30\.[1-9]$/.test(manifest.version))fail(`Manifest deveria estar em 5.30.1+; está em ${manifest.version}.`); else ok(`Manifest ${manifest.version} compatível com a Fase 1`);
const cfg=fs.readFileSync(path.join(root,'js/config.js'),'utf8');
if(!/APP_VERSION='5\.30\.[1-9]'/.test(cfg))fail('APP_VERSION não é compatível com 5.30.1+.'); else ok('APP_VERSION compatível com a Fase 1');
finish();
function finish(){
  if(errors.length){console.error('\nFalhas:');for(const e of errors)console.error('✗ '+e);process.exit(1);}
  console.log('\nFase 1 da revisão textual racial validada com sucesso.');
}
