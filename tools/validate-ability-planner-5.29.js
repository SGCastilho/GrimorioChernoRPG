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
  document:{getElementById:()=>null}
};
context.window=context;
vm.createContext(context);
try{vm.runInContext(fs.readFileSync(path.join(root,'js/ability-planner.js'),'utf8'),context,{filename:'js/ability-planner.js'});}catch(e){fail('Falha ao carregar ability-planner.js: '+e.message);}
const api=context.GRIMORIO_ABILITY_PLANNER;
if(!api)fail('GRIMORIO_ABILITY_PLANNER não foi exposto.');
if(errors.length)finish();
const initial=api.getState();
if(Object.values(initial.scores).some(v=>v!==8))fail('Estado inicial deve começar com todos os atributos em 8.');
else ok('Estado inicial 8/8/8/8/8/8');
for(let i=0;i<7;i++)api.change('str',1);
let state=api.getState();
if(state.scores.str!==15)fail('Força deve alcançar 15 após sete incrementos.');
else ok('Limite superior base 15');
api.change('str',1);
if(api.getState().scores.str!==15)fail('Não deve ser possível ultrapassar 15 no valor-base.');
else ok('Bloqueio acima de 15');
api.reset();
// 15, 15 e 15 custam exatamente 27 pontos.
for(const id of ['str','dex','con'])for(let i=0;i<7;i++)api.change(id,1);
state=api.getState();
if([state.scores.str,state.scores.dex,state.scores.con].join(',')!=='15,15,15')fail('Distribuição 15/15/15 deve caber exatamente em 27 pontos.');
else ok('Orçamento de 27 pontos respeitado em 15/15/15');
api.change('int',1);
if(api.getState().scores.int!==8)fail('Incrementos devem ser bloqueados quando não restarem pontos.');
else ok('Bloqueio quando orçamento chega a zero');
api.reset();
api.toggleBonus('str',2); api.toggleBonus('str',1);
state=api.getState();
if(state.bonus2==='str'&&state.bonus1==='str')fail('Bônus +2 e +1 não podem ocupar o mesmo atributo.');
else ok('Exclusividade entre bônus +2 e +1');
api.toggleBonus('dex',2); api.toggleBonus('con',1);
state=api.getState();
if(state.bonus2!=='dex'||state.bonus1!=='con')fail('Bônus flexíveis não foram persistidos corretamente no estado.');
else ok('Bônus +2/+1 atribuídos separadamente');
const html=api.render();
for(const needle of ['Planejador de Atributos','Pontos restantes','Força','Destreza','Constituição','Inteligência','Sabedoria','Carisma'])if(!html.includes(needle))fail('Renderização ausente: '+needle);
if(!errors.length)ok('Markup principal do planejador');
const index=fs.readFileSync(path.join(root,'index.html'),'utf8');
const app=fs.readFileSync(path.join(root,'js/app.js'),'utf8');
const ui=fs.readFileSync(path.join(root,'js/ui-enhancements.js'),'utf8');
if(!index.includes('js/ability-planner.js'))fail('index.html não carrega js/ability-planner.js.');else ok('Script carregado no index.html');
if(!app.includes("navigate(\\'ability-planner\\')")&&!app.includes("navigate('ability-planner')"))fail('Menu não possui rota ability-planner.');else ok('Rota presente na navegação');
if(!ui.includes("navigate(\\'ability-planner\\')")&&!ui.includes("navigate('ability-planner')"))fail('Navegação aprimorada não possui atalho para ability-planner.');else ok('Atalho presente na navegação aprimorada');
if(!ui.includes('Planejador de Atributos'))fail('Navegação aprimorada não exibe o rótulo Planejador de Atributos.');else ok('Rótulo presente no menu lateral aprimorado');
if(!app.includes("route.view==='ability-planner'"))fail('render() não trata ability-planner.');else ok('Rota tratada pelo render principal');
finish();
function finish(){
  if(errors.length){console.error('\nFalhas:');for(const e of errors)console.error('✗ '+e);process.exit(1);}
  console.log('\nPlanejador de Atributos v5.29 validado com sucesso.');
}
