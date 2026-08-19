import { adminRequest, AdminApiError } from './api-client.js';
import { confirmChanges } from './confirm-dialog.js';

const definitions = [
  { field: 'name', label: 'Nome', group: 'Identidade', required: true, max: 160 },
  { field: 'originalName', label: 'Nome original', group: 'Identidade', max: 160 },
  { field: 'level', label: 'Nível', group: 'Nível e escola', level: true },
  { field: 'levelLabel', label: 'Rótulo especial de nível', group: 'Nível e escola', max: 120 },
  { field: 'school', label: 'Escola', group: 'Nível e escola', required: true, max: 100 },
  { field: 'time', label: 'Tempo de conjuração', group: 'Conjuração', required: true, max: 300 },
  { field: 'range', label: 'Alcance', group: 'Conjuração', required: true, max: 300 },
  { field: 'comp', label: 'Componentes', group: 'Conjuração', required: true, max: 2000 },
  { field: 'material', label: 'Material', group: 'Conjuração', textarea: true, rows: 3, max: 4000 },
  { field: 'duration', label: 'Duração', group: 'Conjuração', required: true, max: 300 },
  { field: 'ritual', label: 'Ritual', group: 'Conjuração', checkbox: true },
  { field: 'concentration', label: 'Concentração', group: 'Conjuração', checkbox: true },
  { field: 'classes', label: 'Classes', group: 'Catalogação', required: true, max: 1000 },
  { field: 'sourcePage', label: 'Página da fonte', group: 'Catalogação', number: true, min: 1, maxNumber: 9999 },
  { field: 'traits', label: 'Marcadores — um por linha', group: 'Catalogação', textarea: true, rows: 4, list: true },
  { field: 'desc', label: 'Descrição integral', group: 'Conteúdo', textarea: true, rows: 14, max: 50000, required: true },
  { field: 'higher', label: 'Em níveis superiores', group: 'Conteúdo', textarea: true, rows: 6, max: 20000 },
  { field: 'sourceNote', label: 'Nota editorial da fonte', group: 'Conteúdo', textarea: true, rows: 5, max: 10000 }
];

