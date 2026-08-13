const IMPORT_ALIASES = Object.freeze([
  "/grimorio-import",
  "/grimorio-import-batch",
  "/grimorio-import-package",
  "/grimorio-import-feats"
]);

export const COMMAND_ROUTES = Object.freeze({
  "/grimorio-import": Object.freeze({ section: "import", promptFiles: true, label: "Importar" }),
  "/grimorio-import-batch": Object.freeze({ section: "import", promptFiles: true, label: "Importar" }),
  "/grimorio-import-package": Object.freeze({ section: "import", promptFiles: true, label: "Importar" }),
  "/grimorio-import-feats": Object.freeze({ section: "import", promptFiles: true, label: "Importar" }),
  "/grimorio-status": Object.freeze({ section: "status", label: "Status" }),
  "/grimorio-packs": Object.freeze({ section: "packs", label: "Compêndios" }),
  "/grimorio-world-preview": Object.freeze({ section: "status", label: "Status" }),
  "/grimorio-automacao": Object.freeze({ section: "automation", label: "Automação" }),
  "/grimorio-auditoria-automacao": Object.freeze({ section: "audit", label: "Auditoria" }),
  "/grimorio-special": Object.freeze({ section: "special", label: "Actor Especial" }),
  "/grimorio-configurar": Object.freeze({ section: "special", action: "configure-special", label: "Actor Especial" }),
  "/grimorio-help": Object.freeze({ section: "help", label: "Ajuda" })
});

export function normalizeGrimorioCommand(message) {
  return String(message ?? "").trim().toLowerCase();
}

export function resolveGrimorioCommand(message) {
  const command = normalizeGrimorioCommand(message);
  const route = COMMAND_ROUTES[command];
  return route ? Object.freeze({ command, ...route }) : null;
}

export async function routeGrimorioCommand(message, { openImporter } = {}) {
  const route = resolveGrimorioCommand(message);
  if (!route) return Object.freeze({ handled: false, route: null, app: null });
  if (typeof openImporter !== "function") throw new Error("openImporter é obrigatório para rotear comandos do Grimório.");
  const app = await openImporter({
    section: route.section,
    promptFiles: Boolean(route.promptFiles),
    action: route.action ?? null,
    source: "chat-command"
  });
  return Object.freeze({ handled: true, route, app });
}

export function commandRoutingSupport() {
  const routes = Object.entries(COMMAND_ROUTES).map(([command, route]) => Object.freeze({ command, ...route }));
  return Object.freeze({
    phase: "0.11-F",
    centralFirst: true,
    commandsPreserved: true,
    directChatImportDisabled: true,
    importAliasesOpenCentral: true,
    importAliasesPromptFiles: true,
    administrativeCommandsOpenSections: true,
    configureCommandUsesCentralAction: true,
    legacyDirectPickerApiPreserved: true,
    routeCount: routes.length,
    importAliases: IMPORT_ALIASES,
    routes: Object.freeze(routes)
  });
}
