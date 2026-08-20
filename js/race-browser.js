'use strict';
(function(){
  const STORAGE_KEY='grimorio-race-builder-v2';
  const LEGACY_STORAGE_KEY='grimorio-race-builder-v1';
  const UI_SCHEMA='grimorio-race-builder-ui';
  const UI_SCHEMA_VERSION=2;
  const races=()=>Array.isArray(window.GRIMORIO_RACES)?window.GRIMORIO_RACES:[];
  const rules=()=>window.GRIMORIO_RACE_RULES||{};
  const buildResolver=()=>window.GRIMORIO_RACE_BUILD_RESOLVER;
  let state=load();

  function esc(v){return String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
  function attr(v){return esc(v).replace(/`/g,'&#96;');}
  function emptyUiState(){return {schema:UI_SCHEMA,schemaVersion:UI_SCHEMA_VERSION,search:'',filter:'all',byRace:{}};}
  function normalize(raw){
    const out=emptyUiState();
    if(raw&&typeof raw==='object'){
      out.search=String(raw.search||'').slice(0,80);
      out.filter=['all','planetouched','planar','undying'].includes(raw.filter)?raw.filter:'all';
      if(raw.byRace&&typeof raw.byRace==='object'){
        for(const [raceId,raceRaw] of Object.entries(raw.byRace)){
          const race=races().find(item=>item.id===raceId);
          if(!race)continue;
          out.byRace[raceId]=buildResolver()?.normalizeBuilderState?.(race,raceRaw)||raceRaw;
        }
      }
    }
    return out;
  }
  function migrateV1(raw){
    const out=emptyUiState();
    if(!raw||typeof raw!=='object')return out;
    out.search=String(raw.search||'').slice(0,80);
    out.filter=['all','planetouched','planar','undying'].includes(raw.filter)?raw.filter:'all';
    if(raw.byRace&&typeof raw.byRace==='object'){
      for(const [raceId,raceRaw] of Object.entries(raw.byRace)){
        const race=races().find(item=>item.id===raceId);
        if(!race)continue;
        const migrated=buildResolver()?.migrateV1RaceState?.(raceRaw)||raceRaw;
        out.byRace[raceId]=buildResolver()?.normalizeBuilderState?.(race,migrated)||migrated;
      }
    }
    return out;
  }
  function load(){
    try{
      const current=localStorage.getItem(STORAGE_KEY);
      if(current)return normalize(JSON.parse(current));
      const legacy=localStorage.getItem(LEGACY_STORAGE_KEY);
      const migrated=legacy?migrateV1(JSON.parse(legacy)):emptyUiState();
      try{localStorage.setItem(STORAGE_KEY,JSON.stringify(migrated));}catch(_){}
      return migrated;
    }catch(_){return emptyUiState();}
  }
  function save(){try{localStorage.setItem(STORAGE_KEY,JSON.stringify(state));}catch(_){}}
  function raceState(id){
    const race=races().find(item=>item.id===id);
    if(!race)return buildResolver()?.defaultBuilderState?.()||{subraceId:null,legacy:[],mixed:false,secondaryRaceId:null,heritage:{positive:[],detrimental:[],lineage:[]}};
    return buildResolver()?.normalizeBuilderState?.(race,state.byRace[id]||{})||state.byRace[id]||{};
  }
  function legacyLimit(race){return buildResolver()?.legacySlots?.(race)?.total||2;}
  function canSelectLegacy(race,rs,key){return !!buildResolver()?.canSelectLegacy?.(race,rs,key);}
  function setRaceState(id,next){
    const race=races().find(item=>item.id===id);
    state.byRace[id]=race&&buildResolver()?.normalizeBuilderState?buildResolver().normalizeBuilderState(race,next):next;
    save();
  }
  function refresh(){if(typeof window.render==='function')window.render();}
  function findRace(id){return races().find(r=>r.id===id);}
  function searchNorm(value){
    return String(value||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLocaleLowerCase('pt-BR').trim();
  }
  function phraseMatch(value,query){
    const hay=' '+searchNorm(value).replace(/[^a-z0-9]+/g,' ').replace(/\s+/g,' ').trim()+' ';
    const needle=' '+searchNorm(query).replace(/[^a-z0-9]+/g,' ').replace(/\s+/g,' ').trim()+' ';
    return needle.trim()?hay.includes(needle):true;
  }
  function raceMatches(r){
    if(!r)return false;
    if(state.filter==='planetouched'&&!/sim|amaldiçoado|artificial|exceção/i.test(r.meta.planetouched))return false;
    if(state.filter==='planar'&&(r.meta.planarOrigin==='—'||!r.meta.planarOrigin))return false;
    if(state.filter==='undying'&&!/sem envelhecimento|undying|imorredouro/i.test(r.meta.lifeExpectancy+' '+r.name+' '+r.originalName))return false;
    const q=searchNorm(state.search);
    if(!q)return true;
    const names=[r.name,r.originalName,...r.subraces.flatMap(s=>[s.name,s.originalName])];
    if(names.some(name=>searchNorm(name).includes(q)))return true;
    const context=[r.summary,r.meta.creatureTypes,r.meta.planarOrigin,r.meta.regions].join(' ');
    return phraseMatch(context,q);
  }
  function filtered(){return races().filter(raceMatches);}
  function applyCatalogFilters(){
    const cards=document.querySelectorAll('#raceCatalogResults .race-card[data-race-id]');
    let visible=0;
    cards.forEach(card=>{
      const race=findRace(card.getAttribute('data-race-id'));
      const show=raceMatches(race);
      card.hidden=!show;
      card.style.display=show?'':'none';
      if(show)visible++;
    });
    const count=document.getElementById('raceCatalogCount');
    if(count)count.textContent=visible+' de '+races().length+' raças exibidas';
  }
  function updateFilterButtons(){
    document.querySelectorAll('.race-filter-group .race-filter').forEach(btn=>{
      const active=btn.getAttribute('data-filter')===state.filter;
      btn.classList.toggle('active',active);
      btn.setAttribute('aria-pressed',active?'true':'false');
    });
  }
  function setSearch(value){state.search=String(value||'').slice(0,80);save();applyCatalogFilters();}
  function setFilter(value){state.filter=value;save();updateFilterButtons();applyCatalogFilters();}
  function openRace(id){if(findRace(id)&&typeof window.navigate==='function')window.navigate('race',id);}
  function rememberSubrace(raceId,subraceId){
    const race=findRace(raceId);if(!race||!race.subraces.some(s=>s.id===subraceId))return false;
    const rs=raceState(raceId);
    if(rs.subraceId!==subraceId){
      rs.subraceId=subraceId;
      rs.heritage={positive:[],detrimental:[],lineage:[]};
      rs.bloodlineChoices={};
      rs.abilityChoices={};
    }
    setRaceState(raceId,rs);return true;
  }
  function selectSubrace(raceId,subraceId){if(!rememberSubrace(raceId,subraceId))return;if(typeof window.navigate==='function')window.navigate('race',raceId,{subraceId});else refresh();}
  function toggleMixed(raceId){
    const race=findRace(raceId);if(!race)return;const rs=raceState(raceId);rs.mixed=!rs.mixed;
    if(!rs.mixed){rs.secondaryRaceId=null;rs.bloodlineChoices={};rs.extraLegacy=[];}
    setRaceState(raceId,rs);refresh();
  }
  function setSecondary(raceId,secondaryId){
    const race=findRace(raceId);if(!race)return;const rs=raceState(raceId);
    rs.secondaryRaceId=races().some(x=>x.id===secondaryId&&x.id!==raceId)?secondaryId:null;
    rs.legacy=[];rs.bloodlineChoices={};rs.extraLegacy=[];
    setRaceState(raceId,rs);refresh();
  }
  function legacyPool(race,rs){
    return (buildResolver()?.legacyPool?.(race,rs)||[]).map(entry=>({
      ...entry,
      origin:entry.originRaceName||entry.sourceTitle||'Opção universal',
      type:entry.kind==='mixed'?'mixed':entry.kind
    }));
  }
  function toggleLegacy(raceId,key){
    const race=findRace(raceId);if(!race)return;const rs=raceState(raceId),pool=legacyPool(race,rs);if(!pool.some(x=>x.key===key))return;
    const index=rs.legacy.indexOf(key);if(index>=0)rs.legacy.splice(index,1);else if(canSelectLegacy(race,rs,key))rs.legacy.push(key);setRaceState(raceId,rs);refresh();
  }
  function toggleHeritage(raceId,role,key){
    const race=findRace(raceId);if(!race||!['positive','detrimental','lineage'].includes(role))return;
    const rs=raceState(raceId);const selected=rs.heritage[role]||[];const index=selected.indexOf(key);
    if(index>=0)selected.splice(index,1);else if(buildResolver()?.canSelectHeritage?.(race,rs,role,key))selected.push(key);
    rs.heritage[role]=selected;setRaceState(raceId,rs);refresh();
  }
  function setOptionalPool(raceId,poolId,enabled){
    const race=findRace(raceId);if(!race||!['exolunar','paraprismatic'].includes(poolId))return;
    const rs=raceState(raceId);rs.optionalPools[poolId]=Boolean(enabled);setRaceState(raceId,rs);refresh();
  }
  function setStructuredChoice(raceId,bucket,key,value){
    const race=findRace(raceId);if(!race||!['bloodlineChoices','abilityChoices','traitChoices','specialChoices'].includes(bucket)||!key)return;
    const rs=raceState(raceId);rs[bucket]={...(rs[bucket]||{}),[String(key)]:value};setRaceState(raceId,rs);refresh();
  }
  function setBloodlineChoice(raceId,key,value){setStructuredChoice(raceId,'bloodlineChoices',key,value||'');}
  function setAbilityChoice(raceId,key,value){setStructuredChoice(raceId,'abilityChoices',key,value||'');}
  function setTraitChoice(raceId,key,value){setStructuredChoice(raceId,'traitChoices',key,value||'');}
  function setSpecialChoice(raceId,key,value){setStructuredChoice(raceId,'specialChoices',key,value||'');}
  function setHanyouAbility(raceId,slot,value){
    const race=findRace(raceId);if(!race)return;const rs=raceState(raceId);const current=rs.abilityChoices?.hanyou&&typeof rs.abilityChoices.hanyou==='object'?rs.abilityChoices.hanyou:{plus:[],minus:null};
    const plus=Array.isArray(current.plus)?[...current.plus]:[];while(plus.length<2)plus.push('');
    if(slot==='plus0')plus[0]=value||'';else if(slot==='plus1')plus[1]=value||'';else if(slot==='minus')current.minus=value||null;
    rs.abilityChoices={...(rs.abilityChoices||{}),hanyou:{plus:plus.filter(Boolean),minus:current.minus||null}};setRaceState(raceId,rs);refresh();
  }
  function setHanyouSecondarySubrace(raceId,subraceId){
    const race=findRace(raceId);if(!race)return;const rs=raceState(raceId);const hanyou=findRace('hanyou');const valid=hanyou?.subraces?.some(s=>s.id===subraceId)?subraceId:null;
    rs.specialChoices={...(rs.specialChoices||{}),hanyouSecondary:{subraceId:valid,positive:[],detrimental:[]}};
    const key='hanyou:mixed:bloodline';const opts=(buildResolver()?.bloodlineOptions?.(hanyou)||[]).filter(o=>o.subraceId===valid);
    rs.bloodlineChoices={...(rs.bloodlineChoices||{})};if(opts.length===1)rs.bloodlineChoices[key]=opts[0].key;else delete rs.bloodlineChoices[key];
    setRaceState(raceId,rs);refresh();
  }
  function toggleSecondaryHeritage(raceId,role,key){
    if(!['positive','detrimental'].includes(role))return;const race=findRace(raceId);if(!race)return;const rs=raceState(raceId);const current=rs.specialChoices?.hanyouSecondary&&typeof rs.specialChoices.hanyouSecondary==='object'?rs.specialChoices.hanyouSecondary:{subraceId:null,positive:[],detrimental:[]};
    const options=buildResolver()?.secondaryHeritageOptions?.('hanyou',current.subraceId)?.[role]||[];if(!options.some(item=>item.key===key))return;
    const sub=findRace('hanyou')?.subraces?.find(s=>s.id===current.subraceId)||null;const limit=buildResolver()?.heritageLimits?.(findRace('hanyou'),sub,true)?.[role]||0;const values=Array.isArray(current[role])?[...current[role]]:[];const idx=values.indexOf(key);
    if(idx>=0)values.splice(idx,1);else if(values.length<limit)values.push(key);rs.specialChoices={...(rs.specialChoices||{}),hanyouSecondary:{...current,[role]:values}};setRaceState(raceId,rs);refresh();
  }
  function toggleExtraLegacy(raceId,mode,key){
    const race=findRace(raceId);if(!race)return;const rs=raceState(raceId);
    if(mode==='versatile'){
      const values=Array.isArray(rs.extraLegacy)?[...rs.extraLegacy]:[];const idx=values.indexOf(key);if(idx>=0)values.splice(idx,1);else if(buildResolver()?.canSelectExtraLegacy?.(race,rs,mode,key))values.push(key);rs.extraLegacy=values;
    }
    setRaceState(raceId,rs);refresh();
  }
  function setShambledSlot(raceId,index,key){
    const race=findRace(raceId);if(!race)return;const rs=raceState(raceId);const values=Array.isArray(rs.specialChoices?.shambledBodyLegacy)?[...rs.specialChoices.shambledBodyLegacy]:[];while(values.length<2)values.push('');values[Math.max(0,Math.min(1,Number(index)||0))]=key||'';rs.specialChoices={...(rs.specialChoices||{}),shambledBodyLegacy:values.filter(Boolean)};setRaceState(raceId,rs);refresh();
  }
  function setMutationRoll(raceId,index,value){
    const race=findRace(raceId);if(!race)return;const rs=raceState(raceId);const values=Array.isArray(rs.specialChoices?.mutationRolls)?[...rs.specialChoices.mutationRolls]:[];while(values.length<2)values.push('');values[Math.max(0,Math.min(1,Number(index)||0))]=value?Number(value):'';rs.specialChoices={...(rs.specialChoices||{}),mutationRolls:values};setRaceState(raceId,rs);refresh();
  }
  function clearChoices(raceId){
    const race=findRace(raceId);if(!race)return;
    const empty=buildResolver()?.defaultBuilderState?.()||{subraceId:null,legacy:[],mixed:false,secondaryRaceId:null,heritage:{positive:[],detrimental:[],lineage:[]}};
    setRaceState(raceId,empty);
    if(typeof route!=='undefined'&&route.view==='race'&&route.id===raceId&&route.subraceId&&typeof window.navigate==='function')window.navigate('race',raceId);else refresh();
  }
  function resolveBuild(raceId,overrideState){const race=findRace(raceId);return race&&buildResolver()?.resolve?buildResolver().resolve(race,overrideState||raceState(raceId)):null;}

  function traitText(t){return String((t&&t.description)|| (t&&t.summary)||'');}
  function isFullRace(race){return race&&race.textRevision==='full';}
  function stat(label,value){return '<div class="race-meta-item"><span>'+esc(label)+'</span><strong>'+esc(value||'—')+'</strong></div>';}
  function loreBlock(race){
    if(!Array.isArray(race.lore)||!race.lore.length)return '';
    return '<section class="race-detail-section race-lore-section"><div class="race-section-title"><div><span>Descrição da raça</span><h2>Contexto e identidade</h2></div><span class="race-source-chip">Fonte p. '+esc(race.sourcePage)+'</span></div><div class="race-lore-grid">'+race.lore.map(x=>'<article class="race-lore-card"><h3>'+esc(x.title||'Descrição')+'</h3><p>'+esc(x.text||'')+'</p></article>').join('')+'</div></section>';
  }
  function ruleCard(title,text,tag){return '<article class="race-rule-card"><span class="race-rule-tag">'+esc(tag)+'</span><h3>'+esc(title)+'</h3><p>'+esc(text)+'</p></article>';}
  function catalogResultsInner(){
    const visible=filtered().length;
    return '<div id="raceCatalogCount" class="race-catalog-count">'+visible+' de '+races().length+' raças exibidas</div><div class="race-card-grid">'+races().map(r=>raceCard(r,!raceMatches(r))).join('')+'</div>';
  }
  function catalogInner(){
    const rr=rules(),subCount=races().reduce((n,r)=>n+r.subraces.length,0);
    return '<div class="race-hero"><div><div class="eyebrow"><span class="dot"></span>Opções de personagem — 5.19</div><h1 class="page-title">Raças e Subraças</h1><p class="lede">Consulte os traços raciais fixos, compare subraças e monte suas duas escolhas de <b>Traços de Legado</b> em um único lugar. O conteúdo desta ferramenta reúne o capítulo de Opções de Personagem de Lyre e expansões raciais compatíveis da 5.19, preservando a fonte própria de cada subraça.</p></div><div class="race-hero-stats"><div><strong>'+races().length+'</strong><span>raças</span></div><div><strong>'+subCount+'</strong><span>subraças</span></div><div><strong>2</strong><span>Traços de Legado</span></div></div></div>'
      +'<details class="race-rules race-collapsible"><summary class="race-collapsible-summary"><div class="section-head race-collapsible-heading"><div><div class="eyebrow"><span class="dot"></span>Como funciona</div><h2 class="page-title" style="font-size:1.55rem;margin:0">Construção racial em Somnus Domina</h2></div><span class="race-collapse-action" aria-hidden="true"><span class="race-collapse-text when-closed">Expandir</span><span class="race-collapse-text when-open">Recolher</span><span class="race-collapse-chevron"></span></span></div></summary><div class="race-collapsible-body"><div class="race-rule-grid">'
      +ruleCard('1. Escolha a raça','A raça dominante fornece seus traços raciais fixos, especificações básicas e a tabela de subraças.','Raça')
      +ruleCard('2. Escolha a subraça','A subraça acrescenta seus próprios benefícios e, no modelo tradicional, normalmente define o ponto racial adicional.','Subraça')
      +ruleCard('3. Escolha 2 Traços de Legado',rr.intro||'Escolha dois Traços de Legado da raça.','2 escolhas')
      +ruleCard('Sangue misto',rr.mixedBlood||'Use a raça dominante para os traços fixos e combine as listas de Legado das duas raças.','Opcional')
      +(rr.zagalhtaExolunar&&Array.isArray(rr.zagalhtaExolunar.universalLegacyTraits)?ruleCard('Traços de Legado Exolunares Universais','Personagens nascidos entre as estrelas ou adaptados ao vazio podem, quando a campanha/conceito e o Mestre permitirem, escolher também: '+rr.zagalhtaExolunar.universalLegacyTraits.map(t=>t.name).join(', ')+'.','Zagalhta · opcional'):'')
      +'</div></div></details>'
      +(rr.paraprismaticTempest&&Array.isArray(rr.paraprismaticTempest.planarLegacyTraits)?'<details class="race-detail-section race-collapsible"><summary class="race-collapsible-summary"><div class="race-section-title race-collapsible-heading"><div><span>Paraprismatic Tempest · opcional</span><h2>Traços de Legado Planares</h2></div><div class="race-collapsible-side"><span class="race-source-chip">Fonte p. 37</span><span class="race-collapse-action" aria-hidden="true"><span class="race-collapse-text when-closed">Expandir</span><span class="race-collapse-text when-open">Recolher</span><span class="race-collapse-chevron"></span></span></div></div></summary><div class="race-collapsible-body"><p class="race-section-intro">Com autorização do Mestre, personagens tocados pelos Planos Elementais podem tratar estas opções como parte da lista de Traços de Legado de sua raça.</p><div class="race-trait-grid">'+rr.paraprismaticTempest.planarLegacyTraits.map(t=>traitCard(t)).join('')+'</div></div></details>':'')
      +'<section class="race-catalog"><div class="race-catalog-toolbar"><label class="race-search"><span aria-hidden="true">⌕</span><input value="'+attr(state.search)+'" oninput="GRIMORIO_RACE_BROWSER.setSearch(this.value)" placeholder="Buscar raça, subraça, tipo ou região..."></label><div class="race-filter-group">'
      +[['all','Todas'],['planetouched','Planetouched'],['planar','Origem planar'],['undying','Sem envelhecimento']].map(([v,l])=>'<button type="button" data-filter="'+v+'" aria-pressed="'+(state.filter===v?'true':'false')+'" class="race-filter '+(state.filter===v?'active':'')+'" onclick="GRIMORIO_RACE_BROWSER.setFilter(\''+v+'\')">'+l+'</button>').join('')
      +'</div></div><div id="raceCatalogResults">'+catalogResultsInner()+'</div></section>';
  }
  function raceCard(r,hidden=false){
    const href=typeof window.routeHref==='function'?window.routeHref('race',r.id):('#/race/'+encodeURIComponent(r.id));
    const coverApi=window.GRIMORIO_RACE_COVER,cover=coverApi?.get?.(r.id),coverMedia=coverApi?.media?.(r.id)||'',coverStyle=coverApi?.style?.(r.id)||'';
    const initials=esc(r.name.slice(0,2).toUpperCase());
    return '<a href="'+attr(href)+'" data-grimorio-route data-race-id="'+attr(r.id)+'" '+(hidden?'hidden style="display:none"':'')+' class="race-card" style="'+attr(coverStyle)+'"><div class="race-card-media'+(cover?.image?' has-race-art':'')+'"><div class="race-art-placeholder" aria-hidden="true"><span>'+initials+'</span></div>'+coverMedia+'</div><div class="race-card-body"><div class="race-card-top"><span class="race-card-rune">'+initials+'</span><div><h3>'+esc(r.name)+'</h3><span>'+r.subraces.length+' subraça'+(r.subraces.length===1?'':'s')+' · '+r.legacyTraits.length+' opções de Legado</span></div></div><p>'+esc(r.summary)+'</p><div class="race-card-tags"><span>'+esc(r.meta.creatureTypes)+'</span><span>'+esc(r.meta.size)+'</span>'+(r.meta.planarOrigin&&r.meta.planarOrigin!=='—'?'<span>'+esc(r.meta.planarOrigin)+'</span>':'')+'</div><div class="race-card-foot"><span>Fonte p. '+r.sourcePage+'</span><b>Consultar →</b></div></div></a>';
  }
  function traitCard(t,opts={}){
    const selected=!!opts.selected,disabled=!!opts.disabled,onclick=opts.onclick||'';
    const role=t.heritageRole||'';
    const roleLabels={rule:'Regra de Herança',positive:'Positivo',detrimental:'Prejudicial',lineage:'Traço da linhagem'};
    const cls='race-trait-card'+(selected?' selected':'')+(disabled?' disabled':'')+(opts.mixed?' mixed':'')+(role?' heritage-'+role:'')+(t.description?' text-full':'');
    const origin=opts.origin?'<span>'+esc(opts.origin)+(opts.mixed?' · sangue misto':'')+'</span>':'';
    const roleBadge=role?'<span class="heritage-role '+role+'">'+roleLabels[role]+'</span>':'';
    const textBadge=t.description?'<span class="trait-text-quality">Texto integral</span>':'';
    const body='<div class="race-trait-head"><div><h4>'+esc(t.name)+'</h4>'+origin+roleBadge+textBadge+'</div>'+(opts.selectable?'<span class="race-choice-mark">'+(selected?'✓':'')+'</span>':'')+'</div><p class="race-trait-text">'+esc(traitText(t))+'</p><small>Fonte p. '+esc(t.page)+'</small>';
    return opts.selectable?'<button type="button" class="'+cls+'" '+(disabled?'disabled':'')+' onclick="'+onclick+'">'+body+'</button>':'<article class="'+cls+'">'+body+'</article>';
  }
  function subraceCard(race,s,selected){
    const href=typeof window.routeHref==='function'?window.routeHref('race',race.id,{subraceId:s.id}):('#/race/'+encodeURIComponent(race.id)+'/subrace/'+encodeURIComponent(s.id));
    const source=s.source||race.source;
    return '<a href="'+attr(href)+'" data-grimorio-route data-race-id="'+attr(race.id)+'" data-subrace-id="'+attr(s.id)+'" class="subrace-card '+(selected?'selected':'')+'"><div class="subrace-card-head"><div><h4>'+esc(s.name)+'</h4><span>'+esc(source)+' · p. '+s.page+'</span></div><span class="subrace-radio">'+(selected?'●':'○')+'</span></div>'+(s.ability?'<div class="subrace-ability">'+esc(s.ability)+'</div>':'')+'<div class="subrace-trait-pills">'+s.traits.slice(0,4).map(t=>'<span>'+esc(t.name)+'</span>').join('')+(s.traits.length>4?'<span>+'+(s.traits.length-4)+' opções</span>':'')+'</div><span class="subrace-route-hint">Abrir subraça ↗</span></a>';
  }
  function selectedSubraceTraits(race,sub,rs){
    if(!sub)return '';
    let extra='';
    if(race.id==='hadislin'&&sub.cursedLegacySpells){
      extra+='<div class="cursed-legacy-spells"><div><strong>Legado Amaldiçoado — magias desta subraça</strong><span>O traço racial Legado Amaldiçoado usa esta mesma subraça para determinar suas magias.</span></div><div class="cursed-spell-grid"><span><b>Nível 3</b>'+esc(sub.cursedLegacySpells.characterLevel3)+'</span><span><b>Nível 5</b>'+esc(sub.cursedLegacySpells.characterLevel5)+'</span></div></div>';
    }
    if(race.id==='primordia'&&sub.elementalMagicSpells){
      extra+='<div class="cursed-legacy-spells elemental-magic-spells"><div><strong>Magia Elemental — magias desta subraça</strong><span>O traço racial Magia Elemental usa a subraça escolhida para definir o truque e as magias de 1º e 2º nível.</span></div><div class="cursed-spell-grid elemental-spell-grid"><span><b>Truque</b>'+esc(sub.elementalMagicSpells.cantrip)+'</span><span><b>1º nível</b>'+esc(sub.elementalMagicSpells.level1)+'</span><span><b>2º nível</b>'+esc(sub.elementalMagicSpells.level2)+'</span></div></div>';
    }
    const heritage=buildResolver()?.heritageOptions?.(race,sub)||{rule:[],lineage:[],positive:[],detrimental:[]};
    const hasHeritage=heritage.rule.length||heritage.lineage.length||heritage.positive.length||heritage.detrimental.length;
    if(hasHeritage){
      const limits=buildResolver()?.heritageLimits?.(race,sub)||{positive:0,detrimental:0};
      const selected=rs?.heritage||{positive:[],detrimental:[],lineage:[]};
      const sourceSpecific=sub.heritageRules?' As quantidades exibidas aqui seguem a regra específica desta subraça, que prevalece sobre a regra Hanyou geral.':'';
      extra+='<div class="hanyou-heritage-note"><strong>Escolhas de Herança</strong><span>Como '+esc(race.name)+' dominante, escolha '+esc(limits.positive)+' Traço'+(limits.positive===1?'':'s')+' de Herança positivo'+(limits.positive===1?'':'s')+' e '+esc(limits.detrimental)+(limits.detrimental===1?' prejudicial':' prejudiciais')+'.'+sourceSpecific+' Estas escolhas agora fazem parte do estado persistente Race Builder v2.</span></div>';
      if(heritage.rule.length)extra+='<div class="heritage-group rule"><h4>Regras da Herança</h4><div class="race-trait-grid">'+heritage.rule.map(entry=>traitCard(entry.trait)).join('')+'</div></div>';
      if(heritage.lineage.length)extra+='<div class="heritage-group lineage"><h4>Traço'+(heritage.lineage.length===1?'':'s')+' da linhagem</h4><div class="race-trait-grid">'+heritage.lineage.map(entry=>traitCard(entry.trait)).join('')+'</div></div>';
      if(heritage.positive.length)extra+='<div class="heritage-group positive"><h4>Traços de Herança positivos — escolha '+esc(limits.positive)+'</h4><div class="race-trait-grid">'+heritage.positive.map(entry=>traitCard(entry.trait,{selectable:true,selected:selected.positive.includes(entry.key),disabled:!selected.positive.includes(entry.key)&&!buildResolver()?.canSelectHeritage?.(race,rs,'positive',entry.key),onclick:'GRIMORIO_RACE_BROWSER.toggleHeritage(\''+attr(race.id)+'\',\'positive\',\''+attr(entry.key)+'\')'})).join('')+'</div></div>';
      if(heritage.detrimental.length)extra+='<div class="heritage-group detrimental"><h4>Traços de Herança prejudiciais — escolha '+esc(limits.detrimental)+'</h4><div class="race-trait-grid">'+heritage.detrimental.map(entry=>traitCard(entry.trait,{selectable:true,selected:selected.detrimental.includes(entry.key),disabled:!selected.detrimental.includes(entry.key)&&!buildResolver()?.canSelectHeritage?.(race,rs,'detrimental',entry.key),onclick:'GRIMORIO_RACE_BROWSER.toggleHeritage(\''+attr(race.id)+'\',\'detrimental\',\''+attr(entry.key)+'\')'})).join('')+'</div></div>';
      return extra;
    }
    return extra+'<div class="race-trait-grid">'+sub.traits.map(t=>traitCard(t)).join('')+'</div>';
  }

  function optionList(items,selected,labelFn){
    return (items||[]).map(item=>'<option value="'+attr(item.id)+'" '+(item.id===selected?'selected':'')+'>'+esc(labelFn?labelFn(item):item.name)+'</option>').join('');
  }
  function rb3Select(label,help,value,options,onchange,placeholder='Escolha…'){
    return '<label class="rb3-choice-field"><span>'+esc(label)+'</span><small>'+esc(help||'')+'</small><select onchange="'+onchange+'"><option value="">'+esc(placeholder)+'</option>'+options.map(o=>'<option value="'+attr(o.value)+'" '+(String(o.value)===String(value||'')?'selected':'')+'>'+esc(o.label)+'</option>').join('')+'</select></label>';
  }
  function renderRb3Choices(race,sub,secondary,rs,resolution){
    if(!resolution)return '';
    const resolver=buildResolver(),blocks=[];
    const abilities=resolver?.abilities||[];
    const sizeNames=new Map((resolver?.sizes||[]).map(x=>[x.id,x.name]));

    if(race.id==='hanyou'&&rs.abilityMode==='source'){
      const current=rs.abilityChoices?.hanyou&&typeof rs.abilityChoices.hanyou==='object'?rs.abilityChoices.hanyou:{plus:[],minus:''};
      const plus=Array.isArray(current.plus)?current.plus:[];
      const opts=abilities.map(a=>({value:a.id,label:a.name}));
      blocks.push('<div class="rb3-choice-panel"><div><strong>Atributos tradicionais do Hanyou</strong><span>A fonte exige +2 em dois atributos diferentes e −2 em um terceiro.</span></div><div class="rb3-choice-grid">'
        +rb3Select('+2 — primeiro atributo','Deve ser diferente dos outros.',plus[0]||'',opts,'GRIMORIO_RACE_BROWSER.setHanyouAbility(\''+attr(race.id)+'\',\'plus0\',this.value)')
        +rb3Select('+2 — segundo atributo','Deve ser diferente dos outros.',plus[1]||'',opts,'GRIMORIO_RACE_BROWSER.setHanyouAbility(\''+attr(race.id)+'\',\'plus1\',this.value)')
        +rb3Select('−2 — atributo','Deve ser diferente dos dois acima.',current.minus||'',opts,'GRIMORIO_RACE_BROWSER.setHanyouAbility(\''+attr(race.id)+'\',\'minus\',this.value)')
        +'</div></div>');
    }

    const abilityReq=resolver?.subraceAbilityChoice?.(sub);
    if(abilityReq?.blocked){
      blocks.push('<div class="rb3-choice-panel warning"><div><strong>Aumento de atributo não definido pela fonte</strong><span>'+esc(abilityReq.raw)+' — o Grimório não preencherá esse dado por inferência.</span></div></div>');
    }else if(abilityReq?.required){
      const opts=abilityReq.options.map(id=>({value:id,label:abilities.find(a=>a.id===id)?.name||id}));
      blocks.push('<div class="rb3-choice-panel"><div><strong>Escolha de atributo da subraça</strong><span>'+esc(abilityReq.raw)+'</span></div><div class="rb3-choice-grid">'
        +rb3Select('Atributo que recebe +1','Escolha exigida pela fonte.',rs.abilityChoices?.subrace||'',opts,'GRIMORIO_RACE_BROWSER.setAbilityChoice(\''+attr(race.id)+'\',\'subrace\',this.value)')+'</div></div>');
    }

    if(race.id==='vanquis'){
      const opts=races().filter(item=>item.id!=='vanquis').map(item=>({value:item.id,label:item.name}));
      blocks.push('<div class="rb3-choice-panel"><div><strong>Persona Anterior</strong><span>Escolha a raça que representa quem o Vanquis era em vida. Ela não concede traços raciais.</span></div><div class="rb3-choice-grid">'
        +rb3Select('Raça da vida anterior','Define aparência, tamanho e contexto anteriores.',rs.specialChoices?.formerPersonaRaceId||'',opts,'GRIMORIO_RACE_BROWSER.setSpecialChoice(\''+attr(race.id)+'\',\'formerPersonaRaceId\',this.value)')+'</div></div>');
    }

    const sizeReq=resolver?.baseSizeRequirement?.(race,rs);
    if(sizeReq?.required){
      const key=sizeReq.choiceKey||'race:size';const opts=sizeReq.options.map(id=>({value:id,label:sizeNames.get(id)||id}));
      blocks.push('<div class="rb3-choice-panel"><div><strong>Tamanho-base</strong><span>'+(sizeReq.source==='core-trait'?'O traço mecânico da raça é a autoridade para esta escolha.':'Escolha estrutural necessária para o build racial.')+'</span></div><div class="rb3-choice-grid">'
        +rb3Select('Tamanho','Será transportado como escolha estrutural do build.',rs.traitChoices?.[key]||'',opts,'GRIMORIO_RACE_BROWSER.setTraitChoice(\''+attr(race.id)+'\',\''+attr(key)+'\',this.value)')+'</div></div>');
    }

    const selectedLegacy=resolution.selections?.legacy||[];
    const bloodlineKey=secondary?secondary.id+':mixed:bloodline':'';
    const bloodlineNeeded=!!secondary&&(secondary.id==='hanyou'||selectedLegacy.some(entry=>entry.key===bloodlineKey));
    if(bloodlineNeeded){
      let options=resolution.pools?.bloodline||[];
      const hanyouSub=secondary?.id==='hanyou'?rs.specialChoices?.hanyouSecondary?.subraceId:null;
      if(hanyouSub)options=options.filter(o=>o.subraceId===hanyouSub);
      const opts=options.map(o=>({value:o.key,label:o.subraceName+' — '+o.label}));
      blocks.push('<div class="rb3-choice-panel"><div><strong>Traço de Linhagem — '+esc(secondary.name)+'</strong><span>Escolha qual característica de subraça será herdada pela regra Bloodline.</span></div><div class="rb3-choice-grid">'
        +rb3Select('Linhagem herdada',secondary.id==='hanyou'?'Hanyou secundário recebe Linhagem automaticamente; a escolha deve corresponder à Herança abaixo.':'Esta escolha resolve o wrapper de Sangue Misto em uma característica concreta.',rs.bloodlineChoices?.[bloodlineKey]||'',opts,'GRIMORIO_RACE_BROWSER.setBloodlineChoice(\''+attr(race.id)+'\',\''+attr(bloodlineKey)+'\',this.value)')+'</div></div>');
    }

    if(secondary?.id==='hanyou'){
      const h=findRace('hanyou'),current=rs.specialChoices?.hanyouSecondary||{};
      const sr=h?.subraces?.find(item=>item.id===current.subraceId)||null;
      const options=sr?resolver?.secondaryHeritageOptions?.('hanyou',sr.id):null;
      const limits=sr?resolver?.heritageLimits?.(h,sr,true):{positive:1,detrimental:1};
      let html='<div class="rb3-choice-panel"><div><strong>Herança do Hanyou secundário</strong><span>Uma escolha normal de Legado é convertida em Linhagem automática + 1 Traço de Herança positivo + 1 prejudicial.</span></div><div class="rb3-choice-grid">'
        +rb3Select('Subraça Hanyou','Determina a Linhagem e os pools de Herança.',current.subraceId||'',(h?.subraces||[]).map(item=>({value:item.id,label:item.name})),'GRIMORIO_RACE_BROWSER.setHanyouSecondarySubrace(\''+attr(race.id)+'\',this.value)')+'</div>';
      if(sr&&options){
        html+='<div class="heritage-group positive"><h4>Herança positiva — escolha '+esc(limits.positive)+'</h4><div class="race-trait-grid">'+(options.positive||[]).map(entry=>traitCard(entry.trait,{selectable:true,selected:(current.positive||[]).includes(entry.key),disabled:!(current.positive||[]).includes(entry.key)&&(current.positive||[]).length>=limits.positive,onclick:'GRIMORIO_RACE_BROWSER.toggleSecondaryHeritage(\''+attr(race.id)+'\',\'positive\',\''+attr(entry.key)+'\')'})).join('')+'</div></div>';
        html+='<div class="heritage-group detrimental"><h4>Herança prejudicial — escolha '+esc(limits.detrimental)+'</h4><div class="race-trait-grid">'+(options.detrimental||[]).map(entry=>traitCard(entry.trait,{selectable:true,selected:(current.detrimental||[]).includes(entry.key),disabled:!(current.detrimental||[]).includes(entry.key)&&(current.detrimental||[]).length>=limits.detrimental,onclick:'GRIMORIO_RACE_BROWSER.toggleSecondaryHeritage(\''+attr(race.id)+'\',\'detrimental\',\''+attr(entry.key)+'\')'})).join('')+'</div></div>';
      }
      blocks.push(html+'</div>');
    }

    for(const driven of resolution.selections?.subraceDriven||[]){
      const opts=(driven.options||[]).map(o=>({value:o.id,label:o.name}));
      blocks.push('<div class="rb3-choice-panel"><div><strong>'+esc(driven.config?.choiceLabel||'Subraça de referência')+'</strong><span>A mesma escolha será usada por outras características da mesma raça quando a fonte exigir acoplamento.</span></div><div class="rb3-choice-grid">'
        +rb3Select('Subraça de referência','Define as magias/efeitos desta característica.',driven.selectedSubrace?.id||'',opts,'GRIMORIO_RACE_BROWSER.setBloodlineChoice(\''+attr(race.id)+'\',\''+attr(driven.traitKey)+'\',this.value)')+'</div></div>');
    }

    if(selectedLegacy.some(entry=>entry.key==='human:mixed:versatile-blood')){
      const chosen=rs.extraLegacy||[],pool=resolution.pools?.versatileBlood||[];
      blocks.push('<div class="rb3-choice-panel"><div><strong>Sangue Versátil</strong><span>Este wrapper não é uma característica final: ele substitui um espaço por exatamente dois Traços de Legado normais das duas raças, terminando com três Legados.</span></div><div class="heritage-group"><h4>Escolhas de substituição — '+chosen.length+' / 2</h4><div class="race-trait-grid">'+pool.map(entry=>traitCard(entry.trait,{selectable:true,selected:chosen.includes(entry.key),disabled:!chosen.includes(entry.key)&&!resolver?.canSelectExtraLegacy?.(race,rs,'versatile',entry.key),origin:entry.originRaceName,onclick:'GRIMORIO_RACE_BROWSER.toggleExtraLegacy(\''+attr(race.id)+'\',\'versatile\',\''+attr(entry.key)+'\')'})).join('')+'</div></div></div>');
    }

    if(race.id==='vanquis'&&sub?.id==='amalgamation'){
      const pool=resolution.pools?.shambledBody||[];const chosen=rs.specialChoices?.shambledBodyLegacy||[];
      const opts=pool.map(entry=>({value:entry.key,label:entry.originRaceName+' — '+entry.trait.name}));
      blocks.push('<div class="rb3-choice-panel"><div><strong>Corpo Remendado</strong><span>Escolha dois Traços de Legado normais de duas raças diferentes, excluindo a raça primária e a secundária.</span></div><div class="rb3-choice-grid">'
        +rb3Select('Traço adicional 1','Primeira raça de origem.',chosen[0]||'',opts,'GRIMORIO_RACE_BROWSER.setShambledSlot(\''+attr(race.id)+'\',0,this.value)')
        +rb3Select('Traço adicional 2','Deve vir de outra raça.',chosen[1]||'',opts,'GRIMORIO_RACE_BROWSER.setShambledSlot(\''+attr(race.id)+'\',1,this.value)')+'</div></div>');
    }

    if(race.id==='orc'&&sub?.id==='mutaliate-orc'&&Array.isArray(sub.mutationTable)){
      const chosen=Array.isArray(rs.specialChoices?.mutationRolls)?rs.specialChoices.mutationRolls:[];
      const opts=sub.mutationTable.map(row=>({value:String(row.d12),label:'d12 '+row.d12+' — '+row.traitName}));
      blocks.push('<div class="rb3-choice-panel"><div><strong>Mutações iniciais do Mutaliate</strong><span>A fonte manda rolar 1d12 duas vezes na criação. Registre os dois resultados; resultados repetidos são preservados.</span></div><div class="rb3-choice-grid">'
        +rb3Select('Primeiro 1d12','Resultado obtido na tabela de Mutações.',chosen[0]||'',opts,'GRIMORIO_RACE_BROWSER.setMutationRoll(\''+attr(race.id)+'\',0,this.value)')
        +rb3Select('Segundo 1d12','Resultado obtido na tabela de Mutações.',chosen[1]||'',opts,'GRIMORIO_RACE_BROWSER.setMutationRoll(\''+attr(race.id)+'\',1,this.value)')+'</div></div>');
    }

    if(!blocks.length)return '';
    return '<section class="race-detail-section rb3-choices"><div class="race-section-title"><div><span>RB-3 · Motor de Elegibilidade</span><h2>Escolhas estruturais do build</h2></div><span class="race-source-chip">Identidade racial</span></div><p class="race-section-intro">Estas escolhas alteram a composição do Race Build Bundle e precisam ser resolvidas no Grimório. Escolhas dependentes da ficha continuam reservadas para o Advancement do Foundry.</p>'+blocks.join('')+'</section>';
  }

  function buildStatusSummary(resolution){
    if(!resolution)return '';
    const labels={ready:'Build racial pronto para exportação',review:'Build exportável · escolhas/revisões posteriores preservadas',incomplete:'Construção incompleta',blocked:'Construção inválida'};
    const detail=resolution.errors.length?resolution.errors[0].message:(resolution.pending.length?resolution.pending[0].message:(resolution.canExport?'Todas as escolhas estruturais exigidas pelo motor RB-3 estão resolvidas.':'Ainda existem escolhas estruturais pendentes.'));
    const actorCount=resolution.pendingFoundryChoices?.length||0;
    const actor=actorCount?' '+actorCount+' escolha'+(actorCount===1?'':'s')+' dependente'+(actorCount===1?'':'s')+' do Actor será'+(actorCount===1?'':'ão')+' preservada'+(actorCount===1?'':'s')+' no JSON para resolução futura pelo Advancement.':'';
    return '<div class="race-build-resolution status-'+esc(resolution.status)+'"><strong>'+esc(labels[resolution.status]||resolution.status)+'</strong><span>'+esc(detail+actor)+'</span><small>RB-4 habilita a exportação apenas quando canExport='+esc(String(!!resolution.canExport))+'. O arquivo gerado é um contrato para o futuro Grimório Importer 0.13.x+.</small></div>';
  }
  function buildExportAction(race,resolution){
    if(!resolution)return '';
    const enabled=!!resolution.canExport;
    const reason=resolution.errors?.[0]?.message||'Complete todas as escolhas estruturais obrigatórias para liberar a exportação.';
    return '<div class="race-build-export-actions"><div><strong>Race Build Bundle v1</strong><span>'+(enabled?'Construção validada pelo resolver e pronta para gerar JSON.':esc(reason))+'</span></div><button type="button" class="action-btn primary foundry-export-trigger race-foundry-export-trigger" onclick="openFoundryRaceExport(\''+attr(race.id)+'\')" '+(enabled?'':'disabled title="'+attr(reason)+'"')+'><span class="foundry-export-icon" aria-hidden="true">⬡</span> Exportar para Foundry</button></div>';
  }

  function renderRace(id,forcedSubraceId=null){
    const race=findRace(id);if(!race)return '<div class="empty-state">Raça não encontrada.</div>';
    const baseState=raceState(id),requestedSubrace=race.subraces.some(s=>s.id===forcedSubraceId)?forcedSubraceId:baseState.subraceId;
    const rs=buildResolver()?.normalizeBuilderState?.(race,{...baseState,subraceId:requestedSubrace})||{...baseState,subraceId:requestedSubrace};
    const sub=race.subraces.find(s=>s.id===rs.subraceId)||null,pool=legacyPool(race,rs),selected=pool.filter(x=>rs.legacy.includes(x.key));
    const secondary=rs.secondaryRaceId?findRace(rs.secondaryRaceId):null,resolution=buildResolver()?.resolve?.(race,rs)||null;
    const full=isFullRace(race),legacyMax=resolution?.limits?.legacy?.total||legacyLimit(race),legacyUsed=resolution?.limits?.legacy?.effectiveSelectedSlots??selected.length;
    const revisionBadge=full?'<span class="race-revision-badge full">✓ Texto integral revisado</span>':'<span class="race-revision-badge pending">Resumo mecânico — revisão integral pendente</span>';
    const extraMeta=(race.meta.alignment?stat('Tendência racial',race.meta.alignment):'')+(race.meta.languages?stat('Idiomas',race.meta.languages):'')+(race.meta.speed?stat('Deslocamento',race.meta.speed):'');
    const subDescription=sub&&sub.description?'<div class="subrace-description"><strong>Descrição</strong><p>'+esc(sub.description)+'</p></div>':'';
    const subBloodline=sub&&sub.bloodlineTrait?'<div class="subrace-description subrace-bloodline"><strong>Traço de Linhagem (Bloodline Trait)</strong><p>'+esc(sub.bloodlineTrait)+(sub.originalBloodlineTrait?' <span class="subrace-original-name">('+esc(sub.originalBloodlineTrait)+')</span>':'')+'</p></div>':'';
    const subEditorial=sub&&sub.editorialNote?'<div class="subrace-editorial-note"><strong>Nota editorial</strong><p>'+esc(sub.editorialNote)+'</p></div>':'';
    const editorial=full?'Esta raça já passou pela revisão textual integral. As habilidades exibem, em português, o texto mecânico completo correspondente à fonte; os resumos curtos permanecem apenas como apoio de navegação.':'Esta raça ainda usa os resumos mecânicos da versão 5.30 enquanto aguarda revisão integral. Consulte a página indicada da fonte quando uma característica possuir condições, exceções ou escolhas internas extensas.';
    const artApi=window.GRIMORIO_RACE_DETAIL_ART,detailArt=artApi?.get?.(race.id),detailStyle=artApi?.style?.(race.id)||'',detailMedia=artApi?.media?.(race.id)||'';
    const initials=esc(race.name.slice(0,2).toUpperCase());
    const artPanel=detailArt?.image?'<button type="button" class="race-detail-art-panel has-race-art" style="'+attr(detailStyle)+'" data-race-name="'+attr(race.name)+'" aria-label="Ampliar ilustração de '+attr(race.name)+'" onclick="GRIMORIO_RACE_ART_RUNTIME.openDetail(this,\''+attr(race.id)+'\')"><div class="race-art-placeholder" aria-hidden="true"><span>'+initials+'</span></div>'+detailMedia+'<span class="race-detail-art-zoom" aria-hidden="true">Ampliar ↗</span></button>':'<div class="race-detail-art-panel" aria-hidden="true"><div class="race-art-placeholder"><span>'+initials+'</span></div></div>';
    return '<div class="race-detail '+(full?'full-text':'')+'"><div class="race-detail-actions"><a class="action-btn" href="'+attr(window.routeHref?window.routeHref('races'): '#/races')+'" data-grimorio-route>← Todas as raças</a><div>'+((typeof window.shareLinkButton==='function')?window.shareLinkButton('race',race.id,forcedSubraceId?{subraceId:forcedSubraceId}:{},forcedSubraceId?'Copiar link da subraça':'Copiar link da raça'):'')+'<a class="action-btn" href="'+attr(window.routeHref?window.routeHref('ability-planner'):'#/ability-planner')+'" data-grimorio-route>Abrir Planejador de Atributos</a><button class="action-btn" onclick="GRIMORIO_RACE_BROWSER.clearChoices(\''+attr(race.id)+'\')">Limpar escolhas</button></div></div>'
      +'<header class="race-detail-hero"><div class="race-detail-copy"><div class="race-detail-identity"><div class="race-detail-rune">'+initials+'</div><div><div class="eyebrow"><span class="dot"></span>'+esc(race.source)+' · p. '+race.sourcePage+'</div><h1 class="page-title">'+esc(race.name)+'</h1><p class="lede">'+esc(race.summary)+'</p>'+revisionBadge+'</div></div><div class="race-choice-counter"><span>Traços de Legado</span><strong>'+legacyUsed+' / '+legacyMax+'</strong><small>'+(legacyUsed===legacyMax?'Escolha completa':'Selecione '+Math.max(0,legacyMax-legacyUsed))+'</small></div></div>'+artPanel+'</header>'
      +'<div class="race-meta-grid">'+stat('Tipos de criatura',race.meta.creatureTypes)+stat('Expectativa de vida',race.meta.lifeExpectancy)+stat('Alinhamento nacional',race.meta.nationalAlignment)+stat('Origem planar',race.meta.planarOrigin)+stat('Planetouched?',race.meta.planetouched)+stat('Tamanho',race.meta.size)+stat('Regiões',race.meta.regions)+extraMeta+'</div>'
      +loreBlock(race)
      +'<section class="race-detail-section"><div class="race-section-title"><div><span>Base racial</span><h2>Traços fixos</h2></div><span class="race-source-chip">Atributos: '+esc(race.abilityScore)+'</span></div><div class="race-trait-grid">'+race.coreTraits.map(t=>traitCard(t)).join('')+'</div></section>'
      +'<section class="race-detail-section"><div class="race-section-title"><div><span>'+(race.subraces.length?'Escolha obrigatória':'Regra da raça')+'</span><h2>Subraça</h2></div><span class="race-source-chip">'+race.subraces.length+' opções</span></div>'+(race.subraces.length?'<div class="subrace-grid">'+race.subraces.map(s=>subraceCard(race,s,sub&&s.id===sub.id)).join('')+'</div>':'<div class="subrace-description"><strong>Sem subraças</strong><p>'+(race.editorialNote?esc(race.editorialNote):'Esta raça não apresenta opções de subraça na fonte.')+'</p></div>')+(sub?'<div class="subrace-selected-detail"><div class="race-section-title compact"><div><span>Selecionada</span><h3>'+esc(sub.name)+'</h3><small class="subrace-source-line">'+esc(sub.source||race.source)+' · p. '+esc(sub.page)+'</small><a class="equipment-deep-link" href="'+attr(window.routeHref?window.routeHref('race',race.id,{subraceId:sub.id}):('#/race/'+race.id+'/subrace/'+sub.id))+'" data-grimorio-route>Abrir link da subraça ↗</a></div>'+(sub.ability?'<span class="race-source-chip">'+esc(sub.ability)+'</span>':'')+'</div>'+subDescription+subBloodline+subEditorial+selectedSubraceTraits(race,sub,rs)+'</div>':'')+'</section>'
      +'<section class="race-detail-section legacy-section"><div class="race-section-title"><div><span>Personalização racial</span><h2>Traços de Legado</h2></div><span class="legacy-count '+(legacyUsed===legacyMax?'complete':'')+'">'+legacyUsed+' / '+legacyMax+' espaços usados</span></div><p class="race-section-intro">Escolha os Traços de Legado permitidos pela raça. O limite-base é dois; quando a própria raça concede um Traço de Legado adicional, o espaço extra só pode ser preenchido por uma opção da lista de Legado da raça dominante.</p>'
      +'<div class="mixed-blood-box"><label><input type="checkbox" '+(rs.mixed?'checked':'')+' onchange="GRIMORIO_RACE_BROWSER.toggleMixed(\''+attr(race.id)+'\')"><span><strong>Personagem de sangue misto</strong><small>Use '+esc(race.name)+' como raça dominante e combine Traços de Legado com uma raça secundária.</small></span></label>'+(rs.mixed?'<select onchange="GRIMORIO_RACE_BROWSER.setSecondary(\''+attr(race.id)+'\',this.value)"><option value="">Escolha a raça secundária…</option>'+races().filter(x=>x.id!==race.id).map(x=>'<option value="'+attr(x.id)+'" '+(secondary&&secondary.id===x.id?'selected':'')+'>'+esc(x.name)+'</option>').join('')+'</select>':'')+'</div>'
      +(rs.mixed&&secondary?'<div class="mixed-explain"><strong>Como a combinação está sendo calculada:</strong> traços fixos e subraça vêm de '+esc(race.name)+'; as duas escolhas abaixo podem vir das listas normais de '+esc(race.name)+' e '+esc(secondary.name)+', e os Traços de Sangue Misto permitidos da raça secundária. Regras específicas de cada raça prevalecem sobre esta regra geral.</div>':'')
      +'<div class="race-trait-grid legacy-grid">'+pool.map(x=>traitCard(x.trait,{selectable:true,selected:rs.legacy.includes(x.key),disabled:!rs.legacy.includes(x.key)&&!canSelectLegacy(race,rs,x.key),origin:x.origin,mixed:x.type==='mixed',onclick:'GRIMORIO_RACE_BROWSER.toggleLegacy(\''+attr(race.id)+'\',\''+attr(x.key)+'\')'})).join('')+'</div></section>'
      +renderRb3Choices(race,sub,secondary,rs,resolution)
      +'<section class="race-build-summary"><div><span>Planejamento atual · Builder v2 + Eligibility RB-3 + Export RB-4</span><h2>'+esc(race.name)+(sub?' — '+esc(sub.name):'')+'</h2><p>'+(secondary?'Sangue misto: dominante '+esc(race.name)+' + secundária '+esc(secondary.name)+'.':'Raça única.')+'</p></div><div class="race-build-chosen">'+(selected.length?selected.map(x=>'<span>'+esc(x.trait.name)+'</span>').join(''):'<span class="empty">Nenhum Traço de Legado selecionado</span>')+'</div>'+buildStatusSummary(resolution)+buildExportAction(race,resolution)+'</section>'
      +'<div class="race-editorial-note '+(full?'full':'pending')+'"><strong>Qualidade do texto:</strong> '+esc(editorial)+'</div></div>';
  }
  function renderCatalog(){return '<div id="raceCatalogRoot" class="race-browser">'+catalogInner()+'</div>';}
  window.GRIMORIO_RACE_BROWSER={renderCatalog,renderRace,setSearch,setFilter,openRace,rememberSubrace,selectSubrace,toggleMixed,setSecondary,toggleLegacy,toggleHeritage,setOptionalPool,setStructuredChoice,setBloodlineChoice,setAbilityChoice,setTraitChoice,setSpecialChoice,setHanyouAbility,setHanyouSecondarySubrace,toggleSecondaryHeritage,toggleExtraLegacy,setShambledSlot,setMutationRoll,clearChoices,resolveBuild,getBuildState:raceState,getRace:findRace,getRaces:races,storage:Object.freeze({key:STORAGE_KEY,legacyKey:LEGACY_STORAGE_KEY,schema:UI_SCHEMA,version:UI_SCHEMA_VERSION})};
})();
