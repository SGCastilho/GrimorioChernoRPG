import { RACE_REPOSITORY_FILES, writeMode } from './config.mjs';
import { fail } from './errors.mjs';
import { editManifestRaceName, editRaceFiles, parseRaceFiles } from './race-source.mjs';
import { repositoryService } from './repository.mjs';
import { validateRaceSavePayload } from './validation.mjs';

function stateFrom(snapshot) {
  const registry = parseRaceFiles(snapshot.files);
  let manifest;
  try { manifest = JSON.parse(snapshot.files['manifest.json'].content); } catch { fail(500, 'INVALID_MANIFEST', 'O manifesto do projeto contém JSON inválido.'); }
  if (registry.races.size !== manifest.races || registry.subraces.size !== manifest.raceSubraces) fail(500, 'INVALID_RACE_INDEX', 'As contagens raciais não correspondem ao manifesto.');
  if (!Array.isArray(manifest.raceIndex) || manifest.raceIndex.length !== registry.races.size) fail(500, 'INVALID_RACE_INDEX', 'O índice racial do manifesto está inválido.');
  for (const item of manifest.raceIndex) {
    const race = registry.races.get(item.id);
    if (!race || race.metadata.name !== item.name) fail(500, 'INVALID_RACE_INDEX', 'O índice racial não corresponde aos arquivos de conteúdo.');
  }
  return { registry, manifest };
}

function raceView(race, registry) {
  return {
    id: race.id, source: race.source, sourceId: race.sourceId, textRevision: race.textRevision,
    subraceCount: [...registry.subraces.values()].filter(item => item.raceId === race.id).length,
    ...race.metadata, revision: { entryHash: race.entryHash }
  };
}

function subraceView(subrace, registry) {
  const parent = registry.races.get(subrace.raceId);
  return {
    id: subrace.id, raceId: subrace.raceId, originalName: subrace.originalName,
    source: subrace.source || parent.source, sourceId: subrace.sourceId || parent.sourceId,
    ...subrace.metadata, revision: { entryHash: subrace.entryHash }
  };
}

export class RaceService {
  constructor(repository = repositoryService()) { this.repository = repository; }

  async list() {
    const snapshot = await this.repository.readSnapshot(RACE_REPOSITORY_FILES);
    const { registry } = stateFrom(snapshot);
    return {
      mode: writeMode(),
      races: [...registry.races.values()].map(item => raceView(item, registry)),
      subraces: [...registry.subraces.values()].map(item => subraceView(item, registry))
    };
  }

  async save(untrustedPayload) {
    const snapshot = await this.repository.readSnapshot(RACE_REPOSITORY_FILES);
    const { registry } = stateFrom(snapshot);
    const payload = validateRaceSavePayload(untrustedPayload, registry);
    if (payload.current.entryHash !== payload.expected.entryHash) fail(409, 'CONFLICT', 'Esta entidade racial foi alterada depois que o editor foi aberto. Recarregue os dados.');
    const edited = editRaceFiles(snapshot.files, payload.entityType, payload.raceId, payload.subraceId, payload.changes);
    const files = { ...edited.files };
    if (payload.entityType === 'race' && payload.changes.name) {
      files['manifest.json'] = editManifestRaceName(snapshot.files['manifest.json'].content, payload.raceId, payload.current.metadata.name, payload.changes.name);
    }
    const label = payload.entityType === 'race' ? 'raça' : 'subraça';
    const identifier = payload.entityType === 'race' ? payload.raceId : `${payload.raceId}/${payload.subraceId}`;
    const commit = await this.repository.commitFiles({ snapshot, files, message: `Grimório Admin: atualiza ${label} ${identifier}` });
    const afterFiles = Object.fromEntries(Object.entries(snapshot.files).map(([path, file]) => [path, { ...file, content: files[path] ?? file.content }]));
    const afterRegistry = parseRaceFiles(afterFiles);
    const entity = payload.entityType === 'race'
      ? raceView(afterRegistry.races.get(payload.raceId), afterRegistry)
      : subraceView([...afterRegistry.subraces.values()].find(item => item.raceId === payload.raceId && item.id === payload.subraceId), afterRegistry);
    return { mode: writeMode(), commit, deploymentPending: writeMode() === 'github', entity };
  }
}
