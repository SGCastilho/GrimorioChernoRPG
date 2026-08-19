import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { test } from 'node:test';
import { FEAT_CONTENT_FILES } from '../../api/_lib/admin/config.mjs';
import { editFeatSource, parseFeatFiles, parseFeatSource } from '../../api/_lib/admin/feat-source.mjs';

const files = {};
for (const path of FEAT_CONTENT_FILES) files[path] = { content: await readFile(new URL(`../../${path}`, import.meta.url), 'utf8') };

test('mapeia os três catálogos e 109 talentos reais', () => {
  const registry = parseFeatFiles(files);
  assert.equal(registry.catalogs.length, 3);
  assert.equal(registry.feats.size, 109);
  assert.deepEqual(registry.catalogs.map(item => item.featIds.length), [42, 39, 28]);
  assert.equal(registry.feats.get('phb-2014-alerta').catalog.sourceId, 'phb-2014');
});

test('edita apenas o talento e os campos solicitados', () => {
  const path = 'data/feats/phb-2014-feats.js';
  const source = files[path].content;
  const before = parseFeatSource(source, path);
  const result = editFeatSource(source, path, 'phb-2014-alerta', { description: 'Descrição administrativa segura.', category: 'Geral' });
  const after = parseFeatSource(result.source, path);
  assert.equal(result.feat.metadata.description, 'Descrição administrativa segura.');
  assert.equal(result.feat.metadata.category, 'Geral');
  for (const feat of before.feats.filter(item => item.id !== 'phb-2014-alerta')) assert.equal(after.feats.find(item => item.id === feat.id).raw, feat.raw);
});

test('insere opcionais e preserva arrays estruturados válidos', () => {
  const path = 'data/feats/phb-2014-feats.js';
  const source = files[path].content;
  const choices = [{ id: 'ability', label: 'Habilidade', count: 1, options: ['Força', 'Destreza'] }];
  const result = editFeatSource(source, path, 'phb-2014-alerta', { originalName: 'Alert', aliases: ['Alert'], repeatable: false, choices });
  assert.equal(result.feat.metadata.originalName, 'Alert');
  assert.deepEqual(result.feat.metadata.aliases, ['Alert']);
  assert.deepEqual(result.feat.metadata.choices, choices);
});

test('rejeita ID ausente, sintaxe inválida e catálogo ambíguo', () => {
  assert.throws(() => editFeatSource(files['data/feats/phb-2014-feats.js'].content, 'data/feats/phb-2014-feats.js', 'missing', { name: 'X' }), /não existe/i);
  assert.throws(() => parseFeatSource('const feats = [{', 'invalid.js'), /JavaScript inválido/i);
  const duplicated = "var feats=[]; var feats=[]; registry.registerFeatCatalog({id:'x',sourceId:'x',label:'x',chapter:'x',pages:'1',feats});";
  assert.throws(() => parseFeatSource(duplicated, 'invalid.js'), /inválida|ambígua/i);
});
