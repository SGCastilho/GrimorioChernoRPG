import assert from 'node:assert/strict';
import { test } from 'node:test';
import { FeatService } from '../../api/_lib/admin/feat-service.mjs';
import { MockRepositoryService } from '../../api/_lib/admin/repository.mjs';

process.env.GRIMORIO_ADMIN_WRITE_MODE = 'mock';
process.env.VERCEL_ENV = 'development';

test('lista e simula talento sem persistir no disco', async () => {
  const service = new FeatService(new MockRepositoryService());
  const catalog = await service.list();
  assert.equal(catalog.feats.length, 109);
  assert.equal(catalog.catalogs.length, 3);
  const feat = catalog.feats.find(item => item.id === 'phb-2014-alerta');
  const saved = await service.save({ featId: feat.id, changes: { description: 'Descrição editada.' }, expected: { entryHash: feat.revision.entryHash } });
  assert.equal(saved.feat.description, 'Descrição editada.');
  assert.deepEqual(Object.keys(saved.commit.files), ['data/feats/phb-2014-feats.js']);
  assert.equal((await service.list()).feats.find(item => item.id === feat.id).description, feat.description);
});

test('salva pré-requisitos, escolhas e repetibilidade no mesmo talento', async () => {
  const service = new FeatService(new MockRepositoryService());
  const feat = (await service.list()).feats.find(item => item.id === 'phb-2014-alerta');
  const prerequisites = [{ type: 'level', minimum: 4, label: '4º nível' }];
  const choices = [{ id: 'ability', label: 'Habilidade', count: 1, options: ['Força'] }];
  const saved = await service.save({
    featId: feat.id,
    changes: { prerequisite: '4º nível', prerequisites, choices, repeatable: true },
    expected: { entryHash: feat.revision.entryHash }
  });
  assert.deepEqual(saved.feat.prerequisites, prerequisites);
  assert.deepEqual(saved.feat.choices, choices);
  assert.equal(saved.feat.repeatable, true);
});

test('bloqueia conflito, paths, campos extras e ID inexistente', async () => {
  const service = new FeatService(new MockRepositoryService());
  const feat = (await service.list()).feats.find(item => item.id === 'phb-2014-alerta');
  await assert.rejects(() => service.save({ featId: feat.id, changes: { name: 'Alerta II' }, expected: { entryHash: 'a'.repeat(64) } }), error => error.status === 409 && error.code === 'CONFLICT');
  await assert.rejects(() => service.save({ featId: feat.id, path: 'data/export/foundry-feat-automation.js', changes: { name: 'X' }, expected: { entryHash: feat.revision.entryHash } }), error => error.code === 'INVALID_FIELD');
  await assert.rejects(() => service.save({ featId: feat.id, changes: { sourceId: 'evil' }, expected: { entryHash: feat.revision.entryHash } }), error => error.code === 'INVALID_FIELD');
  await assert.rejects(() => service.save({ featId: 'missing', changes: { name: 'X' }, expected: { entryHash: feat.revision.entryHash } }), error => error.code === 'UNKNOWN_FEAT');
});

test('valida texto, estruturas, duplicações e consistência de pré-requisitos', async () => {
  const service = new FeatService(new MockRepositoryService());
  const catalog = await service.list();
  const feat = catalog.feats.find(item => item.id === 'phb-2014-alerta');
  const payload = changes => ({ featId: feat.id, changes, expected: { entryHash: feat.revision.entryHash } });
  await assert.rejects(() => service.save(payload({ sourcePage: 0 })), error => error.code === 'INVALID_VALUE');
  await assert.rejects(() => service.save(payload({ prerequisite: '4º nível' })), error => error.code === 'INCONSISTENT_PREREQUISITES');
  await assert.rejects(() => service.save(payload({ prerequisites: [{ type: 'level', minimum: 4, label: '4º nível', path: 'x' }], prerequisite: '4º nível' })), error => error.code === 'INVALID_FIELD');
  await assert.rejects(() => service.save(payload({ choices: [{ id: 'x', label: 'X', count: 1 }, { id: 'x', label: 'Y', count: 1 }] })), error => error.code === 'INVALID_VALUE');
  const other = catalog.feats.find(item => item.id !== feat.id);
  await assert.rejects(() => service.save(payload({ name: other.name })), error => error.code === 'DUPLICATE_NAME');
});
