'use strict';

// Fases 9–10 — Pacotes e exportação granular Foundry do Grimório.
// Agrega bundles v1 já homologados sem alterar sua estrutura interna.
(function initFoundryClassPackage(global) {
  const SCHEMA = 'grimorio-foundry-class-package';
  const SCHEMA_VERSION = 1;
  const PROFILE_ID = 'foundry13-dnd5e533-grimorio-class-package-v1';
  const IMPORTER_MIN_VERSION = '0.5.0';
  const SPECIAL_CLASS_IDENTIFIERS = Object.freeze(['dragoneer', 'frame-pilot', 'bender', 'tamer', 'blood-minister']);

  const PROFILE = Object.freeze({
    id: PROFILE_ID,
    label: 'Foundry VTT 13.351 · DnD5e 5.3.3 · Grimório Importer 0.6.0',
    foundryVersion: '13.351',
    dnd5eVersion: '5.3.3',
    consumer: 'grimorio-importer',
    minimumImporterVersion: IMPORTER_MIN_VERSION,
    format: 'grimorio-foundry-class-package-v1',
    mediaType: 'application/json',
    fileExtension: '.json',
    phase: 10,
    compatibility: {
      status: 'homologated-transport',
      note: 'O pacote contém bundles de classe/subclasse v1 homologados. O Grimório Importer 0.6.0 processa bundles individuais e pacotes em arquivo único; a compatibilidade mínima do formato permanece 0.5.0.'
    }
  });

  function array(value) { return Array.isArray(value) ? value : value == null ? [] : [value]; }
  function clone(value) { return value === undefined ? undefined : JSON.parse(JSON.stringify(value)); }
  function slug(value) {
    return String(value ?? '')
      .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
      .toLocaleLowerCase('pt-BR')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '') || 'pacote';
  }

  function bundleApi() {
    const api = global.GRIMORIO_FOUNDRY_CLASS_BUNDLE;
    if (!api) throw new Error('Exportador de bundles de classes não está carregado.');
    return api;
  }

  function allClasses() { return array(global.GRIMORIO_CLASSES); }
  function allSubclasses() { return array(global.GRIMORIO_SUBCLASSES); }

  function classById(id) { return allClasses().find(item => item.id === id) || null; }
  function subclassById(id) { return allSubclasses().find(item => item.id === id) || null; }

  function buildPackage({ id, name, scope, bundles, parentClass = null }) {
    const classes = bundles.filter(bundle => bundle.kind === 'class');
    const subclasses = bundles.filter(bundle => bundle.kind === 'subclass');
    const featureCount = bundles.reduce((sum, bundle) => sum + array(bundle.features).length, 0);
    const identifiers = bundles.map(bundle => `${bundle.kind}:${bundle.identity?.identifier}`);
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
        name: String(name || 'Pacote do Grimório'),
        scope,
        parentClass: parentClass ? clone(parentClass) : null
      },
      summary: {
        bundles: bundles.length,
        classes: classes.length,
        subclasses: subclasses.length,
        features: featureCount,
        specialClasses: classes.filter(bundle => SPECIAL_CLASS_IDENTIFIERS.includes(bundle.identity?.identifier)).length,
        specialSubclasses: subclasses.filter(bundle => SPECIAL_CLASS_IDENTIFIERS.includes(bundle.parentClass?.identifier)).length
      },
      ordering: 'classes-first',
      bundleIdentifiers: identifiers,
      bundles: clone([...classes, ...subclasses])
    };
  }

  function buildClassPackage(classId) {
    const api = bundleApi();
    const cls = classById(classId);
    if (!cls) throw new Error(`Classe não encontrada: ${classId}`);
    const classAnalysis = api.inspectClass(cls);
    if (!classAnalysis.ok) throw new Error(classAnalysis.errors.join(' '));
    const subs = allSubclasses().filter(item => item.classId === classId);
    const subBundles = subs.map(sub => {
      const analysis = api.inspectSubclass(sub);
      if (!analysis.ok) throw new Error(`${sub.name}: ${analysis.errors.join(' ')}`);
      return analysis.bundle;
    });
    return buildPackage({
      id: `classe-${classAnalysis.bundle.identity.identifier}`,
      name: `${classAnalysis.bundle.identity.name} — classe completa`,
      scope: 'class-with-subclasses',
      parentClass: {
        grimorioId: cls.id,
        identifier: classAnalysis.bundle.identity.identifier,
        name: classAnalysis.bundle.identity.name
      },
      bundles: [classAnalysis.bundle, ...subBundles]
    });
  }

  function buildCatalogPackage() {
    const api = bundleApi();
    const bundles = [];
    for (const cls of allClasses()) {
      const analysis = api.inspectClass(cls);
      if (!analysis.ok) throw new Error(`${cls.name}: ${analysis.errors.join(' ')}`);
      bundles.push(analysis.bundle);
    }
    for (const sub of allSubclasses()) {
      const analysis = api.inspectSubclass(sub);
      if (!analysis.ok) throw new Error(`${sub.name}: ${analysis.errors.join(' ')}`);
      bundles.push(analysis.bundle);
    }
    return buildPackage({
      id: 'catalogo-completo',
      name: 'Grimório — Classes e Subclasses',
      scope: 'full-catalog',
      bundles
    });
  }

  function buildSingleClassBundle(classId) {
    const api = bundleApi();
    const cls = classById(classId);
    if (!cls) throw new Error(`Classe não encontrada: ${classId}`);
    const analysis = api.inspectClass(cls);
    if (!analysis.ok) throw new Error(analysis.errors.join(' '));
    return analysis.bundle;
  }

  function buildSingleSubclassBundle(subclassId) {
    const api = bundleApi();
    const sub = subclassById(subclassId);
    if (!sub) throw new Error(`Subclasse não encontrada: ${subclassId}`);
    const analysis = api.inspectSubclass(sub);
    if (!analysis.ok) throw new Error(analysis.errors.join(' '));
    return analysis.bundle;
  }

  function validatePackage(pkg) {
    const errors = [];
    const warnings = [];
    if (!pkg || typeof pkg !== 'object' || Array.isArray(pkg)) errors.push('Pacote inválido.');
    if (pkg?.schema !== SCHEMA) errors.push(`Schema incompatível: esperado ${SCHEMA}.`);
    if (pkg?.schemaVersion !== SCHEMA_VERSION) errors.push(`Versão incompatível: esperado ${SCHEMA_VERSION}.`);
    if (pkg?.profile?.id !== PROFILE.id) errors.push(`Perfil incompatível: esperado ${PROFILE.id}.`);
    if (!pkg?.identity?.id || !pkg?.identity?.name || !pkg?.identity?.scope) errors.push('Identidade do pacote incompleta.');
    if (!Array.isArray(pkg?.bundles) || !pkg.bundles.length) errors.push('O pacote não contém bundles.');
    const api = bundleApi();
    const identities = new Set();
    const parentIdentifiers = new Set();
    for (const bundle of array(pkg?.bundles)) {
      const key = `${bundle?.kind}:${bundle?.identity?.identifier}`;
      if (identities.has(key)) errors.push(`Bundle duplicado: ${key}.`);
      identities.add(key);
      if (bundle?.kind === 'class') {
        parentIdentifiers.add(bundle.identity?.identifier);
        const cls = classById(bundle.identity?.grimorioId);
        const analysis = cls ? api.inspectClass(cls) : { ok: false, errors: ['Classe não localizada no catálogo atual.'] };
        if (!analysis.ok) errors.push(`${bundle?.identity?.name || key}: ${analysis.errors.join(' ')}`);
      } else if (bundle?.kind === 'subclass') {
        const sub = subclassById(bundle.identity?.grimorioId);
        const analysis = sub ? api.inspectSubclass(sub) : { ok: false, errors: ['Subclasse não localizada no catálogo atual.'] };
        if (!analysis.ok) errors.push(`${bundle?.identity?.name || key}: ${analysis.errors.join(' ')}`);
      } else errors.push(`Tipo de bundle não suportado: ${bundle?.kind}.`);
    }
    if (pkg?.identity?.scope === 'full-catalog') {
      if (pkg.summary?.classes !== allClasses().length) warnings.push('A quantidade de classes do pacote difere do catálogo carregado.');
      if (pkg.summary?.subclasses !== allSubclasses().length) warnings.push('A quantidade de subclasses do pacote difere do catálogo carregado.');
    }
    const calculated = {
      bundles: array(pkg?.bundles).length,
      classes: array(pkg?.bundles).filter(x => x.kind === 'class').length,
      subclasses: array(pkg?.bundles).filter(x => x.kind === 'subclass').length,
      features: array(pkg?.bundles).reduce((sum, x) => sum + array(x.features).length, 0)
    };
    for (const key of Object.keys(calculated)) {
      if (Number(pkg?.summary?.[key]) !== calculated[key]) errors.push(`Resumo inconsistente em ${key}: esperado ${calculated[key]}.`);
    }
    return { ok: errors.length === 0, errors, warnings, calculated };
  }

  function stringify(value, spacing = 2) { return JSON.stringify(value, null, spacing) + '\n'; }

  const API = Object.freeze({
    profile: PROFILE,
    schema: Object.freeze({ name: SCHEMA, version: SCHEMA_VERSION }),
    specialClassIdentifiers: SPECIAL_CLASS_IDENTIFIERS,
    buildSingleClassBundle,
    buildSingleSubclassBundle,
    buildClassPackage,
    buildCatalogPackage,
    validatePackage,
    stringify
  });

  global.GRIMORIO_FOUNDRY_CLASS_PACKAGE = API;
  if (global.GRIMORIO_EXPORT_REGISTRY?.register) {
    global.GRIMORIO_EXPORT_REGISTRY.register({ id: PROFILE.id, profile: PROFILE, classPackage: API });
  }
})(window);
