import { METADATA_REPOSITORY_FILES, writeMode } from './config.mjs';
import { fail } from './errors.mjs';
import { editManifestClassName, editMetadataSource, parseMetadataFiles } from './metadata-source.mjs';
import { repositoryService } from './repository.mjs';
import { validateMetadataSavePayload } from './validation.mjs';

function validateRegistry(snapshot) {
  const registry = parseMetadataFiles(snapshot.files);
  let manifest;
  try { manifest = JSON.parse(snapshot.files['manifest.json'].content); } catch { fail(500, 'INVALID_MANIFEST', 'O manifesto do projeto contém JSON inválido.'); }
  if (registry.classes.size !== manifest.classes || registry.subclasses.size !== manifest.subclasses) fail(500, 'INVALID_METADATA_INDEX', 'As contagens de classes e subclasses não correspondem ao manifesto.');
  for (const item of manifest.classIndex || []) {
    const entity = registry.classes.get(item.id);
    if (!entity || entity.metadata.name !== item.name) fail(500, 'INVALID_METADATA_INDEX', 'O índice de classes não corresponde aos arquivos de conteúdo.');
  }
  for (const entity of registry.subclasses.values()) if (!registry.classes.has(entity.classId)) fail(500, 'INVALID_METADATA_INDEX', `A subclasse ${entity.id} referencia uma classe ausente.`);
  return { registry, manifest };
}

function view(entity) {
  return { id: entity.id, classId: entity.classId || undefined, ...entity.metadata, revision: { entryHash: entity.entryHash } };
}

export class MetadataService {
  constructor(repository = repositoryService()) { this.repository = repository; }

  async list() {
    const snapshot = await this.repository.readSnapshot(METADATA_REPOSITORY_FILES);
    const { registry } = validateRegistry(snapshot);
    return {
      mode: writeMode(),
      classes: [...registry.classes.values()].map(view),
      subclasses: [...registry.subclasses.values()].map(view)
    };
  }

  async save(untrustedPayload) {
    const snapshot = await this.repository.readSnapshot(METADATA_REPOSITORY_FILES);
    const { registry } = validateRegistry(snapshot);
    const payload = validateMetadataSavePayload(untrustedPayload, registry);
    if (payload.current.entryHash !== payload.expected.entryHash) fail(409, 'CONFLICT', 'Esta entidade foi alterada depois que o editor foi aberto. Recarregue os dados.');
    const files = {};
    const edited = editMetadataSource(snapshot.files[payload.current.path].content, payload.current.path, payload.entityType, payload.entityId, payload.changes);
    files[payload.current.path] = edited.source;
    if (payload.entityType === 'class' && payload.changes.name) {
      files['manifest.json'] = editManifestClassName(snapshot.files['manifest.json'].content, payload.entityId, payload.current.metadata.name, payload.changes.name);
    }
    const label = payload.entityType === 'class' ? 'classe' : 'subclasse';
    const commit = await this.repository.commitFiles({ snapshot, files, message: `Grimório Admin: atualiza metadados da ${label} ${payload.entityId}` });
    return {
      mode: writeMode(), commit, deploymentPending: writeMode() === 'github', entity: view(edited.entity)
    };
  }
}
