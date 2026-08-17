import { RACE_ART_FILES, writeMode } from './config.mjs';
import { editArtSource, effectiveEntry, entryHash, parseArtSource } from './art-source.mjs';
import { fail } from './errors.mjs';
import { repositoryService } from './repository.mjs';
import { validateEffectiveRaceArt, validateRaceArtSavePayload } from './validation.mjs';

function readState(snapshot) {
  let manifest;
  try { manifest = JSON.parse(snapshot.files['manifest.json'].content); } catch { fail(500, 'INVALID_MANIFEST', 'O manifesto do projeto contém JSON inválido.'); }
  if (!Array.isArray(manifest.raceIndex) || manifest.raceIndex.length !== manifest.races) fail(500, 'INVALID_MANIFEST', 'O índice de raças não está configurado corretamente.');
  const raceIds = new Set();
  for (const item of manifest.raceIndex) {
    if (!item || typeof item.id !== 'string' || typeof item.name !== 'string' || raceIds.has(item.id)) fail(500, 'INVALID_MANIFEST', 'O índice de raças contém dados inválidos.');
    raceIds.add(item.id);
  }
  const parsed = {};
  for (const [kind, descriptor] of Object.entries(RACE_ART_FILES)) parsed[kind] = parseArtSource(snapshot.files[descriptor.path].content, descriptor.variable);
  for (const id of raceIds) if (!parsed.cover.entries[id] || !parsed.detailArt.entries[id]) fail(500, 'INVALID_ART_SOURCE', `A raça ${id} não possui os dois mapas de arte.`);
  return { manifest, raceIds, parsed };
}

function raceView(item, parsed) {
  const cover = parsed.cover.entries[item.id], detail = parsed.detailArt.entries[item.id];
  return {
    id: item.id,
    name: item.name,
    cover: effectiveEntry('cover', cover, RACE_ART_FILES),
    detailArt: effectiveEntry('detailArt', detail, RACE_ART_FILES),
    revisions: { coverEntryHash: entryHash(cover), detailEntryHash: entryHash(detail) }
  };
}

export class RaceArtService {
  constructor(repository = repositoryService()) { this.repository = repository; }

  async list() {
    const snapshot = await this.repository.readSnapshot(), state = readState(snapshot);
    return {
      mode: writeMode(),
      races: state.manifest.raceIndex.map(item => raceView(item, state.parsed)),
      revisions: {
        headSha: snapshot.headSha,
        coverFileSha: snapshot.files[RACE_ART_FILES.cover.path].sha,
        detailFileSha: snapshot.files[RACE_ART_FILES.detailArt.path].sha
      }
    };
  }

  async save(untrustedPayload) {
    const snapshot = await this.repository.readSnapshot(), state = readState(snapshot);
    const payload = validateRaceArtSavePayload(untrustedPayload, state.raceIds), outputFiles = {};
    for (const [kind, changes] of Object.entries(payload.changes)) {
      const expectedKey = kind === 'cover' ? 'coverEntryHash' : 'detailEntryHash';
      const currentEntry = state.parsed[kind].entries[payload.raceId];
      if (entryHash(currentEntry) !== payload.expected[expectedKey]) fail(409, 'CONFLICT', 'Esta raça foi alterada depois que o editor foi aberto. Recarregue os dados.');
      validateEffectiveRaceArt({ ...effectiveEntry(kind, currentEntry, RACE_ART_FILES), ...changes });
      const descriptor = RACE_ART_FILES[kind];
      outputFiles[descriptor.path] = editArtSource(snapshot.files[descriptor.path].content, kind, payload.raceId, changes, RACE_ART_FILES).source;
    }
    const message = `Grimório Admin: atualiza artes de raça ${payload.raceId}`;
    const commit = await this.repository.commitFiles({ snapshot, files: outputFiles, message });
    const refreshedFiles = { ...snapshot.files };
    for (const [path, content] of Object.entries(outputFiles)) refreshedFiles[path] = { content, sha: commit.files[path] };
    const refreshed = readState({ ...snapshot, files: refreshedFiles });
    const item = state.manifest.raceIndex.find(candidate => candidate.id === payload.raceId);
    return {
      mode: writeMode(), commit, deploymentPending: writeMode() === 'github', race: raceView(item, refreshed.parsed),
      revisions: {
        headSha: commit.commitSha,
        coverFileSha: refreshedFiles[RACE_ART_FILES.cover.path].sha,
        detailFileSha: refreshedFiles[RACE_ART_FILES.detailArt.path].sha
      }
    };
  }
}
