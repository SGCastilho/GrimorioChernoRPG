import { validateBundle, TARGET_DND5E, TARGET_FOUNDRY } from "./bundle-validator.js";
import { MODULE_ID, PACKS, defaultPackRuntime, withWritablePacks } from "./pack-storage.js";
import { classProfile } from "./class-profiles.js";
import { dragoneerConceptProfile, SPECIAL_CLASS_RUNTIME } from "./special-class-profiles.js";
import { applyFeatureAutomation } from "./feature-automation.js";

export { MODULE_ID };
export const IMPORTER_VERSION = "0.9.1";

const ABILITIES = ["str", "dex", "con", "int", "wis", "cha"];
const ALNUM = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

function hash32(input, seed = 2166136261) {
  let h = seed >>> 0;
  for (let i = 0; i < input.length; i += 1) {
    h ^= input.charCodeAt(i);
    h = Math.imul(h, 16777619) >>> 0;
  }
  return h >>> 0;
}

export function stableId(input) {
  const text = String(input ?? "grimorio");
  let a = hash32(text, 2166136261);
  let b = hash32(text.split("").reverse().join(""), 2246822519);
  let out = "";
  for (let i = 0; i < 16; i += 1) {
    const n = i % 2 === 0 ? a : b;
    out += ALNUM[n % ALNUM.length];
    a = (Math.imul(a ^ (i + 17), 1597334677) + b) >>> 0;
    b = (Math.imul(b ^ (i + 31), 3812015801) + a) >>> 0;
  }
  return out;
}

export function slugify(value) {
  return String(value ?? "")
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "") || "grimorio-item";
}

function normalizeName(value) {
  return String(value ?? "")
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .toUpperCase().replace(/[^A-Z0-9]+/g, " ").replace(/\s+/g, " ").trim();
}

const FEATURE_TITLE_SMALL_WORDS = new Set([
  "a", "o", "as", "os", "de", "da", "do", "das", "dos", "e", "em", "no", "na", "nos", "nas",
  "por", "para", "com", "sem", "ao", "aos", "à", "às", "um", "uma"
]);
const FEATURE_TITLE_ACRONYMS = new Set(["CA", "CD", "PV", "HP", "XP", "VTT", "NPC", "PC"]);

