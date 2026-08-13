import { openImporter } from "./importer-app.js";

export const SCENE_CONTROL_TOOL = "grimorioImporter";

function nextOrder(tools) {
  const orders = Object.values(tools ?? {}).map(tool => Number(tool?.order)).filter(Number.isFinite);
  return (orders.length ? Math.max(...orders) : 0) + 1;
}

export function registerImporterSceneControl() {
  Hooks.on("getSceneControlButtons", controls => {
    if (!globalThis.game?.user?.isGM) return;
    const tokenControl = controls?.tokens;
    if (!tokenControl?.tools) return;

    tokenControl.tools[SCENE_CONTROL_TOOL] = {
      name: SCENE_CONTROL_TOOL,
      title: "GRIMORIO_IMPORTER.Central.Open",
      icon: "fa-solid fa-book-open",
      order: nextOrder(tokenControl.tools),
      button: true,
      visible: true,
      onChange: () => { void openImporter({ section: "import" }); }
    };
  });
}
