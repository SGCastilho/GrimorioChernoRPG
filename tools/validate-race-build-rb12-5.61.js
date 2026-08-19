#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');
const vm = require('vm');
const root = path.resolve(__dirname, '..');
const read = file => fs.readFileSync(path.join(root, file), 'utf8');
const errors = [];
const passed = [];
const check = (condition, message) => condition ? passed.push(message) : errors.push(message);

function createContext(extra = {}) {
  const context = { console, ...extra };
  context.window = context;
  vm.createContext(context);
  return context;
}

function load(context, file) {
  vm.runInContext(read(file), context, { filename: file });
}

const RACE_FILES = [
  'js/registry.js',
  'data/sources.js',
  'data/lyre-races.js',
  'data/lyre-races-phase2-structure.js',
  'data/lyre-races-phase2-text.js',
  'data/lyre-races-phase3-structure.js',
  'data/lyre-races-phase3-text.js',
  'data/lyre-races-phase4-structure.js',
  'data/lyre-races-phase4-text.js',
  'data/blade-bone-benefit-races.js',
  'data/zagalhta-exolunar-races.js',
  'data/paraprismatic-tempest-races.js',
  'js/race-build-resolver.js',
  'js/exporters/registry.js',
  'js/exporters/foundry-race-build-bundle.js'
];

const c = createContext();
for (const file of RACE_FILES) {
  try { load(c, file); }
  catch (error) { errors.push(`${file}: ${error.message}`); }
}
if (errors.length) finish();

const races = c.GRIMORIO_RACES || [];
const resolver = c.GRIMORIO_RACE_BUILD_RESOLVER;
const bundleApi = c.GRIMORIO_FOUNDRY_RACE_BUILD_BUNDLE;
const exportRegistry = c.GRIMORIO_EXPORT_REGISTRY;
const manifest = JSON.parse(read('manifest.json'));

const subraceCount = races.reduce((sum, race) => sum + (race.subraces?.length || 0), 0);
check(races.length === 46, `baseline racial preservado: 46 raças (obtido ${races.length})`);
check(subraceCount === 382, `baseline racial preservado: 382 subraças (obtido ${subraceCount})`);
check(manifest.version === '5.61.0', 'manifest sincronizado em 5.61.0');
check(manifest.races === 46, 'manifest mantém 46 raças');

check(resolver?.builderSchema?.name === 'grimorio-race-builder-state' && resolver.builderSchema.version === 2, 'schema do estado Race Builder v2 congelado');
check(resolver?.resolutionSchema?.name === 'grimorio-race-build-resolution' && resolver.resolutionSchema.version === 1, 'schema da resolução normativa v1 congelado');
check(bundleApi?.schema?.name === 'grimorio-foundry-race-build-bundle' && bundleApi.schema.version === 1, 'Race Build Bundle v1 congelado');
check(bundleApi?.profile?.id === 'foundry13-dnd5e533-grimorio-race-build-v1', 'profile Foundry futuro identificado');
check(exportRegistry?.get(bundleApi.profile.id)?.raceBuildBundle === bundleApi, 'Race Build Bundle registrado no export registry');

const defaults = resolver.defaultBuilderState();
for (const field of ['subraceId','mixed','secondaryRaceId','legacy','heritage','bloodlineChoices','abilityMode','abilityChoices','traitChoices','specialChoices','extraLegacy','optionalPools']) {
  check(Object.prototype.hasOwnProperty.call(defaults, field), `estado v2 contém ${field}`);
}
check(defaults.schema === 'grimorio-race-builder-state' && defaults.schemaVersion === 2, 'estado default carrega identidade de schema v2');

const migrated = resolver.migrateV1RaceState({
  subraceId: 'woodlander', mixed: true, secondaryRaceId: 'feralus', legacy: ['human:legacy:bound-luck']
});
check(migrated.subraceId === 'woodlander' && migrated.mixed === true && migrated.secondaryRaceId === 'feralus', 'migração v1 preserva subraça e Sangue Misto');
check(migrated.legacy.length === 1 && migrated.heritage.positive.length === 0 && Object.keys(migrated.traitChoices).length === 0, 'migração v1 preserva Legado e inicializa novos buckets');

const malicious = resolver.normalizeBuilderState('human', {
  schema: 'grimorio-race-builder-state', schemaVersion: 2,
  traitChoices: { safe: { option: 'x' }, system: { attributes: { hp: 999 } }, flags: { evil: true }, macro: 'boom' }
});
check(malicious.traitChoices.safe?.option === 'x', 'escolha estruturada permitida é preservada');
check(!('system' in malicious.traitChoices) && !('flags' in malicious.traitChoices) && !('macro' in malicious.traitChoices), 'chaves de documento/execução Foundry são removidas do estado estruturado');

const human = resolver.findRace('human');
check(Boolean(human), 'Humano encontrado para fixture normativa');
const humanLegacy = (human?.legacyTraits || []).slice(0, 2).map(trait => `human:legacy:${trait.id}`);
check(humanLegacy.length === 2, 'Humano oferece pelo menos dois Traços de Legado para fixture');

