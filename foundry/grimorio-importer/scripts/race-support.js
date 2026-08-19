import { PACKS } from "./pack-storage.js";
import { FEATURE_BUCKETS_INTERNAL } from "./race-support-internal.js";

function asArray(value) { return Array.isArray(value) ? value : []; }
function text(value) { return String(value ?? "").trim(); }

export const RACE_FEATURE_BUCKETS = FEATURE_BUCKETS_INTERNAL;

export function raceBuildDisplayName(bundle) {
  const primary = text(bundle?.resolved?.primaryRace?.name) || text(bundle?.identity?.primaryRaceId) || "Raça";
  const subrace = text(bundle?.resolved?.subrace?.name);
  const secondary = text(bundle?.resolved?.secondaryRace?.name);
  let name = subrace ? `${primary} — ${subrace}` : primary;
  if (secondary) name += ` · Sangue Misto: ${secondary}`;
  return name;
}

export function resolvedRaceFeatures(bundle) {
  const rows = [];
  const seen = new Set();
  for (const bucket of RACE_FEATURE_BUCKETS) {
    for (const feature of asArray(bundle?.resolved?.features?.[bucket])) {
      const key = text(feature?.key);
      if (!key || seen.has(key)) continue;
      seen.add(key);
      rows.push({ ...feature, bucket });
    }
  }
  return rows;
}

export function plannedRaceBuildDocuments(bundle) {
  const grimorioId = text(bundle?.identity?.grimorioId);
  const name = raceBuildDisplayName(bundle);
  const rows = [{
    key: `races:race:${grimorioId}`,
    packKey: "races",
    role: "race",
    grimorioId,
    featureKey: "",
    name,
    typeLabel: "Raça"
  }];
  for (const feature of resolvedRaceFeatures(bundle)) {
    rows.push({
      key: `racialFeatures:${feature.key}`,
      packKey: "racialFeatures",
      role: "racial-feature",
      grimorioId: text(feature.key),
      featureKey: text(feature.key),
      name: text(feature.name) || text(feature.originalName) || feature.key,
      typeLabel: "Característica Racial",
      featureRole: feature.bucket
    });
  }
  return rows;
}

export function raceBuildSupport() {
  return Object.freeze({
    phase: "RB-8",
    line: "0.13.x",
    recognition: true,
    validation: true,
    compendiumPreflight: true,
    plannedDocuments: true,
    materialization: true,
    actorApplication: false,
    writeOperations: true,
    identityMatching: "race: grimorioId do build; racial-feature: key estável da característica",
    packs: Object.freeze([
      PACKS.races.collection,
      PACKS.racialFeatures.collection
    ]),
    featureBuckets: RACE_FEATURE_BUCKETS,
    nextPhase: "RB-8 homologação in-app / RC"
  });
}
