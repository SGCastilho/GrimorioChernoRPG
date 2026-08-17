import { fail } from './errors.mjs';

export const ART_FILES = Object.freeze({
  cover: Object.freeze({
    path: 'data/class-covers.js',
    variable: 'covers',
    fields: Object.freeze(['image', 'position', 'blur', 'overlay']),
    defaults: Object.freeze({ image: '', position: 'center 10%', blur: 2, overlay: 0.8 })
  }),
  detailArt: Object.freeze({
    path: 'data/class-detail-art.js',
    variable: 'detailArt',
    fields: Object.freeze(['image', 'position', 'blur', 'overlay', 'scale']),
    defaults: Object.freeze({ image: '', position: 'center 10%', blur: 2, overlay: 0.8, scale: 1.06 })
  })
});

export const RACE_ART_FILES = Object.freeze({
  cover: Object.freeze({
    path: 'data/race-covers.js',
    variable: 'covers',
    fields: Object.freeze(['image', 'alt', 'position']),
    defaults: Object.freeze({ image: '', alt: '', position: 'center' })
  }),
  detailArt: Object.freeze({
    path: 'data/race-detail-art.js',
    variable: 'detailArt',
    fields: Object.freeze(['image', 'alt', 'position', 'scale']),
    defaults: Object.freeze({ image: '', alt: '', position: 'center', scale: 1 })
  })
});

export const ALL_ART_FILES = Object.freeze([...new Set([
  ...Object.values(ART_FILES).map(item => item.path),
  ...Object.values(RACE_ART_FILES).map(item => item.path)
])]);

export const isProduction = () => process.env.VERCEL_ENV === 'production';
export const cookieName = () => isProduction() ? '__Host-grimorio_admin' : 'grimorio_admin_dev';

export function writeMode() {
  return process.env.GRIMORIO_ADMIN_WRITE_MODE === 'github' && isProduction() ? 'github' : 'mock';
}

export function imageHosts() {
  const extra = (process.env.GRIMORIO_ADMIN_IMAGE_HOSTS || '').split(',').map(item => item.trim().toLowerCase()).filter(Boolean);
  return new Set(['imgur.com', 'i.imgur.com', ...extra]);
}

export function authConfig() {
  const passwordHash = process.env.GRIMORIO_ADMIN_PASSWORD_HASH || '';
  const sessionSecret = process.env.GRIMORIO_SESSION_SECRET || '';
  if (!passwordHash || sessionSecret.length < 32) {
    fail(503, 'ADMIN_NOT_CONFIGURED', 'O painel administrativo ainda não foi configurado neste ambiente.');
  }
  return { passwordHash, sessionSecret };
}

export function githubConfig() {
  const result = {
    token: process.env.GITHUB_TOKEN || '',
    owner: process.env.GITHUB_OWNER || '',
    repo: process.env.GITHUB_REPO || '',
    branch: process.env.GITHUB_BRANCH || ''
  };
  if (Object.values(result).some(value => !value)) {
    fail(503, 'GITHUB_NOT_CONFIGURED', 'A escrita no GitHub não está configurada completamente.');
  }
  return result;
}
