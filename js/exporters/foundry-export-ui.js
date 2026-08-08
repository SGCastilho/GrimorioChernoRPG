'use strict';

// Foundry Export UI — Phase 3
// Adds spell-level and filtered batch export controls without coupling the main app
// to the Foundry exporter implementation.
(function initFoundryExportUI(global) {
  const PROFILE_ID = 'foundry13-dnd5e533-item-importer1391';
  const UI_VERSION = '1.0.0';
  let exportState = null;

  function exporter() {
    return global.GRIMORIO_EXPORT_REGISTRY?.get(PROFILE_ID) || global.GRIMORIO_FOUNDRY_V13 || null;
  }

  function escapeHtml(value) {
    return String(value ?? '').replace(/[&<>'"]/g, ch => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;'
    }[ch]));
  }

  function escapeAttr(value) {
    return escapeHtml(value).replace(/`/g, '&#96;');
  }

  function slug(value) {
    return String(value || 'magias')
      .toLocaleLowerCase('pt-BR')
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '') || 'magias';
  }

  function ensureModalRoot() {
    let root = document.getElementById('foundryExportOverlay');
    if (root) return root;
    root = document.createElement('div');
    root.id = 'foundryExportOverlay';
    root.className = 'foundry-export-overlay';
    root.setAttribute('aria-hidden', 'true');
    root.innerHTML = '<div class="foundry-export-modal" role="dialog" aria-modal="true" aria-labelledby="foundryExportTitle"><button class="foundry-export-close" type="button" aria-label="Fechar" onclick="closeFoundryExport()">×</button><div id="foundryExportContent"></div></div>';
    root.addEventListener('click', event => {
      if (event.target === root) closeFoundryExport();
    });
    document.body.appendChild(root);
    return root;
  }

  function statusLabel(analysis) {
    if (!analysis?.ok) return { key: 'blocked', label: 'Bloqueada', detail: 'A fonte não possui dados suficientes para uma exportação fiel.' };
    if (analysis.reviewRequired) return { key: 'review', label: 'Revisão editorial', detail: 'Exportável, mas há informação incompleta na fonte que será preservada como Especial.' };
    return { key: 'ready', label: 'Pronta', detail: 'A magia passou pela normalização e validação automática.' };
  }

  function issueHtml(analysis) {
    const groups = [
      ['error', 'Bloqueios', analysis?.issues?.errors || []],
      ['warning', 'Revisões', analysis?.issues?.warnings || []],
      ['info', 'Notas de compatibilidade', analysis?.issues?.info || []]
    ].filter(group => group[2].length);
    if (!groups.length) return '<div class="foundry-export-clean">Nenhum alerta de compatibilidade.</div>';
    return groups.map(([kind, title, items]) => '<div class="foundry-issue-group ' + kind + '"><strong>' + escapeHtml(title) + '</strong><ul>' + items.map(item => '<li>' + escapeHtml(item) + '</li>').join('') + '</ul></div>').join('');
  }

  function fieldValue(value, fallback = 'n/a') {
    if (value === undefined || value === null || value === '') return fallback;
    if (typeof value === 'boolean') return value ? 'Sim' : 'Não';
    return String(value);
  }

  function spellPreviewHtml(analysis) {
    const doc = analysis.document;
    const area = doc.area ? `${fieldValue(doc.area.shape)} · ${fieldValue(doc.area.size)} ${fieldValue(doc.area.units)}` : 'Sem área estruturada';
    return '<div class="foundry-preview-grid">' + [
      ['Nível', doc.item.level === 0 ? 'Truque' : `Nível ${doc.item.level}`],
      ['Escola técnica', doc.item.school],
      ['Ativação', `${fieldValue(doc.activation.value)} · ${fieldValue(doc.activation.type)}`],
      ['Alcance', doc.range.units === 'self' || doc.range.units === 'touch' || doc.range.units === 'spec' || doc.range.units === 'any' ? fieldValue(doc.range.units) : `${fieldValue(doc.range.value)} ${fieldValue(doc.range.units)}`],
      ['Duração', doc.duration.value === 'n/a' ? fieldValue(doc.duration.units) : `${fieldValue(doc.duration.value)} ${fieldValue(doc.duration.units)}`],
      ['Concentração', fieldValue(doc.duration.concentration)],
      ['Alvo', `${fieldValue(doc.target.type)} · ${fieldValue(doc.target.count)}`],
      ['Área', area]
    ].map(([key, value]) => '<div class="foundry-preview-cell"><span>' + escapeHtml(key) + '</span><strong>' + escapeHtml(value) + '</strong></div>').join('') + '</div>';
  }

  function profileHtml(profile) {
    return '<div class="foundry-profile"><span class="foundry-profile-dot"></span><div><strong>Perfil homologado</strong><span>' + escapeHtml(profile.label) + '</span></div></div>';
  }

  function actionButtons(disabled, count = 1) {
    const noun = count === 1 ? 'magia' : `${count} magias`;
    return '<div class="foundry-export-actions">' +
      '<button class="action-btn foundry-copy-btn" type="button" onclick="copyFoundryYaml()" ' + (disabled ? 'disabled' : '') + '>Copiar YAML</button>' +
      '<button class="action-btn primary foundry-download-btn" type="button" onclick="downloadFoundryYaml()" ' + (disabled ? 'disabled' : '') + '>Baixar YAML · ' + escapeHtml(noun) + '</button>' +
      '</div>';
  }

  function buildSingleState(spell) {
    const exp = exporter();
    if (!exp?.spell) throw new Error('Perfil de exportação Foundry não está carregado.');
    const analysis = exp.spell.analyze(spell);
    let yaml = '';
    if (analysis.ok) yaml = exp.spell.toYaml(spell).yaml;
    return {
      mode: 'single',
      profile: exp.profile,
      spells: [spell],
      analyses: [analysis],
      exportableSpells: analysis.ok ? [spell] : [],
      yaml,
      filename: `grimorio-${slug(spell.name)}-foundry-v13.yaml`
    };
  }

  function buildBatchState(spells) {
    const exp = exporter();
    if (!exp?.spell) throw new Error('Perfil de exportação Foundry não está carregado.');
    const list = Array.isArray(spells) ? spells : [];
    const report = exp.spell.inspectCatalog(list);
    const exportableSpells = report.analyses.filter(item => item.ok).map(item => item.sourceSpell);
    const yaml = exportableSpells.length ? exp.spell.batchToYaml(exportableSpells).yaml : '';
    return {
      mode: 'batch',
      profile: exp.profile,
      spells: list,
      analyses: report.analyses,
      report,
      exportableSpells,
      yaml,
      filename: `grimorio-magias-filtradas-${exportableSpells.length}-foundry-v13.yaml`
    };
  }

  function renderSingle(state) {
    const spell = state.spells[0];
    const analysis = state.analyses[0];
    const status = statusLabel(analysis);
    return '<div class="foundry-export-eyebrow">Foundry VTT · Exportação de magia</div>' +
      '<h2 id="foundryExportTitle">' + escapeHtml(spell.name) + '</h2>' +
      '<p class="foundry-export-lede">Pré-validação do YAML antes de enviar a magia ao 5e Item Importer.</p>' +
      profileHtml(state.profile) +
      '<div class="foundry-status-card ' + status.key + '"><span class="foundry-status-pill">' + escapeHtml(status.label) + '</span><p>' + escapeHtml(status.detail) + '</p></div>' +
      spellPreviewHtml(analysis) +
      '<section class="foundry-export-section"><h3>Diagnóstico</h3>' + issueHtml(analysis) + '</section>' +
      actionButtons(!analysis.ok, state.exportableSpells.length) +
      (!analysis.ok ? '<p class="foundry-export-footnote">O botão de exportação permanece bloqueado porque completar esta ficha exigiria inventar dados que não existem na fonte.</p>' : '<p class="foundry-export-footnote">O arquivo gerado usa o Strict Spell Template v2 homologado para o seu ambiente.</p>');
  }

  function batchProblemList(analyses, key, limit = 8) {
    const items = analyses.filter(a => key === 'blocked' ? !a.ok : (a.ok && a.reviewRequired));
    if (!items.length) return '';
    const shown = items.slice(0, limit);
    return '<div class="foundry-batch-problems ' + key + '"><strong>' + (key === 'blocked' ? 'Bloqueadas' : 'Com revisão editorial') + '</strong><ul>' + shown.map(item => '<li><span>' + escapeHtml(item.sourceSpell?.name || item.spellId) + '</span><small>' + escapeHtml((key === 'blocked' ? item.issues.errors : item.issues.warnings).join(' · ')) + '</small></li>').join('') + '</ul>' + (items.length > limit ? '<p>+' + (items.length - limit) + ' itens adicionais.</p>' : '') + '</div>';
  }

  function renderBatch(state) {
    const report = state.report;
    const exportable = state.exportableSpells.length;
    return '<div class="foundry-export-eyebrow">Foundry VTT · Exportação em lote</div>' +
      '<h2 id="foundryExportTitle">Magias do filtro atual</h2>' +
      '<p class="foundry-export-lede">O lote inclui todas as magias que correspondem aos filtros atuais, não apenas a página visível.</p>' +
      profileHtml(state.profile) +
      '<div class="foundry-batch-summary">' +
        '<div><strong>' + report.total + '</strong><span>No filtro</span></div>' +
        '<div class="ready"><strong>' + report.ready + '</strong><span>Prontas</span></div>' +
        '<div class="review"><strong>' + report.reviewRequired + '</strong><span>Revisão</span></div>' +
        '<div class="blocked"><strong>' + report.blocked + '</strong><span>Bloqueadas</span></div>' +
      '</div>' +
      (report.blocked ? '<div class="foundry-batch-policy"><strong>Política de lote:</strong> itens bloqueados não entram no YAML. As demais ' + exportable + ' magias são exportadas normalmente.</div>' : '') +
      batchProblemList(report.analyses, 'review') +
      batchProblemList(report.analyses, 'blocked') +
      actionButtons(exportable === 0, exportable) +
      '<p class="foundry-export-footnote">Documentos YAML são separados por <code>---</code>, conforme o formato de lote do 5e Item Importer.</p>';
  }

  function openState(state) {
    exportState = state;
    const root = ensureModalRoot();
    const content = document.getElementById('foundryExportContent');
    content.innerHTML = state.mode === 'single' ? renderSingle(state) : renderBatch(state);
    root.classList.add('open');
    root.setAttribute('aria-hidden', 'false');
    document.body.classList.add('foundry-export-open');
    requestAnimationFrame(() => root.querySelector('.foundry-export-close')?.focus());
  }

  function openSpellExport(spellId) {
    try {
      const spell = typeof getSpell === 'function' ? getSpell(spellId) : null;
      if (!spell) throw new Error('Magia não encontrada no catálogo.');
      openState(buildSingleState(spell));
    } catch (error) {
      console.error(error);
      if (typeof showToast === 'function') showToast(error.message || 'Falha ao preparar exportação Foundry.');
    }
  }

  function openFilteredExport() {
    try {
      const spells = typeof filteredSpells === 'function' ? filteredSpells() : [];
      if (!spells.length) {
        if (typeof showToast === 'function') showToast('Nenhuma magia corresponde ao filtro atual.');
        return;
      }
      openState(buildBatchState(spells));
    } catch (error) {
      console.error(error);
      if (typeof showToast === 'function') showToast(error.message || 'Falha ao preparar o lote Foundry.');
    }
  }

  function closeFoundryExport() {
    const root = document.getElementById('foundryExportOverlay');
    if (!root) return;
    root.classList.remove('open');
    root.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('foundry-export-open');
  }

  async function writeClipboard(text) {
    if (navigator.clipboard?.writeText && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return;
    }
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.setAttribute('readonly', '');
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    const ok = document.execCommand('copy');
    textarea.remove();
    if (!ok) throw new Error('O navegador não permitiu copiar automaticamente.');
  }

  async function copyFoundryYaml() {
    if (!exportState?.yaml) return;
    try {
      await writeClipboard(exportState.yaml);
      if (typeof showToast === 'function') showToast(exportState.exportableSpells.length === 1 ? 'YAML da magia copiado.' : `YAML de ${exportState.exportableSpells.length} magias copiado.`);
    } catch (error) {
      console.error(error);
      if (typeof showToast === 'function') showToast(error.message || 'Não foi possível copiar o YAML.');
    }
  }

  function downloadFoundryYaml() {
    if (!exportState?.yaml) return;
    const blob = new Blob([exportState.yaml], { type: 'text/yaml;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = exportState.filename;
    document.body.appendChild(anchor);
    anchor.click();
    anchor.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    if (typeof showToast === 'function') showToast(exportState.exportableSpells.length === 1 ? 'YAML da magia gerado.' : `Lote com ${exportState.exportableSpells.length} magias gerado.`);
  }

  function exportButtonHtml(spellId) {
    return '<button class="action-btn foundry-export-trigger" type="button" onclick="openFoundrySpellExport(\'' + escapeAttr(spellId) + '\')"><span class="foundry-export-icon" aria-hidden="true">⇩</span> Exportar Foundry</button>';
  }

  function batchToolbarHtml() {
    const count = typeof filteredSpells === 'function' ? filteredSpells().length : 0;
    return '<div class="foundry-batch-toolbar"><div><strong>Foundry VTT</strong><span>Exporte o resultado completo do filtro atual em YAML.</span></div><button class="action-btn foundry-export-trigger" type="button" onclick="openFoundryFilteredExport()" ' + (count ? '' : 'disabled') + '><span class="foundry-export-icon" aria-hidden="true">⇩</span> Exportar filtro atual <b>' + count + '</b></button></div>';
  }

  // Wrap existing renderers instead of editing the main application. This keeps the
  // integration removable and allows future Foundry profiles to have their own UI.
  if (typeof viewSpell === 'function') {
    const baseViewSpell = viewSpell;
    viewSpell = function foundryEnhancedViewSpell(id) {
      const html = baseViewSpell(id);
      if (!html || html.includes('foundry-export-trigger')) return html;
      return html.replace('<div class="detail-actions">', '<div class="detail-actions">' + exportButtonHtml(id));
    };
  }

  if (typeof viewSpellList === 'function') {
    const baseViewSpellList = viewSpellList;
    viewSpellList = function foundryEnhancedSpellList() {
      const html = baseViewSpellList();
      if (!html || html.includes('foundry-batch-toolbar')) return html;
      return html.replace('<div class="results-line">', batchToolbarHtml() + '<div class="results-line">');
    };
  }

  if (typeof document !== 'undefined') {
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && document.getElementById('foundryExportOverlay')?.classList.contains('open')) closeFoundryExport();
    });
  }

  global.openFoundrySpellExport = openSpellExport;
  global.openFoundryFilteredExport = openFilteredExport;
  global.closeFoundryExport = closeFoundryExport;
  global.copyFoundryYaml = copyFoundryYaml;
  global.downloadFoundryYaml = downloadFoundryYaml;
  global.GRIMORIO_FOUNDRY_EXPORT_UI = Object.freeze({ version: UI_VERSION, profileId: PROFILE_ID, buildSingleState, buildBatchState });
})(window);
