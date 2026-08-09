#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');
const vm = require('vm');
const root = path.resolve(__dirname, '..');
function assert(value, message) { if (!value) throw new Error(message); }
function loadInto(context, file) { vm.runInContext(fs.readFileSync(path.join(root, file), 'utf8'), context, { filename: file }); }

const dataScripts = [
  'js/config.js','js/registry.js','data/sources.js','data/classes.js','data/progression.js','data/tasha-artificer.js','data/lyre-classes.js','data/zagalhta-classes.js','data/ryoko-classes.js','data/lyre-subclasses.js','data/blade-bone-benefit-classes.js','data/zagalhta-specializations.js','data/zagalhta-subclasses-standard.js','data/zagalhta-subclasses-standard-2.js','data/zagalhta-subclasses-standard-3.js','data/zagalhta-compulsions.js','data/blade-bone-benefit-subclasses.js','data/ryoko-subclasses.js','data/ryoko-optional-features.js','data/homebrew-emissario.js','data/xanathar-subclasses.js','data/tasha-subclasses.js','data/scag-subclasses.js','data/homebrew-paladin-bahamut.js','data/phb-spells.js','data/xanathar-spells.js','data/tasha-spells.js','data/scag-spells.js','data/spells.js','data/spellblade-spells.js','data/lyre-spells.js','data/blade-bone-benefit-spells.js','data/zagalhta-spells.js','data/ryoko-spells.js','data/cultivator-homebrew-spells.js','data/export/foundry-v13-overrides.js','data/export/foundry-class-overrides.js','js/exporters/registry.js','js/exporters/foundry-v13.js','data/homebrew-spellblade-class.js','data/cultivator-class.js','data/homebrew-street-fighter.js','js/exporters/foundry-class-bundle.js','js/exporters/foundry-class-package.js'
];

function baseContext(hash = '#/classes') {
  const elements = new Map();
  const makeClassList = () => ({ add() {}, remove() {}, toggle() {}, contains() { return false; } });
  const makeElement = id => ({ id, innerHTML: '', textContent: '', value: '', checked: false, style: {}, classList: makeClassList(), focus() {}, reset() {}, setAttribute() {}, addEventListener() {}, appendChild() {}, remove() {}, select() {}, querySelector() { return null; }, querySelectorAll() { return []; } });
  const document = {
    getElementById(id) { if (!elements.has(id)) elements.set(id, makeElement(id)); return elements.get(id); },
    addEventListener() {},
    createElement(tag) { return makeElement(tag); },
    body: makeElement('body'),
    execCommand() { return true; },
    querySelector() { return null; },
    querySelectorAll() { return []; }
  };
  const localStorage = { getItem() { return null; }, setItem() {}, removeItem() {} };
  const context = {
    console, document, localStorage,
    location: { hash },
    navigator: {},
    innerWidth: 1280,
    addEventListener() {},
    setTimeout, clearTimeout,
    requestAnimationFrame(fn) { if (typeof fn === 'function') fn(); },
    scrollTo() {},
    confirm() { return true; },
    fetch: async () => { throw new Error('fetch não esperado no smoke test'); },
    DOMParser: class { parseFromString() { return { body: { textContent: '' } }; } },
    Blob: class Blob {},
    URL: { createObjectURL() { return 'blob:phase10'; }, revokeObjectURL() {} },
    CSS: { escape(value) { return String(value); } },
    window: null
  };
  context.window = context;
  vm.createContext(context);
  return { context, elements };
}

function loadCatalogContext() {
  const { context } = baseContext('#/classes');
  for (const file of dataScripts) loadInto(context, file);
  return context;
}

function loadAppAt(hash, fullRenderStack = false) {
  const env = baseContext(hash);
  for (const file of dataScripts) loadInto(env.context, file);
  loadInto(env.context, 'js/app.js');
  if (fullRenderStack) {
    loadInto(env.context, 'js/ui-enhancements.js');
    loadInto(env.context, 'js/dynamic-consultation.js');
    loadInto(env.context, 'js/exporters/foundry-class-export-ui.js');
  }
  return env;
}

