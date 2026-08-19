import { ART_FILES, writeMode } from './config.mjs';
import { editArtSource, effectiveEntry, entryHash, parseArtSource } from './art-source.mjs';
import { fail } from './errors.mjs';
import { repositoryService } from './repository.mjs';
import { validateSavePayload } from './validation.mjs';

function readState(snapshot) {
  let manifest;
  try {
    manifest = JSON.parse(snapshot.files['manifest.json'].content);
  } catch {
    fail(500, 'INVALID_MANIFEST', 'O manifesto do projeto contém JSON inválido.');
  }
  if (!Array.isArray(manifest.classIndex) || manifest.classIndex.length !== manifest.classes) {
    fail(500, 'INVALID_MANIFEST', 'O índice de classes não está configurado corretamente.');
  }
  const classIds = new Set();
  for (const item of manifest.classIndex) {
    if (!item || typeof item.id !== 'string' || typeof item.name !== 'string' || classIds.has(item.id)) {
      fail(500, 'INVALID_MANIFEST', 'O índice de classes contém dados inválidos.');
    }
    classIds.add(item.id);
  }
  const parsed = {};
  for (const [kind, descriptor] of Object.entries(ART_FILES)) {
    parsed[kind] = parseArtSource(snapshot.files[descriptor.path].content, descriptor.variable);
  }
  for (const id of classIds) {
    if (!parsed.cover.entries[id] || !parsed.detailArt.entries[id]) fail(500, 'INVALID_ART_SOURCE', `A classe ${id} não possui os dois mapas de arte.`);
  }
  return { manifest, classIds, parsed };
}

function classView(item, parsed) {
  const cover = parsed.cover.entries[item.id];
  const detailArt = parsed.detailArt.entries[item.id];
  return {
    id: item.id,
    name: item.name,
    cover: effectiveEntry('cover', cover),
    detailArt: effectiveEntry('detailArt', detailArt),
    revisions: {
      coverEntryHash: entryHash(cover),
      detailArtEntryHash: entryHash(detailArt)
    }
  };
}

export class ClassArtService {
  constructor(repository = repositoryService()) {
    this.repository = repository;
  }

  async list() {
    const snapshot = await this.repository.readSnapshot();
    const state = readState(snapshot);
    return {
      mode: writeMode(),
      classes: state.manifest.classIndex.map(item => classView(item, state.parsed)),
      revisions: { headSha: snapshot.headSha }
    };
  }

  async save(untrustedPayload) {
    const snapshot = await this.repository.readSnapshot();
    const state = readState(snapshot);
    const payload = validateSavePayload(untrustedPayload, state.classIds);
    const outputFiles = {};
    for (const [kind, changes] of Object.entries(payload.changes)) {
      const expectedKey = kind === 'cover' ? 'coverEntryHash' : 'detailArtEntryHash';
      const currentEntry = state.parsed[kind].entries[payload.classId];
      if (entryHash(currentEntry) !== payload.expected[expectedKey]) {
        fail(409, 'CONFLICT', 'Esta classe foi alterada depois que o editor foi aberto. Recarregue os dados.');
      }
      const descriptor = ART_FILES[kind];
      outputFiles[descriptor.path] = editArtSource(snapshot.files[descriptor.path].content, kind, payload.classId, changes).source;
    }
    const message = `Grimório Admin: atualiza artes de ${payload.classId}`;
    const commit = await this.repository.commitFiles({ snapshot, files: outputFiles, message });
    const refreshedFiles = { ...snapshot.files };
    for (const [filePath, content] of Object.entries(outputFiles)) {
      refreshedFiles[filePath] = { content, sha: commit.files[filePath] };
    }
    const refreshed = readState({ ...snapshot, files: refreshedFiles });
    const item = state.manifest.classIndex.find(candidate => candidate.id === payload.classId);
    return {
      mode: writeMode(),
      commit,
      deploymentPending: writeMode() === 'github',
      class: classView(item, refreshed.parsed),
      revisions: { headSha: commit.commitSha }
    };
  }
}
