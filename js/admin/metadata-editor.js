import { adminRequest, AdminApiError } from './api-client.js';
import { confirmChanges } from './confirm-dialog.js';

const classFields = [
  { field: 'name', label: 'Nome', group: 'Identidade', required: true, max: 100 },
  { field: 'originalName', label: 'Nome original', group: 'Identidade', max: 100 },
  { field: 'desc', label: 'Descrição', group: 'Apresentação', textarea: true, required: true, max: 16000 },
  { field: 'hitDie', label: 'Dado de vida', group: 'Mecânica', required: true, pattern: 'd(4|6|8|10|12|20)', max: 4 },
  { field: 'ability', label: 'Habilidade principal', group: 'Mecânica', required: true, max: 200 },
  { field: 'saves', label: 'Salvaguardas', group: 'Mecânica', required: true, max: 300 },
  { field: 'armor', label: 'Armaduras', group: 'Proficiências', textarea: true, required: true, max: 1000 },
  { field: 'weapons', label: 'Armas', group: 'Proficiências', textarea: true, required: true, max: 1000 },
  { field: 'tools', label: 'Ferramentas', group: 'Proficiências', textarea: true, required: true, max: 1000 },
  { field: 'skills', label: 'Perícias', group: 'Proficiências', textarea: true, required: true, max: 1500 },
  { field: 'sigilKey', label: 'Chave do sigilo', group: 'Interface', required: true, pattern: '[A-Za-z0-9-]+', max: 64 },
  { field: 'color', label: 'Cor hexadecimal', group: 'Interface', required: true, pattern: '#[0-9A-Fa-f]{6}', max: 7 },
  { field: 'tablePage', label: 'Página da tabela', group: 'Fonte', type: 'number', min: 1, maxNumber: 9999, required: true },
  { field: 'source.title', label: 'Título da fonte', group: 'Fonte', required: true, max: 250 },
  { field: 'source.pages', label: 'Páginas da fonte', group: 'Fonte', required: true, max: 60 },
  { field: 'source.chapter', label: 'Capítulo da fonte', group: 'Fonte', required: true, max: 200 }
];

const subclassFields = [
  { field: 'name', label: 'Nome', group: 'Identidade', required: true, max: 100 },
  { field: 'originalName', label: 'Nome original', group: 'Identidade', max: 100 },
  { field: 'desc', label: 'Descrição', group: 'Apresentação', textarea: true, required: true, max: 16000 },
  { field: 'sourcePage', label: 'Página principal', group: 'Fonte', required: true, max: 20, page: true },
  { field: 'source.title', label: 'Título da fonte', group: 'Fonte', max: 250, source: true },
  { field: 'source.pages', label: 'Páginas da fonte', group: 'Fonte', max: 60, source: true },
  { field: 'source.chapter', label: 'Capítulo da fonte', group: 'Fonte', max: 200, source: true }
];

const clone = value => JSON.parse(JSON.stringify(value));
const get = (object, path) => path.split('.').reduce((value, key) => value?.[key], object);

function node(name, className, text) {
  const element = document.createElement(name);
  if (className) element.className = className;
  if (text !== undefined) element.textContent = text;
  return element;
}

function friendlyError(error) {
  if (!(error instanceof AdminApiError)) return 'Falha inesperada ao concluir a operação.';
  const messages = {
    UNAUTHENTICATED: 'Falha de autenticação. Entre novamente.', CONFLICT: 'Conflito de versão: esta entidade mudou no GitHub. Recarregue os dados.',
    GITHUB_UNAVAILABLE: 'GitHub indisponível no momento.', GITHUB_AUTH_FAILED: 'A credencial GitHub configurada foi recusada.',
    INVALID_VALUE: 'Falha de validação: revise os campos.', DUPLICATE_NAME: 'Já existe uma entidade desse grupo com esse nome.',
    INCOMPLETE_SOURCE: 'Ao adicionar uma fonte, preencha título, páginas e capítulo.', NETWORK_ERROR: 'Não foi possível acessar a API administrativa.'
  };
  return messages[error.code] || error.message;
}

function inputFor(definition) {
  const wrapper = node('label', 'admin-field');
  wrapper.append(node('span', '', definition.label));
  const input = node(definition.textarea ? 'textarea' : 'input');
  input.name = definition.field;
  input.autocomplete = 'off';
  if (!definition.textarea) input.type = definition.type || 'text';
  if (definition.textarea) input.rows = definition.field === 'desc' ? 10 : 3;
  if (definition.required) input.required = true;
  if (definition.max) input.maxLength = definition.max;
  if (definition.pattern) input.pattern = definition.pattern;
  if (definition.min !== undefined) input.min = definition.min;
  if (definition.maxNumber !== undefined) input.max = definition.maxNumber;
  wrapper.append(input);
  return { wrapper, input };
}

