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
  function rememberSubrace(raceId,subraceId){const r=findRace(raceId);if(!r||!r.subraces.some(s=>s.id===subraceId))return false;const rs=raceState(raceId);rs.subraceId=subraceId;setRaceState(raceId,rs);return true;}
  function selectSubrace(raceId,subraceId){if(!rememberSubrace(raceId,subraceId))return;if(typeof window.navigate==='function')window.navigate('race',raceId,{subraceId});else refresh();}
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
  function clearChoices(raceId){const r=findRace(raceId);if(!r)return;const rs=raceState(raceId);rs.legacy=[];rs.subraceId=r.subraces[0]?.id||null;rs.mixed=false;rs.secondaryRaceId=null;setRaceState(raceId,rs);if(typeof route!=='undefined'&&route.view==='race'&&route.id===raceId&&route.subraceId&&typeof window.navigate==='function')window.navigate('race',raceId);else refresh();}

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
      +'<section class="race-rules"><div class="section-head"><div><div class="eyebrow"><span class="dot"></span>Como funciona</div><h2 class="page-title" style="font-size:1.55rem;margin:0">Construção racial em Somnus Domina</h2></div></div><div class="race-rule-grid">'
      +ruleCard('1. Escolha a raça','A raça dominante fornece seus traços raciais fixos, especificações básicas e a tabela de subraças.','Raça')
      +ruleCard('2. Escolha a subraça','A subraça acrescenta seus próprios benefícios e, no modelo tradicional, normalmente define o ponto racial adicional.','Subraça')
      +ruleCard('3. Escolha 2 Traços de Legado',rr.intro||'Escolha dois Traços de Legado da raça.','2 escolhas')
      +ruleCard('Sangue misto',rr.mixedBlood||'Use a raça dominante para os traços fixos e combine as listas de Legado das duas raças.','Opcional')
      +(rr.zagalhtaExolunar&&Array.isArray(rr.zagalhtaExolunar.universalLegacyTraits)?ruleCard('Traços de Legado Exolunares Universais','Personagens nascidos entre as estrelas ou adaptados ao vazio podem, quando a campanha/conceito e o Mestre permitirem, escolher também: '+rr.zagalhtaExolunar.universalLegacyTraits.map(t=>t.name).join(', ')+'.','Zagalhta · opcional'):'')
      +'</div></section>'
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
  function selectedSubraceTraits(race,sub){
    if(!sub)return '';
    let extra='';
    if(race.id==='hadislin'&&sub.cursedLegacySpells){
      extra+='<div class="cursed-legacy-spells"><div><strong>Legado Amaldiçoado — magias desta subraça</strong><span>O traço racial Legado Amaldiçoado usa esta mesma subraça para determinar suas magias.</span></div><div class="cursed-spell-grid"><span><b>Nível 3</b>'+esc(sub.cursedLegacySpells.characterLevel3)+'</span><span><b>Nível 5</b>'+esc(sub.cursedLegacySpells.characterLevel5)+'</span></div></div>';
    }
    if(race.id==='primordia'&&sub.elementalMagicSpells){
      extra+='<div class="cursed-legacy-spells elemental-magic-spells"><div><strong>Magia Elemental — magias desta subraça</strong><span>O traço racial Magia Elemental usa a subraça escolhida para definir o truque e as magias de 1º e 2º nível.</span></div><div class="cursed-spell-grid elemental-spell-grid"><span><b>Truque</b>'+esc(sub.elementalMagicSpells.cantrip)+'</span><span><b>1º nível</b>'+esc(sub.elementalMagicSpells.level1)+'</span><span><b>2º nível</b>'+esc(sub.elementalMagicSpells.level2)+'</span></div></div>';
    }
    if(race.id==='hanyou'){
      const rule=sub.traits.find(t=>t.heritageRole==='rule');
      const lineage=sub.traits.filter(t=>t.heritageRole==='lineage');
      const positive=sub.traits.filter(t=>t.heritageRole==='positive');
      const detrimental=sub.traits.filter(t=>t.heritageRole==='detrimental');
      const hr=race.heritageRules||{};
      extra+='<div class="hanyou-heritage-note"><strong>Escolhas de Herança Hanyou</strong><span>Como Hanyou dominante, escolha '+esc(hr.positiveChoices||2)+' Traços de Herança positivos e '+esc(hr.detrimentalChoices||2)+' prejudiciais. Um prejudicial é removido após o primeiro Descanso Longo no 8º nível ou superior e o outro no 13º nível ou superior. Se Hanyou for sua raça secundária, Linhagem é obtida automaticamente e uma das duas escolhas de Legado é usada para obter 1 traço positivo e 1 prejudicial da subraça escolhida.</span></div>';
      if(rule)extra+='<div class="heritage-group rule"><h4>Regra da Herança</h4><div class="race-trait-grid">'+traitCard(rule)+'</div></div>';
      if(lineage.length)extra+='<div class="heritage-group lineage"><h4>Traço da linhagem</h4><div class="race-trait-grid">'+lineage.map(t=>traitCard(t)).join('')+'</div></div>';
      if(positive.length)extra+='<div class="heritage-group positive"><h4>Traços de Herança positivos — escolha 2</h4><div class="race-trait-grid">'+positive.map(t=>traitCard(t)).join('')+'</div></div>';
      if(detrimental.length)extra+='<div class="heritage-group detrimental"><h4>Traços de Herança prejudiciais — escolha 2</h4><div class="race-trait-grid">'+detrimental.map(t=>traitCard(t)).join('')+'</div></div>';
      return extra;
    }
    return extra+'<div class="race-trait-grid">'+sub.traits.map(t=>traitCard(t)).join('')+'</div>';
  }
  function renderRace(id,forcedSubraceId=null){
    const race=findRace(id);if(!race)return '<div class="empty-state">Raça não encontrada.</div>';
    const baseState=raceState(id),rs={...baseState,subraceId:race.subraces.some(s=>s.id===forcedSubraceId)?forcedSubraceId:baseState.subraceId},sub=race.subraces.find(s=>s.id===rs.subraceId)||race.subraces[0],pool=legacyPool(race,rs),selected=pool.filter(x=>rs.legacy.includes(x.key));
    const secondary=rs.secondaryRaceId?findRace(rs.secondaryRaceId):null;
    const full=isFullRace(race);
    const revisionBadge=full?'<span class="race-revision-badge full">✓ Texto integral revisado</span>':'<span class="race-revision-badge pending">Resumo mecânico — revisão integral pendente</span>';
    const extraMeta=(race.meta.alignment?stat('Tendência racial',race.meta.alignment):'')+(race.meta.languages?stat('Idiomas',race.meta.languages):'')+(race.meta.speed?stat('Deslocamento',race.meta.speed):'');
    const subDescription=sub&&sub.description?'<div class="subrace-description"><strong>Descrição</strong><p>'+esc(sub.description)+'</p></div>':'';
    const subEditorial=sub&&sub.editorialNote?'<div class="subrace-editorial-note"><strong>Nota editorial</strong><p>'+esc(sub.editorialNote)+'</p></div>':'';
    const editorial=full?'Esta raça já passou pela revisão textual integral. As habilidades exibem, em português, o texto mecânico completo correspondente à fonte; os resumos curtos permanecem apenas como apoio de navegação.':'Esta raça ainda usa os resumos mecânicos da versão 5.30 enquanto aguarda revisão integral. Consulte a página indicada da fonte quando uma característica possuir condições, exceções ou escolhas internas extensas.';
    const artApi=window.GRIMORIO_RACE_DETAIL_ART,detailArt=artApi?.get?.(race.id),detailStyle=artApi?.style?.(race.id)||'',detailMedia=artApi?.media?.(race.id)||'';
    const initials=esc(race.name.slice(0,2).toUpperCase());
    const artPanel=detailArt?.image?'<button type="button" class="race-detail-art-panel has-race-art" style="'+attr(detailStyle)+'" data-race-name="'+attr(race.name)+'" aria-label="Ampliar ilustração de '+attr(race.name)+'" onclick="GRIMORIO_RACE_ART_RUNTIME.openDetail(this,\''+attr(race.id)+'\')"><div class="race-art-placeholder" aria-hidden="true"><span>'+initials+'</span></div>'+detailMedia+'<span class="race-detail-art-zoom" aria-hidden="true">Ampliar ↗</span></button>':'<div class="race-detail-art-panel" aria-hidden="true"><div class="race-art-placeholder"><span>'+initials+'</span></div></div>';
    return '<div class="race-detail '+(full?'full-text':'')+'"><div class="race-detail-actions"><a class="action-btn" href="'+attr(window.routeHref?window.routeHref('races'): '#/races')+'" data-grimorio-route>← Todas as raças</a><div>'+((typeof window.shareLinkButton==='function')?window.shareLinkButton('race',race.id,forcedSubraceId?{subraceId:forcedSubraceId}:{},forcedSubraceId?'Copiar link da subraça':'Copiar link da raça'):'')+'<a class="action-btn" href="'+attr(window.routeHref?window.routeHref('ability-planner'):'#/ability-planner')+'" data-grimorio-route>Abrir Planejador de Atributos</a><button class="action-btn" onclick="GRIMORIO_RACE_BROWSER.clearChoices(\''+attr(race.id)+'\')">Limpar escolhas</button></div></div>'
      +'<header class="race-detail-hero"><div class="race-detail-copy"><div class="race-detail-identity"><div class="race-detail-rune">'+initials+'</div><div><div class="eyebrow"><span class="dot"></span>'+esc(race.source)+' · p. '+race.sourcePage+'</div><h1 class="page-title">'+esc(race.name)+'</h1><p class="lede">'+esc(race.summary)+'</p>'+revisionBadge+'</div></div><div class="race-choice-counter"><span>Traços de Legado</span><strong>'+selected.length+' / 2</strong><small>'+(selected.length===2?'Escolha completa':'Selecione '+(2-selected.length))+'</small></div></div>'+artPanel+'</header>'
      +'<div class="race-meta-grid">'+stat('Tipos de criatura',race.meta.creatureTypes)+stat('Expectativa de vida',race.meta.lifeExpectancy)+stat('Alinhamento nacional',race.meta.nationalAlignment)+stat('Origem planar',race.meta.planarOrigin)+stat('Planetouched?',race.meta.planetouched)+stat('Tamanho',race.meta.size)+stat('Regiões',race.meta.regions)+extraMeta+'</div>'
      +loreBlock(race)
      +'<section class="race-detail-section"><div class="race-section-title"><div><span>Base racial</span><h2>Traços fixos</h2></div><span class="race-source-chip">Atributos: '+esc(race.abilityScore)+'</span></div><div class="race-trait-grid">'+race.coreTraits.map(t=>traitCard(t)).join('')+'</div></section>'
      +'<section class="race-detail-section"><div class="race-section-title"><div><span>'+(race.subraces.length?'Escolha obrigatória':'Regra da raça')+'</span><h2>Subraça</h2></div><span class="race-source-chip">'+race.subraces.length+' opções</span></div>'+(race.subraces.length?'<div class="subrace-grid">'+race.subraces.map(s=>subraceCard(race,s,sub&&s.id===sub.id)).join('')+'</div>':'<div class="subrace-description"><strong>Sem subraças</strong><p>'+(race.editorialNote?esc(race.editorialNote):'Esta raça não apresenta opções de subraça na fonte.')+'</p></div>')+(sub?'<div class="subrace-selected-detail"><div class="race-section-title compact"><div><span>Selecionada</span><h3>'+esc(sub.name)+'</h3><small class="subrace-source-line">'+esc(sub.source||race.source)+' · p. '+esc(sub.page)+'</small><a class="equipment-deep-link" href="'+attr(window.routeHref?window.routeHref('race',race.id,{subraceId:sub.id}):('#/race/'+race.id+'/subrace/'+sub.id))+'" data-grimorio-route>Abrir link da subraça ↗</a></div>'+(sub.ability?'<span class="race-source-chip">'+esc(sub.ability)+'</span>':'')+'</div>'+subDescription+subEditorial+selectedSubraceTraits(race,sub)+'</div>':'')+'</section>'
      +'<section class="race-detail-section legacy-section"><div class="race-section-title"><div><span>Personalização racial</span><h2>Traços de Legado</h2></div><span class="legacy-count '+(selected.length===2?'complete':'')+'">'+selected.length+' / 2 escolhidos</span></div><p class="race-section-intro">Escolha exatamente dois. Uma escolha selecionada recebe destaque dourado; ao alcançar o limite, as demais ficam temporariamente indisponíveis.</p>'
      +'<div class="mixed-blood-box"><label><input type="checkbox" '+(rs.mixed?'checked':'')+' onchange="GRIMORIO_RACE_BROWSER.toggleMixed(\''+attr(race.id)+'\')"><span><strong>Personagem de sangue misto</strong><small>Use '+esc(race.name)+' como raça dominante e combine Traços de Legado com uma raça secundária.</small></span></label>'+(rs.mixed?'<select onchange="GRIMORIO_RACE_BROWSER.setSecondary(\''+attr(race.id)+'\',this.value)"><option value="">Escolha a raça secundária…</option>'+races().filter(x=>x.id!==race.id).map(x=>'<option value="'+attr(x.id)+'" '+(secondary&&secondary.id===x.id?'selected':'')+'>'+esc(x.name)+'</option>').join('')+'</select>':'')+'</div>'
      +(rs.mixed&&secondary?'<div class="mixed-explain"><strong>Como a combinação está sendo calculada:</strong> traços fixos e subraça vêm de '+esc(race.name)+'; as duas escolhas abaixo podem vir das listas normais de '+esc(race.name)+' e '+esc(secondary.name)+', incluindo as opções especiais de Sangue Misto das duas raças quando seus requisitos específicos permitirem.</div>':'')
      +'<div class="race-trait-grid legacy-grid">'+pool.map(x=>traitCard(x.trait,{selectable:true,selected:rs.legacy.includes(x.key),disabled:rs.legacy.length>=2&&!rs.legacy.includes(x.key),origin:x.origin,mixed:x.type==='mixed',onclick:'GRIMORIO_RACE_BROWSER.toggleLegacy(\''+attr(race.id)+'\',\''+attr(x.key)+'\')'})).join('')+'</div></section>'
      +'<section class="race-build-summary"><div><span>Planejamento atual</span><h2>'+esc(race.name)+(sub?' — '+esc(sub.name):'')+'</h2><p>'+(secondary?'Sangue misto: dominante '+esc(race.name)+' + secundária '+esc(secondary.name)+'.':'Raça única.')+'</p></div><div class="race-build-chosen">'+(selected.length?selected.map(x=>'<span>'+esc(x.trait.name)+'</span>').join(''):'<span class="empty">Nenhum Traço de Legado selecionado</span>')+'</div></section>'
      +'<div class="race-editorial-note '+(full?'full':'pending')+'"><strong>Qualidade do texto:</strong> '+esc(editorial)+'</div></div>';
  }
  function renderCatalog(){return '<div id="raceCatalogRoot" class="race-browser">'+catalogInner()+'</div>';}
  window.GRIMORIO_RACE_BROWSER={renderCatalog,renderRace,setSearch,setFilter,openRace,rememberSubrace,selectSubrace,toggleMixed,setSecondary,toggleLegacy,clearChoices,getRace:findRace,getRaces:races};
})();
