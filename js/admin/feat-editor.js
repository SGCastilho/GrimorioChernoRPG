import { adminRequest, AdminApiError } from './api-client.js';
import { confirmChanges } from './confirm-dialog.js';

const definitions = [
  { field: 'name', label: 'Nome', group: 'Identidade', required: true, max: 120 },
  { field: 'originalName', label: 'Nome original', group: 'Identidade', max: 120 },
  { field: 'aliases', label: 'Aliases — um por linha', group: 'Identidade', textarea: true, aliases: true, rows: 3 },
  { field: 'category', label: 'Categoria', group: 'Identidade', max: 120 },
  { field: 'sourcePage', label: 'Página da fonte', group: 'Publicação', type: 'number', min: 1, maxNumber: 9999, required: true },
  { field: 'description', label: 'Descrição integral', group: 'Conteúdo', textarea: true, rows: 12, max: 20000, required: true },
  { field: 'prerequisite', label: 'Pré-requisito em português', group: 'Pré-requisitos', textarea: true, rows: 3, max: 1000 },
  { field: 'originalPrerequisite', label: 'Pré-requisito original', group: 'Pré-requisitos', textarea: true, rows: 3, max: 1000 },
  { field: 'prerequisites', label: 'Estrutura de pré-requisitos (JSON)', group: 'Pré-requisitos', textarea: true, rows: 10, json: true },
  { field: 'repeatable', label: 'Talento repetível', group: 'Opções avançadas', checkbox: true },
  { field: 'choices', label: 'Escolhas estruturadas (JSON)', group: 'Opções avançadas', textarea: true, rows: 12, json: true }
];

const clone = value => JSON.parse(JSON.stringify(value));
const equal = (left, right) => JSON.stringify(left) === JSON.stringify(right);

function node(name, className, text) {
  const element = document.createElement(name);
  if (className) element.className = className;
  if (text !== undefined) element.textContent = text;
  return element;
}

function friendlyError(error) {
  if (!(error instanceof AdminApiError)) return 'Falha inesperada ao concluir a operação.';
  const messages = {
    UNAUTHENTICATED: 'Falha de autenticação. Entre novamente.', CONFLICT: 'Conflito de versão: este talento mudou no GitHub. Recarregue os dados.',
    GITHUB_UNAVAILABLE: 'GitHub indisponível no momento.', GITHUB_AUTH_FAILED: 'A credencial GitHub configurada foi recusada.',
    INVALID_VALUE: 'Falha de validação: revise os campos e estruturas JSON.', DUPLICATE_NAME: 'Já existe um talento com esse nome.',
    INCONSISTENT_PREREQUISITES: 'O texto e a estrutura de pré-requisitos devem ser preenchidos ou removidos juntos.',
    NETWORK_ERROR: 'Não foi possível acessar a API administrativa.'
  };
  return messages[error.code] || error.message;
}

function inputFor(definition) {
  const wrapper = node('label', definition.checkbox ? 'admin-field admin-check-field' : 'admin-field');
  const label = node('span', '', definition.label);
  const input = node(definition.textarea ? 'textarea' : 'input');
  input.name = definition.field;
  input.autocomplete = 'off';
  if (definition.checkbox) input.type = 'checkbox';
  else if (!definition.textarea) input.type = definition.type || 'text';
  if (definition.textarea) input.rows = definition.rows || 4;
  if (definition.required) input.required = true;
  if (definition.max) input.maxLength = definition.max;
  if (definition.min !== undefined) input.min = definition.min;
  if (definition.maxNumber !== undefined) input.max = definition.maxNumber;
  if (definition.json) {
    input.spellcheck = false;
    input.classList.add('admin-code-input');
  }
  if (definition.checkbox) wrapper.append(input, label);
  else wrapper.append(label, input);
  return { wrapper, input };
}

function previewCard() {
  const card = node('article', 'admin-feat-preview');
  const title = node('h2');
  const original = node('p', 'admin-feat-preview-original');
  const badges = node('div', 'admin-feat-preview-badges');
  const prerequisite = node('p', 'admin-feat-preview-prerequisite');
  const description = node('div', 'admin-feat-preview-description');
  const choices = node('p', 'admin-feat-preview-choices');
  card.append(title, original, badges, prerequisite, description, choices);
  return { card, title, original, badges, prerequisite, description, choices };
}

