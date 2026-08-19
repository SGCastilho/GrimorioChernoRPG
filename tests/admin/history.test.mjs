import assert from 'node:assert/strict';
import { test } from 'node:test';
import { AdminHistoryService } from '../../api/_lib/admin/history-service.mjs';
import { GitHubRepositoryService, MockRepositoryService } from '../../api/_lib/admin/repository.mjs';

process.env.GRIMORIO_ADMIN_WRITE_MODE = 'mock';
process.env.VERCEL_ENV = 'development';

test('histórico mock permanece offline e não inventa commits', async () => {
  const result = await new AdminHistoryService(new MockRepositoryService()).list();
  assert.equal(result.available, false);
  assert.equal(result.mode, 'mock');
  assert.deepEqual(result.commits, []);
});

test('GitHub lista somente commits do Grimório Admin e sanitiza a resposta', async () => {
  const calls = [];
  const fakeFetch = async (url, options) => {
    calls.push({ url, options });
    return Response.json([
      {
        sha: 'a'.repeat(40),
        commit: {
          message: 'Grimório Admin: atualiza artes de sorcerer\n\nDetalhes internos',
          author: { name: 'Administrador', date: '2026-08-17T20:00:00Z' },
          committer: { date: '2026-08-17T20:01:00Z' },
          verification: { verified: true }
        },
        author: { login: 'SGCastilho' }
      },
      {
        sha: 'b'.repeat(40),
        commit: { message: 'Commit manual comum', committer: { date: '2026-08-17T19:00:00Z' } }
      },
      {
        sha: 'sha-invalido',
        commit: { message: 'Grimório Admin: inválido', committer: { date: '2026-08-17T18:00:00Z' } }
      }
    ]);
  };
  const repository = new GitHubRepositoryService({ token: 'secret-sentinel', owner: 'owner', repo: 'repo', branch: 'release/admin' }, fakeFetch);
  const result = await repository.listAdminCommits();
  assert.equal(calls.length, 1);
  assert.match(calls[0].url, /\/commits\?sha=release%2Fadmin&per_page=100$/);
  assert.equal(result.branch, 'release/admin');
  assert.equal(result.repository, 'owner/repo');
  assert.equal(result.commits.length, 1);
  assert.deepEqual(result.commits[0], {
    sha: 'a'.repeat(40),
    shortSha: 'aaaaaaa',
    message: 'Grimório Admin: atualiza artes de sorcerer',
    author: 'SGCastilho',
    committedAt: '2026-08-17T20:01:00.000Z',
    verified: true,
    url: `https://github.com/owner/repo/commit/${'a'.repeat(40)}`
  });
  assert.equal(JSON.stringify(result).includes('secret-sentinel'), false);
});

test('histórico rejeita resposta inesperada do GitHub', async () => {
  const repository = new GitHubRepositoryService({ token: 'x', owner: 'o', repo: 'r', branch: 'main' }, async () => Response.json({ commits: [] }));
  await assert.rejects(() => repository.listAdminCommits(), error => error.code === 'INVALID_GITHUB_RESPONSE' && error.status === 502);
});
