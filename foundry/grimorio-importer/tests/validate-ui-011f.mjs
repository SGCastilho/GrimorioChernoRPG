import assert from "node:assert/strict";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, "..");

const { IMPORTER_VERSION } = await import("../scripts/version.js");
const { centralParitySupport } = await import("../scripts/ui/central-support.js");
const {
  COMMAND_ROUTES,
  resolveGrimorioCommand,
  routeGrimorioCommand,
  commandRoutingSupport
} = await import("../scripts/ui/command-router.js");

assert.equal(IMPORTER_VERSION, "0.12.0");

const support = commandRoutingSupport();
assert.equal(support.phase, "0.11-F");
assert.equal(support.centralFirst, true);
assert.equal(support.commandsPreserved, true);
assert.equal(support.directChatImportDisabled, true);
assert.equal(support.importAliasesOpenCentral, true);
assert.equal(support.importAliasesPromptFiles, true);
assert.equal(support.administrativeCommandsOpenSections, true);
assert.equal(support.configureCommandUsesCentralAction, true);
assert.equal(support.legacyDirectPickerApiPreserved, true);
assert.equal(support.routeCount, 12);

const expected = {
  "/grimorio-import": { section: "import", promptFiles: true },
  "/grimorio-import-batch": { section: "import", promptFiles: true },
  "/grimorio-import-package": { section: "import", promptFiles: true },
  "/grimorio-import-feats": { section: "import", promptFiles: true },
  "/grimorio-status": { section: "status" },
  "/grimorio-packs": { section: "packs" },
  "/grimorio-world-preview": { section: "status" },
  "/grimorio-automacao": { section: "automation" },
  "/grimorio-auditoria-automacao": { section: "audit" },
  "/grimorio-special": { section: "special" },
  "/grimorio-configurar": { section: "special", action: "configure-special" },
  "/grimorio-help": { section: "help" }
};

for (const [command, route] of Object.entries(expected)) {
  assert.ok(COMMAND_ROUTES[command], `Rota ausente: ${command}`);
  const resolved = resolveGrimorioCommand(`  ${command.toUpperCase()}  `);
  assert.equal(resolved.command, command);
  assert.equal(resolved.section, route.section);
  assert.equal(Boolean(resolved.promptFiles), Boolean(route.promptFiles));
  assert.equal(resolved.action ?? null, route.action ?? null);
}
assert.equal(resolveGrimorioCommand("/nao-e-grimorio"), null);

const calls = [];
const fakeApp = { id: "central" };
for (const command of Object.keys(expected)) {
  const result = await routeGrimorioCommand(command, {
    async openImporter(options) { calls.push({ command, options }); return fakeApp; }
  });
  assert.equal(result.handled, true);
  assert.equal(result.app, fakeApp);
  assert.equal(result.route.command, command);
}
assert.equal(calls.length, 12);
for (const call of calls.slice(0, 4)) {
  assert.equal(call.options.section, "import");
  assert.equal(call.options.promptFiles, true);
  assert.equal(call.options.source, "chat-command");
}
const configureCall = calls.find(row => row.command === "/grimorio-configurar");
assert.equal(configureCall.options.section, "special");
assert.equal(configureCall.options.action, "configure-special");

const unknown = await routeGrimorioCommand("texto comum", { openImporter: async () => fakeApp });
assert.equal(unknown.handled, false);

const parity = centralParitySupport();
assert.equal(parity.phase, "0.12.0 Stable");
assert.equal(parity.basePhase, "0.11-G");
assert.equal(parity.chatCommandsRouteToCentral, true);
assert.equal(parity.importCommandsUseVisualPreflight, true);

const appSource = await fs.readFile(path.join(root, "scripts/ui/importer-app.js"), "utf8");
assert.match(appSource, /async promptImportFiles\(\)/);
assert.match(appSource, /openImporter\(\{ section = "import", promptFiles = false, action = null, source = "api" \} = \{\}\)/);
assert.match(appSource, /if \(promptFiles\) await app\.promptImportFiles\(\)/);
assert.match(appSource, /action === "configure-special"/);
assert.match(appSource, /buildLabel: IMPORTER_BUILD\.label/);
assert.match(appSource, /atalhos para as seções equivalentes da Central/);

const mainSource = await fs.readFile(path.join(root, "scripts/main.js"), "utf8");
assert.match(mainSource, /commandRoutingSupport/);
assert.match(mainSource, /resolveGrimorioCommand/);
assert.match(mainSource, /routeGrimorioCommand/);
assert.match(mainSource, /automação de Talentos 42\/42 homologada/);
assert.match(mainSource, /openBundleFilePicker,/); // API legada preservada
const chatHook = mainSource.slice(mainSource.indexOf('Hooks.on("chatMessage"'));
assert.match(chatHook, /resolveGrimorioCommand\(message\)/);
assert.match(chatHook, /routeGrimorioCommand\(message, \{ openImporter \}\)/);
assert.doesNotMatch(chatHook, /openBundleFilePicker\(\)/, "Comandos de chat não devem mais disparar importação direta");
assert.doesNotMatch(chatHook, /showStatus\(\)|showPacks\(\)|showAutomation\(\)|showSpecialStatus\(\)/, "Comandos administrativos devem abrir a Central em vez de executar notificações legadas");

const moduleJson = JSON.parse(await fs.readFile(path.join(root, "module.json"), "utf8"));
const packageJson = JSON.parse(await fs.readFile(path.join(root, "package.json"), "utf8"));
assert.equal(moduleJson.version, IMPORTER_VERSION);
assert.equal(packageJson.version, IMPORTER_VERSION);
assert.match(moduleJson.description, /versão estável 0\.12\.0/);

console.log("GRIMORIO_IMPORTER_011F_COMMAND_ROUTING_OK", JSON.stringify({
  version: IMPORTER_VERSION,
  phase: support.phase,
  routes: support.routeCount,
  importAliases: support.importAliases.length,
  centralFirst: support.centralFirst,
  directChatImportDisabled: support.directChatImportDisabled,
  legacyDirectPickerApiPreserved: support.legacyDirectPickerApiPreserved
}, null, 2));
