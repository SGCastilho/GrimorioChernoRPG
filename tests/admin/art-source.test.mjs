import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { test } from 'node:test';
import { editArtSource, parseArtSource } from '../../api/_lib/admin/art-source.mjs';

const covers = await readFile(new URL('../../data/class-covers.js', import.meta.url), 'utf8');
const details = await readFile(new URL('../../data/class-detail-art.js', import.meta.url), 'utf8');

test('analisa os dois mapas reais com as 28 entradas do manifesto', () => {
  assert.equal(Object.keys(parseArtSource(covers, 'covers').entries).length, 28);
  assert.equal(Object.keys(parseArtSource(details, 'detailArt').entries).length, 28);
});

test('edita somente a entrada e os campos solicitados', () => {
  const before = parseArtSource(covers, 'covers').entries;
  const result = editArtSource(covers, 'cover', 'sorcerer', { overlay: 0.72 });
  const after = parseArtSource(result.source, 'covers').entries;
  assert.equal(after.sorcerer.overlay, 0.72);
  assert.equal(after.sorcerer.image, before.sorcerer.image);
  for (const id of Object.keys(before)) if (id !== 'sorcerer') assert.deepEqual(after[id], before[id]);
  assert.equal(result.source.replace('overlay: 0.72', 'overlay: 0.80'), covers);
});

test('insere scale estruturalmente quando o campo está ausente', () => {
  const before = parseArtSource(details, 'detailArt').entries;
  assert.equal('scale' in before.bard, false);
  const result = editArtSource(details, 'detailArt', 'bard', { scale: 1.08 });
  const after = parseArtSource(result.source, 'detailArt').entries;
  assert.equal(after.bard.scale, 1.08);
  for (const id of Object.keys(before)) if (id !== 'bard') assert.deepEqual(after[id], before[id]);
});

test('rejeita ID ausente, sintaxe malformada e propriedades duplicadas', () => {
  assert.throws(() => editArtSource(covers, 'cover', 'missing', { overlay: 0.5 }), /não possui entrada/i);
  assert.throws(() => parseArtSource('const covers = {', 'covers'), /JavaScript inválido/i);
  assert.throws(() => parseArtSource("const covers = {'x': {image:'', image:'b'}};", 'covers'), /duplicada/i);
});
