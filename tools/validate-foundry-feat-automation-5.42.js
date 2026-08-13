#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');
const vm = require('vm');
const root = path.resolve(__dirname, '..');
const read = file => fs.readFileSync(path.join(root, file), 'utf8');
const errors = [];
const ok = (condition, message) => { if (condition) console.log('✓ ' + message); else errors.push(message); };

const context = { console };
context.window = context;
vm.createContext(context);
for (const file of [
  'js/registry.js',
  'data/sources.js',
  'data/feats/phb-2014-feats.js',
  'data/export/foundry-feat-automation.js',
  'js/exporters/registry.js',
  'js/exporters/foundry-feat-bundle.js',
  'js/exporters/foundry-feat-package.js'
]) {
  try { vm.runInContext(read(file), context, { filename: file }); }
  catch (error) { errors.push(`${file}: ${error.message}`); }
}

const reg = context.GRIMORIO_REGISTRY;
const automationApi = context.GRIMORIO_FOUNDRY_FEAT_AUTOMATION;
const bundleApi = context.GRIMORIO_FOUNDRY_FEAT_BUNDLE;
const packageApi = context.GRIMORIO_FOUNDRY_FEAT_PACKAGE;
const feats = reg?.getFeatCatalogs?.().flatMap(catalog => catalog.feats) || [];

ok(feats.length === 42, 'catálogo mantém 42 Talentos do Livro do Jogador');
ok(automationApi?.profileCount === 42, 'existem 42 perfis explícitos de automação');
ok(automationApi?.schema?.name === 'grimorio-foundry-feat-automation-plan' && automationApi?.schema?.version === 1, 'contrato de automação é grimorio-foundry-feat-automation-plan@1');
ok(automationApi?.target?.minimumImporterVersion === '0.12.0', 'plano declara Grimório Importer 0.12.0 como consumidor mínimo');

const audit = automationApi?.audit?.(feats);
ok(audit?.ok === true, 'auditoria dos 42 perfis passa sem bloqueios');
if (audit && !audit.ok) errors.push(...audit.errors);
if (audit?.warnings?.length) errors.push(...audit.warnings.map(w => 'warning inesperado: ' + w));
const expectedSummary = { feats:42, profiles:42, full:6, partial:36, description:0, advancements:28, effects:10, activities:22, uses:2, runtime:56, limitations:37 };
for (const [key, value] of Object.entries(expectedSummary)) ok(audit?.summary?.[key] === value, `resumo FA-1 ${key} = ${value}`);

ok(bundleApi?.schema?.name === 'grimorio-foundry-feat-bundle' && bundleApi?.schema?.version === 2, 'Feat Bundle foi promovido para v2');
ok(bundleApi?.profile?.id === 'foundry13-dnd5e533-grimorio-feat-bundle-v2', 'perfil do Feat Bundle v2 está correto');
ok(bundleApi?.profile?.minimumImporterVersion === '0.12.0', 'Feat Bundle v2 exige Importer 0.12.0+');
ok(packageApi?.schema?.name === 'grimorio-foundry-feat-package' && packageApi?.schema?.version === 2, 'Feat Package foi promovido para v2');
ok(packageApi?.profile?.minimumImporterVersion === '0.12.0', 'Feat Package v2 exige Importer 0.12.0+');

let pkg = null;
try { pkg = packageApi.buildAllFeatPackage(); }
catch (error) { errors.push('buildAllFeatPackage: ' + error.message); }
if (pkg) {
  const validation = packageApi.validatePackage(pkg);
  ok(validation.ok, 'pacote completo v2 passa na validação');
  if (!validation.ok) errors.push(...validation.errors);
  ok(pkg.bundles.length === 42 && pkg.summary.feats === 42, 'pacote v2 contém 42 bundles');
  ok(pkg.bundles.every(bundle => bundle.schemaVersion === 2 && bundle.automation?.schema === 'grimorio-foundry-feat-automation-plan'), 'todos os bundles carregam plano de automação v1');
  for (const [key, value] of Object.entries(expectedSummary)) {
    if (['feats'].includes(key)) continue;
    if (key === 'profiles') ok(pkg.summary.automation.profiles === value, `pacote resume ${value} perfis de automação`);
    else ok(pkg.summary.automation[key] === value, `pacote resume ${key} = ${value}`);
  }
}

