import { adminRequest, AdminApiError } from './api-client.js';

const dateFormatter = new Intl.DateTimeFormat('pt-BR', {
  dateStyle: 'medium',
  timeStyle: 'short'
});

function node(name, className, text) {
  const element = document.createElement(name);
  if (className) element.className = className;
  if (text !== undefined) element.textContent = text;
  return element;
}

function friendlyError(error) {
  if (!(error instanceof AdminApiError)) return 'Não foi possível carregar o histórico.';
  const messages = {
    UNAUTHENTICATED: 'Sua sessão expirou. Entre novamente.',
    GITHUB_UNAVAILABLE: 'O GitHub está indisponível no momento.',
    GITHUB_AUTH_FAILED: 'A credencial GitHub configurada foi recusada.',
    FILE_NOT_FOUND: 'O repositório ou a branch configurada não foi encontrado.',
    NETWORK_ERROR: 'Não foi possível acessar a API administrativa.'
  };
  return messages[error.code] || error.message;
}

function historyItem(commit) {
  const item = node('li', 'admin-history-item');
  const heading = node('div', 'admin-history-item-heading');
  const message = node('h2', '', commit.message);
  const sha = node('code', 'admin-history-sha', commit.shortSha);
  heading.append(message, sha);
  const metadata = node('p', 'admin-history-meta');
  const time = node('time', '', dateFormatter.format(new Date(commit.committedAt)));
  time.dateTime = commit.committedAt;
  metadata.append(document.createTextNode(`${commit.author} · `), time);
  if (commit.verified) metadata.append(document.createTextNode(' · assinatura verificada'));
  const link = node('a', 'admin-button admin-button-secondary', 'Abrir commit no GitHub');
  link.href = commit.url;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  item.append(heading, metadata, link);
  return item;
}

export async function renderHistoryView(main, setTitle) {
  setTitle('Histórico');
  main.replaceChildren(node('p', 'admin-loading', 'Consultando commits do Grimório Admin…'));
  let history;
  try {
    history = await adminRequest('history');
  } catch (error) {
    const failure = node('section', 'admin-empty');
    failure.append(node('p', 'admin-eyebrow', 'Histórico'), node('h1', '', 'Não foi possível consultar os commits'), node('p', 'admin-lede', friendlyError(error)));
    main.replaceChildren(failure);
    return;
  }

  const page = node('section', 'admin-history');
  const heading = node('div', 'admin-page-heading');
  const headingText = node('div');
  headingText.append(
    node('p', 'admin-eyebrow', 'Auditoria Git-backed'),
    node('h1', '', 'Histórico'),
    node('p', 'admin-lede', 'Commits recentes criados pelo Grimório Admin. O GitHub permanece como registro oficial, versionado e auditável desta listagem.')
  );
  const mode = node('span', `admin-mode admin-mode-${history.mode}`, history.mode === 'github' ? 'Histórico GitHub' : 'Modo mock');
  heading.append(headingText, mode);
  page.append(heading);

  if (!history.available) {
    const unavailable = node('div', 'admin-history-notice');
    unavailable.append(
      node('h2', '', 'Consulta desativada no modo mock'),
      node('p', '', 'Development e Preview não usam o token GitHub. O histórico real fica disponível somente em Production com escrita GitHub habilitada.')
    );
    page.append(unavailable);
  } else {
    const toolbar = node('div', 'admin-history-toolbar');
    toolbar.append(node('p', '', `${history.repository} · branch ${history.branch}`));
    const refresh = node('button', 'admin-button admin-button-secondary', 'Atualizar');
    refresh.type = 'button';
    refresh.addEventListener('click', () => renderHistoryView(main, setTitle));
    toolbar.append(refresh);
    page.append(toolbar);
    if (!history.commits.length) {
      const empty = node('div', 'admin-history-notice');
      empty.append(node('h2', '', 'Nenhum commit administrativo encontrado'), node('p', '', 'A listagem considera mensagens iniciadas por “Grimório Admin:”.'));
      page.append(empty);
    } else {
      const list = node('ol', 'admin-history-list');
      for (const commit of history.commits) list.append(historyItem(commit));
      page.append(list);
    }
  }
  main.replaceChildren(page);
}
