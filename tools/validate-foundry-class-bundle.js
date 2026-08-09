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
  'data/classes.js',
  'data/progression.js',
  'data/tasha-artificer.js',
  'data/lyre-classes.js',
  'data/zagalhta-classes.js',
  'data/ryoko-classes.js',
  'data/lyre-subclasses.js',
  'data/blade-bone-benefit-classes.js',
  'data/zagalhta-specializations.js',
  'data/zagalhta-subclasses-standard.js',
  'data/zagalhta-subclasses-standard-2.js',
  'data/zagalhta-subclasses-standard-3.js',
  'data/zagalhta-compulsions.js',
  'data/blade-bone-benefit-subclasses.js',
  'data/ryoko-subclasses.js',
  'data/ryoko-optional-features.js',
  'data/homebrew-emissario.js',
  'data/xanathar-subclasses.js',
  'data/tasha-subclasses.js',
  'data/scag-subclasses.js',
  'data/homebrew-paladin-bahamut.js',
  'data/homebrew-spellblade-class.js',
  'data/export/foundry-class-overrides.js',
  'js/exporters/registry.js',
  'js/exporters/foundry-class-bundle.js'
].forEach(load);

const api = global.GRIMORIO_FOUNDRY_CLASS_BUNDLE;
const classes = global.GRIMORIO_CLASSES || [];
const subclasses = global.GRIMORIO_SUBCLASSES || [];
const report = api.inspectCatalog(classes, subclasses);
const errors = [];

const EXPECTED = {
  classes: 24,
  subclasses: 377,
  classFeatures: 345,
  subclassFeatures: 2025,
  classTables: 23,
  subclassTables: 135,
  nativeReviewIds: new Set(['dragoneer', 'frame-pilot', 'bender-ryoko', 'tamer-ryoko', 'blood-minister-somnus']),
  unlevelledClassFeatures: 29,
  subclassesMissingSource: 41
};

function assert(condition, message) { if (!condition) errors.push(message); }

assert(report.classes.total === EXPECTED.classes, `Esperadas ${EXPECTED.classes} classes; obtidas ${report.classes.total}.`);
assert(report.classes.bundleReady === EXPECTED.classes, `Todas as classes devem gerar bundle; prontas ${report.classes.bundleReady}/${EXPECTED.classes}.`);
assert(report.classes.blocked === 0, `Nenhuma classe deveria estar bloqueada; obtido ${report.classes.blocked}.`);
assert(report.subclasses.total === EXPECTED.subclasses, `Esperadas ${EXPECTED.subclasses} subclasses; obtidas ${report.subclasses.total}.`);
assert(report.subclasses.bundleReady === EXPECTED.subclasses, `Todas as subclasses devem gerar bundle; prontas ${report.subclasses.bundleReady}/${EXPECTED.subclasses}.`);
assert(report.subclasses.blocked === 0, `Nenhuma subclasse deveria estar bloqueada; obtido ${report.subclasses.blocked}.`);

const classFeatureTotal = classes.reduce((sum, item) => sum + (item.features?.length || 0), 0);
const subclassFeatureTotal = subclasses.reduce((sum, item) => sum + (item.features?.length || 0), 0);
const classTableTotal = classes.reduce((sum, item) => sum + (item.tables?.length || 0), 0);
const subclassTableTotal = subclasses.reduce((sum, item) => sum + (item.tables?.length || 0), 0);
assert(classFeatureTotal === EXPECTED.classFeatures, `Características de classe: esperado ${EXPECTED.classFeatures}, obtido ${classFeatureTotal}.`);
assert(subclassFeatureTotal === EXPECTED.subclassFeatures, `Características de subclasse: esperado ${EXPECTED.subclassFeatures}, obtido ${subclassFeatureTotal}.`);
assert(classTableTotal === EXPECTED.classTables, `Tabelas de classe: esperado ${EXPECTED.classTables}, obtido ${classTableTotal}.`);
assert(subclassTableTotal === EXPECTED.subclassTables, `Tabelas de subclasse: esperado ${EXPECTED.subclassTables}, obtido ${subclassTableTotal}.`);

const identifiers = new Map();
for (const analysis of report.classes.analyses) {
  const bundle = analysis.bundle;
  if (!analysis.ok) {
    errors.push(...analysis.errors.map(error => `Classe bloqueada: ${error}`));
    continue;
  }
  const id = bundle.identity.identifier;
  if (identifiers.has(id)) errors.push(`Identifier de classe duplicado: ${id} (${identifiers.get(id)} e ${bundle.identity.grimorioId}).`);
  identifiers.set(id, bundle.identity.grimorioId);
  assert(bundle.progression?.levels?.length === 20, `${bundle.identity.grimorioId}: progressão diferente de 20 níveis.`);
  assert(bundle.subclassSelection.options.length === subclasses.filter(item => item.classId === bundle.identity.grimorioId).length, `${bundle.identity.grimorioId}: índice de subclasses incompleto.`);
}

