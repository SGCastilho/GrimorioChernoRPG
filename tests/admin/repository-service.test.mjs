import assert from 'node:assert/strict';
import { test } from 'node:test';
import { ClassArtService } from '../../api/_lib/admin/class-art-service.mjs';
import { GitHubRepositoryService, MockRepositoryService, repositoryService } from '../../api/_lib/admin/repository.mjs';

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

test('serviço lista 28 classes e simula cover sem persistência', async () => {
  const service = new ClassArtService(new MockRepositoryService());
  const initial = await service.list();
  assert.equal(initial.classes.length, 28);
  const selected = initial.classes.find(item => item.id === 'sorcerer');
  const saved = await service.save({
    classId: 'sorcerer',
    changes: { cover: { overlay: 0.72 } },
    expected: { coverEntryHash: selected.revisions.coverEntryHash }
  });
  assert.equal(saved.class.cover.overlay, 0.72);
  assert.match(saved.commit.commitSha, /^mock-/);
  assert.notEqual((await service.list()).classes.find(item => item.id === 'sorcerer').cover.overlay, 0.72);
});

test('serviço simula detail art isolada e os dois mapas no mesmo commit', async () => {
  const service = new ClassArtService(new MockRepositoryService());
  const initial = await service.list();
  const selected = initial.classes.find(item => item.id === 'wizard');
  const detail = await service.save({
    classId: 'wizard',
    changes: { detailArt: { scale: 1.08 } },
    expected: { detailArtEntryHash: selected.revisions.detailArtEntryHash }
  });
  assert.equal(detail.class.detailArt.scale, 1.08);
  const both = await service.save({
    classId: 'wizard',
    changes: { cover: { blur: 4 }, detailArt: { overlay: 0.55 } },
    expected: {
      coverEntryHash: selected.revisions.coverEntryHash,
      detailArtEntryHash: selected.revisions.detailArtEntryHash
    }
  });
  assert.deepEqual(Object.keys(both.commit.files).sort(), ['data/class-covers.js', 'data/class-detail-art.js']);
});

test('serviço detecta conflito na mesma entrada', async () => {
  const service = new ClassArtService(new MockRepositoryService());
  await assert.rejects(() => service.save({
    classId: 'sorcerer',
    changes: { cover: { blur: 4 } },
    expected: { coverEntryHash: 'wrong-entry-hash-that-is-long-enough-1234567890' }
  }), error => error.status === 409 && error.code === 'CONFLICT');
});

test('GitHub cria blobs, árvore baseada no HEAD, commit e ref sem force', async () => {
  const calls = [];
  let blobIndex = 0;
  const fakeFetch = async (url, options) => {
    const body = options.body ? JSON.parse(options.body) : null;
    calls.push({ url, options, body });
    if (url.endsWith('/git/blobs')) return Response.json({ sha: `blob-${++blobIndex}` }, { status: 201 });
    if (url.endsWith('/git/trees')) return Response.json({ sha: 'tree-new' }, { status: 201 });
    if (url.endsWith('/git/commits')) return Response.json({ sha: 'commit-new', html_url: 'https://github.test/commit-new' }, { status: 201 });
    if (url.includes('/git/refs/heads/')) return Response.json({ ref: 'refs/heads/main' });
    return Response.json({}, { status: 500 });
  };
  const repository = new GitHubRepositoryService({ token: 'secret-sentinel', owner: 'owner', repo: 'repo', branch: 'main' }, fakeFetch);
  const result = await repository.commitFiles({
    snapshot: { headSha: 'head-old', treeSha: 'tree-old' },
    files: { 'data/class-covers.js': 'cover', 'data/class-detail-art.js': 'detail' },
    message: 'Grimório Admin: atualiza artes de sorcerer'
  });
  const treeCall = calls.find(call => call.url.endsWith('/git/trees'));
  const commitCall = calls.find(call => call.url.endsWith('/git/commits'));
  const refCall = calls.find(call => call.url.includes('/git/refs/heads/'));
  assert.equal(result.commitSha, 'commit-new');
  assert.equal(treeCall.body.base_tree, 'tree-old');
  assert.deepEqual(treeCall.body.tree.map(item => item.path).sort(), ['data/class-covers.js', 'data/class-detail-art.js']);
  assert.deepEqual(commitCall.body.parents, ['head-old']);
  assert.deepEqual(refCall.body, { sha: 'commit-new', force: false });
  assert.equal(JSON.stringify(result).includes('secret-sentinel'), false);
});

test('erros upstream são sanitizados e conflitos permanecem explícitos', async () => {
  const failure = new GitHubRepositoryService({ token: 'secret-sentinel', owner: 'o', repo: 'r', branch: 'main' }, async () => new Response(JSON.stringify({ message: 'secret-sentinel internal' }), { status: 500 }));
  await assert.rejects(() => failure.request('/git/ref/heads/main'), error => error.code === 'GITHUB_UNAVAILABLE' && !error.message.includes('sentinel'));
  const conflict = new GitHubRepositoryService({ token: 'x', owner: 'o', repo: 'r', branch: 'main' }, async () => new Response('{}', { status: 422 }));
  await assert.rejects(() => conflict.request('/git/refs/heads/main'), error => error.status === 409 && error.code === 'CONFLICT');
  const missing = new GitHubRepositoryService({ token: 'x', owner: 'o', repo: 'r', branch: 'main' }, async () => new Response('{}', { status: 404 }));
  await assert.rejects(() => missing.request('/contents/missing'), error => error.status === 404 && error.code === 'FILE_NOT_FOUND');
});

test('escrita GitHub só é ativada explicitamente em Production', () => {
  const names = ['VERCEL_ENV', 'GRIMORIO_ADMIN_WRITE_MODE', 'GITHUB_TOKEN', 'GITHUB_OWNER', 'GITHUB_REPO', 'GITHUB_BRANCH'];
  const previous = Object.fromEntries(names.map(name => [name, process.env[name]]));
  try {
    process.env.GRIMORIO_ADMIN_WRITE_MODE = 'github';
    process.env.GITHUB_TOKEN = 'test-token-never-sent';
    process.env.GITHUB_OWNER = 'owner';
    process.env.GITHUB_REPO = 'repo';
    process.env.GITHUB_BRANCH = 'main';
    process.env.VERCEL_ENV = 'preview';
    assert.ok(repositoryService() instanceof MockRepositoryService);
    process.env.VERCEL_ENV = 'development';
    assert.ok(repositoryService() instanceof MockRepositoryService);
    process.env.VERCEL_ENV = 'production';
    assert.ok(repositoryService() instanceof GitHubRepositoryService);
  } finally {
    for (const name of names) previous[name] === undefined ? delete process.env[name] : process.env[name] = previous[name];
  }
});
