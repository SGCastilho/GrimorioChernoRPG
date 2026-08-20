'use strict';

(function initWeaponMasteryBrowser(global){
  const DATA=global.GRIMORIO_ADVANCED_WEAPON_MASTERIES;
  if(!DATA)throw new Error('GRIMORIO_ADVANCED_WEAPON_MASTERIES precisa ser carregado antes de weapon-mastery-browser.js.');
  const STORAGE='grimorio-advanced-weapon-mastery-builder-v1';
  const TREE_IDS=new Set(DATA.trees.map(tree=>tree.id));

  function esc(value){return String(value??'').replace(/[&<>"']/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));}
  function attr(value){return esc(value).replace(/`/g,'&#96;');}
  function clamp(value,min,max,fallback=min){const n=Number(value);return Number.isFinite(n)?Math.max(min,Math.min(max,Math.floor(n))):fallback;}
  function normalize(value){return String(value||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLocaleLowerCase('pt-BR');}
  function safeArray(value){return Array.isArray(value)?value:[];}

  function defaultState(){return {fullMartialLevels:0,halfMartialLevels:0,proficientTrees:[],selectedTechniques:[],activeTree:'ammunition',query:''};}
  function loadState(){
    try{
      const raw=JSON.parse(localStorage.getItem(STORAGE)||'null');
      if(!raw||typeof raw!=='object')return defaultState();
      return {
        fullMartialLevels:clamp(raw.fullMartialLevels,0,20,0),
        halfMartialLevels:clamp(raw.halfMartialLevels,0,20,0),
        proficientTrees:safeArray(raw.proficientTrees).filter(id=>TREE_IDS.has(id)),
        selectedTechniques:safeArray(raw.selectedTechniques).map(String),
        activeTree:TREE_IDS.has(raw.activeTree)?raw.activeTree:'ammunition',
        query:String(raw.query||'').slice(0,100)
      };
    }catch(_){return defaultState();}
  }
  let state=loadState();
  function save(){try{localStorage.setItem(STORAGE,JSON.stringify(state));}catch(_){/* armazenamento indisponível */}}

  const techniqueIndex=new Map();
  DATA.trees.forEach(tree=>tree.techniques.forEach(tech=>techniqueIndex.set(tech.id,{...tech,treeId:tree.id,treeName:tree.name,treeOriginalName:tree.originalName})));
  const strikeIndex=new Map(DATA.superiorStrikes.map(strike=>[strike.id,strike]));

  function martialLevel(){return Math.min(20,clamp(state.fullMartialLevels,0,20,0)+Math.floor(clamp(state.halfMartialLevels,0,20,0)/2));}
  function progressionFor(level=martialLevel()){
    let current={martialLevel:0,techniquesKnown:0,maxTier:0};
    for(const row of DATA.progression)if(level>=row.martialLevel)current=row;
    return current;
  }
  function selectedSet(){return new Set(state.selectedTechniques.filter(id=>techniqueIndex.has(id)));}
  function selectedTechniques(){return [...selectedSet()].map(id=>techniqueIndex.get(id));}
  function hasTier(treeId,tier,set=selectedSet()){return [...set].some(id=>{const t=techniqueIndex.get(id);return t?.treeId===treeId&&t.tier===tier;});}
  function isProficient(treeId){return state.proficientTrees.includes(treeId);}

  function techniqueIssues(tech,set=selectedSet()){
    const issues=[]; const level=martialLevel(); const prog=progressionFor(level);
    if(level<tech.martialLevel)issues.push('Requer Nível Marcial '+tech.martialLevel+'.');
    if(tech.tier>prog.maxTier)issues.push('Seu Nível Marcial permite no máximo tier '+prog.maxTier+'.');
    if(tech.requiresProficiency&&!isProficient(tech.treeId))issues.push('Declare proficiência com ao menos uma arma desta propriedade.');
    if(tech.requiresTier&&!hasTier(tech.treeId,tech.requiresTier,set))issues.push('Requer ao menos uma técnica de tier '+tech.requiresTier+' nesta mesma árvore.');
    return issues;
  }
  function buildIssues(){
    const set=selectedSet(), prog=progressionFor(); const issues=[];
    if(set.size>prog.techniquesKnown)issues.push('Há '+set.size+' técnicas selecionadas, mas o limite atual é '+prog.techniquesKnown+'.');
    for(const id of set){const tech=techniqueIndex.get(id);for(const issue of techniqueIssues(tech,set))issues.push(tech.name+': '+issue);}
    return [...new Set(issues)];
  }
  function canSelect(tech){
    const set=selectedSet(); if(set.has(tech.id))return true;
    const prog=progressionFor();
    if(set.size>=prog.techniquesKnown)return false;
    return techniqueIssues(tech,set).length===0;
  }
  function canDeselect(tech){
    const set=selectedSet(); if(!set.has(tech.id))return true;
    const next=new Set(set); next.delete(tech.id);
    return [...next].every(id=>techniqueIssues(techniqueIndex.get(id),next).length===0);
  }
  function proficiencyLocked(treeId){return selectedTechniques().some(tech=>tech.treeId===treeId&&tech.requiresProficiency);}

  function rerender(){
    save();
    const main=document.getElementById('mainContent');
    if(main)main.innerHTML=render();
  }
  function setLevels(kind,value){
    if(kind==='full')state.fullMartialLevels=clamp(value,0,20,0);
    if(kind==='half')state.halfMartialLevels=clamp(value,0,20,0);
    rerender();
  }
  function setQuery(value){state.query=String(value||'').slice(0,100);rerender();}
  function selectTree(id){if(TREE_IDS.has(id)){state.activeTree=id;state.query='';rerender();}}
  function toggleProficiency(id){
    if(!TREE_IDS.has(id))return;
    const set=new Set(state.proficientTrees);
    if(set.has(id)){
      if(proficiencyLocked(id)){global.alert?.('Não é possível remover esta proficiência enquanto uma técnica selecionada depender dela.');return;}
      set.delete(id);
    }else set.add(id);
    state.proficientTrees=[...set];rerender();
  }
  function toggleTechnique(id){
    const tech=techniqueIndex.get(id); if(!tech)return;
    const set=selectedSet();
    if(set.has(id)){
      if(!canDeselect(tech)){global.alert?.('Esta técnica ainda é pré-requisito para uma técnica de tier superior selecionada. Remova primeiro a técnica dependente.');return;}
      set.delete(id);
    }else{
      const issues=techniqueIssues(tech,set);
      if(issues.length){global.alert?.(issues.join('\n'));return;}
      if(set.size>=progressionFor().techniquesKnown){global.alert?.('Você já atingiu o número máximo de Técnicas Conhecidas para seu Nível Marcial.');return;}
      set.add(id);
    }
    state.selectedTechniques=[...set];rerender();
  }
  function reset(){
    if(global.confirm&&!global.confirm('Limpar o planejador de Maestrias de Armas Avançadas?'))return;
    state=defaultState();rerender();
  }

  function progressTable(){
    const level=martialLevel();
    return '<div class="awm-table-wrap"><table class="awm-table"><thead><tr><th>Nível Marcial</th><th>Técnicas Conhecidas</th><th>Tier Máximo</th></tr></thead><tbody>'+
      DATA.progression.map(row=>'<tr class="'+(progressionFor(level).martialLevel===row.martialLevel?'current':'')+'"><td>'+row.martialLevel+'º</td><td>'+row.techniquesKnown+'</td><td>'+row.maxTier+'</td></tr>').join('')+
      '</tbody></table></div>';
  }

  function statusPanel(){
    const prog=progressionFor(), level=martialLevel(), selected=selectedSet().size, issues=buildIssues();
    return '<div class="awm-status '+(issues.length?'invalid':'valid')+'"><div><span>Nível Marcial</span><strong>'+level+'</strong></div><div><span>Técnicas</span><strong>'+selected+' / '+prog.techniquesKnown+'</strong></div><div><span>Tier Máximo</span><strong>'+prog.maxTier+'</strong></div><div><span>Status</span><strong>'+(issues.length?'Revisar':'Válido')+'</strong></div></div>'+
      (issues.length?'<div class="awm-issues"><b>O build possui pendências:</b><ul>'+issues.map(x=>'<li>'+esc(x)+'</li>').join('')+'</ul></div>':'');
  }

  function treeNav(){
    return '<div class="awm-tree-tabs">'+DATA.trees.map(tree=>{
      const chosen=selectedTechniques().filter(t=>t.treeId===tree.id).length;
      return '<button type="button" class="awm-tree-tab '+(state.activeTree===tree.id?'active':'')+'" onclick="GRIMORIO_WEAPON_MASTERY_BROWSER.selectTree(\''+attr(tree.id)+'\')"><span>'+esc(tree.name)+'</span><small>'+esc(tree.originalName)+(chosen?' · '+chosen:'')+'</small></button>';
    }).join('')+'</div>';
  }

  function techniqueCard(tech){
    const set=selectedSet(), chosen=set.has(tech.id), issues=techniqueIssues(tech,set), allowed=chosen||canSelect(tech), removable=chosen&&canDeselect(tech);
    const blocked=!chosen&&!allowed;
    const prereq=['Nível Marcial '+tech.martialLevel,tech.requiresProficiency?'proficiência na propriedade':null,tech.requiresTier?'tier '+tech.requiresTier+' nesta árvore':null].filter(Boolean).join(' · ');
    return '<article class="awm-tech '+(chosen?'selected ':'')+(blocked?'locked ':'')+'" data-tier="'+tech.tier+'">'
      +'<div class="awm-tech-head"><span class="awm-tier">Tier '+tech.tier+'</span><div><h4>'+esc(tech.name)+'</h4><small>'+esc(tech.originalName)+' · p. '+tech.sourcePage+'</small></div></div>'
      +'<p class="awm-tech-summary">'+esc(tech.summary||'')+'</p>'
      +'<div class="awm-prereq">'+esc(prereq)+'</div>'
      +'<details><summary>Ver regra completa</summary><p>'+esc(tech.description)+'</p></details>'
      +(issues.length&&!chosen?'<div class="awm-lock-reason">'+issues.map(esc).join(' ')+'</div>':'')
      +'<button type="button" class="awm-select-btn '+(chosen?'remove':'')+'" '+((chosen&&!removable)||blocked?'disabled':'')+' onclick="GRIMORIO_WEAPON_MASTERY_BROWSER.toggleTechnique(\''+attr(tech.id)+'\')">'+(chosen?'Remover':'Selecionar')+'</button>'
      +'</article>';
  }

  function treePanel(){
    const active=DATA.trees.find(tree=>tree.id===state.activeTree)||DATA.trees[0];
    const q=normalize(state.query); const list=q?DATA.trees.flatMap(tree=>tree.techniques.map(t=>({...t,treeName:tree.name,treeId:tree.id}))).filter(t=>normalize([t.name,t.originalName,t.summary,t.description,t.treeName].join(' ')).includes(q)):active.techniques.map(t=>({...t,treeName:active.name,treeId:active.id}));
    const treesShown=q?new Set(list.map(t=>t.treeId)).size:1;
    return '<section class="awm-builder-panel"><div class="awm-tree-header"><div><div class="eyebrow"><span class="dot"></span>'+(q?'Busca em todas as árvores':'Árvore ativa')+'</div><h2>'+(q?'Resultados de busca':esc(active.name))+'</h2>'+(q?'<p>'+list.length+' técnica(s) em '+treesShown+' árvore(s).</p>':'<p>'+esc(active.propertyDescription)+'</p>')+'</div>'
      +(!q?'<label class="awm-prof-toggle"><input type="checkbox" '+(isProficient(active.id)?'checked':'')+' '+(proficiencyLocked(active.id)?'disabled':'')+' onchange="GRIMORIO_WEAPON_MASTERY_BROWSER.toggleProficiency(\''+attr(active.id)+'\')"><span>Sou proficiente com ao menos uma arma desta propriedade</span></label>':'')+'</div>'
      +(!q?'<div class="awm-weapons"><b>Armas de referência</b><div>'+active.weapons.map(w=>'<span>'+esc(w)+'</span>').join('')+'</div></div>':'')
      +(q?'<div class="awm-tech-grid">'+(list.length?list.map(techniqueCard).join(''):'<div class="awm-empty">Nenhuma técnica encontrada.</div>')+'</div>':'<div class="awm-tier-columns">'+[1,2,3,4].map(tier=>'<div class="awm-tier-column"><div class="awm-tier-column-title"><span>Tier '+tier+'</span><small>'+(tier===1?'Fundação':tier===2?'Golpe Superior':tier===3?'Especialização':'Maestria')+'</small></div>'+(active.techniques.filter(tech=>tech.tier===tier).map(tech=>techniqueCard({...tech,treeId:active.id,treeName:active.name})).join('')||'<div class="awm-empty compact">Sem técnica neste tier.</div>')+'</div>').join('')+'</div>')+'</section>';
  }

  function selectedPanel(){
    const chosen=selectedTechniques().sort((a,b)=>a.tier-b.tier||a.treeName.localeCompare(b.treeName,'pt-BR')||a.name.localeCompare(b.name,'pt-BR'));
    return '<section class="awm-selected"><div class="section-heading"><div><div class="small-title">Build atual</div><p class="section-help">As escolhas ficam salvas neste navegador.</p></div><button type="button" class="action-btn" onclick="GRIMORIO_WEAPON_MASTERY_BROWSER.reset()">Limpar build</button></div>'+
      (chosen.length?'<div class="awm-selected-list">'+chosen.map(t=>'<button type="button" onclick="GRIMORIO_WEAPON_MASTERY_BROWSER.selectTree(\''+attr(t.treeId)+'\')"><b>'+esc(t.name)+'</b><span>'+esc(t.treeName)+' · Tier '+t.tier+'</span></button>').join('')+'</div>':'<div class="awm-empty">Nenhuma Técnica Avançada selecionada.</div>')+'</section>';
  }

  function superiorStrikes(){
    const reverse={}; Object.entries(DATA.weaponSuperiorStrikeMap).forEach(([weapon,strike])=>(reverse[strike]||(reverse[strike]=[])).push(weapon));
    return '<section class="awm-strikes"><div class="section-heading"><div><div class="eyebrow"><span class="dot"></span>Golpes Superiores</div><h2>Golpes vinculados às armas</h2><p class="section-help">Ao aprender Golpe Superior em uma árvore, você pode executar o Golpe Superior específico da arma usada, desde que ela possua a propriedade correspondente.</p></div></div><div class="awm-strike-grid">'+DATA.superiorStrikes.map(strike=>'<details class="awm-strike"><summary><b>'+esc(strike.name)+'</b><span>'+esc(strike.originalName)+' · p. '+strike.sourcePage+'</span></summary><div><p>'+esc(strike.description)+'</p><small><b>Armas mapeadas:</b> '+esc((reverse[strike.id]||[]).join(', ')||'—')+'</small></div></details>').join('')+'</div></section>';
  }

  function render(){
    const level=martialLevel(), prog=progressionFor(level);
    return '<div class="awm-browser"><header class="awm-hero"><div><div class="eyebrow"><span class="dot"></span>Ryoko\'s Guide to the Yokai Realms · Capítulo 7</div><h1 class="page-title">Maestrias de Armas Avançadas</h1><p class="lede">Planeje a progressão marcial do personagem, explore as 12 árvores de propriedades de armas e selecione Técnicas Avançadas respeitando Nível Marcial, tiers e pré-requisitos.</p></div><div class="awm-hero-stats"><div><strong>'+DATA.counts.trees+'</strong><span>árvores</span></div><div><strong>'+DATA.counts.techniques+'</strong><span>técnicas</span></div><div><strong>'+DATA.counts.superiorStrikes+'</strong><span>golpes superiores</span></div><div><strong>'+prog.techniquesKnown+'</strong><span>conhecidas agora</span></div></div></header>'
      +'<section class="awm-rules"><div class="awm-rule-copy"><div class="small-title">Como funciona</div><p>'+esc(DATA.rules.intro)+'</p><p><b>Nível Marcial.</b> '+esc(DATA.rules.martialLevelFormula)+' '+esc(DATA.rules.extraAttackException)+'</p><p><b>CD Marcial.</b> '+esc(DATA.rules.martialSaveDc)+' '+esc(DATA.rules.martialSaveDcNote)+'</p><p><b>Progressão das árvores.</b> '+esc(DATA.rules.selectionRule)+' '+esc(DATA.rules.replacementRule)+'</p><p><b>Golpes Superiores.</b> '+esc(DATA.rules.superiorStrikeRule)+'</p><p><b>Críticos.</b> '+esc(DATA.rules.criticalThreshold)+'</p><div class="awm-rule-notes"><b>Casos especiais da fonte</b><ul>'+DATA.rules.weaponNotes.map(note=>'<li>'+esc(note)+'</li>').join('')+'</ul></div></div><div class="awm-classification"><div><b>Marciais completos</b><span>'+esc(DATA.rules.fullMartial.join(', '))+'</span></div><div><b>Meio-marciais</b><span>'+esc(DATA.rules.halfMartial.join(', '))+'</span></div><div><b>Não marciais</b><span>'+esc(DATA.rules.nonMartial.join(', '))+'</span></div></div></section>'
      +'<section class="awm-planner"><div class="awm-planner-head"><div><div class="small-title">Calculadora de Nível Marcial</div><p class="section-help">Some seus níveis nas categorias abaixo. Para uma classe normalmente não marcial que se tornou meio-marcial por subclasse/invocação, inclua esses níveis no campo meio-marcial.</p></div><label>Buscar técnica<input type="search" value="'+attr(state.query)+'" placeholder="Nome, efeito ou árvore..." onchange="GRIMORIO_WEAPON_MASTERY_BROWSER.setQuery(this.value)"></label></div><div class="awm-level-controls"><label><span>Níveis marciais completos</span><input type="number" min="0" max="20" value="'+state.fullMartialLevels+'" onchange="GRIMORIO_WEAPON_MASTERY_BROWSER.setLevels(\'full\',this.value)"></label><div class="awm-plus">+</div><label><span>Níveis meio-marciais</span><input type="number" min="0" max="20" value="'+state.halfMartialLevels+'" onchange="GRIMORIO_WEAPON_MASTERY_BROWSER.setLevels(\'half\',this.value)"><small>÷ 2, arredondado para baixo</small></label><div class="awm-equals">=</div><div class="awm-level-result"><span>Nível Marcial</span><strong>'+level+'</strong></div></div>'+statusPanel()+'</section>'
      +'<section class="awm-progression"><div class="section-heading"><div><div class="small-title">Progressão de Maestria</div><p class="section-help">A tabela determina quantas técnicas você conhece e qual o maior tier disponível.</p></div></div>'+progressTable()+'</section>'
      +selectedPanel()+treeNav()+treePanel()+superiorStrikes()
      +'<div class="awm-source-note">Fonte: Ryoko\'s Guide to the Yokai Realms · Capítulo 7 · pp. 83–115. Distâncias foram convertidas para o padrão métrico do Grimório.</div></div>';
  }

  global.GRIMORIO_WEAPON_MASTERY_BROWSER={render,setLevels,setQuery,selectTree,toggleProficiency,toggleTechnique,reset,getState:()=>JSON.parse(JSON.stringify(state)),martialLevel,progressionFor,buildIssues};
})(window);
