#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const root = path.resolve(__dirname, '..');
const indexHtml = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const scriptPaths = [...indexHtml.matchAll(/<script\s+src="([^"]+)"/g)]
  .map(match => match[1])
  .filter(file => !/^js\/(app|ui-enhancements|dynamic-consultation)\.js$/.test(file));

const context = { console };
context.window = context;
vm.createContext(context);

const errors = [];
const warnings = [];
const ok = message => console.log('✓ ' + message);
const fail = message => errors.push(message);
const warn = message => warnings.push(message);

for (const relative of scriptPaths) {
  const filename = path.join(root, relative);
  try {
    vm.runInContext(fs.readFileSync(filename, 'utf8'), context, { filename: relative });
  } catch (error) {
    fail(`Falha ao carregar ${relative}: ${error.message}`);
    break;
  }
}

if (errors.length) finish();

const registry = context.GRIMORIO_REGISTRY;
if (!registry) fail('GRIMORIO_REGISTRY não foi inicializado.');
if (errors.length) finish();

const sources = registry.getSources();
const catalogs = registry.getSpellCatalogs();
const classes = context.GRIMORIO_CLASSES || [];
const subclasses = context.GRIMORIO_SUBCLASSES || [];
const progressionStore = context.GRIMORIO_CLASS_PROGRESSIONS || {};
const progressions = Array.isArray(progressionStore) ? progressionStore : Object.values(progressionStore);

if (!sources.length) fail('Nenhuma fonte foi registrada.');
else ok(`${sources.length} fontes registradas`);

if (!catalogs.length) fail('Nenhum catálogo de magias foi registrado.');
else ok(`${catalogs.length} catálogos de magias registrados`);

const catalogIds = new Set();
const spellIds = new Map();
let spellTotal = 0;
for (const catalog of catalogs) {
  if (catalogIds.has(catalog.id)) fail(`ID de catálogo duplicado: ${catalog.id}`);
  catalogIds.add(catalog.id);
  if (!registry.getSource(catalog.sourceId)) fail(`Catálogo ${catalog.id} usa fonte inexistente: ${catalog.sourceId}`);
  if (!Array.isArray(catalog.spells)) {
    fail(`Catálogo ${catalog.id} não possui array de magias.`);
    continue;
  }
  spellTotal += catalog.spells.length;
  for (const spell of catalog.spells) {
    if (!spell || typeof spell !== 'object') {
      fail(`Entrada inválida em ${catalog.id}.`);
      continue;
    }
    if (!spell.id) fail(`Magia sem id em ${catalog.id}: ${spell.name || '(sem nome)'}`);
    if (!spell.name) fail(`Magia sem name em ${catalog.id}: ${spell.id || '(sem id)'}`);
    if (spell.id) {
      const previous = spellIds.get(spell.id);
      if (previous) fail(`ID de magia duplicado entre catálogos: ${spell.id} (${previous} e ${catalog.id})`);
      else spellIds.set(spell.id, catalog.id);
    }
    const level = Number(spell.level);
    if (!Number.isFinite(level) || level < 0 || level > 9) warn(`Nível incomum em ${spell.id || spell.name}: ${spell.level}`);
  }
}
ok(`${spellTotal} registros-base de magias/poderes validados`);

function duplicateIds(items, label) {
  const seen = new Set();
  for (const item of items) {
    if (!item?.id) {
      fail(`${label} sem id: ${item?.name || '(sem nome)'}`);
      continue;
    }
    if (seen.has(item.id)) fail(`ID duplicado em ${label}: ${item.id}`);
    seen.add(item.id);
  }
  return seen;
}

const classIds = duplicateIds(classes, 'classes');
duplicateIds(subclasses, 'subclasses');
ok(`${classes.length} classes e ${subclasses.length} subclasses com IDs verificados`);

let pendingParentCount = 0;
for (const subclass of subclasses) {
  if (classIds.has(subclass.classId)) continue;
  if (subclass.pendingParent && subclass.parentClassName) {
    pendingParentCount += 1;
    continue;
  }
  fail(`Subclasse ${subclass.id} referencia classId inexistente: ${subclass.classId}`);
}
if (pendingParentCount) ok(`${pendingParentCount} subclasses com classe-base externa documentada`);

const progressionIds = new Set(progressions.map(item => item?.id).filter(Boolean));
for (const cls of classes) {
  if (!progressionIds.has(cls.id)) fail(`Classe sem progressão estruturada: ${cls.id}`);
}
for (const progression of progressions) {
  if (progression?.id && !classIds.has(progression.id)) warn(`Progressão sem classe correspondente: ${progression.id}`);
}
ok(`${progressionIds.size} progressões estruturadas verificadas`);