export function featureDisplayName(value) {
  const input = String(value ?? "").trim();
  if (!input) return input;
  const letters = input.replace(/[^\p{L}]/gu, "");
  if (!letters || letters !== letters.toLocaleUpperCase("pt-BR")) return input;

  const lower = input.toLocaleLowerCase("pt-BR");
  const matches = [...lower.matchAll(/[\p{L}\p{N}]+(?:[’'][\p{L}\p{N}]+)?/gu)];
  if (!matches.length) return input;
  let out = "";
  let cursor = 0;
  let capitalizeNext = true;
  for (const match of matches) {
    const start = match.index ?? cursor;
    const gap = lower.slice(cursor, start);
    out += gap;
    if (/[:—–-]/.test(gap)) capitalizeNext = true;
    const word = match[0];
    const originalWord = input.slice(start, start + word.length);
    const originalUpper = originalWord.toLocaleUpperCase("pt-BR");
    let rendered;
    if (FEATURE_TITLE_ACRONYMS.has(originalUpper) || /^[IVXLCDM]+$/.test(originalUpper) && originalUpper.length > 1) {
      rendered = originalUpper;
    } else if (!capitalizeNext && FEATURE_TITLE_SMALL_WORDS.has(word)) {
      rendered = word;
    } else {
      rendered = word.charAt(0).toLocaleUpperCase("pt-BR") + word.slice(1);
    }
    out += rendered;
    cursor = start + word.length;
    capitalizeNext = false;
  }
  out += lower.slice(cursor);
  return out;
}

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function renderTable(table) {
  if (!table || typeof table !== "object") return "";
  const columns = Array.isArray(table.columns) ? table.columns : [];
  const rows = Array.isArray(table.rows) ? table.rows : [];
  if (!columns.length || !rows.length) return "";
  const headers = columns.map(col => `<th>${escapeHtml(col.label ?? col.key ?? "")}</th>`).join("");
  const body = rows.map(row => `<tr>${columns.map(col => `<td>${escapeHtml(row?.[col.key] ?? "")}</td>`).join("")}</tr>`).join("");
  const caption = table.title ? `<caption><strong>${escapeHtml(table.title)}</strong></caption>` : "";
  return `<table>${caption}<thead><tr>${headers}</tr></thead><tbody>${body}</tbody></table>`;
}

export function textToHtml(text, tables = []) {
  const raw = String(text ?? "").replace(/\r\n?/g, "\n").trim();
  const blocks = raw ? raw.split(/\n{2,}/) : [];
  const html = [];
  for (const block of blocks) {
    const lines = block.split("\n").map(line => line.trim()).filter(Boolean);
    if (lines.length && lines.every(line => /^[•*-]\s+/.test(line))) {
      html.push(`<ul>${lines.map(line => `<li>${escapeHtml(line.replace(/^[•*-]\s+/, ""))}</li>`).join("")}</ul>`);
    } else {
      html.push(`<p>${lines.map(escapeHtml).join("<br>")}</p>`);
    }
  }
  for (const table of tables ?? []) html.push(renderTable(table));
  return html.join("\n");
}

function sourceData(source = {}) {
  const page = source.page ?? source.sourcePage ?? "";
  return {
    custom: String(source.title ?? ""),
    book: "",
    page: page === null || page === undefined ? "" : String(page),
    license: "",
    rules: "2014",
    revision: 1
  };
}

function flagsFor(bundle, extra = {}) {
  return {
    [MODULE_ID]: {
      grimorioId: bundle.identity.grimorioId,
      identifier: bundle.identity.identifier,
      bundleSchema: bundle.schema,
      bundleVersion: bundle.schemaVersion,
      importerVersion: IMPORTER_VERSION,
      kind: bundle.kind,
      sourceTitle: bundle.source?.title ?? "",
      storage: "compendium",
      ...extra
    }
  };
}

function featureRequirements(bundle, feature, levelOverride = null) {
  const className = bundle.kind === "subclass" ? bundle.parentClass?.name : bundle.identity?.name;
  const level = levelOverride ?? feature.level ?? feature.foundryPlan?.grantAtLevel ?? "";
  return `${className ?? "Classe"} ${level}`.trim();
}

export function buildFeatureSource(bundle, feature, options = {}) {
  const level = Number(options.levelOverride ?? feature.level ?? feature.foundryPlan?.grantAtLevel ?? 0) || null;
  const ownerIdentifier = bundle.kind === "subclass" ? bundle.parentClass?.identifier : bundle.identity?.identifier;
  const identifier = slugify(`${ownerIdentifier}-${feature.name}`);
  const typeValue = bundle.kind === "subclass" ? "subclass" : "class";
  const source = {
    name: featureDisplayName(feature.name),
    type: "feat",
    folder: options.folderId ?? null,
    system: {
      description: { value: textToHtml(feature.description, feature.tables), chat: "" },
      source: sourceData({ title: feature.sourceTitle || bundle.source?.title, page: feature.page }),
      type: { value: typeValue, subtype: "" },
      requirements: featureRequirements(bundle, feature, level),
      identifier,
      advancement: {},
      activities: {},
      uses: { spent: 0, max: "", recovery: [] }
    },
    flags: flagsFor(bundle, {
      documentRole: "feature",
      featureKey: feature.key,
      featureLevel: level,
      featureRole: options.featureRole ?? feature.foundryPlan?.role ?? "granted-feature",
      optionGroup: options.optionGroup ?? ""
    })
  };
  const automation = applyFeatureAutomation(source, bundle, feature);
  source.flags[MODULE_ID].automation = automation;
  return source;
}

function advancementBase(seed, type, level, title) {
  const data = { _id: stableId(seed), type, configuration: {}, value: {}, title: title ?? "" };
  if (level !== null && level !== undefined) data.level = Number(level);
  return data;
}

function addAdvancement(object, advancement) {
  object[advancement._id] = advancement;
  return advancement;
}

function traitAdvancement(seed, { level = 1, title = "", grants = [], choices = [], classRestriction = "primary" }) {
  const a = advancementBase(seed, "Trait", level, title);
  a.configuration = { allowReplacements: false, choices, grants, mode: "default" };
  a.value = { chosen: [] };
  if (classRestriction) a.classRestriction = classRestriction;
  return a;
}

function itemGrantAdvancement(seed, level, title, featureDocs) {
  const a = advancementBase(seed, "ItemGrant", level, title);
  a.configuration = {
    items: featureDocs.map(doc => ({ uuid: doc.uuid, optional: false })),
    optional: false,
    spell: null
  };
  return a;
}

function itemChoiceAdvancement(seed, title, optionDocs, choices) {
  const levels = Object.keys(choices ?? {}).map(Number).filter(Number.isFinite).sort((a, b) => a - b);
  const level = levels[0] ?? null;
  const a = advancementBase(seed, "ItemChoice", level, title);
  a.configuration = {
    allowDrops: false,
    choices: Object.fromEntries(levels.map(l => [String(l), { count: Number(choices[l].count), replacement: Boolean(choices[l].replacement) }])),
    pool: optionDocs.map(doc => ({ uuid: doc.uuid })),
    restriction: { type: "class", subtype: "", level: "", list: [] },
    spell: null,
    type: "feat"
  };
  a.value = { ability: "", added: {}, replaced: {} };
  return a;
}

function asiAdvancement(identifier, level) {
  const a = advancementBase(`${identifier}:asi:${level}`, "AbilityScoreImprovement", level, "Incremento no Valor de Habilidade");
  a.configuration = {
    points: 2,
    fixed: Object.fromEntries(ABILITIES.map(key => [key, 0])),
    cap: 2,
    locked: []
  };
  a.value = { type: "asi" };
  return a;
}

function hitPointsAdvancement(identifier) {
  return advancementBase(`${identifier}:hit-points`, "HitPoints", null, "Pontos de Vida");
}

function subclassAdvancement(identifier, level, title) {
  const a = advancementBase(`${identifier}:subclass:${level}`, "Subclass", level, title);
  a.value = { document: null, uuid: null };
  return a;
}

function matchesAnyName(feature, names = []) {
  const key = normalizeName(feature?.name);
  return names.some(name => normalizeName(name) === key);
}

function matchesAnyPrefix(feature, prefixes = []) {
  const key = normalizeName(feature?.name);
  return prefixes.some(prefix => key.startsWith(normalizeName(prefix)));
}

function isAsiFeature(feature) {
  const key = normalizeName(feature?.name);
  return /(?:INCREMENTO|AUMENTO|APRIMORAMENTO)(?: NO)? VALOR (?:DE )?(?:HABILIDADE|ATRIBUTO)/.test(key)
    || key === "INCREMENTO DE HABILIDADE";
}

function directOptionRule(profile, feature) {
  return profile?.directOptionGrants?.find(rule => matchesAnyName(feature, rule.optionNames)) ?? null;
}

function itemChoiceRule(profile, feature) {
  return profile?.itemChoices?.find(rule => matchesAnyName(feature, rule.optionNames)) ?? null;
}

function featureIsSyntheticClassFeature(bundle, feature, profile) {
  if (bundle.kind !== "class") return false;
  if (isAsiFeature(feature)) return true;
  if (matchesAnyName(feature, profile?.subclassFeatureNames)) return true;
  if (matchesAnyPrefix(feature, profile?.subclassPlaceholderPrefixes)) return true;
  return false;
}

function classAdvancements(bundle, featureDocsByKey, profile) {
  const advancements = {};
  const identifier = bundle.identity.identifier;
  addAdvancement(advancements, hitPointsAdvancement(identifier));

  const saves = bundle.class?.proficiencies?.saves?.abilityKeys ?? [];
  if (profile.saveChoices?.length) {
    addAdvancement(advancements, traitAdvancement(`${identifier}:trait:saves`, {
      title: "Proficiências em Salvaguardas",
      choices: profile.saveChoices
    }));
  } else if (saves.length) {
    addAdvancement(advancements, traitAdvancement(`${identifier}:trait:saves`, {
      title: "Proficiências em Salvaguardas",
      grants: saves.map(key => `saves:${key}`)
    }));
  }
  if (profile.armorGrants?.length) {
    addAdvancement(advancements, traitAdvancement(`${identifier}:trait:armor`, {
      title: "Proficiências em Armaduras", grants: profile.armorGrants
    }));
  }
  if (profile.weaponGrants?.length) {
    addAdvancement(advancements, traitAdvancement(`${identifier}:trait:weapons`, {
      title: "Proficiências em Armas", grants: profile.weaponGrants
    }));
  }
  if (profile.skillChoice?.count && profile.skillChoice?.pool?.length) {
    addAdvancement(advancements, traitAdvancement(`${identifier}:trait:skills`, {
      title: "Perícias de Classe",
      choices: [{ count: profile.skillChoice.count, pool: profile.skillChoice.pool }]
    }));
  }

  const grantsByLevel = new Map();
  for (const feature of bundle.features ?? []) {
    if (featureIsSyntheticClassFeature(bundle, feature, profile)) continue;
    const doc = featureDocsByKey.get(feature.key);
    if (!doc) continue;

    const directRule = directOptionRule(profile, feature);
    if (directRule) {
      const level = Number(directRule.level);
      if (!grantsByLevel.has(level)) grantsByLevel.set(level, []);
      grantsByLevel.get(level).push(doc);
      continue;
    }
    if (itemChoiceRule(profile, feature)) continue;
    if (feature.foundryPlan?.role && feature.foundryPlan.role !== "granted-feature") continue;
    const level = Number(feature.level ?? feature.foundryPlan?.grantAtLevel ?? 0);
    if (!level) continue;
    if (!grantsByLevel.has(level)) grantsByLevel.set(level, []);
    grantsByLevel.get(level).push(doc);
  }
  for (const [level, docs] of [...grantsByLevel.entries()].sort((a, b) => a[0] - b[0])) {
    addAdvancement(advancements, itemGrantAdvancement(`${identifier}:grant:${level}`, level, `Características — Nível ${level}`, docs));
  }

  for (const rule of profile.itemChoices ?? []) {
    const docs = (bundle.features ?? [])
      .filter(feature => matchesAnyName(feature, rule.optionNames))
      .map(feature => featureDocsByKey.get(feature.key)).filter(Boolean);
    if (docs.length) addAdvancement(advancements, itemChoiceAdvancement(`${identifier}:choice:${rule.key}`, rule.title, docs, rule.choices));
  }

  for (const level of profile.asiLevels ?? []) addAdvancement(advancements, asiAdvancement(identifier, level));

  const subclassLevel = Number(bundle.subclassSelection?.selectionLevel ?? 0);
  if (subclassLevel && (bundle.subclassSelection?.options?.length ?? 0) > 0) {
    addAdvancement(advancements, subclassAdvancement(identifier, subclassLevel, profile.subclassTitle || "Subclasse"));
  }
  return advancements;
}

function dragoneerTraitAdvancements(bundle, advancements) {
  if (bundle.parentClass?.identifier !== "dragoneer") return null;
  const concept = dragoneerConceptProfile(bundle.identity.grimorioId);
  if (!concept) return null;
  const identifier = bundle.identity.identifier;
  if (concept.saveGrant) addAdvancement(advancements, traitAdvancement(`${identifier}:concept:saves`, {
    level: 1, title: "Conceito Central — Salvaguarda", grants: [`saves:${concept.saveGrant}`], classRestriction: ""
  }));
  if (concept.armorGrants?.length) addAdvancement(advancements, traitAdvancement(`${identifier}:concept:armor`, {
    level: 1, title: "Conceito Central — Armaduras", grants: concept.armorGrants, classRestriction: ""
  }));
  if (concept.weaponGrants?.length) addAdvancement(advancements, traitAdvancement(`${identifier}:concept:weapons`, {
    level: 1, title: "Conceito Central — Armas", grants: concept.weaponGrants, classRestriction: ""
  }));
  const skillChoices = [];
  if (concept.skillChoice?.count && concept.skillChoice?.pool?.length) skillChoices.push({ count: concept.skillChoice.count, pool: concept.skillChoice.pool });
  if (concept.skillGrants?.length || skillChoices.length) addAdvancement(advancements, traitAdvancement(`${identifier}:concept:skills`, {
    level: 1, title: "Conceito Central — Perícias", grants: concept.skillGrants ?? [], choices: skillChoices, classRestriction: ""
  }));
  return concept;
}

function subclassAdvancements(bundle, featureDocsByKey) {
  const advancements = {};
  const identifier = bundle.identity.identifier;
  const grantsByLevel = new Map();
  for (const feature of bundle.features ?? []) {
    if (feature.foundryPlan?.role && feature.foundryPlan.role !== "granted-feature") continue;
    const doc = featureDocsByKey.get(feature.key);
    if (!doc) continue;
    const level = Number(feature.level ?? feature.foundryPlan?.grantAtLevel ?? 0);
    if (!level) continue;
    if (!grantsByLevel.has(level)) grantsByLevel.set(level, []);
    grantsByLevel.get(level).push(doc);
  }
  for (const [level, docs] of [...grantsByLevel.entries()].sort((a, b) => a[0] - b[0])) {
    addAdvancement(advancements, itemGrantAdvancement(`${identifier}:grant:${level}`, level, `Características — Nível ${level}`, docs));
  }
  dragoneerTraitAdvancements(bundle, advancements);
  return advancements;
}

export function buildClassSource(bundle, featureDocsByKey) {
  const profile = classProfile(bundle.identity.identifier);
  if (!profile) throw new Error(`Perfil nativo não encontrado para ${bundle.identity.identifier}.`);
  const hd = bundle.class.hitDice;
  const advancement = classAdvancements(bundle, featureDocsByKey, profile);
  const hdDenomination = profile.hitDieOverride ?? (hd?.faces ? `d${hd.faces}` : "d8");
  return {
    name: bundle.identity.name,
    type: "class",
    system: {
      description: { value: textToHtml(bundle.class.description, bundle.class.tables), chat: "" },
      source: sourceData(bundle.source),
      identifier: bundle.identity.identifier,
      levels: 1,
      advancement,
      spellcasting: {
        progression: profile.spellcasting?.progression ?? "none",
        ability: profile.spellcasting?.ability ?? "",
        preparation: { formula: profile.spellcasting?.preparationFormula ?? "" }
      },
      primaryAbility: { value: bundle.class.primaryAbility?.abilityKeys ?? [], all: false },
      hd: { denomination: hdDenomination, spent: 0, additional: "" }
    },
    flags: flagsFor(bundle, {
      documentRole: "class",
      phase7Profile: bundle.identity.identifier,
      phase8Profile: bundle.identity.identifier,
      specialRuntime: profile.specialRuntime ? (SPECIAL_CLASS_RUNTIME[bundle.identity.identifier] ?? { type: profile.specialRuntime }) : null,
      sourceHitDice: hd?.raw ?? hdDenomination,
      manualReviewNotes: profile.warnings ?? []
    })
  };
}

export function buildSubclassSource(bundle, featureDocsByKey) {
  const advancement = subclassAdvancements(bundle, featureDocsByKey);
  const concept = bundle.parentClass?.identifier === "dragoneer" ? dragoneerConceptProfile(bundle.identity.grimorioId) : null;
  return {
    name: bundle.identity.name,
    type: "subclass",
    system: {
      description: { value: textToHtml(bundle.subclass.description, bundle.subclass.tables), chat: "" },
      source: sourceData(bundle.source),
      identifier: bundle.identity.identifier,
      classIdentifier: bundle.subclass.classIdentifier,
      advancement,
      spellcasting: { progression: "none", ability: "", preparation: { formula: "" } }
    },
    flags: flagsFor(bundle, {
      documentRole: "subclass",
      parentClassIdentifier: bundle.subclass.classIdentifier,
      dragoneerConcept: concept,
      manualReviewNotes: concept?.warnings ?? []
    })
  };
}

function flag(doc, key) {
  if (typeof doc?.getFlag === "function") return doc.getFlag(MODULE_ID, key);
  return doc?.flags?.[MODULE_ID]?.[key] ?? doc?._source?.flags?.[MODULE_ID]?.[key];
}

function folderFlag(folder, key) {
  if (typeof folder?.getFlag === "function") return folder.getFlag(MODULE_ID, key);
  return folder?.flags?.[MODULE_ID]?.[key] ?? folder?._source?.flags?.[MODULE_ID]?.[key];
}

function folderParentId(folder) {
  const value = folder?.folder ?? folder?._source?.folder ?? null;
  return typeof value === "string" ? value : value?.id ?? null;
}

function managedFolderSource({ name, role, classIdentifier, subclassGrimorioId = "", parentFolderId = null }) {
  return {
    name,
    type: "Item",
    folder: parentFolderId,
    sorting: "a",
    sort: 0,
    flags: {
      [MODULE_ID]: {
        managedFolder: true,
        folderRole: role,
        classIdentifier,
        subclassGrimorioId,
        importerVersion: IMPORTER_VERSION
      }
    }
  };
}

async function upsertFeatureFolder(runtime, folders, matcher, source) {
  const existing = folders.find(matcher);
  if (existing) {
    const currentParent = folderParentId(existing);
    const currentName = String(existing?.name ?? existing?._source?.name ?? "");
    const wantedParent = source.folder ?? null;
    if (currentName !== source.name || currentParent !== wantedParent || folderFlag(existing, "importerVersion") !== IMPORTER_VERSION) {
      const updated = await runtime.updatePackFolder("features", existing, source);
      return { folder: updated ?? existing, created: false, updated: true };
    }
    return { folder: existing, created: false, updated: false };
  }
  const created = await runtime.createPackFolder("features", source);
  if (!created) throw new Error(`O Foundry não retornou a pasta criada em ${PACKS.features.label}: ${source.name}.`);
  folders.push(created);
  return { folder: created, created: true, updated: false };
}

async function ensureFeatureFolder(runtime, bundle) {
  if (typeof runtime.listPackFolders !== "function" || typeof runtime.createPackFolder !== "function") {
    return { folderId: null, foldersCreated: 0, foldersUpdated: 0 };
  }
  const folders = runtime.listPackFolders("features");
  const classIdentifier = bundle.kind === "subclass" ? bundle.parentClass?.identifier : bundle.identity?.identifier;
  const className = bundle.kind === "subclass" ? bundle.parentClass?.name : bundle.identity?.name;
  if (!classIdentifier || !className) return { folderId: null, foldersCreated: 0, foldersUpdated: 0 };

  const classResult = await upsertFeatureFolder(
    runtime,
    folders,
    folder => folderFlag(folder, "managedFolder") === true
      && folderFlag(folder, "folderRole") === "class"
      && folderFlag(folder, "classIdentifier") === classIdentifier,
    managedFolderSource({ name: className, role: "class", classIdentifier })
  );
  let created = classResult.created ? 1 : 0;
  let updated = classResult.updated ? 1 : 0;
  if (bundle.kind !== "subclass") {
    return { folderId: classResult.folder.id, foldersCreated: created, foldersUpdated: updated };
  }

  const subclassResult = await upsertFeatureFolder(
    runtime,
    folders,
    folder => folderFlag(folder, "managedFolder") === true
      && folderFlag(folder, "folderRole") === "subclass"
      && folderFlag(folder, "classIdentifier") === classIdentifier
      && folderFlag(folder, "subclassGrimorioId") === bundle.identity.grimorioId,
    managedFolderSource({
      name: bundle.identity.name,
      role: "subclass",
      classIdentifier,
      subclassGrimorioId: bundle.identity.grimorioId,
      parentFolderId: classResult.folder.id
    })
  );
  created += subclassResult.created ? 1 : 0;
  updated += subclassResult.updated ? 1 : 0;
  return { folderId: subclassResult.folder.id, foldersCreated: created, foldersUpdated: updated };
}

function sameManagedDocument(doc, role, bundle, featureKey = null) {
  if (flag(doc, "documentRole") !== role) return false;
  if (featureKey) return flag(doc, "featureKey") === featureKey && flag(doc, "grimorioId") === bundle.identity.grimorioId;
  return flag(doc, "grimorioId") === bundle.identity.grimorioId;
}

export function defaultRuntime() {
  const packRuntime = defaultPackRuntime();
  return {
    foundryVersion: globalThis.game?.version ?? globalThis.game?.release?.version ?? "",
    systemId: globalThis.game?.system?.id ?? "",
    systemVersion: globalThis.game?.system?.version ?? "",
    isGM: Boolean(globalThis.game?.user?.isGM),
    ...packRuntime
  };
}

function packKeyForRole(role) {
  if (role === "feature") return "features";
  if (role === "class") return "classes";
  if (role === "subclass") return "subclasses";
  throw new Error(`Papel de documento sem compêndio: ${role}.`);
}

function decorateStorageFlags(source, packKey) {
  const copy = { ...source, flags: { ...(source.flags ?? {}) } };
  copy.flags[MODULE_ID] = {
    ...(copy.flags[MODULE_ID] ?? {}),
    storage: "compendium",
    packKey,
    packCollection: PACKS[packKey].collection
  };
  return copy;
}

async function upsertInPack(runtime, packKey, currentItems, matcher, source) {
  const existing = currentItems.find(matcher);
  const storedSource = decorateStorageFlags(source, packKey);
  if (existing) {
    const updated = await runtime.updatePackItem(packKey, existing, storedSource);
    return { doc: updated ?? existing, created: false };
  }
  const created = await runtime.createPackItem(packKey, storedSource);
  if (!created) throw new Error(`O Foundry não retornou o Item criado em ${PACKS[packKey].label}: ${source.name}.`);
  currentItems.push(created);
  return { doc: created, created: true };
}

function featureStoragePlan(bundle, feature, profile) {
  if (bundle.kind === "subclass") {
    if (feature.foundryPlan?.role && feature.foundryPlan.role !== "granted-feature") return null;
    return { level: feature.level, featureRole: "granted-feature" };
  }
  if (featureIsSyntheticClassFeature(bundle, feature, profile)) return null;
  if (feature.foundryPlan?.role === "granted-feature") return { level: feature.level, featureRole: "granted-feature" };
  const direct = directOptionRule(profile, feature);
  if (direct) return { level: direct.level, featureRole: "supporting-feature" };
  const choice = itemChoiceRule(profile, feature);
  if (choice) {
    const firstLevel = Math.min(...Object.keys(choice.choices).map(Number));
    return { level: firstLevel, featureRole: "choice-option", optionGroup: choice.key };
  }
  return null;
}

export function legacyWorldPrototypeStatus(runtime = defaultRuntime()) {
  const items = typeof runtime.listWorldItems === "function" ? runtime.listWorldItems() : [];
  const managed = items.filter(doc => flag(doc, "documentRole") && flag(doc, "storage") !== "compendium");
  const byRole = managed.reduce((acc, doc) => {
    const role = flag(doc, "documentRole") || "unknown";
    acc[role] = (acc[role] || 0) + 1;
    return acc;
  }, {});
  return { total: managed.length, byRole, documents: managed };
}

export async function materializeBundle(bundle, runtime = defaultRuntime()) {
  const validation = validateBundle(bundle, runtime);
  if (!validation.ok) throw new Error(validation.errors.join("\n"));
  if (runtime.isGM === false) throw new Error("Somente um Mestre pode importar bundles do Grimório.");

  const profile = bundle.kind === "class" ? classProfile(bundle.identity.identifier) : null;
  const featurePackKey = packKeyForRole("feature");
  const parentPackKey = packKeyForRole(bundle.kind);
  const requiredPacks = [featurePackKey, parentPackKey];

  return await withWritablePacks(runtime, requiredPacks, async () => {
    const featureItems = await runtime.listPackItems(featurePackKey);
    const parentItems = parentPackKey === featurePackKey ? featureItems : await runtime.listPackItems(parentPackKey);
    const featureDocsByKey = new Map();
    const stats = {
      featuresCreated: 0, featuresUpdated: 0, parentCreated: 0, parentUpdated: 0, worldItemsCreated: 0, choiceOptions: 0,
      foldersCreated: 0, foldersUpdated: 0
    };
    const plannedFeatures = (bundle.features ?? [])
      .map(feature => ({ feature, storagePlan: featureStoragePlan(bundle, feature, profile) }))
      .filter(entry => Boolean(entry.storagePlan));
    const folderPlan = plannedFeatures.length ? await ensureFeatureFolder(runtime, bundle) : { folderId: null, foldersCreated: 0, foldersUpdated: 0 };
    stats.foldersCreated += folderPlan.foldersCreated;
    stats.foldersUpdated += folderPlan.foldersUpdated;

    for (const { feature, storagePlan } of plannedFeatures) {
      const source = buildFeatureSource(bundle, feature, {
        levelOverride: storagePlan.level,
        featureRole: storagePlan.featureRole,
        optionGroup: storagePlan.optionGroup,
        folderId: folderPlan.folderId
      });
      const result = await upsertInPack(
        runtime,
        featurePackKey,
        featureItems,
        doc => sameManagedDocument(doc, "feature", bundle, feature.key),
        source
      );
      featureDocsByKey.set(feature.key, result.doc);
      if (storagePlan.featureRole === "choice-option") stats.choiceOptions += 1;
      if (result.created) stats.featuresCreated += 1;
      else stats.featuresUpdated += 1;
    }

    const parentSource = bundle.kind === "class"
      ? buildClassSource(bundle, featureDocsByKey)
      : buildSubclassSource(bundle, featureDocsByKey);
    const role = bundle.kind;
    const parentResult = await upsertInPack(
      runtime,
      parentPackKey,
      parentItems,
      doc => sameManagedDocument(doc, role, bundle),
      parentSource
    );
    if (parentResult.created) stats.parentCreated += 1;
    else stats.parentUpdated += 1;

    const profileWarnings = bundle.kind === "class"
      ? (profile?.warnings ?? [])
      : (bundle.parentClass?.identifier === "dragoneer" ? (dragoneerConceptProfile(bundle.identity.grimorioId)?.warnings ?? []) : []);
    return {
      ok: true,
      bundle: { kind: bundle.kind, grimorioId: bundle.identity.grimorioId, name: bundle.identity.name },
      target: { foundry: TARGET_FOUNDRY, dnd5e: TARGET_DND5E },
      storage: {
        mode: "compendium",
        featurePack: PACKS.features.collection,
        parentPack: PACKS[parentPackKey].collection,
        featureFolderId: folderPlan.folderId,
        portableItemGrants: true
      },
      item: parentResult.doc,
      featureItems: [...featureDocsByKey.values()],
      stats,
      warnings: [...validation.warnings, ...profileWarnings]
    };
  });
}
