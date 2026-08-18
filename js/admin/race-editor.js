import { adminRequest, AdminApiError } from './api-client.js';
import { confirmChanges } from './confirm-dialog.js';

const raceFields = [
  { field: 'name', label: 'Nome', group: 'Identidade', required: true, max: 120 },
  { field: 'originalName', label: 'Nome original', group: 'Identidade', required: true, max: 120 },
  { field: 'sourcePage', label: 'Página da fonte', group: 'Identidade', type: 'number', min: 1, maxNumber: 9999, required: true },
  { field: 'summary', label: 'Resumo', group: 'Apresentação', textarea: true, rows: 5, required: true, max: 4000 },
  { field: 'abilityScore', label: 'Aumento de atributos', group: 'Apresentação', textarea: true, rows: 4, required: true, max: 1000 },
  { field: 'meta.creatureTypes', label: 'Tipos de criatura', group: 'Ficha racial', required: true, max: 200 },
  { field: 'meta.lifeExpectancy', label: 'Expectativa de vida', group: 'Ficha racial', required: true, max: 300 },
  { field: 'meta.nationalAlignment', label: 'Alinhamento nacional', group: 'Ficha racial', required: true, max: 200 },
  { field: 'meta.planarOrigin', label: 'Origem planar', group: 'Ficha racial', required: true, max: 300 },
  { field: 'meta.planetouched', label: 'Planetouched', group: 'Ficha racial', required: true, max: 200 },
  { field: 'meta.regions', label: 'Regiões', group: 'Ficha racial', required: true, max: 500 },
  { field: 'meta.size', label: 'Tamanho', group: 'Ficha racial', required: true, max: 300 },
  { field: 'meta.alignment', label: 'Tendência', group: 'Ficha racial', textarea: true, rows: 3, required: true, max: 1000 },
  { field: 'meta.languages', label: 'Idiomas', group: 'Ficha racial', required: true, max: 500 },
  { field: 'meta.speed', label: 'Deslocamento', group: 'Ficha racial', required: true, max: 300 }
];

const subraceFields = [
  { field: 'name', label: 'Nome', group: 'Identidade', required: true, max: 120 },
  { field: 'page', label: 'Página da fonte', group: 'Identidade', type: 'number', min: 1, maxNumber: 9999, required: true },
  { field: 'ability', label: 'Aumento de atributos', group: 'Mecânica', required: true, max: 500 },
  { field: 'description', label: 'Descrição', group: 'Apresentação', textarea: true, rows: 10, required: true, max: 16000 }
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
    UNAUTHENTICATED: 'Falha de autenticação. Entre novamente.',
    CONFLICT: 'Conflito de versão: esta entidade mudou no GitHub. Recarregue os dados.',
    GITHUB_UNAVAILABLE: 'GitHub indisponível no momento.',
    GITHUB_AUTH_FAILED: 'A credencial GitHub configurada foi recusada.',
    INVALID_VALUE: 'Falha de validação: revise os campos.',
    DUPLICATE_NAME: 'Já existe uma raça ou subraça desse grupo com esse nome.',
    NETWORK_ERROR: 'Não foi possível acessar a API administrativa.'
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
  if (definition.textarea) input.rows = definition.rows || 4;
  if (definition.required) input.required = true;
  if (definition.max) input.maxLength = definition.max;
  if (definition.min !== undefined) input.min = definition.min;
  if (definition.maxNumber !== undefined) input.max = definition.maxNumber;
  wrapper.append(input);
  return { wrapper, input };
}

