'use strict';

/*
 * Camada de apresentação v2.
 * Mantém os dados originais intactos e corrige a leitura de textos extraídos do PDF.
 */

const BOOK_CONNECTOR_RE = /\b(?:de|do|da|dos|das|em|com|por|para|e|ou|que|como|contra|até|sem|sob|sobre|entre|seu|sua|seus|suas|um|uma|ao|aos|à|às|pelo|pela|pelos|pelas|modificador de)$/i;
const BOOK_HEADING_RE = /^[A-ZÁÉÍÓÚÂÊÔÃÕÇ0-9][A-ZÁÉÍÓÚÂÊÔÃÕÇ0-9\s,–—:()'’/-]{2,80}$/;
const RULE_LABELS = [
  'Dado de Vida', 'Pontos de Vida no 1° Nível', 'Pontos de Vida no 1º Nível',
  'Pontos de Vida nos Níveis Seguintes', 'Armaduras', 'Armas', 'Ferramentas',
  'Testes de Resistência', 'Perícias', 'Truques Conhecidos', 'Magias Conhecidas',
  'Espaços de Magia', 'Habilidade de Conjuração', 'Foco de Conjuração'
];

function normalizeBookText(value) {
  let text = String(value || '')
    .replace(/\r/g, '')
    .replace(/[\u00ad\u200b\ufeff]/g, '')
    .replace(/([A-Za-zÀ-ÿ])-\s*\n+\s*([A-Za-zÀ-ÿ])/g, '$1-$2')
    .replace(/[ \t]+\n/g, '\n')
    .replace(/\n[ \t]+/g, '\n')
    .replace(/[ \t]{2,}/g, ' ')
    .trim();

  if (!text) return '';

  const blocks = text.split(/\n{2,}/).map(x => x.trim()).filter(Boolean);
  const out = [];

  for (const block of blocks) {
    if (!out.length) {
      out.push(block);
      continue;
    }

    const previous = out[out.length - 1];
    const startsLower = /^[a-zà-ÿ]/.test(block);
    const previousConnector = BOOK_CONNECTOR_RE.test(previous.trim());
    const previousOpen = /[,;:(–—-]$/.test(previous.trim());
    const previousBullet = previous.trim().startsWith('•');
    const currentBullet = block.startsWith('•');
    const currentHeading = BOOK_HEADING_RE.test(block) && !block.includes('•');
    const previousEndsSentence = /[.!?…:”’)]$/.test(previous.trim());

    if (!currentHeading && !currentBullet && (
      startsLower || previousConnector || previousOpen || (previousBullet && !previousEndsSentence)
    )) {
      out[out.length - 1] = previous.replace(/\s+$/, '') + ' ' + block.replace(/^\s+/, '');
    } else {
      out.push(block);
    }
  }

  return out.join('\n\n')
    .replace(/\s+([,.;:!?])/g, '$1')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

function cleanExcerpt(value, limit = 150) {
  const clean = normalizeBookText(value).replace(/\s+/g, ' ').trim();
  if (clean.length <= limit) return clean;
  const cut = clean.slice(0, limit + 1);
  const boundary = cut.lastIndexOf(' ');
  return (boundary > limit * .7 ? cut.slice(0, boundary) : clean.slice(0, limit)).trim() + '…';
}

function emphasizeRuleLabels(text) {
  let html = esc(text);
  for (const label of RULE_LABELS) {
    const pattern = new RegExp('(^|\\s)(' + label.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '):', 'gi');
    html = html.replace(pattern, '$1<strong class="rule-label">$2:</strong>');
  }
  return html;
}

formatRichText = function(value) {
  const normalized = normalizeBookText(value);
  if (!normalized) return '<p>Sem descrição.</p>';

  const blocks = normalized.split(/\n{2,}/).map(x => x.trim()).filter(Boolean);
  const html = [];
  let list = [];

  const flushList = () => {
    if (!list.length) return;
    html.push('<ul class="book-list">' + list.map(item => '<li>' + emphasizeRuleLabels(item) + '</li>').join('') + '</ul>');
    list = [];
  };

  for (const block of blocks) {
    if (block.startsWith('•')) {
      list.push(block.replace(/^•\s*/, '').replace(/\n/g, ' '));
      continue;
    }

    flushList();

    if (BOOK_HEADING_RE.test(block) && block.length < 90) {
      html.push('<h4 class="book-subheading">' + esc(block) + '</h4>');
      continue;
    }

    const withInlineBullets = block.split(/\n(?=•\s*)/);
    if (withInlineBullets.length > 1) {
      const intro = withInlineBullets.shift().trim();
      if (intro) html.push('<p>' + emphasizeRuleLabels(intro.replace(/\n/g, ' ')) + '</p>');
      list.push(...withInlineBullets.map(x => x.replace(/^•\s*/, '').replace(/\n/g, ' ')));
      flushList();
      continue;
    }

    html.push('<p>' + emphasizeRuleLabels(block.replace(/\n/g, ' ')) + '</p>');
  }

  flushList();
  return html.join('');
};

function extractBetween(flat, start, ends) {
  const startIndex = flat.search(start);
  if (startIndex < 0) return '';
  const matched = flat.slice(startIndex).match(start);
  if (!matched) return '';
  const contentStart = startIndex + matched[0].length;
  let contentEnd = flat.length;
  for (const end of ends) {
    const relative = flat.slice(contentStart).search(end);
    if (relative >= 0) contentEnd = Math.min(contentEnd, contentStart + relative);
  }
  return flat.slice(contentStart, contentEnd).trim();
}

function classBasicsData(c) {
  const flat = normalizeBookText(c.basics?.text || '').replace(/\n+/g, ' ').replace(/\s{2,}/g, ' ');
  return {
    hitDie: extractBetween(flat, /Dado de Vida:\s*/i, [/Pontos de Vida no 1[°º]\s*Nível:/i]),
    hp1: extractBetween(flat, /Pontos de Vida no 1[°º]\s*Nível:\s*/i, [/Pontos de Vida (?:nos Níveis Seguintes|em níveis superiores):/i]),
    hpNext: extractBetween(flat, /Pontos de Vida (?:nos Níveis Seguintes|em níveis superiores):\s*/i, [/PROFICIÊNCIAS/i]),
    equipment: extractBetween(flat, /EQUIPAMENTO\s*/i, [])
  };
}

function definitionRow(label, value) {
  return '<div class="definition-row"><dt>' + esc(label) + '</dt><dd>' + esc(value || '—') + '</dd></div>';
}

function renderBasicsPanel(c) {
  const data = classBasicsData(c);
  const equipmentText = (data.equipment || 'Consulte a descrição original da classe.').replace(/\s*•\s*/g, '\n\n• ');
  return '<section class="class-section anchor-section" id="fundamentos">' +
    '<div class="section-heading"><div><div class="eyebrow"><span class="dot"></span>Consulta rápida</div><h2 class="page-title small-title">Fundamentos da classe</h2></div>' + sourceBadge(c.basics?.page) + '</div>' +
    '<div class="rules-grid">' +
      '<article class="rule-card"><h3>Pontos de vida</h3><dl>' +
        definitionRow('Dado de Vida', data.hitDie || c.hitDie) +
        definitionRow('1º nível', data.hp1) +
        definitionRow('Níveis seguintes', data.hpNext) +
      '</dl></article>' +
      '<article class="rule-card"><h3>Proficiências</h3><dl>' +
        definitionRow('Armaduras', c.armor) +
        definitionRow('Armas', c.weapons) +
        definitionRow('Ferramentas', c.tools) +
        definitionRow('Resistências', c.saves) +
        definitionRow('Perícias', c.skills) +
      '</dl></article>' +
      '<article class="rule-card rule-card-wide"><h3>Equipamento inicial</h3><div class="prose compact-prose">' + formatRichText(equipmentText) + '</div></article>' +
    '</div></section>';
}

function renderD100Table(value) {
  const flat = normalizeBookText(value).replace(/\s+/g, ' ').replace(/^d100\s+Efeito\s*/i, '').trim();
  const matches = [...flat.matchAll(/(?:^|\s)(\d{2}–\d{2})\s/g)];
  if (matches.length < 5) return formatRichText(value);
  const rows = matches.map((match, index) => {
    const start = match.index + match[0].length;
    const end = index + 1 < matches.length ? matches[index + 1].index : flat.length;
    return { roll: match[1], effect: flat.slice(start, end).trim() };
  });
  return '<div class="rule-table-wrap"><table class="rule-table"><thead><tr><th>d100</th><th>Efeito</th></tr></thead><tbody>' + rows.map(row => '<tr><td>' + esc(row.roll) + '</td><td>' + esc(row.effect) + '</td></tr>').join('') + '</tbody></table></div>';
}

function renderRuleBody(section) {
  if (/^d100\s+Efeito/i.test(normalizeBookText(section?.text || ''))) return renderD100Table(section.text);
  return formatRichText(section?.text);
}

function featureAnchorId(groupId, section) {
  const rawTitle = section?.title || section?.name || 'Característica';
  const level = Number(section?._effectiveLevel || section?.level) || 0;
  return String(groupId || 'featureGroup') + '-' + slugify(rawTitle) + '-nivel-' + (level || 'geral');
}

renderFeatureSections = function(sections, color, groupId = 'featureGroup', sourceTitle = 'Livro do Jogador') {
  const list = sections || [];
  const titleCounts = list.reduce((counts, section) => {
    const key = String(section.title || section.name || 'Característica').toLocaleLowerCase('pt-BR');
    counts[key] = (counts[key] || 0) + 1;
    return counts;
  }, {});
  const anchorCounts = {};
  return '<div class="feature-accordion" id="' + attr(groupId) + '" style="--card-color:' + attr(color || '#c9a55c') + '">' +
    list.map(section => {
      const rawTitle = section.title || section.name || 'Característica';
      const duplicate = titleCounts[String(rawTitle).toLocaleLowerCase('pt-BR')] > 1;
      const tableLike = /^d100\s+Efeito/i.test(normalizeBookText(section.text || ''));
      const displayTitle = duplicate && tableLike ? 'Tabela: ' + rawTitle : rawTitle;
      const anchorBase = featureAnchorId(groupId, section);
      const occurrence = anchorCounts[anchorBase] || 0;
      anchorCounts[anchorBase] = occurrence + 1;
      const anchor = occurrence ? anchorBase + '-' + (occurrence + 1) : anchorBase;
      return '<details id="' + attr(anchor) + '" class="feature feature-detail feature-anchor' + (tableLike ? ' table-feature' : '') + '" data-feature-title="' + attr(rawTitle) + '" data-feature-level="' + attr(section._effectiveLevel || section.level || '') + '"><summary><div class="feature-summary-copy"><h4>' + esc(displayTitle) + '</h4>' + levelBadge(section.level, section.page, section.sourceTitle || sourceTitle) + '</div><span class="chevron" aria-hidden="true">⌄</span></summary><div class="prose detail-body">' + renderRuleBody(section) + '</div></details>';
    }).join('') +
  '</div>';
};

function detailGroupTools(groupId) {
  return '<div class="detail-group-tools"><button onclick="setDetailGroup(\'' + attr(groupId) + '\',true)">Expandir tudo</button><button onclick="setDetailGroup(\'' + attr(groupId) + '\',false)">Recolher tudo</button></div>';
}

window.setDetailGroup = function(groupId, open) {
  document.querySelectorAll('#' + CSS.escape(groupId) + ' details').forEach(detail => { detail.open = open; });
};

progressionCard = function() { return ''; };

function classToc(items) {
  return '<aside class="page-toc"><div class="page-toc-title">Nesta página</div>' + items.map(item => '<a href="#' + attr(item.id) + '" onclick="document.getElementById(\'' + attr(item.id) + '\')?.scrollIntoView({behavior:\'smooth\',block:\'start\'});return false">' + esc(item.label) + '</a>').join('') + '</aside>';
}

function classSourceLine(c) {
  if (!c.source) return '';
  return '<div class="source-line class-source-line"><span>' + esc(c.source.title) + '</span><span>' + esc(c.source.chapter) + '</span><span>p. ' + esc(c.source.pages) + '</span></div>';
}

renderNav = function() {
  const nav = document.getElementById('navContent');
  const activeSubclass = route.view === 'subclass' ? getSubclass(route.id) : null;
  const activeClassId = route.view === 'class' ? route.id : activeSubclass?.classId;
  let html = '<div class="nav-section"><div class="nav-title">Início</div><a class="nav-item ' + (route.view === 'home' ? 'active' : '') + '" onclick="navigate(\'home\')" style="cursor:pointer"><svg class="nav-sigil" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 11l9-8 9 8M5 10v10h14V10"/></svg>Painel</a></div>';
  html += '<div class="nav-section"><div class="nav-title">Classes <span class="count">' + allClasses().length + '</span></div>';

  allClasses().forEach(c => {
    const active = activeClassId === c.id;
    html += '<a class="nav-item ' + (route.view === 'class' && route.id === c.id ? 'active' : '') + '" style="cursor:pointer;' + (active ? 'color:' + attr(c.color) : '') + '" onclick="navigate(\'class\',\'' + attr(c.id) + '\')"><span class="nav-sigil" style="color:' + attr(c.color) + '">' + sigil(c.sigilKey || 'book') + '</span><span class="nav-label">' + esc(c.name) + '</span><span class="nav-subcount">' + subclassesOf(c.id).length + '</span></a>';
    if (active) {
      subclassesOf(c.id).forEach(s => {
        html += '<a class="nav-item sub ' + (route.view === 'subclass' && route.id === s.id ? 'active' : '') + '" style="cursor:pointer" onclick="navigate(\'subclass\',\'' + attr(s.id) + '\')"><span class="nav-sigil" style="color:' + attr(c.color) + '"></span>' + esc(s.name) + '</a>';
      });
    }
  });

  const pendingParents = allSubclasses().filter(s => s.pendingParent && !getClass(s.classId));
  if (pendingParents.length) {
    html += '</div><div class="nav-section"><div class="nav-title">Subclasses sem classe-base <span class="count">' + pendingParents.length + '</span></div>';
    pendingParents.forEach(s => {
      html += '<a class="nav-item sub ' + (route.view === 'subclass' && route.id === s.id ? 'active' : '') + '" style="cursor:pointer" onclick="navigate(\'subclass\',\'' + attr(s.id) + '\')"><span class="nav-sigil" style="color:#9d465b">' + sigil('book') + '</span><span class="nav-label">' + esc((s.parentClassName || s.classId) + ' · ' + s.name) + '</span></a>';
    });
  }

  html += '</div><div class="nav-section"><div class="nav-title">Magias <span class="count">' + allSpells().length + '</span></div><a class="nav-item ' + (route.view === 'spells' ? 'active' : '') + '" style="cursor:pointer" onclick="navigate(\'spells\')"><svg class="nav-sigil" style="color:var(--arcane)" viewBox="0 0 32 32">' + SIGILS.spell + '</svg>Catálogo de magias</a><a class="nav-item ' + (route.view === 'about' ? 'active' : '') + '" style="cursor:pointer" onclick="navigate(\'about\')"><svg class="nav-sigil" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7h.01"/></svg>Sobre e licença</a></div>';
  nav.innerHTML = html;
};

classCard = function(c) {
  const subs = subclassesOf(c.id);
  const preview = subs.slice(0, 2);
  return '<article class="card class-card" style="--card-color:' + attr(c.color) + '" onclick="navigate(\'class\',\'' + attr(c.id) + '\')" role="button" tabindex="0"><div class="card-top"><div class="card-sigil" style="--sigil-bg:' + attr(c.color) + '22;--sigil-color:' + attr(c.color) + '">' + sigil(c.sigilKey || 'book') + '</div><div><h3>' + esc(c.name) + '</h3><div class="meta">' + esc(c.hitDie || '—') + ' · ' + esc(c.ability || '') + '</div></div></div><p>' + esc(cleanExcerpt(c.desc, 132)) + '</p><div class="class-card-footer"><div class="tag-row">' + preview.map(s => '<span class="tag">' + esc(s.name) + '</span>').join('') + (subs.length > 2 ? '<span class="tag tag-more">+' + (subs.length - 2) + '</span>' : '') + '</div><span class="subclass-count">' + subs.length + ' ' + (subs.length === 1 ? 'subclasse' : 'subclasses') + '</span></div></article>';
};

function renderReferences(c, refs) {
  if (!refs.length) return '';
  if (refs.length <= 8) {
    return '<section class="class-section anchor-section" id="referencias"><div class="section-heading"><div><h2 class="page-title small-title">Referências e opções da classe</h2><p class="section-help">Regras complementares relacionadas à classe.</p></div></div>' + renderContentSections(refs, false) + '</section>';
  }

  const [intro, ...entries] = refs;
  return '<section class="class-section anchor-section" id="referencias"><div class="section-heading"><div><h2 class="page-title small-title">Referências e opções da classe</h2><p class="section-help">' + entries.length + ' opções organizadas para consulta rápida.</p></div></div>' +
    (intro ? '<div class="reference-intro">' + renderContentSections([intro], true) + '</div>' : '') +
    '<div class="reference-grid">' + entries.map(r => '<details class="content-detail reference-detail"><summary><span>' + esc(r.title || 'Opção') + '</span>' + sourceBadge(r.page) + '</summary><div class="prose detail-body">' + formatRichText(r.text) + '</div></details>').join('') + '</div></section>';
}

viewClass = function(id) {
  const c = getClass(id);
  if (!c) return notFound('classe');
  const subs = subclassesOf(id);
  const toc = [];

  const overview = (c.overview || []).length ? '<section class="class-section anchor-section" id="visao-geral"><div class="section-heading"><div><h2 class="page-title small-title">Visão geral</h2><p class="section-help">Identidade, tema e papel narrativo da classe.</p></div></div>' + renderContentSections(c.overview, true) + '</section>' : '<section class="class-section anchor-section" id="visao-geral"><div class="prose">' + formatText(c.desc) + '</div></section>';
  toc.push({ id: 'visao-geral', label: 'Visão geral' });


  const creation = (c.creation || []).length ? '<section class="class-section anchor-section" id="criacao"><div class="section-heading"><div><h2 class="page-title small-title">Criação da classe</h2><p class="section-help">Orientações para conceito e construção rápida.</p></div></div>' + renderContentSections(c.creation, true) + '</section>' : '';
  if (creation) toc.push({ id: 'criacao', label: 'Criação' });

  const basics = c.basics ? renderBasicsPanel(c) : '';
  if (basics) toc.push({ id: 'fundamentos', label: 'Fundamentos' });

  const featureGroupId = 'classFeatures-' + c.id;
  const features = (c.features || []).length ? '<section class="class-section anchor-section" id="caracteristicas"><div class="section-heading"><div><h2 class="page-title small-title">Características de classe</h2><p class="section-help">' + c.features.length + ' características ordenadas por nível.</p></div>' + detailGroupTools(featureGroupId) + '</div>' + renderFeatureSections(c.features, c.color, featureGroupId) + '</section>' : '';
  if (features) toc.push({ id: 'caracteristicas', label: 'Características' });

  const subclassIntro = (c.references || []).find(x => x.kind === 'subclassIntro');
  const subgrid = subs.length ? '<section class="class-section anchor-section" id="subclasses"><div class="section-heading"><div><h2 class="page-title small-title">Subclasses</h2><p class="section-help">' + subs.length + ' opções disponíveis para esta classe.</p></div></div>' + (subclassIntro ? '<div class="content-panel subclass-group-intro"><div class="panel-head"><h3>' + esc(subclassIntro.title) + '</h3>' + sourceBadge(subclassIntro.page) + '</div><div class="prose">' + formatRichText(subclassIntro.text) + '</div></div>' : '') + '<div class="subclass-card-grid">' + subs.map(s => '<article class="subclass-card" style="--card-color:' + attr(c.color) + '" onclick="navigate(\'subclass\',\'' + attr(s.id) + '\')"><div class="subclass-card-top"><span class="mini-sigil" style="color:' + attr(c.color) + '">' + sigil(c.sigilKey || 'book') + '</span><div><h3>' + esc(s.name) + '</h3>' + sourceBadge(s.sourcePage) + '</div></div><p>' + esc(cleanExcerpt(s.desc, 180)) + '</p><span class="read-link">Consultar subclasse →</span></article>').join('') + '</div></section>' : '';
  if (subgrid) toc.push({ id: 'subclasses', label: 'Subclasses' });

  const refs = (c.references || []).filter(x => x.kind !== 'subclassIntro');
  const referenceHtml = renderReferences(c, refs);
  if (referenceHtml) toc.push({ id: 'referencias', label: 'Referências' });

  const topStats = '<div class="stat-grid class-stat-grid"><div class="stat-cell"><div class="k">Dado de vida</div><div class="v">' + esc(c.hitDie || '—') + '</div></div><div class="stat-cell"><div class="k">Habilidade principal</div><div class="v">' + esc(c.ability || '—') + '</div></div><div class="stat-cell"><div class="k">Resistências</div><div class="v">' + esc(c.saves || '—') + '</div></div><div class="stat-cell"><div class="k">Conteúdo</div><div class="v">' + c.features.length + ' características · ' + subs.length + ' subclasses</div></div></div>';

  return '<div class="breadcrumb"><a onclick="navigate(\'classes\')" style="cursor:pointer">Classes</a><span>/</span><span>' + esc(c.name) + '</span></div>' +
    '<header class="class-hero"><div class="detail-header"><div class="detail-sigil" style="--sigil-bg:' + attr(c.color) + '22;--sigil-color:' + attr(c.color) + '">' + sigil(c.sigilKey || 'book') + '</div><div><div class="eyebrow" style="color:' + attr(c.color) + '"><span class="dot"></span>Classe</div><h1 class="page-title" style="margin-bottom:0">' + esc(c.name) + '</h1></div>' + foundryClassHeaderActions('class', id, subs.length) + '</div>' + classSourceLine(c) + topStats + '</header>' +
    '<div class="reader-layout">' + classToc(toc) + '<div class="reader-column">' + overview + progressionCard(c) + creation + basics + features + subgrid + referenceHtml + '</div></div>';
};

viewSubclass = function(id) {
  const s = getSubclass(id);
  if (!s) return notFound('subclasse');
  const c = getClass(s.classId);
  const groupId = 'subclassFeatures-' + s.id;
  const levels = [...new Set((s.features || []).map(f => f.level).filter(Boolean))];
  const levelSummary = levels.length ? '<div class="level-strip"><span>Características nos níveis</span>' + levels.map(level => '<b>' + esc(level) + '</b>').join('') + '</div>' : '';
  const features = (s.features || []).length ? '<section class="class-section"><div class="section-heading"><div><h2 class="page-title small-title">Características da subclasse</h2><p class="section-help">' + s.features.length + ' características em ordem de progressão.</p></div>' + detailGroupTools(groupId) + '</div>' + renderFeatureSections(s.features, c?.color || '#c9a55c', groupId) + '</section>' : '';

  return '<div class="breadcrumb"><a onclick="navigate(\'classes\')" style="cursor:pointer">Classes</a><span>/</span><a onclick="navigate(\'class\',\'' + attr(c?.id || '') + '\')" style="cursor:pointer">' + esc(c?.name || '?') + '</a><span>/</span><span>' + esc(s.name) + '</span></div>' +
    '<header class="class-hero subclass-hero"><div class="detail-header"><div class="detail-sigil" style="--sigil-bg:' + attr(c?.color || '#c9a55c') + '22;--sigil-color:' + attr(c?.color || '#c9a55c') + '">' + sigil(c?.sigilKey || 'book') + '</div><div><div class="eyebrow" style="color:' + attr(c?.color || '#c9a55c') + '"><span class="dot"></span>Subclasse de ' + esc(c?.name || '?') + '</div><h1 class="page-title" style="margin-bottom:0">' + esc(s.name) + '</h1></div>' + foundryClassHeaderActions('subclass', id) + '</div><div class="source-line class-source-line"><span>Livro do Jogador</span>' + (s.sourcePage ? '<span>p. ' + esc(s.sourcePage) + '</span>' : '') + '</div>' + levelSummary + '</header>' +
    '<div class="content-panel subclass-intro" style="--card-color:' + attr(c?.color || '#c9a55c') + '"><div class="prose lead-prose">' + formatRichText(s.desc) + '</div></div>' + features;
};

// Reaplica a interface depois que o app original conclui a inicialização.
render();
