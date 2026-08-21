import assert from 'node:assert/strict';
import { test } from 'node:test';
import { MetadataService } from '../../api/_lib/admin/metadata-service.mjs';
import { MockRepositoryService } from '../../api/_lib/admin/repository.mjs';

process.env.GRIMORIO_ADMIN_WRITE_MODE = 'mock';
process.env.VERCEL_ENV = 'development';

test('lista e simula metadados de classe sem persistir no disco', async () => {
  const service = new MetadataService(new MockRepositoryService());
  const catalog = await service.list();
  assert.equal(catalog.classes.length, 28);
  assert.equal(catalog.subclasses.length, 400);
  const entity = catalog.classes.find(item => item.id === 'sorcerer');
  const saved = await service.save({ entityType: 'class', entityId: entity.id, changes: { ability: 'Carisma e teste' }, expected: { entryHash: entity.revision.entryHash } });
  assert.equal(saved.entity.ability, 'Carisma e teste');
  assert.deepEqual(Object.keys(saved.commit.files), ['data/classes.js']);
  assert.equal((await service.list()).classes.find(item => item.id === 'sorcerer').ability, entity.ability);
});

test('nome de classe sincroniza conteúdo e manifesto no mesmo commit simulado', async () => {
  const service = new MetadataService(new MockRepositoryService());
  const entity = (await service.list()).classes.find(item => item.id === 'sorcerer');
  const saved = await service.save({ entityType: 'class', entityId: entity.id, changes: { name: 'Feiticeiro Arcano' }, expected: { entryHash: entity.revision.entryHash } });
  assert.equal(saved.entity.name, 'Feiticeiro Arcano');
  assert.deepEqual(Object.keys(saved.commit.files).sort(), ['data/classes.js', 'manifest.json']);
});

test('subclasse isolada não inclui paths recebidos e conflito de revisão retorna 409', async () => {
  const service = new MetadataService(new MockRepositoryService());
  const entity = (await service.list()).subclasses.find(item => item.id === 'spellblade-battlemage');
  const saved = await service.save({ entityType: 'subclass', entityId: entity.id, changes: { desc: 'Descrição editada.' }, expected: { entryHash: entity.revision.entryHash } });
  assert.deepEqual(Object.keys(saved.commit.files), ['data/homebrew-spellblade-class.js']);
  await assert.rejects(() => service.save({ entityType: 'subclass', entityId: entity.id, changes: { desc: 'Outra.' }, expected: { entryHash: 'a'.repeat(64) } }), error => error.status === 409 && error.code === 'CONFLICT');
  await assert.rejects(() => service.save({ entityType: 'subclass', entityId: entity.id, path: 'manifest.json', changes: { desc: 'Outra.' }, expected: { entryHash: entity.revision.entryHash } }), error => error.status === 400 && error.code === 'INVALID_FIELD');
});

test('valida campos, números, fonte incompleta, ID e nome duplicado', async () => {
  const service = new MetadataService(new MockRepositoryService());
  const catalog = await service.list();
  const cls = catalog.classes.find(item => item.id === 'sorcerer');
  for (const changes of [{ color: 'red' }, { tablePage: 0 }, { sigilKey: '../x' }, { hitDie: 'd100' }]) {
    await assert.rejects(() => service.save({ entityType: 'class', entityId: cls.id, changes, expected: { entryHash: cls.revision.entryHash } }), error => error.code === 'INVALID_VALUE');
  }
  await assert.rejects(() => service.save({ entityType: 'class', entityId: cls.id, changes: { name: 'Mago' }, expected: { entryHash: cls.revision.entryHash } }), error => error.code === 'DUPLICATE_NAME');
  await assert.rejects(() => service.save({ entityType: 'class', entityId: 'missing', changes: { desc: 'x' }, expected: { entryHash: 'a'.repeat(64) } }), error => error.code === 'UNKNOWN_ENTITY');
  const legacy = catalog.subclasses.find(item => !item.source.title);
  await assert.rejects(() => service.save({ entityType: 'subclass', entityId: legacy.id, changes: { source: { title: 'Apenas título' } }, expected: { entryHash: legacy.revision.entryHash } }), error => error.code === 'INCOMPLETE_SOURCE');
});
