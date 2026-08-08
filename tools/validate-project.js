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

// Integridade da integração editorial de Zagalhta's Exolunar Collection v5.9.
const zagTitle = "Somnus Domina — Zagalhta's Exolunar Collection";
const zagClasses = classes.filter(item => item?.source?.title === zagTitle);
const zagSubclasses = subclasses.filter(item => item?.source?.title === zagTitle);
const zagCoreConcepts = zagSubclasses.filter(item => item.classId === 'dragoneer');
const zagTechDesignations = zagSubclasses.filter(item => item.classId === 'frame-pilot');
const zagStandard = zagSubclasses.filter(item => !['dragoneer', 'frame-pilot'].includes(item.classId));
const zagFeatureTotal = zagSubclasses.reduce((total, item) => total + (item.features || []).length, 0);
const zagTableTotal = zagSubclasses.reduce((total, item) => total + (item.tables || []).length, 0);
if (!registry.getSource('zagalhta-exolunar')) fail("Zagalhta: fonte zagalhta-exolunar ausente do registro central.");
if (zagClasses.length !== 2) fail(`Zagalhta: esperado 2 classes próprias, encontradas ${zagClasses.length}.`);
for (const cls of zagClasses) {
  const progression = progressions.find(item => item?.id === cls.id);
  if (!progression || progression.rows?.length !== 20) fail(`Zagalhta: progressão de ${cls.id} deve possuir 20 níveis.`);
}
if (zagCoreConcepts.length !== 9) fail(`Zagalhta: esperado 9 Conceitos Centrais do Cavaleiro Dracônico, encontrados ${zagCoreConcepts.length}.`);
if (zagTechDesignations.length !== 5) fail(`Zagalhta: esperado 5 Designações Tecnológicas do Piloto de Frame, encontradas ${zagTechDesignations.length}.`);
if (zagStandard.length !== 36) fail(`Zagalhta: esperado 36 subclasses adicionais, encontradas ${zagStandard.length}.`);
if (zagSubclasses.length !== 50) fail(`Zagalhta: esperado total de 50 novas entradas de especialização/subclasse, encontradas ${zagSubclasses.length}.`);
if (zagFeatureTotal !== 256) fail(`Zagalhta: esperado 256 características de subclasse/especialização, encontradas ${zagFeatureTotal}.`);
if (zagTableTotal !== 30) fail(`Zagalhta: esperado 30 tabelas estruturadas, encontradas ${zagTableTotal}.`);
for (const item of zagSubclasses) {
  if (!item.name || !item.originalName) fail(`Zagalhta: subclasse sem nome localizado/original em ${item.id}.`);
  for (const feature of item.features || []) {
    if (!feature.title || !feature.text) fail(`Zagalhta: característica incompleta em ${item.id}.`);
    const level = Number(feature.level);
    if (!Number.isFinite(level) || level < 1 || level > 20) fail(`Zagalhta: nível inválido em ${item.id}: ${feature.level}`);
    if (!feature.page) warn(`Zagalhta: característica sem página em ${item.id}: ${feature.title || '(sem título)'}`);
  }
  for (const table of item.tables || []) {
    if (!table.title || !Array.isArray(table.columns) || !table.columns.length || !Array.isArray(table.rows) || !table.rows.length) fail(`Zagalhta: tabela incompleta em ${item.id}.`);
  }
}
const bbbDragoneer = bbbSubclasses.filter(item => item.classId === 'dragoneer');
if (bbbDragoneer.length !== 3) fail(`Zagalhta/BBB: esperado 3 subclasses de Cavaleiro Dracônico herdadas de Blade, Bone, & Benefit, encontradas ${bbbDragoneer.length}.`);
if (bbbDragoneer.some(item => item.pendingParent)) fail('Zagalhta/BBB: as subclasses de Cavaleiro Dracônico não devem permanecer com classe-base pendente após a v5.9.');
const burdenIds = ['destimus', 'jalasaor', 'ombra', 'setanta', 'sihlu', 'zega'].map(name => `zagalhta-favored-soul-${name}`);
for (const id of burdenIds) {
  const item = subclasses.find(subclass => subclass.id === id);
  if (!item?.references?.some(ref => ref.title === 'COMPULSÃO DO FARDO')) fail(`Zagalhta: compulsão de Fardo ausente em ${id}.`);
}
ok(`Zagalhta: 2 classes, ${zagCoreConcepts.length} Conceitos Centrais, ${zagTechDesignations.length} Designações Tecnológicas, ${zagStandard.length} subclasses adicionais, ${zagFeatureTotal} características e ${zagTableTotal} tabelas verificados`);

