import { adminRequest, AdminApiError } from './api-client.js';
import { confirmChanges } from './confirm-dialog.js';

const labels = {
  'cover.image': 'Cover · Imagem', 'cover.position': 'Cover · Position', 'cover.blur': 'Cover · Blur', 'cover.overlay': 'Cover · Overlay',
  'detailArt.image': 'Detail Art · Imagem', 'detailArt.position': 'Detail Art · Position', 'detailArt.blur': 'Detail Art · Blur', 'detailArt.overlay': 'Detail Art · Overlay', 'detailArt.scale': 'Detail Art · Scale'
};

function node(name, className, text) {
  const result = document.createElement(name);
  if (className) result.className = className;
  if (text !== undefined) result.textContent = text;
  return result;
}

function field(form, kind, name, label, type = 'text', attributes = {}) {
  const wrapper = node('label', 'admin-field');
  wrapper.append(node('span', '', label));
  const input = document.createElement('input');
  input.name = `${kind}.${name}`;
  input.type = type;
  for (const [key, value] of Object.entries(attributes)) input.setAttribute(key, value);
  wrapper.append(input);
  form.append(wrapper);
  return input;
}

function artSection(title, kind, includeScale) {
  const section = node('section', 'admin-form-section');
  section.append(node('h2', '', title));
  const grid = node('div', 'admin-field-grid');
  const inputs = {
    image: field(grid, kind, 'image', 'Imagem', 'url', { maxlength: '2048', placeholder: 'https://imgur.com/… ou assets/…' }),
    position: field(grid, kind, 'position', 'Position', 'text', { maxlength: '40', placeholder: 'center 10%' }),
    blur: field(grid, kind, 'blur', 'Blur', 'number', { min: '0', max: '12', step: '0.1' }),
    overlay: field(grid, kind, 'overlay', 'Overlay', 'number', { min: '0', max: '0.9', step: '0.01' })
  };
  section.append(grid);
  if (includeScale) {
    const advanced = node('details', 'admin-advanced');
    advanced.append(node('summary', '', 'Configurações avançadas'));
    const advancedGrid = node('div', 'admin-field-grid');
    inputs.scale = field(advancedGrid, kind, 'scale', 'Scale', 'number', { min: '1', max: '1.25', step: '0.01' });
    advanced.append(advancedGrid);
    section.append(advanced);
  }
  return { section, inputs };
}

function clone(value) { return JSON.parse(JSON.stringify(value)); }