const humanMissingSubrace = resolver.resolve(human, { legacy: humanLegacy });
check(humanMissingSubrace.status === 'incomplete' && humanMissingSubrace.errors.some(item => item.code === 'subrace.required'), 'raça com subraças exige escolha explícita; sem default silencioso');

const humanWoodlander = resolver.resolve(human, { subraceId: 'woodlander', legacy: humanLegacy });
check(humanWoodlander.modeledReady === true, 'Humano/Habitante das Florestas com escolhas modeladas fica estruturalmente completo');
check(['ready','review'].includes(humanWoodlander.status), `Humano/Habitante das Florestas resolve para ready/review (obtido ${humanWoodlander.status})`);

const hanyou = resolver.findRace('hanyou');
const aquatic = resolver.findSubrace(hanyou, 'aquatic');
check(Boolean(hanyou && aquatic), 'Hanyou/Aquático encontrado para fixture de Herança');
const hanyouLegacy = (hanyou?.legacyTraits || []).slice(0, 2).map(trait => `hanyou:legacy:${trait.id}`);
const aquaticOpts = resolver.heritageOptions(hanyou, aquatic);
const hanyouIncomplete = resolver.resolve(hanyou, { subraceId: 'aquatic', legacy: hanyouLegacy });
check(hanyouIncomplete.status === 'incomplete' && hanyouIncomplete.errors.some(item => item.code === 'heritage.positive.missing') && hanyouIncomplete.errors.some(item => item.code === 'heritage.detrimental.missing'), 'Hanyou dominante exige Heranças positivas e prejudiciais');

const hanyouReady = resolver.resolve(hanyou, {
  subraceId: 'aquatic', legacy: hanyouLegacy,
  heritage: {
    positive: aquaticOpts.positive.slice(0, 2).map(item => item.key),
    detrimental: aquaticOpts.detrimental.slice(0, 2).map(item => item.key),
    lineage: []
  }
});
check(hanyouReady.modeledReady === true, 'Hanyou/Aquático 2+2 fecha as escolhas de Herança modeladas');
check(hanyouReady.features.heritage.length === 4, 'Hanyou selecionado transporta quatro Heranças escolhidas');
check(hanyouReady.features.subrace.some(trait => trait.heritageRole === 'lineage'), 'Linhagem Hanyou dominante permanece característica estrutural da subraça');

const emberash = resolver.findSubrace(hanyou, 'emberash');
const emberOpts = resolver.heritageOptions(hanyou, emberash);
const emberResolution = resolver.resolve(hanyou, {
  subraceId: 'emberash', legacy: hanyouLegacy,
  heritage: {
    positive: emberOpts.positive.slice(0, 2).map(item => item.key),
    detrimental: emberOpts.detrimental.slice(0, 1).map(item => item.key),
    lineage: []
  }
});
check(emberResolution.limits.heritage.positive === 2 && emberResolution.limits.heritage.detrimental === 1, 'Emberash aplica override de Herança 2 positivos + 1 prejudicial');
check(!emberResolution.errors.some(item => item.code.startsWith('heritage.')), 'Emberash 2+1 não gera erro de quantidade de Herança');

const bouyan = resolver.findRace('bouyan');
const bouyanKeys = (bouyan?.legacyTraits || []).slice(0, 3).map(trait => `bouyan:legacy:${trait.id}`);
const bouyanReady = resolver.resolve(bouyan, { legacy: bouyanKeys });
check(bouyanReady.limits.legacy.total === 3 && bouyanReady.modeledReady === true, 'Bouyan dominante recebe terceiro slot de Legado próprio');

const bouyanMixedPoolState = resolver.normalizeBuilderState(bouyan, { mixed: true, secondaryRaceId: 'human', legacy: [] }, { filterLegacy: false });
const mixedPool = resolver.legacyPool(bouyan, bouyanMixedPoolState);
const nonPrimary = mixedPool.filter(entry => !(entry.kind === 'legacy' && entry.originRaceId === 'bouyan')).slice(0, 3).map(entry => entry.key);
if (nonPrimary.length >= 3) {
  const tooManyForeign = resolver.resolve(bouyan, { mixed: true, secondaryRaceId: 'human', legacy: nonPrimary });
  check(tooManyForeign.errors.some(item => item.code === 'legacy.dominant-bonus-restricted'), 'slot bônus dominante rejeita terceira escolha não pertencente à lista normal de Bouyan');
} else {
  errors.push('Fixture Bouyan misto não encontrou três opções não dominantes para testar restrição do slot bônus.');
}

const traversal = resolver.findSubrace(resolver.findRace('nephilim'), 'traversal');
if (traversal) {
  const nephilim = resolver.findRace('nephilim');
  const nephilimLegacy = (nephilim.legacyTraits || []).slice(0, resolver.legacySlots(nephilim).total).map(trait => `nephilim:legacy:${trait.id}`);
  const traversalResolution = resolver.resolve(nephilim, { subraceId: 'traversal', legacy: nephilimLegacy });
  check(traversalResolution.pending.some(item => item.code === 'rb3.variable-ability-choice'), 'ASI variável é preservado como pendência explícita de RB-3');
}

