#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { pathToFileURL } = require('url');

const root = path.resolve(__dirname, '..');
const moduleRoot = path.join(root, 'foundry', 'grimorio-importer');
const manifest = JSON.parse(fs.readFileSync(path.join(moduleRoot, 'module.json'), 'utf8'));

function assert(condition, message) {
  if (!condition) throw new Error(message);
}
function advancementValues(item) {
  const data = item._source.system.advancement;
  assert(data && typeof data === 'object' && !Array.isArray(data), 'system.advancement deve ser objeto no DnD5e 5.3.x');
  return Object.values(data);
}
function deepClone(value) { return JSON.parse(JSON.stringify(value)); }

(async () => {
  assert(manifest.id === 'grimorio-importer', 'ID do módulo incorreto');
  assert(manifest.version === '0.2.0', 'Versão do módulo da Fase 6 deve ser 0.2.0');
  assert(manifest.compatibility?.verified === '13.351', 'Foundry verificado deve ser 13.351');
  const sys = manifest.relationships?.systems?.find(s => s.id === 'dnd5e');
  assert(sys?.compatibility?.minimum === '5.3.3' && sys?.compatibility?.maximum === '5.3.3', 'Dependência dnd5e deve estar congelada em 5.3.3');
  assert(Array.isArray(manifest.packs) && manifest.packs.length === 3, 'Fase 6 deve declarar três compêndios');
  const packNames = new Set(manifest.packs.map(p => p.name));
  for (const name of ['grimorio-classes', 'grimorio-subclasses', 'grimorio-features']) assert(packNames.has(name), `Compêndio ausente no manifest: ${name}`);
  assert(manifest.packs.every(p => p.type === 'Item' && p.system === 'dnd5e'), 'Todos os compêndios devem ser Item/dnd5e');

  const materializerUrl = pathToFileURL(path.join(moduleRoot, 'scripts', 'materializer.js')).href;
  const validatorUrl = pathToFileURL(path.join(moduleRoot, 'scripts', 'bundle-validator.js')).href;
  const storageUrl = pathToFileURL(path.join(moduleRoot, 'scripts', 'pack-storage.js')).href;
  const { materializeBundle, stableId, legacyWorldPrototypeStatus } = await import(materializerUrl);
  const { validateBundle, phase6Support } = await import(validatorUrl);
  const { PACKS } = await import(storageUrl);

  assert(stableId('barbarian:hit-points').length === 16, 'Advancement ID deve ter 16 caracteres');
  assert(phase6Support().storage === 'module-compendiums', 'Fase 6 deve declarar armazenamento em compêndios');
  assert(phase6Support().portableItemGrants === true, 'Fase 6 deve declarar Item Grants portáveis');

  let sequence = 0;
  class MockItem {
    constructor(data, collection) {
      this.id = `mock${String(++sequence).padStart(4, '0')}`;
      this.uuid = `Compendium.${collection}.Item.${this.id}`;
      this.pack = collection;
      this._source = deepClone(data);
      this.name = data.name;
      this.type = data.type;
    }
    get flags() { return this._source.flags; }
    getFlag(scope, key) { return this._source.flags?.[scope]?.[key]; }
    async update(data) {
      this._source = deepClone(data);
      this.name = data.name;
      this.type = data.type;
      return this;
    }
  }
  class MockPack {
    constructor(spec) {
      this.collection = spec.collection;
      this.label = spec.label;
      this.locked = true;
      this.docs = [];
      this.configureCalls = [];
      this.index = new Map();
      this.indexed = true;
    }
    async configure(data) {
      if (Object.prototype.hasOwnProperty.call(data, 'locked')) this.locked = Boolean(data.locked);
      this.configureCalls.push(deepClone(data));
    }
    async getDocuments() { return [...this.docs]; }
  }
  const packs = Object.fromEntries(Object.entries(PACKS).map(([key, spec]) => [key, new MockPack(spec)]));
  const worldStore = [];
  const runtime = {
    foundryVersion: '13.351',
    systemId: 'dnd5e',
    systemVersion: '5.3.3',
    isGM: true,
    getPack: key => packs[key] ?? null,
    listPackItems: async key => packs[key].getDocuments(),
    createPackItem: async (key, data) => {
      assert(packs[key].locked === false, `Compêndio ${key} deve estar desbloqueado durante criação`);
      const doc = new MockItem(data, PACKS[key].collection);
      packs[key].docs.push(doc);
      packs[key].index.set(doc.id, { _id: doc.id, name: doc.name, type: doc.type });
      return doc;
    },
    updatePackItem: async (key, doc, data) => {
      assert(packs[key].locked === false, `Compêndio ${key} deve estar desbloqueado durante atualização`);
      return doc.update(data);
    },
    setPackLocked: async (key, locked) => packs[key].configure({ locked }),
    isPackLocked: key => packs[key].locked,
    listWorldItems: () => [...worldStore]
  };

  const barbarian = JSON.parse(fs.readFileSync(path.join(moduleRoot, 'examples', 'class-barbarian.json'), 'utf8'));
  const kaiju = JSON.parse(fs.readFileSync(path.join(moduleRoot, 'examples', 'subclass-ryoko-barbarian-path-kaiju.json'), 'utf8'));
  assert(validateBundle(barbarian, runtime).ok, 'Bundle de Bárbaro deveria ser válido');
  assert(validateBundle(kaiju, runtime).ok, 'Bundle de Caminho do Kaiju deveria ser válido');

  const first = await materializeBundle(barbarian, runtime);
  assert(first.storage.mode === 'compendium' && first.storage.portableItemGrants, 'Importação deve usar compêndios e UUIDs portáveis');
  assert(first.stats.featuresCreated === 12 && first.stats.parentCreated === 1, 'Bárbaro deveria criar 12 feats + class');
  assert(first.stats.worldItemsCreated === 0 && worldStore.length === 0, 'Fase 6 não deve criar Items no Mundo');
  assert(packs.features.docs.length === 12, 'Características devem ir para Grimório — Características');
  assert(packs.classes.docs.length === 1, 'Classe deve ir para Grimório — Classes');
  assert(packs.subclasses.docs.length === 0, 'Importar classe não deve preencher subclasses');
  assert(Object.values(packs).every(pack => pack.locked === true), 'Compêndios devem voltar ao estado bloqueado após a importação');

  const classItem = first.item;
  const classAdv = advancementValues(classItem);
  const grants = classAdv.filter(a => a.type === 'ItemGrant');
  assert(grants.length === 9, 'Bárbaro deve possuir 9 ItemGrant Advancements');
  assert(grants.every(a => a.configuration.items.every(i => i.uuid.startsWith(`Compendium.${PACKS.features.collection}.Item.`))), 'ItemGrant da classe deve apontar para Grimório — Características');
  assert(!grants.some(a => a.configuration.items.some(i => i.uuid.startsWith('Item.'))), 'ItemGrant não pode usar UUID de Item do Mundo');

  const firstClassUuid = classItem.uuid;
  const firstFeatureUuids = new Map(first.featureItems.map(doc => [doc.getFlag('grimorio-importer', 'featureKey'), doc.uuid]));
  const second = await materializeBundle(barbarian, runtime);
  assert(second.stats.featuresCreated === 0 && second.stats.featuresUpdated === 12, 'Reimportação deve atualizar 12 características');
  assert(second.stats.parentCreated === 0 && second.stats.parentUpdated === 1, 'Reimportação deve atualizar a classe');
  assert(packs.features.docs.length === 12 && packs.classes.docs.length === 1, 'Reimportação não deve duplicar documentos');
  assert(second.item.uuid === firstClassUuid, 'UUID da classe deve permanecer estável após reimportação');
  for (const doc of second.featureItems) {
    assert(firstFeatureUuids.get(doc.getFlag('grimorio-importer', 'featureKey')) === doc.uuid, `UUID da característica ${doc.name} mudou na reimportação`);
  }

  const subFirst = await materializeBundle(kaiju, runtime);
  assert(subFirst.stats.featuresCreated === 5 && subFirst.stats.parentCreated === 1, 'Caminho do Kaiju deve criar 5 feats + subclass');
  assert(packs.features.docs.length === 17, 'Compêndio de características deve ter 17 documentos após Kaiju');
  assert(packs.subclasses.docs.length === 1, 'Subclasse deve ir para Grimório — Subclasses');
  assert(subFirst.item._source.system.classIdentifier === 'barbarian', 'Subclasse deve manter classIdentifier barbarian');
  const subAdv = advancementValues(subFirst.item).filter(a => a.type === 'ItemGrant');
  assert(subAdv.length === 4, 'Caminho do Kaiju deve possuir 4 ItemGrants');
  assert(subAdv.every(a => a.configuration.items.every(i => i.uuid.startsWith(`Compendium.${PACKS.features.collection}.Item.`))), 'ItemGrant da subclasse deve usar UUIDs de compêndio');

  const subUuid = subFirst.item.uuid;
  const subSecond = await materializeBundle(kaiju, runtime);
  assert(subSecond.stats.featuresCreated === 0 && subSecond.stats.featuresUpdated === 5, 'Reimportação da subclasse deve atualizar características');
  assert(subSecond.stats.parentCreated === 0 && subSecond.stats.parentUpdated === 1, 'Reimportação da subclasse deve atualizar parent');
  assert(subSecond.item.uuid === subUuid && packs.subclasses.docs.length === 1, 'Subclasse deve manter UUID e não duplicar');

  const failPacks = Object.fromEntries(Object.entries(PACKS).map(([key, spec]) => [key, new MockPack(spec)]));
  const failRuntime = {
    ...runtime,
    getPack: key => failPacks[key] ?? null,
    listPackItems: async key => failPacks[key].getDocuments(),
    createPackItem: async () => { throw new Error('falha simulada de escrita'); },
    updatePackItem: async (_key, doc, data) => doc.update(data),
    setPackLocked: async (key, locked) => failPacks[key].configure({ locked }),
    isPackLocked: key => failPacks[key].locked,
    listWorldItems: () => []
  };
  let simulatedFailure = false;
  try { await materializeBundle(barbarian, failRuntime); }
  catch (error) { simulatedFailure = /falha simulada/.test(String(error?.message)); }
  assert(simulatedFailure, 'Falha de escrita simulada deveria ser propagada');
  assert(failPacks.features.locked === true && failPacks.classes.locked === true, 'Packs devem ser relockados mesmo após exceção');

  worldStore.push(new MockItem({
    name: 'Bárbaro legado',
    type: 'class',
    flags: { 'grimorio-importer': { documentRole: 'class', grimorioId: 'class:barbarian' } },
    system: { advancement: {} }
  }, 'world'));
  const legacy = legacyWorldPrototypeStatus(runtime);
  assert(legacy.total === 1 && legacy.byRole.class === 1, 'Preview deve identificar Item legado da Fase 5 sem apagá-lo');
  assert(worldStore.length === 1, 'Preview de legado não pode ser destrutivo');

  console.log('PHASE6_MODULE_OK', JSON.stringify({
    module: manifest.version,
    packs: Object.fromEntries(Object.entries(packs).map(([key, pack]) => [key, pack.docs.length])),
    barbarianFeatures: first.featureItems.length,
    barbarianItemGrants: grants.length,
    subclassFeatures: subFirst.featureItems.length,
    subclassItemGrants: subAdv.length,
    worldItemsCreated: 0,
    portableItemGrants: true,
    uuidStableOnReimport: true,
    packsRelocked: Object.values(packs).every(pack => pack.locked),
    packsRelockedAfterFailure: failPacks.features.locked && failPacks.classes.locked,
    legacyWorldPreview: legacy.total
  }, null, 2));
})().catch(error => {
  console.error(error.stack || error.message || error);
  process.exit(1);
});
