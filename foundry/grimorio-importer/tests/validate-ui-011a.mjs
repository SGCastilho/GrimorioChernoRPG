import assert from "node:assert/strict";

const instances = new Map();
const hookRegistry = new Map();

class MockApplicationV2 {
  static DEFAULT_OPTIONS = {};
  constructor() {
    this.rendered = false;
    this.minimized = false;
    this.renderCount = 0;
    this.frontCount = 0;
    this.maximizeCount = 0;
  }
  async render() {
    this.rendered = true;
    this.renderCount += 1;
    instances.set(this.constructor.DEFAULT_OPTIONS.id, this);
    return this;
  }
  bringToFront() { this.frontCount += 1; }
  async maximize() { this.minimized = false; this.maximizeCount += 1; }
  async _prepareContext() { return {}; }
  _attachPartListeners() {}
}

const HandlebarsApplicationMixin = Base => class extends Base {};

globalThis.foundry = {
  applications: {
    api: { ApplicationV2: MockApplicationV2, HandlebarsApplicationMixin },
    instances
  }
};
globalThis.game = {
  version: "13.351",
  system: { id: "dnd5e", version: "5.3.3" },
  user: { isGM: true }
};
globalThis.ui = { notifications: { warn() {} } };
globalThis.Hooks = {
  on(name, fn) { hookRegistry.set(name, fn); }
};

const appModule = await import("../scripts/ui/importer-app.js");
const sceneModule = await import("../scripts/ui/scene-control.js");

assert.equal(appModule.IMPORTER_APP_ID, "grimorio-importer-central");
assert.equal(appModule.IMPORTER_SECTIONS.length, 7);
assert.equal(appModule.GrimorioImporterApp.DEFAULT_OPTIONS.window.resizable, true);
assert.equal(appModule.GrimorioImporterApp.PARTS.main.template, "modules/grimorio-importer/templates/importer-app.hbs");

const first = await appModule.openImporter();
assert.ok(first instanceof appModule.GrimorioImporterApp, "A Central deveria abrir uma GrimorioImporterApp");
assert.equal(first.activeSection, "import");
assert.equal(first.renderCount, 1);
assert.equal(instances.size, 1, "A primeira abertura deveria registrar uma única instância");

const second = await appModule.openImporter({ section: "packs" });
assert.equal(second, first, "A segunda abertura deve reutilizar a mesma instância");
assert.equal(second.activeSection, "packs");
assert.equal(second.renderCount, 2, "A instância existente deve ser atualizada ao trocar de seção");
assert.equal(second.frontCount, 1, "A instância existente deve ser trazida para frente");
assert.equal(instances.size, 1, "Reabrir a Central não pode duplicar janelas");

await second.activateSection("inexistente", { render: false });
assert.equal(second.activeSection, "import", "Seções desconhecidas devem voltar para Importar");

sceneModule.registerImporterSceneControl();
const sceneHook = hookRegistry.get("getSceneControlButtons");
assert.equal(typeof sceneHook, "function", "Hook getSceneControlButtons não foi registrado");
const controls = { tokens: { tools: { select: { order: 1 }, target: { order: 2 } } } };
sceneHook(controls);
const tool = controls.tokens.tools[sceneModule.SCENE_CONTROL_TOOL];
assert.ok(tool, "Botão da Central não foi adicionado aos controles de Token");
assert.equal(tool.button, true);
assert.equal(tool.visible, true);
assert.equal(tool.icon, "fa-solid fa-book-open");
assert.equal(tool.order, 3);

const beforePlayer = Object.keys(controls.tokens.tools).length;
globalThis.game.user.isGM = false;
sceneHook(controls);
assert.equal(Object.keys(controls.tokens.tools).length, beforePlayer, "Jogadores não devem receber novos controles");
const denied = await appModule.openImporter();
assert.equal(denied, null, "Jogadores não devem conseguir abrir a Central pela API");

console.log("GRIMORIO_IMPORTER_011A_UI_OK", JSON.stringify({
  version: "0.12.0",
  regression: "0.11-A",
  sections: appModule.IMPORTER_SECTIONS.length,
  singleton: true,
  sceneControl: true,
  gmOnly: true
}, null, 2));
