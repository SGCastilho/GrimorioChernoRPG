'use strict';

/*
 * Consulta dinâmica de classes e subclasses.
 * Esta camada substitui as páginas extensas por abas e permite selecionar
 * um nível para destacar a progressão e consultar características adquiridas.
 */
(function () {
  const CONSULTATION_KEY = 'grimorio-consulta-classes-v1';
  const VALID_CLASS_TABS = ['overview','progression','features','subclasses','tables','references'];
  const VALID_SUBCLASS_TABS = ['overview','progression','features','tables'];
  let consultationState = readLocal(CONSULTATION_KEY, {}) || {};
  let pendingFeatureJump = null;

  function normalizeFeatureLookup(value) {
    return String(value || '')
      .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
      .toLocaleLowerCase('pt-BR')
      .replace(/\([^)]*\)/g, ' ')
      .replace(/[–—-]/g, ' ')
      .replace(/[^a-z0-9]+/g, ' ')
      .replace(/\b(?:de|do|da|dos|das)\b/g, ' ')
      .replace(/\baprimoramentos\b/g, 'aprimoramento')
      .replace(/\s+/g, ' ')
      .trim();
  }

  function featureLookupVariants(value) {
    const base = normalizeFeatureLookup(value);
    const variants = new Set([base]);
    const transforms = [
      /^caracteristica de /,
      /^habilidade de /,
      /^aprimoramento de /,
      / aprimorada?$/,
      / maior$/,
      / superior$/
    ];
    transforms.forEach(pattern => {
      const transformed = base.replace(pattern, '').trim();
      if (transformed) variants.add(transformed);
    });
    return [...variants].filter(Boolean);
  }

  function findFeatureTarget(c, label, rowLevel) {
    const features = effectiveLevelSections(c?.features || []);
    const variants = featureLookupVariants(label);
    const exactAtLevel = features.find(feature => {
      const title = normalizeFeatureLookup(feature.title || feature.name);
      return Number(feature._effectiveLevel || feature.level) === Number(rowLevel) && variants.includes(title);
    });
    if (exactAtLevel) return exactAtLevel;
    const exact = features.find(feature => variants.includes(normalizeFeatureLookup(feature.title || feature.name)));
    if (exact) return exact;
    if (variants.includes('aprimoramento aura')) {
      const aura = features.find(feature => normalizeFeatureLookup(feature.title || feature.name).startsWith('aura '));
      if (aura) return aura;
    }
    return features.find(feature => {
      const title = normalizeFeatureLookup(feature.title || feature.name);
      return variants.some(variant => variant.length >= 5 && (title.includes(variant) || variant.includes(title)));
    }) || null;
  }

  function featureLink(entity, label, rowLevel, type = 'class') {
    const target = findFeatureTarget(entity, label, rowLevel);
    if (!target) return '<span class="progression-feature-label">' + esc(label) + '</span>';
    return '<button type="button" class="progression-feature-link" data-feature-type="' + attr(type) + '" data-entity-id="' + attr(entity.id) + '" data-feature-name="' + attr(label) + '" data-feature-level="' + attr(rowLevel || target._effectiveLevel || target.level || '') + '" aria-label="Abrir a característica ' + attr(label) + '">' + esc(label) + '<span aria-hidden="true">↗</span></button>';
  }

  function performFeatureJump() {
    if (!pendingFeatureJump) return;
    const {type = 'class', entityId, label, level} = pendingFeatureJump;
    const entity = type === 'subclass' ? getSubclass(entityId) : getClass(entityId);
    const target = findFeatureTarget(entity, label, level);
    if (!target) {
      pendingFeatureJump = null;
      return;
    }
    const groupPrefix = type === 'subclass' ? 'subclassFeatures-' : 'classFeatures-';
    const targetId = featureAnchorId(groupPrefix + entityId, target);
    const element = document.getElementById(targetId);
    if (!element) return;
    element.open = true;
    element.classList.add('feature-target-highlight');
    element.scrollIntoView({behavior:'smooth', block:'start'});
    setTimeout(() => element.classList.remove('feature-target-highlight'), 2200);
    pendingFeatureJump = null;
  }

  window.openClassFeature = function(classId, label, level) {
    const c = getClass(classId);
    const target = findFeatureTarget(c, label, level);
    if (!c || !target) return;
    const current = stateFor(classId, 'class');
    const keepOverview = route.view === 'class' && route.id === classId && current.tab === 'overview';
    consultationState[classId] = {
      ...current,
      tab: keepOverview ? 'overview' : 'features',
      level: 0
    };
    saveConsultationState();
    pendingFeatureJump = {type:'class', entityId:classId, label, level:Number(level) || Number(target._effectiveLevel || target.level) || 0};
    if (route.view !== 'class' || route.id !== classId) {
      navigate('class', classId);
    } else {
      render();
      requestAnimationFrame(() => requestAnimationFrame(performFeatureJump));
    }
  };

  window.openSubclassFeature = function(subclassId, label, level) {
    const s = getSubclass(subclassId);
    const target = findFeatureTarget(s, label, level);
    if (!s || !target) return;
    const current = stateFor(subclassId, 'subclass');
    const keepOverview = route.view === 'subclass' && route.id === subclassId && current.tab === 'overview';
    consultationState[subclassId] = {
      ...current,
      tab: keepOverview ? 'overview' : 'features',
      level: 0
    };
    saveConsultationState();
    pendingFeatureJump = {type:'subclass', entityId:subclassId, label, level:Number(level) || Number(target._effectiveLevel || target.level) || 0};
    if (route.view !== 'subclass' || route.id !== subclassId) {
      navigate('subclass', subclassId);
    } else {
      render();
      requestAnimationFrame(() => requestAnimationFrame(performFeatureJump));
    }
  };

  document.addEventListener('click', event => {
    const button = event.target.closest?.('.progression-feature-link');
    if (!button) return;
    const type = button.dataset.featureType || 'class';
    if (type === 'subclass') {
      openSubclassFeature(button.dataset.entityId, button.dataset.featureName, Number(button.dataset.featureLevel) || 0);
    } else {
      openClassFeature(button.dataset.entityId || button.dataset.classId, button.dataset.featureName, Number(button.dataset.featureLevel) || 0);
    }
  });

  window.addEventListener('hashchange', () => setTimeout(performFeatureJump, 40));

  function saveConsultationState() {
    writeLocal(CONSULTATION_KEY, consultationState);
  }

  function stateFor(id, type = 'class') {
    const allowedTabs = type === 'subclass' ? VALID_SUBCLASS_TABS : VALID_CLASS_TABS;
    const fallbackTab = 'overview';
    const current = consultationState[id] || {};
    return {
      level: Number.isFinite(Number(current.level)) ? Math.max(0, Math.min(20, Number(current.level))) : 0,
      tab: allowedTabs.includes(current.tab) ? current.tab : fallbackTab
    };
  }

  window.setConsultationLevel = function (id, level, type = 'class') {
    const current = stateFor(id, type);
    consultationState[id] = {...current, level:Number(level) || 0};
    saveConsultationState();
    render();
  };

  window.setConsultationTab = function (id, tab, type = 'class') {
    const current = stateFor(id, type);
    consultationState[id] = {...current, tab};
    saveConsultationState();
    render();
    requestAnimationFrame(() => document.getElementById('consultation-content')?.focus({preventScroll:true}));
  };

  function levelOptions(selected) {
    return '<option value="0"' + (selected === 0 ? ' selected' : '') + '>Todos os níveis</option>' +
      Array.from({length:20}, (_,i) => {
        const level = i + 1;
        return '<option value="' + level + '"' + (selected === level ? ' selected' : '') + '>Nível ' + level + '</option>';
      }).join('');
  }

  function consultationToolbar(id, state, tabs, hasLevels = true, type = 'class') {
    return '<section class="consultation-toolbar" aria-label="Ferramentas de consulta">' +
      (hasLevels ? '<div class="level-control"><label for="classLevelSelect">Consultar no nível</label><select id="classLevelSelect" onchange="setConsultationLevel(\'' + attr(id) + '\',this.value,\'' + type + '\')">' + levelOptions(state.level) + '</select></div>' : '') +
      '<div class="consultation-tabs" role="tablist">' + tabs.map(tab =>
        '<button type="button" role="tab" aria-selected="' + (state.tab === tab.id) + '" class="consultation-tab ' + (state.tab === tab.id ? 'active' : '') + '" onclick="setConsultationTab(\'' + attr(id) + '\',\'' + attr(tab.id) + '\',\'' + type + '\')">' + tab.label + (tab.count != null ? '<span>' + tab.count + '</span>' : '') + '</button>'
      ).join('') + '</div>' +
    '</section>';
  }

  function effectiveLevelSections(sections) {
    let inheritedLevel = null;
    return (sections || []).map(section => {
      const parsed = Number(section.level);
      if (Number.isFinite(parsed) && parsed > 0) inheritedLevel = parsed;
      return {...section, _effectiveLevel: Number.isFinite(parsed) && parsed > 0 ? parsed : inheritedLevel};
    });
  }

  function sectionsAtLevel(sections, level) {
    const annotated = effectiveLevelSections(sections);
    if (!level) return annotated;
    return annotated.filter(section => !section._effectiveLevel || section._effectiveLevel <= level);
  }

  function sectionLevelSummary(sections, selectedLevel) {
    if (!selectedLevel) return '';
    const annotated = effectiveLevelSections(sections);
    const acquired = annotated.filter(s => !s._effectiveLevel || s._effectiveLevel <= selectedLevel).length;
    const future = Math.max(0, annotated.length - acquired);
    return '<div class="filter-summary"><strong>' + acquired + '</strong> características disponíveis até o nível ' + selectedLevel + (future ? '<span>' + future + ' futuras ocultadas</span>' : '<span>progressão completa alcançada</span>') + '</div>';
  }

  function formatProgressionValue(value, column, c, row) {
    if (column.key === 'level') return '<strong>' + esc(value) + 'º</strong>';
    if (column.key === 'features') {
      const features = Array.isArray(value) ? value : [];
      return features.length ? '<div class="progression-features">' + features.map(item => featureLink(c, item, row?.level)).join('') + '</div>' : '<span class="table-dash">—</span>';
    }
    const display = value == null || value === '' ? '—' : String(value);
    return '<span' + (display === '—' ? ' class="table-dash"' : '') + '>' + esc(display) + '</span>';
  }

  function groupedTableHeader(columns) {
    const hasGroups = columns.some(column => column.group);
    if (!hasGroups) {
      return '<tr>' + columns.map(column => '<th scope="col" class="' + (column.sticky ? 'sticky-column ' : '') + (column.wide ? 'wide-column' : '') + '" title="' + attr(column.title || column.label) + '">' + esc(column.shortLabel || column.label) + '</th>').join('') + '</tr>';
    }

    let first = '';
    let second = '';
    for (let i = 0; i < columns.length;) {
      const column = columns[i];
      if (!column.group) {
        first += '<th scope="col" rowspan="2" class="' + (column.sticky ? 'sticky-column ' : '') + (column.wide ? 'wide-column' : '') + '" title="' + attr(column.title || column.label) + '">' + esc(column.shortLabel || column.label) + '</th>';
        i++;
        continue;
      }
      const group = column.group;
      let count = 0;
      while (i + count < columns.length && columns[i + count].group === group) count++;
      first += '<th scope="colgroup" colspan="' + count + '" class="column-group">' + esc(group) + '</th>';
      for (let j = 0; j < count; j++) {
        const child = columns[i + j];
        second += '<th scope="col" title="' + attr(child.title || child.label) + '">' + esc(child.shortLabel || child.label) + '</th>';
      }
      i += count;
    }
    return '<tr>' + first + '</tr><tr>' + second + '</tr>';
  }

  function progressionSnapshot(progression, selectedLevel) {
    if (!selectedLevel) return '';
    const row = progression.rows.find(item => item.level === selectedLevel);
    if (!row) return '';
    const columns = progression.columns;
    const regular = columns.filter(c => !['level','proficiency','features'].includes(c.key) && !c.group && row[c.key] != null && row[c.key] !== '—');
    const slotsList = columns.filter(c => c.group === 'Espaços de Magia' && row[c.key] != null && row[c.key] !== '—').map(c => (c.shortLabel || c.label) + ': ' + row[c.key]);
    const features = Array.isArray(row.features) && row.features.length ? row.features.join(' · ') : 'Nenhuma característica nova neste nível';
    return '<div class="level-snapshot" aria-label="Resumo do nível ' + selectedLevel + '">' +
      '<div class="snapshot-title"><span>Nível</span><strong>' + selectedLevel + '</strong></div>' +
      '<div class="snapshot-item"><span>Bônus de Proficiência</span><b>' + esc(row.proficiency) + '</b></div>' +
      '<div class="snapshot-item snapshot-wide"><span>Características adquiridas</span><b>' + esc(features) + '</b></div>' +
      regular.map(c => '<div class="snapshot-item"><span>' + esc(c.label) + '</span><b>' + esc(row[c.key]) + '</b></div>').join('') +
      (slotsList.length ? '<div class="snapshot-item snapshot-wide"><span>Espaços de magia</span><b>' + esc(slotsList.join(' · ')) + '</b></div>' : '') +
    '</div>';
  }

  function renderProgressionTable(c, progression, selectedLevel) {
    if (!progression) {
      return '<div class="empty"><b>Tabela de progressão não cadastrada</b>Esta classe personalizada ainda não possui dados de progressão estruturados.</div>';
    }
    const rows = progression.rows.map(row => {
      const selected = selectedLevel && row.level === selectedLevel;
      const future = selectedLevel && row.level > selectedLevel;
      return '<tr class="' + (selected ? 'selected-level ' : '') + (future ? 'future-level' : '') + '" data-level="' + row.level + '">' + progression.columns.map(column =>
        '<td class="' + (column.sticky ? 'sticky-column ' : '') + (column.wide ? 'wide-column' : '') + '">' + formatProgressionValue(row[column.key], column, c, row) + '</td>'
      ).join('') + '</tr>';
    }).join('');

    return '<section class="progression-card real-progression-table">' +
      '<div class="section-title-row"><div><div class="eyebrow"><span class="dot"></span>Progressão estruturada</div><h2 class="page-title small-title">' + esc(progression.title || ('Tabela de ' + c.name)) + '</h2></div><span class="source-badge">' + esc(progression.sourceTitle || c.source?.title || 'Livro do Jogador') + ' · p. ' + esc(progression.sourcePage || c.tablePage || '') + '</span></div>' +
      progressionSnapshot(progression, selectedLevel) +
      '<div class="progression-table-wrap" tabindex="0" aria-label="Tabela de progressão de ' + attr(c.name) + '"><table class="progression-table"><caption>Progressão da classe ' + esc(c.name) + ' do 1º ao 20º nível</caption><thead>' + groupedTableHeader(progression.columns) + '</thead><tbody>' + rows + '</tbody></table></div>' +
      '<p class="table-help">A tabela é composta por dados reais. Clique em uma característica para ir até sua regra sem ocultar as demais; selecione um nível para destacar a linha correspondente. Em telas menores, deslize horizontalmente.</p>' +
    '</section>';
  }

  function renderStructuredTables(entity) {
    const tables = entity?.tables || [];
    if (!tables.length) return '<div class="empty"><b>Nenhuma tabela complementar</b>Este conteúdo não possui tabelas adicionais estruturadas.</div>';
    return '<section class="class-section"><div class="section-heading"><div><h2 class="page-title small-title">Tabelas de consulta</h2><p class="section-help">Dados complementares estruturados para leitura e pesquisa.</p></div></div><div class="data-table-grid">' + tables.map(table => {
      const columns = table.columns || [];
      const rows = table.rows || [];
      return '<article class="data-table-card"><div class="data-table-head"><div><h3>' + esc(table.title || 'Tabela') + '</h3>' + (table.description ? '<p>' + esc(table.description) + '</p>' : '') + '</div>' + (table.page ? '<span class="source-badge">' + esc(table.sourceTitle || entity?.source?.title || 'Livro do Jogador') + ' · p. ' + esc(table.page) + '</span>' : '') + '</div><div class="data-table-wrap" tabindex="0"><table class="data-table"><caption>' + esc(table.title || 'Tabela') + '</caption><thead><tr>' + columns.map(column => '<th scope="col">' + esc(column.label || column.key) + '</th>').join('') + '</tr></thead><tbody>' + rows.map(row => '<tr>' + columns.map(column => '<td>' + esc(row[column.key] == null ? '—' : row[column.key]) + '</td>').join('') + '</tr>').join('') + '</tbody></table></div></article>';
    }).join('') + '</div></section>';
  }

  function overviewTab(c, subs, progression, state) {
    const overview = (c.overview || []).length ? '<section class="class-section overview-block"><div class="section-heading"><div><h2 class="page-title small-title">Visão geral</h2><p class="section-help">Identidade, tema e papel narrativo da classe.</p></div></div>' + renderContentSections(c.overview, true) + '</section>' : '<section class="class-section overview-block"><div class="prose">' + formatText(c.desc) + '</div></section>';
    const creation = (c.creation || []).length ? '<section class="class-section overview-block"><div class="section-heading"><div><h2 class="page-title small-title">Criação da classe</h2><p class="section-help">Orientações para conceito e construção rápida.</p></div></div>' + renderContentSections(c.creation, true) + '</section>' : '';
    const basics = c.basics ? renderBasicsPanel(c) : '';
    const progressionHtml = progression ? renderProgressionTable(c, progression, state.level) : '';
    const featuresHtml = (c.features || []).length ? featuresTab(c, state.level) : '';
    const subclassesHtml = subs.length ? subclassesTab(c, subs, state.level) : '';
    return '<div class="complete-overview">' + overview + basics + creation + progressionHtml + featuresHtml + subclassesHtml + '</div>';
  }

  function featuresTab(c, selectedLevel) {
    const filtered = sectionsAtLevel(c.features || [], selectedLevel);
    const groupId = 'classFeatures-' + c.id;
    return '<section class="class-section"><div class="section-heading"><div><h2 class="page-title small-title">Características de classe</h2><p class="section-help">' + (selectedLevel ? 'Somente características disponíveis até o nível ' + selectedLevel + '.' : 'Progressão completa do 1º ao 20º nível.') + '</p></div>' + detailGroupTools(groupId) + '</div>' +
      sectionLevelSummary(c.features || [], selectedLevel) +
      (filtered.length ? renderFeatureSections(filtered, c.color, groupId, c.source?.title || 'Livro do Jogador') : '<div class="empty"><b>Nenhuma característica disponível</b>Selecione um nível superior para consultar novas características.</div>') +
    '</section>';
  }

  function subclassesTab(c, subs, selectedLevel) {
    const subclassIntro = (c.references || []).find(x => x.kind === 'subclassIntro');
    return '<section class="class-section"><div class="section-heading"><div><h2 class="page-title small-title">Subclasses</h2><p class="section-help">' + subs.length + ' opções disponíveis para esta classe.</p></div></div>' +
      (subclassIntro ? '<div class="content-panel subclass-group-intro"><div class="panel-head"><h3>' + esc(subclassIntro.title) + '</h3>' + sourceBadge(subclassIntro.page, subclassIntro.sourceTitle || c.source?.title || 'Livro do Jogador') + '</div><div class="prose">' + formatRichText(subclassIntro.text) + '</div></div>' : '') +
      '<div class="subclass-card-grid">' + subs.map(s => {
        const acquired = selectedLevel ? sectionsAtLevel(s.features || [], selectedLevel).filter(x => x._effectiveLevel).length : (s.features || []).length;
        const firstLevel = effectiveLevelSections(s.features || []).find(x => x._effectiveLevel)?._effectiveLevel || null;
        const unavailable = selectedLevel && firstLevel && selectedLevel < firstLevel;
        return '<article class="subclass-card ' + (unavailable ? 'unavailable-card' : '') + '" style="--card-color:' + attr(c.color) + '" onclick="navigate(\'subclass\',\'' + attr(s.id) + '\')"><div class="subclass-card-top"><span class="mini-sigil" style="color:' + attr(c.color) + '">' + sigil(c.sigilKey || 'book') + '</span><div><h3>' + esc(s.name) + '</h3>' + sourceBadge(s.sourcePage, s.source?.title || c.source?.title || 'Livro do Jogador') + '</div></div><p>' + esc(cleanExcerpt(s.desc, 180)) + '</p><div class="subclass-card-meta">' + (unavailable ? 'Disponível a partir do nível ' + firstLevel : acquired + ' características ' + (selectedLevel ? 'disponíveis' : 'catalogadas')) + '</div><span class="read-link">Consultar subclasse →</span></article>';
      }).join('') + '</div></section>';
  }

  function referencesTab(c) {
    const refs = (c.references || []).filter(x => x.kind !== 'subclassIntro');
    if (!refs.length) return '<div class="empty"><b>Nenhuma referência complementar</b>Esta classe não possui listas adicionais catalogadas.</div>';
    return renderReferences(c, refs);
  }

  function classTabContent(c, subs, progression, state) {
    switch (state.tab) {
      case 'progression': return renderProgressionTable(c, progression, state.level);
      case 'features': return featuresTab(c, state.level);
      case 'subclasses': return subclassesTab(c, subs, state.level);
      case 'tables': return renderStructuredTables(c);
      case 'references': return referencesTab(c);
      default: return overviewTab(c, subs, progression, state);
    }
  }

  viewClass = function (id) {
    const c = getClass(id);
    if (!c) return notFound('classe');
    const subs = subclassesOf(id);
    const progression = typeof getClassProgression === 'function' ? getClassProgression(id) : null;
    const state = stateFor(id, 'class');
    const tabs = [
      {id:'overview',label:'Visão geral'},
      {id:'progression',label:'Progressão',count:progression?.rows?.length || 0},
      {id:'features',label:'Características',count:(c.features || []).length},
      {id:'subclasses',label:'Subclasses',count:subs.length},
      {id:'tables',label:'Tabelas',count:(c.tables || []).length},
      {id:'references',label:'Referências',count:(c.references || []).filter(x => x.kind !== 'subclassIntro').length}
    ].filter(tab => tab.id !== 'progression' || progression).filter(tab => !['tables','references'].includes(tab.id) || tab.count);

    const selectedRow = state.level && progression ? progression.rows.find(row => row.level === state.level) : null;
    const contentLabel = selectedRow ? 'Nível ' + state.level + ' · ' + selectedRow.proficiency : (progression ? 'Progressão do 1º ao 20º nível' : 'Classe personalizada');
    const topStats = '<div class="stat-grid class-stat-grid"><div class="stat-cell"><div class="k">Dado de vida</div><div class="v">' + esc(c.hitDie || '—') + '</div></div><div class="stat-cell"><div class="k">Habilidade principal</div><div class="v">' + esc(c.ability || '—') + '</div></div><div class="stat-cell"><div class="k">Resistências</div><div class="v">' + esc(c.saves || '—') + '</div></div><div class="stat-cell"><div class="k">Consulta atual</div><div class="v">' + esc(contentLabel) + '</div></div></div>';

    return '<div class="breadcrumb"><a onclick="navigate(\'classes\')" style="cursor:pointer">Classes</a><span>/</span><span>' + esc(c.name) + '</span></div>' +
      '<header class="class-hero"><div class="detail-header"><div class="detail-sigil" style="--sigil-bg:' + attr(c.color) + '22;--sigil-color:' + attr(c.color) + '">' + sigil(c.sigilKey || 'book') + '</div><div><div class="eyebrow class-type-label"><span class="dot"></span>Classe</div><h1 class="page-title" style="margin-bottom:0">' + esc(c.name) + '</h1></div>' + foundryClassHeaderActions('class', id, subs.length) + '</div>' + classSourceLine(c) + topStats + '</header>' +
      consultationToolbar(id, state, tabs, !!progression, 'class') +
      '<div id="consultation-content" class="consultation-content" tabindex="-1">' + classTabContent(c, subs, progression, state) + '</div>';
  };

  function subclassProgressionRows(s) {
    const grouped = new Map();
    effectiveLevelSections(s.features || []).forEach(feature => {
      const level = Number(feature._effectiveLevel || feature.level);
      if (!Number.isFinite(level) || level <= 0) return;
      if (!grouped.has(level)) grouped.set(level, []);
      grouped.get(level).push(feature.title || feature.name || 'Característica');
    });
    return [...grouped.entries()].sort((a,b) => a[0] - b[0]).map(([level, features]) => ({level, features}));
  }

  function subclassProgressionTable(s, c, selectedLevel) {
    const rows = subclassProgressionRows(s);
    if (!rows.length) return '<div class="empty"><b>Progressão não cadastrada</b>Esta subclasse ainda não possui características com nível definido.</div>';
    const body = rows.map(row => {
      const selected = selectedLevel && row.level === selectedLevel;
      const future = selectedLevel && row.level > selectedLevel;
      const acquired = selectedLevel && row.level < selectedLevel;
      return '<tr class="' + (selected ? 'selected-level ' : '') + (future ? 'future-level ' : '') + (acquired ? 'acquired-level' : '') + '" data-level="' + row.level + '">' +
        '<td class="sticky-column"><strong>' + row.level + 'º</strong></td>' +
        '<td class="wide-column"><div class="progression-features">' + row.features.map(item => featureLink(s, item, row.level, 'subclass')).join('') + '</div></td>' +
      '</tr>';
    }).join('');
    const sourceTitle = s.source?.title || c?.source?.title || 'Livro do Jogador';
    const sourcePage = s.source?.pages || s.sourcePage || '';
    return '<section class="progression-card real-progression-table subclass-progression-table">' +
      '<div class="section-title-row"><div><div class="eyebrow"><span class="dot"></span>Progressão da subclasse</div><h2 class="page-title small-title">' + esc(s.name) + '</h2></div><span class="source-badge">' + esc(sourceTitle) + (sourcePage ? ' · p. ' + esc(sourcePage) : '') + '</span></div>' +
      '<div class="progression-table-wrap" tabindex="0" aria-label="Tabela de progressão da subclasse ' + attr(s.name) + '"><table class="progression-table"><caption>Progressão da subclasse ' + esc(s.name) + '</caption><thead><tr><th scope="col" class="sticky-column">Nível</th><th scope="col" class="wide-column">Características da subclasse</th></tr></thead><tbody>' + body + '</tbody></table></div>' +
      '<p class="table-help">A tabela mostra apenas os níveis em que a subclasse concede características. Clique em uma característica para ir até sua regra sem aplicar filtros ou ocultar as demais.</p>' +
    '</section>';
  }

  function supplementalSubclassTables(s) {
    return (s.tables || []).filter(table => !/^progress[aã]o\b/i.test(String(table.title || '').trim()));
  }

  function subclassOverview(s, c, selectedLevel) {
    const firstLevel = effectiveLevelSections(s.features || []).find(x => x._effectiveLevel)?._effectiveLevel;
    const availability = selectedLevel && firstLevel ? '<div class="availability-note ' + (selectedLevel < firstLevel ? 'warning' : 'ok') + '">' + (selectedLevel < firstLevel ? 'Esta subclasse começa no nível ' + firstLevel + '. No nível ' + selectedLevel + ', suas características ainda não estão disponíveis.' : 'As características obtidas até o nível ' + selectedLevel + ' aparecem abaixo.') + '</div>' : '';
    const ownProgression = subclassProgressionTable(s, c, selectedLevel);
    const featureContent = (s.features || []).length ? subclassFeatures(s, c, selectedLevel) : '';
    const extraTables = supplementalSubclassTables(s);
    const tableContent = extraTables.length ? renderStructuredTables({...s, tables:extraTables}) : '';
    const referenceContent = (s.references || []).length ? '<section class="class-section subclass-reference-section"><div class="section-heading"><div><h2 class="page-title small-title">Informações da subclasse</h2><p class="section-help">Preceitos, compulsões, relíquias e outras regras sem nível próprio preservadas da fonte.</p></div></div>' + renderContentSections(s.references, true) + '</section>' : '';
    return '<div class="complete-overview subclass-complete-overview"><div class="content-panel subclass-intro" style="--card-color:' + attr(c?.color || '#9d465b') + '"><div class="prose lead-prose">' + formatRichText(s.desc) + '</div></div>' + referenceContent + availability + ownProgression + featureContent + tableContent + '</div>';
  }

  function subclassFeatures(s, c, selectedLevel) {
    const filtered = sectionsAtLevel(s.features || [], selectedLevel);
    const groupId = 'subclassFeatures-' + s.id;
    return '<section class="class-section"><div class="section-heading"><div><h2 class="page-title small-title">Características da subclasse</h2><p class="section-help">' + (selectedLevel ? 'Características disponíveis até o nível ' + selectedLevel + '.' : 'Progressão completa da subclasse.') + '</p></div>' + detailGroupTools(groupId) + '</div>' +
      sectionLevelSummary(s.features || [], selectedLevel) +
      (filtered.length ? renderFeatureSections(filtered, c?.color || '#9d465b', groupId, s.source?.title || c?.source?.title || 'Livro do Jogador') : '<div class="empty"><b>Nenhuma característica disponível</b>Selecione um nível em que esta subclasse já tenha sido escolhida.</div>') + '</section>';
  }

  viewSubclass = function (id) {
    const s = getSubclass(id);
    if (!s) return notFound('subclasse');
    const c = getClass(s.classId);
    const parentName = c?.name || s.parentClassName || s.classId || 'Classe-base não integrada';
    const parentColor = c?.color || '#9d465b';
    const parentSigil = c?.sigilKey || 'book';
    const classState = c ? stateFor(c.id, 'class') : {level:null};
    const ownState = stateFor(id, 'subclass');
    if (!consultationState[id] && classState.level) ownState.level = classState.level;
    const extraTables = supplementalSubclassTables(s);
    const progressionRows = subclassProgressionRows(s);
    const tabs = [{id:'overview',label:'Visão geral'},{id:'progression',label:'Progressão',count:progressionRows.length},{id:'features',label:'Características',count:(s.features || []).length},{id:'tables',label:'Tabelas',count:extraTables.length}].filter(tab => tab.id !== 'tables' || tab.count);
    const levels = [...new Set(effectiveLevelSections(s.features || []).map(f => f._effectiveLevel).filter(Boolean))];
    const levelSummary = levels.length ? '<div class="level-strip"><span>Características nos níveis</span>' + levels.map(level => '<b>' + esc(level) + '</b>').join('') + '</div>' : '';
    const parentCrumb = c ? '<a onclick="navigate(\'class\',\'' + attr(c.id) + '\')" style="cursor:pointer">' + esc(parentName) + '</a>' : '<span>' + esc(parentName) + '</span>';
    const pendingParentLine = (!c && s.pendingParent) ? '<div class="source-line class-source-line secondary-source-line"><span>Classe-base</span><span>' + esc(parentName) + (s.parentSource ? ' · ' + esc(s.parentSource) : '') + ' · ainda não integrada ao Grimório</span></div>' : '';

    return '<div class="breadcrumb"><a onclick="navigate(\'classes\')" style="cursor:pointer">Classes</a><span>/</span>' + parentCrumb + '<span>/</span><span>' + esc(s.name) + '</span></div>' +
      '<header class="class-hero subclass-hero"><div class="detail-header"><div class="detail-sigil" style="--sigil-bg:' + attr(parentColor) + '22;--sigil-color:' + attr(parentColor) + '">' + sigil(parentSigil) + '</div><div><div class="eyebrow class-type-label"><span class="dot"></span>Subclasse de ' + esc(parentName) + '</div><h1 class="page-title" style="margin-bottom:0">' + esc(s.name) + '</h1>' + ((s.aliases||[]).length ? '<div class="spell-original-title">Também conhecida como: ' + esc(s.aliases.join(', ')) + '</div>' : '') + '</div>' + foundryClassHeaderActions('subclass', id) + '</div><div class="source-line class-source-line"><span>' + esc(s.source?.title || c?.source?.title || 'Livro do Jogador') + '</span>' + ((s.source?.pages || s.sourcePage) ? '<span>p. ' + esc(s.source?.pages || s.sourcePage) + '</span>' : '') + '</div>' + pendingParentLine + ((s.otherSources||[]).length ? '<div class="source-line class-source-line secondary-source-line"><span>Outras fontes</span><span>' + (s.otherSources||[]).map(x=>esc(x.title||'Outra fonte') + (x.pages?' · p. '+esc(x.pages):'')).join(' · ') + '</span></div>' : '') + levelSummary + '</header>' +
      consultationToolbar(id, ownState, tabs, true, 'subclass') +
      '<div id="consultation-content" class="consultation-content" tabindex="-1">' + (ownState.tab === 'progression' ? subclassProgressionTable(s, c, ownState.level) : ownState.tab === 'features' ? subclassFeatures(s, c, ownState.level) : ownState.tab === 'tables' ? renderStructuredTables({...s, tables:extraTables}) : subclassOverview(s, c, ownState.level)) + '</div>';
  };

  // Atualiza a página Sobre para refletir a estrutura em pasta e a nova versão.
  viewAbout = function () {
    return '<div class="eyebrow"><span class="dot"></span>Sobre o projeto</div><h1 class="page-title">Grimório ' + APP_VERSION + '</h1><p class="lede">Aplicação local organizada em arquivos de interface, lógica e dados. As fontes e catálogos são registrados declarativamente, permitindo incorporar novos livros sem alterar a lógica central da aplicação.</p>' + registeredSourceAboutCards() + '<div class="license-card"><strong>Armazenamento local</strong><p>O projeto não envia suas classes, magias, notas ou favoritos a um servidor. Conteúdos próprios, favoritos e notas permanecem armazenados localmente neste navegador.</p></div>';
  };

  render();
})();
