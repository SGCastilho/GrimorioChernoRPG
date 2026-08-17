import { adminRequest, AdminApiError, setCsrfToken } from './api-client.js';
import { renderClassArtEditor } from './class-art-editor.js';
import { renderRaceArtEditor } from './race-art-editor.js';
import { navigate, registerRoute, startRouter } from './router.js';

const shell = document.querySelector('#admin-app');
let session = null;

function element(name, className, text) {
  const node = document.createElement(name);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}

function setTitle(title) { document.title = title ? `${title} · Grimório Admin` : 'Grimório Admin'; }
function clearDirtyState() { window.onbeforeunload = null; window.GRIMORIO_ADMIN_HAS_UNSAVED = null; }

function adminLayout(content) {
  const header = element('header', 'admin-header');
  const brand = element('a', 'admin-brand'); brand.href = '/admin'; brand.dataset.adminRoute = ''; brand.textContent = 'Grimório Admin';
  const nav = element('nav', 'admin-nav'); nav.setAttribute('aria-label', 'Administração');
  for (const [href, text] of [['/admin', 'Dashboard'], ['/admin/class-art', 'Artes de Classes'], ['/admin/race-art', 'Artes de Raças'], ['/admin/history', 'Histórico']]) { const link = element('a', '', text); link.href = href; link.dataset.adminRoute = ''; if (location.pathname === href) link.setAttribute('aria-current', 'page'); nav.append(link); }
  const logout = element('button', 'admin-logout', 'Sair'); logout.type = 'button'; logout.addEventListener('click', doLogout);
  header.append(brand, nav, logout);
  const main = element('main', 'admin-main'); main.id = 'admin-main'; main.tabIndex = -1; main.append(content);
  shell.replaceChildren(header, main);
  return main;
}

async function requireSession(render) {
  if (!session?.authenticated) { await renderLogin(); return; }
  await render();
}

async function renderLogin() {
  clearDirtyState();
  setTitle('Login');
  const main = element('main', 'admin-login'); main.id = 'admin-main'; main.tabIndex = -1;
  const card = element('section', 'admin-login-card');
  card.append(element('p', 'admin-eyebrow', 'Acesso restrito'), element('h1', '', 'Grimório Admin'), element('p', 'admin-lead', 'Use a credencial configurada exclusivamente no servidor.'));
  const form = element('form');
  const label = element('label', 'admin-field'); label.append(element('span', '', 'Senha administrativa'));
  const password = document.createElement('input'); password.type = 'password'; password.name = 'password'; password.autocomplete = 'current-password'; password.required = true; password.maxLength = 256; label.append(password);
  const feedback = element('p', 'admin-feedback'); feedback.setAttribute('role', 'alert');
  const submit = element('button', 'admin-button admin-button-primary', 'Entrar'); submit.type = 'submit';
  form.append(label, feedback, submit); card.append(form); main.append(card); shell.replaceChildren(main);
  form.addEventListener('submit', async event => {
    event.preventDefault(); submit.disabled = true; feedback.textContent = 'Autenticando…';
    try {
      session = await adminRequest('login', { method: 'POST', body: { password: password.value } });
      password.value = ''; setCsrfToken(session.csrfToken); await navigate('/admin', true);
    } catch (error) {
      feedback.className = 'admin-feedback admin-feedback-error'; feedback.textContent = error instanceof AdminApiError ? error.message : 'Falha de autenticação.'; password.select();
    } finally { submit.disabled = false; }
  });
  password.focus();
}

async function doLogout() {
  if (window.GRIMORIO_ADMIN_HAS_UNSAVED?.() && !window.confirm('Descartar as alterações não salvas e sair?')) return;
  try { await adminRequest('logout', { method: 'POST' }); } catch { /* expirar localmente mesmo se a sessão já terminou */ }
  session = null; setCsrfToken(''); await navigate('/admin', true);
}

function renderDashboard() {
  return requireSession(async () => {
    clearDirtyState();
    setTitle('Dashboard');
    const content = element('div', 'admin-page');
    const hero = element('section', 'admin-dashboard-hero');
    hero.append(element('p', 'admin-eyebrow', 'Grimório 5.49.0'), element('h1', '', 'Painel Administrativo'), element('p', 'admin-lead', session.mode === 'github' ? 'Escrita real no GitHub ativa neste ambiente de produção.' : 'Modo mock ativo: operações são validadas sem persistir no GitHub.'));
    const cards = element('div', 'admin-dashboard-grid');
    const art = element('a', 'admin-module-card'); art.href = '/admin/class-art'; art.dataset.adminRoute = ''; art.append(element('h2', '', 'Artes de Classes'), element('p', '', 'Cover e Detail Art das 27 classes, com preview e commit atômico.'));
    const raceArt = element('a', 'admin-module-card'); raceArt.href = '/admin/race-art'; raceArt.dataset.adminRoute = ''; raceArt.append(element('h2', '', 'Artes de Raças'), element('p', '', 'Banners e ilustrações internas das 42 raças, com placeholders e preview.'));
    const history = element('a', 'admin-module-card admin-module-muted'); history.href = '/admin/history'; history.dataset.adminRoute = ''; history.append(element('h2', '', 'Histórico'), element('p', '', 'Área preparada para uma evolução futura.'));
    cards.append(art, raceArt, history); content.append(hero, cards); adminLayout(content);
  });
}

function renderArt() { return requireSession(async () => { const main = adminLayout(element('div')); await renderClassArtEditor(main, setTitle); }); }
function renderRaceArt() { return requireSession(async () => { const main = adminLayout(element('div')); await renderRaceArtEditor(main, setTitle); }); }

function renderHistory() {
  return requireSession(async () => {
    clearDirtyState();
    setTitle('Histórico');
    const empty = element('section', 'admin-empty'); empty.append(element('p', 'admin-eyebrow', 'Módulo registrado'), element('h1', '', 'Histórico'), element('p', '', 'Em breve: últimos commits criados pelo Grimório Admin.'));
    adminLayout(empty);
  });
}

registerRoute('/admin', renderDashboard);
registerRoute('/admin/class-art', renderArt);
registerRoute('/admin/race-art', renderRaceArt);
registerRoute('/admin/history', renderHistory);

try {
  session = await adminRequest('session');
  if (session.authenticated) setCsrfToken(session.csrfToken);
} catch { session = null; }
await startRouter();
