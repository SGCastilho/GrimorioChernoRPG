'use strict';

// FA-1 — pacotes de Talentos com bundles v2 e resumo de automação.
(function initFoundryFeatPackage(global) {
  const SCHEMA = 'grimorio-foundry-feat-package';
  const SCHEMA_VERSION = 2;
  const PROFILE_ID = 'foundry13-dnd5e533-grimorio-feat-package-v2';

  const PROFILE = Object.freeze({
    id: PROFILE_ID,
    label: 'Foundry VTT 13.351 · DnD5e 5.3.3 · Grimório Feat Package v2 · FA-1',
    foundryVersion: '13.351',
    dnd5eVersion: '5.3.3',
    consumer: 'grimorio-importer',
    minimumImporterVersion: '0.12.0',
    format: 'grimorio-foundry-feat-package-v2',
    mediaType: 'application/json',
    fileExtension: '.json'
  });

  function array(value) { return Array.isArray(value) ? value : value == null ? [] : [value]; }
  function clone(value) { return value === undefined ? undefined : JSON.parse(JSON.stringify(value)); }
  function slug(value) {
    return String(value ?? '')
      .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
      .toLocaleLowerCase('pt-BR')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '') || 'talentos';
  }
  function bundleApi() {
    if (!global.GRIMORIO_FOUNDRY_FEAT_BUNDLE) throw new Error('Exportador de bundles de Talentos não está carregado.');
    return global.GRIMORIO_FOUNDRY_FEAT_BUNDLE;
  }
  function registry() {
    if (!global.GRIMORIO_REGISTRY?.getFeatCatalogs) throw new Error('Registro de Talentos não está carregado.');
    return global.GRIMORIO_REGISTRY;
  }

  function automationSummary(feats) {
    const plans = feats.map(bundle => bundle.automation).filter(Boolean);
    return {
      profiles: plans.length,
      full: plans.filter(plan => plan.tier === 'full').length,
      partial: plans.filter(plan => plan.tier === 'partial').length,
      description: plans.filter(plan => plan.tier === 'description').length,
      advancements: plans.reduce((sum, plan) => sum + array(plan.advancements).length, 0),
      effects: plans.reduce((sum, plan) => sum + array(plan.effects).length, 0),
      activities: plans.reduce((sum, plan) => sum + array(plan.activities).length, 0),
      uses: plans.filter(plan => plan.uses).length,
      runtime: plans.reduce((sum, plan) => sum + array(plan.runtime).length, 0),
      limitations: plans.reduce((sum, plan) => sum + array(plan.limitations).length, 0)
    };
  }

  function buildPackage({ id, name, scope, bundles, sourceIds = [] }) {
    const feats = array(bundles);
    return {
      schema: SCHEMA,
      schemaVersion: SCHEMA_VERSION,
      profile: {
        id: PROFILE.id,
        foundryVersion: PROFILE.foundryVersion,
        dnd5eVersion: PROFILE.dnd5eVersion,
        consumer: PROFILE.consumer,
        minimumImporterVersion: PROFILE.minimumImporterVersion
      },
      identity: {
        id: slug(id),
        name: String(name || 'Grimório — Talentos'),
        scope,
        sourceIds: [...new Set(sourceIds.filter(Boolean))]
      },
      summary: {
        bundles: feats.length,
        feats: feats.length,
        sources: new Set(feats.map(bundle => bundle.source?.sourceId).filter(Boolean)).size,
        prerequisites: feats.filter(bundle => bundle.feat?.prerequisites?.length).length,
        repeatable: feats.filter(bundle => bundle.feat?.repeatable === true).length,
        automation: automationSummary(feats)
      },
      ordering: 'source-name',
      bundleIdentifiers: feats.map(bundle => bundle.identity?.identifier),
      bundles: clone(feats)
    };
  }

  function buildCatalogPackage(catalogId) {
    const reg = registry();
    const catalog = reg.getFeatCatalogs().find(item => item.id === catalogId);
    if (!catalog) throw new Error(`Catálogo de talentos não encontrado: ${catalogId}`);
    const source = reg.getSource(catalog.sourceId);
    const bundles = catalog.feats.map(feat => bundleApi().buildFeatBundle(feat))
      .sort((a, b) => a.identity.name.localeCompare(b.identity.name, 'pt-BR'));
    return buildPackage({
      id: catalog.id,
      name: `${source?.shortTitle || source?.title || catalog.label || catalog.id} — Talentos`,
      scope: 'source-catalog',
      sourceIds: [catalog.sourceId],
      bundles
    });
  }

  function buildAllFeatPackage() {
    const reg = registry();
    const catalogs = reg.getFeatCatalogs();
    const bundles = catalogs.flatMap(catalog => catalog.feats.map(feat => bundleApi().buildFeatBundle(feat)))
      .sort((a, b) => (a.source?.sourceId || '').localeCompare(b.source?.sourceId || '') || a.identity.name.localeCompare(b.identity.name, 'pt-BR'));
    return buildPackage({
      id: 'catalogo-completo-talentos',
      name: 'Grimório — Talentos',
      scope: 'full-feat-catalog',
      sourceIds: catalogs.map(catalog => catalog.sourceId),
      bundles
    });
  }

  function validatePackage(pkg) {
    const errors = [];
    const warnings = [];
    if (!pkg || typeof pkg !== 'object' || Array.isArray(pkg)) {
      errors.push('Pacote de talentos inválido.');
      return { ok: false, errors, warnings };
    }
    if (pkg.schema !== SCHEMA) errors.push(`Schema incompatível: esperado ${SCHEMA}.`);
    if (pkg.schemaVersion !== SCHEMA_VERSION) errors.push(`Versão incompatível: esperado ${SCHEMA_VERSION}.`);
    if (pkg.profile?.id !== PROFILE.id) errors.push(`Perfil incompatível: esperado ${PROFILE.id}.`);
    if (pkg.profile?.minimumImporterVersion !== PROFILE.minimumImporterVersion) errors.push(`minimumImporterVersion precisa ser ${PROFILE.minimumImporterVersion}.`);
    if (!pkg.identity?.id || !pkg.identity?.name || !pkg.identity?.scope) errors.push('Identidade do pacote incompleta.');
    if (!Array.isArray(pkg.bundles) || !pkg.bundles.length) errors.push('O pacote não contém talentos.');
    const ids = new Set();
    for (const bundle of array(pkg.bundles)) {
      const validation = bundleApi().validateBundle(bundle);
      for (const error of validation.errors) errors.push(`${bundle?.identity?.name || 'Talento'}: ${error}`);
      for (const warning of validation.warnings) warnings.push(`${bundle?.identity?.name || 'Talento'}: ${warning}`);
      const key = bundle?.identity?.grimorioId;
      if (key && ids.has(key)) errors.push(`Talento duplicado no pacote: ${key}.`);
      if (key) ids.add(key);
    }
    const calculated = {
      bundles: array(pkg.bundles).length,
      feats: array(pkg.bundles).length,
      sources: new Set(array(pkg.bundles).map(bundle => bundle.source?.sourceId).filter(Boolean)).size,
      prerequisites: array(pkg.bundles).filter(bundle => bundle.feat?.prerequisites?.length).length,
      repeatable: array(pkg.bundles).filter(bundle => bundle.feat?.repeatable === true).length,
      automation: automationSummary(array(pkg.bundles))
    };
    for (const key of ['bundles', 'feats', 'sources', 'prerequisites', 'repeatable']) {
      if (Number(pkg.summary?.[key]) !== calculated[key]) errors.push(`Resumo inconsistente em ${key}: esperado ${calculated[key]}, encontrado ${pkg.summary?.[key]}.`);
    }
    for (const [key, expected] of Object.entries(calculated.automation)) {
      if (Number(pkg.summary?.automation?.[key]) !== expected) errors.push(`Resumo de automação inconsistente em ${key}: esperado ${expected}, encontrado ${pkg.summary?.automation?.[key]}.`);
    }
    return { ok: errors.length === 0, errors, warnings: [...new Set(warnings)], calculated };
  }

  function stringify(value, spacing = 2) { return JSON.stringify(value, null, spacing) + '\n'; }

  const API = Object.freeze({
    profile: PROFILE,
    schema: Object.freeze({ name: SCHEMA, version: SCHEMA_VERSION }),
    buildCatalogPackage,
    buildAllFeatPackage,
    validatePackage,
    stringify
  });

  global.GRIMORIO_FOUNDRY_FEAT_PACKAGE = API;
  if (global.GRIMORIO_EXPORT_REGISTRY?.register) {
    global.GRIMORIO_EXPORT_REGISTRY.register({ id: PROFILE.id, profile: PROFILE, featPackage: API });
  }
})(window);