export async function renderClassArtEditor(main, setTitle) {
  setTitle('Artes de Classes');
  main.replaceChildren(node('p', 'admin-loading', 'Carregando as 27 classes…'));
  let catalog;
  try { catalog = await adminRequest('class-art'); }
  catch (error) { renderFatal(main, error); return; }

  let selected = catalog.classes[0];
  let original = clone(selected);
  let busy = false;
  const page = node('div', 'admin-page');
  const heading = node('div', 'admin-page-heading');
  const titleGroup = node('div');
  titleGroup.append(node('p', 'admin-eyebrow', 'Conteúdo Git-backed'), node('h1', '', 'Artes de Classes'), node('p', 'admin-lead', 'Edite os dois mapas reais do repositório com preview antes do commit.'));
  const mode = node('span', `admin-mode admin-mode-${catalog.mode}`, catalog.mode === 'github' ? 'GitHub · escrita real' : 'Mock · sem persistência');
  heading.append(titleGroup, mode);

  const picker = node('label', 'admin-picker');
  picker.append(node('span', '', 'Classe'));
  const select = document.createElement('select');
  for (const item of catalog.classes) { const option = document.createElement('option'); option.value = item.id; option.textContent = item.name; select.append(option); }
  picker.append(select);

  const form = node('form', 'admin-art-form');
  form.noValidate = true;
  const cover = artSection('Cover', 'cover', false);
  const detail = artSection('Detail Art', 'detailArt', true);
  form.append(cover.section, detail.section);

  const previews = node('section', 'admin-preview-section');
  previews.append(node('h2', '', 'Pré-visualização'));
  const previewGrid = node('div', 'admin-preview-grid');
  const coverPreview = previewCard('Cover');
  const detailPreview = previewCard('Detail Art');
  previewGrid.append(coverPreview.card, detailPreview.card);
  previews.append(previewGrid);

  const feedback = node('div', 'admin-feedback');
  feedback.setAttribute('role', 'status');
  feedback.setAttribute('aria-live', 'polite');
  const reload = node('button', 'admin-button admin-button-quiet', 'Recarregar do GitHub');
  reload.type = 'button'; reload.hidden = true;
  const actions = node('div', 'admin-actions');
  const previewButton = node('button', 'admin-button admin-button-secondary', 'Pré-visualizar');
  previewButton.type = 'button';
  const saveButton = node('button', 'admin-button admin-button-primary', 'Salvar');
  saveButton.type = 'submit'; saveButton.disabled = true;
  actions.append(previewButton, saveButton);
  form.append(previews, feedback, reload, actions);
  page.append(heading, picker, form);
  main.replaceChildren(page);

  const allInputs = { cover: cover.inputs, detailArt: detail.inputs };
  const populate = () => {
    for (const kind of ['cover', 'detailArt']) for (const [key, input] of Object.entries(allInputs[kind])) input.value = selected[kind][key];
    original = clone(selected); feedback.textContent = ''; reload.hidden = true; updateButtons(); applyPreview();
  };
  const values = () => ({
    cover: { image: cover.inputs.image.value.trim(), position: cover.inputs.position.value.trim(), blur: Number(cover.inputs.blur.value), overlay: Number(cover.inputs.overlay.value) },
    detailArt: { image: detail.inputs.image.value.trim(), position: detail.inputs.position.value.trim(), blur: Number(detail.inputs.blur.value), overlay: Number(detail.inputs.overlay.value), scale: Number(detail.inputs.scale.value) }
  });
  const differences = () => {
    const current = values(), result = [];
    for (const kind of ['cover', 'detailArt']) for (const fieldName of Object.keys(current[kind])) if (current[kind][fieldName] !== original[kind][fieldName]) result.push({ kind, field: fieldName, label: labels[`${kind}.${fieldName}`], before: original[kind][fieldName], after: current[kind][fieldName] });
    return result;
  };
  function updateButtons() { saveButton.disabled = busy || differences().length === 0; select.disabled = busy; previewButton.disabled = busy; }
  function applyPreview() {
    const current = values();
    setPreview(coverPreview.visual, current.cover, 1);
    setPreview(detailPreview.visual, current.detailArt, current.detailArt.scale);
    feedback.className = 'admin-feedback'; feedback.textContent = 'Preview aplicado apenas nesta tela. Nada foi salvo.';
  }
  form.addEventListener('input', updateButtons);
  previewButton.addEventListener('click', applyPreview);
  select.addEventListener('change', () => {
    if (differences().length && !window.confirm('Descartar as alterações não salvas desta classe?')) { select.value = selected.id; return; }
    selected = catalog.classes.find(item => item.id === select.value); populate();
  });
  form.addEventListener('submit', async event => {
    event.preventDefault();
    const diff = differences();
    if (!diff.length || busy || !(await confirmChanges(selected.name, diff))) return;
    busy = true; updateButtons(); feedback.className = 'admin-feedback'; feedback.textContent = 'Salvando…';
    const changes = {};
    for (const item of diff) { changes[item.kind] ||= {}; changes[item.kind][item.field] = item.after; }
    try {
      const result = await adminRequest('class-art', { method: 'POST', body: { classId: selected.id, changes, expected: { coverFileSha: catalog.revisions.coverFileSha, coverEntryHash: selected.revisions.coverEntryHash, detailFileSha: catalog.revisions.detailFileSha, detailEntryHash: selected.revisions.detailEntryHash } } });
      const index = catalog.classes.findIndex(item => item.id === selected.id);
      catalog.classes[index] = result.class; selected = result.class; catalog.revisions = result.revisions; original = clone(selected);
      feedback.className = 'admin-feedback admin-feedback-success';
      feedback.textContent = result.mode === 'github' ? 'Commit criado. Alterações enviadas ao GitHub; o conteúdo aparecerá após o próximo deployment da Vercel.' : 'Simulação concluída. O modo mock validou e gerou a alteração em memória, sem commit.';
    } catch (error) {
      feedback.className = 'admin-feedback admin-feedback-error'; feedback.textContent = friendlyError(error);
      reload.hidden = error instanceof AdminApiError && error.status === 409;
    } finally { busy = false; updateButtons(); }
  });
  reload.addEventListener('click', () => renderClassArtEditor(main, setTitle));
  window.onbeforeunload = event => { if (differences().length) { event.preventDefault(); event.returnValue = ''; } };
  window.GRIMORIO_ADMIN_HAS_UNSAVED = () => differences().length > 0;
  populate();
}

function previewCard(label) {
  const card = node('article', 'admin-preview-card');
  const visual = node('div', 'admin-preview-visual');
  visual.append(node('span', '', label));
  card.append(visual);
  return { card, visual };
}

function setPreview(element, settings, scale) {
  const url = settings.image ? `url("${settings.image.replace(/["\\]/g, '\\$&')}")` : 'none';
  element.style.backgroundImage = `linear-gradient(rgba(5, 8, 15, ${settings.overlay}), rgba(5, 8, 15, ${settings.overlay})), ${url}`;
  element.style.backgroundPosition = settings.position;
  element.style.filter = `blur(${settings.blur}px)`;
  element.style.transform = `scale(${scale || 1})`;
}

function friendlyError(error) {
  if (!(error instanceof AdminApiError)) return 'Falha inesperada ao salvar.';
  const labels = { UNAUTHENTICATED: 'Falha de autenticação. Entre novamente.', CONFLICT: 'Conflito de versão: a mesma entrada mudou no GitHub.', GITHUB_UNAVAILABLE: 'GitHub indisponível.', FILE_NOT_FOUND: 'Arquivo não encontrado.', INVALID_VALUE: 'Falha de validação: revise os campos.' };
  return labels[error.code] || error.message;
}

function renderFatal(main, error) {
  const page = node('section', 'admin-empty');
  page.append(node('h1', '', 'Não foi possível abrir o editor'), node('p', '', friendlyError(error)));
  main.replaceChildren(page);
}
