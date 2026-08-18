import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { test } from 'node:test';
import { SPELL_CONTENT_FILES } from '../../api/_lib/admin/config.mjs';
import { editSpellSource, parseSpellFiles, parseSpellSource } from '../../api/_lib/admin/spell-source.mjs';

const files = {};
for (const path of SPELL_CONTENT_FILES) files[path] = { content: await readFile(new URL(`../../${path}`, import.meta.url), 'utf8') };

test('mapeia dez catálogos e 1.185 registros reais sem executar JavaScript', () => {
  const registry = parseSpellFiles(files);
  assert.equal(registry.catalogs.length, 10);
  assert.equal(registry.spells.size, 1185);
  assert.deepEqual(registry.catalogs.map(item => item.spellIds.length), [361, 95, 21, 241, 280, 48, 62, 62, 1, 14]);
  assert.equal(registry.spells.get('sage-fire-lance').metadata.school, 'Escola não informada');
});

test('edita somente a magia e os campos solicitados em catálogo regular', () => {
  const path = 'data/phb-spells.js';
  const source = files[path].content;
  const before = parseSpellSource(source, path);
  const target = before.spells[0];
  const result = editSpellSource(source, path, target.id, { name: `${target.metadata.name} revisada`, ritual: !target.metadata.ritual, traits: ['Admin'] });
  const after = parseSpellSource(result.source, path);
  assert.equal(result.spell.metadata.name, `${target.metadata.name} revisada`);
  assert.equal(result.spell.metadata.ritual, !target.metadata.ritual);
  assert.deepEqual(result.spell.metadata.traits, ['Admin']);
  for (const spell of before.spells.slice(1)) assert.equal(after.spells.find(item => item.id === spell.id).raw, spell.raw);
});

test('materializa sobrescrita individual sobre os campos compartilhados do Sábio', () => {
  const path = 'data/homebrew-sage-spells.js';
  const source = files[path].content;
  const before = parseSpellSource(source, path);
  const result = editSpellSource(source, path, 'sage-fire-lance', { school: 'Evocação', classes: 'Sábio, Mago', material: 'uma brasa' });
  const after = parseSpellSource(result.source, path);
  assert.equal(result.spell.metadata.school, 'Evocação');
  assert.equal(result.spell.metadata.classes, 'Sábio, Mago');
  assert.equal(result.spell.metadata.material, 'uma brasa');
  assert.equal(after.spells.find(item => item.id === 'sage-ice-lance').metadata.school, 'Escola não informada');
  for (const spell of before.spells.filter(item => item.id !== 'sage-fire-lance')) assert.equal(after.spells.find(item => item.id === spell.id).raw, spell.raw);
});

test('rejeita ID ausente, sintaxe inválida e fonte sem catálogo inequívoco', () => {
  assert.throws(() => editSpellSource(files['data/phb-spells.js'].content, 'data/phb-spells.js', 'missing', { name: 'X' }), /não existe/i);
  assert.throws(() => parseSpellSource('const spells = [{', 'invalid.js'), /JavaScript inválido/i);
  assert.throws(() => parseSpellSource("const spells=[{id:'x',name:'X',level:1,school:'X',desc:'X'}]", 'invalid.js'), /catálogo/i);
});
