import { readFile } from 'node:fs/promises';
import { ALL_ART_FILES, githubConfig, writeMode } from './config.mjs';
import { fail } from './errors.mjs';
import { sourceHash } from './art-source.mjs';

const ROOT = new URL('../../../', import.meta.url);
const FILE_PATHS = [...ALL_ART_FILES, 'manifest.json'];

export class MockRepositoryService {
  async readSnapshot() {
    const files = {};
    for (const path of FILE_PATHS) {
      const content = await readFile(new URL(path, ROOT), 'utf8');
      files[path] = { content, sha: `mock-${sourceHash(content)}` };
    }
    return { headSha: 'mock-local', treeSha: 'mock-local-tree', files };
  }

  async commitFiles({ files, message }) {
    const digest = sourceHash(Object.entries(files).map(([path, content]) => `${path}\0${content}`).join('\0'));
    return { commitSha: `mock-${digest}`, commitUrl: null, message, files: Object.fromEntries(Object.entries(files).map(([path, content]) => [path, `mock-${sourceHash(content)}`])) };
  }
}

export class GitHubRepositoryService {
  constructor(config = githubConfig(), fetchImplementation = fetch) {
    this.config = config;
    this.fetch = fetchImplementation;
    this.base = `https://api.github.com/repos/${encodeURIComponent(config.owner)}/${encodeURIComponent(config.repo)}`;
  }

  async request(path, options = {}) {
    let response;
    try {
      response = await this.fetch(`${this.base}${path}`, {
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
      fail(502, 'GITHUB_ERROR', 'O GitHub recusou a operação administrativa.');
    }
    return response.json();
  }

  async readSnapshot() {
    const branch = encodeURIComponent(this.config.branch);
    const reference = await this.request(`/git/ref/heads/${branch}`);
    const headSha = reference.object.sha;
    const commit = await this.request(`/git/commits/${headSha}`);
    const files = {};
    for (const path of FILE_PATHS) {
      const data = await this.request(`/contents/${path}?ref=${encodeURIComponent(headSha)}`);
      if (data.type !== 'file' || data.encoding !== 'base64') fail(502, 'INVALID_GITHUB_RESPONSE', 'O GitHub retornou um arquivo em formato inesperado.');
      files[path] = { content: Buffer.from(data.content.replace(/\s/g, ''), 'base64').toString('utf8'), sha: data.sha };
    }
    return { headSha, treeSha: commit.tree.sha, files };
  }

  async commitFiles({ snapshot, files, message }) {
    const tree = [];
    const fileShas = {};
    for (const [path, content] of Object.entries(files)) {
      const blob = await this.request('/git/blobs', { method: 'POST', body: JSON.stringify({ content: Buffer.from(content, 'utf8').toString('base64'), encoding: 'base64' }) });
      tree.push({ path, mode: '100644', type: 'blob', sha: blob.sha });
      fileShas[path] = blob.sha;
    }
    const newTree = await this.request('/git/trees', { method: 'POST', body: JSON.stringify({ base_tree: snapshot.treeSha, tree }) });
    const commit = await this.request('/git/commits', { method: 'POST', body: JSON.stringify({ message, tree: newTree.sha, parents: [snapshot.headSha] }) });
    await this.request(`/git/refs/heads/${encodeURIComponent(this.config.branch)}`, { method: 'PATCH', body: JSON.stringify({ sha: commit.sha, force: false }) });
    return { commitSha: commit.sha, commitUrl: commit.html_url || `https://github.com/${this.config.owner}/${this.config.repo}/commit/${commit.sha}`, message, files: fileShas };
  }
}

export function repositoryService() {
  return writeMode() === 'github' ? new GitHubRepositoryService() : new MockRepositoryService();
}
