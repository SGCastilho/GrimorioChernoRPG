'use strict';

(function initBackgroundBrowser(global) {
  const registry = global.GRIMORIO_REGISTRY;
  if (!registry?.getBackgroundCatalogs) throw new Error('GRIMORIO_REGISTRY com catálogos de antecedentes precisa ser carregado antes de background-browser.js.');

  const state = { q:'', type:'all', skill:'all', source:'all' };
  const esc = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const attr = value => esc(value).replace(/`/g,'&#96;');
  const normalize = value => registry.normalize ? registry.normalize(value) : String(value || '').toLocaleLowerCase('pt-BR');
  const href = (view,id) => global.routeHref ? global.routeHref(view,id) : view === 'background' ? '#/background/'+encodeURIComponent(id) : '#/backgrounds';
  const catalogs = () => registry.getBackgroundCatalogs();

  function rawEntries() {
    return catalogs().flatMap(catalog => catalog.backgrounds.map(background => ({
      ...background,
      _catalogId:catalog.id,
      _sourceId:background.sourceId || catalog.sourceId,
      _catalogLabel:catalog.label,
      _chapter:catalog.chapter,
      _catalogPages:catalog.pages
    })));
  }

  function resolveEntry(raw, byId, stack=[]) {
    if (!raw?.variantOf) return {...raw, type:'base', inheritedFields:[]};
    if (stack.includes(raw.id)) throw new Error('Herança circular de antecedente: '+[...stack,raw.id].join(' → '));
    const parentRaw = byId.get(raw.variantOf);
    if (!parentRaw) return {...raw, type:'variant', resolutionError:'Antecedente-base não encontrado: '+raw.variantOf};
    const parent = resolveEntry(parentRaw, byId, [...stack,raw.id]);
    const overrides = raw.overrides || {};
    const inheritedFields = ['skills','tools','languages','equipment','feature','auxiliaryTables','suggested'].filter(key => !Object.prototype.hasOwnProperty.call(overrides,key));
    return {
      ...parent,
      ...raw,
      ...overrides,
      id:raw.id,
      name:raw.name,
      originalName:raw.originalName,
      sourcePages:raw.sourcePages,
      description:raw.description || parent.description,
      variantOf:raw.variantOf,
      type:'variant',
      inheritedFields,
      parentName:parent.name,
      parentOriginalName:parent.originalName,
      variantChanges:overrides.variantChanges || raw.variantChanges || []
    };
  }

  function allBackgrounds() {
    const entries = rawEntries();
    const byId = new Map(entries.map(entry => [entry.id,entry]));
    return entries.map(entry => resolveEntry(entry,byId)).sort((a,b) => a.name.localeCompare(b.name,'pt-BR'));
  }

  function getBackground(id) { return allBackgrounds().find(background => background.id === id) || null; }
  function sourceFor(background) { return registry.getSource(background?._sourceId); }
  function sourceLabel(background) { const source=sourceFor(background); return source?.shortTitle || source?.title || background?._catalogLabel || background?._sourceId || 'Fonte não informada'; }
  function tableValues(table) { return (table?.rows || []).flatMap(row => Object.values(row || {})); }
  function searchText(background) {
    const suggested = background.suggested || {};
    const values = [background.name,background.originalName,background.description,sourceLabel(background),background._chapter,background.sourcePages,
      ...(background.skills || []),...(background.tools || []),background.languages?.text,background.equipment,background.feature?.name,background.feature?.text,
      ...(background.variantChanges || []),...(background.auxiliaryTables || []).flatMap(t => [t.title,t.note,...tableValues(t)]),
      suggested.intro,...['traits','ideals','bonds','flaws'].flatMap(key => [suggested[key]?.title,suggested[key]?.note,...tableValues(suggested[key])])];
    return normalize(values.filter(Boolean).join(' '));
  }

  function filteredBackgrounds() {
    const q=normalize(state.q);
    return allBackgrounds().filter(background =>
      (state.type==='all' || background.type===state.type) &&
      (state.skill==='all' || (background.skills || []).includes(state.skill)) &&
      (state.source==='all' || background._sourceId===state.source) &&
      (!q || searchText(background).includes(q))
    );
  }

  function sourceOptions() {
    return catalogs().map(catalog => '<option value="'+attr(catalog.sourceId)+'" '+(state.source===catalog.sourceId?'selected':'')+'>'+esc(registry.getSource(catalog.sourceId)?.shortTitle || catalog.label || catalog.id)+'</option>').join('');
  }
  function skillOptions() {
    const skills=[...new Set(allBackgrounds().flatMap(background => background.skills || []))].sort((a,b)=>a.localeCompare(b,'pt-BR'));
    return skills.map(skill => '<option value="'+attr(skill)+'" '+(state.skill===skill?'selected':'')+'>'+esc(skill)+'</option>').join('');
  }

  function backgroundCard(background) {
    const variant=background.type==='variant';
    return '<a class="background-card" href="'+attr(href('background',background.id))+'" data-grimorio-route>'+
      '<div class="background-card-head"><span class="background-card-icon" aria-hidden="true">'+(variant?'◇':'◆')+'</span><div><h2>'+esc(background.name)+'</h2><span class="background-original">'+esc(background.originalName)+'</span></div>'+(variant?'<span class="background-variant-badge">Variação</span>':'')+'</div>'+
      '<p>'+esc(background.description)+'</p><div class="background-card-meta"><span>'+esc((background.skills || []).join(' · '))+'</span><span>'+esc(sourceLabel(background))+' · p. '+esc(background.sourcePages)+'</span></div>'+
      '<span class="background-card-link">Consultar ficha →</span></a>';
  }

  function rulesHtml() {
    const rules=catalogs().flatMap(catalog => catalog.rules ? [{...catalog.rules,_sourceId:catalog.sourceId}] : []);
    if (!rules.length) return '';
    return '<section class="background-rules" aria-labelledby="background-rules-title"><div class="section-heading"><div><h2 id="background-rules-title" class="page-title small-title">Regras de Antecedentes</h2><p class="section-help">Regras gerais do Livro do Jogador, páginas impressas 127–128. Inspiração é tratada em outra seção do capítulo e não faz parte deste catálogo.</p></div></div><div class="background-rule-grid">'+rules.flatMap(rule => (rule.sections || []).map(section => '<article><h3>'+esc(section.title)+'</h3><p>'+esc(section.text)+'</p><span>'+esc(registry.getSource(rule._sourceId)?.shortTitle || rule._sourceId)+' · p. '+esc(rule.pages)+'</span></article>')).join('')+'</div></section>';
  }

  function resultsHtml() {
    const all=allBackgrounds(), list=filteredBackgrounds();
    if (!list.length) return '<div class="background-results-line"><span><b>0</b> de '+all.length+' antecedentes</span></div><div class="background-empty"><b>Nenhum antecedente encontrado</b><span>Ajuste a busca ou os filtros.</span></div>';
    return '<div class="background-results-line"><span><b>'+list.length+'</b> de '+all.length+' antecedentes</span><span>Variações aparecem como resultados independentes.</span></div><div class="background-grid">'+list.map(backgroundCard).join('')+'</div>';
  }
  function updateResults(){const el=document.getElementById('backgroundResults');if(el)el.innerHTML=resultsHtml();}
  function setSearch(value){state.q=String(value || '').slice(0,160);updateResults();}
  function setType(value){state.type=['all','base','variant'].includes(value)?value:'all';updateResults();}
  function setSkill(value){state.skill=value || 'all';updateResults();}
  function setSource(value){state.source=value || 'all';updateResults();}
  function clearFilters(){state.q='';state.type='all';state.skill='all';state.source='all';const q=document.getElementById('backgroundSearch');if(q)q.value='';for(const [id,value] of [['backgroundTypeFilter','all'],['backgroundSkillFilter','all'],['backgroundSourceFilter','all']]){const el=document.getElementById(id);if(el)el.value=value;}updateResults();}

  function renderCatalog() {
    const all=allBackgrounds(), bases=all.filter(item=>item.type==='base').length, variants=all.length-bases, sources=new Set(all.map(item=>item._sourceId)).size;
    return '<div class="background-browser"><header class="background-hero"><div><div class="eyebrow"><span class="dot"></span>Histórias antes da aventura</div><h1 class="page-title">Antecedentes</h1><p class="lede">Escolha de onde seu personagem veio, as proficiências que adquiriu e a característica que conecta sua história ao mundo. O catálogo preserva as variações como opções independentes.</p></div><div class="background-hero-stats"><div><strong>'+all.length+'</strong><span>entradas</span></div><div><strong>'+bases+'</strong><span>bases</span></div><div><strong>'+variants+'</strong><span>variações</span></div><div><strong>'+sources+'</strong><span>'+(sources===1?'fonte':'fontes')+'</span></div></div></header>'+
      '<section class="background-panel" aria-label="Catálogo de antecedentes"><div class="background-toolbar"><label class="background-search"><span aria-hidden="true">⌕</span><input id="backgroundSearch" value="'+attr(state.q)+'" oninput="GRIMORIO_BACKGROUND_BROWSER.setSearch(this.value)" placeholder="Nome, perícia, ferramenta, característica ou equipamento..."></label>'+
      '<label><span>Tipo</span><select id="backgroundTypeFilter" onchange="GRIMORIO_BACKGROUND_BROWSER.setType(this.value)"><option value="all">Bases e variações</option><option value="base" '+(state.type==='base'?'selected':'')+'>Antecedentes-base</option><option value="variant" '+(state.type==='variant'?'selected':'')+'>Variações</option></select></label>'+
      '<label><span>Perícia</span><select id="backgroundSkillFilter" onchange="GRIMORIO_BACKGROUND_BROWSER.setSkill(this.value)"><option value="all">Todas as perícias</option>'+skillOptions()+'</select></label>'+
      '<label><span>Fonte</span><select id="backgroundSourceFilter" onchange="GRIMORIO_BACKGROUND_BROWSER.setSource(this.value)"><option value="all">Todas as fontes</option>'+sourceOptions()+'</select></label>'+
      '<button class="action-btn" type="button" onclick="GRIMORIO_BACKGROUND_BROWSER.clearFilters()">Limpar filtros</button></div><div id="backgroundResults">'+resultsHtml()+'</div></section>'+rulesHtml()+'</div>';
  }

  function renderTable(data, inherited=false) {
    if (!data?.rows?.length) return '';
    return '<section class="background-table-section"><div class="background-section-title"><h2>'+esc(data.title)+'</h2>'+(inherited?'<span class="background-inherited">Herdada do antecedente-base</span>':'')+'</div>'+(data.note?'<p class="section-help">'+esc(data.note)+'</p>':'')+'<div class="background-table-scroll" tabindex="0" role="region" aria-label="Tabela '+attr(data.title)+'"><table><thead><tr><th scope="col">'+esc(data.die || data.columns?.[0] || 'd')+'</th><th scope="col">'+esc(data.columns?.[1] || 'Resultado')+'</th></tr></thead><tbody>'+data.rows.map(row => '<tr><th scope="row">'+esc(row.roll)+'</th><td>'+esc(row.result)+'</td></tr>').join('')+'</tbody></table></div></section>';
  }
  function fact(label,value){return '<div><dt>'+esc(label)+'</dt><dd>'+esc(value || '—')+'</dd></div>';}

  function renderBackground(id) {
    const background=getBackground(id);
    if (!background) return '<div class="background-empty"><b>Antecedente não encontrado</b><span>Talvez o link esteja incorreto.</span></div>';
    const variant=background.type==='variant', parent=variant?getBackground(background.variantOf):null;
    const copy=typeof global.shareLinkButton==='function'?global.shareLinkButton('background',background.id):'';
    const suggested=background.suggested || {};
    return '<article class="background-detail"><nav class="breadcrumb" aria-label="Navegação estrutural"><a href="'+attr(href('backgrounds'))+'" data-grimorio-route>Antecedentes</a><span>/</span><span aria-current="page">'+esc(background.name)+'</span></nav>'+
      '<header class="background-detail-header"><div class="background-detail-icon" aria-hidden="true">'+(variant?'◇':'◆')+'</div><div><div class="eyebrow"><span class="dot"></span>'+(variant?'Variação de antecedente':'Antecedente')+'</div><h1 class="page-title">'+esc(background.name)+'</h1><p class="background-original">'+esc(background.originalName)+'</p></div><div class="detail-actions">'+copy+'</div></header>'+
      '<div class="source-line"><span>'+esc(sourceLabel(background))+'</span><span>'+esc(background._chapter || 'Capítulo 4')+'</span><span>p. '+esc(background.sourcePages)+'</span></div>'+
      (variant?'<div class="background-variant-callout"><span class="background-variant-badge">Variação</span><div><strong>Antecedente-base</strong><a href="'+attr(href('background',parent?.id || background.variantOf))+'" data-grimorio-route>'+esc(parent?.name || background.variantOf)+' →</a></div></div>':'')+
      '<div class="prose background-intro"><p>'+esc(background.description)+'</p></div>'+
      '<dl class="background-facts">'+fact('Perícias',(background.skills || []).join(', '))+fact('Ferramentas',(background.tools || []).join(', ') || 'Nenhuma')+fact('Idiomas',background.languages?.text || 'Nenhum idioma adicional')+fact('Tipo',variant?'Variação':'Antecedente-base')+'</dl>'+
      (background.variantChanges?.length?'<section class="background-changes"><h2>Alterações da variação</h2><ul>'+background.variantChanges.map(change=>'<li>'+esc(change)+'</li>').join('')+'</ul></section>':'')+
      '<section class="background-feature"><div class="background-section-title"><h2>Característica: '+esc(background.feature?.name || '—')+'</h2>'+(variant&&background.inheritedFields.includes('feature')?'<span class="background-inherited">Herdada</span>':'')+'</div><p>'+esc(background.feature?.text || '—')+'</p></section>'+
      '<section class="background-equipment"><h2>Equipamento</h2><p>'+esc(background.equipment)+'</p></section>'+
      (background.auxiliaryTables || []).map(data=>renderTable(data,variant&&background.inheritedFields.includes('auxiliaryTables'))).join('')+
      '<section class="background-suggested"><div class="background-section-title"><div><h2>Características Sugeridas</h2><p>'+esc(suggested.intro || '')+'</p></div>'+(variant&&background.inheritedFields.includes('suggested')?'<span class="background-inherited">Herdadas de '+esc(parent?.name || 'antecedente-base')+'</span>':'')+'</div>'+['traits','ideals','bonds','flaws'].map(key=>renderTable(suggested[key],variant&&background.inheritedFields.includes('suggested'))).join('')+'</section></article>';
  }

  global.GRIMORIO_BACKGROUND_BROWSER=Object.freeze({renderCatalog,renderBackground,getBackgrounds:allBackgrounds,getBackground,filteredBackgrounds,setSearch,setType,setSkill,setSource,clearFilters,searchText});
})(window);
