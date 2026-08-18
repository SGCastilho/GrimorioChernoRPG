import assert from 'node:assert/strict';
import { test } from 'node:test';
import { RaceService } from '../../api/_lib/admin/race-service.mjs';
import { MockRepositoryService } from '../../api/_lib/admin/repository.mjs';

process.env.GRIMORIO_ADMIN_WRITE_MODE = 'mock';
process.env.VERCEL_ENV = 'development';

test('lista e simula 46 raças e 382 subraças sem persistir no disco', async () => {
  const service = new RaceService(new MockRepositoryService());
  const catalog = await service.list();
  assert.equal(catalog.races.length, 46);
  assert.equal(catalog.subraces.length, 382);
  const current = catalog.subraces.find(item => item.raceId === 'arhcoon' && item.id === 'city-arhcoon');
  const saved = await service.save({ entityType: 'subrace', raceId: current.raceId, subraceId: current.id, changes: { description: 'Descrição editada.' }, expected: current.revision });
  assert.equal(saved.entity.description, 'Descrição editada.');
  assert.deepEqual(Object.keys(saved.commit.files), ['data/lyre-races-phase2-text.js']);
  assert.notEqual((await service.list()).subraces.find(item => item.raceId === current.raceId && item.id === current.id).description, 'Descrição editada.');
});

test('salva raça em base, fase e manifesto no mesmo commit', async () => {
  const service = new RaceService(new MockRepositoryService());
  const current = (await service.list()).races.find(item => item.id === 'arhcoon');
  const saved = await service.save({
    entityType: 'race', raceId: current.id,
    changes: { name: 'Arhcoon Administrativo', summary: 'Resumo administrativo.', meta: { speed: '10 m (33 pés)' } },
    expected: current.revision
  });
  assert.equal(saved.entity.name, 'Arhcoon Administrativo');
  assert.equal(saved.entity.meta.speed, '10 m (33 pés)');
  assert.deepEqual(Object.keys(saved.commit.files).sort(), ['data/lyre-races-phase2-text.js', 'data/lyre-races.js', 'manifest.json']);
});

test('salva subraça gerada por fábrica sem permitir mudança de ID original', async () => {
  const service = new RaceService(new MockRepositoryService());
  const current = (await service.list()).subraces.find(item => item.raceId === 'arhcoon' && item.id === 'tanuki');
  const saved = await service.save({ entityType: 'subrace', raceId: current.raceId, subraceId: current.id, changes: { name: 'Tanuki Revisado' }, expected: current.revision });
  assert.equal(saved.entity.id, 'tanuki');
  assert.equal(saved.entity.originalName, 'Tanuki');
  assert.deepEqual(Object.keys(saved.commit.files), ['data/blade-bone-benefit-races.js']);
  await assert.rejects(() => service.save({ entityType: 'subrace', raceId: current.raceId, subraceId: current.id, changes: { originalName: 'Changed' }, expected: current.revision }), error => error.code === 'INVALID_FIELD');
});

test('bloqueia conflito, paths, campos extras e entidades inexistentes', async () => {
  const service = new RaceService(new MockRepositoryService());
  const race = (await service.list()).races[0];
  await assert.rejects(() => service.save({ entityType: 'race', raceId: race.id, changes: { name: 'Nome' }, expected: { entryHash: 'a'.repeat(64) } }), error => error.status === 409 && error.code === 'CONFLICT');
  await assert.rejects(() => service.save({ entityType: 'race', raceId: race.id, path: 'data/lyre-races.js', changes: { name: 'Nome' }, expected: race.revision }), error => error.code === 'INVALID_FIELD');
  await assert.rejects(() => service.save({ entityType: 'race', raceId: race.id, changes: { coreTraits: [] }, expected: race.revision }), error => error.code === 'INVALID_FIELD');
  await assert.rejects(() => service.save({ entityType: 'race', raceId: 'missing', changes: { name: 'Nome' }, expected: race.revision }), error => error.code === 'UNKNOWN_RACE_ENTITY');
});

test('valida textos, números, meta, duplicações e payload sem mudanças', async () => {
  const service = new RaceService(new MockRepositoryService());
  const catalog = await service.list();
  const race = catalog.races.find(item => item.id === 'arhcoon');
  const payload = changes => ({ entityType: 'race', raceId: race.id, changes, expected: race.revision });
  await assert.rejects(() => service.save(payload({ sourcePage: 0 })), error => error.code === 'INVALID_VALUE');
  await assert.rejects(() => service.save(payload({ meta: { speed: '' } })), error => error.code === 'INVALID_VALUE');
  await assert.rejects(() => service.save(payload({ meta: { rules: 'evil' } })), error => error.code === 'INVALID_FIELD');
  await assert.rejects(() => service.save(payload({ name: race.name })), error => error.code === 'NO_CHANGES');
  const other = catalog.races.find(item => item.id !== race.id);
  await assert.rejects(() => service.save(payload({ name: other.name })), error => error.code === 'DUPLICATE_NAME');
});
