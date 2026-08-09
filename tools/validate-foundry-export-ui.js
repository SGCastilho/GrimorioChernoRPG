#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const root = path.resolve(__dirname, '..');
const errors = [];
const read = file => fs.readFileSync(path.join(root, file), 'utf8');

const config = read('js/config.js');
const manifest = JSON.parse(read('manifest.json'));
const index = read('index.html');
const uiSource = read('js/exporters/foundry-export-ui.js');
const css = read('css/styles.css');

const versionMatch = config.match(/const APP_VERSION='([^']+)';/);
if (!versionMatch) errors.push('APP_VERSION não foi encontrado em js/config.js.');
else if (versionMatch[1] !== manifest.version) errors.push(`APP_VERSION (${versionMatch[1]}) diverge do manifest.version (${manifest.version}).`);

const dynamicPos = index.indexOf('js/dynamic-consultation.js');
const uiPos = index.indexOf('js/exporters/foundry-export-ui.js');
if (uiPos < 0) errors.push('foundry-export-ui.js não está carregado no index.html.');
if (dynamicPos < 0 || uiPos < dynamicPos) errors.push('A UI Foundry precisa ser carregada depois de dynamic-consultation.js.');

for (const token of [
  'openFoundrySpellExport', 'openFoundryFilteredExport', 'copyFoundryYaml', 'downloadFoundryYaml',
  'buildSingleState', 'buildBatchState', 'filteredSpells()', 'batchToYaml', 'inspectCatalog',
  'text/yaml;charset=utf-8', 'foundry-export-trigger', 'foundry-batch-toolbar'
]) if (!uiSource.includes(token)) errors.push(`Componente esperado ausente na UI: ${token}.`);

for (const token of ['.foundry-export-overlay', '.foundry-batch-toolbar', '.foundry-preview-grid', '.foundry-batch-summary']) {
  if (!css.includes(token)) errors.push(`Estilo esperado ausente: ${token}.`);
}

// Smoke test da estratégia de wrapper sem precisar de DOM completo.
const fakeSpell = { id: 'teste', name: 'Teste' };
const fakeAnalysis = {
  ok: true, reviewRequired: false, sourceSpell: fakeSpell,
  issues: { errors: [], warnings: [], info: [] },
  document: {
    item: { level: 1, school: 'evo' },
    activation: { value: 1, type: 'action' }, range: { units: 'ft', value: 60 },
    duration: { units: 'inst', value: 'n/a', concentration: false },
    target: { type: 'creature', count: 1 }, area: null
  }
};
const fakeExporter = {
  profile: { label: 'Perfil teste' },
  spell: {
    analyze: () => fakeAnalysis,
    toYaml: () => ({ ...fakeAnalysis, yaml: 'SPELL:\n  ITEM:\n    Name: "Teste"\n' }),
    inspectCatalog: spells => ({ total: spells.length, exportable: spells.length, ready: spells.length, reviewRequired: 0, blocked: 0, analyses: spells.map(() => fakeAnalysis) }),
    batchToYaml: spells => ({ yaml: spells.map(() => 'SPELL:\n  ITEM:\n    Name: "Teste"').join('\n---\n') + '\n' })
  }
};
const context = {
  console,
  window: null,
  document: { addEventListener() {} },
  navigator: {},
  viewSpell: () => '<div class="detail-actions"></div>',
  viewSpellList: () => '<div class="results-line"></div>',
  getSpell: () => fakeSpell,
  filteredSpells: () => [fakeSpell, fakeSpell],
  GRIMORIO_EXPORT_REGISTRY: { get: () => fakeExporter },
  GRIMORIO_FOUNDRY_V13: fakeExporter,
  setTimeout,
  Blob: class Blob {}
};
context.window = context;
vm.createContext(context);
try {
  vm.runInContext(uiSource, context, { filename: 'foundry-export-ui.js' });
  const spellHtml = context.viewSpell('teste');
  const listHtml = context.viewSpellList();
  if (!spellHtml.includes('Exportar Foundry')) errors.push('Wrapper da ficha não inseriu o botão Exportar Foundry.');
  if (!listHtml.includes('Exportar filtro atual')) errors.push('Wrapper do catálogo não inseriu o botão de lote.');
  const single = context.GRIMORIO_FOUNDRY_EXPORT_UI.buildSingleState(fakeSpell);
  const batch = context.GRIMORIO_FOUNDRY_EXPORT_UI.buildBatchState([fakeSpell, fakeSpell]);
  if (!single.yaml.startsWith('SPELL:')) errors.push('Estado individual não contém YAML.');
  if (batch.exportableSpells.length !== 2 || !batch.yaml.includes('---')) errors.push('Estado em lote não preservou dois documentos YAML.');
} catch (error) {
  errors.push('Smoke test da UI falhou: ' + error.message);
}

if (errors.length) {
  console.error('Foundry Export Fase 3: validação reprovada.');
  errors.forEach(error => console.error('✗ ' + error));
  process.exit(2);
}
console.log('✓ Foundry Export Fase 3: interface individual e em lote validada.');
