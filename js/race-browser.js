'use strict';
(function(){
  const STORAGE_KEY='grimorio-race-builder-v1';
  const races=()=>Array.isArray(window.GRIMORIO_RACES)?window.GRIMORIO_RACES:[];
  const rules=()=>window.GRIMORIO_RACE_RULES||{};
  let state=load();

  function esc(v){return String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
  function attr(v){return esc(v).replace(/`/g,'&#96;');}
  function normalize(raw){
    const out={search:'',filter:'all',byRace:{}};
    if(raw&&typeof raw==='object'){
      out.search=String(raw.search||'').slice(0,80);
      out.filter=['all','planetouched','planar','undying'].includes(raw.filter)?raw.filter:'all';
      if(raw.byRace&&typeof raw.byRace==='object')out.byRace=raw.byRace;
    }
    return out;
  }
  function load(){try{return normalize(JSON.parse(localStorage.getItem(STORAGE_KEY)||'null'));}catch(_){return normalize(null);}}
  function save(){try{localStorage.setItem(STORAGE_KEY,JSON.stringify(state));}catch(_){}}
  function raceState(id){
    const r=races().find(x=>x.id===id);
    if(!r)return {subraceId:null,legacy:[],mixed:false,secondaryRaceId:null};
    const raw=state.byRace[id]||{};
    const validSub=r.subraces.some(s=>s.id===raw.subraceId)?raw.subraceId:(r.subraces[0]?.id||null);
    const secondary=races().some(x=>x.id===raw.secondaryRaceId&&x.id!==id)?raw.secondaryRaceId:null;
    return {subraceId:validSub,legacy:Array.isArray(raw.legacy)?raw.legacy.slice(0,2):[],mixed:!!raw.mixed,secondaryRaceId:secondary};
  }
  function setRaceState(id,next){state.byRace[id]=next;save();}
  function refresh(){if(typeof window.render==='function')window.render();}
  function findRace(id){return races().find(r=>r.id===id);}
  function filtered(){
    const q=state.search.trim().toLocaleLowerCase('pt-BR');
    return races().filter(r=>{
      if(state.filter==='planetouched'&&!/sim|amaldiçoado|artificial|exceção/i.test(r.meta.planetouched))return false;
      if(state.filter==='planar'&&(r.meta.planarOrigin==='—'||!r.meta.planarOrigin))return false;
      if(state.filter==='undying'&&!/sem envelhecimento|undying|imorredouro/i.test(r.meta.lifeExpectancy+' '+r.name+' '+r.originalName))return false;
      if(!q)return true;
      const hay=[r.name,r.originalName,r.summary,r.meta.creatureTypes,r.meta.planarOrigin,r.meta.regions,...r.subraces.flatMap(s=>[s.name,s.originalName])].join(' ').toLocaleLowerCase('pt-BR');
      return hay.includes(q);
    });
  }
  function setSearch(value){state.search=String(value||'').slice(0,80);save();const root=document.getElementById('raceCatalogRoot');if(root)root.innerHTML=catalogInner();}
  function setFilter(value){state.filter=value;save();const root=document.getElementById('raceCatalogRoot');if(root)root.innerHTML=catalogInner();}
  function openRace(id){if(findRace(id)&&typeof window.navigate==='function')window.navigate('race',id);}
  function selectSubrace(raceId,subraceId){const r=findRace(raceId);if(!r||!r.subraces.some(s=>s.id===subraceId))return;const rs=raceState(raceId);rs.subraceId=subraceId;setRaceState(raceId,rs);refresh();}
  function toggleMixed(raceId){const r=findRace(raceId);if(!r)return;const rs=raceState(raceId);rs.mixed=!rs.mixed;if(!rs.mixed){rs.secondaryRaceId=null;rs.legacy=rs.legacy.filter(k=>k.startsWith(raceId+':legacy:'));}setRaceState(raceId,rs);refresh();}
  function setSecondary(raceId,secondaryId){const r=findRace(raceId);if(!r)return;const rs=raceState(raceId);rs.secondaryRaceId=races().some(x=>x.id===secondaryId&&x.id!==raceId)?secondaryId:null;rs.legacy=[];setRaceState(raceId,rs);refresh();}
  function legacyPool(race,rs){
    const out=race.legacyTraits.map(t=>({key:race.id+':legacy:'+t.id,origin:race.name,type:'legacy',trait:t}));
    if(rs.mixed&&rs.secondaryRaceId){
      const second=findRace(rs.secondaryRaceId);
      if(second){
        second.legacyTraits.forEach(t=>out.push({key:second.id+':legacy:'+t.id,origin:second.name,type:'legacy',trait:t}));
        // A regra geral permite Traços de Sangue Misto quando o personagem é misto.
        // Requisitos mais específicos escritos no próprio traço continuam prevalecendo.
        race.mixedBloodTraits.forEach(t=>out.push({key:race.id+':mixed:'+t.id,origin:race.name,type:'mixed',trait:t}));
        second.mixedBloodTraits.forEach(t=>out.push({key:second.id+':mixed:'+t.id,origin:second.name,type:'mixed',trait:t}));
      }
    }
    return out;
  }
  function toggleLegacy(raceId,key){
    const r=findRace(raceId);if(!r)return;const rs=raceState(raceId),pool=legacyPool(r,rs);if(!pool.some(x=>x.key===key))return;
    const i=rs.legacy.indexOf(key);if(i>=0)rs.legacy.splice(i,1);else if(rs.legacy.length<2)rs.legacy.push(key);setRaceState(raceId,rs);refresh();
  }
  function clearChoices(raceId){const r=findRace(raceId);if(!r)return;const rs=raceState(raceId);rs.legacy=[];rs.subraceId=r.subraces[0]?.id||null;rs.mixed=false;rs.secondaryRaceId=null;setRaceState(raceId,rs);refresh();}

  function stat(label,value){return '<div class="race-meta-item"><span>'+esc(label)+'</span><strong>'+esc(value||'—')+'</strong></div>';}
  function ruleCard(title,text,tag){return '<article class="race-rule-card"><span class="race-rule-tag">'+esc(tag)+'</span><h3>'+esc(title)+'</h3><p>'+esc(text)+'</p></article>';}
  function catalogInner(){
    const rr=rules(),list=filtered(),subCount=races().reduce((n,r)=>n+r.subraces.length,0);
    return '<div class="race-hero"><div><div class="eyebrow"><span class="dot"></span>Opções de personagem — 5.19</div><h1 class="page-title">Raças e Subraças</h1><p class="lede">Consulte os traços raciais fixos, compare subraças e monte suas duas escolhas de <b>Traços de Legado</b> em um único lugar. O conteúdo desta ferramenta foi organizado a partir do capítulo de Opções de Personagem de Lyre.</p></div><div class="race-hero-stats"><div><strong>'+races().length+'</strong><span>raças</span></div><div><strong>'+subCount+'</strong><span>subraças</span></div><div><strong>2</strong><span>Traços de Legado</span></div></div></div>'
      +'<section class="race-rules"><div class="section-head"><div><div class="eyebrow"><span class="dot"></span>Como funciona</div><h2 class="page-title" style="font-size:1.55rem;margin:0">Construção racial em Somnus Domina</h2></div></div><div class="race-rule-grid">'
      +ruleCard('1. Escolha a raça','A raça dominante fornece seus traços raciais fixos, especificações básicas e a tabela de subraças.','Raça')
      +ruleCard('2. Escolha a subraça','A subraça acrescenta seus próprios benefícios e, no modelo tradicional, normalmente define o ponto racial adicional.','Subraça')
      +ruleCard('3. Escolha 2 Traços de Legado',rr.intro||'Escolha dois Traços de Legado da raça.','2 escolhas')
      +ruleCard('Sangue misto',rr.mixedBlood||'Use a raça dominante para os traços fixos e combine as listas de Legado das duas raças.','Opcional')
      +'</div><details class="race-rule-details"><summary>Regras de atributos e exceções da 5.19</summary><p>'+esc(rr.abilityScores||'')+'</p><p>'+esc(rr.specificBeatsGeneral||'')+'</p></details></section>'
      +'<section class="race-catalog"><div class="race-catalog-toolbar"><label class="race-search"><span aria-hidden="true">⌕</span><input value="'+attr(state.search)+'" oninput="GRIMORIO_RACE_BROWSER.setSearch(this.value)" placeholder="Buscar raça, subraça, tipo ou região..."></label><div class="race-filter-group">'
      +[['all','Todas'],['planetouched','Planetouched'],['planar','Origem planar'],['undying','Sem envelhecimento']].map(([v,l])=>'<button type="button" class="race-filter '+(state.filter===v?'active':'')+'" onclick="GRIMORIO_RACE_BROWSER.setFilter(\''+v+'\')">'+l+'</button>').join('')
      +'</div></div><div class="race-catalog-count">'+list.length+' de '+races().length+' raças exibidas</div><div class="race-card-grid">'+list.map(raceCard).join('')+'</div></section>';
  }
  function raceCard(r){
    return '<button type="button" class="race-card" onclick="GRIMORIO_RACE_BROWSER.openRace(\''+attr(r.id)+'\')"><div class="race-card-top"><span class="race-card-rune">'+esc(r.name.slice(0,2).toUpperCase())+'</span><div><h3>'+esc(r.name)+'</h3><span>'+r.subraces.length+' subraça'+(r.subraces.length===1?'':'s')+' · '+r.legacyTraits.length+' opções de Legado</span></div></div><p>'+esc(r.summary)+'</p><div class="race-card-tags"><span>'+esc(r.meta.creatureTypes)+'</span><span>'+esc(r.meta.size)+'</span>'+(r.meta.planarOrigin&&r.meta.planarOrigin!=='—'?'<span>'+esc(r.meta.planarOrigin)+'</span>':'')+'</div><div class="race-card-foot"><span>Fonte p. '+r.sourcePage+'</span><b>Consultar →</b></div></button>';
  }
  function traitCard(t,opts={}){
    const selected=!!opts.selected,disabled=!!opts.disabled,onclick=opts.onclick||'';
    const role=t.heritageRole||'';
    const roleLabels={rule:'Regra de Herança',positive:'Positivo',detrimental:'Prejudicial',lineage:'Traço da linhagem'};
    const cls='race-trait-card'+(selected?' selected':'')+(disabled?' disabled':'')+(opts.mixed?' mixed':'')+(role?' heritage-'+role:'');
    const origin=opts.origin?'<span>'+esc(opts.origin)+(opts.mixed?' · sangue misto':'')+'</span>':'';
    const roleBadge=role?'<span class="heritage-role '+role+'">'+roleLabels[role]+'</span>':'';
    const body='<div class="race-trait-head"><div><h4>'+esc(t.name)+'</h4>'+origin+roleBadge+'</div>'+(opts.selectable?'<span class="race-choice-mark">'+(selected?'✓':'')+'</span>':'')+'</div><p>'+esc(t.summary)+'</p><small>Fonte p. '+esc(t.page)+'</small>';
    return opts.selectable?'<button type="button" class="'+cls+'" '+(disabled?'disabled':'')+' onclick="'+onclick+'">'+body+'</button>':'<article class="'+cls+'">'+body+'</article>';
  }
  function subraceCard(race,s,selected){
    return '<button type="button" class="subrace-card '+(selected?'selected':'')+'" onclick="GRIMORIO_RACE_BROWSER.selectSubrace(\''+attr(race.id)+'\',\''+attr(s.id)+'\')"><div class="subrace-card-head"><div><h4>'+esc(s.name)+'</h4><span>Fonte p. '+s.page+'</span></div><span class="subrace-radio">'+(selected?'●':'○')+'</span></div>'+(s.ability?'<div class="subrace-ability">'+esc(s.ability)+'</div>':'')+'<div class="subrace-trait-pills">'+s.traits.slice(0,4).map(t=>'<span>'+esc(t.name)+'</span>').join('')+(s.traits.length>4?'<span>+'+(s.traits.length-4)+' opções</span>':'')+'</div></button>';
  }
  function renderRace(id){
    const race=findRace(id);if(!race)return '<div class="empty-state">Raça não encontrada.</div>';
    const rs=raceState(id),sub=race.subraces.find(s=>s.id===rs.subraceId)||race.subraces[0],pool=legacyPool(race,rs),selected=pool.filter(x=>rs.legacy.includes(x.key));
    const secondary=rs.secondaryRaceId?findRace(rs.secondaryRaceId):null;
    return '<div class="race-detail"><div class="race-detail-actions"><button class="action-btn" onclick="navigate(\'races\')">← Todas as raças</button><div><button class="action-btn" onclick="navigate(\'ability-planner\')">Abrir Planejador de Atributos</button><button class="action-btn" onclick="GRIMORIO_RACE_BROWSER.clearChoices(\''+attr(race.id)+'\')">Limpar escolhas</button></div></div>'
      +'<header class="race-detail-hero"><div class="race-detail-rune">'+esc(race.name.slice(0,2).toUpperCase())+'</div><div><div class="eyebrow"><span class="dot"></span>'+esc(race.source)+' · p. '+race.sourcePage+'</div><h1 class="page-title">'+esc(race.name)+'</h1><p class="lede">'+esc(race.summary)+'</p></div><div class="race-choice-counter"><span>Traços de Legado</span><strong>'+selected.length+' / 2</strong><small>'+(selected.length===2?'Escolha completa':'Selecione '+(2-selected.length))+'</small></div></header>'
      +'<div class="race-meta-grid">'+stat('Tipos de criatura',race.meta.creatureTypes)+stat('Expectativa de vida',race.meta.lifeExpectancy)+stat('Alinhamento nacional',race.meta.nationalAlignment)+stat('Origem planar',race.meta.planarOrigin)+stat('Planetouched?',race.meta.planetouched)+stat('Tamanho',race.meta.size)+stat('Regiões',race.meta.regions)+'</div>'
      +'<section class="race-detail-section"><div class="race-section-title"><div><span>Base racial</span><h2>Traços fixos</h2></div><span class="race-source-chip">Atributos: '+esc(race.abilityScore)+'</span></div><div class="race-trait-grid">'+race.coreTraits.map(t=>traitCard(t)).join('')+'</div></section>'
      +'<section class="race-detail-section"><div class="race-section-title"><div><span>Escolha obrigatória</span><h2>Subraça</h2></div><span class="race-source-chip">'+race.subraces.length+' opções</span></div><div class="subrace-grid">'+race.subraces.map(s=>subraceCard(race,s,sub&&s.id===sub.id)).join('')+'</div>'+(sub?'<div class="subrace-selected-detail"><div class="race-section-title compact"><div><span>Selecionada</span><h3>'+esc(sub.name)+'</h3></div>'+(sub.ability?'<span class="race-source-chip">'+esc(sub.ability)+'</span>':'')+'</div>'+(race.originalName==='Hanyou'?'<div class="hanyou-heritage-note"><strong>Escolhas de Herança Hanyou</strong><span>Além dos Traços de Legado raciais, esta subraça pede 2 Traços de Herança positivos e 2 prejudiciais. Os prejudiciais são marcados em vermelho e são removidos progressivamente nos níveis indicados pela regra.</span></div>':'')+'<div class="race-trait-grid">'+sub.traits.map(t=>traitCard(t)).join('')+'</div></div>':'')+'</section>'
      +'<section class="race-detail-section legacy-section"><div class="race-section-title"><div><span>Personalização racial</span><h2>Traços de Legado</h2></div><span class="legacy-count '+(selected.length===2?'complete':'')+'">'+selected.length+' / 2 escolhidos</span></div><p class="race-section-intro">Escolha exatamente dois. Uma escolha selecionada recebe destaque dourado; ao alcançar o limite, as demais ficam temporariamente indisponíveis.</p>'
      +'<div class="mixed-blood-box"><label><input type="checkbox" '+(rs.mixed?'checked':'')+' onchange="GRIMORIO_RACE_BROWSER.toggleMixed(\''+attr(race.id)+'\')"><span><strong>Personagem de sangue misto</strong><small>Use '+esc(race.name)+' como raça dominante e combine Traços de Legado com uma raça secundária.</small></span></label>'+(rs.mixed?'<select onchange="GRIMORIO_RACE_BROWSER.setSecondary(\''+attr(race.id)+'\',this.value)"><option value="">Escolha a raça secundária…</option>'+races().filter(x=>x.id!==race.id).map(x=>'<option value="'+attr(x.id)+'" '+(secondary&&secondary.id===x.id?'selected':'')+'>'+esc(x.name)+'</option>').join('')+'</select>':'')+'</div>'
      +(rs.mixed&&secondary?'<div class="mixed-explain"><strong>Como a combinação está sendo calculada:</strong> traços fixos e subraça vêm de '+esc(race.name)+'; as duas escolhas abaixo podem vir das listas normais de '+esc(race.name)+' e '+esc(secondary.name)+', incluindo as opções especiais de Sangue Misto das duas raças quando seus requisitos específicos permitirem.</div>':'')
      +'<div class="race-trait-grid legacy-grid">'+pool.map(x=>traitCard(x.trait,{selectable:true,selected:rs.legacy.includes(x.key),disabled:rs.legacy.length>=2&&!rs.legacy.includes(x.key),origin:x.origin,mixed:x.type==='mixed',onclick:'GRIMORIO_RACE_BROWSER.toggleLegacy(\''+attr(race.id)+'\',\''+attr(x.key)+'\')'})).join('')+'</div></section>'
      +'<section class="race-build-summary"><div><span>Planejamento atual</span><h2>'+esc(race.name)+(sub?' — '+esc(sub.name):'')+'</h2><p>'+(secondary?'Sangue misto: dominante '+esc(race.name)+' + secundária '+esc(secondary.name)+'.':'Raça única.')+'</p></div><div class="race-build-chosen">'+(selected.length?selected.map(x=>'<span>'+esc(x.trait.name)+'</span>').join(''):'<span class="empty">Nenhum Traço de Legado selecionado</span>')+'</div></section>'
      +'<div class="race-editorial-note"><strong>Nota de consulta:</strong> os cartões apresentam um resumo mecânico em português para identificação rápida. Use a página indicada da fonte quando uma característica possuir condições, exceções ou escolhas internas extensas.</div></div>';
  }
  function renderCatalog(){return '<div id="raceCatalogRoot" class="race-browser">'+catalogInner()+'</div>';}
  window.GRIMORIO_RACE_BROWSER={renderCatalog,renderRace,setSearch,setFilter,openRace,selectSubrace,toggleMixed,setSecondary,toggleLegacy,clearChoices};
})();
