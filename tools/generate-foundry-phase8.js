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
if (!api) throw new Error('GRIMORIO_FOUNDRY_CLASS_BUNDLE indisponível.');
const specialParents = new Set(['dragoneer','frame-pilot','bender','tamer','blood-minister']);
const base = path.join(root, 'tests', 'foundry-v13', 'phase8');
const classDir = path.join(base, 'bundles', 'classes');
const subDir = path.join(base, 'bundles', 'subclasses');
const sampleDir = path.join(base, 'samples');
fs.rmSync(base, { recursive: true, force: true });
fs.mkdirSync(classDir, { recursive: true });
fs.mkdirSync(subDir, { recursive: true });
fs.mkdirSync(sampleDir, { recursive: true });

const classes = [];
for (const cls of global.GRIMORIO_CLASSES) {
  const analysis = api.inspectClass(cls);
  if (!analysis.ok) throw new Error(`Bundle inválido para classe ${cls.id}: ${analysis.errors.join('; ')}`);
  const bundle = analysis.bundle;
  const file = `${bundle.identity.identifier}.json`;
  fs.writeFileSync(path.join(classDir, file), api.stringify(bundle));
  classes.push({
    grimorioId: cls.id,
    identifier: bundle.identity.identifier,
    name: bundle.identity.name,
    file: `bundles/classes/${file}`,
    featureCount: bundle.features.length,
    subclassCount: bundle.subclassSelection?.options?.length ?? 0,
    special: specialParents.has(bundle.identity.identifier),
    nativeMappingStatus: analysis.nativeMapping?.status ?? bundle.nativeMapping?.status ?? ''
  });
}

const subclasses = [];
for (const sub of global.GRIMORIO_SUBCLASSES) {
  const analysis = api.inspectSubclass(sub);
  if (!analysis.ok) throw new Error(`Bundle inválido para subclasse ${sub.id}: ${analysis.errors.join('; ')}`);
  const bundle = analysis.bundle;
  const file = `${bundle.identity.identifier}.json`;
  fs.writeFileSync(path.join(subDir, file), api.stringify(bundle));
  subclasses.push({
    grimorioId: sub.id,
    identifier: bundle.identity.identifier,
    name: bundle.identity.name,
    parentIdentifier: bundle.parentClass.identifier,
    file: `bundles/subclasses/${file}`,
    featureCount: bundle.features.length,
    specialParent: specialParents.has(bundle.parentClass.identifier)
  });
}

const sampleIds = [
  'dragoneer','frame-pilot','bender','tamer','blood-minister',
  'zagalhta-dragoneer-bloodweaver','zagalhta-dragoneer-raging-titan','zagalhta-dragoneer-auraphage','zagalhta-dragoneer-royal-sweeper','bbb-dragoneer-fortune-veil',
  'zagalhta-frame-pilot-coordinator','ryoko-bender-fusion','ryoko-tamer-sensei'
];
for (const id of sampleIds) {
  const c = classes.find(x => x.identifier === id);
  if (c) fs.copyFileSync(path.join(base, c.file), path.join(sampleDir, `${id}.json`));
  const s = subclasses.find(x => x.identifier === id || x.grimorioId === id);
  if (s) fs.copyFileSync(path.join(base, s.file), path.join(sampleDir, `${s.identifier}.json`));
}
// Add one genetic sect automatically as representative if exact identifier differs across source versions.
const sect = subclasses.find(x => x.parentIdentifier === 'blood-minister');
if (sect) fs.copyFileSync(path.join(base, sect.file), path.join(sampleDir, `${sect.identifier}.json`));

const specialClasses = classes.filter(x => x.special);
const specialSubclasses = subclasses.filter(x => x.specialParent);
const catalog = {
  schema: 'grimorio-foundry-phase8-catalog',
  version: 1,
  profile: api.profile.id,
  generatedFor: { foundry: '13.351', dnd5e: '5.3.3', importer: '0.4.0' },
  summary: {
    classes: classes.length,
    subclasses: subclasses.length,
    specialClasses: specialClasses.length,
    specialSubclasses: specialSubclasses.length,
    classFeatures: classes.reduce((n, x) => n + x.featureCount, 0),
    subclassFeatures: subclasses.reduce((n, x) => n + x.featureCount, 0)
  },
  classes,
  subclasses,
  special: {
    classes: specialClasses,
    subclasses: specialSubclasses
  }
};
fs.writeFileSync(path.join(base, 'catalog.json'), JSON.stringify(catalog, null, 2) + '\n');
console.log(`PHASE8_BUNDLES_OK ${classes.length} classes / ${subclasses.length} subclasses / ${specialClasses.length} classes especiais / ${specialSubclasses.length} subclasses especiais`);
