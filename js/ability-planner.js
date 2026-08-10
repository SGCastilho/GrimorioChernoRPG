'use strict';
(function(){
  const STORAGE_KEY='grimorio-ability-planner-v1';
  const BUDGET=27;
  const COSTS={8:0,9:1,10:2,11:3,12:4,13:5,14:7,15:9};
  const ABILITIES=[
    {id:'str',name:'Força',short:'FOR'},
    {id:'dex',name:'Destreza',short:'DES'},
    {id:'con',name:'Constituição',short:'CON'},
    {id:'int',name:'Inteligência',short:'INT'},
    {id:'wis',name:'Sabedoria',short:'SAB'},
    {id:'cha',name:'Carisma',short:'CAR'}
  ];
  const DEFAULT_STATE={scores:{str:8,dex:8,con:8,int:8,wis:8,cha:8},bonus2:null,bonus1:null};
  let state=load();

  function cloneDefault(){return JSON.parse(JSON.stringify(DEFAULT_STATE));}
  function normalize(raw){
    const out=cloneDefault();
    if(raw&&raw.scores){
      for(const a of ABILITIES){
        const score=Number(raw.scores[a.id]);
        out.scores[a.id]=Number.isFinite(score)?Math.max(8,Math.min(15,Math.round(score))):8;
      }
    }
    out.bonus2=ABILITIES.some(a=>a.id===raw?.bonus2)?raw.bonus2:null;
    out.bonus1=ABILITIES.some(a=>a.id===raw?.bonus1)?raw.bonus1:null;
    if(out.bonus2&&out.bonus2===out.bonus1)out.bonus1=null;
    return out;
  }
  function load(){
    try{return normalize(JSON.parse(localStorage.getItem(STORAGE_KEY)||'null'));}
    catch(_){return cloneDefault();}
  }
  function save(){
    try{localStorage.setItem(STORAGE_KEY,JSON.stringify(state));}
    catch(_){/* O planejador continua funcional sem persistência. */}
  }
  function usedPoints(){return ABILITIES.reduce((sum,a)=>sum+COSTS[state.scores[a.id]],0);}
  function remainingPoints(){return BUDGET-usedPoints();}
  function incrementalCost(score,direction){
    if(direction>0){if(score>=15)return Infinity;return COSTS[score+1]-COSTS[score];}
    if(score<=8)return Infinity;
    return COSTS[score]-COSTS[score-1];
  }
  function finalScore(id){return state.scores[id]+(state.bonus2===id?2:0)+(state.bonus1===id?1:0);}
  function modifier(score){return Math.floor((score-10)/2);}
  function signed(value){return value>=0?'+'+value:String(value);}
  function refresh(){
    const root=document.getElementById('abilityPlannerRoot');
    if(root)root.innerHTML=innerHtml();
  }
  function change(id,direction){
    if(!ABILITIES.some(a=>a.id===id))return;
    const score=state.scores[id];
    if(direction>0){
      const cost=incrementalCost(score,1);
      if(score>=15||cost>remainingPoints())return;
      state.scores[id]=score+1;
    }else{
      if(score<=8)return;
      state.scores[id]=score-1;
    }
    save();refresh();
  }
  function toggleBonus(id,amount){
    if(!ABILITIES.some(a=>a.id===id)||![1,2].includes(Number(amount)))return;
    const key=Number(amount)===2?'bonus2':'bonus1';
    const other=Number(amount)===2?'bonus1':'bonus2';
    if(state[key]===id)state[key]=null;
    else{
      state[key]=id;
      if(state[other]===id)state[other]=null;
    }
    save();refresh();
  }
  function reset(){state=cloneDefault();save();refresh();}
  function spendAllExample(){
    // Distribuição genérica de 27 pontos, útil apenas como ponto de partida visual.
    state.scores={str:15,dex:15,con:14,int:10,wis:8,cha:8};
    state.bonus2='str';state.bonus1='con';
    save();refresh();
  }
  function abilityRow(a){
    const score=state.scores[a.id];
    const final=finalScore(a.id);
    const mod=modifier(final);
    const plusCost=incrementalCost(score,1);
    const minusDisabled=score<=8;
    const plusDisabled=score>=15||plusCost>remainingPoints();
    const bonus2Active=state.bonus2===a.id;
    const bonus1Active=state.bonus1===a.id;
    const bonus2Disabled=state.bonus1===a.id&&!bonus2Active;
    const bonus1Disabled=state.bonus2===a.id&&!bonus1Active;
    return '<div class="ability-row">'
      +'<div class="ability-name-cell"><span class="ability-emblem" aria-hidden="true">'+a.short+'</span><div><strong>'+a.name+'</strong><span>Custo total: '+COSTS[score]+' pts</span></div></div>'
      +'<div class="ability-score-cell"><button type="button" class="ability-step" aria-label="Diminuir '+a.name+'" '+(minusDisabled?'disabled':'')+' onclick="GRIMORIO_ABILITY_PLANNER.change(\''+a.id+'\',-1)">−</button><span class="ability-base-score">'+score+'</span><button type="button" class="ability-step" aria-label="Aumentar '+a.name+'" '+(plusDisabled?'disabled':'')+' onclick="GRIMORIO_ABILITY_PLANNER.change(\''+a.id+'\',1)">+</button></div>'
      +'<div class="ability-next-cost">'+(score>=15?'Máx.':'+ '+plusCost+' pt'+(plusCost===1?'':'s'))+'</div>'
      +'<div class="ability-bonus-cell"><button type="button" class="ability-bonus '+(bonus2Active?'active':'')+'" '+(bonus2Disabled?'disabled':'')+' aria-pressed="'+bonus2Active+'" onclick="GRIMORIO_ABILITY_PLANNER.toggleBonus(\''+a.id+'\',2)">+2</button><button type="button" class="ability-bonus '+(bonus1Active?'active':'')+'" '+(bonus1Disabled?'disabled':'')+' aria-pressed="'+bonus1Active+'" onclick="GRIMORIO_ABILITY_PLANNER.toggleBonus(\''+a.id+'\',1)">+1</button></div>'
      +'<div class="ability-final-cell"><strong>'+final+'</strong><span>'+signed(mod)+'</span></div>'
      +'</div>';
  }
  function summaryCard(a){
    const score=finalScore(a.id);return '<div class="ability-summary-card"><span>'+a.short+'</span><strong>'+score+'</strong><small>'+signed(modifier(score))+'</small></div>';
  }
  function innerHtml(){
    const used=usedPoints(),remaining=remainingPoints(),pct=Math.round((used/BUDGET)*100);
    return '<div class="ability-planner-hero">'
      +'<div><div class="eyebrow"><span class="dot"></span>Ferramenta de criação</div><h1 class="page-title">Planejador de Atributos</h1><p class="lede">Distribua os atributos com o Point Buy de 27 pontos e aplique bônus flexíveis de +2 e +1 em atributos diferentes, em um fluxo inspirado na criação de personagem de Baldur\'s Gate 3.</p></div>'
      +'<div class="ability-budget-card"><span>Pontos restantes</span><strong>'+remaining+'</strong><small>'+used+' / '+BUDGET+' gastos</small></div>'
      +'</div>'
      +'<div class="ability-planner-panel">'
      +'<div class="ability-toolbar"><div><strong>Distribuição de pontos</strong><span>Valores-base entre 8 e 15. Os atributos 14 e 15 custam mais pontos.</span></div><div class="ability-toolbar-actions"><button type="button" class="action-btn" onclick="GRIMORIO_ABILITY_PLANNER.reset()">Limpar</button><button type="button" class="action-btn" title="Exemplo genérico 15, 15, 14, 10, 8, 8" onclick="GRIMORIO_ABILITY_PLANNER.spendAllExample()">Exemplo 27 pts</button></div></div>'
      +'<div class="ability-budget-track"><span style="width:'+pct+'%"></span></div>'
      +'<div class="ability-table-head"><span>Atributo</span><span>Valor base</span><span>Próximo</span><span>Bônus</span><span>Final / Mod.</span></div>'
      +'<div class="ability-rows">'+ABILITIES.map(abilityRow).join('')+'</div>'
      +'<div class="ability-legend"><span><b>Point Buy:</b> 8=0, 9=1, 10=2, 11=3, 12=4, 13=5, 14=7, 15=9.</span><span>O bônus +2 e o bônus +1 não podem ocupar o mesmo atributo.</span></div>'
      +'</div>'
      +'<section class="ability-summary"><div class="section-head"><div><div class="eyebrow"><span class="dot"></span>Resultado</div><h2 class="page-title" style="font-size:1.5rem;margin:0">Atributos finais</h2></div><span class="ability-autosave">Salvo automaticamente neste navegador</span></div><div class="ability-summary-grid">'+ABILITIES.map(summaryCard).join('')+'</div></section>';
  }
  function render(){return '<div id="abilityPlannerRoot" class="ability-planner">'+innerHtml()+'</div>';}

  window.GRIMORIO_ABILITY_PLANNER={render,change,toggleBonus,reset,spendAllExample,getState:()=>JSON.parse(JSON.stringify(state))};
})();
