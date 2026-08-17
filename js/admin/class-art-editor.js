import { adminRequest, AdminApiError } from './api-client.js';
import { confirmChanges } from './confirm-dialog.js';

const fieldDefinitions = [
  { kind: 'cover', field: 'image', label: 'Cover · Imagem', type: 'url' },
  { kind: 'cover', field: 'position', label: 'Cover · Position', type: 'text' },
  { kind: 'cover', field: 'blur', label: 'Cover · Blur', type: 'number', min: 0, max: 12, step: 0.1 },
  { kind: 'cover', field: 'overlay', label: 'Cover · Overlay', type: 'number', min: 0, max: 0.9, step: 0.01 },
  { kind: 'detailArt', field: 'image', label: 'Detail Art · Imagem', type: 'url' },
  { kind: 'detailArt', field: 'position', label: 'Detail Art · Position', type: 'text' },
  { kind: 'detailArt', field: 'blur', label: 'Detail Art · Blur', type: 'number', min: 0, max: 12, step: 0.1 },
  { kind: 'detailArt', field: 'overlay', label: 'Detail Art · Overlay', type: 'number', min: 0, max: 0.9, step: 0.01 },
  { kind: 'detailArt', field: 'scale', label: 'Detail Art · Scale', type: 'number', min: 1, max: 1.25, step: 0.01 }
];

const clone = value => JSON.parse(JSON.stringify(value));

function node(name, className, text) {
  const element = document.createElement(name);
  if (className) element.className = className;
  if (text !== undefined) element.textContent = text;
  return element;
}

function inputFor(definition) {
  const wrapper = node('label', 'admin-field');
  const label = node('span', '', definition.label.split(' · ')[1]);
  const input = node('input');
  input.type = definition.type === 'url' ? 'text' : definition.type;
  if (definition.type === 'url') input.inputMode = 'url';
  input.name = `${definition.kind}.${definition.field}`;
  input.autocomplete = 'off';
  if (definition.type === 'url') input.placeholder = 'https://imgur.com/... ou assets/...';
  if (definition.field === 'position') input.placeholder = 'center 10%';
  for (const key of ['min', 'max', 'step']) if (definition[key] !== undefined) input[key] = String(definition[key]);
  input.required = definition.field !== 'image';
  wrapper.append(label, input);
  return { wrapper, input };
}