const clone = value => JSON.parse(JSON.stringify(value));
const equal = (left, right) => JSON.stringify(left) === JSON.stringify(right);
const normalize = value => String(value || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLocaleLowerCase('pt-BR');

function node(name, className, text) {
  const element = document.createElement(name);
  if (className) element.className = className;
  if (text !== undefined) element.textContent = text;
  return element;
}

function friendlyError(error) {
  if (!(error instanceof AdminApiError)) return 'Falha inesperada ao concluir a operação.';
  const messages = {
    UNAUTHENTICATED: 'Falha de autenticação. Entre novamente.', CONFLICT: 'Conflito de versão: esta magia mudou no GitHub. Recarregue os dados.',
    GITHUB_UNAVAILABLE: 'GitHub indisponível no momento.', GITHUB_AUTH_FAILED: 'A credencial GitHub configurada foi recusada.',
    INVALID_VALUE: 'Falha de validação: revise os campos da magia.', UNKNOWN_SPELL: 'A magia informada não existe no catálogo selecionado.',
    INCOMPLETE_SPELL_LEVEL: 'Uma magia sem nível convencional precisa de um rótulo especial.', NETWORK_ERROR: 'Não foi possível acessar a API administrativa.'
  };
  return messages[error.code] || error.message;
}

function inputFor(definition) {
  const wrapper = node('label', definition.checkbox ? 'admin-field admin-check-field' : 'admin-field');
  const label = node('span', '', definition.label);
  let input;
  if (definition.level) {
    input = node('select');
    const special = node('option', '', 'Sem nível / recurso de classe'); special.value = ''; input.append(special);
    for (let level = 0; level <= 9; level += 1) { const option = node('option', '', level === 0 ? '0 — Truque' : String(level)); option.value = String(level); input.append(option); }
  } else input = node(definition.textarea ? 'textarea' : 'input');
  input.name = definition.field;
  input.autocomplete = 'off';
  if (definition.checkbox) input.type = 'checkbox';
  else if (definition.number) input.type = 'number';
  if (definition.textarea) input.rows = definition.rows || 4;
  if (definition.required) input.required = true;
  if (definition.max) input.maxLength = definition.max;
  if (definition.min !== undefined) input.min = definition.min;
  if (definition.maxNumber !== undefined) input.max = definition.maxNumber;
  if (definition.checkbox) wrapper.append(input, label); else wrapper.append(label, input);
  return { wrapper, input };
}

function spellPreview() {
  const card = node('article', 'admin-spell-preview');
  const title = node('h2');
  const original = node('p', 'admin-spell-preview-original');
  const badges = node('div', 'admin-feat-preview-badges');
  const casting = node('dl', 'admin-spell-preview-grid');
  const description = node('div', 'admin-spell-preview-text');
  const higher = node('div', 'admin-spell-preview-text');
  card.append(title, original, badges, casting, description, higher);
  return { card, title, original, badges, casting, description, higher };
}

export async function renderSpellEditor(main, setTitle) {
  setTitle('Magias');
  main.replaceChildren(node('p', 'admin-loading', 'Carregando o índice de 1.208 magias…'));
  let catalog;
  try { catalog = await adminRequest('spell'); }
  catch (error) {
    const failure = node('section', 'admin-empty');
    failure.append(node('h1', '', 'Não foi possível abrir o editor'), node('p', '', friendlyError(error)));
    main.replaceChildren(failure); return;
  }
  catalog.catalogs.sort((left, right) => left.label.localeCompare(right.label, 'pt-BR'));
  catalog.spells.sort((left, right) => left.name.localeCompare(right.name, 'pt-BR'));
  let selected;
  let original;
  let busy = false;
  const inputs = new Map();

  const page = node('section', 'admin-editor admin-spell-editor');
  const heading = node('div', 'admin-page-heading');
  const headingText = node('div');
  headingText.append(node('p', 'admin-eyebrow', 'CMS Git-backed'), node('h1', '', 'Editor de Magias'), node('p', 'admin-lede', `Edite ${catalog.total.toLocaleString('pt-BR')} registros dos onze catálogos reais. IDs, fonte, catálogo, aliases, versões históricas e automações Foundry permanecem protegidos.`));
  heading.append(headingText, node('span', `admin-mode admin-mode-${catalog.mode}`, catalog.mode === 'github' ? 'Escrita GitHub' : 'Modo mock'));

  const form = node('form', 'admin-art-form');
  const selectors = node('div', 'admin-selector-grid admin-spell-selectors');
  const catalogLabel = node('label', 'admin-field'); catalogLabel.append(node('span', '', 'Catálogo'));
  const catalogSelect = node('select');
  for (const item of catalog.catalogs) { const option = node('option', '', `${item.label} (${item.count})`); option.value = item.id; catalogSelect.append(option); }
  catalogLabel.append(catalogSelect);
  const searchLabel = node('label', 'admin-field'); searchLabel.append(node('span', '', 'Buscar neste catálogo'));
  const search = node('input'); search.type = 'search'; search.placeholder = 'Nome, original, ID ou escola'; search.autocomplete = 'off'; searchLabel.append(search);
  const spellLabel = node('label', 'admin-field'); spellLabel.append(node('span', '', 'Magia'));
  const spellSelect = node('select'); spellLabel.append(spellSelect);
  selectors.append(catalogLabel, searchLabel, spellLabel); form.append(selectors);
  const resultCount = node('p', 'admin-fieldset-help');
  const protectedId = node('p', 'admin-protected-id');
  const fieldsHost = node('div', 'admin-metadata-fields');
  for (const definition of definitions) {
    let fieldset = fieldsHost.querySelector(`[data-group="${definition.group}"]`);
    if (!fieldset) { fieldset = node('fieldset', 'admin-fieldset'); fieldset.dataset.group = definition.group; fieldset.append(node('legend', '', definition.group)); fieldsHost.append(fieldset); }
    const created = inputFor(definition); inputs.set(definition.field, created.input); fieldset.append(created.wrapper);
  }
  const preview = spellPreview();
  const actions = node('div', 'admin-actions');
  const previewButton = node('button', 'admin-button admin-button-secondary', 'Pré-visualizar'); previewButton.type = 'button';
  const save = node('button', 'admin-button admin-button-primary', 'Salvar magia'); save.type = 'submit';
  const reload = node('button', 'admin-button admin-button-quiet', 'Recarregar do GitHub'); reload.type = 'button'; reload.hidden = true;
  actions.append(previewButton, save, reload);
  const feedback = node('p', 'admin-feedback'); feedback.setAttribute('role', 'status'); feedback.setAttribute('aria-live', 'polite');
  form.append(resultCount, protectedId, fieldsHost, node('h2', 'admin-section-title', 'Pré-visualização'), preview.card, actions, feedback);
  page.append(heading, form); main.replaceChildren(page);

  const valueOf = definition => {
    const input = inputs.get(definition.field);
    if (definition.checkbox) return input.checked;
    if (definition.level) return input.value === '' ? null : Number(input.value);
    if (definition.number) return input.value === '' ? null : Number(input.value);
    if (definition.list) return [...new Set(input.value.split(/\r?\n/).map(value => value.trim()).filter(Boolean))];
    return input.value.trim();
  };
  const current = () => Object.fromEntries(definitions.map(definition => [definition.field, valueOf(definition)]));
  const differences = () => definitions.map(definition => ({ ...definition, before: original?.[definition.field], after: valueOf(definition) })).filter(item => !equal(item.before, item.after));
  const applyPreview = () => {
    const value = current();
    preview.title.textContent = value.name || 'Magia sem nome';
    preview.original.textContent = value.originalName && value.originalName !== value.name ? `Original: ${value.originalName}` : '';
    preview.badges.replaceChildren(node('span', '', value.level === null ? (value.levelLabel || 'Sem nível') : value.level === 0 ? 'Truque' : `${value.level}º nível`), node('span', '', value.school));
    if (value.ritual) preview.badges.append(node('span', '', 'Ritual'));
    if (value.concentration) preview.badges.append(node('span', '', 'Concentração'));
    preview.casting.replaceChildren();
    for (const [label, text] of [['Tempo', value.time], ['Alcance', value.range], ['Componentes', value.comp], ['Duração', value.duration], ['Classes', value.classes]]) preview.casting.append(node('dt', '', label), node('dd', '', text));
    preview.description.textContent = value.desc;
    preview.higher.textContent = value.higher ? `Em níveis superiores\n${value.higher}` : '';
  };
  const updateButtons = () => {
    const dirty = original ? differences().length > 0 : false;
    save.disabled = busy || !dirty || !form.checkValidity();
    previewButton.disabled = busy || !selected;
    catalogSelect.disabled = spellSelect.disabled = search.disabled = busy;
  };
  const discardAllowed = () => !original || !differences().length || window.confirm('Descartar as alterações não salvas desta magia?');
  const spellsForView = () => {
    const term = normalize(search.value);
    return catalog.spells.filter(spell => spell.catalogId === catalogSelect.value && (!term || normalize(`${spell.name} ${spell.originalName} ${spell.id} ${spell.school}`).includes(term)));
  };
  const fillSpellOptions = preferredId => {
    const matches = spellsForView();
    spellSelect.replaceChildren();
    for (const spell of matches) { const label = spell.level === null ? spell.levelLabel || 'Sem nível' : spell.level === 0 ? 'Truque' : `${spell.level}º`; const option = node('option', '', `${spell.name} — ${label}`); option.value = spell.id; spellSelect.append(option); }
    if (preferredId && matches.some(spell => spell.id === preferredId)) spellSelect.value = preferredId;
    else if (preferredId) { const placeholder = node('option', '', 'Selecione uma magia do resultado'); placeholder.value = ''; placeholder.selected = true; placeholder.disabled = true; spellSelect.prepend(placeholder); }
    resultCount.textContent = `${matches.length.toLocaleString('pt-BR')} magia(s) neste resultado.`;
    return matches;
  };
  const populate = spell => {
    selected = spell; original = clone(spell);
    protectedId.textContent = `ID protegido: ${spell.id} · sourceId protegido: ${spell.sourceId} · catálogo protegido: ${spell.catalogLabel}`;
    for (const definition of definitions) {
      const input = inputs.get(definition.field); const value = spell[definition.field];
      if (definition.checkbox) input.checked = Boolean(value);
      else if (definition.level) input.value = value === null ? '' : String(value);
      else if (definition.number) input.value = value ?? '';
      else if (definition.list) input.value = (value || []).join('\n');
      else input.value = value ?? '';
    }
    feedback.className = 'admin-feedback'; feedback.textContent = ''; reload.hidden = true; applyPreview(); updateButtons();
  };
  const loadSpell = async summary => {
    if (!summary) return;
    busy = true; updateButtons(); feedback.className = 'admin-feedback'; feedback.textContent = 'Carregando a magia selecionada…';
    try {
      const result = await adminRequest(`spell?id=${encodeURIComponent(summary.id)}&catalog=${encodeURIComponent(summary.catalogId)}`);
      populate(result.spell);
    } catch (error) { feedback.className = 'admin-feedback admin-feedback-error'; feedback.textContent = friendlyError(error); }
    finally { busy = false; updateButtons(); }
  };

  const initial = fillSpellOptions()[0];
  await loadSpell(initial);
  form.addEventListener('input', updateButtons);
  catalogSelect.addEventListener('change', async () => {
    if (!discardAllowed()) { catalogSelect.value = selected.catalogId; return; }
    search.value = ''; const matches = fillSpellOptions(); await loadSpell(matches[0]);
  });
  search.addEventListener('input', () => fillSpellOptions(selected?.id));
  spellSelect.addEventListener('change', async () => {
    if (!discardAllowed()) { spellSelect.value = selected.id; return; }
    const summary = catalog.spells.find(spell => spell.id === spellSelect.value && spell.catalogId === catalogSelect.value); await loadSpell(summary);
  });
  previewButton.addEventListener('click', () => {
    if (!form.reportValidity()) return;
    applyPreview(); feedback.className = 'admin-feedback admin-feedback-success'; feedback.textContent = 'Preview aplicado somente nesta tela. Nenhuma alteração foi persistida.';
  });
  form.addEventListener('submit', async event => {
    event.preventDefault();
    const diff = differences();
    if (!diff.length || busy || !form.reportValidity() || !await confirmChanges(selected.name, diff, 'Magia')) return;
    const changes = Object.fromEntries(diff.map(item => [item.field, item.after]));
    busy = true; updateButtons(); feedback.className = 'admin-feedback'; feedback.textContent = 'Salvando…';
    try {
      const result = await adminRequest('spell', { method: 'POST', body: { spellId: selected.id, catalogId: selected.catalogId, changes, expected: { entryHash: selected.revision.entryHash } } });
      const index = catalog.spells.findIndex(spell => spell.id === selected.id && spell.catalogId === selected.catalogId);
      catalog.spells[index] = { ...catalog.spells[index], name: result.spell.name, originalName: result.spell.originalName, level: result.spell.level, levelLabel: result.spell.levelLabel, school: result.spell.school };
      populate(result.spell); fillSpellOptions(result.spell.id);
      feedback.className = 'admin-feedback admin-feedback-success';
      feedback.textContent = result.mode === 'github' ? 'Commit criado. Alterações enviadas ao GitHub; a publicação ocorrerá após o próximo deployment da Vercel.' : 'Simulação concluída em memória, sem commit ou gravação local.';
    } catch (error) { feedback.className = 'admin-feedback admin-feedback-error'; feedback.textContent = friendlyError(error); reload.hidden = !(error instanceof AdminApiError && error.status === 409); }
    finally { busy = false; updateButtons(); }
  });
  reload.addEventListener('click', () => renderSpellEditor(main, setTitle));
  window.onbeforeunload = event => { if (differences().length) { event.preventDefault(); event.returnValue = ''; } };
  window.GRIMORIO_ADMIN_HAS_UNSAVED = () => differences().length > 0;
}
