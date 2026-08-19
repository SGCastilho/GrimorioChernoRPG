'use strict';

// RB-1–RB-8 — contrato de transporte Race Build Bundle v1.
//
// Este arquivo NÃO cria documentos Foundry diretamente. Na RB-8, o grimorio-importer 0.13.x reconhece, valida, materializa e pode aplicar este envelope a um Actor através do AdvancementManager nativo.
(function initFoundryRaceBuildBundle(global) {
  const PROFILE_ID = 'foundry13-dnd5e533-grimorio-race-build-v1';
  const SCHEMA = 'grimorio-foundry-race-build-bundle';
  const SCHEMA_VERSION = 1;

  const PROFILE = Object.freeze({
    id: PROFILE_ID,
    label: 'Foundry VTT 13.351 · DnD5e 5.3.3 · Grimório Race Build Bundle v1',
    foundryVersion: '13.351',
    dnd5eVersion: '5.3.3',
    consumer: 'grimorio-importer',
    consumerLine: '0.13.x+',
    format: 'grimorio-foundry-race-build-bundle-v1',
    mediaType: 'application/json',
    fileExtension: '.json',
    phase: 'RB-8',
    compatibility: {
      status: 'actor-application-ready',
      importerStatus: 'rb8-actor-application',
      note: 'O Grimório Importer 0.13.0-beta.1 reconhece, valida e materializa este contrato e pode aplicá-lo a um Actor character via AdvancementManager. Se o Actor já possuir outra raça, a substituição exige confirmação explícita. A homologação in-app ainda é obrigatória antes de RC/Stable.'
    }
  });

  const TOP_LEVEL_KEYS = Object.freeze([
    'schema', 'schemaVersion', 'kind', 'profile', 'identity', 'source',
    'selection', 'resolved', 'readiness', 'foundryPlan'
  ]);

  const FORBIDDEN_TRANSPORT_KEYS = new Set([
    '__proto__', 'prototype', 'constructor',
    'system', 'effects', 'flags', 'changes', 'documentData',
    'script', 'macro', 'hook', 'hooks', 'eval'
  ]);

  function resolver() {
    const api = global.GRIMORIO_RACE_BUILD_RESOLVER;
    if (!api) throw new Error('GRIMORIO_RACE_BUILD_RESOLVER não foi inicializado.');
    return api;
  }

  function clone(value) {
    if (value === undefined) return undefined;
    return JSON.parse(JSON.stringify(value));
  }

  function cleanText(value) {
    return String(value ?? '').trim();
  }

  function array(value) {
    return Array.isArray(value) ? value : [];
  }

  function canonicalize(value) {
    if (Array.isArray(value)) return value.map(canonicalize);
    if (!value || typeof value !== 'object') return value;
    return Object.keys(value).sort().reduce((out, key) => {
      out[key] = canonicalize(value[key]);
      return out;
    }, {});
  }

  function stableStringify(value) {
    return JSON.stringify(canonicalize(value));
  }

  function fnv1a32(text, seed) {
    let hash = seed >>> 0;
    for (let index = 0; index < text.length; index += 1) {
      hash ^= text.charCodeAt(index);
      hash = Math.imul(hash, 0x01000193) >>> 0;
    }
    return hash >>> 0;
  }

  function hex32(value) {
    return (value >>> 0).toString(16).padStart(8, '0');
  }

  function stableHash(value) {
    const text = stableStringify(value);
    const a = fnv1a32(text, 0x811c9dc5);
    const b = fnv1a32(text, 0x9e3779b9);
    return `rb1-${hex32(a)}${hex32(b)}`;
  }

  function sourceMetadata(value, fallbackPage) {
    const raw = value && typeof value === 'object' ? value : { title: value };
    const registry = global.GRIMORIO_REGISTRY;
    const registered = registry?.resolveSource ? registry.resolveSource(raw) : null;
    const page = Number(raw?.page ?? fallbackPage);
    return {
      sourceId: registered?.id || null,
      title: cleanText(raw?.title || raw?.sourceTitle || registered?.title),
      page: Number.isFinite(page) ? page : null,
      pages: cleanText(raw?.pages),
      chapter: cleanText(raw?.chapter)
    };
  }

  function canonicalSelection(resolution) {
    const state = resolution.state;
    return {
      primaryRaceId: resolution.race.id,
      subraceId: resolution.subrace?.id || null,
      mixed: Boolean(state.mixed),
      secondaryRaceId: resolution.secondaryRace?.id || null,
      legacy: [...array(state.legacy)].sort(),
      heritage: {
        positive: [...array(state.heritage?.positive)].sort(),
        detrimental: [...array(state.heritage?.detrimental)].sort(),
        lineage: [...array(state.heritage?.lineage)].sort()
      },
      bloodlineChoices: canonicalize(clone(state.bloodlineChoices || {})),
      abilityMode: state.abilityMode || 'source',
      abilityChoices: canonicalize(clone(state.abilityChoices || {})),
      traitChoices: canonicalize(clone(state.traitChoices || {})),
      specialChoices: canonicalize(clone(state.specialChoices || {})),
      extraLegacy: [...array(state.extraLegacy)].sort(),
      optionalPools: {
        exolunar: Boolean(state.optionalPools?.exolunar),
        paraprismatic: Boolean(state.optionalPools?.paraprismatic)
      }
    };
  }

  function normalizeFeature(trait, role, owner = {}) {
    return {
      key: cleanText(owner.selectionKey || `${role}:${owner.raceId || 'universal'}:${owner.subraceId || 'base'}:${trait?.id || resolver().slug(trait?.originalName || trait?.name)}`),
      role,
      grimorioTraitId: cleanText(trait?.id),
      name: cleanText(trait?.name),
      originalName: cleanText(trait?.originalName),
      description: cleanText(trait?.description || trait?.summary),
      page: Number.isFinite(Number(trait?.page)) ? Number(trait.page) : null,
      source: sourceMetadata(owner.sourceTitle || owner.race?.source || owner.source, trait?.page),
      owner: {
        raceId: owner.raceId || null,
        subraceId: owner.subraceId || null,
        origin: owner.origin || 'dominant'
      },
      heritageRole: trait?.heritageRole || null
    };
  }

  function sortFeatures(items) {
    return [...items].sort((left, right) => String(left?.key || '').localeCompare(String(right?.key || ''), 'en'));
  }

  function normalizedFeatureBuckets(resolution) {
    const dominant = resolution.race;
    const subrace = resolution.subrace;
    const secondary = resolution.secondaryRace;

    const core = array(resolution.features.core).map(trait => normalizeFeature(trait, 'core', {
      raceId: dominant.id,
      race: dominant,
      origin: 'dominant'
    }));

    const subraceFeatures = array(resolution.features.subrace).map(trait => normalizeFeature(trait, 'subrace', {
      raceId: dominant.id,
      subraceId: subrace?.id || null,
      race: dominant,
      sourceTitle: subrace?.source || dominant.source,
      selectionKey: trait?.selectionKey,
      origin: 'dominant'
    }));

    const legacy = array(resolution.selections.legacy)
      .filter(entry => entry.kind !== 'mixed')
      .map(entry => normalizeFeature(entry.trait, entry.kind === 'universal-legacy' ? 'universal-legacy' : 'legacy', {
        raceId: entry.originRaceId,
        race: entry.originRaceId ? (entry.originRaceId === dominant.id ? dominant : secondary) : null,
        sourceTitle: entry.sourceTitle || (entry.originRaceId === dominant.id ? dominant.source : secondary?.source),
        selectionKey: entry.key,
        origin: entry.originRaceId === dominant.id ? 'dominant' : entry.originRaceId ? 'secondary' : 'universal'
      }));

    const mixed = array(resolution.selections.legacy)
      .filter(entry => entry.kind === 'mixed')
      .map(entry => normalizeFeature(entry.trait, 'mixed-blood', {
        raceId: entry.originRaceId,
        race: entry.originRaceId === dominant.id ? dominant : secondary,
        sourceTitle: entry.sourceTitle || (entry.originRaceId === dominant.id ? dominant.source : secondary?.source),
        selectionKey: entry.key,
        origin: entry.originRaceId === dominant.id ? 'dominant' : 'secondary'
      }));

    const heritage = ['positive', 'detrimental', 'lineage'].flatMap(role =>
      array(resolution.selections.heritage?.[role]).map(entry => normalizeFeature(entry.trait, 'heritage', {
        raceId: dominant.id,
        subraceId: subrace?.id || null,
        race: dominant,
        sourceTitle: subrace?.source || dominant.source,
        selectionKey: entry.key,
        origin: 'dominant'
      }))
    );

    function resolvedFeatures(bucket, role, defaultOrigin = 'secondary') {
      return array(resolution.features?.[bucket]).map(trait => {
        const raceId = trait?.originRaceId || (defaultOrigin === 'dominant' ? dominant.id : secondary?.id) || dominant.id;
        const ownerRace = resolver().findRace?.(raceId) || (raceId === dominant.id ? dominant : secondary);
        return normalizeFeature(trait, role, {
          raceId,
          subraceId: trait?.bloodlineSubraceId || null,
          race: ownerRace,
          sourceTitle: ownerRace?.source || dominant.source,
          selectionKey: trait?.selectionKey,
          origin: raceId === dominant.id ? 'dominant' : defaultOrigin
        });
      });
    }

    return {
      core: sortFeatures(core),
      subrace: sortFeatures(subraceFeatures),
      legacy: sortFeatures(legacy),
      mixed: sortFeatures(mixed),
      heritage: sortFeatures(heritage),
      secondaryHeritage: sortFeatures(resolvedFeatures('secondaryHeritage', 'secondary-heritage')),
      bloodline: sortFeatures(resolvedFeatures('bloodline', 'bloodline')),
      extraLegacy: sortFeatures(resolvedFeatures('extraLegacy', 'extra-legacy')),
      mutations: sortFeatures(resolvedFeatures('mutations', 'mutation', 'dominant')),
      automaticSecondary: sortFeatures(resolvedFeatures('automaticSecondary', 'automatic-secondary'))
    };
  }

  function buildBundle(raceOrResolution, rawState = {}) {
    const resolution = raceOrResolution?.schema === resolver().resolutionSchema.name
      ? raceOrResolution
      : resolver().resolve(raceOrResolution, rawState);

    if (!resolution?.race) throw new Error('Não é possível criar Race Build Bundle sem uma raça dominante válida.');

    const selection = canonicalSelection(resolution);
    const selectionHash = stableHash(selection);
    const features = normalizedFeatureBuckets(resolution);
    const contentBasis = {
      race: {
        id: resolution.race.id,
        name: resolution.race.name,
        originalName: resolution.race.originalName,
        abilityScore: resolution.race.abilityScore,
        meta: resolution.race.meta
      },
      subrace: resolution.subrace ? {
        id: resolution.subrace.id,
        name: resolution.subrace.name,
        originalName: resolution.subrace.originalName,
        ability: resolution.subrace.ability,
        bloodlineTrait: resolution.subrace.bloodlineTrait || null
      } : null,
      secondaryRace: resolution.secondaryRace ? {
        id: resolution.secondaryRace.id,
        name: resolution.secondaryRace.name,
        originalName: resolution.secondaryRace.originalName
      } : null,
      features
    };
    const contentHash = stableHash(contentBasis);
    const primaryId = resolution.race.id;
    const subraceId = resolution.subrace?.id || 'base';

    return {
      schema: SCHEMA,
      schemaVersion: SCHEMA_VERSION,
      kind: 'race-build',
      profile: {
        id: PROFILE.id,
        foundryVersion: PROFILE.foundryVersion,
        dnd5eVersion: PROFILE.dnd5eVersion,
        consumer: PROFILE.consumer,
        consumerLine: PROFILE.consumerLine
      },
      identity: {
        grimorioId: `race-build:${primaryId}:${subraceId}:${selectionHash}`,
        selectionHash,
        contentHash,
        primaryRaceId: primaryId,
        subraceId: resolution.subrace?.id || null,
        secondaryRaceId: resolution.secondaryRace?.id || null
      },
      source: {
        primaryRace: sourceMetadata(resolution.race.source, resolution.race.sourcePage),
        subrace: resolution.subrace ? sourceMetadata(resolution.subrace.source || resolution.race.source, resolution.subrace.page) : null,
        secondaryRace: resolution.secondaryRace ? sourceMetadata(resolution.secondaryRace.source, resolution.secondaryRace.sourcePage) : null
      },
      selection,
      resolved: {
        primaryRace: {
          grimorioId: resolution.race.id,
          name: cleanText(resolution.race.name),
          originalName: cleanText(resolution.race.originalName),
          abilityScore: cleanText(resolution.race.abilityScore),
          meta: clone(resolution.race.meta || {})
        },
        subrace: resolution.subrace ? {
          grimorioId: resolution.subrace.id,
          name: cleanText(resolution.subrace.name),
          originalName: cleanText(resolution.subrace.originalName),
          ability: cleanText(resolution.subrace.ability),
          bloodlineTrait: cleanText(resolution.subrace.bloodlineTrait),
          originalBloodlineTrait: cleanText(resolution.subrace.originalBloodlineTrait),
          editorialNote: cleanText(resolution.subrace.editorialNote)
        } : null,
        secondaryRace: resolution.secondaryRace ? {
          grimorioId: resolution.secondaryRace.id,
          name: cleanText(resolution.secondaryRace.name),
          originalName: cleanText(resolution.secondaryRace.originalName)
        } : null,
        limits: clone(resolution.limits),
        facts: clone(resolution.facts || {}),
        features
      },
      readiness: {
        status: resolution.status,
        modeledReady: Boolean(resolution.modeledReady),
        errors: clone(resolution.errors),
        warnings: clone(resolution.warnings),
        pending: clone(resolution.pending),
        eligibilityEngine: resolution.capabilities?.eligibilityEngine || 'rb3',
        canExport: Boolean(resolution.canExport),
        pendingFoundryChoices: clone(resolution.pendingFoundryChoices || []),
        exportEnabled: Boolean(resolution.canExport)
      },
      foundryPlan: {
        status: 'materialization-supported',
        actorApplication: 'supported-rb8',
        consumer: 'grimorio-importer',
        targetLine: '0.13.x+',
        itemType: 'race',
        note: 'RB-8: o Grimório Importer 0.13.0-beta.1 materializa Race/Características Raciais e pode aplicar a raça ao Actor através do AdvancementManager, preservando escolhas nativas/assistidas e exigindo confirmação explícita ao substituir uma raça existente.'
      }
    };
  }

  function inspectSafety(value, path, errors, depth = 0) {
    if (depth > 12) {
      errors.push(`${path || 'bundle'} excede a profundidade máxima do contrato.`);
      return;
    }
    if (!value || typeof value !== 'object') return;
    if (Array.isArray(value)) {
      value.forEach((item, index) => inspectSafety(item, `${path}[${index}]`, errors, depth + 1));
      return;
    }
    for (const [key, child] of Object.entries(value)) {
      if (FORBIDDEN_TRANSPORT_KEYS.has(key)) errors.push(`Chave Foundry/arbitrária proibida no transporte: ${path ? `${path}.` : ''}${key}`);
      inspectSafety(child, path ? `${path}.${key}` : key, errors, depth + 1);
    }
  }

  function inspectBundle(bundle) {
    const errors = [];
    if (!bundle || typeof bundle !== 'object') return { ok: false, errors: ['Bundle ausente ou inválido.'] };
    if (bundle.schema !== SCHEMA || Number(bundle.schemaVersion) !== SCHEMA_VERSION) errors.push('Schema Race Build Bundle incompatível.');
    if (bundle.kind !== 'race-build') errors.push('kind deve ser race-build.');
    for (const key of TOP_LEVEL_KEYS) if (!(key in bundle)) errors.push(`Campo obrigatório ausente: ${key}.`);
    if (!bundle.identity?.grimorioId || !bundle.identity?.selectionHash || !bundle.identity?.contentHash) errors.push('Identidade/hash do build incompleta.');
    if (!bundle.identity?.primaryRaceId) errors.push('Raça dominante ausente na identidade.');
    if (bundle.profile?.id !== PROFILE.id) errors.push('Perfil de transporte incorreto.');
    if (typeof bundle.readiness?.exportEnabled !== 'boolean') errors.push('readiness.exportEnabled deve ser booleano.');
    if (bundle.readiness?.exportEnabled !== bundle.readiness?.canExport) errors.push('readiness.exportEnabled deve acompanhar readiness.canExport no contrato Race Build v1.');
    if (typeof bundle.readiness?.canExport !== 'boolean') errors.push('readiness.canExport deve refletir a elegibilidade calculada pelo RB-3.');
    if (!['awaiting-importer', 'preflight-only', 'materialization-supported'].includes(bundle.foundryPlan?.status)) errors.push('foundryPlan deve ser awaiting-importer, preflight-only ou materialization-supported.');
    inspectSafety(bundle, '', errors);
    return { ok: errors.length === 0, errors };
  }

  function inspectBuild(raceOrId, rawState = {}) {
    let bundle = null;
    const errors = [];
    try {
      bundle = buildBundle(raceOrId, rawState);
      errors.push(...inspectBundle(bundle).errors);
    } catch (error) {
      errors.push(error.message);
    }
    return { ok: errors.length === 0, errors, bundle };
  }

  function stringify(bundle, spacing = 2) {
    return JSON.stringify(bundle, null, spacing) + '\n';
  }

  const API = Object.freeze({
    profile: PROFILE,
    schema: Object.freeze({ name: SCHEMA, version: SCHEMA_VERSION }),
    stableHash,
    stableStringify,
    buildBundle,
    inspectBundle,
    inspectBuild,
    stringify
  });

  global.GRIMORIO_FOUNDRY_RACE_BUILD_BUNDLE = API;
  if (global.GRIMORIO_EXPORT_REGISTRY?.register) {
    global.GRIMORIO_EXPORT_REGISTRY.register({
      id: PROFILE.id,
      profile: PROFILE,
      raceBuildBundle: API
    });
  }
})(window);