function normalizeImage(value) {
  const image = String(value || '').trim();
  if (!image) return '';
  if (image.startsWith('assets/')) return `/${image}`;
  const match = image.match(/^https?:\/\/(?:www\.|i\.)?imgur\.com\/([A-Za-z0-9]+)(?:\.(png|jpe?g|webp|gif))?(?:[?#].*)?$/i);
  return match ? `https://i.imgur.com/${match[1]}.${(match[2] || 'png').toLowerCase()}` : image;
}

function previewCard(label) {
  const card = node('article', 'admin-preview-card');
  const visual = node('div', 'admin-preview-visual');
  const media = node('div', 'admin-preview-media');
  const overlay = node('div', 'admin-preview-overlay');
  const caption = node('div', 'admin-preview-caption', label);
  visual.append(media, overlay, caption);
  card.append(visual);
  return { card, media, overlay };
}

function setPreview(preview, settings, scale = 1) {
  const image = normalizeImage(settings.image);
  preview.media.style.backgroundImage = image ? `url("${image.replace(/["\\]/g, '\\$&')}")` : 'none';
  preview.media.style.backgroundPosition = settings.position;
  preview.media.style.filter = `blur(${settings.blur}px)`;
  preview.media.style.transform = `scale(${scale})`;
  preview.overlay.style.background = `rgba(5, 8, 15, ${settings.overlay})`;
  preview.card?.classList?.toggle('admin-preview-empty', !image);
}

function friendlyError(error) {
  if (!(error instanceof AdminApiError)) return 'Falha inesperada ao concluir a operação.';
  const labels = {
    UNAUTHENTICATED: 'Falha de autenticação. Entre novamente.',
    INVALID_CREDENTIALS: 'Falha de autenticação.',
    CONFLICT: 'Conflito de versão: esta classe mudou no GitHub. Recarregue os dados.',
    GITHUB_UNAVAILABLE: 'GitHub indisponível no momento.',
    GITHUB_AUTH_FAILED: 'A credencial GitHub configurada foi recusada.',
    FILE_NOT_FOUND: 'Arquivo configurado não encontrado.',
    INVALID_VALUE: 'Falha de validação: revise os campos.',
    INVALID_FIELD: 'A requisição contém um campo não permitido.',
    NETWORK_ERROR: 'Não foi possível acessar a API administrativa.'
  };
  return labels[error.code] || error.message;
}

export async function renderClassArtEditor(main, setTitle) {
  setTitle('Artes de Classes');
  main.replaceChildren(node('p', 'admin-loading', 'Carregando as artes atuais…'));
  let catalog;
  try {
    catalog = await adminRequest('class-art');
  } catch (error) {
    const section = node('section', 'admin-empty');
    section.append(node('h1', '', 'Não foi possível abrir o editor'), node('p', '', friendlyError(error)));
    main.replaceChildren(section);
    return;
  }

  let selected = catalog.classes[0];
  let original = clone(selected);
  let busy = false;
  const inputs = new Map();
  const page = node('section', 'admin-editor');
  const heading = node('div', 'admin-page-heading');
  const headingText = node('div');
  headingText.append(node('p', 'admin-eyebrow', 'CMS Git-backed'), node('h1', '', 'Artes de Classes'), node('p', 'admin-lede', 'Edite Cover e Detail Art usando os IDs reais do Grimório. Preview não persiste; somente Salvar pode criar commit.'));
  const mode = node('span', `admin-mode admin-mode-${catalog.mode}`, catalog.mode === 'github' ? 'Escrita GitHub' : 'Modo mock');
  heading.append(headingText, mode);

  const form = node('form', 'admin-art-form');
  const selector = node('label', 'admin-field admin-class-select');
  selector.append(node('span', '', 'Classe'));
  const select = node('select');
  for (const item of catalog.classes) {
    const option = node('option', '', item.name);
    option.value = item.id;
    select.append(option);
  }
  selector.append(select);
  form.append(selector);

  const editorGrid = node('div', 'admin-editor-grid');
  for (const [kind, title, help] of [
    ['cover', 'Cover', 'Imagem usada nos cards e listas de classes.'],
    ['detailArt', 'Detail Art', 'Imagem do cabeçalho interno; Scale controla a ampliação.']
  ]) {
    const fieldset = node('fieldset', 'admin-fieldset');
    const legend = node('legend', '', title);
    const description = node('p', 'admin-fieldset-help', help);
    fieldset.append(legend, description);
    for (const definition of fieldDefinitions.filter(item => item.kind === kind)) {
      const created = inputFor(definition);
      inputs.set(created.input.name, created.input);
      fieldset.append(created.wrapper);
    }
    editorGrid.append(fieldset);
  }
  form.append(editorGrid);

  const previewHeading = node('h2', 'admin-section-title', 'Pré-visualização');
  const previewGrid = node('div', 'admin-preview-grid');
  const coverPreview = previewCard('Cover');
  const detailPreview = previewCard('Detail Art');
  previewGrid.append(coverPreview.card, detailPreview.card);

  const actions = node('div', 'admin-actions');
  const previewButton = node('button', 'admin-button admin-button-secondary', 'Pré-visualizar');
  previewButton.type = 'button';
  const saveButton = node('button', 'admin-button admin-button-primary', 'Salvar');
  saveButton.type = 'submit';
  const reloadButton = node('button', 'admin-button admin-button-quiet', 'Recarregar do GitHub');
  reloadButton.type = 'button';
  reloadButton.hidden = true;
  actions.append(previewButton, saveButton, reloadButton);
  const feedback = node('p', 'admin-feedback');
  feedback.setAttribute('role', 'status');
  feedback.setAttribute('aria-live', 'polite');
  form.append(previewHeading, previewGrid, actions, feedback);
  page.append(heading, form);
  main.replaceChildren(page);

  const valueOf = definition => {
    const input = inputs.get(`${definition.kind}.${definition.field}`);
    return definition.type === 'number' ? Number(input.value) : input.value.trim();
  };
  const current = () => ({
    cover: Object.fromEntries(fieldDefinitions.filter(item => item.kind === 'cover').map(item => [item.field, valueOf(item)])),
    detailArt: Object.fromEntries(fieldDefinitions.filter(item => item.kind === 'detailArt').map(item => [item.field, valueOf(item)]))
  });
  const differences = () => fieldDefinitions.map(definition => ({
    ...definition,
    before: original[definition.kind][definition.field],
    after: valueOf(definition)
  })).filter(item => item.before !== item.after);
  const applyPreview = () => {
    const values = current();
    setPreview(coverPreview, values.cover, 1.04);
    setPreview(detailPreview, values.detailArt, values.detailArt.scale);
  };
  const updateButtons = () => {
    const dirty = differences().length > 0;
    previewButton.disabled = busy;
    saveButton.disabled = busy || !dirty || !form.checkValidity();
    select.disabled = busy;
  };
  const populate = () => {
    original = clone(selected);
    for (const definition of fieldDefinitions) inputs.get(`${definition.kind}.${definition.field}`).value = selected[definition.kind][definition.field];
    feedback.className = 'admin-feedback';
    feedback.textContent = '';
    reloadButton.hidden = true;
    applyPreview();
    updateButtons();
  };

  form.addEventListener('input', updateButtons);
  select.addEventListener('change', () => {
    if (differences().length && !window.confirm('Descartar as alterações não salvas desta classe?')) {
      select.value = selected.id;
      return;
    }
    selected = catalog.classes.find(item => item.id === select.value);
    populate();
  });
  previewButton.addEventListener('click', () => {
    if (!form.reportValidity()) return;
    applyPreview();
    feedback.className = 'admin-feedback admin-feedback-success';
    feedback.textContent = 'Preview aplicado somente nesta tela. Nenhuma alteração foi persistida.';
  });
  form.addEventListener('submit', async event => {
    event.preventDefault();
    const diff = differences();
    if (!diff.length || busy || !form.reportValidity() || !await confirmChanges(selected.name, diff)) return;
    busy = true;
    updateButtons();
    feedback.className = 'admin-feedback';
    feedback.textContent = 'Salvando…';
    const changes = {};
    for (const item of diff) {
      changes[item.kind] ||= {};
      changes[item.kind][item.field] = item.after;
    }
    const expected = {};
    if (changes.cover) expected.coverEntryHash = selected.revisions.coverEntryHash;
    if (changes.detailArt) expected.detailArtEntryHash = selected.revisions.detailArtEntryHash;
    try {
      const result = await adminRequest('class-art', { method: 'POST', body: { classId: selected.id, changes, expected } });
      const index = catalog.classes.findIndex(item => item.id === selected.id);
      catalog.classes[index] = result.class;
      selected = result.class;
      original = clone(selected);
      applyPreview();
      feedback.className = 'admin-feedback admin-feedback-success';
      feedback.textContent = result.mode === 'github'
        ? 'Commit criado. Alterações enviadas ao GitHub; o conteúdo aparecerá após o próximo deployment da Vercel.'
        : 'Simulação concluída. A alteração foi validada e gerada em memória, sem commit ou gravação local.';
    } catch (error) {
      feedback.className = 'admin-feedback admin-feedback-error';
      feedback.textContent = friendlyError(error);
      reloadButton.hidden = !(error instanceof AdminApiError && error.status === 409);
    } finally {
      busy = false;
      updateButtons();
    }
  });
  reloadButton.addEventListener('click', () => renderClassArtEditor(main, setTitle));
  window.onbeforeunload = event => {
    if (differences().length) {
      event.preventDefault();
      event.returnValue = '';
    }
  };
  window.GRIMORIO_ADMIN_HAS_UNSAVED = () => differences().length > 0;
  populate();
}
