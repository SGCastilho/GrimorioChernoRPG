#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath, pathToFileURL } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, '..');
const errors = [];
const ok = message => console.log(`✓ ${message}`);
const fail = message => errors.push(message);

const context = { console };
context.window = context;
vm.createContext(context);
for (const relative of [
  'js/registry.js',
  'data/sources.js',
  'data/feats/phb-2014-feats.js',
  'data/feats/ryoko-yokai-realms-feats.js',
  'data/feats/lyre-retia-feats.js',
  'data/export/foundry-feat-automation.js',
  'js/exporters/registry.js',
  'js/exporters/foundry-feat-bundle.js',
  'js/exporters/foundry-feat-package.js'
]) {
  try { vm.runInContext(fs.readFileSync(path.join(root, relative), 'utf8'), context, { filename: relative }); }
  catch (error) { fail(`${relative}: ${error.message}`); }
}

const reg = context.GRIMORIO_REGISTRY;
const catalog = reg?.getFeatCatalogs?.().find(item => item.id === 'lyre-retia-feats');
if (!catalog) fail('Catálogo lyre-retia-feats ausente.');
else {
  if (catalog.sourceId !== 'lyre') fail(`sourceId incorreto: ${catalog.sourceId}`);
  if (catalog.pages !== '331–335') fail(`Faixa de páginas incorreta: ${catalog.pages}`);
  if (catalog.feats.length !== 28) fail(`Esperados 28 talentos de Lyre; encontrados ${catalog.feats.length}.`);
  const ids = new Set(catalog.feats.map(item => item.id));
  if (ids.size !== catalog.feats.length) fail('Há IDs duplicados nos talentos de Lyre.');
  const general = catalog.feats.filter(item => item.category === 'Geral');
  const racial = catalog.feats.filter(item => item.category === 'Racial');
  if (general.length !== 28) fail(`Esperados 28 talentos gerais; encontrados ${general.length}.`);
  if (racial.length !== 0) fail(`Esperados 0 talentos raciais; encontrados ${racial.length}.`);
  const prerequisites = catalog.feats.filter(item => item.prerequisites?.length).length;
  const repeatable = catalog.feats.filter(item => item.repeatable === true).length;
  if (prerequisites !== 21) fail(`Esperados 21 talentos de Lyre com pré-requisito; encontrados ${prerequisites}.`);
  if (repeatable !== 2) fail(`Esperados 2 talentos de Lyre repetíveis; encontrados ${repeatable}.`);
  for (const feat of catalog.feats) {
    if (!feat.originalName) fail(`${feat.id}: originalName ausente.`);
    if (!feat.description?.trim()) fail(`${feat.id}: descrição vazia.`);
    if (!Number.isInteger(feat.sourcePage) || feat.sourcePage < 331 || feat.sourcePage > 335) fail(`${feat.id}: sourcePage inválida (${feat.sourcePage}).`);
    if (feat.prerequisite && !feat.prerequisites?.length) fail(`${feat.id}: pré-requisito textual sem estrutura.`);
  }
  ok(`Catálogo editorial: ${general.length} gerais + ${racial.length} raciais = ${catalog.feats.length} talentos`);
  ok(`Metadados: ${prerequisites} com pré-requisito e ${repeatable} repetíveis`);
}

const allFeats = reg?.getFeatCatalogs?.().flatMap(item => item.feats) || [];
if (allFeats.length !== 109) fail(`Catálogo global deveria ter 109 talentos; encontrado ${allFeats.length}.`);
else ok('Catálogo global atualizado para 109 talentos em 3 fontes');

const automation = context.GRIMORIO_FOUNDRY_FEAT_AUTOMATION;
if (catalog && automation) {
  for (const feat of catalog.feats) {
    const plan = automation.buildPlan(feat);
    const validation = automation.validatePlan(plan, feat);
    if (!validation.ok) validation.errors.forEach(error => fail(`${feat.id}: ${error}`));
    if (plan.tier !== 'description') fail(`${feat.id}: tier deveria ser description; encontrado ${plan.tier}.`);
    if (plan.advancements.length || plan.effects.length || plan.activities.length || plan.uses || plan.runtime.length) fail(`${feat.id}: perfil description contém automação mecânica não homologada.`);
  }
  const audit = automation.audit(allFeats);
  if (!audit.ok) audit.errors.forEach(error => fail(error));
  const expected = { profiles:109, full:6, partial:36, description:67, advancements:28, effects:10, activities:22, uses:2, runtime:56 };
  for (const [key, value] of Object.entries(expected)) if (audit.summary[key] !== value) fail(`Resumo Foundry ${key}: esperado ${value}, encontrado ${audit.summary[key]}.`);
  ok('28 perfis de Lyre validados em tier description, sem automação inferida');
}

const pkgApi = context.GRIMORIO_FOUNDRY_FEAT_PACKAGE;
let generated;
if (pkgApi) {
  generated = pkgApi.buildCatalogPackage('lyre-retia-feats');
  const validation = pkgApi.validatePackage(generated);
  if (!validation.ok) validation.errors.forEach(error => fail(`Exporter: ${error}`));
  if (generated.summary.feats !== 28 || generated.summary.automation?.description !== 28) fail('Resumo do pacote Lyre não fecha em 28/28 description.');
  ok('Feat Package v2 de Lyre validado pelo exportador do site');
}

if (generated) {
  const validatorUrl = pathToFileURL(path.join(root, 'foundry/grimorio-importer/scripts/feat-validator.js')).href;
  const { validateFeatPackage } = await import(validatorUrl);
  const validation = validateFeatPackage(JSON.parse(JSON.stringify(generated)), {
    systemId: 'dnd5e', systemVersion: '5.3.3', foundryVersion: '13.351'
  });
  if (!validation.ok) validation.errors.forEach(error => fail(`Grimório Importer: ${error}`));
  if (validation.warnings.length) validation.warnings.forEach(warning => fail(`Grimório Importer warning inesperado: ${warning}`));
  ok('Pacote validado pelo Grimório Importer 0.12.0 para Foundry 13.351 / DnD5e 5.3.3');
}

const fixture = path.join(root, 'foundry/grimorio-importer/examples/feats/lyre-retia-feats-package-v2.json');
if (!fs.existsSync(fixture)) fail('Fixture Foundry de Lyre ausente.');
else if (generated) {
  const saved = JSON.parse(fs.readFileSync(fixture, 'utf8'));
  if (JSON.stringify(saved) !== JSON.stringify(generated)) fail('Fixture Foundry de Lyre está dessicronizado com o exportador atual.');
  else ok('Fixture Foundry de Lyre sincronizado com o exportador');
}

const browserText = fs.readFileSync(path.join(root, 'js/feat-browser.js'), 'utf8');
if (!browserText.includes('feat.originalName')) fail('Busca de Talentos não indexa originalName.');
else ok('Busca de Talentos indexa nomes ingleses originais');

if (errors.length) {
  console.error(`\nFalhas (${errors.length}):`);
  errors.forEach(item => console.error(`- ${item}`));
  process.exit(1);
}
console.log('\nValidação Lyre 5.44 aprovada sem falhas.');