export async function renderRaceEditor(main, setTitle) {
  setTitle('Raças e Subraças');
  main.replaceChildren(node('p', 'admin-loading', 'Carregando 46 raças e 382 subraças…'));
  let catalog;
  try { catalog = await adminRequest('race'); }
  catch (error) {
    const failure = node('section', 'admin-empty');
    failure.append(node('h1', '', 'Não foi possível abrir o editor'), node('p', '', friendlyError(error)));
    main.replaceChildren(failure); return;
  }
  catalog.races.sort((a, b) => a.name.localeCompare(b.name, 'pt-BR'));
  catalog.subraces.sort((a, b) => a.name.localeCompare(b.name, 'pt-BR'));
  let entityType = 'race';
  let selected = catalog.races[0];
  let original = clone(selected);
  let busy = false;
  const inputs = new Map();

  const page = node('section', 'admin-editor admin-race-editor');
  const heading = node('div', 'admin-page-heading');
  const headingText = node('div');
  headingText.append(
    node('p', 'admin-eyebrow', 'CMS Git-backed'),
    node('h1', '', 'Raças e Subraças'),
    node('p', 'admin-lede', 'Edite metadados e textos de apresentação. IDs, vínculos, traços, regras globais, heranças, magias raciais e automações permanecem protegidos.')
  );
  heading.append(headingText, node('span', `admin-mode admin-mode-${catalog.mode}`, catalog.mode === 'github' ? 'Escrita GitHub' : 'Modo mock'));

  const form = node('form', 'admin-art-form');
  const selectors = node('div', 'admin-selector-grid');
  const typeLabel = node('label', 'admin-field'); typeLabel.append(node('span', '', 'Tipo'));
  const typeSelect = node('select');
  for (const [value, label] of [['race', 'Raça'], ['subrace', 'Subraça']]) { const option = node('option', '', label); option.value = value; typeSelect.append(option); }
  typeLabel.append(typeSelect);
  const raceLabel = node('label', 'admin-field'); raceLabel.append(node('span', '', 'Raça'));
  const raceSelect = node('select'); raceLabel.append(raceSelect);
  const subraceLabel = node('label', 'admin-field'); subraceLabel.append(node('span', '', 'Subraça'));
  const subraceSelect = node('select'); subraceLabel.append(subraceSelect); subraceLabel.hidden = true;
  selectors.append(typeLabel, raceLabel, subraceLabel);

  const protectedId = node('p', 'admin-protected-id');
  const fieldsHost = node('div', 'admin-metadata-fields');
  const preview = node('article', 'admin-race-preview');
  const previewTitle = node('h2');
  const previewMeta = node('p', 'admin-race-preview-meta');
  const previewText = node('p', 'admin-race-preview-text');
  const previewAbility = node('p', 'admin-race-preview-ability');
  const previewBadges = node('div', 'admin-race-preview-badges');
  preview.append(previewTitle, previewMeta, previewText, previewAbility, previewBadges);
  const actions = node('div', 'admin-actions');
  const previewButton = node('button', 'admin-button admin-button-quiet', 'Pré-visualizar'); previewButton.type = 'button';
  const save = node('button', 'admin-button admin-button-primary', 'Salvar no repositório'); save.type = 'submit';
  const reload = node('button', 'admin-button admin-button-quiet', 'Recarregar do GitHub'); reload.type = 'button'; reload.hidden = true;
  actions.append(previewButton, save, reload);
  const feedback = node('p', 'admin-feedback'); feedback.setAttribute('role', 'status'); feedback.setAttribute('aria-live', 'polite');
  form.append(selectors, protectedId, fieldsHost, preview, actions, feedback);
  page.append(heading, form); main.replaceChildren(page);

  const definitions = () => entityType === 'race' ? raceFields : subraceFields;
  const candidates = () => catalog.subraces.filter(item => item.raceId === raceSelect.value);
  const valueOf = definition => definition.type === 'number' ? Number(inputs.get(definition.field).value) : inputs.get(definition.field).value.trim();
  const differences = () => definitions().map(definition => ({ ...definition, before: get(original, definition.field), after: valueOf(definition) })).filter(item => item.before !== item.after);
  const current = () => Object.fromEntries(definitions().map(definition => [definition.field, valueOf(definition)]));

  const rebuildRaceOptions = preferredId => {
    raceSelect.replaceChildren();
    for (const race of catalog.races) { const option = node('option', '', race.name); option.value = race.id; raceSelect.append(option); }
    if (preferredId && catalog.races.some(item => item.id === preferredId)) raceSelect.value = preferredId;
  };
  const rebuildSubraceOptions = preferredId => {
    subraceSelect.replaceChildren();
    for (const subrace of candidates()) { const option = node('option', '', subrace.name); option.value = subrace.id; subraceSelect.append(option); }
    if (preferredId && candidates().some(item => item.id === preferredId)) subraceSelect.value = preferredId;
  };
  const renderFields = () => {
    inputs.clear(); fieldsHost.replaceChildren();
    const groups = new Map();
    for (const definition of definitions()) {
      if (!groups.has(definition.group)) { const fieldset = node('fieldset', 'admin-fieldset'); fieldset.append(node('legend', '', definition.group)); groups.set(definition.group, fieldset); fieldsHost.append(fieldset); }
      const created = inputFor(definition); inputs.set(definition.field, created.input); groups.get(definition.group).append(created.wrapper);
    }
  };
  const applyPreview = () => {
    const value = current();
    const race = catalog.races.find(item => item.id === raceSelect.value);
    previewTitle.textContent = value.name || 'Entidade sem nome';
    previewMeta.textContent = entityType === 'race'
      ? `${value.originalName} · ${selected.source || 'Fonte herdada'} · p. ${value.sourcePage}`
      : `${selected.originalName || 'Nome original protegido'} · ${selected.source || race?.source || 'Fonte herdada'} · p. ${value.page}`;
    previewText.textContent = entityType === 'race' ? value.summary : value.description;
    previewAbility.textContent = entityType === 'race' ? value.abilityScore : value.ability;
    previewBadges.replaceChildren();
    if (entityType === 'race') for (const field of ['creatureTypes', 'size', 'planarOrigin', 'speed']) previewBadges.append(node('span', '', value[`meta.${field}`]));
    else previewBadges.append(node('span', '', `Raça-base: ${race?.name || selected.raceId}`));
  };
  const updateButtons = () => {
    const dirty = original ? differences().length > 0 : false;
    save.disabled = busy || !dirty || !form.checkValidity();
    previewButton.disabled = busy;
    typeSelect.disabled = raceSelect.disabled = subraceSelect.disabled = busy;
  };
  const populate = () => {
    original = clone(selected);
    const details = entityType === 'race'
      ? `ID protegido: ${selected.id} · ${selected.subraceCount} subraças · traços e regras protegidos`
      : `ID protegido: ${selected.id} · raceId protegido: ${selected.raceId} · originalName protegido: ${selected.originalName || '—'}`;
    protectedId.textContent = details;
    for (const definition of definitions()) inputs.get(definition.field).value = get(selected, definition.field) ?? '';
    feedback.className = 'admin-feedback'; feedback.textContent = '';
    reload.hidden = true; applyPreview(); updateButtons();
  };
  const chooseSelected = preferredId => {
    if (entityType === 'race') selected = catalog.races.find(item => item.id === raceSelect.value) || catalog.races[0];
    else { rebuildSubraceOptions(preferredId); selected = candidates().find(item => item.id === subraceSelect.value) || candidates()[0]; }
  };
  const resetEditor = preferredId => { renderFields(); chooseSelected(preferredId); populate(); };
  const discardAllowed = () => !differences().length || window.confirm('Descartar as alterações não salvas desta entidade racial?');

  rebuildRaceOptions(); renderFields(); chooseSelected(); populate();
  form.addEventListener('input', updateButtons);
  typeSelect.addEventListener('change', () => {
    if (!discardAllowed()) { typeSelect.value = entityType; return; }
    entityType = typeSelect.value; subraceLabel.hidden = entityType === 'race'; resetEditor();
  });
  raceSelect.addEventListener('change', () => {
    if (!discardAllowed()) { raceSelect.value = selected.raceId || selected.id; return; }
    resetEditor();
  });
  subraceSelect.addEventListener('change', () => {
    if (!discardAllowed()) { subraceSelect.value = selected.id; return; }
    selected = candidates().find(item => item.id === subraceSelect.value); populate();
  });
  previewButton.addEventListener('click', () => {
    if (!form.reportValidity()) return;
    applyPreview(); feedback.className = 'admin-feedback admin-feedback-success'; feedback.textContent = 'Preview aplicado somente nesta tela. Nenhuma alteração foi persistida.';
  });
  form.addEventListener('submit', async event => {
    event.preventDefault();
    const diff = differences();
    if (!diff.length || busy || !form.reportValidity() || !await confirmChanges(selected.name, diff, entityType === 'race' ? 'Raça' : 'Subraça')) return;
    const changes = {};
    for (const item of diff) {
      if (item.field.startsWith('meta.')) { changes.meta ||= {}; changes.meta[item.field.slice(5)] = item.after; }
      else changes[item.field] = item.after;
    }
    busy = true; updateButtons(); feedback.className = 'admin-feedback'; feedback.textContent = 'Salvando…';
    try {
      const body = { entityType, raceId: entityType === 'race' ? selected.id : selected.raceId, changes, expected: { entryHash: selected.revision.entryHash } };
      if (entityType === 'subrace') body.subraceId = selected.id;
      const result = await adminRequest('race', { method: 'POST', body });
      const collection = entityType === 'race' ? catalog.races : catalog.subraces;
      const index = collection.findIndex(item => item.id === selected.id && (entityType === 'race' || item.raceId === selected.raceId));
      collection[index] = result.entity; selected = result.entity; original = clone(selected);
      if (entityType === 'race') rebuildRaceOptions(selected.id); else if (subraceSelect.selectedOptions[0]) subraceSelect.selectedOptions[0].textContent = selected.name;
      applyPreview(); feedback.className = 'admin-feedback admin-feedback-success';
      feedback.textContent = result.mode === 'github' ? 'Commit criado. Alterações enviadas ao GitHub; a publicação ocorrerá após o próximo deployment da Vercel.' : 'Simulação concluída em memória, sem commit ou gravação local.';
    } catch (error) {
      feedback.className = 'admin-feedback admin-feedback-error'; feedback.textContent = friendlyError(error);
      reload.hidden = !(error instanceof AdminApiError && error.status === 409);
    } finally { busy = false; updateButtons(); }
  });
  reload.addEventListener('click', () => renderRaceEditor(main, setTitle));
  window.onbeforeunload = event => { if (differences().length) { event.preventDefault(); event.returnValue = ''; } };
  window.GRIMORIO_ADMIN_HAS_UNSAVED = () => differences().length > 0;
}
