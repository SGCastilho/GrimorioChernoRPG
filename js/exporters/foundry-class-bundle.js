'use strict';

// Fase 4 — formato de transporte para classes/subclasses.
// Este arquivo NÃO cria Items Foundry diretamente. Ele produz um bundle JSON
// estável que será consumido pelo módulo Grimório Importer na Fase 5.
(function initFoundryClassBundle(global) {
  const PROFILE_ID = 'foundry13-dnd5e533-grimorio-class-bundle-v1';
  const SCHEMA = 'grimorio-foundry-class-bundle';
  const SCHEMA_VERSION = 1;

  const PROFILE = Object.freeze({
    id: PROFILE_ID,
    label: 'Foundry VTT 13.351 · DnD5e 5.3.3 · Grimório Class Bundle v1',
    foundryVersion: '13.351',
    dnd5eVersion: '5.3.3',
    consumer: 'grimorio-importer',
    format: 'grimorio-foundry-class-bundle-v1',
    mediaType: 'application/json',
    fileExtension: '.json',
    phase: 4,
    compatibility: {
      status: 'transport-ready',
      note: 'O bundle preserva os dados do Grimório sem tentar materializar Items/Advancements. A conversão nativa será implementada pelo módulo Grimório Importer na Fase 5.'
    }
  });

  const ABILITY_KEYS = Object.freeze({
    'forca': 'str',
    'destreza': 'dex',
    'constituicao': 'con',
    'inteligencia': 'int',
    'sabedoria': 'wis',
    'carisma': 'cha'
  });

  function clone(value) {
    if (value === undefined) return undefined;
    return JSON.parse(JSON.stringify(value));
  }

  function normalize(value) {
    return String(value ?? '')
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLocaleLowerCase('pt-BR')
      .replace(/[’‘]/g, "'")
      .replace(/[–—−]/g, '-')
      .replace(/\s+/g, ' ')
      .trim();
  }

  function slug(value) {
    return normalize(value)
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '') || 'item';
  }

  function array(value) {
    return Array.isArray(value) ? value : value == null ? [] : [value];
  }

  function cleanText(value) {
    return String(value ?? '').trim();
  }

  function classOverride(classId) {
    return clone(global.GRIMORIO_FOUNDRY_CLASS_OVERRIDES?.classes?.[classId] || {});
  }

  function subclassOverride(subclassId) {
    return clone(global.GRIMORIO_FOUNDRY_CLASS_OVERRIDES?.subclasses?.[subclassId] || {});
  }

  function classIdentifier(cls) {
    const override = classOverride(cls?.id);
    return slug(override.identifier || cls?.id || cls?.name);
  }

  function subclassIdentifier(subclass) {
    const override = subclassOverride(subclass?.id);
    // O ID interno é usado por padrão porque existem versões homônimas de
    // subclasses em fontes diferentes (ex.: Fardos de Gotham/Scorn).
    return slug(override.identifier || subclass?.id || subclass?.originalName || subclass?.name);
  }

  function resolveSourceMetadata(value, fallbackPage) {
    const raw = value && typeof value === 'object' ? value : { title: value };
    const registry = global.GRIMORIO_REGISTRY;
    const registered = registry?.resolveSource ? registry.resolveSource(raw) : null;
    return {
      sourceId: registered?.id || null,
      title: cleanText(raw?.title || raw?.sourceTitle || registered?.title),
      pages: cleanText(raw?.pages),
      chapter: cleanText(raw?.chapter),
      page: Number.isFinite(Number(raw?.page ?? fallbackPage)) ? Number(raw?.page ?? fallbackPage) : null
    };
  }

  function parseHitDice(rawValue) {
    const raw = cleanText(rawValue);
    const standard = normalize(raw).match(/^d(4|6|8|10|12)$/);
    if (standard) return { raw, mode: 'standard', number: 1, faces: Number(standard[1]) };
    const multiple = normalize(raw).match(/^(\d+)d(4|6|8|10|12)$/);
    if (multiple) return { raw, mode: 'multiple', number: Number(multiple[1]), faces: Number(multiple[2]) };
    return { raw, mode: raw ? 'variable' : 'unknown', number: null, faces: null };
  }

  function parseAbilityMentions(text) {
    const found = [];
    const normalized = normalize(text);
    for (const [label, key] of Object.entries(ABILITY_KEYS)) {
      if (new RegExp(`\\b${label}\\b`).test(normalized)) found.push(key);
    }
    return found;
  }

  function featureKey(ownerKind, ownerId, feature, ordinal) {
    const level = Number(feature?.level);
    const levelPart = Number.isFinite(level) ? `l${level}` : 'l0';
    return `${ownerKind}.${slug(ownerId)}.feature.${slug(feature?.title || 'feature')}.${levelPart}.${ordinal}`;
  }

  function normalizeTables(tables) {
    return array(tables).map((table, index) => ({
      key: `table.${index + 1}.${slug(table?.title || 'table')}`,
      title: cleanText(table?.title),
      page: Number.isFinite(Number(table?.page)) ? Number(table.page) : null,
      description: cleanText(table?.description),
      sourceTitle: cleanText(table?.sourceTitle),
      columns: clone(array(table?.columns)),
      rows: clone(array(table?.rows))
    }));
  }

  function normalizeReferences(references) {
    return array(references).map((entry, index) => ({
      key: `reference.${index + 1}.${slug(entry?.title || 'reference')}`,
      title: cleanText(entry?.title),
      page: Number.isFinite(Number(entry?.page)) ? Number(entry.page) : null,
      text: cleanText(entry?.text),
      sourceTitle: cleanText(entry?.sourceTitle)
    }));
  }

  function normalizeFeatures(ownerKind, owner, features) {
    const occurrences = new Map();
    return array(features).map(feature => {
      const rawLevel = feature?.level;
      const level = rawLevel === null || rawLevel === undefined || rawLevel === '' ? Number.NaN : Number(rawLevel);
      const occurrenceKey = `${normalize(feature?.title)}::${Number.isFinite(level) ? level : 0}`;
      const ordinal = (occurrences.get(occurrenceKey) || 0) + 1;
      occurrences.set(occurrenceKey, ordinal);
      return {
        key: featureKey(ownerKind, owner.id, feature, ordinal),
        name: cleanText(feature?.title),
        level: Number.isFinite(level) ? level : null,
        description: cleanText(feature?.text),
        page: Number.isFinite(Number(feature?.page)) ? Number(feature.page) : null,
        sourceTitle: cleanText(feature?.sourceTitle || owner?.source?.title),
        originalName: cleanText(feature?.originalName),
        tables: normalizeTables(feature?.tables),
        foundryPlan: {
          itemType: 'feat',
          role: Number.isFinite(level) ? 'granted-feature' : 'feature-option',
          advancementType: Number.isFinite(level) ? 'ItemGrant' : 'ChooseItemsCandidate',
          grantAtLevel: Number.isFinite(level) ? level : null,
          automation: 'phase-5'
        }
      };
    });
  }

  function relatedFeatureRefs(label, featureEntries) {
    const key = normalize(label);
    const exact = featureEntries.filter(feature => normalize(feature.name) === key).map(feature => feature.key);
    if (exact.length) return { exact, related: [] };

    const related = featureEntries.filter(feature => {
      const featureName = normalize(feature.name);
      if (!featureName || featureName.length < 5) return false;
      return key.includes(featureName) || featureName.includes(key.replace(/\([^)]*\)/g, '').trim());
    }).map(feature => feature.key);
    return { exact: [], related };
  }

  function progressionEventKind(label, refs) {
    if (refs.exact.length) return 'feature';
    const text = normalize(label);
    if (/caracteristica de (?:caminho|colegio|patrono|dominio|circulo|origem|arquetipo|tradicao|juramento|conclave|especializacao|disciplina|paradigma)/.test(text)) return 'subclass-feature';
    if (/aprimoramento da caracteristica de paradigma/.test(text)) return 'subclass-feature';
    if (refs.related.length) return 'feature-scaling';
    if (/\([^)]*(?:uso|usos|dado|dados|nivel|niveis|d\d+|nd\s*\d)/.test(text)) return 'feature-scaling';
    return 'progression-note';
  }

  function normalizeProgression(progression, featureEntries) {
    if (!progression) return null;
    return {
      title: cleanText(progression.title),
      sourceTitle: cleanText(progression.sourceTitle),
      sourcePage: Number.isFinite(Number(progression.sourcePage)) ? Number(progression.sourcePage) : null,
      columns: clone(array(progression.columns)),
      levels: array(progression.rows).map(row => ({
        ...clone(row),
        level: Number(row.level),
        features: array(row.features).map(label => {
          const refs = relatedFeatureRefs(label, featureEntries);
          return {
            label: cleanText(label),
            kind: progressionEventKind(label, refs),
            featureRefs: refs.exact,
            relatedFeatureRefs: refs.related
          };
        })
      }))
    };
  }

  function subclassSelectionSummary(cls, subclasses) {
    const levels = array(subclasses).map(subclass => {
      const valid = array(subclass.features).map(feature => Number(feature.level)).filter(level => Number.isFinite(level) && level >= 1 && level <= 20);
      return valid.length ? Math.min(...valid) : null;
    }).filter(Number.isFinite);
    const counts = new Map();
    for (const level of levels) counts.set(level, (counts.get(level) || 0) + 1);
    const sorted = Array.from(counts.entries()).sort((a, b) => b[1] - a[1] || a[0] - b[0]);
    const selectionLevel = sorted[0]?.[0] ?? null;
    return {
      selectionLevel,
      homogeneous: sorted.length <= 1,
      observedLevels: Object.fromEntries(Array.from(counts.entries()).sort((a, b) => a[0] - b[0])),
      options: array(subclasses).map(subclass => ({
        grimorioId: subclass.id,
        identifier: subclassIdentifier(subclass),
        name: subclass.name,
        originalName: subclass.originalName || '',
        source: resolveSourceMetadata(subclass.source, subclass.sourcePage),
        firstFeatureLevel: (() => {
          const valid = array(subclass.features).map(feature => Number(feature.level)).filter(level => Number.isFinite(level));
          return valid.length ? Math.min(...valid) : null;
        })()
      }))
    };
  }

  function nativeClassReadiness(cls, override, hitDice) {
    const warnings = array(override.nativeWarnings).map(String);
    if (!cleanText(cls.hitDie)) warnings.push('Dado de Vida ausente.');
    if (hitDice.mode !== 'standard') warnings.push(`Dado de Vida não padrão para o Item de classe vanilla: ${hitDice.raw || '(vazio)'}.`);
    if (!cleanText(cls.saves)) warnings.push('Proficiências de salvaguarda ausentes.');
    if (!cleanText(cls.armor) || !cleanText(cls.weapons)) warnings.push('Proficiências de equipamento incompletas.');
    return { status: warnings.length ? 'review' : 'ready', warnings: Array.from(new Set(warnings)) };
  }

  function baseEnvelope(kind, identity, source, nativeMapping) {
    return {
      schema: SCHEMA,
      schemaVersion: SCHEMA_VERSION,
      kind,
      profile: {
        id: PROFILE.id,
        foundryVersion: PROFILE.foundryVersion,
        dnd5eVersion: PROFILE.dnd5eVersion,
        consumer: PROFILE.consumer
      },
      identity,
      source,
      nativeMapping
    };
  }

  function buildClassBundle(cls, options = {}) {
    if (!cls || typeof cls !== 'object') throw new TypeError('Classe inválida para exportação.');
    const progression = global.GRIMORIO_CLASS_PROGRESSIONS?.[cls.id] || null;
    const subclasses = array(global.GRIMORIO_SUBCLASSES).filter(item => item.classId === cls.id);
    const override = classOverride(cls.id);
    const hitDice = parseHitDice(cls.hitDie);
    const features = normalizeFeatures('class', cls, cls.features);
    const source = resolveSourceMetadata(cls.source, cls.tablePage || cls.basics?.page);
    const nativeMapping = nativeClassReadiness(cls, override, hitDice);
    const bundle = baseEnvelope('class', {
      grimorioId: cls.id,
      identifier: classIdentifier(cls),
      name: cleanText(cls.name),
      originalName: cleanText(cls.originalName),
      aliases: clone(array(cls.aliases))
    }, source, nativeMapping);

    bundle.class = {
      itemType: 'class',
      description: cleanText(cls.desc),
      hitDice,
      primaryAbility: {
        raw: cleanText(cls.ability),
        abilityKeys: parseAbilityMentions(cls.ability)
      },
      proficiencies: {
        saves: { raw: cleanText(cls.saves), abilityKeys: parseAbilityMentions(cls.saves) },
        armor: cleanText(cls.armor),
        weapons: cleanText(cls.weapons),
        tools: cleanText(cls.tools),
        skills: cleanText(cls.skills)
      },
      basics: clone(cls.basics || null),
      overview: clone(array(cls.overview)),
      creation: clone(array(cls.creation)),
      tables: normalizeTables(cls.tables),
      references: normalizeReferences(cls.references),
      presentation: {
        sigilKey: cleanText(cls.sigilKey),
        color: cleanText(cls.color)
      }
    };
    bundle.features = features;
    bundle.progression = normalizeProgression(progression, features);
    bundle.subclassSelection = subclassSelectionSummary(cls, subclasses);
    if (options.includeSubclassBundles) bundle.subclasses = subclasses.map(buildSubclassBundle);
    return bundle;
  }

  function buildSubclassBundle(subclass) {
    if (!subclass || typeof subclass !== 'object') throw new TypeError('Subclasse inválida para exportação.');
    const parent = array(global.GRIMORIO_CLASSES).find(item => item.id === subclass.classId) || null;
    if (!parent) throw new Error(`Classe-base não encontrada para ${subclass.id}: ${subclass.classId}`);
    const source = resolveSourceMetadata(subclass.source, subclass.sourcePage);
    const levels = array(subclass.features).map(feature => Number(feature.level)).filter(level => Number.isFinite(level));
    const features = normalizeFeatures('subclass', subclass, subclass.features);
    const bundle = baseEnvelope('subclass', {
      grimorioId: subclass.id,
      identifier: subclassIdentifier(subclass),
      name: cleanText(subclass.name),
      originalName: cleanText(subclass.originalName),
      aliases: clone(array(subclass.aliases))
    }, source, { status: 'ready', warnings: [] });

    bundle.parentClass = {
      grimorioId: parent.id,
      identifier: classIdentifier(parent),
      name: parent.name
    };
    bundle.subclass = {
      itemType: 'subclass',
      classIdentifier: classIdentifier(parent),
      selectionLevel: levels.length ? Math.min(...levels) : null,
      description: cleanText(subclass.desc),
      tables: normalizeTables(subclass.tables),
      references: normalizeReferences(subclass.otherSources),
      sourcePage: Number.isFinite(Number(subclass.sourcePage)) ? Number(subclass.sourcePage) : null
    };
    bundle.features = features;
    return bundle;
  }

  function validateFeature(feature, owner, errors) {
    if (!feature.key) errors.push(`${owner}: característica sem key.`);
    if (!feature.name) errors.push(`${owner}: característica sem nome.`);
    if (feature.level !== null && (!Number.isInteger(feature.level) || feature.level < 1 || feature.level > 20)) errors.push(`${owner}: nível inválido em ${feature.name || feature.key}.`);
    if (!feature.description) errors.push(`${owner}: característica sem descrição em ${feature.name || feature.key}.`);
  }

  function inspectClass(cls) {
    const errors = [];
    let bundle = null;
    try { bundle = buildClassBundle(cls); }
    catch (error) { errors.push(error.message); }
    if (bundle) {
      if (!bundle.identity.grimorioId || !bundle.identity.identifier || !bundle.identity.name) errors.push('Identidade de classe incompleta.');
      if (!bundle.source.title) errors.push(`${bundle.identity.grimorioId}: fonte ausente.`);
      if (!bundle.progression || bundle.progression.levels.length !== 20) errors.push(`${bundle.identity.grimorioId}: progressão deve possuir 20 níveis.`);
      if (!bundle.features.length) errors.push(`${bundle.identity.grimorioId}: nenhuma característica de classe.`);
      for (const feature of bundle.features) validateFeature(feature, bundle.identity.grimorioId, errors);
      const keys = new Set();
      for (const feature of bundle.features) {
        if (keys.has(feature.key)) errors.push(`${bundle.identity.grimorioId}: key de característica duplicada: ${feature.key}.`);
        keys.add(feature.key);
      }
    }
    return { ok: errors.length === 0, errors, bundle, nativeMapping: bundle?.nativeMapping || null };
  }

  function inspectSubclass(subclass) {
    const errors = [];
    let bundle = null;
    try { bundle = buildSubclassBundle(subclass); }
    catch (error) { errors.push(error.message); }
    if (bundle) {
      if (!bundle.identity.grimorioId || !bundle.identity.identifier || !bundle.identity.name) errors.push('Identidade de subclasse incompleta.');
      if (!bundle.parentClass.identifier) errors.push(`${bundle.identity.grimorioId}: classIdentifier ausente.`);
      // Algumas subclasses herdadas do núcleo antigo não possuem metadado de
      // fonte no objeto original. O bundle preserva essa lacuna em vez de
      // atribuir silenciosamente a fonte da classe-base.
      if (!bundle.features.length) errors.push(`${bundle.identity.grimorioId}: nenhuma característica de subclasse.`);
      for (const feature of bundle.features) validateFeature(feature, bundle.identity.grimorioId, errors);
      const keys = new Set();
      for (const feature of bundle.features) {
        if (keys.has(feature.key)) errors.push(`${bundle.identity.grimorioId}: key de característica duplicada: ${feature.key}.`);
        keys.add(feature.key);
      }
    }
    return { ok: errors.length === 0, errors, bundle };
  }

  function inspectCatalog(classes = global.GRIMORIO_CLASSES, subclasses = global.GRIMORIO_SUBCLASSES) {
    const classAnalyses = array(classes).map(inspectClass);
    const subclassAnalyses = array(subclasses).map(inspectSubclass);
    const nativeReady = classAnalyses.filter(item => item.ok && item.nativeMapping?.status === 'ready').length;
    const nativeReview = classAnalyses.filter(item => item.ok && item.nativeMapping?.status === 'review').length;
    return {
      classes: {
        total: classAnalyses.length,
        bundleReady: classAnalyses.filter(item => item.ok).length,
        blocked: classAnalyses.filter(item => !item.ok).length,
        nativeReady,
        nativeReview,
        analyses: classAnalyses
      },
      subclasses: {
        total: subclassAnalyses.length,
        bundleReady: subclassAnalyses.filter(item => item.ok).length,
        blocked: subclassAnalyses.filter(item => !item.ok).length,
        analyses: subclassAnalyses
      }
    };
  }

  function stringify(bundle, spacing = 2) {
    return JSON.stringify(bundle, null, spacing) + '\n';
  }

  const API = Object.freeze({
    profile: PROFILE,
    schema: Object.freeze({ name: SCHEMA, version: SCHEMA_VERSION }),
    identifiers: Object.freeze({ classIdentifier, subclassIdentifier }),
    buildClassBundle,
    buildSubclassBundle,
    inspectClass,
    inspectSubclass,
    inspectCatalog,
    stringify
  });

  global.GRIMORIO_FOUNDRY_CLASS_BUNDLE = API;
  if (global.GRIMORIO_EXPORT_REGISTRY?.register) {
    global.GRIMORIO_EXPORT_REGISTRY.register({
      id: PROFILE.id,
      profile: PROFILE,
      classBundle: API
    });
  }
})(window);
