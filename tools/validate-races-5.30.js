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
for(const rel of ['data/lyre-races.js','js/race-browser.js']){
  try{vm.runInContext(fs.readFileSync(path.join(root,rel),'utf8'),context,{filename:rel});}
  catch(e){fail(`Falha ao carregar ${rel}: ${e.message}`);}
}
const races=context.GRIMORIO_RACES;
const rules=context.GRIMORIO_RACE_RULES;
const api=context.GRIMORIO_RACE_BROWSER;
if(!Array.isArray(races))fail('GRIMORIO_RACES não foi exposto como array.');
if(!rules)fail('GRIMORIO_RACE_RULES não foi exposto.');
if(!api)fail('GRIMORIO_RACE_BROWSER não foi exposto.');
if(errors.length)finish();

if(races.length!==34)fail(`Esperadas 34 raças; encontradas ${races.length}.`); else ok('34 raças indexadas');
const subCount=races.reduce((n,r)=>n+r.subraces.length,0);
if(subCount!==196)fail(`Esperadas 196 subraças; encontradas ${subCount}.`); else ok('196 subraças indexadas');
const ids=races.map(r=>r.id);
if(new Set(ids).size!==ids.length)fail('Há IDs de raça duplicados.'); else ok('IDs de raça únicos');
for(const r of races){
  if(r.legacyChoices!==2)fail(`${r.name}: legacyChoices deve ser 2.`);
  if(!r.sourcePage||r.sourcePage<197||r.sourcePage>314)fail(`${r.name}: página inicial inválida (${r.sourcePage}).`);
  if(!Array.isArray(r.legacyTraits)||!r.legacyTraits.length)fail(`${r.name}: lista de Traços de Legado vazia.`);
  if(!Array.isArray(r.subraces)||!r.subraces.length)fail(`${r.name}: nenhuma subraça indexada.`);
  const sid=r.subraces.map(s=>s.id); if(new Set(sid).size!==sid.length)fail(`${r.name}: IDs de subraça duplicados.`);
  const all=[...r.coreTraits,...r.legacyTraits,...r.mixedBloodTraits,...r.subraces.flatMap(s=>s.traits)];
  for(const t of all){
    if(!t.name||!t.summary)fail(`${r.name}: traço sem nome/resumo.`);
    if(/Benefício racial especial/i.test(t.summary))fail(`${r.name}/${t.name}: resumo genérico pendente.`);
    if(/\b(you|your|when|choose|must|saving throw|ability check)\b/i.test(t.summary))fail(`${r.name}/${t.name}: resumo ainda contém texto mecânico em inglês.`);
  }
}
if(!errors.length)ok('Traços, resumos PT-BR e páginas básicos validados');

const enaretos=races.find(r=>r.originalName==='Enáretos');
if(!enaretos?.subraces.some(s=>s.originalName==='Glory'))fail('Subraça Glória dos Enáretos não foi indexada.'); else ok('Enáretos: subraça Glória presente');
const dragon=races.find(r=>r.originalName==='Dragonkin');
const chromatic=dragon?.subraces.find(s=>s.originalName==='Chromatic');
if(!chromatic||chromatic.traits.length!==3||!chromatic.traits.some(t=>t.originalName==='Chrome Critical')||!chromatic.traits.some(t=>t.originalName==='Warding Scales'))fail('Dragonkin Cromático não possui as três características esperadas.'); else ok('Dragonkin Cromático conferido');
const hanyou=races.find(r=>r.originalName==='Hanyou');
if(hanyou?.subraces.length!==8)fail('Hanyou deveria possuir 8 subraças.');
const hanyouRule=hanyou?.subraces.flatMap(s=>s.traits).find(t=>t.originalName==='Heritage Traits');
if(!hanyouRule?.summary.includes('2 traços positivos')||!hanyouRule.summary.includes('2 traços prejudiciais'))fail('Regra interna de Traços de Herança Hanyou não foi preservada.'); else ok('Regra especial de Hanyou preservada');
const vanquis=races.find(r=>r.originalName==='Vanquis');
const shambled=vanquis?.subraces.find(s=>s.originalName==='Amalgamation')?.traits.find(t=>t.originalName==='Shambled Body');
if(!shambled?.summary.includes('dois Traços de Legado adicionais'))fail('Exceção Corpo Remendado do Vanquis não foi preservada.'); else ok('Exceção de Legado do Vanquis preservada');

if(rules.legacyChoices!==2)fail('Regra global deveria declarar 2 Traços de Legado.'); else ok('Regra global de 2 Traços de Legado');
if(!rules.mixedBlood?.includes('raça dominante')||!rules.mixedBlood?.includes('duas raças'))fail('Resumo de Sangue Misto incompleto.'); else ok('Resumo de Sangue Misto presente');

const catalog=api.renderCatalog();
for(const needle of ['Raças e Subraças','34','196','Traços de Legado','Sangue misto'])if(!catalog.includes(needle))fail(`Catálogo não renderiza: ${needle}`);
const dragonHtml=api.renderRace(dragon.id);
for(const needle of ['Traços fixos','Subraça','Cromático','Traços de Legado','Personagem de sangue misto','Abrir Planejador de Atributos'])if(!dragonHtml.includes(needle))fail(`Detalhe racial não renderiza: ${needle}`);
if(!errors.length)ok('Markup do catálogo e detalhe racial');

const index=fs.readFileSync(path.join(root,'index.html'),'utf8');
const app=fs.readFileSync(path.join(root,'js/app.js'),'utf8');
const ui=fs.readFileSync(path.join(root,'js/ui-enhancements.js'),'utf8');
if(!index.includes('data/lyre-races.js')||!index.includes('js/race-browser.js'))fail('index.html não carrega os módulos raciais.'); else ok('Módulos raciais carregados no index.html');
if(index.indexOf('data/lyre-races.js')>index.indexOf('js/race-browser.js')||index.indexOf('js/race-browser.js')>index.indexOf('js/app.js'))fail('Ordem de carregamento racial incorreta.'); else ok('Ordem de carregamento correta');
for(const [name,text] of [['app.js',app],['ui-enhancements.js',ui]]){
  if(!text.includes('Raças e subraças')&&!text.includes('Raças e Subraças'))fail(`${name} não exibe Raças e Subraças no menu.`);
  if(!text.includes("navigate(\\'races\\')")&&!text.includes("navigate('races')"))fail(`${name} não possui rota races.`);
}
if(!app.includes("route.view==='races'")||!app.includes("route.view==='race'"))fail('render() não trata as rotas races/race.'); else ok('Rotas races/race tratadas');

const manifest=JSON.parse(fs.readFileSync(path.join(root,'manifest.json'),'utf8'));
if(manifest.version!=='5.30.0'||manifest.races!==34||manifest.raceSubraces!==196)fail('Metadados do manifest 5.30 estão incorretos.'); else ok('Manifest 5.30 sincronizado');
finish();
function finish(){
  if(errors.length){console.error('\nFalhas:');for(const e of errors)console.error('✗ '+e);process.exit(1);}
  console.log('\nRaças e Subraças v5.30 validadas com sucesso.');
}
