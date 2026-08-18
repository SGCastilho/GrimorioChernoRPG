import { FEAT_REPOSITORY_FILES, writeMode } from './config.mjs';
import { fail } from './errors.mjs';
import { editFeatSource, parseFeatFiles } from './feat-source.mjs';
import { repositoryService } from './repository.mjs';
import { validateFeatSavePayload } from './validation.mjs';

function stateFrom(snapshot) {
  const registry = parseFeatFiles(snapshot.files);
  let manifest;
  try { manifest = JSON.parse(snapshot.files['manifest.json'].content); } catch { fail(500, 'INVALID_MANIFEST', 'O manifesto do projeto contém JSON inválido.'); }
  if (registry.feats.size !== manifest.feats || registry.catalogs.length !== manifest.featCatalogs) fail(500, 'INVALID_FEAT_INDEX', 'As contagens de talentos não correspondem ao manifesto.');
  return { registry, manifest };
}

function view(feat) {
  return {
    id: feat.id,
    catalogId: feat.catalog.id,
    sourceId: feat.catalog.sourceId,
    catalogLabel: feat.catalog.label,
    chapter: feat.catalog.chapter,
    pages: feat.catalog.pages,
    ...feat.metadata,
    revision: { entryHash: feat.entryHash }
  };
}

export class FeatService {
  constructor(repository = repositoryService()) { this.repository = repository; }

  async list() {
    const snapshot = await this.repository.readSnapshot(FEAT_REPOSITORY_FILES);
    const { registry } = stateFrom(snapshot);
    return {
      mode: writeMode(),
      catalogs: registry.catalogs.map(({ path, featIds, ...catalog }) => ({ ...catalog, count: featIds.length })),
      feats: [...registry.feats.values()].map(view)
    };
  }

  async save(untrustedPayload) {
    const snapshot = await this.repository.readSnapshot(FEAT_REPOSITORY_FILES);
    const { registry } = stateFrom(snapshot);
    const payload = validateFeatSavePayload(untrustedPayload, registry);
    if (payload.current.entryHash !== payload.expected.entryHash) fail(409, 'CONFLICT', 'Este talento foi alterado depois que o editor foi aberto. Recarregue os dados.');
    const edited = editFeatSource(snapshot.files[payload.current.path].content, payload.current.path, payload.featId, payload.changes);
    const files = { [payload.current.path]: edited.source };
    const commit = await this.repository.commitFiles({ snapshot, files, message: `Grimório Admin: atualiza talento ${payload.featId}` });
    return { mode: writeMode(), commit, deploymentPending: writeMode() === 'github', feat: view(edited.feat) };
  }
}
