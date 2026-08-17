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

export const REPOSITORY_FILES = Object.freeze([
  ...Object.values(ART_FILES).map(item => item.path),
  'manifest.json'
]);

export const METADATA_CONTENT_FILES = Object.freeze([
  'data/classes.js',
  'data/tasha-artificer.js',
  'data/lyre-classes.js',
  'data/zagalhta-classes.js',
  'data/ryoko-classes.js',
  'data/blade-bone-benefit-classes.js',
  'data/homebrew-emissario.js',
  'data/homebrew-sage.js',
  'data/homebrew-spellblade-class.js',
  'data/cultivator-class.js',
  'data/homebrew-street-fighter.js',
  'data/lyre-subclasses.js',
  'data/zagalhta-specializations.js',
  'data/zagalhta-subclasses-standard.js',
  'data/zagalhta-subclasses-standard-2.js',
  'data/zagalhta-subclasses-standard-3.js',
  'data/blade-bone-benefit-subclasses.js',
  'data/ryoko-subclasses.js',
  'data/xanathar-subclasses.js',
  'data/tasha-subclasses.js',
  'data/scag-subclasses.js',
  'data/homebrew-paladin-bahamut.js'
]);

export const METADATA_REPOSITORY_FILES = Object.freeze([...METADATA_CONTENT_FILES, 'manifest.json']);

export const FEAT_CONTENT_FILES = Object.freeze([
  'data/feats/phb-2014-feats.js',
  'data/feats/ryoko-yokai-realms-feats.js',
  'data/feats/lyre-retia-feats.js'
]);

export const FEAT_REPOSITORY_FILES = Object.freeze([...FEAT_CONTENT_FILES, 'manifest.json']);
export const ALLOWED_REPOSITORY_FILES = new Set([...REPOSITORY_FILES, ...METADATA_REPOSITORY_FILES, ...FEAT_REPOSITORY_FILES]);

export const isProduction = () => process.env.VERCEL_ENV === 'production';
export const cookieName = () => isProduction() ? '__Host-grimorio_admin' : 'grimorio_admin_dev';

export function writeMode() {
  return process.env.GRIMORIO_ADMIN_WRITE_MODE === 'github' && isProduction() ? 'github' : 'mock';
}

export function imageHosts() {
  const extra = String(process.env.GRIMORIO_ADMIN_IMAGE_HOSTS || '')
    .split(',')
    .map(item => item.trim().toLowerCase())
    .filter(Boolean);
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
  const config = {
    token: process.env.GITHUB_TOKEN || '',
    owner: process.env.GITHUB_OWNER || '',
    repo: process.env.GITHUB_REPO || '',
    branch: process.env.GITHUB_BRANCH || ''
  };
  if (Object.values(config).some(value => !value)) {
    fail(503, 'GITHUB_NOT_CONFIGURED', 'A escrita no GitHub não está configurada completamente.');
  }
  if (!/^[A-Za-z0-9_.-]+$/.test(config.owner) || !/^[A-Za-z0-9_.-]+$/.test(config.repo)) {
    fail(503, 'GITHUB_NOT_CONFIGURED', 'O repositório GitHub configurado é inválido.');
  }
  if (config.branch.length > 255 || !/^[A-Za-z0-9._/-]+$/.test(config.branch) || config.branch.includes('..') || config.branch.startsWith('/') || config.branch.endsWith('/')) {
    fail(503, 'GITHUB_NOT_CONFIGURED', 'A branch GitHub configurada é inválida.');
  }
  return config;
}
