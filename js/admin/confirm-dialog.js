function element(name, className, text) {
  const node = document.createElement(name);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}

function displayValue(value) {
  const text = value && typeof value === 'object' ? JSON.stringify(value) : String(value);
  return text.length > 600 ? `${text.slice(0, 597)}…` : text;
}

export function confirmChanges(className, differences, entityLabel = 'Classe') {
  return new Promise(resolve => {
    const previouslyFocused = document.activeElement;
    const dialog = element('dialog', 'admin-dialog');
    const form = element('form');
    form.method = 'dialog';
    form.append(element('h2', '', 'Confirmar alteração?'), element('p', '', `${entityLabel}: ${className}`));
    const list = element('dl', 'admin-diff-list');
    for (const difference of differences) {
      const label = element('dt', '', difference.label);
      const values = element('dd');
      values.append(element('del', '', displayValue(difference.before)), document.createTextNode(' → '), element('ins', '', displayValue(difference.after)));
      list.append(label, values);
    }
    const actions = element('div', 'admin-dialog-actions');
    const cancel = element('button', 'admin-button admin-button-quiet', 'Cancelar');
    cancel.type = 'button';
    const confirm = element('button', 'admin-button admin-button-danger', 'Confirmar e salvar');
    confirm.type = 'submit';
    actions.append(cancel, confirm);
    form.append(list, element('p', 'admin-dialog-warning', 'Esta ação poderá criar um commit e iniciar um novo deployment.'), actions);
    dialog.append(form);
    document.body.append(dialog);
    const close = value => {
      dialog.close();
      dialog.remove();
      previouslyFocused?.focus?.();
      resolve(value);
    };
    cancel.addEventListener('click', () => close(false));
    form.addEventListener('submit', event => {
      event.preventDefault();
      close(true);
    });
    dialog.addEventListener('cancel', event => {
      event.preventDefault();
      close(false);
    });
    dialog.showModal();
    cancel.focus();
  });
}
