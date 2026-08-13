import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { validateFeatPackage } from "../scripts/feat-validator.js";
import { buildFeatSource } from "../scripts/feat-materializer.js";

const here = path.dirname(fileURLToPath(import.meta.url));
const file = path.resolve(here, "../examples/feats/ryoko-yokai-realms-feats-package-v2.json");
const pkg = JSON.parse(fs.readFileSync(file, "utf8"));
const runtime = { systemId: "dnd5e", systemVersion: "5.3.3", foundryVersion: "13.351" };
const validation = validateFeatPackage(pkg, runtime);
if (!validation.ok) throw new Error(validation.errors.join("\n"));
if (validation.warnings.length) throw new Error(`Warnings inesperados:\n${validation.warnings.join("\n")}`);

const expected = { feats: 39, prerequisites: 22, repeatable: 2 };
for (const [key, value] of Object.entries(expected)) {
  if (Number(pkg.summary?.[key]) !== value) throw new Error(`Resumo ${key}: esperado ${value}, encontrado ${pkg.summary?.[key]}.`);
}
if (pkg.identity?.sourceIds?.length !== 1 || pkg.identity.sourceIds[0] !== "ryoko-yokai-realms") throw new Error("Pacote de Ryoko usa fonte inesperada.");
if (pkg.summary?.automation?.description !== 39) throw new Error(`Esperados 39 perfis description; encontrados ${pkg.summary?.automation?.description}.`);
if (pkg.summary?.automation?.full !== 0 || pkg.summary?.automation?.partial !== 0) throw new Error("Talentos de Ryoko não devem declarar automação mecânica homologada nesta integração.");

const ids = new Set();
for (const bundle of pkg.bundles) {
  if (ids.has(bundle.identity.grimorioId)) throw new Error(`grimorioId duplicado: ${bundle.identity.grimorioId}`);
  ids.add(bundle.identity.grimorioId);
  if (bundle.source?.sourceId !== "ryoko-yokai-realms") throw new Error(`${bundle.identity.name}: sourceId incorreto.`);
  if (bundle.source?.page < 216 || bundle.source?.page > 223) throw new Error(`${bundle.identity.name}: página fora de 216–223.`);
  if (bundle.automation?.tier !== "description") throw new Error(`${bundle.identity.name}: tier deve ser description.`);
  if (bundle.automation?.advancements?.length || bundle.automation?.effects?.length || bundle.automation?.activities?.length || bundle.automation?.uses || bundle.automation?.runtime?.length) throw new Error(`${bundle.identity.name}: perfil description contém automação não homologada.`);
  const item = buildFeatSource(bundle, { folderId: "ryoko-folder" });
  if (item.type !== "feat" || item.name !== bundle.identity.name) throw new Error(`${bundle.identity.name}: materialização básica inválida.`);
  if (item.folder !== "ryoko-folder") throw new Error(`${bundle.identity.name}: pasta de fonte não preservada.`);
  if (item.flags?.["grimorio-importer"]?.grimorioId !== bundle.identity.grimorioId) throw new Error(`${bundle.identity.name}: identidade Foundry não preservada.`);
}

console.log("GRIMORIO_IMPORTER_RYOKO_543_FEATS_OK", JSON.stringify({
  importer: "0.12.0",
  source: "ryoko-yokai-realms",
  feats: pkg.summary.feats,
  prerequisites: pkg.summary.prerequisites,
  repeatable: pkg.summary.repeatable,
  automation: pkg.summary.automation,
  materialization: "description-tier",
  target: runtime
}, null, 2));
