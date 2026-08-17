import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { test } from 'node:test';
import { METADATA_CONTENT_FILES } from '../../api/_lib/admin/config.mjs';
import { editManifestClassName, editMetadataSource, parseMetadataFiles, parseMetadataSource } from '../../api/_lib/admin/metadata-source.mjs';

const files = {};
for (const path of METADATA_CONTENT_FILES) files[path] = { content: await readFile(new URL(`../../${path}`, import.meta.url), 'utf8') };

test('mapeia as 27 classes e 382 subclasses reais sem lista enviada pelo cliente', () => {
  const registry = parseMetadataFiles(files);
  assert.equal(registry.classes.size, 27);
  assert.equal(registry.subclasses.size, 382);
  assert.equal(registry.classes.get('sorcerer').metadata.name, 'Feiticeiro');
  assert.equal(registry.subclasses.get('spellblade-battlemage').classId, 'spellblade');
});

test('edita somente metadados escalares da classe solicitada', () => {
  const path = 'data/classes.js';
  const source = files[path].content;
  const before = parseMetadataSource(source, path);
  const result = editMetadataSource(source, path, 'class', 'sorcerer', { desc: 'Descrição administrativa segura.', color: '#123456' });
  const after = parseMetadataSource(result.source, path);
  const sorcerer = after.find(item => item.type === 'class' && item.id === 'sorcerer');
  assert.equal(sorcerer.metadata.desc, 'Descrição administrativa segura.');
  assert.equal(sorcerer.metadata.color, '#123456');
  for (const entity of before.filter(item => item.id !== 'sorcerer')) assert.equal(after.find(item => item.type === entity.type && item.id === entity.id).raw, entity.raw);
});

test('edita subclasse isolada e insere fonte estrutural completa quando ausente', () => {
  const path = 'data/classes.js';
  const source = files[path].content;
  const target = parseMetadataSource(source, path).find(item => item.type === 'subclass' && !item.metadata.source.title);
  assert.ok(target);
  const sourceMetadata = { title: 'Fonte de teste', pages: '10–11', chapter: 'Capítulo de teste' };
  const result = editMetadataSource(source, path, 'subclass', target.id, { originalName: 'Test Name', source: sourceMetadata });
  assert.deepEqual(result.entity.metadata.source, sourceMetadata);
  assert.equal(result.entity.metadata.originalName, 'Test Name');
});

test('sincroniza somente os três índices derivados do nome da classe no manifesto', async () => {
  const source = await readFile(new URL('../../manifest.json', import.meta.url), 'utf8');
  const before = JSON.parse(source);
  const updated = editManifestClassName(source, 'sorcerer', 'Feiticeiro', 'Feiticeiro Arcano');
  const after = JSON.parse(updated);
  assert.equal(after.classIndex.find(item => item.id === 'sorcerer').name, 'Feiticeiro Arcano');
  assert.equal(after.classNames.includes('Feiticeiro'), false);
  assert.equal(after.classNames.includes('Feiticeiro Arcano'), true);
  assert.equal(after.subclassCounts['Feiticeiro Arcano'], before.subclassCounts.Feiticeiro);
  assert.equal(Object.hasOwn(after.subclassCounts, 'Feiticeiro'), false);
  assert.equal(after.version, before.version);
});

test('rejeita entidade ausente e JavaScript inválido', () => {
  assert.throws(() => editMetadataSource(files['data/classes.js'].content, 'data/classes.js', 'class', 'missing', { desc: 'x' }), /não existe/i);
  assert.throws(() => parseMetadataSource('window.GRIMORIO_CLASSES = [{', 'data/classes.js'), /JavaScript inválido/i);
});