// Integridade do Capítulo 7 — Magias de Zagalhta v5.10.
const zagSpellCatalog = catalogs.find(item => item.id === 'zagalhta-spells');
const expectedZagSpellNames = [
  'Antigravity Zone','Astral Collision','Astral Fissure','Astral Weapon','Aurashroud','Auto-Repair','Blasting Tail','Bright Arrow','Conjure Frame Echo','Cure Wounds','Dead Light','Dead Nova','Deathgate','Designate Constructs','Diamond Air','Dragon Strike','(Volcora’s) Empowered Familiar','Extinction','Force Horn','Freezing Lance','Frenzied Wyrmbolt','Galactic Meteor','Ghostly Bite','Gigaburst','Glittering Star Curtain','Gravitational Purge','Healing Word','Limited Wish','Magma Wave','Momentous Weapon','Mass Cure Wounds','Mass Healing Word','Occluding Mists','Open Communication','Outer Breath','Passage of Light','Phantom Breath','Power Word Roar','Propulsion','Radiant Barrage','Rain of Light','Ravenous Tornado','Repair Construct','Rose Tornado','Ruinous End','Seeking Spear','Shroud of Spines','Slipstream Gate','Slow','Sovereignty','Stadyfyre’s Principle','Stasis','Summon Belzer','Summon Frame Unit','Sunspot Arrow','Surging Scythe','Sweeping Glaive','Sympathetic Gateway','Thunder Tongue','Transmission','Vortex Drill','Winged Charge'
];
if (!zagSpellCatalog) fail('Zagalhta: catálogo zagalhta-spells ausente.');
else {
  if (zagSpellCatalog.spells.length !== 62) fail(`Zagalhta: esperado 62 entradas próprias no catálogo, encontradas ${zagSpellCatalog.spells.length}.`);
  for (const spell of zagSpellCatalog.spells) {
    if (!spell.originalName || !spell.name) fail(`Zagalhta: magia sem nome original/localizado: ${spell.id || '(sem id)'}.`);
    if (!spell.desc) fail(`Zagalhta: magia sem descrição traduzida: ${spell.id || spell.originalName}.`);
    if (!spell.classes) fail(`Zagalhta: magia sem lista de classes: ${spell.id || spell.originalName}.`);
    if (spell.sourcePage < 187 || spell.sourcePage > 207) fail(`Zagalhta: página de origem fora da biblioteca de magias em ${spell.id}: ${spell.sourcePage}.`);
  }
}
const dragonskinReprint = catalogs.flatMap(item => item.spells || []).find(spell => spell.id === 'lyre-dragonskin');
if (!dragonskinReprint?.otherSources?.some(item => registry.resolveSource(item)?.id === 'zagalhta-exolunar')) fail('Zagalhta: reimpressão de Dragonskin/Pele de Dragão não está vinculada à fonte.');
if (!String(dragonskinReprint?.classes || '').includes('Cavaleiro Dracônico') || !String(dragonskinReprint?.classes || '').includes('Mago')) fail('Zagalhta: Pele de Dragão não recebeu as listas de classe adicionais da nova fonte.');
const zagFilterSpells = catalogs.flatMap(catalog => (catalog.spells || []).map(spell => ({spell,catalog})))
  .filter(({spell,catalog}) => registry.spellGroupLabels({...spell,_catalogId:catalog.id,_sourceId:catalog.sourceId}).includes("Zagalhta's Exolunar Collection"));
if (zagFilterSpells.length !== 63) fail(`Zagalhta: filtro da fonte deve retornar 63 magias, mas retorna ${zagFilterSpells.length}.`);
const representedOriginalNames = new Set(zagSpellCatalog?.spells?.map(spell => spell.originalName) || []);
representedOriginalNames.add('Dragonskin');
for (const name of expectedZagSpellNames) if (!representedOriginalNames.has(name)) fail(`Zagalhta: magia do Capítulo 7 ausente: ${name}.`);
const zagLegacyNames = new Set(['Cure Wounds','Healing Word','Mass Cure Wounds','Mass Healing Word','Slow']);
for (const spell of zagSpellCatalog?.spells || []) if (zagLegacyNames.has(spell.originalName) && !(spell.traits || []).includes('Legado 5.19')) fail(`Zagalhta: versão Legacy sem identificação: ${spell.originalName}.`);
if (!(zagSpellCatalog?.spells || []).find(spell => spell.originalName === 'Summon Belzer')?.ritual) fail('Zagalhta: Invocar Belzer deve estar marcado como ritual.');
ok(`Zagalhta Capítulo 7: ${zagSpellCatalog?.spells?.length || 0} entradas próprias + 1 reimpressão vinculada = ${zagFilterSpells.length} magias verificadas`);

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
