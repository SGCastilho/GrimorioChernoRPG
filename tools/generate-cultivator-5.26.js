#!/usr/bin/env node
'use strict';
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const root = path.resolve(__dirname, '..');
global.window = global;
function load(file) { vm.runInThisContext(fs.readFileSync(path.join(root, file), 'utf8'), { filename: file }); }
[
  'js/config.js','js/registry.js','data/sources.js','data/classes.js','data/progression.js','data/tasha-artificer.js','data/lyre-classes.js','data/zagalhta-classes.js','data/ryoko-classes.js','data/lyre-subclasses.js','data/blade-bone-benefit-classes.js','data/zagalhta-specializations.js','data/zagalhta-subclasses-standard.js','data/zagalhta-subclasses-standard-2.js','data/zagalhta-subclasses-standard-3.js','data/zagalhta-compulsions.js','data/blade-bone-benefit-subclasses.js','data/ryoko-subclasses.js','data/ryoko-optional-features.js','data/homebrew-emissario.js','data/xanathar-subclasses.js','data/tasha-subclasses.js','data/scag-subclasses.js','data/homebrew-paladin-bahamut.js','data/export/foundry-class-overrides.js','js/exporters/registry.js','data/homebrew-spellblade-class.js','data/cultivator-class.js','js/exporters/foundry-class-bundle.js','js/exporters/foundry-class-package.js'
].forEach(load);

const bundleApi = global.GRIMORIO_FOUNDRY_CLASS_BUNDLE;
const packageApi = global.GRIMORIO_FOUNDRY_CLASS_PACKAGE;
if (!bundleApi || !packageApi) throw new Error('APIs Foundry de classe/pacote indisponíveis.');

const out = path.join(root, 'tests', 'foundry-v13', 'cultivator');
fs.rmSync(out, { recursive: true, force: true });
fs.mkdirSync(out, { recursive: true });
const write = (name, value) => fs.writeFileSync(path.join(out, name), JSON.stringify(value, null, 2) + '\n');

const cls = packageApi.buildSingleClassBundle('cultivator-dandwiki');
const evil = packageApi.buildSingleSubclassBundle('cultivator-calling-evil');
const achromatic = packageApi.buildSingleSubclassBundle('cultivator-calling-achromatic');
const heaven = packageApi.buildSingleSubclassBundle('cultivator-calling-heaven');
const full = packageApi.buildClassPackage('cultivator-dandwiki');

write('classe-cultivador.json', cls);
write('subclasse-chamado-do-mal.json', evil);
write('subclasse-chamado-acromatico.json', achromatic);
write('subclasse-chamado-do-ceu.json', heaven);
write('pacote-cultivador-completo.json', full);
write('catalog.json', {
  appVersion: global.APP_VERSION || '5.26.0',
  importerVersion: '0.9.2',
  target: { foundry: '13.351', dnd5e: '5.3.3' },
  class: { id: 'cultivator-dandwiki', name: 'Cultivador' },
  subclasses: [
    { id: 'cultivator-calling-evil', name: 'Chamado do Mal' },
    { id: 'cultivator-calling-achromatic', name: 'Chamado Acromático' },
    { id: 'cultivator-calling-heaven', name: 'Chamado do Céu' }
  ],
  files: [
    'classe-cultivador.json',
    'subclasse-chamado-do-mal.json',
    'subclasse-chamado-acromatico.json',
    'subclasse-chamado-do-ceu.json',
    'pacote-cultivador-completo.json'
  ],
  packageBundles: full.bundles?.length ?? 0,
  sourceFeatures: (full.bundles ?? []).reduce((n, b) => n + (b.features?.length ?? 0), 0)
});

console.log(`CULTIVATOR_FOUNDRY_FILES_OK ${full.bundles?.length ?? 0} bundles / ${(full.bundles ?? []).reduce((n,b)=>n+(b.features?.length ?? 0),0)} source features`);
