#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const root = path.resolve(__dirname, '..');
global.window = global;

function load(relativePath) {
  const filename = path.join(root, relativePath);
  vm.runInThisContext(fs.readFileSync(filename, 'utf8'), { filename });
}

[
  'js/config.js',
  'js/registry.js',
  'data/sources.js',
  'data/phb-spells.js',
  'data/zagalhta-spells.js',
  'data/ryoko-spells.js','data/cultivator-homebrew-spells.js',
  'data/export/foundry-v13-overrides.js',
  'js/exporters/registry.js',
  'js/exporters/foundry-v13.js'
].forEach(load);

const exporter = global.GRIMORIO_FOUNDRY_V13;
const catalogs = global.GRIMORIO_REGISTRY.getSpellCatalogs();
const spells = catalogs.flatMap(catalog => catalog.spells);
const ids = [
  'phb-rajada-mistica',
  'phb-escudo-arcano',
  'ryoko-acid-rain',
  'ryoko-cloud-stride',
  'zagalhta-conjure-frame-echo'
];

const selected = ids.map(id => {
  const spell = spells.find(entry => entry.id === id);
  if (!spell) throw new Error(`Magia da prova não encontrada: ${id}`);
  return spell;
});

const outputDir = path.join(root, 'tests', 'foundry-v13', 'phase0');
fs.mkdirSync(outputDir, { recursive: true });

const results = selected.map((spell, index) => {
  const result = exporter.spell.toYaml(spell);
  const basename = `${String(index + 1).padStart(2, '0')}-${spell.id}.yaml`;
  fs.writeFileSync(path.join(outputDir, basename), result.yaml, 'utf8');
  return {
    id: spell.id,
    name: spell.name,
    file: basename,
    reviewRequired: result.reviewRequired,
    errors: result.issues.errors,
    warnings: result.issues.warnings,
    info: result.issues.info
  };
});

const batch = exporter.spell.batchToYaml(selected);
fs.writeFileSync(path.join(outputDir, '00-lote-fase0-5-magias.yaml'), batch.yaml, 'utf8');
fs.writeFileSync(path.join(outputDir, 'phase0-results.json'), JSON.stringify({
  profile: exporter.profile,
  generatedAt: new Date().toISOString(),
  tests: results
}, null, 2) + '\n', 'utf8');

console.log(`Fase 0 gerada: ${results.length} magias`);
for (const result of results) {
  console.log(`- ${result.name}: ${result.errors.length ? 'ERRO' : result.reviewRequired ? 'REVISAR' : 'PRONTO'}`);
  for (const warning of result.warnings) console.log(`  aviso: ${warning}`);
  for (const info of result.info) console.log(`  info: ${info}`);
}
