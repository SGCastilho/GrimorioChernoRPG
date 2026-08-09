#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');
const vm = require('vm');
const root = path.resolve(__dirname, '..');
global.window = global;
function load(file) { vm.runInThisContext(fs.readFileSync(path.join(root, file), 'utf8'), { filename: file }); }
[
  'js/config.js','js/registry.js','data/sources.js','data/classes.js','data/progression.js','data/tasha-artificer.js','data/lyre-classes.js','data/zagalhta-classes.js','data/ryoko-classes.js','data/lyre-subclasses.js','data/blade-bone-benefit-classes.js','data/zagalhta-specializations.js','data/zagalhta-subclasses-standard.js','data/zagalhta-subclasses-standard-2.js','data/zagalhta-subclasses-standard-3.js','data/zagalhta-compulsions.js','data/blade-bone-benefit-subclasses.js','data/ryoko-subclasses.js','data/ryoko-optional-features.js','data/homebrew-emissario.js','data/xanathar-subclasses.js','data/tasha-subclasses.js','data/scag-subclasses.js','data/homebrew-paladin-bahamut.js','data/homebrew-spellblade-class.js','data/cultivator-class.js','data/export/foundry-class-overrides.js','js/exporters/registry.js','js/exporters/foundry-class-bundle.js'
].forEach(load);

const api = global.GRIMORIO_FOUNDRY_CLASS_BUNDLE;
const out = path.join(root, 'tests', 'foundry-v13', 'class-bundles', 'samples');
fs.mkdirSync(out, { recursive: true });
const samples = [
  ['class', 'barbarian'],
  ['class', 'bender-ryoko'],
  ['class', 'dragoneer'],
  ['subclass', 'ryoko-barbarian-path-kaiju'],
  ['subclass', 'ryoko-tamer-sensei']
];
for (const [kind, id] of samples) {
  const item = kind === 'class' ? global.GRIMORIO_CLASSES.find(entry => entry.id === id) : global.GRIMORIO_SUBCLASSES.find(entry => entry.id === id);
  if (!item) throw new Error(`Amostra não encontrada: ${kind} ${id}`);
  const bundle = kind === 'class' ? api.buildClassBundle(item) : api.buildSubclassBundle(item);
  const file = `${kind}-${id}.json`;
  fs.writeFileSync(path.join(out, file), api.stringify(bundle));
  console.log(`${file}: ${bundle.identity.name}`);
}


const catalogIndex = {
  schema: api.schema,
  profile: api.profile,
  classes: global.GRIMORIO_CLASSES.map(cls => {
    const analysis = api.inspectClass(cls);
    return {
      grimorioId: cls.id,
      identifier: analysis.bundle.identity.identifier,
      name: cls.name,
      source: analysis.bundle.source,
      nativeMapping: analysis.nativeMapping,
      featureCount: analysis.bundle.features.length,
      subclassCount: analysis.bundle.subclassSelection.options.length,
      subclassSelectionLevel: analysis.bundle.subclassSelection.selectionLevel
    };
  }),
  subclasses: global.GRIMORIO_SUBCLASSES.map(subclass => {
    const analysis = api.inspectSubclass(subclass);
    return {
      grimorioId: subclass.id,
      identifier: analysis.bundle.identity.identifier,
      name: subclass.name,
      parentClass: analysis.bundle.parentClass,
      source: analysis.bundle.source,
      selectionLevel: analysis.bundle.subclass.selectionLevel,
      featureCount: analysis.bundle.features.length
    };
  })
};
fs.writeFileSync(path.join(root, 'tests', 'foundry-v13', 'class-bundles', 'catalog-index.json'), JSON.stringify(catalogIndex, null, 2) + '\n');
console.log(`catalog-index.json: ${catalogIndex.classes.length} classes / ${catalogIndex.subclasses.length} subclasses`);
