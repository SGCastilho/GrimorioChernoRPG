#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const root = path.resolve(__dirname, '..');
global.window = global;
function load(file) {
  const full = path.join(root, file);
  vm.runInThisContext(fs.readFileSync(full, 'utf8'), { filename: full });
}

[
  'js/config.js',
  'js/registry.js',
  'data/sources.js',
  'data/phb-spells.js',
  'data/xanathar-spells.js',
  'data/tasha-spells.js',
  'data/spellblade-spells.js',
  'data/lyre-spells.js',
  'data/blade-bone-benefit-spells.js',
  'data/zagalhta-spells.js',
  'data/ryoko-spells.js',
  'data/export/foundry-v13-overrides.js',
  'js/exporters/registry.js',
  'js/exporters/foundry-v13.js'
].forEach(load);

const EXPECTED = Object.freeze({
  total: 1170,
  exportable: 1169,
  ready: 1167,
  reviewRequired: 2,
  blocked: 1,
  reviewIds: new Set(['lyre-divine-frost', 'lyre-tamamos-arrowfall']),
  blockedIds: new Set(['spellblade-sanctified-charge'])
});

const catalogs = global.GRIMORIO_REGISTRY.getSpellCatalogs();
const spells = catalogs.flatMap(c => c.spells);
const report = global.GRIMORIO_FOUNDRY_V13.spell.inspectCatalog(spells);
const errors = [];

const byCatalog = catalogs.map(catalog => {
  const itemReport = global.GRIMORIO_FOUNDRY_V13.spell.inspectCatalog(catalog.spells);
  return {
    id: catalog.id,
    sourceId: catalog.sourceId,
    total: itemReport.total,
    exportable: itemReport.exportable,
    ready: itemReport.ready,
    reviewRequired: itemReport.reviewRequired,
    blocked: itemReport.blocked
  };
});

function warningCategory(message) {
  if (message.startsWith('Tipo/quantidade')) return 'target-ambiguous';
  if (message.startsWith('Duração incompleta')) return 'source-duration-incomplete';
  if (message.startsWith('Duração não pôde')) return 'duration-special';
  if (message.startsWith('Alcance')) return 'range-special';
  if (message.startsWith('Tempo de conjuração')) return 'activation-special';
  return 'other';
}
const warningCounts = {};
for (const analysis of report.analyses.filter(item => item.ok)) {
  for (const warning of analysis.issues.warnings) {
    const key = warningCategory(warning);
    warningCounts[key] = (warningCounts[key] || 0) + 1;
  }
}

const blocked = report.analyses.filter(a => !a.ok).map(a => ({
  id: a.spellId,
  name: a.sourceSpell?.name,
  errors: a.issues.errors,
  warnings: a.issues.warnings
}));
const review = report.analyses.filter(a => a.ok && a.reviewRequired).map(a => ({
  id: a.spellId,
  name: a.sourceSpell?.name,
  warnings: a.issues.warnings
}));

for (const key of ['total', 'exportable', 'ready', 'reviewRequired', 'blocked']) {
  if (report[key] !== EXPECTED[key]) errors.push(`Esperado ${key}=${EXPECTED[key]}, obtido ${report[key]}.`);
}
for (const item of review) if (!EXPECTED.reviewIds.has(item.id)) errors.push(`Revisão não prevista: ${item.id}.`);
for (const id of EXPECTED.reviewIds) if (!review.some(item => item.id === id)) errors.push(`Revisão esperada ausente: ${id}.`);
for (const item of blocked) if (!EXPECTED.blockedIds.has(item.id)) errors.push(`Bloqueio não previsto: ${item.id}.`);
for (const id of EXPECTED.blockedIds) if (!blocked.some(item => item.id === id)) errors.push(`Bloqueio esperado ausente: ${id}.`);

const psionic = report.analyses.filter(a => String(a.sourceSpell?.school || '').toLocaleLowerCase('pt-BR').includes('psiônica'));
if (psionic.length !== 12) errors.push(`Esperadas 12 magias Psiônicas para fallback técnico; encontradas ${psionic.length}.`);
for (const item of psionic) {
  if (!item.ok) errors.push(`Fallback Psiônico não exportável: ${item.spellId}.`);
  if (!item.document.description.includes('escola original') || !item.document.description.includes('Psiônica')) {
    errors.push(`A escola editorial Psiônica não foi preservada na descrição de ${item.spellId}.`);
  }
}

const rituals = report.analyses.filter(a => a.sourceSpell?.ritual);
for (const item of rituals) {
  if (item.document.preparation.method !== 'ritual') errors.push(`Ritual não exportado como ritual: ${item.spellId}.`);
  if (item.issues.warnings.some(w => /ritual/i.test(w))) errors.push(`Ritual ainda exige revisão após homologação da Fase 0: ${item.spellId}.`);
}

const output = {
  profile: global.GRIMORIO_FOUNDRY_V13.profile,
  phase: 2,
  summary: {
    catalogs: catalogs.length,
    total: report.total,
    exportable: report.exportable,
    ready: report.ready,
    reviewRequired: report.reviewRequired,
    blocked: report.blocked,
    warningCounts,
    rituals: rituals.length,
    psionicFallbacks: psionic.length
  },
  byCatalog,
  review,
  blocked,
  validationErrors: errors
};

fs.writeFileSync(path.join(root, 'tests', 'foundry-v13', 'export-readiness.json'), JSON.stringify(output, null, 2) + '\n');
console.log(JSON.stringify(output.summary));
for (const entry of byCatalog) console.log(`${entry.id}: total=${entry.total} exportable=${entry.exportable} ready=${entry.ready} review=${entry.reviewRequired} blocked=${entry.blocked}`);
if (review.length) {
  console.log('Revisões editoriais conhecidas:');
  for (const item of review) console.log(`- ${item.id} ${item.name}: ${item.warnings.join(' | ')}`);
}
if (blocked.length) {
  console.log('Bloqueios editoriais conhecidos:');
  for (const item of blocked) console.log(`- ${item.id} ${item.name}: ${item.errors.join(' | ')}`);
}
if (errors.length) {
  console.error('Falhas da validação Fase 2:');
  for (const error of errors) console.error('- ' + error);
  process.exit(2);
}
console.log('Foundry Export Fase 2: validação aprovada.');
