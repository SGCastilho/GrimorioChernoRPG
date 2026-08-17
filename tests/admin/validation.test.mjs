import assert from 'node:assert/strict';
import { test } from 'node:test';
import { validateSavePayload, validationInternals } from '../../api/_lib/admin/validation.mjs';

process.env.GRIMORIO_ADMIN_IMAGE_HOSTS = 'cdn.example.com';
const ids = new Set(['sorcerer']);
const expected = { coverEntryHash: 'a'.repeat(64), detailArtEntryHash: 'b'.repeat(64) };

test('aceita somente URLs, paths e posições permitidos', () => {
  for (const image of ['', 'assets/class-detail-art/test.png', 'https://imgur.com/a.png', 'https://cdn.example.com/a.webp']) {
    assert.equal(validationInternals.validImage(image), true, image);
  }
  for (const image of ['http://imgur.com/a.png', 'https://evil.example/a.png', '../secret', 'assets/../secret', 'https://user:pass@imgur.com/a.png']) {
    assert.equal(validationInternals.validImage(image), false, image);
  }
  for (const position of ['center', 'center 10%', '25% 100%', 'left top']) assert.equal(validationInternals.validPosition(position), true, position);
  for (const position of ['101% center', 'center calc(2%)', 'center 10% extra', 'left right', 'top bottom']) assert.equal(validationInternals.validPosition(position), false, position);
});

test('valida cover, detail art, scale e limites numéricos', () => {
  const payload = {
    classId: 'sorcerer',
    changes: { cover: { overlay: 0.72 }, detailArt: { image: 'https://imgur.com/x.png', scale: 1.08 } },
    expected
  };
  assert.equal(validateSavePayload(payload, ids), payload);
  for (const changes of [{ cover: { blur: 13 } }, { cover: { overlay: 0.91 } }, { detailArt: { scale: 1.26 } }]) {
    assert.throws(() => validateSavePayload({ classId: 'sorcerer', changes, expected }, ids), /inválido/i);
  }
});

test('rejeita IDs, paths implícitos, campos extras e revisões ausentes', () => {
  assert.throws(() => validateSavePayload({ classId: 'wizard', changes: { cover: { overlay: 0.5 } }, expected }, ids), /não existe/i);
  assert.throws(() => validateSavePayload({ classId: 'sorcerer', path: 'manifest.json', changes: { cover: { overlay: 0.5 } }, expected }, ids), /não permitido/i);
  assert.throws(() => validateSavePayload({ classId: 'sorcerer', changes: { cover: { overlay: 0.5, token: 'x' } }, expected }, ids), /não permitido/i);
  assert.throws(() => validateSavePayload({ classId: 'sorcerer', changes: { cover: { overlay: 0.5 } }, expected: {} }, ids), /revisão/i);
});
