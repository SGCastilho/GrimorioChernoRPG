#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');
const vm = require('vm');
const root = path.resolve(__dirname, '..');
global.window = global;
const load = file => vm.runInThisContext(fs.readFileSync(path.join(root, file), 'utf8'), { filename: file });
[
  'js/config.js','js/registry.js','data/sources.js','data/phb-spells.js','data/xanathar-spells.js',
  'data/tasha-spells.js','data/spellblade-spells.js','data/lyre-spells.js','data/blade-bone-benefit-spells.js',
  'data/zagalhta-spells.js','data/ryoko-spells.js','data/cultivator-homebrew-spells.js','data/export/foundry-v13-overrides.js',
  'js/exporters/registry.js','js/exporters/foundry-v13.js'
].forEach(load);

const all = global.GRIMORIO_REGISTRY.getSpellCatalogs().flatMap(c => c.spells);
const ids = [
  'phb-chuva-de-meteoros',          // decimal km -> exact integer metres
  'phb-ampliar-plantas',            // alternate activation -> Special
  'phb-aprisionamento',             // until dispelled
  'phb-sono',                       // structured sphere
  'xanathar-soneca',                // source spacing typo in duration
  'lyre-private-sanctum',           // variable area kept in target Special
  'bbb-midnight-howl',              // self radius override
  'zagalhta-extinction',            // sight + 8 km sphere
  'zagalhta-magma-wave',            // source metadata/prose discrepancy
  'spellblade-compelled-query',     // Psionic school technical fallback
  'lyre-divine-frost',              // source duration incomplete (review)
  'lyre-tamamos-arrowfall',         // source duration absent (review)
  'spellblade-sanctified-charge'    // source block absent (blocked)
];

const selected = ids.map(id => {
  const spell = all.find(item => item.id === id);
  if (!spell) throw new Error(`Magia de regressão ausente: ${id}`);
  return spell;
});

const outDir = path.join(root, 'tests', 'foundry-v13', 'phase2');
fs.mkdirSync(outDir, { recursive: true });
const results = [];
const exportable = [];
for (const spell of selected) {
  const analysis = global.GRIMORIO_FOUNDRY_V13.spell.analyze(spell);
  results.push({
    id: spell.id,
    name: spell.name,
    ok: analysis.ok,
    reviewRequired: analysis.reviewRequired,
    warnings: analysis.issues.warnings,
    errors: analysis.issues.errors,
    info: analysis.issues.info,
    normalized: {
      school: analysis.document.item.school,
      activation: analysis.document.activation,
      range: analysis.document.range,
      duration: analysis.document.duration,
      target: analysis.document.target,
      area: analysis.document.area
    }
  });
  if (analysis.ok) exportable.push(spell);
}

const batch = global.GRIMORIO_FOUNDRY_V13.spell.batchToYaml(exportable);
fs.writeFileSync(path.join(outDir, 'phase2-regression-exportable.yaml'), batch.yaml, 'utf8');
fs.writeFileSync(path.join(outDir, 'phase2-regression-results.json'), JSON.stringify({
  profile: global.GRIMORIO_FOUNDRY_V13.profile,
  totalCases: selected.length,
  exportableCases: exportable.length,
  results
}, null, 2) + '\n');
console.log(`Fase 2 regressão: ${selected.length} casos, ${exportable.length} YAMLs gerados.`);
