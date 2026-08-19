export const MODULE_ID = "grimorio-importer";

export const PACKS = Object.freeze({
  classes: Object.freeze({
    key: "classes",
    name: "grimorio-classes",
    collection: `${MODULE_ID}.grimorio-classes`,
    label: "Grimório — Classes",
    role: "class"
  }),
  subclasses: Object.freeze({
    key: "subclasses",
    name: "grimorio-subclasses",
    collection: `${MODULE_ID}.grimorio-subclasses`,
    label: "Grimório — Subclasses",
    role: "subclass"
  }),
  features: Object.freeze({
    key: "features",
    name: "grimorio-features",
    collection: `${MODULE_ID}.grimorio-features`,
    label: "Grimório — Características",
    role: "feature"
  }),
  feats: Object.freeze({
    key: "feats",
    name: "grimorio-feats",
    collection: `${MODULE_ID}.grimorio-feats`,
    label: "Grimório — Talentos",
    role: "feat"
  }),
  races: Object.freeze({
    key: "races",
    name: "grimorio-races",
    collection: `${MODULE_ID}.grimorio-races`,
    label: "Grimório — Raças",
    role: "race"
  }),
  racialFeatures: Object.freeze({
    key: "racialFeatures",
    name: "grimorio-racial-features",
    collection: `${MODULE_ID}.grimorio-racial-features`,
    label: "Grimório — Características Raciais",
    role: "racial-feature"
  })
});

export function packSpec(key) {
  const spec = PACKS[key];
  if (!spec) throw new Error(`Compêndio desconhecido: ${key}.`);
  return spec;
}

export function defaultPackRuntime() {
  return {
    getPack(key) {
      const spec = packSpec(key);
      return globalThis.game?.packs?.get(spec.collection) ?? null;
    },
    async listPackItems(key) {
      const pack = this.getPack(key);
      if (!pack) throw new Error(`Compêndio não encontrado: ${packSpec(key).label}.`);
      return await pack.getDocuments();
    },
    async createPackItem(key, data) {
      const spec = packSpec(key);
      const created = await globalThis.Item.implementation.create(data, { pack: spec.collection });
      if (Array.isArray(created)) return created[0] ?? null;
      return created ?? null;
    },
    async updatePackItem(_key, doc, data) {
      return await doc.update(data);
    },
    listPackFolders(key) {
      const pack = this.getPack(key);
      if (!pack) throw new Error(`Compêndio não encontrado: ${packSpec(key).label}.`);
      if (!pack.folders) return [];
      if (Array.isArray(pack.folders.contents)) return [...pack.folders.contents];
      if (typeof pack.folders.values === "function") return Array.from(pack.folders.values());
      return Array.from(pack.folders);
    },
    async createPackFolder(key, data) {
      const spec = packSpec(key);
      const created = await globalThis.Folder.implementation.create(data, { pack: spec.collection });
      if (Array.isArray(created)) return created[0] ?? null;
      return created ?? null;
    },
    async updatePackFolder(_key, doc, data) {
      return await doc.update(data);
    },
    async setPackLocked(key, locked) {
      const pack = this.getPack(key);
      if (!pack) throw new Error(`Compêndio não encontrado: ${packSpec(key).label}.`);
      if (Boolean(pack.locked) !== Boolean(locked)) await pack.configure({ locked: Boolean(locked) });
    },
    isPackLocked(key) {
      const pack = this.getPack(key);
      if (!pack) return null;
      return Boolean(pack.locked);
    },
    listWorldItems() {
      return Array.from(globalThis.game?.items ?? []);
    }
  };
}

export function packAvailability(runtime = defaultPackRuntime()) {
  return Object.values(PACKS).map(spec => {
    const pack = runtime.getPack(spec.key);
    return {
      key: spec.key,
      collection: spec.collection,
      label: spec.label,
      available: Boolean(pack),
      locked: pack ? Boolean(pack.locked) : null,
      indexed: pack ? Boolean(pack.indexed) : false,
      indexSize: pack?.index?.size ?? 0
    };
  });
}

export async function packContentsStatus(runtime = defaultPackRuntime()) {
  const rows = [];
  for (const spec of Object.values(PACKS)) {
    const pack = runtime.getPack(spec.key);
    if (!pack) {
      rows.push({ ...spec, available: false, locked: null, total: 0, managed: 0 });
      continue;
    }
    const docs = await runtime.listPackItems(spec.key);
    const managed = docs.filter(doc => {
      if (typeof doc?.getFlag === "function") return Boolean(doc.getFlag(MODULE_ID, "documentRole"));
      return Boolean(doc?.flags?.[MODULE_ID]?.documentRole ?? doc?._source?.flags?.[MODULE_ID]?.documentRole);
    }).length;
    const folders = typeof runtime.listPackFolders === "function" ? runtime.listPackFolders(spec.key) : [];
    const managedFolders = folders.filter(folder => {
      if (typeof folder?.getFlag === "function") return Boolean(folder.getFlag(MODULE_ID, "managedFolder"));
      return Boolean(folder?.flags?.[MODULE_ID]?.managedFolder ?? folder?._source?.flags?.[MODULE_ID]?.managedFolder);
    }).length;
    rows.push({ ...spec, available: true, locked: Boolean(pack.locked), total: docs.length, managed, folders: folders.length, managedFolders });
  }
  return rows;
}

export async function withWritablePacks(runtime, keys, fn) {
  const unique = [...new Set(keys)];
  const original = new Map();
  for (const key of unique) {
    const pack = runtime.getPack(key);
    if (!pack) throw new Error(`Compêndio não encontrado: ${packSpec(key).label}. Reinstale/atualize o módulo Grimório Importer.`);
    original.set(key, Boolean(pack.locked));
  }
  try {
    for (const key of unique) {
      if (original.get(key)) await runtime.setPackLocked(key, false);
    }
    return await fn();
  } finally {
    for (const key of unique.reverse()) {
      if (original.get(key)) {
        try { await runtime.setPackLocked(key, true); }
        catch (error) { console.error(`[${MODULE_ID}] Não foi possível restaurar o bloqueio de ${packSpec(key).label}.`, error); }
      }
    }
  }
}
