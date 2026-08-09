#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');
const vm = require('vm');
const root = path.resolve(__dirname, '..');
global.window = global;
function load(file) { vm.runInThisContext(fs.readFileSync(path.join(root, file), 'utf8'), { filename: file }); }
[
  'js/config.js','js/registry.js','data/sources.js','data/classes.js','data/progression.js','data/tasha-artificer.js','data/lyre-classes.js','data/zagalhta-classes.js','data/ryoko-classes.js','data/lyre-subclasses.js','data/blade-bone-benefit-classes.js','data/zagalhta-specializations.js','data/zagalhta-subclasses-standard.js','data/zagalhta-subclasses-standard-2.js','data/zagalhta-subclasses-standard-3.js','data/zagalhta-compulsions.js','data/blade-bone-benefit-subclasses.js','data/ryoko-subclasses.js','data/ryoko-optional-features.js','data/homebrew-emissario.js','data/xanathar-subclasses.js','data/tasha-subclasses.js','data/scag-subclasses.js','data/homebrew-paladin-bahamut.js','data/homebrew-spellblade-class.js','data/export/foundry-class-overrides.js','js/exporters/registry.js','js/exporters/foundry-class-bundle.js','js/exporters/foundry-class-package.js'
].forEach(load);

const bundleApi = global.GRIMORIO_FOUNDRY_CLASS_BUNDLE;
const packageApi = global.GRIMORIO_FOUNDRY_CLASS_PACKAGE;
if (!bundleApi || !packageApi) throw new Error('Exportadores Foundry de classes indisponíveis.');
const out = path.join(root, 'tests', 'foundry-v13', 'phase9');
fs.rmSync(out, { recursive: true, force: true });
fs.mkdirSync(path.join(out, 'packages'), { recursive: true });
fs.mkdirSync(path.join(out, 'bundles'), { recursive: true });

const full = packageApi.buildCatalogPackage();
const fullValidation = packageApi.validatePackage(full);
if (!fullValidation.ok) throw new Error(fullValidation.errors.join('\n'));
fs.writeFileSync(path.join(out, 'packages', 'catalogo-completo.json'), packageApi.stringify(full));

const sampleClasses = ['barbarian', 'dragoneer', 'bender-ryoko', 'blood-minister-somnus'];
const samples = [];
for (const id of sampleClasses) {
  const cls = global.GRIMORIO_CLASSES.find(x => x.id === id);
  if (!cls) throw new Error(`Classe de amostra ausente: ${id}`);
  const pkg = packageApi.buildClassPackage(id);
  const validation = packageApi.validatePackage(pkg);
  if (!validation.ok) throw new Error(`${cls.name}: ${validation.errors.join('; ')}`);
  const file = `${pkg.identity.id}.json`;
  fs.writeFileSync(path.join(out, 'packages', file), packageApi.stringify(pkg));
  samples.push({ id, name: cls.name, file: `packages/${file}`, summary: pkg.summary });
}

const barbarian = global.GRIMORIO_CLASSES.find(x => x.id === 'barbarian');
const pathKaiju = global.GRIMORIO_SUBCLASSES.find(x => x.id === 'ryoko-barbarian-path-kaiju');
if (!barbarian || !pathKaiju) throw new Error('Amostras individuais não encontradas.');
fs.writeFileSync(path.join(out, 'bundles', 'barbarian.json'), bundleApi.stringify(packageApi.buildSingleClassBundle(barbarian.id)));
fs.writeFileSync(path.join(out, 'bundles', 'path-of-the-kaiju.json'), bundleApi.stringify(packageApi.buildSingleSubclassBundle(pathKaiju.id)));

const catalog = {
  schema: 'grimorio-foundry-phase9-catalog',
  version: 1,
  generatedFor: { foundry: '13.351', dnd5e: '5.3.3', importer: '0.5.0', grimorio: '5.21.0' },
  packageProfile: packageApi.profile.id,
  packageSchema: `${packageApi.schema.name}@${packageApi.schema.version}`,
  summary: full.summary,
  fullCatalogFile: 'packages/catalogo-completo.json',
  samples
};
fs.writeFileSync(path.join(out, 'catalog.json'), JSON.stringify(catalog, null, 2) + '\n');
console.log(`PHASE9_PACKAGES_OK ${full.summary.bundles} bundles / ${full.summary.classes} classes / ${full.summary.subclasses} subclasses / ${full.summary.features} source features`);
