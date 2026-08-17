import assert from 'node:assert/strict';
import { test } from 'node:test';
import { GitHubRepositoryService, MockRepositoryService } from '../../api/_lib/admin/repository.mjs';
import { ClassArtService } from '../../api/_lib/admin/class-art-service.mjs';

process.env.GRIMORIO_ADMIN_WRITE_MODE = 'mock';
process.env.VERCEL_ENV = 'development';

test('mock lê fontes reais e nunca escreve no disco', async () => {
  const repository = new MockRepositoryService();
  const snapshot = await repository.readSnapshot();
  assert.match(snapshot.files['data/class-covers.js'].content, /const covers/);
  const result = await repository.commitFiles({ files: { 'data/class-covers.js': 'changed' }, message: 'test' });
  assert.match(result.commitSha, /^mock-/);
  const again = await repository.readSnapshot();
  assert.equal(again.files['data/class-covers.js'].content, snapshot.files['data/class-covers.js'].content);
});

test('serviço lista 27 classes e simula alteração sem persistência', async () => {
  const service = new ClassArtService(new MockRepositoryService());
  const initial = await service.list();
  assert.equal(initial.classes.length, 27);
  const selected = initial.classes.find(item => item.id === 'sorcerer');
  const saved = await service.save({ classId: 'sorcerer', changes: { cover: { overlay: .72 }, detailArt: { scale: 1.08 } }, expected: { coverFileSha: initial.revisions.coverFileSha, coverEntryHash: selected.revisions.coverEntryHash, detailFileSha: initial.revisions.detailFileSha, detailEntryHash: selected.revisions.detailEntryHash } });
  assert.equal(saved.class.cover.overlay, .72); assert.equal(saved.class.detailArt.scale, 1.08); assert.match(saved.commit.commitSha, /^mock-/);
  assert.notEqual((await service.list()).classes.find(item => item.id === 'sorcerer').cover.overlay, .72);
});

test('serviço detecta conflito na mesma entrada', async () => {
  const service = new ClassArtService(new MockRepositoryService());
  const initial = await service.list();
  await assert.rejects(() => service.save({ classId: 'sorcerer', changes: { cover: { blur: 4 } }, expected: { coverFileSha: initial.revisions.coverFileSha, coverEntryHash: 'wrong-entry-hash', detailFileSha: initial.revisions.detailFileSha, detailEntryHash: 'unused-value' } }), error => error.status === 409 && error.code === 'CONFLICT');
});

test('GitHub cria blobs, uma árvore, um commit e atualiza ref sem force', async () => {
  const calls = [];
  const replies = [
    { sha: 'blob-cover' }, { sha: 'blob-detail' }, { sha: 'tree-new' }, { sha: 'commit-new', html_url: 'https://github.test/commit-new' }, { ref: 'heads/main' }
  ];
  const fakeFetch = async (url, options) => { calls.push({ url, options, body: options.body ? JSON.parse(options.body) : null }); return new Response(JSON.stringify(replies.shift()), { status: 200, headers: { 'content-type': 'application/json' } }); };
  const repository = new GitHubRepositoryService({ token: 'secret-sentinel', owner: 'owner', repo: 'repo', branch: 'main' }, fakeFetch);
  const result = await repository.commitFiles({ snapshot: { headSha: 'head-old', treeSha: 'tree-old' }, files: { 'data/class-covers.js': 'cover', 'data/class-detail-art.js': 'detail' }, message: 'Grimório Admin: atualiza artes de sorcerer' });
  assert.equal(result.commitSha, 'commit-new'); assert.equal(calls.length, 5);
  assert.deepEqual(calls[2].body.tree.map(item => item.path), ['data/class-covers.js', 'data/class-detail-art.js']);
  assert.deepEqual(calls[3].body.parents, ['head-old']);
  assert.deepEqual(calls[4].body, { sha: 'commit-new', force: false });
  assert.equal(JSON.stringify(result).includes('secret-sentinel'), false);
});

test('erros upstream são sanitizados e conflitos permanecem explícitos', async () => {
  const failure = new GitHubRepositoryService({ token: 'secret-sentinel', owner: 'o', repo: 'r', branch: 'main' }, async () => new Response(JSON.stringify({ message: 'secret-sentinel internal' }), { status: 500 }));
  await assert.rejects(() => failure.request('/git/ref/heads/main'), error => error.code === 'GITHUB_ERROR' && !error.message.includes('sentinel'));
  const conflict = new GitHubRepositoryService({ token: 'x', owner: 'o', repo: 'r', branch: 'main' }, async () => new Response('{}', { status: 422 }));
  await assert.rejects(() => conflict.request('/git/refs/heads/main'), error => error.status === 409 && error.code === 'CONFLICT');
  const missing = new GitHubRepositoryService({ token: 'x', owner: 'o', repo: 'r', branch: 'main' }, async () => new Response('{}', { status: 404 }));
  await assert.rejects(() => missing.request('/contents/missing'), error => error.status === 404 && error.code === 'FILE_NOT_FOUND');
});
