'use strict';

// Fase 2 — transporte de Talentos do Grimório para o Grimório Importer.
(function initFoundryFeatBundle(global) {
  const SCHEMA = 'grimorio-foundry-feat-bundle';
  const SCHEMA_VERSION = 1;
  const PROFILE_ID = 'foundry13-dnd5e533-grimorio-feat-bundle-v1';

  const PROFILE = Object.freeze({
    id: PROFILE_ID,
    label: 'Foundry VTT 13.351 · DnD5e 5.3.3 · Grimório Feat Bundle v1',
    foundryVersion: '13.351',
    dnd5eVersion: '5.3.3',
    consumer: 'grimorio-importer',
    minimumImporterVersion: '0.10.0',
    format: 'grimorio-foundry-feat-bundle-v1',
    mediaType: 'application/json',
    fileExtension: '.json',
    compatibility: {
      status: 'homologated-transport',
      note: 'O bundle materializa um Item de Talento nativo no compêndio do Grimório Importer. Efeitos condicionais e escolhas permanecem fiéis ao texto quando não houver automação segura.'
    }
  });

  function clone(value) { return value === undefined ? undefined : JSON.parse(JSON.stringify(value)); }
  function clean(value) { return String(value ?? '').trim(); }
  function slug(value) {
    return String(value ?? '')
      .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
      .toLocaleLowerCase('pt-BR')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '') || 'talento';
  }
  function array(value) { return Array.isArray(value) ? value : value == null ? [] : [value]; }

  function registry() {
    const value = global.GRIMORIO_REGISTRY;
    if (!value?.getFeatCatalogs || !value?.getSource) throw new Error('Registro de talentos do Grimório não está carregado.');
    return value;
  }

  function allEntries() {
    const reg = registry();
    return reg.getFeatCatalogs().flatMap(catalog => catalog.feats.map(feat => ({ feat, catalog })));
  }

  function findEntry(featOrId) {
    if (featOrId && typeof featOrId === 'object') {
      const id = featOrId.id;
      const found = allEntries().find(entry => entry.feat === featOrId || entry.feat.id === id);
      if (found) return found;
    }
    const id = String(featOrId ?? '');
    return allEntries().find(entry => entry.feat.id === id) || null;
  }

  function sourceMetadata(entry) {
    const reg = registry();
    const sourceId = entry.feat.sourceId || entry.catalog.sourceId;
    const source = reg.getSource(sourceId);
    return {
      sourceId,
      title: clean(source?.title || entry.catalog.label || sourceId),
      shortTitle: clean(source?.shortTitle || source?.catalogLabel || entry.catalog.label),
      chapter: clean(entry.catalog.chapter),
      pages: clean(entry.catalog.pages),
      page: Number.isFinite(Number(entry.feat.sourcePage)) ? Number(entry.feat.sourcePage) : null,
      rules: '2014'
    };
  }

  function buildFeatBundle(featOrId) {
    const entry = findEntry(featOrId);
    if (!entry) throw new Error(`Talento não encontrado: ${typeof featOrId === 'object' ? featOrId?.id : featOrId}`);
    const feat = entry.feat;
    const source = sourceMetadata(entry);
    return {
      schema: SCHEMA,
      schemaVersion: SCHEMA_VERSION,
      kind: 'feat',
      profile: {
        id: PROFILE.id,
        foundryVersion: PROFILE.foundryVersion,
        dnd5eVersion: PROFILE.dnd5eVersion,
        consumer: PROFILE.consumer,
        minimumImporterVersion: PROFILE.minimumImporterVersion
      },
      identity: {
        grimorioId: clean(feat.id),
        identifier: slug(feat.id),
        name: clean(feat.name)
      },
      source,
      feat: {
        description: clean(feat.description),
        prerequisite: clean(feat.prerequisite),
        prerequisites: clone(array(feat.prerequisites)),
        repeatable: feat.repeatable === true,
        choices: clone(array(feat.choices)),
        foundryPlan: {
          itemType: 'feat',
          featureType: 'feat',
          storage: 'grimorio-feats',
          automation: 'conservative-description-first'
        }
      }
    };
  }

  function validateBundle(bundle) {
    const errors = [];
    const warnings = [];
    if (!bundle || typeof bundle !== 'object' || Array.isArray(bundle)) {
      errors.push('Bundle de talento inválido.');
      return { ok: false, errors, warnings };
    }
    if (bundle.schema !== SCHEMA) errors.push(`Schema incompatível: esperado ${SCHEMA}.`);
    if (bundle.schemaVersion !== SCHEMA_VERSION) errors.push(`Versão incompatível: esperado ${SCHEMA_VERSION}.`);
    if (bundle.kind !== 'feat') errors.push('O bundle precisa possuir kind "feat".');
    if (bundle.profile?.id !== PROFILE.id) errors.push(`Perfil incompatível: esperado ${PROFILE.id}.`);
    if (!bundle.identity?.grimorioId || !bundle.identity?.identifier || !bundle.identity?.name) errors.push('Identidade incompleta do talento.');
    if (!bundle.source?.sourceId || !bundle.source?.title || !Number.isFinite(Number(bundle.source?.page))) errors.push('Fonte/página do talento incompleta.');
    if (!bundle.feat || !clean(bundle.feat.description)) errors.push('Descrição do talento ausente.');
    if (!Array.isArray(bundle.feat?.prerequisites)) errors.push('prerequisites precisa ser um array.');
    if (!Array.isArray(bundle.feat?.choices)) errors.push('choices precisa ser um array.');
    if (bundle.feat?.prerequisite && !bundle.feat.prerequisites.length) warnings.push('Há pré-requisito textual sem representação estruturada.');
    return { ok: errors.length === 0, errors, warnings };
  }

  function inspectFeat(featOrId) {
    try {
      const bundle = buildFeatBundle(featOrId);
      const validation = validateBundle(bundle);
      return { ...validation, bundle };
    } catch (error) {
      return { ok: false, errors: [error.message || String(error)], warnings: [], bundle: null };
    }
  }

  function stringify(value, spacing = 2) { return JSON.stringify(value, null, spacing) + '\n'; }

  const API = Object.freeze({
    profile: PROFILE,
    schema: Object.freeze({ name: SCHEMA, version: SCHEMA_VERSION }),
    buildFeatBundle,
    validateBundle,
    inspectFeat,
    stringify
  });

  global.GRIMORIO_FOUNDRY_FEAT_BUNDLE = API;
  if (global.GRIMORIO_EXPORT_REGISTRY?.register) {
    global.GRIMORIO_EXPORT_REGISTRY.register({ id: PROFILE.id, profile: PROFILE, featBundle: API });
  }
})(window);
