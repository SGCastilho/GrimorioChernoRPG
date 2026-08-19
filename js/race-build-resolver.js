'use strict';

// RB-3/RB-4 — resolvedor normativo do construtor racial.
//
// Responsabilidades:
// - normalizar/migrar o estado Race Builder v2;
// - calcular pools e slots de Legado/Sangue Misto;
// - resolver escolhas estruturais que alteram a identidade do build;
// - preservar escolhas dependentes do Actor como pendingFoundryChoices;
// - produzir uma resolução determinística, sem conhecer documentos Foundry.
(function initRaceBuildResolver(global) {
  const BUILDER_SCHEMA = 'grimorio-race-builder-state';
  const BUILDER_SCHEMA_VERSION = 2;
  const RESOLUTION_SCHEMA = 'grimorio-race-build-resolution';
  const RESOLUTION_SCHEMA_VERSION = 1;
  const PHASE = 'RB-3';

  const RESERVED_RECORD_KEYS = new Set([
    '__proto__', 'prototype', 'constructor',
    'system', 'effects', 'flags', 'changes', 'documentData',
    'script', 'macro', 'hook', 'hooks', 'eval'
  ]);
  const OPTIONAL_POOL_IDS = Object.freeze(['exolunar', 'paraprismatic']);
  const ABILITIES = Object.freeze([
    { id: 'str', name: 'Força', aliases: ['forca', 'strength'] },
    { id: 'dex', name: 'Destreza', aliases: ['destreza', 'dexterity'] },
    { id: 'con', name: 'Constituição', aliases: ['constituicao', 'constitution'] },
    { id: 'int', name: 'Inteligência', aliases: ['inteligencia', 'intelligence'] },
    { id: 'wis', name: 'Sabedoria', aliases: ['sabedoria', 'wisdom'] },
    { id: 'cha', name: 'Carisma', aliases: ['carisma', 'charisma'] }
  ]);
  const SIZE_OPTIONS = Object.freeze([
    { id: 'tiny', name: 'Minúsculo', aliases: ['minusculo', 'tiny'] },
    { id: 'small', name: 'Pequeno', aliases: ['pequeno', 'small'] },
    { id: 'medium', name: 'Médio', aliases: ['medio', 'medium'] },
    { id: 'large', name: 'Grande', aliases: ['grande', 'large'] },
    { id: 'huge', name: 'Enorme', aliases: ['enorme', 'huge'] },
    { id: 'gargantuan', name: 'Colossal', aliases: ['colossal', 'gargantuan'] }
  ]);

  function races() {
    return Array.isArray(global.GRIMORIO_RACES) ? global.GRIMORIO_RACES : [];
  }

  function rules() {
    return global.GRIMORIO_RACE_RULES && typeof global.GRIMORIO_RACE_RULES === 'object'
      ? global.GRIMORIO_RACE_RULES
      : {};
  }

  function eligibilityRules() {
    return global.GRIMORIO_RACE_BUILD_ELIGIBILITY && typeof global.GRIMORIO_RACE_BUILD_ELIGIBILITY === 'object'
      ? global.GRIMORIO_RACE_BUILD_ELIGIBILITY
      : {};
  }

  function clone(value) {
    if (value === undefined) return undefined;
    return JSON.parse(JSON.stringify(value));
  }

  function array(value) {
    return Array.isArray(value) ? value : [];
  }

  function hasStructuredContent(value) {
    if (Array.isArray(value)) return value.length > 0;
    if (value && typeof value === 'object') return Object.keys(value).length > 0;
    return Boolean(String(value ?? '').trim());
  }

  function uniqueStrings(value) {
    return Array.from(new Set(array(value).map(item => String(item || '').trim()).filter(Boolean)));
  }

  function normalizeText(value) {
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
    return normalizeText(value)
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '') || 'item';
  }

  function sanitizeValue(value, depth = 0) {
    if (depth > 6) return null;
    if (value === null || value === undefined) return value ?? null;
    if (typeof value === 'string') return value.slice(0, 1500);
    if (typeof value === 'boolean') return value;
    if (typeof value === 'number') return Number.isFinite(value) ? value : null;
    if (Array.isArray(value)) return value.slice(0, 120).map(item => sanitizeValue(item, depth + 1));
    if (typeof value !== 'object') return String(value).slice(0, 1500);
    const output = {};
    for (const [key, child] of Object.entries(value)) {
      if (RESERVED_RECORD_KEYS.has(key)) continue;
      if (Object.keys(output).length >= 120) break;
      output[String(key).slice(0, 120)] = sanitizeValue(child, depth + 1);
    }
    return output;
  }

  function sanitizeRecord(value) {
    const sanitized = sanitizeValue(value);
    return sanitized && !Array.isArray(sanitized) && typeof sanitized === 'object' ? sanitized : {};
  }

  function emptyHeritage() {
    return { positive: [], detrimental: [], lineage: [] };
  }

  function emptyOptionalPools() {
    return { exolunar: false, paraprismatic: false };
  }

  function defaultBuilderState() {
    return {
      schema: BUILDER_SCHEMA,
      schemaVersion: BUILDER_SCHEMA_VERSION,
      subraceId: null,
      mixed: false,
      secondaryRaceId: null,
      legacy: [],
      heritage: emptyHeritage(),
      bloodlineChoices: {},
      abilityMode: 'source',
      abilityChoices: {},
      traitChoices: {},
      specialChoices: {},
      extraLegacy: [],
      optionalPools: emptyOptionalPools()
    };
  }

  function findRace(id) {
    return races().find(race => race?.id === id) || null;
  }

  function findSubrace(race, id) {
    return array(race?.subraces).find(subrace => subrace?.id === id) || null;
  }

  function issue(code, message, path = '', severity = 'error', extra = {}) {
    return { code, message, path, severity, ...extra };
  }

  function legacySlots(race) {
    const baseRaw = Number(race?.legacyChoices ?? rules().legacyChoices ?? 2);
    const base = Number.isFinite(baseRaw) && baseRaw > 0 ? Math.max(2, Math.floor(baseRaw)) : 2;
    const bonusRaw = Number(race?.dominantLegacyBonus || 0);
    const bonus = Number.isFinite(bonusRaw) && bonusRaw > 0 ? Math.floor(bonusRaw) : 0;
    return { base, bonus, total: base + bonus };
  }

  function legacyIsBonusEligible(race, key) {
    return Boolean(race?.id) && String(key || '').startsWith(`${race.id}:legacy:`);
  }

  function universalTraitId(sourceId, trait) {
    return String(trait?.id || slug(trait?.originalName || trait?.name || 'legacy-trait'));
  }

  function universalPoolEntries() {
    const rr = rules();
    const entries = [];
    for (const trait of array(rr?.zagalhtaExolunar?.universalLegacyTraits)) {
      const id = universalTraitId('zagalhta-exolunar', trait);
      entries.push({
        key: `universal:zagalhta-exolunar:legacy:${id}`,
        kind: 'universal-legacy', poolId: 'exolunar', originRaceId: null,
        originRaceName: 'Traços Exolunares Universais',
        sourceId: rr?.zagalhtaExolunar?.sourceId || 'zagalhta-exolunar',
        sourceTitle: rr?.zagalhtaExolunar?.source || '', trait: { ...clone(trait), id }
      });
    }
    for (const trait of array(rr?.paraprismaticTempest?.planarLegacyTraits)) {
      const id = universalTraitId('paraprismatic-tempest', trait);
      entries.push({
        key: `universal:paraprismatic-tempest:legacy:${id}`,
        kind: 'universal-legacy', poolId: 'paraprismatic', originRaceId: null,
        originRaceName: 'Traços de Legado Planares',
        sourceId: rr?.paraprismaticTempest?.sourceId || 'paraprismatic-tempest',
        sourceTitle: rr?.paraprismaticTempest?.source || '', trait: { ...clone(trait), id }
      });
    }
    return entries;
  }

  function raceLegacyEntries(race, kind = 'legacy') {
    if (!race) return [];
    const source = kind === 'mixed' ? race.mixedBloodTraits : race.legacyTraits;
    return array(source).map(trait => ({
      key: `${race.id}:${kind}:${trait.id}`,
      kind,
      poolId: null,
      originRaceId: race.id,
      originRaceName: race.name,
      sourceId: null,
      sourceTitle: race.source || '',
      trait: clone(trait)
    }));
  }

  function secondaryPolicy(raceId) {
    return eligibilityRules()?.secondaryRaceRules?.[raceId] || {};
  }

  function isAutomaticSecondaryBloodline(raceId) {
    return Boolean(secondaryPolicy(raceId)?.automaticBloodline);
  }

  function legacyPool(race, state) {
    if (!race) return [];
    const normalizedState = state || defaultBuilderState();
    const output = [...raceLegacyEntries(race, 'legacy')];

    if (normalizedState.optionalPools?.exolunar || normalizedState.optionalPools?.paraprismatic) {
      for (const entry of universalPoolEntries()) {
        if (normalizedState.optionalPools?.[entry.poolId]) output.push(entry);
      }
    }

    if (normalizedState.mixed && normalizedState.secondaryRaceId) {
      const secondary = findRace(normalizedState.secondaryRaceId);
      if (secondary && secondary.id !== race.id) {
        output.push(...raceLegacyEntries(secondary, 'legacy'));
        // Regra geral 5.19: Traços de Sangue Misto representam a raça secundária.
        for (const entry of raceLegacyEntries(secondary, 'mixed')) {
          if (entry.trait?.id === 'bloodline' && isAutomaticSecondaryBloodline(secondary.id)) continue;
          output.push(entry);
        }
      }
    }

    const seen = new Set();
    return output.filter(entry => {
      if (!entry.key || seen.has(entry.key)) return false;
      seen.add(entry.key);
      return true;
    });
  }

  function extraLegacyPool(race, state, mode = 'versatile') {
    if (!race) return [];
    const secondary = state?.mixed && state?.secondaryRaceId ? findRace(state.secondaryRaceId) : null;
    if (mode === 'versatile') {
      const output = [...raceLegacyEntries(race, 'legacy')];
      if (secondary) output.push(...raceLegacyEntries(secondary, 'legacy'));
      return output;
    }
    if (mode === 'shambled-body') {
      const excluded = new Set([race.id, secondary?.id].filter(Boolean));
      return races().filter(item => !excluded.has(item.id)).flatMap(item => raceLegacyEntries(item, 'legacy'));
    }
    return [];
  }

  function heritageKey(raceId, subraceId, role, traitId) {
    return `subrace:${raceId}:${subraceId}:heritage:${role}:${traitId}`;
  }

  function heritageOptions(race, subrace) {
    const result = { rule: [], positive: [], detrimental: [], lineage: [] };
    if (!race || !subrace) return result;
    for (const trait of array(subrace.traits)) {
      const role = ['rule', 'positive', 'detrimental', 'lineage'].includes(trait?.heritageRole)
        ? trait.heritageRole
        : null;
      if (!role) continue;
      result[role].push({
        key: heritageKey(race.id, subrace.id, role, trait.id),
        role, raceId: race.id, subraceId: subrace.id, trait: clone(trait)
      });
    }
    return result;
  }

  function heritageLimits(race, subrace, asSecondary = false) {
    const merged = { ...(race?.heritageRules || {}), ...(subrace?.heritageRules || {}) };
    const positive = Number(asSecondary ? merged.secondaryPositiveChoices : merged.positiveChoices);
    const detrimental = Number(asSecondary ? merged.secondaryDetrimentalChoices : merged.detrimentalChoices);
    return {
      positive: Number.isFinite(positive) && positive >= 0 ? Math.floor(positive) : 0,
      detrimental: Number.isFinite(detrimental) && detrimental >= 0 ? Math.floor(detrimental) : 0,
      lineage: 0,
      removeDetrimentalAt: array(merged.removeDetrimentalAt).map(Number).filter(Number.isFinite),
      secondaryBloodlineAutomatic: Boolean(merged.secondaryBloodlineAutomatic),
      secondaryLegacySlotsUsed: Number(merged.secondaryLegacySlotsUsed || 0) || 0
    };
  }

  function migrateV1RaceState(raw) {
    const base = defaultBuilderState();
    if (!raw || typeof raw !== 'object') return base;
    return {
      ...base,
      subraceId: raw.subraceId == null ? null : String(raw.subraceId),
      mixed: Boolean(raw.mixed),
      secondaryRaceId: raw.secondaryRaceId == null ? null : String(raw.secondaryRaceId),
      legacy: uniqueStrings(raw.legacy)
    };
  }

  function normalizeSecondaryHeritage(value) {
    const source = value && typeof value === 'object' ? value : {};
    return {
      subraceId: source.subraceId == null ? null : String(source.subraceId),
      positive: uniqueStrings(source.positive),
      detrimental: uniqueStrings(source.detrimental)
    };
  }

  function normalizeBuilderState(raceOrId, raw, options = {}) {
    const race = typeof raceOrId === 'string' ? findRace(raceOrId) : raceOrId;
    const base = defaultBuilderState();
    const input = raw && typeof raw === 'object' ? raw : {};
    const v2OnlyFields = ['heritage', 'bloodlineChoices', 'abilityMode', 'abilityChoices', 'traitChoices', 'specialChoices', 'extraLegacy', 'optionalPools'];
    const looksLikeV2 = Number(input.schemaVersion) === BUILDER_SCHEMA_VERSION
      || input.schema === BUILDER_SCHEMA
      || v2OnlyFields.some(field => Object.prototype.hasOwnProperty.call(input, field));
    const source = looksLikeV2 ? input : migrateV1RaceState(input);

    const normalized = {
      ...base,
      subraceId: source.subraceId == null ? null : String(source.subraceId),
      mixed: Boolean(source.mixed),
      secondaryRaceId: source.secondaryRaceId == null ? null : String(source.secondaryRaceId),
      legacy: uniqueStrings(source.legacy),
      heritage: {
        positive: uniqueStrings(source.heritage?.positive),
        detrimental: uniqueStrings(source.heritage?.detrimental),
        lineage: uniqueStrings(source.heritage?.lineage)
      },
      bloodlineChoices: sanitizeRecord(source.bloodlineChoices),
      abilityMode: ['source', 'flexible', 'uncapped'].includes(source.abilityMode) ? source.abilityMode : 'source',
      abilityChoices: sanitizeRecord(source.abilityChoices),
      traitChoices: sanitizeRecord(source.traitChoices),
      specialChoices: sanitizeRecord(source.specialChoices),
      extraLegacy: uniqueStrings(source.extraLegacy),
      optionalPools: {
        exolunar: Boolean(source.optionalPools?.exolunar),
        paraprismatic: Boolean(source.optionalPools?.paraprismatic)
      }
    };

    if (!race) return normalized;
    if (normalized.subraceId && !findSubrace(race, normalized.subraceId)) normalized.subraceId = null;
    if (!normalized.mixed) normalized.secondaryRaceId = null;
    if (normalized.secondaryRaceId === race.id || !findRace(normalized.secondaryRaceId)) normalized.secondaryRaceId = null;

    const subrace = findSubrace(race, normalized.subraceId);
    const heritage = heritageOptions(race, subrace);
    const validHeritage = {
      positive: new Set(heritage.positive.map(item => item.key)),
      detrimental: new Set(heritage.detrimental.map(item => item.key)),
      lineage: new Set(heritage.lineage.map(item => item.key))
    };
    for (const role of ['positive', 'detrimental', 'lineage']) {
      normalized.heritage[role] = normalized.heritage[role].filter(key => validHeritage[role].has(key));
    }

    if (normalized.specialChoices?.hanyouSecondary) {
      normalized.specialChoices.hanyouSecondary = normalizeSecondaryHeritage(normalized.specialChoices.hanyouSecondary);
    }
    if (Array.isArray(normalized.specialChoices?.shambledBodyLegacy)) {
      normalized.specialChoices.shambledBodyLegacy = uniqueStrings(normalized.specialChoices.shambledBodyLegacy);
    }

    if (options.filterLegacy !== false) {
      const validLegacy = new Set(legacyPool(race, normalized).map(item => item.key));
      normalized.legacy = normalized.legacy.filter(key => validLegacy.has(key));
    }

    return normalized;
  }

  function traitText(trait) {
    return String(trait?.description || trait?.summary || '');
  }

  function fixedSubraceTraits(race, subrace) {
    if (!subrace) return [];
    const options = heritageOptions(race, subrace);
    const hasHeritageSystem = Object.values(options).some(list => list.length > 0);
    if (!hasHeritageSystem) return array(subrace.traits).map(trait => clone(trait));
    // Hanyou dominante: linhagem é fixa; positivos/prejudiciais são escolhas.
    return options.lineage.map(entry => ({
      ...clone(entry.trait), heritageRole: 'lineage', selectionKey: entry.key
    }));
  }

  function normalizedNameMatches(value, candidate) {
    const left = normalizeText(value);
    const right = normalizeText(candidate);
    return left && right && (left === right || left.includes(right) || right.includes(left));
  }

  function findTraitByLabel(subrace, label) {
    const target = normalizeText(label);
    return array(subrace?.traits).find(trait => {
      const names = [trait?.name, trait?.originalName].map(normalizeText).filter(Boolean);
      return names.some(name => name === target || target.includes(name) || name.includes(target));
    }) || null;
  }

  function explicitBloodlineGroups(subrace) {
    const rawLabel = String(subrace?.bloodlineTrait || '').trim();
    const originals = uniqueStrings(subrace?.originalBloodlineTraits);
    if (!rawLabel && !originals.length) return [];

    if (originals.length) {
      return originals.map(original => {
        const trait = findTraitByLabel(subrace, original);
        return trait ? [trait] : [];
      }).filter(group => group.length);
    }

    const text = normalizeText(rawLabel);
    const traits = array(subrace?.traits).filter(trait => {
      const n = normalizeText(trait?.name);
      const o = normalizeText(trait?.originalName);
      return (n && text.includes(n)) || (o && text.includes(o));
    });
    if (!traits.length) return [];

    // "A ou B, e C" -> A+C / B+C. É a única composição textual ambígua
    // observada no catálogo atual; a vírgula separa o requisito comum.
    if (/\bou\b/.test(text) && /,\s*e\b/.test(text)) {
      const [before, after] = text.split(/,\s*e\b/, 2);
      const common = traits.filter(trait => {
        const n = normalizeText(trait?.name); const o = normalizeText(trait?.originalName);
        return (n && after.includes(n)) || (o && after.includes(o));
      });
      const alternatives = traits.filter(trait => {
        const n = normalizeText(trait?.name); const o = normalizeText(trait?.originalName);
        return (n && before.includes(n)) || (o && before.includes(o));
      });
      if (common.length && alternatives.length) return alternatives.map(trait => [trait, ...common]);
    }
    if (/\bou\b/.test(text)) return traits.map(trait => [trait]);
    return [traits];
  }

  function parseBloodlineBullets(race) {
    const bloodline = array(race?.mixedBloodTraits).find(trait => trait?.id === 'bloodline');
    const text = traitText(bloodline);
    const results = [];
    const regex = /•\s*([^•;\n]+?)\s*\(([^)]+)\)/g;
    let match;
    while ((match = regex.exec(text))) {
      const traitLabel = match[1].trim().replace(/[.;,]+$/, '');
      const subraceLabel = match[2].trim();
      const subrace = array(race?.subraces).find(item => normalizedNameMatches(item?.name, subraceLabel) || normalizedNameMatches(item?.originalName, subraceLabel));
      if (!subrace) continue;
      const trait = findTraitByLabel(subrace, traitLabel);
      if (!trait) continue;
      results.push({ subrace, traits: [trait], label: traitLabel });
    }
    return results;
  }

  function bloodlineOptions(race, options = {}) {
    if (!race) return [];
    const excludeFlag = options.excludeSubraceFlag || null;
    const output = [];
    const seen = new Set();

    function add(subrace, traits, label, origin = 'metadata', extra = {}) {
      if (!subrace || !array(traits).length) return;
      if (excludeFlag && subrace?.[excludeFlag]) return;
      const ids = array(traits).map(trait => trait.id).filter(Boolean);
      if (!ids.length) return;
      const key = `${race.id}:bloodline:${subrace.id}:${ids.join('+')}`;
      if (seen.has(key)) return;
      seen.add(key);
      output.push({
        key,
        raceId: race.id,
        subraceId: subrace.id,
        subraceName: subrace.name,
        label: label || array(traits).map(trait => trait.name).join(' + '),
        traits: array(traits).map(clone),
        source: origin,
        ...clone(extra)
      });
    }

    // Hanyou original: o traço de linhagem da subraça é o Bloodline.
    for (const subrace of array(race.subraces)) {
      const heritage = heritageOptions(race, subrace);
      if (heritage.lineage.length && !subrace.bloodlineTrait) {
        for (const entry of heritage.lineage) add(subrace, [entry.trait], entry.trait.name, 'heritage-lineage');
      }
      for (const group of explicitBloodlineGroups(subrace)) add(subrace, group, group.map(t => t.name).join(' + '), 'metadata');
      if (race.id === 'firbolg' && subrace.landBlessingSpells) {
        const trait = array(subrace.traits).find(item => item?.id === 'lands-blessing') || {
          id: `lands-blessing-${subrace.id}`,
          name: `Bênção da Terra — ${subrace.name}`,
          originalName: 'Land’s Blessing',
          description: `Bênção da Terra desta subraça. Magias: ${Object.values(subrace.landBlessingSpells).filter(Boolean).join(', ')}.`,
          page: subrace.page
        };
        add(subrace, [trait], `Bênção da Terra — ${subrace.name}`, 'land-blessing', { requiresMixedTraitKey: 'firbolg:mixed:firbolg-magic' });
      }
    }

    for (const item of parseBloodlineBullets(race)) add(item.subrace, item.traits, item.label, 'description');
    return output.sort((a, b) => `${a.subraceName}|${a.label}`.localeCompare(`${b.subraceName}|${b.label}`, 'pt-BR'));
  }

  function abilityById(id) {
    return ABILITIES.find(item => item.id === id) || null;
  }

  function abilityIdsInText(value) {
    const text = normalizeText(value);
    return ABILITIES.filter(ability => ability.aliases.some(alias => text.includes(normalizeText(alias)))).map(ability => ability.id);
  }

  function subraceAbilityChoice(subrace) {
    const raw = String(subrace?.ability || '').trim();
    const text = normalizeText(raw);
    if (!raw || /^(nenhum|none|—|-)$/.test(text)) return { kind: 'none', required: false, options: [], raw };
    if (/fonte diz apenas/.test(text) || /atributo nao especificado/.test(text)) {
      return { kind: 'source-ambiguous', required: false, options: [], raw, blocked: true };
    }
    let options = abilityIdsInText(raw);
    if (/qualquer atributo|um atributo a escolha|atributo a sua escolha/.test(text)) {
      options = ABILITIES.map(item => item.id);
      if (/exceto sabedoria/.test(text)) options = options.filter(id => id !== 'wis');
      return { kind: 'choice', required: true, options, raw };
    }
    if (/\bou\b/.test(text) && options.length >= 2) return { kind: 'choice', required: true, options: uniqueStrings(options), raw };
    return { kind: 'fixed', required: false, options: uniqueStrings(options), raw };
  }

  function hanyouAbilityRequirement(race) {
    if (race?.id !== 'hanyou') return null;
    return { kind: 'hanyou-source', required: true, plusCount: 2, minusCount: 1, options: ABILITIES.map(item => item.id) };
  }

  function sizeIdsInText(value) {
    const text = normalizeText(value);
    return SIZE_OPTIONS.filter(size => size.aliases.some(alias => new RegExp(`(^|[^a-z])${alias}([^a-z]|$)`).test(text))).map(size => size.id);
  }

  function baseSizeRequirement(race, state = {}) {
    if (!race) return { required: false, options: [], source: 'none' };

    // Persona Anterior de Vanquis determina o tamanho operacional.
    if (race.id === 'vanquis') {
      const persona = findRace(state?.specialChoices?.formerPersonaRaceId);
      if (!persona) return { required: false, options: [], source: 'former-persona-pending' };
      const personaTrait = array(persona.coreTraits).find(trait => trait?.id === 'size');
      const personaSource = personaTrait ? traitText(personaTrait) : String(persona.meta?.size || '');
      const personaOptions = uniqueStrings(sizeIdsInText(personaSource));
      if (personaOptions.length > 1) return { required: true, options: personaOptions, source: 'former-persona', choiceKey: 'former-persona:size' };
      return { required: false, options: personaOptions, source: 'former-persona', fixed: personaOptions[0] || null };
    }

    const sizeTrait = array(race.coreTraits).find(trait => trait?.id === 'size');
    const source = sizeTrait ? traitText(sizeTrait) : String(race.meta?.size || '');
    const options = uniqueStrings(sizeIdsInText(source.split(/[;(]/)[0]));
    // Se o traço mecânico existe, ele é autoridade (ex.: Silvistar).
    const allOptions = sizeTrait ? uniqueStrings(sizeIdsInText(source)) : options;
    const resolved = allOptions.length ? allOptions : options;
    return {
      required: resolved.length > 1,
      options: resolved,
      source: sizeTrait ? 'core-trait' : 'meta',
      choiceKey: 'race:size',
      fixed: resolved.length === 1 ? resolved[0] : null
    };
  }

  function resolveSelectedLegacy(race, state, errors) {
    const pool = legacyPool(race, state);
    const byKey = new Map(pool.map(entry => [entry.key, entry]));
    const selected = [];
    for (const key of state.legacy) {
      const entry = byKey.get(key);
      if (!entry) {
        errors.push(issue('legacy.invalid', `Traço de Legado não pertence ao pool atual: ${key}.`, 'legacy'));
        continue;
      }
      selected.push(clone(entry));
    }
    return { pool, selected };
  }

  function selectedEntry(selected, key) {
    return array(selected).find(entry => entry?.key === key) || null;
  }

  function resolveBloodlineSelection(secondaryRace, state, selectedLegacy, errors, automatic = false) {
    if (!secondaryRace) return { selected: null, features: [], required: false, automatic };
    const key = `${secondaryRace.id}:mixed:bloodline`;
    const legacyHasBloodline = Boolean(selectedEntry(selectedLegacy, key));
    const required = automatic || legacyHasBloodline;
    if (!required) return { selected: null, features: [], required: false, automatic };

    const coupling = eligibilityRules()?.coupledSubraceChoices?.[secondaryRace.id] || null;
    const optionList = bloodlineOptions(secondaryRace, { excludeSubraceFlag: coupling?.excludeBloodlineSubraceFlag });
    const selectedKey = String(state.bloodlineChoices?.[key] || '');
    const option = optionList.find(item => item.key === selectedKey) || null;
    if (!option) {
      errors.push(issue('bloodline.choice-required', `Escolha qual traço de Linhagem de ${secondaryRace.name} será herdado.`, `bloodlineChoices.${key}`));
      return { selected: null, features: [], required: true, automatic, options: optionList };
    }
    if (option.requiresMixedTraitKey && !selectedEntry(selectedLegacy, option.requiresMixedTraitKey)) {
      errors.push(issue('bloodline.requirement-missing', `${option.label} exige que ${secondaryRace.name} conceda também o Traço de Sangue Misto requerido pela fonte.`, `bloodlineChoices.${key}`, 'error', { requiredKey: option.requiresMixedTraitKey }));
    }
    return { selected: clone(option), features: option.traits.map(clone), required: true, automatic, options: optionList };
  }

  function resolveSubraceDrivenChoice(secondaryRace, state, selectedLegacy, errors) {
    const output = [];
    if (!secondaryRace) return output;
    const configs = eligibilityRules()?.subraceDrivenMixedTraits || {};
    for (const [traitKey, config] of Object.entries(configs)) {
      if (!traitKey.startsWith(`${secondaryRace.id}:mixed:`)) continue;
      if (!selectedEntry(selectedLegacy, traitKey)) continue;
      const selectedSubraceId = String(state.bloodlineChoices?.[traitKey] || '');
      const eligible = array(secondaryRace.subraces).filter(subrace => hasStructuredContent(subrace?.[config.subraceField]));
      const selectedSubrace = eligible.find(subrace => subrace.id === selectedSubraceId) || null;
      if (!selectedSubrace) {
        errors.push(issue('mixed.subrace-driven-choice-required', `${config.choiceLabel || 'Escolha uma subraça'} para resolver ${selectedEntry(selectedLegacy, traitKey)?.trait?.name || traitKey}.`, `bloodlineChoices.${traitKey}`));
      }
      output.push({ traitKey, config: clone(config), options: eligible.map(subrace => ({ id: subrace.id, name: subrace.name })), selectedSubrace: clone(selectedSubrace) });
    }
    return output;
  }

  function validateCoupledSubraceChoices(secondaryRace, state, selectedLegacy, bloodline, driven, errors) {
    const coupling = eligibilityRules()?.coupledSubraceChoices?.[secondaryRace?.id];
    if (!coupling) return;
    const hasBloodline = isAutomaticSecondaryBloodline(secondaryRace.id) || Boolean(selectedEntry(selectedLegacy, coupling.bloodlineTraitKey));
    const hasDependent = Boolean(selectedEntry(selectedLegacy, coupling.dependentTraitKey));
    if (!hasBloodline || !hasDependent) return;
    const dependent = driven.find(item => item.traitKey === coupling.dependentTraitKey);
    const bloodlineSubraceId = bloodline?.selected?.subraceId || null;
    const dependentSubraceId = dependent?.selectedSubrace?.id || null;
    if (bloodlineSubraceId && dependentSubraceId && bloodlineSubraceId !== dependentSubraceId) {
      errors.push(issue('mixed.coupled-subrace-mismatch', `${secondaryRace.name}: Linhagem e a característica dependente devem usar a mesma subraça.`, 'bloodlineChoices'));
    }
  }

  function resolveSecondaryHanyou(secondaryRace, state, bloodline, errors) {
    if (secondaryRace?.id !== 'hanyou') return null;
    const config = state.specialChoices?.hanyouSecondary && typeof state.specialChoices.hanyouSecondary === 'object'
      ? normalizeSecondaryHeritage(state.specialChoices.hanyouSecondary)
      : normalizeSecondaryHeritage({});
    const selectedSubrace = findSubrace(secondaryRace, config.subraceId);
    if (!selectedSubrace) {
      errors.push(issue('hanyou.secondary.subrace-required', 'Como Hanyou é a raça secundária, escolha a subraça Hanyou usada pela Herança.', 'specialChoices.hanyouSecondary.subraceId'));
      return { config, subrace: null, options: [], selected: { positive: [], detrimental: [] }, lineage: [] };
    }

    const options = heritageOptions(secondaryRace, selectedSubrace);
    const limits = heritageLimits(secondaryRace, selectedSubrace, true);
    const selected = { positive: [], detrimental: [] };
    for (const role of ['positive', 'detrimental']) {
      const byKey = new Map(options[role].map(entry => [entry.key, entry]));
      for (const key of config[role]) if (byKey.has(key)) selected[role].push(clone(byKey.get(key)));
      if (selected[role].length !== limits[role]) {
        errors.push(issue(
          `hanyou.secondary.${role}.count`,
          `Hanyou secundário exige ${limits[role]} Traço(s) de Herança ${role === 'positive' ? 'positivo(s)' : 'prejudicial(is)'}.`,
          `specialChoices.hanyouSecondary.${role}`
        ));
      }
    }

    // A Linhagem automática deve pertencer à mesma subraça escolhida para Herança.
    if (bloodline?.selected && bloodline.selected.subraceId !== selectedSubrace.id) {
      errors.push(issue('hanyou.secondary.bloodline-mismatch', 'A Linhagem automática de Hanyou deve usar a mesma subraça escolhida para seus Traços de Herança.', 'bloodlineChoices.hanyou:mixed:bloodline'));
    }

    return {
      config,
      subrace: clone(selectedSubrace),
      options: clone(options),
      limits,
      selected,
      lineage: bloodline?.features || []
    };
  }

  function resolveVersatileBlood(race, state, selectedLegacy, errors) {
    const key = 'human:mixed:versatile-blood';
    const selected = selectedEntry(selectedLegacy, key);
    if (!selected) return { active: false, entries: [], pool: [] };
    const policy = eligibilityRules()?.slotTransforms?.[key];
    const required = Number(policy?.replacementCount || 2);
    const pool = extraLegacyPool(race, state, 'versatile');
    const byKey = new Map(pool.map(entry => [entry.key, entry]));
    const choices = uniqueStrings(state.extraLegacy);
    const entries = choices.map(item => byKey.get(item)).filter(Boolean);
    if (choices.length !== entries.length) errors.push(issue('versatile-blood.invalid', 'Sangue Versátil contém uma escolha que não pertence às listas normais das duas raças.', 'extraLegacy'));
    if (entries.length !== required) errors.push(issue('versatile-blood.count', `Sangue Versátil substitui seu único espaço por ${required} Traços de Legado normais; escolha exatamente ${required}.`, 'extraLegacy'));
    if (new Set(entries.map(entry => entry.key)).size !== entries.length) errors.push(issue('versatile-blood.duplicate', 'Sangue Versátil não pode conceder o mesmo Traço de Legado duas vezes.', 'extraLegacy'));
    return { active: true, entries: entries.map(clone), pool: clone(pool), required };
  }

  function resolveShambledBody(race, subrace, state, errors) {
    if (!(race?.id === 'vanquis' && subrace?.id === 'amalgamation')) return { active: false, entries: [], pool: [] };
    const policy = eligibilityRules()?.specialSubraces?.['vanquis:amalgamation'];
    const required = Number(policy?.choiceCount || 2);
    const pool = extraLegacyPool(race, state, 'shambled-body');
    const byKey = new Map(pool.map(entry => [entry.key, entry]));
    const choices = uniqueStrings(state.specialChoices?.shambledBodyLegacy);
    const entries = choices.map(key => byKey.get(key)).filter(Boolean);
    if (choices.length !== entries.length) errors.push(issue('shambled-body.invalid', 'Corpo Remendado contém um Traço de Legado de origem não permitida.', 'specialChoices.shambledBodyLegacy'));
    if (entries.length !== required) errors.push(issue('shambled-body.count', `Corpo Remendado exige ${required} Traços de Legado adicionais.`, 'specialChoices.shambledBodyLegacy'));
    if (policy?.distinctRaceOrigins && new Set(entries.map(entry => entry.originRaceId)).size !== entries.length) {
      errors.push(issue('shambled-body.distinct-races', 'Os dois Traços de Corpo Remendado devem vir de raças diferentes.', 'specialChoices.shambledBodyLegacy'));
    }
    return { active: true, entries: entries.map(clone), pool: clone(pool), required };
  }

  function resolveAbilitySelection(race, subrace, state, errors) {
    const output = { mode: state.abilityMode || 'source', subrace: null, hanyou: null };
    if (output.mode !== 'source') {
      return { ...output, deferredAlternativeMode: true };
    }

    const hanyouReq = hanyouAbilityRequirement(race);
    if (hanyouReq) {
      const raw = state.abilityChoices?.hanyou && typeof state.abilityChoices.hanyou === 'object' ? state.abilityChoices.hanyou : {};
      const plus = uniqueStrings(raw.plus).filter(id => abilityById(id));
      const minus = abilityById(raw.minus) ? raw.minus : null;
      if (plus.length !== 2 || !minus || new Set([...plus, minus]).size !== 3) {
        errors.push(issue('ability.hanyou-source-required', 'A regra tradicional do Hanyou exige +2 em dois atributos diferentes e −2 em um terceiro atributo diferente.', 'abilityChoices.hanyou'));
      }
      output.hanyou = { requirement: hanyouReq, plus, minus };
    }

    const requirement = subraceAbilityChoice(subrace);
    output.subrace = { requirement, selected: null };
    if (requirement.blocked) {
      errors.push(issue('ability.source-ambiguous', `A fonte não identifica qual atributo recebe o bônus da subraça ${subrace?.name || ''}; o Grimório não irá inventar essa escolha.`, 'abilityChoices.subrace'));
    } else if (requirement.required) {
      const selected = String(state.abilityChoices?.subrace || '');
      if (!requirement.options.includes(selected)) {
        errors.push(issue('ability.subrace-required', `Escolha o atributo que recebe o bônus de ${subrace.name}.`, 'abilityChoices.subrace'));
      } else output.subrace.selected = selected;
    }
    return output;
  }

  function resolveSizeSelection(race, state, errors) {
    const requirement = baseSizeRequirement(race, state);
    const key = requirement.choiceKey || 'race:size';
    if (requirement.source === 'former-persona-pending') return { requirement, selected: null };
    if (!requirement.required) return { requirement, selected: requirement.fixed || null };
    const selected = String(state.traitChoices?.[key] || '');
    if (!requirement.options.includes(selected)) {
      errors.push(issue('size.choice-required', 'Escolha o tamanho-base do personagem.', `traitChoices.${key}`));
      return { requirement, selected: null };
    }
    return { requirement, selected };
  }

  function resolveInitialMutations(race, subrace, state, errors) {
    if (!(race?.id === 'orc' && subrace?.id === 'mutaliate-orc' && array(subrace.mutationTable).length)) {
      return { active: false, rolls: [], entries: [], options: [] };
    }
    const raw = array(state.specialChoices?.mutationRolls).slice(0, 2);
    const rolls = raw.map(value => Number(value)).filter(value => Number.isInteger(value) && value >= 1 && value <= 12);
    if (rolls.length !== 2) {
      errors.push(issue('mutaliate.initial-mutations-required', 'Orc Mutaliate deve registrar os dois resultados de 1d12 obtidos na criação do personagem.', 'specialChoices.mutationRolls'));
    }
    const entries = [];
    for (let index = 0; index < rolls.length; index += 1) {
      const table = array(subrace.mutationTable).find(item => Number(item?.d12) === rolls[index]);
      const trait = table ? array(subrace.traits).find(item => item?.id === table.traitId) : null;
      if (trait) entries.push({ roll: rolls[index], trait: { ...clone(trait), selectionKey: `mutation:${index}:${rolls[index]}` } });
    }
    return { active: true, rolls, entries, options: clone(subrace.mutationTable) };
  }

  function resolveFormerPersona(race, state, errors) {
    if (race?.id !== 'vanquis') return null;
    const id = String(state.specialChoices?.formerPersonaRaceId || '');
    const persona = findRace(id);
    if (!persona || persona.id === 'vanquis') {
      errors.push(issue('vanquis.former-persona-required', 'Vanquis dominante precisa escolher uma raça diferente para sua Persona Anterior.', 'specialChoices.formerPersonaRaceId'));
      return null;
    }
    return clone(persona);
  }

  function creatureTypesFromText(value) {
    return String(value || '').split(/[,;/]/).map(item => item.trim()).filter(Boolean);
  }

  function resolveCreatureTypes(race, secondaryRace, selectedLegacy, automaticSecondary) {
    const types = new Set(creatureTypesFromText(race?.meta?.creatureTypes));
    if (secondaryRace) {
      for (const type of array(secondaryPolicy(secondaryRace.id)?.creatureTypes)) types.add(type);
      for (const [traitKey, grants] of Object.entries(eligibilityRules()?.conditionalSecondaryTypeGrants || {})) {
        if (selectedEntry(selectedLegacy, traitKey)) for (const type of array(grants)) types.add(type);
      }
    }
    for (const feature of array(automaticSecondary)) {
      if (feature?.creatureTypes) for (const type of array(feature.creatureTypes)) types.add(type);
    }
    return Array.from(types);
  }

  function pendingFoundryChoices(features) {
    const output = [];
    const seen = new Set();
    const all = array(features);
    for (const trait of all) {
      const text = normalizeText(`${trait?.name || ''} ${traitText(trait)}`);
      if (!text) continue;
      const actorDependent = /profici|pericia|salvaguarda|idioma|ferrament|arma|truque|magia|habilidade de conjuracao/.test(text);
      const choiceLanguage = /escolha|a sua escolha|de sua escolha|que voce escolher/.test(text);
      if (!actorDependent || !choiceLanguage) continue;
      const key = trait?.selectionKey || trait?.id || slug(trait?.name);
      if (seen.has(key)) continue;
      seen.add(key);
      output.push({
        key,
        traitId: trait?.id || null,
        name: trait?.name || trait?.originalName || key,
        reason: 'A escolha depende do contexto do Actor ou é melhor resolvida pelo Advancement do DnD5e.'
      });
    }
    return output;
  }

  function resolve(raceOrId, rawState = {}) {
    const race = typeof raceOrId === 'string' ? findRace(raceOrId) : raceOrId;
    const errors = [];
    const warnings = [];
    const pending = [];

    if (!race) {
      return {
        schema: RESOLUTION_SCHEMA, schemaVersion: RESOLUTION_SCHEMA_VERSION, phase: PHASE,
        status: 'blocked', modeledReady: false, canExport: false,
        race: null, subrace: null, secondaryRace: null, state: defaultBuilderState(),
        limits: { legacy: { base: 2, bonus: 0, total: 2, selected: 0, remaining: 2 }, heritage: heritageLimits(null, null) },
        selections: { legacy: [], heritage: { positive: [], detrimental: [], lineage: [] }, bloodline: null, extraLegacy: [], secondaryHeritage: null },
        features: { core: [], subrace: [], legacy: [], mixed: [], heritage: [], bloodline: [], extraLegacy: [], automaticSecondary: [] },
        facts: { creatureTypes: [], size: null, ability: null },
        errors: [issue('race.missing', 'Raça dominante não encontrada.', 'raceId')], warnings, pending,
        pendingFoundryChoices: [],
        capabilities: { bundleContract: true, eligibilityEngine: 'rb3', canExport: false, exportEnabled: false }
      };
    }

    const state = normalizeBuilderState(race, rawState, { filterLegacy: false });
    const subrace = findSubrace(race, state.subraceId);
    const secondaryRace = state.secondaryRaceId ? findRace(state.secondaryRaceId) : null;

    if (array(race.subraces).length && !subrace) errors.push(issue('subrace.required', `Escolha uma subraça para ${race.name}.`, 'subraceId'));
    if (state.mixed && !secondaryRace) errors.push(issue('mixed.secondary-required', 'Personagens de sangue misto precisam de uma raça secundária válida.', 'secondaryRaceId'));

    const { pool: currentLegacyPool, selected: selectedLegacy } = resolveSelectedLegacy(race, state, errors);
    const slots = legacySlots(race);
    const secondaryRule = secondaryRace ? secondaryPolicy(secondaryRace.id) : {};
    const reservedSecondarySlots = state.mixed && secondaryRace ? Number(secondaryRule?.heritageLegacySlotsUsed || 0) : 0;
    const effectiveSelectedSlots = selectedLegacy.length + reservedSecondarySlots;
    const primaryNormalSelected = selectedLegacy.filter(entry => entry.kind === 'legacy' && entry.originRaceId === race.id).length;
    const nonBonusSelected = selectedLegacy.length - primaryNormalSelected + reservedSecondarySlots;

    if (effectiveSelectedSlots > slots.total) errors.push(issue('legacy.too-many', `Foram usados ${effectiveSelectedSlots} espaços de Legado para ${slots.total} espaço(s).`, 'legacy'));
    if (nonBonusSelected > slots.base) errors.push(issue('legacy.dominant-bonus-restricted', `O espaço adicional de Traço de Legado de ${race.name} só pode ser preenchido por uma opção da lista normal da raça dominante.`, 'legacy'));
    if (effectiveSelectedSlots < slots.total) errors.push(issue('legacy.missing', `Selecione ${slots.total - effectiveSelectedSlots} Traço(s) de Legado adicional(is).`, 'legacy'));

    if (secondaryRace) {
      for (const id of array(secondaryRule?.requiredMixedTraits)) {
        const key = `${secondaryRace.id}:mixed:${id}`;
        if (!selectedEntry(selectedLegacy, key)) errors.push(issue('mixed.required-trait', `${secondaryRace.name} como raça secundária exige o Traço de Sangue Misto ${raceLegacyEntries(secondaryRace, 'mixed').find(item => item.key === key)?.trait?.name || id}.`, 'legacy', 'error', { requiredKey: key }));
      }
    }

    // Herança dominante (Hanyou e overrides como Emberash).
    const heritage = heritageOptions(race, subrace);
    const heritageLimit = heritageLimits(race, subrace, false);
    const selectedHeritage = { positive: [], detrimental: [], lineage: [] };
    for (const role of ['positive', 'detrimental', 'lineage']) {
      const byKey = new Map(heritage[role].map(entry => [entry.key, entry]));
      for (const key of state.heritage[role]) {
        const entry = byKey.get(key);
        if (!entry) errors.push(issue(`heritage.${role}.invalid`, `Traço de Herança inválido para a subraça atual: ${key}.`, `heritage.${role}`));
        else selectedHeritage[role].push(clone(entry));
      }
    }
    if (heritage.positive.length || heritage.detrimental.length) {
      for (const role of ['positive', 'detrimental']) {
        const expected = heritageLimit[role];
        const actual = selectedHeritage[role].length;
        if (actual < expected) errors.push(issue(`heritage.${role}.missing`, `Escolha ${expected - actual} Traço(s) de Herança ${role === 'positive' ? 'positivo(s)' : 'prejudicial(is)'} adicional(is).`, `heritage.${role}`));
        else if (actual > expected) errors.push(issue(`heritage.${role}.too-many`, `A subraça permite ${expected} Traço(s) de Herança ${role === 'positive' ? 'positivo(s)' : 'prejudicial(is)'}, mas ${actual} foram escolhidos.`, `heritage.${role}`));
      }
    }

    if (subrace?.editorialNote) warnings.push(issue('subrace.editorial-note', subrace.editorialNote, 'subraceId', 'warning'));
    if (race?.editorialNote) warnings.push(issue('race.editorial-note', race.editorialNote, 'raceId', 'warning'));
    if (race.id === 'silvistar') warnings.push(issue('silvistar.size-discrepancy', 'Silvistar possui divergência editorial de tamanho; RB-3 usa o traço mecânico Tamanho (Médio ou Grande) como autoridade operacional.', 'traitChoices.race:size', 'warning'));

    // Escolhas especiais dominantes.
    const formerPersona = resolveFormerPersona(race, state, errors);
    const ability = resolveAbilitySelection(race, subrace, state, errors);
    const size = resolveSizeSelection(race, state, errors);

    // Linhagem/Bloodline e dependências da raça secundária.
    const bloodline = secondaryRace
      ? resolveBloodlineSelection(secondaryRace, state, selectedLegacy, errors, isAutomaticSecondaryBloodline(secondaryRace.id))
      : { selected: null, features: [], required: false, automatic: false, options: [] };
    const driven = secondaryRace ? resolveSubraceDrivenChoice(secondaryRace, state, selectedLegacy, errors) : [];
    if (secondaryRace) validateCoupledSubraceChoices(secondaryRace, state, selectedLegacy, bloodline, driven, errors);
    const secondaryHanyou = secondaryRace ? resolveSecondaryHanyou(secondaryRace, state, bloodline, errors) : null;

    // Transformações/adicionais de Legado.
    const versatile = resolveVersatileBlood(race, state, selectedLegacy, errors);
    const shambled = resolveShambledBody(race, subrace, state, errors);
    const mutations = resolveInitialMutations(race, subrace, state, errors);

    // Automáticos da raça secundária.
    const automaticSecondary = [];
    if (secondaryRace) {
      for (const id of array(secondaryRule?.automaticCoreTraits)) {
        const trait = array(secondaryRace.coreTraits).find(item => item?.id === id);
        if (trait) automaticSecondary.push({ ...clone(trait), originRaceId: secondaryRace.id, automaticSecondary: true });
      }
    }

    // Final features: wrappers de Bloodline/Sangue Versátil não são efeitos finais.
    const subraceTraits = fixedSubraceTraits(race, subrace);
    const selectedLegacyTraits = selectedLegacy
      .filter(entry => entry.kind !== 'mixed')
      .map(entry => ({ ...clone(entry.trait), selectionKey: entry.key, originRaceId: entry.originRaceId, originKind: entry.kind }));
    const selectedMixedTraits = selectedLegacy
      .filter(entry => entry.kind === 'mixed' && !['bloodline', 'versatile-blood'].includes(entry.trait?.id))
      .map(entry => ({ ...clone(entry.trait), selectionKey: entry.key, originRaceId: entry.originRaceId, originKind: 'mixed' }));
    const heritageTraits = [...selectedHeritage.positive, ...selectedHeritage.detrimental, ...selectedHeritage.lineage]
      .map(entry => ({ ...clone(entry.trait), selectionKey: entry.key, originRaceId: race.id }));
    const secondaryHeritageTraits = secondaryHanyou
      ? [...secondaryHanyou.selected.positive, ...secondaryHanyou.selected.detrimental].map(entry => ({ ...clone(entry.trait), selectionKey: entry.key, originRaceId: secondaryRace.id, secondaryHeritage: true }))
      : [];
    const bloodlineFeatures = array(bloodline.features).map(trait => ({ ...clone(trait), originRaceId: secondaryRace?.id || null, bloodline: true, bloodlineSubraceId: bloodline.selected?.subraceId || null }));
    const mutationFeatures = array(mutations.entries).map(entry => ({ ...clone(entry.trait), mutationRoll: entry.roll, originRaceId: race.id, mutation: true }));
    const extraLegacyFeatures = [
      ...array(versatile.entries).map(entry => ({ ...clone(entry.trait), selectionKey: entry.key, originRaceId: entry.originRaceId, extraLegacyKind: 'versatile-blood' })),
      ...array(shambled.entries).map(entry => ({ ...clone(entry.trait), selectionKey: entry.key, originRaceId: entry.originRaceId, extraLegacyKind: 'shambled-body' }))
    ];

    // Hanyou secundário consome um slot, mas sua Linhagem é automática e não é
    // duplicada como wrapper Bloodline; as features concretas estão acima.

    const allFinalFeatures = [
      ...array(race.coreTraits), ...subraceTraits, ...selectedLegacyTraits, ...selectedMixedTraits,
      ...heritageTraits, ...secondaryHeritageTraits, ...bloodlineFeatures, ...extraLegacyFeatures, ...mutationFeatures,
      ...automaticSecondary
    ];
    const actorChoices = pendingFoundryChoices(allFinalFeatures);

    // Source ambiguity is intentionally a hard block. Alternative ASI modes are
    // preserved but deferred to a later UI profile and do not affect source mode.
    if (state.abilityMode !== 'source') {
      pending.push(issue('ability.alternative-mode-deferred', `O modo de atributos "${state.abilityMode}" foi preservado, mas a materialização exata será definida junto do Advancement Foundry.`, 'abilityMode', 'pending'));
    }

    const structuralCodes = new Set([
      'legacy.invalid','legacy.too-many','legacy.dominant-bonus-restricted',
      'mixed.coupled-subrace-mismatch','versatile-blood.invalid','versatile-blood.duplicate',
      'shambled-body.invalid','shambled-body.distinct-races','ability.source-ambiguous'
    ]);
    const hasStructuralError = errors.some(entry => structuralCodes.has(entry.code) || entry.code.endsWith('.invalid'));
    const canExport = errors.length === 0;
    const status = hasStructuralError ? 'blocked' : errors.length ? 'incomplete' : pending.length ? 'review' : 'ready';

    const resolvedCreatureTypes = resolveCreatureTypes(race, secondaryRace, selectedLegacy, automaticSecondary);

    return {
      schema: RESOLUTION_SCHEMA,
      schemaVersion: RESOLUTION_SCHEMA_VERSION,
      phase: PHASE,
      status,
      modeledReady: errors.length === 0,
      canExport,
      race: clone(race),
      subrace: clone(subrace),
      secondaryRace: clone(secondaryRace),
      state: normalizeBuilderState(race, state),
      limits: {
        legacy: {
          ...slots,
          selected: selectedLegacy.length,
          reservedSecondarySlots,
          effectiveSelectedSlots,
          remaining: Math.max(0, slots.total - effectiveSelectedSlots),
          primaryNormalSelected,
          nonBonusSelected
        },
        heritage: {
          ...heritageLimit,
          selected: {
            positive: selectedHeritage.positive.length,
            detrimental: selectedHeritage.detrimental.length,
            lineage: selectedHeritage.lineage.length
          }
        },
        secondaryHeritage: secondaryHanyou ? {
          positive: secondaryHanyou.limits?.positive || 0,
          detrimental: secondaryHanyou.limits?.detrimental || 0,
          selected: {
            positive: secondaryHanyou.selected.positive.length,
            detrimental: secondaryHanyou.selected.detrimental.length
          }
        } : null
      },
      pools: {
        legacy: clone(currentLegacyPool),
        heritage: clone(heritage),
        bloodline: clone(bloodline.options || []),
        versatileBlood: clone(versatile.pool || []),
        shambledBody: clone(shambled.pool || [])
      },
      selections: {
        legacy: clone(selectedLegacy),
        heritage: clone(selectedHeritage),
        bloodline: clone(bloodline.selected),
        secondaryHeritage: clone(secondaryHanyou),
        extraLegacy: clone(versatile.entries),
        shambledBodyLegacy: clone(shambled.entries),
        subraceDriven: clone(driven),
        ability: clone(ability),
        size: clone(size),
        formerPersona: clone(formerPersona),
        mutations: clone(mutations)
      },
      features: {
        core: array(race.coreTraits).map(trait => clone(trait)),
        subrace: subraceTraits,
        legacy: selectedLegacyTraits,
        mixed: selectedMixedTraits,
        heritage: heritageTraits,
        secondaryHeritage: secondaryHeritageTraits,
        bloodline: bloodlineFeatures,
        extraLegacy: extraLegacyFeatures,
        mutations: mutationFeatures,
        automaticSecondary: clone(automaticSecondary)
      },
      facts: {
        creatureTypes: resolvedCreatureTypes,
        size: clone(size),
        ability: clone(ability),
        formerPersona: formerPersona ? { id: formerPersona.id, name: formerPersona.name } : null,
        subraceDriven: clone(driven.map(item => ({ traitKey: item.traitKey, subraceId: item.selectedSubrace?.id || null, spells: item.selectedSubrace ? clone(item.selectedSubrace?.[item.config?.subraceField] || {}) : {} })))
      },
      errors,
      warnings,
      pending,
      pendingFoundryChoices: actorChoices,
      capabilities: {
        bundleContract: true,
        eligibilityEngine: 'rb3',
        canExport,
        exportEnabled: canExport
      }
    };
  }

  function canSelectLegacy(raceOrId, rawState, key) {
    const race = typeof raceOrId === 'string' ? findRace(raceOrId) : raceOrId;
    if (!race) return false;
    const state = normalizeBuilderState(race, rawState);
    const pool = legacyPool(race, state);
    if (!pool.some(entry => entry.key === key)) return false;
    if (state.legacy.includes(key)) return true;
    const secondary = state.secondaryRaceId ? findRace(state.secondaryRaceId) : null;
    const reserved = secondary ? Number(secondaryPolicy(secondary.id)?.heritageLegacySlotsUsed || 0) : 0;
    const slots = legacySlots(race);
    const candidate = [...state.legacy, key];
    if (candidate.length + reserved > slots.total) return false;
    const primaryNormal = candidate.filter(item => legacyIsBonusEligible(race, item)).length;
    const nonBonus = candidate.length - primaryNormal + reserved;
    return nonBonus <= slots.base;
  }

  function canSelectHeritage(raceOrId, rawState, role, key) {
    if (!['positive', 'detrimental', 'lineage'].includes(role)) return false;
    const race = typeof raceOrId === 'string' ? findRace(raceOrId) : raceOrId;
    if (!race) return false;
    const state = normalizeBuilderState(race, rawState);
    const subrace = findSubrace(race, state.subraceId);
    if (!subrace) return false;
    const options = heritageOptions(race, subrace)[role];
    if (!options.some(entry => entry.key === key)) return false;
    if (state.heritage[role].includes(key)) return true;
    const limit = heritageLimits(race, subrace)[role];
    return state.heritage[role].length < limit;
  }

  function canSelectExtraLegacy(raceOrId, rawState, mode, key) {
    const race = typeof raceOrId === 'string' ? findRace(raceOrId) : raceOrId;
    if (!race) return false;
    const state = normalizeBuilderState(race, rawState);
    const pool = extraLegacyPool(race, state, mode);
    if (!pool.some(entry => entry.key === key)) return false;
    if (mode === 'versatile') {
      if (state.extraLegacy.includes(key)) return true;
      return state.extraLegacy.length < Number(eligibilityRules()?.slotTransforms?.['human:mixed:versatile-blood']?.replacementCount || 2);
    }
    if (mode === 'shambled-body') {
      const current = uniqueStrings(state.specialChoices?.shambledBodyLegacy);
      if (current.includes(key)) return true;
      const entry = pool.find(item => item.key === key);
      const chosenOrigins = new Set(current.map(item => pool.find(poolEntry => poolEntry.key === item)?.originRaceId).filter(Boolean));
      return current.length < 2 && !chosenOrigins.has(entry?.originRaceId);
    }
    return false;
  }

  function secondaryHeritageOptions(raceId, subraceId) {
    const race = findRace(raceId);
    const subrace = findSubrace(race, subraceId);
    if (!race || !subrace) return { rule: [], positive: [], detrimental: [], lineage: [] };
    return heritageOptions(race, subrace);
  }

  const API = Object.freeze({
    builderSchema: Object.freeze({ name: BUILDER_SCHEMA, version: BUILDER_SCHEMA_VERSION }),
    resolutionSchema: Object.freeze({ name: RESOLUTION_SCHEMA, version: RESOLUTION_SCHEMA_VERSION }),
    phase: PHASE,
    optionalPoolIds: OPTIONAL_POOL_IDS,
    abilities: ABILITIES,
    sizes: SIZE_OPTIONS,
    defaultBuilderState,
    migrateV1RaceState,
    normalizeBuilderState,
    legacySlots,
    legacyIsBonusEligible,
    legacyPool,
    extraLegacyPool,
    heritageKey,
    heritageOptions,
    heritageLimits,
    secondaryHeritageOptions,
    bloodlineOptions,
    subraceAbilityChoice,
    baseSizeRequirement,
    canSelectLegacy,
    canSelectHeritage,
    canSelectExtraLegacy,
    resolve,
    findRace,
    findSubrace,
    slug,
    normalizeText
  });

  global.GRIMORIO_RACE_BUILD_RESOLVER = API;
})(window);
