'use strict';

(function initFeatBrowser(global) {
  const registry = global.GRIMORIO_REGISTRY;
  if (!registry?.getFeatCatalogs) throw new Error('GRIMORIO_REGISTRY com catálogos de talentos precisa ser carregado antes de feat-browser.js.');

  const state = { q: '', prerequisite: 'all', source: 'all' };

  function esc(value) {
    return String(value ?? '').replace(/[&<>"']/g, c => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;' }[c]));
  }
  function attr(value) { return esc(value).replace(/`/g, '&#96;'); }
  function normalize(value) { return registry.normalize ? registry.normalize(value) : String(value || '').toLocaleLowerCase('pt-BR'); }
  function catalogs() { return registry.getFeatCatalogs(); }

  function allFeats() {
    return catalogs().flatMap(catalog => catalog.feats.map(feat => ({
      ...feat,
      _catalogId: catalog.id,
      _sourceId: feat.sourceId || catalog.sourceId,
      _catalogLabel: catalog.label,
      _chapter: catalog.chapter,
      _pages: catalog.pages
    }))).sort((a,b) => a.name.localeCompare(b.name, 'pt-BR'));
  }

  function sourceFor(feat) { return registry.getSource(feat?._sourceId); }
  function sourceLabel(feat) {
    const source = sourceFor(feat);
    return source?.shortTitle || source?.catalogLabel || source?.title || feat?._catalogLabel || feat?._sourceId || 'Fonte não informada';
  }

  function prerequisiteTypes(feat) {
    return new Set((feat.prerequisites || []).map(item => item?.type).filter(Boolean));
  }
  function prerequisiteCategory(feat) {
    const types = prerequisiteTypes(feat);
    if (!types.size) return 'none';
    if (types.has('ability')) return 'ability';
    if (types.has('spellcasting')) return 'spellcasting';
    if (types.has('proficiency')) return 'proficiency';
    return 'other';
  }
  function prerequisiteLabel(feat) { return feat.prerequisite || 'Sem pré-requisito'; }

  function searchText(feat) {
    const choices = (feat.choices || []).flatMap(choice => [choice.label, ...(choice.options || []), ...(choice.sources || [])]);
    const prereqs = (feat.prerequisites || []).flatMap(item => [item.label, ...(item.abilities || []), item.category, item.value, item.minimum]);
    return normalize([
      feat.name, feat.originalName, ...(feat.aliases || []), feat.category,
      feat.description, feat.prerequisite, feat.originalPrerequisite, sourceLabel(feat), feat.sourcePage,
      feat.repeatable ? 'repetível diversas vezes' : '', ...choices, ...prereqs
    ].filter(Boolean).join(' '));
  }

  function filteredFeats() {
    const q = normalize(state.q);
    return allFeats().filter(feat => {
      if (state.source !== 'all' && feat._sourceId !== state.source) return false;
      if (state.prerequisite === 'none' && (feat.prerequisites || []).length) return false;
      if (state.prerequisite !== 'all' && state.prerequisite !== 'none' && prerequisiteCategory(feat) !== state.prerequisite) return false;
      return !q || searchText(feat).includes(q);
    });
  }

  function formatDescription(value) {
    const blocks = String(value || '').replace(/\r/g, '').split(/\n{2,}/).filter(Boolean);
    if (!blocks.length) return '<p>Sem descrição.</p>';
    return blocks.map(block => {
      const lines = block.split(/\n/).map(line => line.trim()).filter(Boolean);
      if (lines.length && lines.every(line => line.startsWith('•'))) {
        return '<ul>'+lines.map(line => '<li>'+esc(line.replace(/^•\s*/, ''))+'</li>').join('')+'</ul>';
      }
      return '<p>'+lines.map(esc).join('<br>')+'</p>';
    }).join('');
  }

  function prerequisiteChip(feat) {
    const has = (feat.prerequisites || []).length > 0;
    return '<span class="feat-prerequisite '+(has?'required':'none')+'">'+esc(prerequisiteLabel(feat))+'</span>';
  }

  function choicesHtml(feat) {
    if (!feat.choices?.length && !feat.repeatable) return '';
    const rows = [];
    if (feat.repeatable) rows.push('<span><b>Repetível</b>Pode ser adquirido mais de uma vez conforme a própria descrição.</span>');
    for (const choice of feat.choices || []) {
      let value = choice.count ? 'Escolha '+choice.count : 'Escolha';
      if (choice.options?.length) value += ' · '+choice.options.join(', ');
      else if (choice.sources?.length) value += ' · '+choice.sources.join(', ');
      rows.push('<span><b>'+esc(choice.label || 'Escolha')+'</b>'+esc(value)+'</span>');
    }
    return '<div class="feat-choices">'+rows.join('')+'</div>';
  }

  function detailActions(feat) {
    const href = global.routeHref ? global.routeHref('feat', feat.id) : '#/feat/'+encodeURIComponent(feat.id);
    return '<div class="feat-route-actions"><a class="action-btn" href="'+attr(href)+'" data-grimorio-route>Abrir link do talento ↗</a>'
      +(typeof global.shareLinkButton === 'function' ? global.shareLinkButton('feat', feat.id) : '')
      +'<button class="action-btn foundry-export-trigger" type="button" onclick="openFoundryFeatExport(\''+attr(feat.id)+'\')"><span class="foundry-export-icon">⇩</span> Exportar Foundry</button></div>';
  }

  function featCard(feat, targetId=null) {
    const href = global.routeHref ? global.routeHref('feat', feat.id) : '#/feat/'+encodeURIComponent(feat.id);
    return '<details class="feat-item" data-feat-id="'+attr(feat.id)+'" '+(targetId===feat.id?'open data-route-target="true"':'')+'>'
      +'<summary class="feat-summary"><div class="feat-icon" aria-hidden="true">✦</div><div class="feat-title-block"><strong><a href="'+attr(href)+'" data-grimorio-route onclick="event.stopPropagation()">'+esc(feat.name)+'</a></strong>'+(feat.originalName && feat.originalName !== feat.name ? '<span>Original: '+esc(feat.originalName)+'</span>' : '')+'<span>'+esc(sourceLabel(feat))+' · p. '+esc(feat.sourcePage)+'</span><a class="feat-deep-link" href="'+attr(href)+'" data-grimorio-route onclick="event.stopPropagation()">Abrir em link direto ↗</a></div>'
      +'<div class="feat-prerequisite-cell">'+prerequisiteChip(feat)+(feat.repeatable?'<span class="feat-repeatable">Repetível</span>':'')+'</div><span class="feat-expand" aria-hidden="true">⌄</span></summary>'
      +'<div class="feat-detail"><div class="prose feat-prose">'+formatDescription(feat.description)+'</div>'+choicesHtml(feat)+'<div class="feat-source">'+esc(sourceLabel(feat))+' · '+esc(feat._chapter || 'Talentos')+' · p. '+esc(feat.sourcePage)+'</div>'+detailActions(feat)+'</div></details>';
  }

  function resultsHtml(targetId=null) {
    let list = filteredFeats();
    const all = allFeats();
    const target = targetId ? all.find(feat => feat.id === targetId) : null;
    if (target && !list.some(feat => feat.id === target.id)) list = [target, ...list];
    if (!list.length) return '<div class="feat-results-line"><span><b>0</b> de '+all.length+' talentos</span></div><div class="feat-empty"><b>Nenhum talento encontrado</b><span>Ajuste a busca ou os filtros.</span></div>';
    return '<div class="feat-results-line"><span><b>'+list.length+'</b> de '+all.length+' talentos</span><span>Abra um talento para consultar seu texto integral e a referência da fonte.</span></div><div class="feat-list">'+list.map(feat => featCard(feat, targetId)).join('')+'</div>';
  }

  function sourceOptions() {
    return catalogs().map(catalog => {
      const source = registry.getSource(catalog.sourceId);
      const label = source?.shortTitle || source?.title || catalog.label || catalog.id;
      return '<option value="'+attr(catalog.sourceId)+'" '+(state.source===catalog.sourceId?'selected':'')+'>'+esc(label)+'</option>';
    }).join('');
  }

  function updateResults() {
    const el = document.getElementById('featResults');
    if (el) el.innerHTML = resultsHtml();
  }
  function updateControls() {
    const prereq = document.getElementById('featPrerequisiteFilter'); if (prereq) prereq.value = state.prerequisite;
    const source = document.getElementById('featSourceFilter'); if (source) source.value = state.source;
  }
  function setSearch(value) { state.q = String(value || '').slice(0, 120); updateResults(); }
  function setPrerequisite(value) { state.prerequisite = ['all','none','ability','spellcasting','proficiency','other'].includes(value) ? value : 'all'; updateControls(); updateResults(); }
  function setSource(value) { state.source = value || 'all'; updateControls(); updateResults(); }
  function clearFilters() {
    state.q = ''; state.prerequisite = 'all'; state.source = 'all';
    const search = document.getElementById('featSearch'); if (search) search.value = '';
    updateControls(); updateResults();
  }

  function render(targetId=null) {
    const feats = allFeats();
    const withPrerequisite = feats.filter(feat => (feat.prerequisites || []).length).length;
    const repeatable = feats.filter(feat => feat.repeatable).length;
    const sources = new Set(feats.map(feat => feat._sourceId)).size;
    if (targetId) setTimeout(() => {
      const safe = String(targetId).replace(/"/g, '');
      const row = document.querySelector('[data-feat-id="'+safe+'"]');
      if (row) { row.open = true; row.scrollIntoView({behavior:'smooth', block:'center'}); }
    }, 0);
    return '<div class="feat-browser"><header class="feat-hero"><div><div class="eyebrow"><span class="dot"></span>Opções de personalização</div><h1 class="page-title">Talentos</h1><p class="lede">Consulte os talentos adicionados ao Grimório com texto integral, pré-requisitos e referência de página. O catálogo é organizado por fonte para receber novos livros sem misturar procedências.</p></div><div class="feat-hero-stats"><div><strong>'+feats.length+'</strong><span>talentos</span></div><div><strong>'+withPrerequisite+'</strong><span>com pré-requisito</span></div><div><strong>'+repeatable+'</strong><span>repetível</span></div><div><strong>'+sources+'</strong><span>'+(sources===1?'fonte':'fontes')+'</span></div></div></header>'
      +'<div class="foundry-batch-toolbar foundry-feat-catalog-toolbar"><div><strong>Foundry VTT · Talentos</strong><span>Exporte um talento individual ou os '+feats.length+' talentos integrados em um único pacote para o Grimório Importer.</span></div><button class="action-btn foundry-export-trigger" type="button" onclick="openFoundryFeatCatalogExport()"><span class="foundry-export-icon">⇩</span> Exportar catálogo <b>'+feats.length+'</b></button></div>'
      +'<section class="feat-panel"><div class="feat-toolbar"><label class="feat-search"><span aria-hidden="true">⌕</span><input id="featSearch" value="'+attr(state.q)+'" oninput="GRIMORIO_FEAT_BROWSER.setSearch(this.value)" placeholder="Buscar talento, pré-requisito ou efeito..."></label>'
      +'<label class="feat-select"><span>Pré-requisito</span><select id="featPrerequisiteFilter" onchange="GRIMORIO_FEAT_BROWSER.setPrerequisite(this.value)"><option value="all">Todos</option><option value="none">Sem pré-requisito</option><option value="ability">Atributo mínimo</option><option value="spellcasting">Conjuração</option><option value="proficiency">Proficiência</option><option value="other">Outro</option></select></label>'
      +'<label class="feat-select"><span>Fonte</span><select id="featSourceFilter" onchange="GRIMORIO_FEAT_BROWSER.setSource(this.value)"><option value="all">Todas as fontes</option>'+sourceOptions()+'</select></label>'
      +'<button class="action-btn feat-clear" type="button" onclick="GRIMORIO_FEAT_BROWSER.clearFilters()">Limpar filtros</button></div><div id="featResults">'+resultsHtml(targetId)+'</div></section></div>';
  }

  function getFeat(id) { return allFeats().find(feat => feat.id === id) || null; }

  global.GRIMORIO_FEAT_BROWSER = Object.freeze({
    render,
    getFeats: allFeats,
    getFeat,
    filteredFeats,
    setSearch,
    setPrerequisite,
    setSource,
    clearFilters
  });
})(window);