const nativeReview = report.classes.analyses.filter(item => item.nativeMapping?.status === 'review');
assert(nativeReview.length === EXPECTED.nativeReviewIds.size, `Esperadas ${EXPECTED.nativeReviewIds.size} classes em revisão nativa; obtidas ${nativeReview.length}.`);
for (const item of nativeReview) assert(EXPECTED.nativeReviewIds.has(item.bundle.identity.grimorioId), `Revisão nativa inesperada: ${item.bundle.identity.grimorioId}.`);
for (const id of EXPECTED.nativeReviewIds) assert(nativeReview.some(item => item.bundle.identity.grimorioId === id), `Revisão nativa esperada ausente: ${id}.`);

const subclassIds = new Set();
for (const analysis of report.subclasses.analyses) {
  const bundle = analysis.bundle;
  if (!analysis.ok) {
    errors.push(...analysis.errors.map(error => `Subclasse bloqueada: ${error}`));
    continue;
  }
  assert(!subclassIds.has(bundle.identity.identifier), `Identifier de subclasse duplicado: ${bundle.identity.identifier}.`);
  subclassIds.add(bundle.identity.identifier);
  const parent = classes.find(item => item.id === bundle.parentClass.grimorioId);
  assert(Boolean(parent), `${bundle.identity.grimorioId}: classe-base inexistente.`);
  if (parent) assert(bundle.parentClass.identifier === api.identifiers.classIdentifier(parent), `${bundle.identity.grimorioId}: classIdentifier não corresponde à classe-base.`);
}

const unlevelledClassFeatures = report.classes.analyses.reduce((sum, item) => sum + (item.bundle?.features || []).filter(feature => feature.level === null).length, 0);
const subclassesMissingSource = report.subclasses.analyses.filter(item => !item.bundle?.source?.title).length;
assert(unlevelledClassFeatures === EXPECTED.unlevelledClassFeatures, `Opções de característica sem nível: esperado ${EXPECTED.unlevelledClassFeatures}, obtido ${unlevelledClassFeatures}.`);
assert(subclassesMissingSource === EXPECTED.subclassesMissingSource, `Subclasses com fonte não informada no dado legado: esperado ${EXPECTED.subclassesMissingSource}, obtido ${subclassesMissingSource}.`);

let progressionEvents = 0;
const eventKinds = {};
for (const analysis of report.classes.analyses) {
  for (const row of analysis.bundle?.progression?.levels || []) {
    for (const event of row.features || []) {
      progressionEvents++;
      eventKinds[event.kind] = (eventKinds[event.kind] || 0) + 1;
    }
  }
}

const summary = {
  profile: api.profile.id,
  schema: `${api.schema.name}@${api.schema.version}`,
  classes: report.classes.total,
  classBundlesReady: report.classes.bundleReady,
  classesNativeReady: report.classes.nativeReady,
  classesNativeReview: report.classes.nativeReview,
  subclasses: report.subclasses.total,
  subclassBundlesReady: report.subclasses.bundleReady,
  classFeatures: classFeatureTotal,
  subclassFeatures: subclassFeatureTotal,
  classTables: classTableTotal,
  subclassTables: subclassTableTotal,
  progressionEvents,
  progressionEventKinds: eventKinds
};

fs.mkdirSync(path.join(root, 'tests', 'foundry-v13', 'class-bundles'), { recursive: true });
fs.writeFileSync(path.join(root, 'tests', 'foundry-v13', 'class-bundles', 'readiness.json'), JSON.stringify({ summary, nativeReview: nativeReview.map(item => ({ id: item.bundle.identity.grimorioId, name: item.bundle.identity.name, warnings: item.nativeMapping.warnings })), errors }, null, 2) + '\n');

console.log(JSON.stringify(summary));
if (nativeReview.length) {
  console.log('Casos especiais sinalizados pela camada de bundle (tratados pelo runtime/perfis da Fase 8):');
  for (const item of nativeReview) console.log(`- ${item.bundle.identity.name}: ${item.nativeMapping.warnings.join(' | ')}`);
}
if (errors.length) {
  console.error('Falhas do Grimório Class Bundle Fase 4:');
  for (const error of errors) console.error('- ' + error);
  process.exit(2);
}
console.log('Foundry Classes Fase 4: bundles validados sem bloqueios.');