function bundle(id) {
  try { return bundleApi.buildFeatBundle(id); }
  catch (error) { errors.push(`${id}: ${error.message}`); return null; }
}
const elemental = bundle('phb-2014-adepto-elemental');
ok(elemental?.feat?.repeatable === true && elemental?.automation?.runtime?.length === 2, 'Adepto Elemental preserva repetibilidade e runtime específico por dano');
const alert = bundle('phb-2014-alerta');
ok(alert?.automation?.effects?.some(e => e.mechanic === 'initiative-bonus' && e.value === 5), 'Alerta declara +5 de iniciativa como efeito seguro');
const warCaster = bundle('phb-2014-conjurador-de-guerra');
ok(warCaster?.automation?.effects?.length === 0 && warCaster?.automation?.runtime?.some(r => r.trigger === 'concentration-save-after-damage'), 'Conjurador de Guerra não cria vantagem global de Constituição');
const healer = bundle('phb-2014-curandeiro');
ok(healer?.automation?.activities?.length === 2, 'Curandeiro possui Activities separadas para estabilizar e tratar ferimentos');
const heavyArmor = bundle('phb-2014-maestria-em-armadura-pesada');
ok(heavyArmor?.automation?.advancements?.some(a => a.type === 'ability-score') && heavyArmor?.automation?.runtime?.some(r => r.trigger === 'damage-application'), 'Maestria em Armadura Pesada separa +1 Força e redução condicional de dano');
const observant = bundle('phb-2014-observador');
ok(observant?.automation?.effects?.filter(e => e.mechanic === 'skill-passive-bonus').length === 2, 'Observador declara +5 nas duas passivas sem alterar testes ativos');
const tough = bundle('phb-2014-robusto');
ok(tough?.automation?.tier === 'full' && tough?.automation?.effects?.some(e => e.mechanic === 'hp-per-level' && e.value === 2), 'Robusto declara +2 PV por nível como cobertura completa');
const lucky = bundle('phb-2014-sortudo');
ok(lucky?.automation?.uses?.max === '3' && lucky?.automation?.uses?.recovery?.includes('lr') && lucky?.automation?.runtime?.length === 3, 'Sortudo declara 3 usos/LR e runtime das intervenções de d20');

for (const feat of feats) {
  const inspected = bundleApi.inspectFeat(feat.id);
  if (!inspected.ok) errors.push(`${feat.name}: ${inspected.errors.join('; ')}`);
}
ok(feats.every(feat => bundleApi.inspectFeat(feat.id).ok), '42/42 Talentos geram Feat Bundle v2 válido');

const index = read('index.html');
const automationPos = index.indexOf('data/export/foundry-feat-automation.js');
const bundlePos = index.indexOf('js/exporters/foundry-feat-bundle.js');
ok(automationPos >= 0 && bundlePos > automationPos, 'index carrega perfis de automação antes do exportador de bundles');
ok(read('js/config.js').includes("APP_VERSION='5.42.0'"), 'APP_VERSION é 5.42.0');
const manifest = JSON.parse(read('manifest.json'));
ok(manifest.version === '5.42.0', 'manifest está em 5.42.0');
ok(manifest.foundryFeatBundleSchema === 'grimorio-foundry-feat-bundle-v2' && manifest.foundryFeatPackageSchema === 'grimorio-foundry-feat-package-v2', 'manifest registra schemas v2');
ok(manifest.foundryFeatAutomationProfiles === 42 && manifest.foundryFeatAutomationPhase === 'FA-1', 'manifest registra FA-1 e 42 perfis');
ok(manifest.foundryFeatMinimumImporterVersion === '0.12.0', 'manifest registra consumidor mínimo 0.12.0');
const embeddedModule = JSON.parse(read('foundry/grimorio-importer/module.json'));
const embeddedVersion = read('foundry/grimorio-importer/scripts/version.js');
ok(embeddedModule.version === '0.11.0-rc.1' && manifest.foundryImporter?.version === '0.11.0-rc.1', 'projeto incorpora a RC 0.11.0-rc.1 já homologada');
ok(embeddedVersion.includes('featureFreeze: true') && embeddedVersion.includes('channel: "release-candidate"'), 'RC embutida permanece em feature freeze durante a FA-1');

for (const fixture of ['tests/foundry-v13/feat-alerta-v2.json','tests/foundry-v13/feat-conjurador-de-guerra-v2.json','tests/foundry-v13/feat-phb-2014-package-v2.json']) {
  ok(fs.existsSync(path.join(root, fixture)), `fixture FA-1 existe: ${fixture}`);
}

if (errors.length) {
  console.error('\nFalhas:');
  errors.forEach(error => console.error('✗ ' + error));
  process.exit(1);
}
console.log('\nValidação Foundry Feat Automation 5.42 / FA-1 aprovada.');
