import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { githubConfig, REPOSITORY_FILES, writeMode } from './config.mjs';
import { fail } from './errors.mjs';
import { sourceHash } from './art-source.mjs';

const encodedPath = value => String(value).split('/').map(encodeURIComponent).join('/');

export class MockRepositoryService {
  async readSnapshot() {
    const files = {};
    for (const filePath of REPOSITORY_FILES) {
      const content = await readFile(path.join(process.cwd(), filePath), 'utf8');
      files[filePath] = { content, sha: `mock-${sourceHash(content)}` };
    }
    return { headSha: 'mock-local', treeSha: 'mock-local-tree', files };
  }

  async commitFiles({ files, message }) {
    const digest = sourceHash(Object.entries(files).map(([filePath, content]) => `${filePath}\0${content}`).join('\0'));
    return {
      commitSha: `mock-${digest}`,
      commitUrl: null,
      message,
      files: Object.fromEntries(Object.entries(files).map(([filePath, content]) => [filePath, `mock-${sourceHash(content)}`]))
    };
  }
}

export class GitHubRepositoryService {
  constructor(config = githubConfig(), fetchImplementation = globalThis.fetch) {
    this.config = config;
    this.fetch = fetchImplementation;
    this.base = `https://api.github.com/repos/${encodeURIComponent(config.owner)}/${encodeURIComponent(config.repo)}`;
  }

  async request(apiPath, options = {}) {
    let response;
    try {
      response = await this.fetch(`${this.base}${apiPath}`, {
        ...options,
        headers: {
          Accept: 'application/vnd.github+json',
          Authorization: `Bearer ${this.config.token}`,
          'Content-Type': 'application/json',
          'User-Agent': 'grimorio-admin',
          'X-GitHub-Api-Version': '2026-03-10',
          ...options.headers
        }
      });
    } catch {
      fail(502, 'GITHUB_UNAVAILABLE', 'O GitHub está indisponível no momento.');
    }
    if (!response.ok) {
      if (response.status === 404) fail(404, 'FILE_NOT_FOUND', 'Um arquivo configurado não foi encontrado no GitHub.');
      if (response.status === 409 || response.status === 422) fail(409, 'CONFLICT', 'O repositório mudou durante o salvamento. Recarregue os dados.');
      if (response.status === 401 || response.status === 403) fail(502, 'GITHUB_AUTH_FAILED', 'O GitHub recusou a credencial configurada.');
      if (response.status === 429 || response.status >= 500) fail(502, 'GITHUB_UNAVAILABLE', 'O GitHub está indisponível no momento.');
      fail(502, 'GITHUB_ERROR', 'O GitHub recusou a operação administrativa.');
    }
    return response.json();
  }

  async readSnapshot() {
    const branchPath = encodedPath(this.config.branch);
    const reference = await this.request(`/git/ref/heads/${branchPath}`);
    const headSha = reference.object.sha;
    const commit = await this.request(`/git/commits/${encodeURIComponent(headSha)}`);
    const entries = await Promise.all(REPOSITORY_FILES.map(async filePath => {
      const data = await this.request(`/contents/${encodedPath(filePath)}?ref=${encodeURIComponent(headSha)}`);
      if (data.type !== 'file' || data.encoding !== 'base64') fail(502, 'INVALID_GITHUB_RESPONSE', 'O GitHub retornou um arquivo em formato inesperado.');
      return [filePath, { content: Buffer.from(String(data.content).replace(/\s/g, ''), 'base64').toString('utf8'), sha: data.sha }];
    }));
    return { headSha, treeSha: commit.tree.sha, files: Object.fromEntries(entries) };
  }

  async commitFiles({ snapshot, files, message }) {
    const blobEntries = await Promise.all(Object.entries(files).map(async ([filePath, content]) => {
      const blob = await this.request('/git/blobs', {
        method: 'POST',
        body: JSON.stringify({ content: Buffer.from(content, 'utf8').toString('base64'), encoding: 'base64' })
      });
      return { filePath, sha: blob.sha };
    }));
    const tree = blobEntries.map(({ filePath, sha }) => ({ path: filePath, mode: '100644', type: 'blob', sha }));
    const newTree = await this.request('/git/trees', {
      method: 'POST',
      body: JSON.stringify({ base_tree: snapshot.treeSha, tree })
    });
    const commit = await this.request('/git/commits', {
      method: 'POST',
      body: JSON.stringify({ message, tree: newTree.sha, parents: [snapshot.headSha] })
    });
    await this.request(`/git/refs/heads/${encodedPath(this.config.branch)}`, {
      method: 'PATCH',
      body: JSON.stringify({ sha: commit.sha, force: false })
    });
    return {
      commitSha: commit.sha,
      commitUrl: commit.html_url || `https://github.com/${this.config.owner}/${this.config.repo}/commit/${commit.sha}`,
      message,
      files: Object.fromEntries(blobEntries.map(({ filePath, sha }) => [filePath, sha]))
    };
  }
}

export function repositoryService() {
  return writeMode() === 'github' ? new GitHubRepositoryService() : new MockRepositoryService();
}