// Integridade da integração editorial de Blade, Bone, & Benefit v5.8.
const bbbTitle = 'Somnus Domina — Blade, Bone, & Benefit';
const bbbClass = classes.find(item => item.id === 'blood-minister-somnus');
const bbbSubclasses = subclasses.filter(item => item?.source?.title === bbbTitle);
if (!bbbClass) fail('Blade, Bone, & Benefit: classe blood-minister-somnus ausente.');
else {
  const bloodProgression = progressions.find(item => item?.id === bbbClass.id);
  if (!bloodProgression || bloodProgression.rows?.length !== 20) fail('Blade, Bone, & Benefit: progressão do Ministro de Sangue deve possuir 20 níveis.');
  if ((bbbClass.features || []).length !== 17) fail(`Blade, Bone, & Benefit: esperado 17 características de classe, encontradas ${(bbbClass.features || []).length}.`);
}
const bbbBloodSects = bbbSubclasses.filter(item => item.classId === 'blood-minister-somnus');
const bbbChapterX = bbbSubclasses.filter(item => item.classId !== 'blood-minister-somnus');
const bbbFeatureTotal = bbbSubclasses.reduce((total, item) => total + (item.features || []).length, 0);
const bbbTableTotal = bbbSubclasses.reduce((total, item) => total + (item.tables || []).length, 0);
const bbbReferenceTotal = bbbSubclasses.reduce((total, item) => total + (item.references || []).length, 0);
if (bbbBloodSects.length !== 8) fail(`Blade, Bone, & Benefit: esperado 8 Seitas Genéticas, encontradas ${bbbBloodSects.length}.`);
if (bbbChapterX.length !== 55) fail(`Blade, Bone, & Benefit: esperado 55 subclasses enumeradas no Capítulo X, encontradas ${bbbChapterX.length}.`);
if (bbbFeatureTotal !== 339) fail(`Blade, Bone, & Benefit: esperado 339 características de subclasse, encontradas ${bbbFeatureTotal}.`);
if (bbbTableTotal !== 12) fail(`Blade, Bone, & Benefit: esperado 12 tabelas complementares estruturadas, encontradas ${bbbTableTotal}.`);
if (bbbReferenceTotal !== 12) fail(`Blade, Bone, & Benefit: esperado 12 blocos complementares sem nível, encontrados ${bbbReferenceTotal}.`);
for (const item of bbbSubclasses) {
  for (const feature of item.features || []) {
    if (!feature.title || !feature.text) fail(`Blade, Bone, & Benefit: característica incompleta em ${item.id}.`);
    const level = Number(feature.level);
    if (!Number.isFinite(level) || level < 1 || level > 20) fail(`Blade, Bone, & Benefit: nível inválido em ${item.id}: ${feature.level}`);
    if (!feature.page) warn(`Blade, Bone, & Benefit: característica sem página em ${item.id}: ${feature.title || '(sem título)'}`);
  }
  for (const table of item.tables || []) {
    if (!table.title || !Array.isArray(table.columns) || !table.columns.length || !Array.isArray(table.rows) || !table.rows.length) fail(`Blade, Bone, & Benefit: tabela incompleta em ${item.id}.`);
  }
}
ok(`Blade, Bone, & Benefit: 1 classe, ${bbbBloodSects.length} Seitas Genéticas, ${bbbChapterX.length} subclasses do Capítulo X, ${bbbFeatureTotal} características, ${bbbTableTotal} tabelas e ${bbbReferenceTotal} blocos complementares verificados`);

const sourceEntities = [
  ...classes.map(item => ({ type: 'classe', id: item.id, source: item.source })),
  ...subclasses.map(item => ({ type: 'subclasse', id: item.id, source: item.source }))
];
for (const entity of sourceEntities) {
  if (!entity.source) continue;
  if (!registry.resolveSource(entity.source)) warn(`${entity.type} ${entity.id} usa fonte não registrada: ${entity.source.title || entity.source}`);
}

for (const catalog of catalogs) {
  for (const spell of catalog.spells) {
    const tagged = { ...spell, _catalogId: catalog.id, _sourceId: catalog.sourceId };
    const groups = registry.spellGroupLabels(tagged);
    if (!groups.length) fail(`Magia ${spell.id} não pode ser agrupada por fonte.`);
    for (const legacy of spell.legacyVersions || []) {
      if ((legacy.source || legacy.category) && !registry.resolveSource(legacy)) warn(`Versão alternativa de ${spell.id} usa fonte não registrada: ${legacy.source || legacy.category}`);
    }
  }
}
ok('Agrupamento de fontes das magias verificado');

const filterGroups = new Set();
for (const catalog of catalogs) {
  for (const spell of catalog.spells) {
    registry.spellGroupLabels({ ...spell, _catalogId: catalog.id, _sourceId: catalog.sourceId }).forEach(group => filterGroups.add(group));
  }
}
console.log('  Filtros de fonte detectados: ' + [...filterGroups].sort((a, b) => a.localeCompare(b, 'pt-BR')).join(' · '));

finish();

function finish() {
  if (warnings.length) {
    console.log('\nAvisos:');
    warnings.forEach(message => console.log('! ' + message));
  }
  if (errors.length) {
    console.error('\nErros:');
    errors.forEach(message => console.error('✗ ' + message));
    console.error(`\nValidação reprovada: ${errors.length} erro(s), ${warnings.length} aviso(s).`);
    process.exit(1);
  }
  console.log(`\nValidação aprovada${warnings.length ? ` com ${warnings.length} aviso(s)` : ' sem avisos'}.`);
}
