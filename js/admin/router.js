const routes = new Map();

const normalizedPath = () => location.pathname.length > 1 ? location.pathname.replace(/\/$/, '') : location.pathname;

export function registerRoute(path, render) {
  routes.set(path, render);
}

export async function navigate(path, replace = false) {
  if (replace) history.replaceState({}, '', path);
  else history.pushState({}, '', path);
  await renderCurrentRoute();
}

export async function renderCurrentRoute() {
  const render = routes.get(normalizedPath()) || routes.get('/admin');
  await render();
  document.querySelector('#admin-main')?.focus({ preventScroll: true });
}

export function startRouter() {
  addEventListener('popstate', renderCurrentRoute);
  document.addEventListener('click', event => {
    const link = event.target.closest('a[data-admin-route]');
    if (!link || event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    if (window.GRIMORIO_ADMIN_HAS_UNSAVED?.() && !window.confirm('Descartar as alterações não salvas antes de sair do editor?')) return;
    navigate(new URL(link.href).pathname);
  });
  return renderCurrentRoute();
}
