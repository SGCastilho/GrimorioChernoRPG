#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const root = path.resolve(__dirname, '..');
const context = { console };
context.window = context;
vm.createContext(context);
for (const relative of [
  'js/registry.js',
  'data/sources.js',
  'data/feats/phb-2014-feats.js',
  'data/feats/ryoko-yokai-realms-feats.js',
  'data/export/foundry-feat-automation.js',
  'js/exporters/registry.js',
  'js/exporters/foundry-feat-bundle.js',
  'js/exporters/foundry-feat-package.js'
]) {
  vm.runInContext(fs.readFileSync(path.join(root, relative), 'utf8'), context, { filename: relative });
}

const api = context.GRIMORIO_FOUNDRY_FEAT_PACKAGE;
const pkg = api.buildCatalogPackage('ryoko-yokai-realms-feats');
const validation = api.validatePackage(pkg);
if (!validation.ok) {
  console.error(validation.errors.join('\n'));
  process.exit(1);
}
const out = path.join(root, 'foundry/grimorio-importer/examples/feats/ryoko-yokai-realms-feats-package-v2.json');
fs.writeFileSync(out, api.stringify(pkg), 'utf8');
console.log(`✓ ${pkg.summary.feats} talentos de Ryoko exportados para ${path.relative(root, out)}`);
