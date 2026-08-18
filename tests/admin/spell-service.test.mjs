import assert from 'node:assert/strict';
import { test } from 'node:test';
import { SpellService } from '../../api/_lib/admin/spell-service.mjs';
import { MockRepositoryService } from '../../api/_lib/admin/repository.mjs';

process.env.GRIMORIO_ADMIN_WRITE_MODE = 'mock';
process.env.VERCEL_ENV = 'development';

test('lista índice leve, abre detalhe e simula alteração sem persistir', async () => {
  const service = new SpellService(new MockRepositoryService());
  const index = await service.list();
  assert.equal(index.total, 1185);
  assert.equal(index.catalogs.length, 10);
  assert.equal(index.spells.length, 1185);
  assert.equal('desc' in index.spells[0], false);
  const opened = (await service.get('sage-fire-lance', 'sage-homebrew-spells')).spell;
  const saved = await service.save({ spellId: opened.id, catalogId: opened.catalogId, changes: { school: 'Evocação' }, expected: opened.revision });
  assert.equal(saved.spell.school, 'Evocação');
  assert.deepEqual(Object.keys(saved.commit.files), ['data/homebrew-sage-spells.js']);
  assert.equal((await service.get(opened.id, opened.catalogId)).spell.school, opened.school);
});

test('salva campos mecânicos e textos da mesma magia em um único arquivo', async () => {
  const service = new SpellService(new MockRepositoryService());
  const opened = (await service.get('cultivator-animate-energy', 'cultivator-homebrew-spells')).spell;
  const saved = await service.save({
    spellId: opened.id,
    catalogId: opened.catalogId,
    changes: { level: 2, ritual: false, concentration: true, higher: 'Texto revisado.', traits: ['Cultivador', 'Admin'] },
    expected: opened.revision
  });
  assert.equal(saved.spell.level, 2);
  assert.equal(saved.spell.ritual, false);
  assert.equal(saved.spell.concentration, true);
  assert.deepEqual(saved.spell.traits, ['Cultivador', 'Admin']);
});

test('bloqueia conflito, catálogo, path, campo e ID arbitrários', async () => {
  const service = new SpellService(new MockRepositoryService());
  const opened = (await service.get('sage-fire-lance', 'sage-homebrew-spells')).spell;
  const body = changes => ({ spellId: opened.id, catalogId: opened.catalogId, changes, expected: opened.revision });
  await assert.rejects(() => service.save({ ...body({ name: 'X' }), expected: { entryHash: 'a'.repeat(64) } }), error => error.code === 'CONFLICT');
  await assert.rejects(() => service.save({ ...body({ name: 'X' }), catalogId: 'missing' }), error => error.code === 'UNKNOWN_SPELL_CATALOG');
  await assert.rejects(() => service.save({ ...body({ name: 'X' }), path: 'data/classes.js' }), error => error.code === 'INVALID_FIELD');
  await assert.rejects(() => service.save(body({ id: 'evil' })), error => error.code === 'INVALID_FIELD');
  await assert.rejects(() => service.save({ ...body({ name: 'X' }), spellId: 'missing' }), error => error.code === 'UNKNOWN_SPELL');
});

test('valida níveis, páginas, textos, arrays, booleanos e recursos sem nível', async () => {
  const service = new SpellService(new MockRepositoryService());
  const opened = (await service.get('sage-fire-lance', 'sage-homebrew-spells')).spell;
  const payload = changes => ({ spellId: opened.id, catalogId: opened.catalogId, changes, expected: opened.revision });
  await assert.rejects(() => service.save(payload({ level: 10 })), error => error.code === 'INVALID_VALUE');
  await assert.rejects(() => service.save(payload({ sourcePage: 0 })), error => error.code === 'INVALID_VALUE');
  await assert.rejects(() => service.save(payload({ ritual: 'true' })), error => error.code === 'INVALID_VALUE');
  await assert.rejects(() => service.save(payload({ traits: ['A', 'a'] })), error => error.code === 'INVALID_VALUE');
  await assert.rejects(() => service.save(payload({ level: null, levelLabel: '' })), error => error.code === 'INCOMPLETE_SPELL_LEVEL');
  await assert.rejects(() => service.save(payload({ name: opened.name })), error => error.code === 'NO_CHANGES');
});
