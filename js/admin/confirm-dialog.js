function element(name, className, text) {
  const node = document.createElement(name);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}

export function confirmChanges(className, differences) {
  return new Promise(resolve => {
    const previouslyFocused = document.activeElement;
    const dialog = element('dialog', 'admin-dialog');
    const form = element('form');
    form.method = 'dialog';
    form.append(element('h2', '', 'Confirmar alteração?'), element('p', '', `Classe: ${className}`));
    const list = element('dl', 'admin-diff-list');
    for (const difference of differences) {
      const label = element('dt', '', difference.label);
      const values = element('dd');
      values.append(element('del', '', String(difference.before)), document.createTextNode(' → '), element('ins', '', String(difference.after)));
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