const bundleA = bundleApi.buildBundle(humanWoodlander);
const bundleB = bundleApi.buildBundle(human, { subraceId: 'woodlander', legacy: [...humanLegacy].reverse() });
check(bundleApi.inspectBundle(bundleA).ok, 'bundle Humano/Habitante das Florestas passa no inspector');
check(bundleA.identity.selectionHash === bundleB.identity.selectionHash, 'selectionHash independe da ordem de clique dos Traços de Legado');
check(bundleA.identity.grimorioId === bundleB.identity.grimorioId, 'grimorioId determinístico para seleção semanticamente igual');
check(bundleA.identity.contentHash === bundleB.identity.contentHash, 'contentHash determinístico para conteúdo semanticamente igual');
check(bundleA.readiness.exportEnabled === false && bundleA.foundryPlan.status === 'deferred', 'RB-1/RB-2 mantém exportação/materialização Foundry desabilitada');
check(!('system' in bundleA) && !('effects' in bundleA) && !('flags' in bundleA), 'bundle declarativo não serializa documento Foundry');

const tampered = JSON.parse(JSON.stringify(bundleA));
tampered.selection.traitChoices.system = { foo: 'bar' };
check(!bundleApi.inspectBundle(tampered).ok, 'inspector rejeita payload adulterado com chave Foundry arbitrária');

const moduleJson = JSON.parse(read('foundry/grimorio-importer/module.json'));
const importerPackage = JSON.parse(read('foundry/grimorio-importer/package.json'));
check(moduleJson.version === '0.12.0' && importerPackage.version === '0.12.0', 'grimorio-importer permanece congelado em 0.12.0');
check(Array.isArray(moduleJson.packs) && moduleJson.packs.length === 4, `grimorio-importer permanece com quatro packs (obtido ${moduleJson.packs?.length})`);
check(!(moduleJson.packs || []).some(pack => /race|racial/i.test(`${pack.name || ''} ${pack.label || ''}`)), 'nenhum pack racial foi criado no Importer durante RB-1/RB-2');

const index = read('index.html');
const resolverAt = index.indexOf('js/race-build-resolver.js');
const browserAt = index.indexOf('js/race-browser.js');
const registryAt = index.indexOf('js/exporters/registry.js');
const raceBundleAt = index.indexOf('js/exporters/foundry-race-build-bundle.js');
check(resolverAt >= 0 && browserAt > resolverAt, 'index carrega resolver antes do Race Browser');
check(registryAt >= 0 && raceBundleAt > registryAt, 'index carrega Race Build Bundle após export registry');

const raceBrowserText = read('js/race-browser.js');
check(raceBrowserText.includes("grimorio-race-builder-v2") && raceBrowserText.includes("grimorio-race-builder-v1"), 'Race Browser declara armazenamento v2 e chave legada para migração');
check(!raceBrowserText.includes('Exportar para Foundry'), 'RB-2 não introduz antecipadamente botão funcional de exportação racial');

// Testa a migração real do módulo de UI com localStorage falso, sem renderizar DOM.
const storageMap = new Map();
storageMap.set('grimorio-race-builder-v1', JSON.stringify({
  search: 'hum', filter: 'all', byRace: {
    human: { subraceId: 'woodlander', mixed: false, secondaryRaceId: null, legacy: humanLegacy }
  }
}));
const localStorage = {
  getItem(key) { return storageMap.has(key) ? storageMap.get(key) : null; },
  setItem(key, value) { storageMap.set(key, String(value)); },
  removeItem(key) { storageMap.delete(key); }
};
const ui = createContext({ localStorage });
for (const file of RACE_FILES.slice(0, -2)) load(ui, file); // até o resolver
load(ui, 'js/race-browser.js');
const migratedUi = JSON.parse(storageMap.get('grimorio-race-builder-v2'));
check(migratedUi?.schema === 'grimorio-race-builder-ui' && migratedUi?.schemaVersion === 2, 'Race Browser migra o envelope da UI para v2');
check(migratedUi?.byRace?.human?.subraceId === 'woodlander' && migratedUi?.byRace?.human?.legacy?.length === 2, 'migração real da UI preserva seleção racial existente');
check(storageMap.has('grimorio-race-builder-v1'), 'migração não apaga armazenamento v1 automaticamente');
check(ui.GRIMORIO_RACE_BROWSER?.storage?.version === 2, 'API pública do Race Browser declara storage v2');

finish();

function finish() {
  for (const message of passed) console.log('✓ ' + message);
  if (errors.length) {
    console.error(`\nRace Build RB-1/RB-2 reprovado: ${errors.length} erro(s).`);
    for (const message of errors) console.error('✗ ' + message);
    process.exit(1);
  }
  console.log(`\nRace Build RB-1/RB-2 v5.61.0 aprovado: ${passed.length} verificações, 0 erros.`);
}
