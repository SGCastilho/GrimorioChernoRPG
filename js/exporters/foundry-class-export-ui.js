'use strict';

// Fase 10 — Exportação granular e em pacote de classes/subclasses para Grimório Importer.
(function initFoundryClassExportUI(global) {
  const UI_VERSION = '1.1.0';
  const SPECIAL = new Set(['dragoneer', 'frame-pilot', 'bender', 'tamer', 'blood-minister']);
  let state = null;

  function api() {
    if (!global.GRIMORIO_FOUNDRY_CLASS_PACKAGE) throw new Error('Exportador Foundry de classes não está carregado.');
    return global.GRIMORIO_FOUNDRY_CLASS_PACKAGE;
  }
  function bundleApi() {
    if (!global.GRIMORIO_FOUNDRY_CLASS_BUNDLE) throw new Error('Exportador de bundles não está carregado.');
    return global.GRIMORIO_FOUNDRY_CLASS_BUNDLE;
  }
  function escapeHtml(value) { return String(value ?? '').replace(/[&<>'"]/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[ch])); }
  function escapeAttr(value) { return escapeHtml(value).replace(/`/g, '&#96;'); }
  function slug(value) { return String(value || 'foundry').toLocaleLowerCase('pt-BR').normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z0-9]+/g,'-').replace(/^-+|-+$/g,'') || 'foundry'; }

  function ensureRoot() {
    let root = document.getElementById('foundryClassExportOverlay');
    if (root) return root;
    root = document.createElement('div');
    root.id = 'foundryClassExportOverlay';
    root.className = 'foundry-export-overlay';
    root.setAttribute('aria-hidden','true');
    root.innerHTML = '<div class="foundry-export-modal" role="dialog" aria-modal="true" aria-labelledby="foundryClassExportTitle"><button class="foundry-export-close" type="button" aria-label="Fechar" onclick="closeFoundryClassExport()">×</button><div id="foundryClassExportContent"></div></div>';
    root.addEventListener('click', event => { if (event.target === root) close(); });
    document.body.appendChild(root);
    return root;
  }

  function profileHtml() {
    const p = api().profile;
    return '<div class="foundry-profile"><span class="foundry-profile-dot"></span><div><strong>Perfil homologado</strong><span>'+escapeHtml(p.label)+'</span></div></div>';
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

  function summaryGrid(summary) {
    const rows = [
      ['Bundles', summary.bundles ?? 1],
      ['Classes', summary.classes ?? 0],
      ['Subclasses', summary.subclasses ?? 0],
      ['Características', summary.features ?? 0]
    ];
    return '<div class="foundry-batch-summary">'+rows.map(([label,value])=>'<div><strong>'+escapeHtml(value)+'</strong><span>'+escapeHtml(label)+'</span></div>').join('')+'</div>';
  }

  function actionButtons(disabled, label) {
    return '<div class="foundry-export-actions">'+
      '<button class="action-btn foundry-copy-btn" type="button" onclick="copyFoundryClassJson()" '+(disabled?'disabled':'')+'>Copiar JSON</button>'+
      '<button class="action-btn primary foundry-download-btn" type="button" onclick="downloadFoundryClassJson()" '+(disabled?'disabled':'')+'>Baixar JSON · '+escapeHtml(label)+'</button>'+
      '</div>';
  }

  function buildClassState(classId, mode='bundle') {
    const cls = typeof getClass === 'function' ? getClass(classId) : null;
    if (!cls) throw new Error('Classe não encontrada.');
    if (cls?.foundryExport?.supported === false) throw new Error(cls.foundryExport.reason || 'Esta classe ainda não possui contrato Foundry compatível.');
    const analysis = bundleApi().inspectClass(cls);
    if (!analysis.ok) {
      return { kind:'class', mode, classId, name:cls.name, ok:false, errors:analysis.errors, warnings:[], json:'', filename:'', summary:{bundles:0,classes:0,subclasses:0,features:0} };
    }
    if (mode === 'package') {
      const pkg = api().buildClassPackage(classId);
      const validation = api().validatePackage(pkg);
      return {
        kind:'class-package', mode, classId, name:cls.name, ok:validation.ok, errors:validation.errors, warnings:validation.warnings,
        value:pkg, json:api().stringify(pkg), filename:`grimorio-${slug(cls.name)}-classe-completa-foundry.json`, summary:pkg.summary,
        info:[SPECIAL.has(analysis.bundle.identity.identifier)?'Esta classe usa o runtime especial homologado do Grimório Importer.':'A classe usa o materializador nativo generalizado do Grimório Importer.']
      };
    }
    const bundle = analysis.bundle;
    const warnings = [...(bundle.nativeMapping?.warnings || [])];
    return {
      kind:'class', mode, classId, name:cls.name, ok:true, errors:[], warnings, value:bundle, json:bundleApi().stringify(bundle),
      filename:`grimorio-${slug(cls.name)}-classe-foundry.json`,
      summary:{bundles:1,classes:1,subclasses:0,features:bundle.features.length},
      info:[SPECIAL.has(bundle.identity.identifier)?'Suporte especial ativo no Grimório Importer 0.6.0.':'Bundle compatível com o Grimório Importer 0.6.0.']
    };
  }

  function buildSubclassState(subclassId) {
    const sub = typeof getSubclass === 'function' ? getSubclass(subclassId) : null;
    if (!sub) throw new Error('Subclasse não encontrada.');
    const analysis = bundleApi().inspectSubclass(sub);
    if (!analysis.ok) return {kind:'subclass',subclassId,name:sub.name,ok:false,errors:analysis.errors,warnings:[],json:'',filename:'',summary:{bundles:0,classes:0,subclasses:0,features:0}};
    const bundle = analysis.bundle;
    return {
      kind:'subclass', subclassId, name:sub.name, ok:true, errors:[], warnings:[], value:bundle, json:bundleApi().stringify(bundle),
      filename:`grimorio-${slug(sub.name)}-subclasse-foundry.json`,
      summary:{bundles:1,classes:0,subclasses:1,features:bundle.features.length},
      info:[SPECIAL.has(bundle.parentClass.identifier)?'A classe-base usa runtime especial; importe/configure-a conforme necessário.':'classIdentifier preservado para a classe-base '+bundle.parentClass.identifier+'.']
    };
  }

  function buildCatalogState() {
    const pkg = api().buildCatalogPackage();
    const validation = api().validatePackage(pkg);
    return {
      kind:'catalog-package', name:'Catálogo completo', ok:validation.ok, errors:validation.errors, warnings:validation.warnings,
      value:pkg, json:api().stringify(pkg), filename:'grimorio-classes-subclasses-foundry-v13.json', summary:pkg.summary,
      info:['O importador processa classes antes das subclasses e sincroniza documentos existentes pelas flags do Grimório.','Nenhum Item é criado automaticamente no diretório do Mundo; o destino continua sendo os três compêndios do módulo.']
    };
  }

  function titleFor(s) {
    if (s.kind === 'catalog-package') return 'Classes e subclasses do Grimório';
    if (s.kind === 'class-package') return s.name+' — classe completa';
    return s.name;
  }

  function render(s) {
    const status = s.ok ? (s.warnings?.length ? ['review','Pronta com observações','O arquivo é importável; confira as observações antes de usar.'] : ['ready','Pronta','A exportação passou pela validação estrutural.']) : ['blocked','Bloqueada','O Grimório não possui dados suficientes para gerar um bundle válido.'];
    const isPackage = s.kind.includes('package');
    return '<div class="foundry-export-eyebrow">Foundry VTT · '+(isPackage?'Pacote de classes':'Bundle de classe/subclasse')+'</div>'+
      '<h2 id="foundryClassExportTitle">'+escapeHtml(titleFor(s))+'</h2>'+
      '<p class="foundry-export-lede">'+(isPackage?'Um único JSON para o Grimório Importer 0.6.0 processar em lote.':'JSON de transporte para o Grimório Importer, preservando características e Advancements planejados.')+'</p>'+
      profileHtml()+
      '<div class="foundry-status-card '+status[0]+'"><span class="foundry-status-pill">'+status[1]+'</span><p>'+status[2]+'</p></div>'+
      summaryGrid(s.summary)+
      '<section class="foundry-export-section"><h3>Diagnóstico</h3>'+issueHtml(s.errors,s.warnings,s.info)+'</section>'+
      actionButtons(!s.ok, isPackage ? `${s.summary.bundles} bundles` : (s.kind==='subclass'?'subclasse':'classe'))+
      '<p class="foundry-export-footnote">No Foundry, use <code>/grimorio-import</code> e selecione este JSON.</p>';
  }

  function openState(next) {
    state = next;
    const root = ensureRoot();
    root.querySelector('#foundryClassExportContent').innerHTML = render(next);
    root.classList.add('open'); root.setAttribute('aria-hidden','false');
    document.body.classList.add('foundry-export-open');
    requestAnimationFrame(()=>root.querySelector('.foundry-export-close')?.focus());
  }

  function openClass(classId, mode='bundle') { try { openState(buildClassState(classId,mode)); } catch(error){ console.error(error); if(typeof showToast==='function')showToast(error.message||'Falha ao preparar classe.'); } }
  function openSubclass(subclassId) { try { openState(buildSubclassState(subclassId)); } catch(error){ console.error(error); if(typeof showToast==='function')showToast(error.message||'Falha ao preparar subclasse.'); } }
  function openCatalog() { try { openState(buildCatalogState()); } catch(error){ console.error(error); if(typeof showToast==='function')showToast(error.message||'Falha ao preparar catálogo.'); } }
  function close() { const root=document.getElementById('foundryClassExportOverlay'); if(!root)return;root.classList.remove('open');root.setAttribute('aria-hidden','true');document.body.classList.remove('foundry-export-open'); }

  async function writeClipboard(text) {
    if (navigator.clipboard?.writeText && window.isSecureContext) { await navigator.clipboard.writeText(text); return; }
    const textarea=document.createElement('textarea');textarea.value=text;textarea.setAttribute('readonly','');textarea.style.position='fixed';textarea.style.opacity='0';document.body.appendChild(textarea);textarea.select();const ok=document.execCommand('copy');textarea.remove();if(!ok)throw new Error('O navegador não permitiu copiar automaticamente.');
  }
  async function copyJson(){if(!state?.json)return;try{await writeClipboard(state.json);if(typeof showToast==='function')showToast('JSON Foundry copiado.');}catch(error){console.error(error);if(typeof showToast==='function')showToast(error.message||'Falha ao copiar JSON.');}}
  function downloadJson(){if(!state?.json)return;const blob=new Blob([state.json],{type:'application/json;charset=utf-8'});const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download=state.filename;document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);if(typeof showToast==='function')showToast('JSON Foundry gerado.');}

  function classButtons(id, subclassCount) {
    return '<div class="foundry-class-actions">'+
      '<button class="action-btn foundry-export-trigger" type="button" onclick="openFoundryClassExport(\''+escapeAttr(id)+'\',\'bundle\')"><span class="foundry-export-icon">⇩</span> Exportar Foundry</button>'+
      '<button class="action-btn foundry-export-trigger" type="button" onclick="openFoundryClassExport(\''+escapeAttr(id)+'\',\'package\')"><span class="foundry-export-icon">⇩</span> Classe + subclasses <b>'+Number(subclassCount||0)+'</b></button>'+
      '</div>';
  }
  function subclassButton(id) { return '<button class="action-btn foundry-export-trigger" type="button" onclick="openFoundrySubclassExport(\''+escapeAttr(id)+'\')"><span class="foundry-export-icon">⇩</span> Exportar Foundry</button>'; }
  function catalogToolbar() { const classes=Array.isArray(global.GRIMORIO_CLASSES)?global.GRIMORIO_CLASSES:[];const c=classes.filter(item=>item?.foundryExport?.supported!==false).length;const s=Array.isArray(global.GRIMORIO_SUBCLASSES)?global.GRIMORIO_SUBCLASSES.length:0;return '<div class="foundry-batch-toolbar foundry-class-catalog-toolbar"><div><strong>Foundry VTT · Classes</strong><span>Baixe as '+c+' classes compatíveis e '+s+' subclasses em um único pacote. Sistemas modulares ainda sem contrato ficam fora do JSON.</span></div><button class="action-btn foundry-export-trigger" type="button" onclick="openFoundryClassCatalogExport()"><span class="foundry-export-icon">⇩</span> Exportar catálogo <b>'+(c+s)+'</b></button></div>'; }

  if (typeof viewClass === 'function') {
    const base=viewClass;
    viewClass=function foundryClassEnhancedView(id){const html=base(id);if(!html||html.includes('foundry-class-actions'))return html;const count=typeof subclassesOf==='function'?subclassesOf(id).length:0;return html.replace('</div>'+((getClass(id)?.source)?'<div class="source-line">':'<div class="stat-grid">'), match=>classButtons(id,count)+match);};
  }
  // Fallback mais robusto: se o replace acima não encontrar a borda esperada, injeta após detail-header.
  if (typeof viewClass === 'function') {
    const prior=viewClass;
    viewClass=function foundryClassEnhancedViewFallback(id){let html=prior(id);if(!html||html.includes('foundry-class-actions'))return html;const count=typeof subclassesOf==='function'?subclassesOf(id).length:0;const marker='</div><div class="stat-grid">';if(html.includes(marker))return html.replace(marker,'</div>'+classButtons(id,count)+'<div class="stat-grid">');const sourceMarker='</div><div class="source-line">';if(html.includes(sourceMarker))return html.replace(sourceMarker,'</div>'+classButtons(id,count)+'<div class="source-line">');return html;};
  }
  if (typeof viewSubclass === 'function') {
    const base=viewSubclass;
    viewSubclass=function foundrySubclassEnhancedView(id){
      let html=base(id);
      if(!html||html.includes('openFoundrySubclassExport'))return html;
      if(html.includes('<div class="detail-actions">')) return html.replace('<div class="detail-actions">','<div class="detail-actions">'+subclassButton(id));
      const marker='</div><div class="source-line">';
      return html.includes(marker)?html.replace(marker,'<div class="detail-actions">'+subclassButton(id)+'</div></div><div class="source-line">'):html;
    };
  }
  if (typeof viewClassList === 'function') {
    const base=viewClassList;
    viewClassList=function foundryClassListEnhancedView(){const html=base();if(!html||html.includes('foundry-class-catalog-toolbar'))return html;return html.replace('<div class="grid">',catalogToolbar()+'<div class="grid">');};
  }

  if (typeof document !== 'undefined') document.addEventListener('keydown',event=>{if(event.key==='Escape'&&document.getElementById('foundryClassExportOverlay')?.classList.contains('open'))close();});

  global.openFoundryClassExport=openClass;
  global.openFoundrySubclassExport=openSubclass;
  global.openFoundryClassCatalogExport=openCatalog;
  global.closeFoundryClassExport=close;
  global.copyFoundryClassJson=copyJson;
  global.downloadFoundryClassJson=downloadJson;
  global.GRIMORIO_FOUNDRY_CLASS_EXPORT_UI=Object.freeze({version:UI_VERSION,buildClassState,buildSubclassState,buildCatalogState});
})(window);
