'use strict';

// RB-4/RB-8 — prévia, cópia e download do Race Build Bundle v1.
// Esta camada NÃO materializa documentos Foundry e NÃO chama o grimorio-importer.
(function initFoundryRaceExportUI(global) {
  const UI_VERSION = '1.0.0';
  let exportState = null;

  function bundleApi() {
    const api = global.GRIMORIO_FOUNDRY_RACE_BUILD_BUNDLE;
    if (!api) throw new Error('Race Build Bundle v1 não foi carregado.');
    return api;
  }

  function browserApi() {
    const api = global.GRIMORIO_RACE_BROWSER;
    if (!api) throw new Error('Race Browser não foi carregado.');
    return api;
  }

  function esc(value) {
    return String(value ?? '').replace(/[&<>'"]/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[ch]));
  }

  function slug(value) {
    return String(value || 'raca')
      .toLocaleLowerCase('pt-BR')
      .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '') || 'raca';
  }

  function shortHash(value) {
    const text = String(value || '');
    const body = text.includes('-') ? text.slice(text.indexOf('-') + 1) : text;
    return body.slice(0, 8) || 'build';
  }

  function featureCount(bundle) {
    return Object.values(bundle?.resolved?.features || {}).reduce((total, bucket) => total + (Array.isArray(bucket) ? bucket.length : 0), 0);
  }

  function buildFilename(bundle) {
    const race = bundle?.resolved?.primaryRace?.name || bundle?.identity?.primaryRaceId || 'raca';
    const subrace = bundle?.resolved?.subrace?.name || 'base';
    return `grimorio-raca-${slug(race)}-${slug(subrace)}-${shortHash(bundle?.identity?.selectionHash)}-foundry.json`;
  }

  function buildRaceState(raceId) {
    const browser = browserApi();
    const race = browser.getRace?.(raceId);
    if (!race) throw new Error('Raça não encontrada no Grimório.');
    const state = browser.getBuildState?.(raceId) || {};
    const resolution = browser.resolveBuild?.(raceId, state);
    if (!resolution) throw new Error('Não foi possível resolver a construção racial.');

    const api = bundleApi();
    const bundle = api.buildBundle(resolution);
    const validation = api.inspectBundle(bundle);
    const eligible = Boolean(resolution.canExport);
    const ok = eligible && validation.ok && bundle.readiness?.exportEnabled === true;

    const errors = [
      ...(resolution.errors || []).map(item => item?.message || String(item)),
      ...(validation.errors || [])
    ];
    const warnings = (resolution.warnings || []).map(item => item?.message || String(item));
    const pending = (resolution.pending || []).map(item => item?.message || String(item));
    const actorChoices = Array.isArray(resolution.pendingFoundryChoices) ? resolution.pendingFoundryChoices : [];

    return {
      kind: 'race-build',
      raceId,
      race,
      resolution,
      bundle,
      validation,
      eligible,
      ok,
      errors,
      warnings,
      pending,
      actorChoices,
      json: ok ? api.stringify(bundle) : '',
      filename: buildFilename(bundle),
      summary: {
        features: featureCount(bundle),
        legacy: bundle.resolved?.features?.legacy?.length || 0,
        mixed: bundle.resolved?.features?.mixed?.length || 0,
        heritage: (bundle.resolved?.features?.heritage?.length || 0) + (bundle.resolved?.features?.secondaryHeritage?.length || 0),
        actorChoices: actorChoices.length
      }
    };
  }

  function ensureRoot() {
    let root = document.getElementById('foundryRaceExportOverlay');
    if (root) return root;
    root = document.createElement('div');
    root.id = 'foundryRaceExportOverlay';
    root.className = 'foundry-export-overlay foundry-race-export-overlay';
    root.setAttribute('aria-hidden', 'true');
    root.innerHTML = '<div class="foundry-export-modal foundry-race-export-modal" role="dialog" aria-modal="true" aria-labelledby="foundryRaceExportTitle"><button class="foundry-export-close" type="button" aria-label="Fechar" onclick="closeFoundryRaceExport()">×</button><div id="foundryRaceExportContent"></div></div>';
    root.addEventListener('click', event => { if (event.target === root) close(); });
    document.body.appendChild(root);
    return root;
  }

  function profileHtml() {
    const p = bundleApi().profile;
    return '<div class="foundry-profile"><span class="foundry-profile-dot"></span><div><strong>Contrato de transporte</strong><span>'+esc(p.label)+'</span></div></div>';
  }

  function statusFor(state) {
    if (state.ok && state.warnings.length) return ['review','Pronta com observações','A construção está exportável. As observações da fonte são preservadas no bundle e devem ser revisadas quando aplicável.'];
    if (state.ok && (state.pending.length || state.actorChoices.length)) return ['review','Pronta · escolhas posteriores preservadas','O JSON está completo para transporte; escolhas dependentes do Actor serão resolvidas somente quando o Importer ganhar suporte racial.'];
    if (state.ok) return ['ready','Pronta para exportar','Todas as escolhas estruturais exigidas pelo Grimório estão resolvidas e o Race Build Bundle passou pela validação do contrato.'];
    if (!state.eligible) return ['blocked','Construção incompleta','O Grimório ainda precisa de escolhas obrigatórias antes de gerar o Race Build Bundle.'];
    return ['blocked','Exportação bloqueada','O build foi resolvido, mas o contrato JSON não passou pela validação final.'];
  }

  function identityGrid(state) {
    const b = state.bundle;
    const rows = [
      ['Raça dominante', b.resolved?.primaryRace?.name || '—'],
      ['Subraça', b.resolved?.subrace?.name || 'Sem subraça'],
      ['Sangue misto', b.selection?.mixed ? (b.resolved?.secondaryRace?.name || 'Sim') : 'Não'],
      ['Características', state.summary.features],
      ['Selection Hash', b.identity?.selectionHash || '—'],
      ['Content Hash', b.identity?.contentHash || '—']
    ];
    return '<div class="foundry-preview-grid foundry-race-preview-grid">'+rows.map(([label,value])=>'<div class="foundry-preview-cell"><span>'+esc(label)+'</span><strong>'+esc(value)+'</strong></div>').join('')+'</div>';
  }

  function featureGroups(bundle) {
    const defs = [
      ['core','Traços fixos'],['subrace','Subraça'],['legacy','Traços de Legado'],['mixed','Sangue Misto'],
      ['heritage','Herança'],['secondaryHeritage','Herança secundária'],['bloodline','Bloodline'],
      ['extraLegacy','Legados adicionais'],['mutations','Mutações'],['automaticSecondary','Automáticos da secundária']
    ];
    const groups = defs.map(([key,label]) => {
      const items = Array.isArray(bundle.resolved?.features?.[key]) ? bundle.resolved.features[key] : [];
      if (!items.length) return '';
      return '<div class="foundry-race-feature-group"><strong>'+esc(label)+' <span>'+items.length+'</span></strong><div>'+items.map(item=>'<span title="'+esc(item.originalName || '')+'">'+esc(item.name || item.originalName || item.key)+'</span>').join('')+'</div></div>';
    }).filter(Boolean);
    return groups.length ? groups.join('') : '<div class="foundry-export-clean">Nenhuma característica adicional foi resolvida.</div>';
  }

  function issueGroup(kind, title, items) {
    if (!items?.length) return '';
    return '<div class="foundry-issue-group '+kind+'"><strong>'+esc(title)+'</strong><ul>'+items.map(item=>'<li>'+esc(item)+'</li>').join('')+'</ul></div>';
  }

  function actorChoiceHtml(state) {
    if (!state.actorChoices.length) return '<div class="foundry-export-clean">Nenhuma escolha dependente do Actor foi detectada.</div>';
    return '<div class="foundry-race-actor-choices"><strong>Serão resolvidas no Foundry em fase posterior</strong><ul>'+state.actorChoices.map(choice => {
      const label = choice?.label || choice?.name || choice?.message || choice?.traitName || choice?.kind || JSON.stringify(choice);
      return '<li>'+esc(label)+'</li>';
    }).join('')+'</ul></div>';
  }

  function actionButtons(state) {
    return '<div class="foundry-export-actions">'+
      '<button class="action-btn foundry-copy-btn" type="button" onclick="copyFoundryRaceJson()" '+(!state.ok?'disabled':'')+'>Copiar JSON</button>'+
      '<button class="action-btn primary foundry-download-btn" type="button" onclick="downloadFoundryRaceJson()" '+(!state.ok?'disabled':'')+'>Baixar JSON · Race Build</button>'+
      '</div>';
  }

  function renderState(state) {
    const status = statusFor(state);
    const b = state.bundle;
    return '<div class="foundry-export-eyebrow">Foundry VTT · RB-8 · Race Build Bundle v1</div>'+
      '<h2 id="foundryRaceExportTitle">'+esc(b.resolved?.primaryRace?.name || state.race.name)+(b.resolved?.subrace?.name?' — '+esc(b.resolved.subrace.name):'')+'</h2>'+
      '<p class="foundry-export-lede">Prévia do JSON declarativo produzido pelo Grimório. O Grimório Importer 0.13.0-beta.1 valida este arquivo, materializa a Raça e suas Características Raciais e pode aplicá-lo diretamente a um Actor character pelo workflow de Advancements do DnD5e.</p>'+
      profileHtml()+
      '<div class="foundry-status-card '+status[0]+'"><span class="foundry-status-pill">'+esc(status[1])+'</span><p>'+esc(status[2])+'</p></div>'+
      identityGrid(state)+
      '<section class="foundry-export-section"><h3>Composição racial resolvida</h3><div class="foundry-race-feature-groups">'+featureGroups(b)+'</div></section>'+
      '<section class="foundry-export-section"><h3>Escolhas dependentes do Actor</h3>'+actorChoiceHtml(state)+'</section>'+
      '<section class="foundry-export-section"><h3>Diagnóstico do contrato</h3>'+
        issueGroup('error','Bloqueios',state.errors)+
        issueGroup('warning','Observações da fonte',state.warnings)+
        issueGroup('info','Pendências previstas',state.pending)+
        (!state.errors.length&&!state.warnings.length&&!state.pending.length?'<div class="foundry-export-clean">Nenhum alerta estrutural.</div>':'')+
      '</section>'+
      '<details class="foundry-race-json-preview"><summary>Inspecionar JSON que será exportado</summary><pre>'+esc(bundleApi().stringify(b))+'</pre></details>'+
      actionButtons(state)+
      '<p class="foundry-export-footnote">Destino: <code>grimorio-importer 0.13.0-beta.1</code>. A materialização permanece nos compêndios gerenciados; a aplicação ao Actor é uma ação separada e, se já houver raça, exige confirmação explícita de substituição.</p>';
  }

  function open(raceId) {
    try {
      const next = buildRaceState(raceId);
      exportState = next;
      const root = ensureRoot();
      root.querySelector('#foundryRaceExportContent').innerHTML = renderState(next);
      root.classList.add('open');
      root.setAttribute('aria-hidden','false');
      document.body.classList.add('foundry-export-open');
      requestAnimationFrame(() => root.querySelector('.foundry-export-close')?.focus());
    } catch (error) {
      console.error(error);
      if (typeof global.showToast === 'function') global.showToast(error.message || 'Falha ao preparar o Race Build Bundle.');
    }
  }

  function close() {
    const root = document.getElementById('foundryRaceExportOverlay');
    if (!root) return;
    root.classList.remove('open');
    root.setAttribute('aria-hidden','true');
    document.body.classList.remove('foundry-export-open');
  }

  async function writeClipboard(text) {
    if (navigator.clipboard?.writeText && global.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return;
    }
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.setAttribute('readonly','');
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    const ok = document.execCommand('copy');
    textarea.remove();
    if (!ok) throw new Error('O navegador não permitiu copiar automaticamente.');
  }

  async function copyJson() {
    if (!exportState?.ok || !exportState.json) return;
    try {
      await writeClipboard(exportState.json);
      if (typeof global.showToast === 'function') global.showToast('Race Build Bundle copiado.');
    } catch (error) {
      console.error(error);
      if (typeof global.showToast === 'function') global.showToast(error.message || 'Não foi possível copiar o JSON.');
    }
  }

  function downloadJson() {
    if (!exportState?.ok || !exportState.json) return;
    const blob = new Blob([exportState.json], { type: 'application/json;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = exportState.filename;
    document.body.appendChild(anchor);
    anchor.click();
    anchor.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    if (typeof global.showToast === 'function') global.showToast('Race Build Bundle gerado.');
  }

  if (typeof document !== 'undefined') {
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && document.getElementById('foundryRaceExportOverlay')?.classList.contains('open')) close();
    });
  }

  global.openFoundryRaceExport = open;
  global.closeFoundryRaceExport = close;
  global.copyFoundryRaceJson = copyJson;
  global.downloadFoundryRaceJson = downloadJson;
  global.GRIMORIO_FOUNDRY_RACE_EXPORT_UI = Object.freeze({
    version: UI_VERSION,
    buildRaceState,
    buildFilename,
    renderState
  });
})(window);
