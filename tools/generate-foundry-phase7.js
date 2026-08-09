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
const base = path.join(root, 'tests', 'foundry-v13', 'phase7');
const classDir = path.join(base, 'bundles', 'classes');
const subDir = path.join(base, 'bundles', 'subclasses');
fs.rmSync(base, { recursive: true, force: true });
fs.mkdirSync(classDir, { recursive: true });
fs.mkdirSync(subDir, { recursive: true });

const classEntries = global.GRIMORIO_CLASSES.map(cls => ({ cls, analysis: api.inspectClass(cls) }));
const readyClasses = classEntries.filter(x => x.analysis.ok && x.analysis.nativeMapping?.status === 'ready');
const reviewClasses = classEntries.filter(x => x.analysis.ok && x.analysis.nativeMapping?.status !== 'ready');
const readyIdentifiers = new Set(readyClasses.map(x => x.analysis.bundle.identity.identifier));

const classes = [];
for (const { cls, analysis } of readyClasses) {
  const bundle = analysis.bundle;
  const file = `${bundle.identity.identifier}.json`;
  fs.writeFileSync(path.join(classDir, file), api.stringify(bundle));
  classes.push({ grimorioId: cls.id, identifier: bundle.identity.identifier, name: bundle.identity.name, file: `bundles/classes/${file}`, featureCount: bundle.features.length, subclassCount: bundle.subclassSelection?.options?.length ?? 0 });
}

const subclasses = [];
const blockedSubclasses = [];
for (const sub of global.GRIMORIO_SUBCLASSES) {
  const analysis = api.inspectSubclass(sub);
  if (!analysis.ok) throw new Error(`Bundle inválido para ${sub.id}: ${analysis.errors.join('; ')}`);
  const bundle = analysis.bundle;
  if (readyIdentifiers.has(bundle.parentClass.identifier)) {
    const file = `${bundle.identity.identifier}.json`;
    fs.writeFileSync(path.join(subDir, file), api.stringify(bundle));
    subclasses.push({ grimorioId: sub.id, identifier: bundle.identity.identifier, name: bundle.identity.name, parentIdentifier: bundle.parentClass.identifier, file: `bundles/subclasses/${file}`, featureCount: bundle.features.length });
  } else {
    blockedSubclasses.push({ grimorioId: sub.id, identifier: bundle.identity.identifier, name: bundle.identity.name, parentIdentifier: bundle.parentClass.identifier });
  }
}

const catalog = {
  schema: 'grimorio-foundry-phase7-catalog',
  version: 1,
  profile: api.profile.id,
  generatedFor: { foundry: '13.351', dnd5e: '5.3.3', importer: '0.3.0' },
  summary: {
    classes: classes.length,
    subclasses: subclasses.length,
    reviewClasses: reviewClasses.length,
    blockedSubclasses: blockedSubclasses.length,
    classFeatures: classes.reduce((n, x) => n + x.featureCount, 0),
    subclassFeatures: subclasses.reduce((n, x) => n + x.featureCount, 0)
  },
  classes,
  subclasses,
  reserved: {
    classes: reviewClasses.map(({ cls, analysis }) => ({ grimorioId: cls.id, identifier: analysis.bundle.identity.identifier, name: analysis.bundle.identity.name, warnings: analysis.nativeMapping?.warnings ?? [] })),
    subclasses: blockedSubclasses
  }
};
fs.writeFileSync(path.join(base, 'catalog.json'), JSON.stringify(catalog, null, 2) + '\n');
console.log(`PHASE7_BUNDLES_OK ${classes.length} classes / ${subclasses.length} subclasses / ${reviewClasses.length} classes especiais / ${blockedSubclasses.length} subclasses reservadas`);
