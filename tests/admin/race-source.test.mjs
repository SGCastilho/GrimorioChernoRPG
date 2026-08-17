import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { test } from 'node:test';
import { RACE_CONTENT_FILES } from '../../api/_lib/admin/config.mjs';
import { editManifestRaceName, editRaceFiles, parseRaceFiles } from '../../api/_lib/admin/race-source.mjs';

const files = {};
for (const path of RACE_CONTENT_FILES) files[path] = { content: await readFile(new URL(`../../${path}`, import.meta.url), 'utf8') };

const findSubrace = (registry, raceId, subraceId) => [...registry.subraces.values()].find(item => item.raceId === raceId && item.id === subraceId);

test('mapeia as 42 raças e 368 subraças com sobreposições efetivas', () => {
  const registry = parseRaceFiles(files);
  assert.equal(registry.races.size, 42);
  assert.equal(registry.subraces.size, 368);
  assert.equal(registry.races.get('arhcoon').metadata.meta.speed, '9 m (30 pés)');
  assert.match(findSubrace(registry, 'arhcoon', 'city-arhcoon').metadata.description, /Arhcoons urbanos/);
  assert.equal([...registry.subraces.values()].filter(item => !item.metadata.description).length, 0);
});

test('edita descrição Lyre no arquivo de fase sem tocar na definição-base', () => {
  const before = parseRaceFiles(files);
  const originalBase = files['data/lyre-races.js'].content;
  const result = editRaceFiles(files, 'subrace', 'arhcoon', 'city-arhcoon', { description: 'Descrição administrativa da subraça.' });
  assert.deepEqual(Object.keys(result.files), ['data/lyre-races-phase2-text.js']);
  assert.equal(files['data/lyre-races.js'].content, originalBase);
  assert.equal(result.entity.metadata.description, 'Descrição administrativa da subraça.');
  const updated = Object.fromEntries(Object.entries(files).map(([path, file]) => [path, { content: result.files[path] || file.content }]));
  const after = parseRaceFiles(updated);
  for (const [key, item] of before.subraces) if (item.id !== 'city-arhcoon' || item.raceId !== 'arhcoon') assert.deepEqual(after.subraces.get(key).metadata, item.metadata);
});

test('edita fábrica Blade e objeto Zagalhta preservando IDs derivados', () => {
  const blade = editRaceFiles(files, 'subrace', 'arhcoon', 'tanuki', { name: 'Tanuki Administrativo', ability: 'Carisma +2' });
  assert.deepEqual(Object.keys(blade.files), ['data/blade-bone-benefit-races.js']);
  assert.equal(blade.entity.id, 'tanuki');
  assert.equal(blade.entity.metadata.name, 'Tanuki Administrativo');
  const zagalhta = editRaceFiles(files, 'subrace', 'vanquis', 'space-corpse', { description: 'Descrição exolunar revisada.' });
  assert.deepEqual(Object.keys(zagalhta.files), ['data/zagalhta-exolunar-races.js']);
  assert.equal(zagalhta.entity.id, 'space-corpse');
});

test('edita raça em base e fase e sincroniza somente raceIndex no manifesto', async () => {
  const result = editRaceFiles(files, 'race', 'arhcoon', undefined, { summary: 'Resumo seguro.', meta: { speed: '10 m (33 pés)' } });
  assert.deepEqual(Object.keys(result.files).sort(), ['data/lyre-races-phase2-text.js', 'data/lyre-races.js']);
  assert.equal(result.entity.metadata.summary, 'Resumo seguro.');
  assert.equal(result.entity.metadata.meta.speed, '10 m (33 pés)');
  const manifest = await readFile(new URL('../../manifest.json', import.meta.url), 'utf8');
  const updated = editManifestRaceName(manifest, 'arhcoon', 'Arhcoon', 'Arhcoon Administrativo');
  const beforeJson = JSON.parse(manifest); const afterJson = JSON.parse(updated);
  assert.equal(afterJson.raceIndex.find(item => item.id === 'arhcoon').name, 'Arhcoon Administrativo');
  afterJson.raceIndex.find(item => item.id === 'arhcoon').name = 'Arhcoon';
  assert.deepEqual(afterJson, beforeJson);
});

test('rejeita entidade ausente, sintaxe inválida e campo sem origem segura', () => {
  assert.throws(() => editRaceFiles(files, 'race', 'missing', undefined, { name: 'X' }), /não existe/i);
  const invalid = { ...files, 'data/lyre-races.js': { content: 'window.GRIMORIO_RACES=[{' } };
  assert.throws(() => parseRaceFiles(invalid), /JavaScript inválido/i);
  assert.throws(() => editRaceFiles(files, 'subrace', 'arhcoon', 'tanuki', { originalName: 'Outro' }), /origem editável segura/i);
});
