'use strict';

// FA-1 — UI de exportação dos Feat Bundles v2 com diagnóstico de automação.
(function initFoundryFeatExportUI(global) {
  const UI_VERSION = '2.0.0';
  let state = null;

  function bundleApi() {
    if (!global.GRIMORIO_FOUNDRY_FEAT_BUNDLE) throw new Error('Exportador Foundry de Talentos não está carregado.');
    return global.GRIMORIO_FOUNDRY_FEAT_BUNDLE;
  }
  function packageApi() {
    if (!global.GRIMORIO_FOUNDRY_FEAT_PACKAGE) throw new Error('Exportador de pacotes Foundry de Talentos não está carregado.');
    return global.GRIMORIO_FOUNDRY_FEAT_PACKAGE;
  }
  function browserApi() {
    if (!global.GRIMORIO_FEAT_BROWSER) throw new Error('Catálogo de Talentos não está carregado.');
    return global.GRIMORIO_FEAT_BROWSER;
  }
  function escapeHtml(value) { return String(value ?? '').replace(/[&<>'"]/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[ch])); }
  function slug(value) { return String(value || 'talento').toLocaleLowerCase('pt-BR').normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z0-9]+/g,'-').replace(/^-+|-+$/g,'') || 'talento'; }

  function ensureRoot() {
    let root = document.getElementById('foundryFeatExportOverlay');
    if (root) return root;
    root = document.createElement('div');
    root.id = 'foundryFeatExportOverlay';
    root.className = 'foundry-export-overlay';
    root.setAttribute('aria-hidden','true');
    root.innerHTML = '<div class="foundry-export-modal" role="dialog" aria-modal="true" aria-labelledby="foundryFeatExportTitle"><button class="foundry-export-close" type="button" aria-label="Fechar" onclick="closeFoundryFeatExport()">×</button><div id="foundryFeatExportContent"></div></div>';
    root.addEventListener('click', event => { if (event.target === root) close(); });
    document.body.appendChild(root);
    return root;
  }

  function profileHtml() {
    const p = packageApi().profile;
    return '<div class="foundry-profile"><span class="foundry-profile-dot"></span><div><strong>Contrato FA-1</strong><span>'+escapeHtml(p.label)+'</span></div></div>';
  }

  function issueHtml(errors, warnings, info = []) {
    const groups = [
      ['error','Bloqueios',errors || []],
      ['warning','Revisões',warnings || []],
      ['info','Notas de compatibilidade',info || []]
    ].filter(x => x[2].length);
    if (!groups.length) return '<div class="foundry-export-clean">Nenhum alerta estrutural.</div>';
    return groups.map(([kind,title,items]) => '<div class="foundry-issue-group '+kind+'"><strong>'+escapeHtml(title)+'</strong><ul>'+items.map(item=>'<li>'+escapeHtml(item)+'</li>').join('')+'</ul></div>').join('');
  }

  function automationOf(summary) { return summary?.automation || {}; }
  function summaryGrid(summary) {
    const a = automationOf(summary);
    const rows = [
      ['Talentos', summary.feats ?? 1],
      ['Advancements', a.advancements ?? 0],
      ['Activities', a.activities ?? 0],
      ['Effects', a.effects ?? 0],
      ['Uses', a.uses ?? 0],
      ['Runtime', a.runtime ?? 0]
    ];
    return '<div class="foundry-batch-summary">'+rows.map(([label,value])=>'<div><strong>'+escapeHtml(value)+'</strong><span>'+escapeHtml(label)+'</span></div>').join('')+'</div>';
  }

  function automationTierHtml(summary) {
    const a = automationOf(summary);
    return '<div class="foundry-batch-summary">'+[
      ['Cobertura completa', a.full ?? 0],
      ['Cobertura parcial', a.partial ?? 0],
      ['Somente descrição', a.description ?? 0],
      ['Limitações explícitas', a.limitations ?? 0]
    ].map(([label,value])=>'<div><strong>'+escapeHtml(value)+'</strong><span>'+escapeHtml(label)+'</span></div>').join('')+'</div>';
  }

  function actionButtons(disabled, label) {
    return '<div class="foundry-export-actions">'+
      '<button class="action-btn foundry-copy-btn" type="button" onclick="copyFoundryFeatJson()" '+(disabled?'disabled':'')+'>Copiar JSON</button>'+
      '<button class="action-btn primary foundry-download-btn" type="button" onclick="downloadFoundryFeatJson()" '+(disabled?'disabled':'')+'>Baixar JSON · '+escapeHtml(label)+'</button>'+
      '</div>';
  }

  function planSummary(bundle) {
    const plan = bundle.automation || {};
    return {
      profiles: 1,
      full: plan.tier === 'full' ? 1 : 0,
      partial: plan.tier === 'partial' ? 1 : 0,
      description: plan.tier === 'description' ? 1 : 0,
      advancements: plan.advancements?.length || 0,
      effects: plan.effects?.length || 0,
      activities: plan.activities?.length || 0,
      uses: plan.uses ? 1 : 0,
      runtime: plan.runtime?.length || 0,
      limitations: plan.limitations?.length || 0
    };
  }

  function buildFeatState(featId) {
    const feat = browserApi().getFeat(featId);
    if (!feat) throw new Error('Talento não encontrado.');
    const analysis = bundleApi().inspectFeat(feat);
    if (!analysis.ok) {
      return {kind:'feat', featId, name:feat.name, ok:false, errors:analysis.errors, warnings:analysis.warnings, json:'', filename:'', summary:{feats:0,automation:{}}, info:[]};
    }
    const bundle = analysis.bundle;
    return {
      kind:'feat', featId, name:feat.name, ok:true, errors:analysis.errors, warnings:analysis.warnings,
      value:bundle, json:bundleApi().stringify(bundle), filename:`grimorio-${slug(feat.name)}-talento-foundry-v2.json`,
      summary:{bundles:1,feats:1,sources:1,prerequisites:bundle.feat.prerequisites.length?1:0,repeatable:bundle.feat.repeatable?1:0,automation:planSummary(bundle)},
      info:[
        `Plano de automação: ${bundle.automation.tier}. O JSON transporta Advancements, Activities, Effects, usos, runtime e limitações conforme aplicável.`,
        'Este é o contrato FA-1. A materialização mecânica do bundle v2 requer Grimório Importer 0.12.0 ou superior; a RC 0.11 não consome este schema.'
      ]
    };
  }

  function buildCatalogState() {
    const pkg = packageApi().buildAllFeatPackage();
    const validation = packageApi().validatePackage(pkg);
    return {
      kind:'feat-package', name:'Catálogo completo de Talentos', ok:validation.ok, errors:validation.errors, warnings:validation.warnings,
      value:pkg, json:packageApi().stringify(pkg), filename:'grimorio-talentos-foundry-v13-v2.json', summary:pkg.summary,
      info:[
        'Os 42 Talentos possuem perfil de automação explícito no bundle v2; nenhum talento depende de inferência de texto no Importer.',
        'O pacote requer Grimório Importer 0.12.0+ para materializar a automação. A versão 0.11.0-rc.1 deve permanecer congelada durante a FA-1.'
      ]
    };
  }

  function render(s) {
    const status = s.ok ? (s.warnings?.length ? ['review','Contrato pronto com observações','O JSON v2 é estruturalmente válido; confira as observações antes da FA-2.'] : ['ready','Contrato FA-1 pronto','O JSON v2 passou pela validação estrutural e de automação.']) : ['blocked','Bloqueado','O Grimório não possui dados suficientes para gerar um JSON v2 válido.'];
    const isPackage = s.kind === 'feat-package';
    return '<div class="foundry-export-eyebrow">Foundry VTT · '+(isPackage?'Feat Package v2':'Feat Bundle v2')+'</div>'+
      '<h2 id="foundryFeatExportTitle">'+escapeHtml(s.name)+'</h2>'+
      '<p class="foundry-export-lede">'+(isPackage?'Um único JSON com os 42 planos de automação de Talentos para a futura materialização no Importer 0.12+.':'JSON de transporte do Talento com contrato declarativo de automação FA-1.')+'</p>'+
      profileHtml()+
      '<div class="foundry-status-card '+status[0]+'"><span class="foundry-status-pill">'+status[1]+'</span><p>'+status[2]+'</p></div>'+
      summaryGrid(s.summary)+automationTierHtml(s.summary)+
      '<section class="foundry-export-section"><h3>Diagnóstico</h3>'+issueHtml(s.errors,s.warnings,s.info)+'</section>'+
      actionButtons(!s.ok, isPackage ? `${s.summary.feats} talentos` : 'talento v2')+
      '<p class="foundry-export-footnote">FA-1 gera o contrato. A importação mecânica deste schema será habilitada no Grimório Importer 0.12+ durante a FA-2.</p>';
  }

  function openState(next) {
    state = next;
    const root = ensureRoot();
    root.querySelector('#foundryFeatExportContent').innerHTML = render(next);
    root.classList.add('open'); root.setAttribute('aria-hidden','false');
    document.body.classList.add('foundry-export-open');
    requestAnimationFrame(()=>root.querySelector('.foundry-export-close')?.focus());
  }

  function openFeat(featId) { try { openState(buildFeatState(featId)); } catch(error){ console.error(error); if(typeof showToast==='function')showToast(error.message||'Falha ao preparar Talento.'); } }
  function openCatalog() { try { openState(buildCatalogState()); } catch(error){ console.error(error); if(typeof showToast==='function')showToast(error.message||'Falha ao preparar catálogo de Talentos.'); } }
  function close() { const root=document.getElementById('foundryFeatExportOverlay'); if(!root)return;root.classList.remove('open');root.setAttribute('aria-hidden','true');document.body.classList.remove('foundry-export-open'); }

  async function writeClipboard(text) {
    if (navigator.clipboard?.writeText && window.isSecureContext) { await navigator.clipboard.writeText(text); return; }
    const textarea=document.createElement('textarea');textarea.value=text;textarea.setAttribute('readonly','');textarea.style.position='fixed';textarea.style.opacity='0';document.body.appendChild(textarea);textarea.select();const ok=document.execCommand('copy');textarea.remove();if(!ok)throw new Error('O navegador não permitiu copiar automaticamente.');
  }
  async function copyJson(){if(!state?.json)return;try{await writeClipboard(state.json);if(typeof showToast==='function')showToast('JSON Foundry v2 do Talento copiado.');}catch(error){console.error(error);if(typeof showToast==='function')showToast(error.message||'Falha ao copiar JSON.');}}
  function downloadJson(){if(!state?.json)return;const blob=new Blob([state.json],{type:'application/json;charset=utf-8'});const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download=state.filename;document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);if(typeof showToast==='function')showToast('JSON Foundry v2 de Talentos gerado.');}

  if (typeof document !== 'undefined') document.addEventListener('keydown',event=>{if(event.key==='Escape'&&document.getElementById('foundryFeatExportOverlay')?.classList.contains('open'))close();});

  global.openFoundryFeatExport=openFeat;
  global.openFoundryFeatCatalogExport=openCatalog;
  global.closeFoundryFeatExport=close;
  global.copyFoundryFeatJson=copyJson;
  global.downloadFoundryFeatJson=downloadJson;
  global.GRIMORIO_FOUNDRY_FEAT_EXPORT_UI=Object.freeze({version:UI_VERSION,buildFeatState,buildCatalogState});
})(window);
