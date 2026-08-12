'use strict';

(function initEquipmentBrowser(global) {
  const registry = global.GRIMORIO_REGISTRY;
  if (!registry?.getEquipmentCatalogs) throw new Error('GRIMORIO_REGISTRY com catálogos de equipamento precisa ser carregado antes de equipment-browser.js.');

  const state = { q: '', type: 'all', category: 'all', source: 'all' };

  function esc(value) {
    return String(value ?? '').replace(/[&<>"']/g, c => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;' }[c]));
  }
  function attr(value) { return esc(value).replace(/`/g, '&#96;'); }
  function normalize(value) { return registry.normalize ? registry.normalize(value) : String(value || '').toLocaleLowerCase('pt-BR'); }

  function catalogs() { return registry.getEquipmentCatalogs(); }
  function allItems() {
    return catalogs().flatMap(catalog => catalog.items.map(item => ({
      ...item,
      _catalogId: catalog.id,
      _sourceId: catalog.sourceId,
      _catalogLabel: catalog.label,
      _properties: catalog.properties || {},
      _armorRules: catalog.armorRules || {},
      _rulesSections: catalog.rulesSections || []
    })));
  }
  function sourceFor(item) { return registry.getSource(item?._sourceId); }
  function sourceLabel(item) {
    const source = sourceFor(item);
    return source?.shortTitle || source?.catalogLabel || source?.title || item?._catalogLabel || item?._sourceId || 'Fonte não informada';
  }

  function typeLabel(type) {
    return ({ weapon:'Arma', armor:'Armadura', shield:'Escudo', gear:'Equipamento de Aventura', ammunition:'Munição' })[type] || 'Equipamento';
  }
  function categoryLabel(item) {
    if (item.type === 'weapon') {
      const group = item.group === 'marcial' ? 'Marcial' : 'Simples';
      if (item.weaponFamily === 'firearm') return 'Arma de Fogo ' + group + ' · à Distância';
      const attack = item.attackType === 'distancia' ? 'à Distância' : 'Corpo a Corpo';
      return group + ' · ' + attack;
    }
    if (item.type === 'armor') return 'Armadura ' + ({ leve:'Leve', media:'Média', pesada:'Pesada' }[item.category] || item.category);
    if (item.type === 'shield') return 'Escudo';
    if (item.type === 'gear') return 'Equipamento de Aventura';
    if (item.type === 'ammunition') return item.category === 'greatbow' ? 'Munição · Arco Grande' : 'Munição · Arma de Fogo';
    return typeLabel(item.type);
  }
  function metricLabel(item) {
    if (item.type === 'weapon') return item.damage === '—' ? '—' : item.damage + (item.damageType && item.damageType !== '—' ? ' ' + item.damageType : '');
    if (item.type === 'gear' || item.type === 'ammunition') return item.metric || '—';
    return item.armorClass || '—';
  }
  function metricTitle(item) {
    if (item.type === 'weapon') return 'Dano';
    if (item.type === 'gear') return 'Uso';
    if (item.type === 'ammunition') return 'Compatibilidade';
    return 'CA';
  }

  function propertyDefinition(item, property) {
    if (item?._properties?.[property.id]) return item._properties[property.id];
    for (const catalog of catalogs()) {
      if (catalog.properties?.[property.id]) return catalog.properties[property.id];
    }
    return null;
  }
  function propertyTooltip(item, property) {
    const def = propertyDefinition(item, property);
    if (!def) return property.value ? property.value : 'Propriedade sem descrição cadastrada.';
    let text = def.text || '';
    if (property.value) {
      if (property.id === 'municao' || property.id === 'arremesso') text += ' Distância desta arma: ' + property.value + '.';
      else if (property.id === 'versatil') text += ' Dano com duas mãos nesta arma: ' + property.value + '.';
      else if (property.id === 'recarga' || property.id === 'recarga-pesada' || property.id === 'recarga-completa') text += ' Capacidade desta arma: ' + property.value + ' disparo(s) antes da recarga.';
      else if (property.id === 'gatilho') text += ' Disparo integrado desta arma: ' + property.value + '.';
      else text += ' Valor desta arma: ' + property.value + '.';
    }
    if (property.id === 'especial' && item.specialRule) text += ' Regra desta arma: ' + item.specialRule;
    return text.trim();
  }
  function propertyLabel(item, property) {
    const def = propertyDefinition(item, property);
    const label = def?.label || property.id;
    return property.value ? label + ' (' + property.value + ')' : label;
  }
  function propertyChip(item, property) {
    const label = propertyLabel(item, property);
    const tooltip = propertyTooltip(item, property);
    return '<span class="equipment-property" tabindex="0" data-tooltip="'+attr(tooltip)+'" aria-label="'+attr(label+': '+tooltip)+'">'+esc(label)+'</span>';
  }
  function armorRuleDefinition(item, id) {
    if (item?._armorRules?.[id]) return item._armorRules[id];
    for (const catalog of catalogs()) if (catalog.armorRules?.[id]) return catalog.armorRules[id];
    return null;
  }
  function armorRuleChip(item, id, label, value) {
    const def = armorRuleDefinition(item, id);
    let text = def?.text || '';
    if (value && id === 'forca-minima') text += ' Exigência deste equipamento: Força ' + value + '.';
    return '<span class="equipment-property armor-rule" tabindex="0" data-tooltip="'+attr(text)+'" aria-label="'+attr(label+': '+text)+'">'+esc(label)+'</span>';
  }
  function propertiesHtml(item) {
    if (item.type === 'weapon') {
      if (!item.properties?.length) return '<span class="equipment-no-property">—</span>';
      return item.properties.map(p => propertyChip(item, p)).join('');
    }
    if (item.type === 'ammunition' || item.type === 'gear') return '<span class="equipment-no-property">—</span>';
    const chips = [];
    if (item.strength) chips.push(armorRuleChip(item, 'forca-minima', 'For ' + item.strength, item.strength));
    if (item.stealthDisadvantage) chips.push(armorRuleChip(item, 'furtividade-desvantagem', 'Furtividade: desvantagem'));
    if (item.type === 'shield') chips.push(armorRuleChip(item, 'escudo-ca', (item.armorClass || '+2') + ' CA'));
    if (item.properties?.length) chips.push(...item.properties.map(p => propertyChip(item, p)));
    return chips.length ? chips.join('') : '<span class="equipment-no-property">—</span>';
  }

  function itemSearchText(item) {
    const propertyNames = (item.properties || []).flatMap(p => {
      const def = propertyDefinition(item, p);
      return [def?.label, def?.originalName, ...(def?.aliases || []), def?.text, p.value];
    });
    return normalize([
      item.name, item.originalName, ...(item.aliases || []), ...(item.tags || []), typeLabel(item.type), categoryLabel(item), item.price, item.damage, item.damageType,
      item.armorClass, item.weight, item.description, item.specialRule, item.metric, item.unitPrice, item.bundleSize, item.requirementText, sourceLabel(item),
      item.manufacturing?.materialCost, item.manufacturing?.tool, item.manufacturing?.dc, item.manufacturing?.time, ...propertyNames
    ].filter(Boolean).join(' '));
  }

  function categoryKey(item) {
    if (item.type === 'weapon') {
      if (item.weaponFamily === 'firearm') return 'weapon-firearm-' + item.group;
      return 'weapon-' + item.group + '-' + item.attackType;
    }
    if (item.type === 'armor') return 'armor-' + item.category;
    if (item.type === 'shield') return 'shield';
    if (item.type === 'gear') return 'gear-aventura';
    if (item.type === 'ammunition') return 'ammunition-' + (item.category || 'firearm');
    return item.type;
  }

  function filteredItems() {
    const q = normalize(state.q);
    return allItems().filter(item => {
      if (state.type !== 'all' && item.type !== state.type) return false;
      if (state.category !== 'all' && categoryKey(item) !== state.category) return false;
      if (state.source !== 'all' && item._sourceId !== state.source) return false;
      return !q || itemSearchText(item).includes(q);
    });
  }

  function updateResults() {
    const results = document.getElementById('equipmentResults');
    if (results) results.innerHTML = resultsHtml();
  }
  function updateControls() {
    document.querySelectorAll('[data-equipment-type]').forEach(button => {
      const active = button.dataset.equipmentType === state.type;
      button.classList.toggle('active', active);
      button.setAttribute('aria-pressed', active ? 'true' : 'false');
    });
    const category = document.getElementById('equipmentCategoryFilter');
    if (category) category.value = state.category;
    const source = document.getElementById('equipmentSourceFilter');
    if (source) source.value = state.source;
  }
  function setSearch(value) { state.q = String(value || '').slice(0, 100); updateResults(); }
  function setType(value) {
    state.type = ['all','weapon','armor','shield','gear','ammunition'].includes(value) ? value : 'all';
    if (state.type !== 'all' && state.category !== 'all') {
      const prefix = state.type === 'shield' ? 'shield' : state.type + '-';
      if (!(state.category === 'shield' && state.type === 'shield') && !state.category.startsWith(prefix)) state.category = 'all';
    }
    updateControls(); updateResults();
  }
  function setCategory(value) { state.category = value || 'all'; updateControls(); updateResults(); }
  function setSource(value) { state.source = value || 'all'; updateControls(); updateResults(); }
  function clearFilters() {
    state.q = ''; state.type = 'all'; state.category = 'all'; state.source = 'all';
    const search = document.getElementById('equipmentSearch'); if (search) search.value = '';
    updateControls(); updateResults();
  }
  function openItem(id) {
    const item = allItems().find(entry => entry.id === id);
    if (!item) return;
    if (typeof global.navigate === 'function') global.navigate('equipment', id);
  }

  function itemDetails(item) {
    const source = sourceLabel(item);
    const description = item.description ? '<p>'+esc(item.description)+'</p>' : '';
    const special = item.specialRule ? '<div class="equipment-special-rule"><strong>Regra especial</strong><p>'+esc(item.specialRule)+'</p><small>Fonte p. '+esc(item.specialPage || item.sourcePage)+'</small></div>' : '';
    const editorial = item.editorialNote ? '<div class="equipment-editorial-note"><strong>Nota editorial</strong><p>'+esc(item.editorialNote)+'</p></div>' : '';
    const armorInfo = item.type === 'armor' ? '<div class="equipment-detail-note"><strong>Categoria:</strong> '+esc(categoryLabel(item))+(item.strength?' · <strong>Força mínima:</strong> '+esc(item.strength):'')+(item.stealthDisadvantage?' · <strong>Furtividade:</strong> desvantagem':'')+'</div>' : '';
    const shieldInfo = item.type === 'shield' ? '<div class="equipment-detail-note"><strong>Bônus de CA:</strong> '+esc(item.armorClass||'—')+(item.strength?' · <strong>Força mínima:</strong> '+esc(item.strength):'')+(item.stealthDisadvantage?' · <strong>Furtividade:</strong> desvantagem':'')+'</div>' : '';
    const requirement = item.requirementText ? '<div class="equipment-detail-note"><strong>Requisito:</strong> '+esc(item.requirementText)+'</div>' : '';
    const ammoInfo = item.type === 'ammunition' ? '<div class="equipment-detail-note"><strong>'+esc(metricTitle(item))+':</strong> '+esc(metricLabel(item))+(item.unitPrice?' · <strong>Preço unitário:</strong> '+esc(item.unitPrice):'')+(item.bundleSize?' · <strong>Pacote:</strong> '+esc(item.bundleSize)+' unidade(s)':'')+'</div>' : '';
    const tags = item.tags?.length ? '<div class="equipment-detail-note"><strong>Características:</strong> '+item.tags.map(esc).join(' · ')+'</div>' : '';
    const manufacturing = item.manufacturing ? '<div class="equipment-manufacturing"><strong>Fabricação</strong><div><span><b>Materiais</b>'+esc(item.manufacturing.materialCost||'—')+'</span><span><b>Ferramenta</b>'+esc(item.manufacturing.tool||'—')+'</span><span><b>CD</b>'+esc(item.manufacturing.dc||'—')+'</span><span><b>Tempo</b>'+esc(item.manufacturing.time||'—')+'</span></div></div>' : '';
    const sourceNote = '<div class="equipment-detail-source">'+esc(source)+' · Fonte p. '+esc(item.sourcePage)+'</div>';
    const routeActions = '<div class="equipment-route-actions"><a class="action-btn" href="'+attr(global.routeHref?global.routeHref('equipment',item.id):('#/equipment/'+encodeURIComponent(item.id)))+'" data-grimorio-route>Abrir link do equipamento ↗</a>'+(typeof global.shareLinkButton==='function'?global.shareLinkButton('equipment',item.id):'')+'</div>';
    return '<div class="equipment-detail-body">'+description+armorInfo+shieldInfo+requirement+ammoInfo+tags+manufacturing+special+editorial+sourceNote+routeActions+'</div>';
  }

  function itemIcon(item) {
    if (item.type === 'weapon') return '⚔';
    if (item.type === 'armor') return '◈';
    if (item.type === 'gear') return '✦';
    if (item.type === 'ammunition') return '◉';
    return '⬡';
  }
  function itemRow(item,targetId=null) {
    const href=global.routeHref?global.routeHref('equipment',item.id):('#/equipment/'+encodeURIComponent(item.id));
    return '<details class="equipment-item" data-item-id="'+attr(item.id)+'" '+(targetId===item.id?'open data-route-target="true"':'')+'><summary class="equipment-row">'
      +'<div class="equipment-name-cell"><span class="equipment-type-icon '+attr(item.type)+'">'+itemIcon(item)+'</span><div><strong><a href="'+attr(href)+'" data-grimorio-route onclick="event.stopPropagation()">'+esc(item.name)+'</a></strong><span>'+esc(categoryLabel(item))+' · '+esc(sourceLabel(item))+'</span><a class="equipment-deep-link" href="'+attr(href)+'" data-grimorio-route onclick="event.stopPropagation()">Abrir em link direto ↗</a></div></div>'
      +'<div class="equipment-metric"><small>'+metricTitle(item)+'</small><strong>'+esc(metricLabel(item))+'</strong></div>'
      +'<div class="equipment-price"><small>Preço</small><strong>'+esc(item.price || '—')+'</strong></div>'
      +'<div class="equipment-weight"><small>Peso</small><strong>'+esc(item.weight || '—')+'</strong></div>'
      +'<div class="equipment-properties">'+propertiesHtml(item)+'</div>'
      +'<span class="equipment-expand" aria-hidden="true">⌄</span>'
      +'</summary>'+itemDetails(item)+'</details>';
  }

  function resultsHtml(targetId=null) {
    let list = filteredItems();
    const all = allItems();
    const target = targetId ? all.find(item=>item.id===targetId) : null;
    if(target && !list.some(item=>item.id===target.id)) list=[target,...list];
    if (!list.length) return '<div class="equipment-results-line"><span><b>0</b> de '+all.length+' equipamentos</span></div><div class="equipment-empty"><b>Nenhum equipamento encontrado</b><span>Ajuste a busca ou os filtros.</span></div>';
    return '<div class="equipment-results-line"><span><b>'+list.length+'</b> de '+all.length+' equipamentos</span><span>Passe o mouse ou use Tab sobre uma propriedade para ver sua regra.</span></div>'
      +'<div class="equipment-table-head"><span>Equipamento</span><span>Dano / CA / Uso</span><span>Preço</span><span>Peso</span><span>Propriedades</span><span></span></div>'
      +'<div class="equipment-list">'+list.map(item=>itemRow(item,targetId)).join('')+'</div>';
  }

  function glossaryHtml() {
    const propertyMap = new Map();
    const armorMap = new Map();
    for (const catalog of catalogs()) {
      Object.entries(catalog.properties || {}).forEach(([id, def]) => { if (!propertyMap.has(id)) propertyMap.set(id, def); });
      Object.entries(catalog.armorRules || {}).forEach(([id, def]) => { if (!armorMap.has(id)) armorMap.set(id, def); });
    }
    const properties = Array.from(propertyMap.values()).sort((a,b) => a.label.localeCompare(b.label, 'pt-BR'));
    const armor = Array.from(armorMap.values()).sort((a,b) => a.label.localeCompare(b.label, 'pt-BR'));
    return '<details class="equipment-glossary"><summary>Glossário de propriedades e regras de armadura</summary><div class="equipment-glossary-grid">'
      +properties.map(def => '<article><h3>'+esc(def.label)+'</h3><p>'+esc(def.text)+'</p><small>Fonte p. '+esc(def.page)+'</small></article>').join('')
      +armor.map(def => '<article><h3>'+esc(def.label)+'</h3><p>'+esc(def.text)+'</p><small>Fonte p. '+esc(def.page)+'</small></article>').join('')
      +'</div></details>';
  }

  function sourceRulesHtml() {
    const sections = catalogs().flatMap(catalog => (catalog.rulesSections || []).map(section => ({ ...section, _sourceId: catalog.sourceId, _catalogLabel: catalog.label })));
    if (!sections.length) return '';
    return '<section class="equipment-source-rules"><div class="section-head"><div><div class="eyebrow"><span class="dot"></span>Regras complementares</div><h2 class="page-title" style="font-size:1.55rem;margin:0">Regras das fontes de equipamento</h2></div></div><div class="equipment-source-rules-list">'
      +sections.map(section => {
        const source = registry.getSource(section._sourceId);
        const sourceName = source?.shortTitle || source?.title || section._catalogLabel || section._sourceId;
        const paragraphs = (section.paragraphs || []).map(p=>'<p>'+esc(p)+'</p>').join('');
        const bullets = section.bullets?.length ? '<ul>'+section.bullets.map(x=>'<li>'+esc(x)+'</li>').join('')+'</ul>' : '';
        const table = section.table ? '<div class="equipment-rules-table-wrap"><table class="equipment-rules-table"><thead><tr>'+section.table.headers.map(x=>'<th>'+esc(x)+'</th>').join('')+'</tr></thead><tbody>'+section.table.rows.map(row=>'<tr>'+row.map(x=>'<td>'+esc(x)+'</td>').join('')+'</tr>').join('')+'</tbody></table></div>' : '';
        return '<details><summary><span>'+esc(section.title)+'</span><small>'+esc(sourceName)+' · p. '+esc(section.page)+'</small></summary><article>'+paragraphs+bullets+table+'</article></details>';
      }).join('')+'</div></section>';
  }

  function categoryOptions() {
    return [
      ['all','Todas as categorias'],
      ['weapon-simples-corpo-a-corpo','Armas simples · corpo a corpo'],
      ['weapon-simples-distancia','Armas simples · à distância'],
      ['weapon-marcial-corpo-a-corpo','Armas marciais · corpo a corpo'],
      ['weapon-marcial-distancia','Armas marciais · à distância'],
      ['weapon-firearm-simples','Armas de fogo simples'],
      ['weapon-firearm-marcial','Armas de fogo marciais'],
      ['armor-leve','Armaduras leves'],
      ['armor-media','Armaduras médias'],
      ['armor-pesada','Armaduras pesadas'],
      ['shield','Escudos'],
      ['ammunition-firearm','Munição · armas de fogo'],
      ['ammunition-greatbow','Munição · Arco Grande'],
      ['gear-aventura','Equipamentos de aventura']
    ].map(([value,label]) => '<option value="'+value+'" '+(state.category===value?'selected':'')+'>'+label+'</option>').join('');
  }
  function sourceOptions() {
    return catalogs().map(catalog => {
      const source = registry.getSource(catalog.sourceId);
      const label = source?.shortTitle || source?.title || catalog.label || catalog.id;
      return '<option value="'+attr(catalog.sourceId)+'" '+(state.source===catalog.sourceId?'selected':'')+'>'+esc(label)+'</option>';
    }).join('');
  }

  function render(targetId=null) {
    const items = allItems();
    if(targetId)setTimeout(()=>{const safeId=String(targetId).replace(/"/g,'');const row=document.querySelector('[data-item-id="'+safeId+'"]');if(row){row.open=true;row.scrollIntoView({behavior:'smooth',block:'center'});}},0);
    const weapons = items.filter(x=>x.type==='weapon').length;
    const armors = items.filter(x=>x.type==='armor').length;
    const shields = items.filter(x=>x.type==='shield').length;
    const ammunition = items.filter(x=>x.type==='ammunition').length;
    const gear = items.filter(x=>x.type==='gear').length;
    return '<div class="equipment-browser">'
      +'<header class="equipment-hero"><div><div class="eyebrow"><span class="dot"></span>Catálogo de itens</div><h1 class="page-title">Equipamentos</h1><p class="lede">Consulte armas, armaduras, escudos, munições e equipamentos de aventura em um formato rápido para mesa. As propriedades possuem explicações por <b>hover</b> e foco de teclado, e cada item preserva sua fonte para facilitar a consulta entre Livro do Jogador, Ryoko e Lyre.</p></div><div class="equipment-hero-stats"><div><strong>'+weapons+'</strong><span>armas</span></div><div><strong>'+armors+'</strong><span>armaduras</span></div><div><strong>'+shields+'</strong><span>escudos</span></div><div><strong>'+ammunition+'</strong><span>munições</span></div><div><strong>'+gear+'</strong><span>itens de aventura</span></div></div></header>'
      +'<section class="equipment-panel"><div class="equipment-tabs">'
      +[['all','Todos'],['weapon','Armas'],['armor','Armaduras'],['shield','Escudos'],['ammunition','Munições'],['gear','Equip. de Aventura']].map(([value,label])=>'<button type="button" data-equipment-type="'+value+'" aria-pressed="'+(state.type===value?'true':'false')+'" class="equipment-tab '+(state.type===value?'active':'')+'" onclick="GRIMORIO_EQUIPMENT_BROWSER.setType(\''+value+'\')">'+label+'</button>').join('')
      +'</div><div class="equipment-toolbar"><label class="equipment-search"><span aria-hidden="true">⌕</span><input id="equipmentSearch" value="'+attr(state.q)+'" oninput="GRIMORIO_EQUIPMENT_BROWSER.setSearch(this.value)" placeholder="Buscar equipamento, dano, propriedade ou efeito..."></label>'
      +'<label class="equipment-select"><span>Categoria</span><select id="equipmentCategoryFilter" onchange="GRIMORIO_EQUIPMENT_BROWSER.setCategory(this.value)">'+categoryOptions()+'</select></label>'
      +'<label class="equipment-select"><span>Fonte</span><select id="equipmentSourceFilter" onchange="GRIMORIO_EQUIPMENT_BROWSER.setSource(this.value)"><option value="all">Todas as fontes</option>'+sourceOptions()+'</select></label>'
      +'<button class="action-btn equipment-clear" type="button" onclick="GRIMORIO_EQUIPMENT_BROWSER.clearFilters()">Limpar filtros</button></div>'
      +'<div id="equipmentResults">'+resultsHtml(targetId)+'</div></section>'
      +glossaryHtml()+sourceRulesHtml()+'</div>';
  }

  global.GRIMORIO_EQUIPMENT_BROWSER = Object.freeze({
    render,
    getItems: allItems,
    filteredItems,
    setSearch,
    setType,
    setCategory,
    setSource,
    clearFilters,
    openItem
  });
})(window);