export async function renderFeatEditor(main, setTitle) {
  setTitle('Talentos');
  main.replaceChildren(node('p', 'admin-loading', 'Carregando os 109 talentos…'));
  let catalog;
  try { catalog = await adminRequest('feat'); }
  catch (error) {
    const failure = node('section', 'admin-empty');
    failure.append(node('h1', '', 'Não foi possível abrir o editor'), node('p', '', friendlyError(error)));
    main.replaceChildren(failure); return;
  }
  catalog.catalogs.sort((a, b) => a.label.localeCompare(b.label, 'pt-BR'));
  catalog.feats.sort((a, b) => a.name.localeCompare(b.name, 'pt-BR'));
  let selected;
  let original;
  let busy = false;
  const inputs = new Map();

  const page = node('section', 'admin-editor admin-feat-editor');
  const heading = node('div', 'admin-page-heading');
  const headingText = node('div');
  headingText.append(node('p', 'admin-eyebrow', 'CMS Git-backed'), node('h1', '', 'Editor de Talentos'), node('p', 'admin-lede', 'Edite os 109 talentos dos três catálogos reais. IDs, fonte, catálogo e automações Foundry permanecem protegidos.'));
  heading.append(headingText, node('span', `admin-mode admin-mode-${catalog.mode}`, catalog.mode === 'github' ? 'Escrita GitHub' : 'Modo mock'));

  const form = node('form', 'admin-art-form');
  const selectors = node('div', 'admin-selector-grid admin-selector-grid-two');
  const catalogLabel = node('label', 'admin-field'); catalogLabel.append(node('span', '', 'Catálogo'));
  const catalogSelect = node('select');
  for (const item of catalog.catalogs) { const option = node('option', '', `${item.label} (${item.count})`); option.value = item.id; catalogSelect.append(option); }
  catalogLabel.append(catalogSelect);
  const featLabel = node('label', 'admin-field'); featLabel.append(node('span', '', 'Talento'));
  const featSelect = node('select'); featLabel.append(featSelect);
  selectors.append(catalogLabel, featLabel); form.append(selectors);
  const protectedId = node('p', 'admin-protected-id');
  const fieldsHost = node('div', 'admin-metadata-fields');
  for (const definition of definitions) {
    let fieldset = fieldsHost.querySelector(`[data-group="${definition.group}"]`);
    if (!fieldset) { fieldset = node('fieldset', 'admin-fieldset'); fieldset.dataset.group = definition.group; fieldset.append(node('legend', '', definition.group)); fieldsHost.append(fieldset); }
    const created = inputFor(definition); inputs.set(definition.field, created.input); fieldset.append(created.wrapper);
    if (definition.json) fieldset.append(node('p', 'admin-fieldset-help', 'Formato avançado validado no navegador e novamente no servidor. Chaves desconhecidas são recusadas.'));
  }
  const preview = previewCard();
  const actions = node('div', 'admin-actions');
  const previewButton = node('button', 'admin-button admin-button-secondary', 'Pré-visualizar'); previewButton.type = 'button';
  const save = node('button', 'admin-button admin-button-primary', 'Salvar talento'); save.type = 'submit';
  const reload = node('button', 'admin-button admin-button-quiet', 'Recarregar do GitHub'); reload.type = 'button'; reload.hidden = true;
  actions.append(previewButton, save, reload);
  const feedback = node('p', 'admin-feedback'); feedback.setAttribute('role', 'status'); feedback.setAttribute('aria-live', 'polite');
  form.append(protectedId, fieldsHost, node('h2', 'admin-section-title', 'Pré-visualização'), preview.card, actions, feedback);
  page.append(heading, form); main.replaceChildren(page);

  const featsForCatalog = () => catalog.feats.filter(feat => feat.catalogId === catalogSelect.value);
  const populateFeatOptions = preferredId => {
    featSelect.replaceChildren();
    for (const feat of featsForCatalog()) { const option = node('option', '', feat.name); option.value = feat.id; featSelect.append(option); }
    if (preferredId && featsForCatalog().some(feat => feat.id === preferredId)) featSelect.value = preferredId;
    selected = featsForCatalog().find(feat => feat.id === featSelect.value) || featsForCatalog()[0];
  };
  const parseJson = definition => {
    const input = inputs.get(definition.field);
    try {
      const value = JSON.parse(input.value);
      if (!Array.isArray(value)) throw new Error('array');
      input.setCustomValidity(''); return { valid: true, value };
    } catch { input.setCustomValidity('Informe um array JSON válido.'); return { valid: false, value: null }; }
  };
  const valueOf = definition => {
    const input = inputs.get(definition.field);
    if (definition.json) return parseJson(definition).value;
    if (definition.checkbox) return input.checked;
    if (definition.aliases) return [...new Set(input.value.split(/\r?\n/).map(value => value.trim()).filter(Boolean))];
    if (definition.type === 'number') return Number(input.value);
    return input.value.trim();
  };
  const validateJson = () => definitions.filter(item => item.json).every(item => parseJson(item).valid);
  const differences = () => definitions.map(definition => ({ ...definition, before: original?.[definition.field], after: valueOf(definition) })).filter(item => !equal(item.before, item.after));
  const current = () => Object.fromEntries(definitions.map(definition => [definition.field, valueOf(definition)]));
  const applyPreview = () => {
    const value = current();
    preview.title.textContent = value.name || 'Talento sem nome';
    preview.original.textContent = value.originalName && value.originalName !== value.name ? `Original: ${value.originalName}` : '';
    preview.badges.replaceChildren(node('span', '', `p. ${value.sourcePage}`));
    if (value.category) preview.badges.append(node('span', '', value.category));
    if (value.repeatable) preview.badges.append(node('span', '', 'Repetível'));
    preview.prerequisite.textContent = value.prerequisite || 'Sem pré-requisito';
    preview.description.textContent = value.description;
    preview.choices.textContent = value.choices.length ? `${value.choices.length} bloco(s) de escolha estruturada.` : 'Sem escolhas estruturadas.';
  };
  const updateButtons = () => {
    const jsonValid = validateJson();
    const dirty = original ? differences().length > 0 : false;
    save.disabled = busy || !dirty || !jsonValid || !form.checkValidity();
    previewButton.disabled = busy || !jsonValid;
    catalogSelect.disabled = featSelect.disabled = busy;
  };
  const populate = () => {
    original = clone(selected);
    protectedId.textContent = `ID protegido: ${selected.id} · sourceId protegido: ${selected.sourceId} · catálogo: ${selected.catalogLabel}`;
    for (const definition of definitions) {
      const input = inputs.get(definition.field);
      const value = selected[definition.field];
      if (definition.checkbox) input.checked = Boolean(value);
      else if (definition.json) input.value = JSON.stringify(value || [], null, 2);
      else if (definition.aliases) input.value = (value || []).join('\n');
      else input.value = value ?? '';
    }
    feedback.className = 'admin-feedback'; feedback.textContent = '';
    reload.hidden = true; applyPreview(); updateButtons();
  };
  const discardAllowed = () => !differences().length || window.confirm('Descartar as alterações não salvas deste talento?');

  populateFeatOptions(); populate();
  form.addEventListener('input', updateButtons);
  catalogSelect.addEventListener('change', () => {
    if (!discardAllowed()) { catalogSelect.value = selected.catalogId; return; }
    populateFeatOptions(); populate();
  });
  featSelect.addEventListener('change', () => {
    if (!discardAllowed()) { featSelect.value = selected.id; return; }
    selected = featsForCatalog().find(feat => feat.id === featSelect.value); populate();
  });
  previewButton.addEventListener('click', () => {
    if (!validateJson() || !form.reportValidity()) return;
    applyPreview(); feedback.className = 'admin-feedback admin-feedback-success'; feedback.textContent = 'Preview aplicado somente nesta tela. Nenhuma alteração foi persistida.';
  });
  form.addEventListener('submit', async event => {
    event.preventDefault();
    if (!validateJson()) { form.reportValidity(); return; }
    const diff = differences();
    if (!diff.length || busy || !form.reportValidity() || !await confirmChanges(selected.name, diff, 'Talento')) return;
    const changes = Object.fromEntries(diff.map(item => [item.field, item.after]));
    busy = true; updateButtons(); feedback.className = 'admin-feedback'; feedback.textContent = 'Salvando…';
    try {
      const result = await adminRequest('feat', { method: 'POST', body: { featId: selected.id, changes, expected: { entryHash: selected.revision.entryHash } } });
      const index = catalog.feats.findIndex(feat => feat.id === selected.id); catalog.feats[index] = result.feat; selected = result.feat; original = clone(selected);
      if (featSelect.selectedOptions[0]) featSelect.selectedOptions[0].textContent = selected.name;
      applyPreview(); feedback.className = 'admin-feedback admin-feedback-success';
      feedback.textContent = result.mode === 'github' ? 'Commit criado. Alterações enviadas ao GitHub; a publicação ocorrerá após o próximo deployment da Vercel.' : 'Simulação concluída em memória, sem commit ou gravação local.';
    } catch (error) { feedback.className = 'admin-feedback admin-feedback-error'; feedback.textContent = friendlyError(error); reload.hidden = !(error instanceof AdminApiError && error.status === 409); }
    finally { busy = false; updateButtons(); }
  });
  reload.addEventListener('click', () => renderFeatEditor(main, setTitle));
  window.onbeforeunload = event => { if (differences().length) { event.preventDefault(); event.returnValue = ''; } };
  window.GRIMORIO_ADMIN_HAS_UNSAVED = () => differences().length > 0;
}
