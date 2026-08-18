import { SPELL_CATALOG_FILES, SPELL_REPOSITORY_FILES, writeMode } from './config.mjs';
import { fail } from './errors.mjs';
import { editSpellSource, parseSpellFiles, parseSpellSource } from './spell-source.mjs';
import { repositoryService } from './repository.mjs';
import { validateSpellSavePayload } from './validation.mjs';

function stateFrom(snapshot) {
  const registry = parseSpellFiles(snapshot.files);
  let manifest;
  try { manifest = JSON.parse(snapshot.files['manifest.json'].content); } catch { fail(500, 'INVALID_MANIFEST', 'O manifesto do projeto contém JSON inválido.'); }
  if (registry.catalogs.length !== manifest.registeredSpellCatalogs || registry.spells.size < manifest.baseSpellRecords) fail(500, 'INVALID_SPELL_INDEX', 'As contagens de magias não correspondem ao manifesto.');
  return { registry, manifest };
}

function catalogFrom(snapshot, catalogId) {
  const path = SPELL_CATALOG_FILES[catalogId];
  if (!path) fail(400, 'UNKNOWN_SPELL_CATALOG', 'O catálogo de magias informado não existe no Grimório.');
  const source = snapshot.files[path]?.content;
  if (typeof source !== 'string') fail(500, 'FILE_NOT_FOUND', 'O arquivo do catálogo de magias não foi encontrado.');
  const parsed = parseSpellSource(source, path);
  if (parsed.catalog.id !== catalogId) fail(500, 'INVALID_SPELL_INDEX', 'A allowlist e o catálogo de magias não correspondem.');
  return { path, parsed };
}

function detail(spell) {
  return {
    id: spell.id,
    catalogId: spell.catalog.id,
    sourceId: spell.catalog.sourceId,
    catalogLabel: spell.catalog.label,
    ...spell.metadata,
    revision: { entryHash: spell.entryHash }
  };
}

function summary(spell) {
  return {
    id: spell.id,
    catalogId: spell.catalog.id,
    sourceId: spell.catalog.sourceId,
    catalogLabel: spell.catalog.label,
    name: spell.metadata.name,
    originalName: spell.metadata.originalName,
    level: spell.metadata.level,
    levelLabel: spell.metadata.levelLabel,
    school: spell.metadata.school
  };
}

export class SpellService {
  constructor(repository = repositoryService()) { this.repository = repository; }

  async list() {
    const snapshot = await this.repository.readSnapshot(SPELL_REPOSITORY_FILES);
    const { registry } = stateFrom(snapshot);
    return {
      mode: writeMode(),
      total: registry.spells.size,
      catalogs: registry.catalogs.map(({ path, spellIds, ...catalog }) => ({ ...catalog, count: spellIds.length })),
      spells: [...registry.spells.values()].map(summary)
    };
  }

  async get(spellId, catalogId) {
    if (typeof spellId !== 'string' || !/^[a-z0-9][a-z0-9-]{0,159}$/.test(spellId)) fail(400, 'UNKNOWN_SPELL', 'A magia informada não existe no Grimório.');
    const path = SPELL_CATALOG_FILES[catalogId];
    if (!path) fail(400, 'UNKNOWN_SPELL_CATALOG', 'O catálogo de magias informado não existe no Grimório.');
    const snapshot = await this.repository.readSnapshot([path]);
    const { parsed } = catalogFrom(snapshot, catalogId);
    const spell = parsed.spells.find(item => item.id === spellId);
    if (!spell) fail(400, 'UNKNOWN_SPELL', 'A magia informada não existe no Grimório.');
    return { mode: writeMode(), spell: detail(spell) };
  }

  async save(untrustedPayload) {
    const catalogId = untrustedPayload?.catalogId;
    const path = SPELL_CATALOG_FILES[catalogId];
    if (!path) fail(400, 'UNKNOWN_SPELL_CATALOG', 'O catálogo de magias informado não existe no Grimório.');
    const snapshot = await this.repository.readSnapshot([path]);
    const { parsed } = catalogFrom(snapshot, catalogId);
    const registry = { spells: new Map(parsed.spells.map(spell => [spell.id, spell])) };
    const payload = validateSpellSavePayload(untrustedPayload, registry);
    if (payload.current.entryHash !== payload.expected.entryHash) fail(409, 'CONFLICT', 'Esta magia foi alterada depois que o editor foi aberto. Recarregue os dados.');
    const edited = editSpellSource(snapshot.files[path].content, path, payload.spellId, payload.changes);
    const files = { [path]: edited.source };
    const commit = await this.repository.commitFiles({ snapshot, files, message: `Grimório Admin: atualiza magia ${payload.spellId}` });
    return { mode: writeMode(), commit, deploymentPending: writeMode() === 'github', spell: detail(edited.spell) };
  }
}
