import { adminRequest, AdminApiError, setCsrfToken } from './api-client.js';
import { renderClassArtEditor } from './class-art-editor.js';
import { renderHistoryView } from './history-view.js';
import { renderMetadataEditor } from './metadata-editor.js';
import { renderFeatEditor } from './feat-editor.js';
import { registerRoute, startRouter } from './router.js';

const shell = document.querySelector('#admin-app');
let session = null;

function element(name, className, text) {
  const node = document.createElement(name);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}

function setTitle(title) {
  document.title = title ? `${title} · Grimório Admin` : 'Grimório Admin';
}

function clearDirtyState() {
  window.onbeforeunload = null;
  window.GRIMORIO_ADMIN_HAS_UNSAVED = null;
}

function adminLayout(content) {
  clearDirtyState();
  const header = element('header', 'admin-header');
  const brand = element('a', 'admin-brand', 'Grimório Admin');
  brand.href = '/admin';
  brand.dataset.adminRoute = '';
  const nav = element('nav', 'admin-nav');
  nav.setAttribute('aria-label', 'Administração');
  for (const [href, text] of [['/admin', 'Dashboard'], ['/admin/class-art', 'Artes de Classes'], ['/admin/class-metadata', 'Metadados'], ['/admin/feats', 'Talentos'], ['/admin/history', 'Histórico']]) {
    const link = element('a', '', text);
    link.href = href;
    link.dataset.adminRoute = '';
    if (location.pathname.replace(/\/$/, '') === href) link.setAttribute('aria-current', 'page');
    nav.append(link);
  }
  const logout = element('button', 'admin-logout', 'Sair');
  logout.type = 'button';
  logout.addEventListener('click', doLogout);
  header.append(brand, nav, logout);
  const main = element('main', 'admin-main');
  main.id = 'admin-main';
  main.tabIndex = -1;
  main.append(content);
  shell.replaceChildren(header, main);
  return main;
}

async function requireSession(render) {
  if (!session?.authenticated) {
    renderLogin();
    return;
  }
  await render();
}

function renderLogin() {
  clearDirtyState();
  setTitle('Login');
  const main = element('main', 'admin-login');
  main.id = 'admin-main';
  main.tabIndex = -1;
  const card = element('section', 'admin-login-card');
  card.append(element('p', 'admin-eyebrow', 'Acesso restrito'), element('h1', '', 'Grimório Admin'), element('p', 'admin-lede', 'Entre com a credencial administrativa configurada no servidor.'));
  const form = element('form', 'admin-login-form');
  const label = element('label', 'admin-field');
  label.append(element('span', '', 'Senha'));
  const input = element('input');
  input.type = 'password';
  input.name = 'password';
  input.required = true;
  input.maxLength = 256;
  input.autocomplete = 'current-password';
  label.append(input);
  const button = element('button', 'admin-button admin-button-primary', 'Entrar');
  button.type = 'submit';
  const feedback = element('p', 'admin-feedback');
  feedback.setAttribute('role', 'alert');
  form.append(label, button, feedback);
  form.addEventListener('submit', async event => {
    event.preventDefault();
    button.disabled = true;
    feedback.textContent = 'Autenticando…';
    feedback.className = 'admin-feedback';
    try {
      session = await adminRequest('login', { method: 'POST', body: { password: input.value } });
      setCsrfToken(session.csrfToken);
      input.value = '';
      await import('./router.js').then(module => module.renderCurrentRoute());
    } catch (error) {
      feedback.className = 'admin-feedback admin-feedback-error';
      feedback.textContent = error instanceof AdminApiError ? error.message : 'Falha de autenticação.';
    } finally {
      button.disabled = false;
    }
  });
  card.append(form);
  main.append(card);
  shell.replaceChildren(main);
  queueMicrotask(() => input.focus());
}

async function doLogout() {
  try {
    await adminRequest('logout', { method: 'POST', body: {} });
  } catch {
    // O cookie local ainda é descartado visualmente; uma sessão inválida já não autoriza escrita.
  }
  session = null;
  setCsrfToken('');
  history.replaceState({}, '', '/admin');
  renderLogin();
}

function renderDashboard() {
  return requireSession(async () => {
    setTitle('Dashboard');
    const content = element('section', 'admin-dashboard');
    content.append(element('p', 'admin-eyebrow', 'Painel administrativo'), element('h1', '', 'Dashboard'));
    const intro = element('p', 'admin-lede', 'O GitHub permanece como fonte de verdade. Preview é temporário; Salvar valida e cria o commit quando Production está em modo github.');
    content.append(intro);
    const grid = element('div', 'admin-dashboard-grid');
    const editor = element('a', 'admin-dashboard-card');
    editor.href = '/admin/class-art';
    editor.dataset.adminRoute = '';
    editor.append(element('span', 'admin-card-kicker', 'MVP'), element('h2', '', 'Artes de Classes'), element('p', '', 'Cover e Detail Art das 27 classes, com preview, confirmação e controle de conflito.'));
    const metadata = element('a', 'admin-dashboard-card');
    metadata.href = '/admin/class-metadata';
    metadata.dataset.adminRoute = '';
    metadata.append(element('span', 'admin-card-kicker', 'Conteúdo'), element('h2', '', 'Metadados'), element('p', '', 'Edite campos permitidos das 27 classes e 382 subclasses sem tocar em IDs, progressões ou features.'));
    const feats = element('a', 'admin-dashboard-card');
    feats.href = '/admin/feats';
    feats.dataset.adminRoute = '';
    feats.append(element('span', 'admin-card-kicker', 'Conteúdo'), element('h2', '', 'Talentos'), element('p', '', 'Edite os 109 talentos dos catálogos PHB, Ryoko e Lyre com estruturas avançadas validadas.'));
    const history = element('a', 'admin-dashboard-card');
    history.href = '/admin/history';
    history.dataset.adminRoute = '';
    history.append(element('span', 'admin-card-kicker', 'Auditoria'), element('h2', '', 'Histórico'), element('p', '', 'Consulte os commits recentes criados pelo Grimório Admin diretamente no GitHub.'));
    grid.append(editor, metadata, feats, history);
    const mode = element('p', `admin-mode admin-mode-${session.mode}`, session.mode === 'github' ? 'Production: escrita GitHub habilitada' : 'Ambiente seguro: modo mock');
    content.append(grid, mode);
    adminLayout(content);
  });
}

function renderArt() {
  return requireSession(async () => {
    const main = adminLayout(element('p', 'admin-loading', 'Carregando editor…'));
    await renderClassArtEditor(main, setTitle);
  });
}

function renderHistory() {
  return requireSession(async () => {
    const main = adminLayout(element('p', 'admin-loading', 'Carregando histórico…'));
    await renderHistoryView(main, setTitle);
  });
}

function renderMetadata() {
  return requireSession(async () => {
    const main = adminLayout(element('p', 'admin-loading', 'Carregando editor…'));
    await renderMetadataEditor(main, setTitle);
  });
}

function renderFeats() {
  return requireSession(async () => {
    const main = adminLayout(element('p', 'admin-loading', 'Carregando editor…'));
    await renderFeatEditor(main, setTitle);
  });
}

registerRoute('/admin', renderDashboard);
registerRoute('/admin/class-art', renderArt);
registerRoute('/admin/class-metadata', renderMetadata);
registerRoute('/admin/feats', renderFeats);
registerRoute('/admin/history', renderHistory);

try {
  session = await adminRequest('session');
  if (session.authenticated) setCsrfToken(session.csrfToken);
} catch {
  session = null;
}
await startRouter();