(async () => {
  const manifest = JSON.parse(fs.readFileSync(path.join(root, 'manifest.json'), 'utf8'));
  const moduleManifest = JSON.parse(fs.readFileSync(path.join(root, 'foundry/grimorio-importer/module.json'), 'utf8'));
  assert(['5.22.1','5.23.0','5.24.0','5.25.0','5.25.1','5.26.0','5.27.0','5.28.0'].includes(manifest.version), 'manifest.json deve preservar a integração granular da Fase 10');
  assert(['0.6.0','0.7.0','0.8.0','0.9.0','0.9.1','0.9.2','0.9.3'].includes(moduleManifest.version), 'Grimório Importer deve preservar suporte da Fase 10');
  assert(Number(manifest.foundryClassImporter?.phase) >= 10, 'Manifest deve preservar suporte da Fase 10');
  assert(manifest.foundryClassImporter?.realFoundryPhase9PackageFlowValidated === true, 'Homologação real da Fase 9 não registrada');

  const appSource = fs.readFileSync(path.join(root, 'js/app.js'), 'utf8');
  for (const token of [
    'function foundryClassHeaderActions',
    "foundryClassHeaderActions('class',id,subs.length)",
    "foundryClassHeaderActions('subclass',id)",
    'function foundryClassCatalogToolbar',
    'openFoundryClassExport',
    'openFoundrySubclassExport'
  ]) assert(appSource.includes(token), `app.js sem integração nativa: ${token}`);

  const uiEnhancementsSource = fs.readFileSync(path.join(root, 'js/ui-enhancements.js'), 'utf8');
  const dynamicConsultationSource = fs.readFileSync(path.join(root, 'js/dynamic-consultation.js'), 'utf8');
  assert(uiEnhancementsSource.includes("foundryClassHeaderActions('class', id, subs.length)"), 'ui-enhancements.js pode sobrescrever o botão Foundry da classe');
  assert(uiEnhancementsSource.includes("foundryClassHeaderActions('subclass', id)"), 'ui-enhancements.js pode sobrescrever o botão Foundry da subclasse');
  assert(dynamicConsultationSource.includes("foundryClassHeaderActions('class', id, subs.length)"), 'dynamic-consultation.js pode sobrescrever o botão Foundry da classe');
  assert(dynamicConsultationSource.includes("foundryClassHeaderActions('subclass', id)"), 'dynamic-consultation.js pode sobrescrever o botão Foundry da subclasse');

  // O teste crítico da regressão: o primeiro render acontece ANTES de foundry-class-export-ui.js.
  // Mesmo assim, a página precisa nascer com o botão, pois o markup agora pertence ao app.js.
  const directClass = loadAppAt('#/class/barbarian');
  const classHtml = directClass.elements.get('mainContent')?.innerHTML ?? '';
  assert(classHtml.includes('data-foundry-export-kind="class"'), 'Acesso direto à classe não renderizou controle Foundry');
  assert(classHtml.includes("openFoundryClassExport('barbarian','bundle')"), 'Bárbaro sem exportação individual no primeiro render');
  assert(classHtml.includes("openFoundryClassExport('barbarian','package')"), 'Bárbaro sem Classe + subclasses no primeiro render');

  const directSubclass = loadAppAt('#/subclass/ryoko-barbarian-path-kaiju');
  const subclassHtml = directSubclass.elements.get('mainContent')?.innerHTML ?? '';
  assert(subclassHtml.includes('data-foundry-export-kind="subclass"'), 'Acesso direto à subclasse não renderizou controle Foundry');
  assert(subclassHtml.includes("openFoundrySubclassExport('ryoko-barbarian-path-kaiju')"), 'Caminho do Kaiju sem exportação individual no primeiro render');

  // Reproduz a ordem real do index.html: app -> ui-enhancements -> dynamic-consultation -> export UI.
  // O bug da v5.22.0 ocorria porque as duas camadas seguintes substituíam viewClass/viewSubclass
  // e voltavam a usar detailActions(), apagando o markup Foundry do app.js.
  const renderedClass = loadAppAt('#/class/barbarian', true);
  const renderedClassHtml = renderedClass.elements.get('mainContent')?.innerHTML ?? '';
  assert(renderedClassHtml.includes('data-foundry-export-kind="class"'), 'Stack real de renderização removeu o controle Foundry da classe');
  assert(renderedClassHtml.includes("openFoundryClassExport('barbarian','bundle')"), 'Stack real de renderização removeu Exportar Foundry do Bárbaro');
  assert((renderedClassHtml.match(/openFoundryClassExport\('barbarian','bundle'\)/g) || []).length === 1, 'Stack real duplicou Exportar Foundry do Bárbaro');

  const renderedSubclass = loadAppAt('#/subclass/ryoko-barbarian-path-kaiju', true);
  const renderedSubclassHtml = renderedSubclass.elements.get('mainContent')?.innerHTML ?? '';
  assert(renderedSubclassHtml.includes('data-foundry-export-kind="subclass"'), 'Stack real de renderização removeu o controle Foundry da subclasse');
  assert(renderedSubclassHtml.includes("openFoundrySubclassExport('ryoko-barbarian-path-kaiju')"), 'Stack real de renderização removeu Exportar Foundry do Caminho do Kaiju');
  assert((renderedSubclassHtml.match(/openFoundrySubclassExport\('ryoko-barbarian-path-kaiju'\)/g) || []).length === 1, 'Stack real duplicou Exportar Foundry do Caminho do Kaiju');

  const directCatalog = loadAppAt('#/classes');
  const catalogHtml = directCatalog.elements.get('mainContent')?.innerHTML ?? '';
  assert(catalogHtml.includes('data-foundry-export-kind="catalog"'), 'Tela Classes sem toolbar do catálogo no primeiro render');
  assert(catalogHtml.includes('Exportar catálogo'), 'Tela Classes sem Exportar catálogo');

  // Cobertura de todas as fichas no renderer real do site.
  const ctx = loadCatalogContext();
  loadInto(ctx, 'js/app.js');
  const classCount = vm.runInContext('allClasses().length', ctx);
  const subclassCount = vm.runInContext('allSubclasses().length', ctx);
  assert(classCount === manifest.classes, `Esperadas ${manifest.classes} classes; encontradas ${classCount}`);
  assert(subclassCount === manifest.subclasses, `Esperadas ${manifest.subclasses} subclasses; encontradas ${subclassCount}`);
  const classIds = vm.runInContext('allClasses().map(x=>x.id)', ctx);
  const subclassIds = vm.runInContext('allSubclasses().map(x=>x.id)', ctx);
  for (const id of classIds) {
    const html = vm.runInContext(`viewClass(${JSON.stringify(id)})`, ctx);
    assert(html.includes(`openFoundryClassExport('${id}','bundle')`), `Classe ${id} sem botão individual`);
    assert(html.includes(`openFoundryClassExport('${id}','package')`), `Classe ${id} sem pacote classe completa`);
  }
  for (const id of subclassIds) {
    const html = vm.runInContext(`viewSubclass(${JSON.stringify(id)})`, ctx);
    assert(html.includes(`openFoundrySubclassExport('${id}')`), `Subclasse ${id} sem botão individual`);
  }

  // Estado/JSON real do exportador: todos os itens atuais devem gerar arquivos individuais válidos.
  loadInto(ctx, 'js/exporters/foundry-class-export-ui.js');
  const api = ctx.GRIMORIO_FOUNDRY_CLASS_EXPORT_UI;
  assert(api?.version === '1.1.0', 'UI Foundry de classes deve estar em 1.1.0');
  let classFeatures = 0;
  for (const id of classIds) {
    const state = api.buildClassState(id, 'bundle');
    assert(state.ok, `Bundle individual de classe inválido: ${id}`);
    const parsed = JSON.parse(state.json);
    assert(parsed.schema === 'grimorio-foundry-class-bundle' && parsed.kind === 'class', `JSON individual de classe incorreto: ${id}`);
    assert(state.filename.endsWith('-classe-foundry.json'), `Filename de classe incorreto: ${id}`);
    classFeatures += state.summary.features;
  }
  let subclassFeatures = 0;
  for (const id of subclassIds) {
    const state = api.buildSubclassState(id);
    assert(state.ok, `Bundle individual de subclasse inválido: ${id}`);
    const parsed = JSON.parse(state.json);
    assert(parsed.schema === 'grimorio-foundry-class-bundle' && parsed.kind === 'subclass', `JSON individual de subclasse incorreto: ${id}`);
    assert(state.filename.endsWith('-subclasse-foundry.json'), `Filename de subclasse incorreto: ${id}`);
    subclassFeatures += state.summary.features;
  }
  const barbarianPackage = api.buildClassState('barbarian', 'package');
  assert(barbarianPackage.ok && barbarianPackage.summary.classes === 1 && barbarianPackage.summary.subclasses === 17, 'Pacote do Bárbaro regrediu');
  const fullCatalog = api.buildCatalogState();
  assert(fullCatalog.ok && fullCatalog.summary.bundles === classCount + subclassCount, `Catálogo completo deve manter ${classCount + subclassCount} bundles`);

  const mainSource = fs.readFileSync(path.join(root, 'foundry/grimorio-importer/scripts/main.js'), 'utf8');
  assert(mainSource.includes('phase10Support'), 'Importer sem phase10Support');
  assert(mainSource.includes('singleClassBundle: true') && mainSource.includes('singleSubclassBundle: true'), 'Importer não declara suporte granular');

  console.log('PHASE10_OK', JSON.stringify({
    app: manifest.version,
    importer: moduleManifest.version,
    classesWithNativeButton: classCount,
    subclassesWithNativeButton: subclassCount,
    individualJsonFilesValidated: classCount + subclassCount,
    sourceFeaturesCovered: classFeatures + subclassFeatures,
    barbarianPackageBundles: barbarianPackage.summary.bundles,
    catalogBundles: fullCatalog.summary.bundles,
    directRouteFirstRender: true,
    realIndexRenderStackValidated: true,
    phase9RealValidationRecorded: true
  }, null, 2));
})().catch(error => { console.error(error.stack || error); process.exit(1); });
