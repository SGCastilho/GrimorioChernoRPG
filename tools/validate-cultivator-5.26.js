#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');
const vm = require('vm');
const { pathToFileURL } = require('url');
const root = path.resolve(__dirname, '..');
function assert(value, message) { if (!value) throw new Error(message); }

(async () => {
  const index = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
  const scripts = [...index.matchAll(/<script\s+src="([^"]+)"/g)].map(m => m[1])
    .filter(file => !/^js\/(app|ui-enhancements|dynamic-consultation)\.js$/.test(file) && !/foundry-(export-ui|class-export-ui)\.js$/.test(file));
  const ctx = { console }; ctx.window = ctx; vm.createContext(ctx);
  for (const file of scripts) vm.runInContext(fs.readFileSync(path.join(root, file), 'utf8'), ctx, { filename: file });

  const source = ctx.GRIMORIO_REGISTRY.getSource('dandwiki-cultivator');
  assert(source?.title === 'D&D Wiki — Cultivator (5e Class)', 'Fonte do Cultivador não registrada corretamente');

  const cls = (ctx.GRIMORIO_CLASSES || []).find(x => x.id === 'cultivator-dandwiki');
  assert(cls?.name === 'Cultivador' && cls.originalName === 'Cultivator', 'Classe Cultivador ausente ou sem nome original');
  assert(cls.hitDie === 'd6' && cls.ability === 'Sabedoria' && cls.saves === 'Sabedoria, Carisma', 'Fundamentos do Cultivador divergentes');
  assert((cls.features || []).length === 22, `Cultivador deve possuir 22 blocos de características; encontrado ${(cls.features || []).length}`);
  assert((cls.tables || []).length === 10, `Cultivador deve possuir 10 tabelas; encontrado ${(cls.tables || []).length}`);
  assert((cls.references || []).some(r => r.title === 'MULTICLASSE — CULTIVADOR'), 'Regra de multiclasse ausente');
  assert((cls.references || []).some(r => r.title === 'MOLDAGEM ABRANGENTE DA ALMA' && /não apresenta qualquer texto mecânico/i.test(r.text)), 'Nota editorial de Sweeping Soul Shaping ausente');
  assert((cls.references || []).some(r => r.title === 'NOTA EDITORIAL — TABELA ESOTÉRICA' && /seis resultados/i.test(r.text)), 'Inconsistência d4/1–6 da fonte não foi documentada');
  const spellList = (cls.tables || []).find(t => t.title === 'Lista de Magias do Cultivador');
  assert(spellList?.rows?.length === 10, 'Lista de Magias do Cultivador deve possuir Truques + níveis 1–9');
  assert(spellList.rows[0].todos === 'Conexão da Alma' && spellList.rows[9].todos === 'Tempestade da Alma', 'Magias da Alma inicial/final divergentes');

  const subs = (ctx.GRIMORIO_SUBCLASSES || []).filter(x => x.classId === cls.id);
  assert(subs.length === 3, `Cultivador deve possuir 3 Chamados; encontrado ${subs.length}`);
  const expected = new Map([
    ['cultivator-calling-evil', ['Chamado do Mal', 'Calling of Evil', 6]],
    ['cultivator-calling-achromatic', ['Chamado Acromático', 'Calling of the Achromatic', 6]],
    ['cultivator-calling-heaven', ['Chamado do Céu', 'Calling of Heaven', 7]]
  ]);
  for (const [id, [name, original, featureCount]] of expected) {
    const sub = subs.find(x => x.id === id);
    assert(sub?.name === name && sub.originalName === original, `Subclasse ${id} ausente ou com nome incorreto`);
    assert((sub.features || []).length === featureCount, `${name} deve possuir ${featureCount} características; encontrado ${(sub.features || []).length}`);
    assert((sub.tables || []).length === 1, `${name} deve possuir tabela de Magias do Chamado`);
    for (const f of sub.features || []) assert(f.title && f.text && Number(f.level) >= 6 && Number(f.level) <= 18, `${name}: característica inválida`);
  }
  assert(subs.reduce((n,s)=>n+(s.features||[]).length,0) === 19, 'Chamados devem totalizar 19 características');

  const progression = ctx.GRIMORIO_CLASS_PROGRESSIONS?.[cls.id];
  assert(progression?.rows?.length === 20, 'Progressão do Cultivador deve possuir 20 níveis');
  const qi = progression.rows.map(r => r.qi);
  assert(JSON.stringify(qi) === JSON.stringify([5,7,10,13,18,21,25,29,33,37,42,46,50,54,59,63,68,72,76,80]), `Progressão de Qi divergente: ${qi.join(',')}`);
  assert(progression.rows[19].upcast === '∞' && progression.rows[19].spellLevel === '9º', 'Nível 20 deve ter Limite de Amplificação infinito e Nível de Magia 9º');
  assert(progression.rows[12].features.includes('Aprimoramento da Conjuração da Alma'), 'Aprimoramento da Conjuração da Alma deve aparecer no 13º nível');

  const bundleApi = ctx.GRIMORIO_FOUNDRY_CLASS_BUNDLE;
  const classBundle = bundleApi.buildClassBundle(cls);
  const classInspection = bundleApi.inspectClass(cls);
  assert(classInspection.ok, `Bundle da classe inválido: ${classInspection.errors.join('; ')}`);
  assert(classBundle.identity.identifier === 'cultivator', 'Foundry identifier da classe deve ser cultivator');
  assert(classBundle.subclassSelection.selectionLevel === 6 && classBundle.subclassSelection.options.length === 3, 'Foundry deve selecionar Chamado no 6º nível');
  for (const sub of subs) {
    const b = bundleApi.buildSubclassBundle(sub);
    const v = bundleApi.inspectSubclass(sub);
    assert(v.ok, `${sub.name}: bundle inválido: ${v.errors.join('; ')}`);
    assert(b.subclass.classIdentifier === 'cultivator', `${sub.name}: classIdentifier Foundry deve ser cultivator`);
  }

  const generatedRoot = path.join(root, 'tests', 'foundry-v13', 'cultivator');
  const generatedCatalog = JSON.parse(fs.readFileSync(path.join(generatedRoot, 'catalog.json'), 'utf8'));
  assert(generatedCatalog.packageBundles === 4 && generatedCatalog.sourceFeatures === 41, 'Kit Foundry do Cultivador deve conter 4 bundles e 41 características de origem');
  const fullPackage = JSON.parse(fs.readFileSync(path.join(generatedRoot, 'pacote-cultivador-completo.json'), 'utf8'));
  assert(fullPackage.schema === 'grimorio-foundry-class-package' && fullPackage.bundles?.length === 4, 'Pacote Foundry completo do Cultivador inválido');
  assert(fullPackage.bundles.filter(b => b.kind === 'class').length === 1 && fullPackage.bundles.filter(b => b.kind === 'subclass').length === 3, 'Pacote Foundry deve conter 1 classe + 3 subclasses');

  const profiles = await import(pathToFileURL(path.join(root, 'foundry/grimorio-importer/scripts/class-profiles.js')).href + `?v=${Date.now()}`);
  assert(profiles.READY_CLASS_IDENTIFIERS.includes('cultivator'), 'Cultivador não habilitado no Grimório Importer');
  const cp = profiles.classProfile('cultivator');
  assert(cp?.spellcasting?.progression === 'none' && cp?.spellcasting?.ability === 'wis', 'Perfil Foundry deve manter Sabedoria sem criar slots nativos');
  assert(cp?.subclassTitle === 'Chamado à Divindade', 'Título de subclasse Foundry incorreto');

  const automation = await import(pathToFileURL(path.join(root, 'foundry/grimorio-importer/scripts/feature-automation.js')).href + `?v=${Date.now()}`);
  const auto = automation.auditBundleAutomation(classBundle);
  const authority = auto.entries.find(e => e.name === 'AUTORIDADE DIVINA');
  assert(authority?.profileId === 'cultivator-divine-authority', 'Autoridade Divina deve possuir perfil mecânico conservador');

  console.log('CULTIVATOR_5_26_OK', JSON.stringify({
    class: cls.name,
    classFeatures: cls.features.length,
    classTables: cls.tables.length,
    progressionRows: progression.rows.length,
    subclasses: subs.length,
    subclassFeatures: subs.reduce((n,s)=>n+s.features.length,0),
    foundryIdentifier: classBundle.identity.identifier,
    subclassSelectionLevel: classBundle.subclassSelection.selectionLevel,
    automationProfile: authority.profileId,
    sourceRegistered: source.id,
    foundryPackageBundles: fullPackage.bundles.length,
    foundryPackageSourceFeatures: generatedCatalog.sourceFeatures
  }, null, 2));
})().catch(error => { console.error(error.stack || error); process.exit(1); });
