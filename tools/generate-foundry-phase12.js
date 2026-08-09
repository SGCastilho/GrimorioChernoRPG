#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');
const { pathToFileURL } = require('url');

const root = path.resolve(__dirname, '..');
const phaseRoot = path.join(root, 'tests', 'foundry-v13', 'phase12');
const catalogFile = path.join(root, 'tests', 'foundry-v13', 'phase9', 'packages', 'catalogo-completo.json');

function assert(value, message) { if (!value) throw new Error(message); }
function readJson(file) { return JSON.parse(fs.readFileSync(file, 'utf8')); }
function writeJson(file, data) { fs.mkdirSync(path.dirname(file), { recursive: true }); fs.writeFileSync(file, JSON.stringify(data, null, 2) + '\n'); }
function safeName(value) {
  return String(value ?? 'bundle').normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '') || 'bundle';
}

(async () => {
  assert(fs.existsSync(catalogFile), 'Pacote completo da Fase 9 não encontrado.');
  const full = readJson(catalogFile);
  const automation = await import(pathToFileURL(path.join(root, 'foundry', 'grimorio-importer', 'scripts', 'feature-automation.js')).href + `?v=${Date.now()}`);
  const coverage = automation.automationCoverage();

  fs.rmSync(phaseRoot, { recursive: true, force: true });
  fs.mkdirSync(path.join(phaseRoot, 'bundles'), { recursive: true });

  const totals = {
    features: 0, profiled: 0, full: 0, partial: 0, description: 0,
    candidateHigh: 0, candidateMedium: 0, textual: 0
  };
  const byKind = {
    class: { features: 0, profiled: 0, full: 0, partial: 0, description: 0, candidateHigh: 0, candidateMedium: 0, textual: 0 },
    subclass: { features: 0, profiled: 0, full: 0, partial: 0, description: 0, candidateHigh: 0, candidateMedium: 0, textual: 0 }
  };
  const byBundle = [];
  const profileMatches = [];
  for (const bundle of full.bundles ?? []) {
    const audit = automation.auditBundleAutomation(bundle);
    for (const key of Object.keys(totals)) {
      totals[key] += Number(audit[key] ?? 0);
      byKind[bundle.kind][key] += Number(audit[key] ?? 0);
    }
    byBundle.push({
      id: audit.bundleId,
      name: audit.bundleName,
      kind: audit.kind,
      features: audit.features,
      profiled: audit.profiled,
      full: audit.full,
      partial: audit.partial,
      description: audit.description,
      candidateHigh: audit.candidateHigh,
      candidateMedium: audit.candidateMedium,
      textual: audit.textual
    });
    for (const entry of audit.entries) if (entry.status === 'profiled') profileMatches.push({
      profileId: entry.profileId,
      bundleId: audit.bundleId,
      bundleName: audit.bundleName,
      kind: audit.kind,
      featureKey: entry.featureKey,
      featureName: entry.name,
      level: entry.level,
      tier: entry.tier
    });
  }

  const matchedProfileIds = new Set(profileMatches.map(x => x.profileId));
  const unmatchedProfiles = automation.FEATURE_AUTOMATION_PROFILES.filter(p => !matchedProfileIds.has(p.id)).map(p => p.id);
  const duplicateMatches = Object.entries(profileMatches.reduce((acc, match) => {
    acc[match.profileId] = (acc[match.profileId] ?? 0) + 1;
    return acc;
  }, {})).filter(([, count]) => count !== 1).map(([profileId, count]) => ({ profileId, count }));

  const audit = {
    schema: 'grimorio-foundry-automation-audit',
    schemaVersion: 1,
    generatedFor: { grimorio: '5.25.0', importer: '0.9.0', foundry: '13.351', dnd5e: '5.3.3', phase: '12' },
    automation: coverage,
    catalog: {
      bundles: full.bundles?.length ?? 0,
      classes: (full.bundles ?? []).filter(b => b.kind === 'class').length,
      subclasses: (full.bundles ?? []).filter(b => b.kind === 'subclass').length,
      ...totals
    },
    byKind,
    profileIntegrity: {
      configured: automation.FEATURE_AUTOMATION_PROFILES.length,
      matchedExactlyOnce: matchedProfileIds.size,
      unmatchedProfiles,
      duplicateMatches
    },
    profileMatches,
    byBundle: byBundle.sort((a, b) => b.candidateHigh - a.candidateHigh || b.candidateMedium - a.candidateMedium || a.name.localeCompare(b.name, 'pt-BR'))
  };

  writeJson(path.join(phaseRoot, 'automation-audit.json'), audit);

  const sampleIds = [
    'bard', 'cleric', 'sorcerer', 'sword-saint-retia', 'bender-ryoko', 'spiritual-emissary', 'spellblade',
    'arquifada', 'dominio-guerra', 'circulo-lua', 'magia-selvagem', 'mestre-batalha',
    'escola-adivinhacao', 'mao-aberta', 'juramento-vinganca', 'ryoko-barbarian-path-kaiju'
  ];
  const sampleIndex = [];
  for (const id of sampleIds) {
    const bundle = (full.bundles ?? []).find(b => b.identity?.grimorioId === id);
    assert(bundle, `Bundle de amostra ausente: ${id}`);
    const filename = `${bundle.kind}-${safeName(bundle.identity?.grimorioId)}.json`;
    writeJson(path.join(phaseRoot, 'bundles', filename), bundle);
    const bundleAudit = automation.auditBundleAutomation(bundle);
    sampleIndex.push({ id, name: bundle.identity?.name, kind: bundle.kind, file: `bundles/${filename}`, profiled: bundleAudit.profiled });
  }
  writeJson(path.join(phaseRoot, 'samples.json'), { generatedFor: audit.generatedFor, samples: sampleIndex });

  const report = `# Validação — Automação Foundry Fase 12 — Grimório 5.25\n\n` +
    `## Resultado\n\n` +
    `- Bundles auditados: **${audit.catalog.bundles}** (${audit.catalog.classes} classes + ${audit.catalog.subclasses} subclasses).\n` +
    `- Características de origem auditadas: **${audit.catalog.features}**.\n` +
    `- Perfis mecânicos explícitos: **${audit.catalog.profiled}**.\n` +
    `  - Automação completa: ${audit.catalog.full}.\n` +
    `  - Automação parcial: ${audit.catalog.partial}.\n` +
    `  - Somente descrição: ${audit.catalog.description}.\n` +
    `- Candidatos de alta prioridade para revisão manual: **${audit.catalog.candidateHigh}**.\n` +
    `- Candidatos de prioridade média: **${audit.catalog.candidateMedium}**.\n` +
    `- Predominantemente textuais/contextuais: **${audit.catalog.textual}**.\n\n` +
    `## Cobertura do framework\n\n` +
    `- Classes representadas por perfis: **${coverage.classes}/24**.\n` +
    `- Perfis de classe: **${coverage.classProfiles}**.\n` +
    `- Perfis de subclasse: **${coverage.subclassProfiles}**, em ${coverage.subclassBundles} subclasses específicas.\n` +
    `- Activities planejadas: **${coverage.activities}**.\n` +
    `- Reservas/usos: **${coverage.resources}**.\n` +
    `- Active Effects: **${coverage.effects}** (${coverage.passiveEffects} passivos e ${coverage.activityEffects} aplicados por Activity).\n\n` +
    `## Integridade dos perfis\n\n` +
    `- Perfis configurados: ${audit.profileIntegrity.configured}.\n` +
    `- Perfis encontrados exatamente uma vez no catálogo: ${audit.profileIntegrity.matchedExactlyOnce}.\n` +
    `- Perfis sem correspondência: ${audit.profileIntegrity.unmatchedProfiles.length}.\n` +
    `- Perfis com correspondência duplicada: ${audit.profileIntegrity.duplicateMatches.length}.\n\n` +
    `> Os grupos “alta prioridade” e “prioridade média” são apenas sinais de auditoria. Eles **não** significam que a característica pode ser automatizada com segurança sem revisão.\n`;
  fs.writeFileSync(path.join(root, 'VALIDACAO_FOUNDRY_AUTOMACAO_5.25.md'), report);

  assert(totals.features === 2370, `Esperadas 2370 características; encontradas ${totals.features}`);
  assert(totals.profiled === 71, `Esperados 71 perfis aplicados; encontrados ${totals.profiled}`);
  assert(unmatchedProfiles.length === 0, `Perfis sem correspondência: ${unmatchedProfiles.join(', ')}`);
  assert(duplicateMatches.length === 0, `Perfis com múltiplas correspondências: ${JSON.stringify(duplicateMatches)}`);
  console.log(`PHASE12_AUDIT_OK ${totals.profiled}/${totals.features} perfiladas; ${totals.candidateHigh} high; ${totals.candidateMedium} medium; ${totals.textual} textual`);
})().catch(error => { console.error(error.stack || error); process.exit(1); });