export async function renderMetadataEditor(main, setTitle) {
  setTitle('Metadados de Classes');
  main.replaceChildren(node('p', 'admin-loading', 'Carregando 27 classes e 382 subclasses…'));
  let catalog;
  try { catalog = await adminRequest('class-metadata'); }
  catch (error) {
    const failure = node('section', 'admin-empty');
    failure.append(node('h1', '', 'Não foi possível abrir o editor'), node('p', '', friendlyError(error)));
    main.replaceChildren(failure); return;
  }
  catalog.classes.sort((a, b) => a.name.localeCompare(b.name, 'pt-BR'));
  catalog.subclasses.sort((a, b) => a.name.localeCompare(b.name, 'pt-BR'));
  let entityType = 'class';
  let selected = catalog.classes[0];
  let original = clone(selected);
  let busy = false;
  const inputs = new Map();

  const page = node('section', 'admin-editor admin-metadata-editor');
  const heading = node('div', 'admin-page-heading');
  const headingText = node('div');
  headingText.append(node('p', 'admin-eyebrow', 'CMS Git-backed'), node('h1', '', 'Metadados de Classes e Subclasses'), node('p', 'admin-lede', 'Edite somente metadados permitidos. IDs, vínculos, features, progressões, tabelas e automações permanecem protegidos.'));
  heading.append(headingText, node('span', `admin-mode admin-mode-${catalog.mode}`, catalog.mode === 'github' ? 'Escrita GitHub' : 'Modo mock'));

  const form = node('form', 'admin-art-form');
  const selectors = node('div', 'admin-selector-grid');
  const typeLabel = node('label', 'admin-field'); typeLabel.append(node('span', '', 'Tipo'));
  const typeSelect = node('select');
  for (const [value, label] of [['class', 'Classe'], ['subclass', 'Subclasse']]) { const option = node('option', '', label); option.value = value; typeSelect.append(option); }
  typeLabel.append(typeSelect);
  const classLabel = node('label', 'admin-field'); classLabel.append(node('span', '', 'Classe'));
  classLabel.hidden = true;
  const classSelect = node('select'); classLabel.append(classSelect);
  const entityLabel = node('label', 'admin-field'); entityLabel.append(node('span', '', 'Entidade'));
  const entitySelect = node('select'); entityLabel.append(entitySelect);
  selectors.append(typeLabel, classLabel, entityLabel); form.append(selectors);
  const protectedId = node('p', 'admin-protected-id');
  const fieldsHost = node('div', 'admin-metadata-fields');
  const actions = node('div', 'admin-actions');
  const save = node('button', 'admin-button admin-button-primary', 'Salvar metadados'); save.type = 'submit';
  const reload = node('button', 'admin-button admin-button-quiet', 'Recarregar do GitHub'); reload.type = 'button'; reload.hidden = true;
  actions.append(save, reload);
  const feedback = node('p', 'admin-feedback'); feedback.setAttribute('role', 'status'); feedback.setAttribute('aria-live', 'polite');
  form.append(protectedId, fieldsHost, actions, feedback); page.append(heading, form); main.replaceChildren(page);

  const definitions = () => entityType === 'class' ? classFields : subclassFields;
  const valueOf = definition => {
    const input = inputs.get(definition.field);
    if (definition.type === 'number') return Number(input.value);
    if (definition.page && typeof get(original, definition.field) === 'number' && /^\d+$/.test(input.value.trim())) return Number(input.value.trim());
    return input.value.trim();
  };
  const differences = () => definitions().map(definition => ({
    ...definition, before: get(original, definition.field) ?? '', after: valueOf(definition)
  })).filter(item => item.before !== item.after);
  const setDirtyState = () => {
    const dirty = differences().length > 0;
    save.disabled = busy || !dirty || !form.checkValidity();
    typeSelect.disabled = classSelect.disabled = entitySelect.disabled = busy;
  };
  const rebuildClassOptions = () => {
    classSelect.replaceChildren();
    for (const item of catalog.classes) { const option = node('option', '', item.name); option.value = item.id; classSelect.append(option); }
  };
  const candidates = () => entityType === 'class' ? catalog.classes : catalog.subclasses.filter(item => item.classId === classSelect.value);
  const rebuildEntityOptions = preferredId => {
    entitySelect.replaceChildren();
    for (const item of candidates()) { const option = node('option', '', item.name); option.value = item.id; entitySelect.append(option); }
    if (preferredId && candidates().some(item => item.id === preferredId)) entitySelect.value = preferredId;
    selected = candidates().find(item => item.id === entitySelect.value) || candidates()[0];
  };
  const renderFields = () => {
    inputs.clear(); fieldsHost.replaceChildren();
    const groups = new Map();
    for (const definition of definitions()) {
      if (!groups.has(definition.group)) { const fieldset = node('fieldset', 'admin-fieldset'); fieldset.append(node('legend', '', definition.group)); groups.set(definition.group, fieldset); fieldsHost.append(fieldset); }
      const created = inputFor(definition); inputs.set(definition.field, created.input); groups.get(definition.group).append(created.wrapper);
    }
  };
  const populate = () => {
    original = clone(selected);
    protectedId.textContent = `ID protegido: ${selected.id}${selected.classId ? ` · classId protegido: ${selected.classId}` : ''}`;
    for (const definition of definitions()) inputs.get(definition.field).value = get(selected, definition.field) ?? '';
    const sourceAbsent = entityType === 'subclass' && !selected.source.title && !selected.source.pages && !selected.source.chapter;
    for (const definition of definitions().filter(item => item.source)) inputs.get(definition.field).required = !sourceAbsent;
    feedback.className = 'admin-feedback'; feedback.textContent = sourceAbsent ? 'Esta subclasse não possui bloco de fonte estruturado. Para adicioná-lo, preencha os três campos de fonte.' : '';
    reload.hidden = true; setDirtyState();
  };
  const discardAllowed = () => !differences().length || window.confirm('Descartar as alterações não salvas?');
  const resetEditor = preferredId => { renderFields(); rebuildEntityOptions(preferredId); populate(); };

  rebuildClassOptions(); resetEditor();
  form.addEventListener('input', setDirtyState);
  typeSelect.addEventListener('change', () => {
    if (!discardAllowed()) { typeSelect.value = entityType; return; }
    entityType = typeSelect.value; classLabel.hidden = entityType === 'class'; entityLabel.querySelector('span').textContent = entityType === 'class' ? 'Classe' : 'Subclasse'; resetEditor();
  });
  classSelect.addEventListener('change', () => { if (!discardAllowed()) { classSelect.value = selected.classId || selected.id; return; } resetEditor(); });
  entitySelect.addEventListener('change', () => { if (!discardAllowed()) { entitySelect.value = selected.id; return; } selected = candidates().find(item => item.id === entitySelect.value); populate(); });
  form.addEventListener('submit', async event => {
    event.preventDefault(); const diff = differences();
    if (!diff.length || busy || !form.reportValidity() || !await confirmChanges(selected.name, diff, entityType === 'class' ? 'Classe' : 'Subclasse')) return;
    const changes = {};
    for (const item of diff) {
      if (item.field.startsWith('source.')) { changes.source ||= {}; changes.source[item.field.slice(7)] = item.after; }
      else changes[item.field] = item.after;
    }
    busy = true; setDirtyState(); feedback.className = 'admin-feedback'; feedback.textContent = 'Salvando…';
    try {
      const result = await adminRequest('class-metadata', { method: 'POST', body: { entityType, entityId: selected.id, changes, expected: { entryHash: selected.revision.entryHash } } });
      const collection = entityType === 'class' ? catalog.classes : catalog.subclasses;
      const index = collection.findIndex(item => item.id === selected.id); collection[index] = result.entity; selected = result.entity; original = clone(selected);
      if (entityType === 'class') rebuildClassOptions();
      if (entitySelect.selectedOptions[0]) entitySelect.selectedOptions[0].textContent = selected.name;
      feedback.className = 'admin-feedback admin-feedback-success';
      feedback.textContent = result.mode === 'github' ? 'Commit criado. Alterações enviadas ao GitHub; a publicação ocorrerá após o próximo deployment da Vercel.' : 'Simulação concluída em memória, sem commit ou gravação local.';
    } catch (error) { feedback.className = 'admin-feedback admin-feedback-error'; feedback.textContent = friendlyError(error); reload.hidden = !(error instanceof AdminApiError && error.status === 409); }
    finally { busy = false; setDirtyState(); }
  });
  reload.addEventListener('click', () => renderMetadataEditor(main, setTitle));
  window.onbeforeunload = event => { if (differences().length) { event.preventDefault(); event.returnValue = ''; } };
  window.GRIMORIO_ADMIN_HAS_UNSAVED = () => differences().length > 0;
}
