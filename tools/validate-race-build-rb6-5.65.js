#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const cp = require('child_process');
const crypto = require('crypto');

const root = path.resolve(__dirname, '..');
const read = rel => fs.readFileSync(path.join(root, rel), 'utf8');
const exists = rel => fs.existsSync(path.join(root, rel));
const errors = [];
const passed = [];
const check = (ok, msg) => ok ? passed.push(msg) : errors.push(msg);
const json = rel => JSON.parse(read(rel));
const syntax = rel => {
  const r = cp.spawnSync(process.execPath, ['--check', path.join(root, rel)], { encoding: 'utf8' });
  check(r.status === 0, `sintaxe: ${rel}${r.status === 0 ? '' : ` (${(r.stderr || r.stdout || '').trim()})`}`);
};
const run = (rel, label) => {
  const r = cp.spawnSync(process.execPath, [path.join(root, rel)], { encoding: 'utf8' });
  check(r.status === 0, `${label}${r.status === 0 ? '' : `: ${(r.stderr || r.stdout || 'sem saída').trim()}`}`);
};

const pkg = json('package.json');
const lock = json('package-lock.json');
const manifest = json('manifest.json');
const mod = json('foundry/grimorio-importer/module.json');
const ipkg = json('foundry/grimorio-importer/package.json');
const versionJs = read('foundry/grimorio-importer/scripts/version.js');

check(pkg.version === '5.65.0' && lock.version === '5.65.0' && lock.packages?.['']?.version === '5.65.0' && manifest.version === '5.65.0' && read('js/config.js').includes("APP_VERSION='5.65.0'"), 'versão Grimório 5.65.0 sincronizada');
check(mod.version === '0.13.0-alpha.2' && ipkg.version === '0.13.0-alpha.2' && versionJs.includes('0.13.0-alpha.2') && versionJs.includes('phase: "RB-6"'), 'Importer 0.13.0-alpha.2 / RB-6 sincronizado');
check(manifest.raceBuildPhase === 'RB-6' && manifest.raceBuildMaterializationIntegrated === true && manifest.raceBuildActorApplication === false, 'manifesto declara materialização RB-6 sem aplicação em Actor');
check(manifest.foundryExport?.raceBuild?.phase === 'RB-6' && manifest.foundryExport?.raceBuild?.materialization === true && manifest.foundryExport?.raceBuild?.actorApplication === false, 'foundryExport.raceBuild descreve a fronteira RB-6');

check(Array.isArray(mod.packs) && mod.packs.length === 6, 'Importer declara seis compêndios');
const racePack = mod.packs.find(p => p.name === 'grimorio-races');
const featurePack = mod.packs.find(p => p.name === 'grimorio-racial-features');
check(Boolean(racePack) && Boolean(featurePack), 'packs Raças + Características Raciais declarados');
check(racePack?.flags?.dnd5e?.types?.includes('race'), 'pack de Raças restringido a Item.type race');
check(featurePack?.flags?.dnd5e?.types?.includes('feat'), 'pack de Características Raciais restringido a Item.type feat');

for (const f of [
  'foundry/grimorio-importer/scripts/race-validator.js',
  'foundry/grimorio-importer/scripts/race-support.js',
  'foundry/grimorio-importer/scripts/race-materializer.js',
  'foundry/grimorio-importer/docs/RACE_BUILD_RB6.md',
  'foundry/grimorio-importer/tests/validate-race-materializer-013.mjs',
  'foundry/grimorio-importer/tests/validate-race-preflight-013.mjs',
  'examples/races/human-woodlander-rb6.json',
  'examples/races/hanyou-emberash-rb6.json'
]) check(exists(f), `arquivo RB-6: ${f}`);

const siteExporter = read('js/exporters/foundry-race-build-bundle.js');
check(siteExporter.includes("status: 'materialization-supported'") && siteExporter.includes("importerStatus: 'rb6-materialization'"), 'site exporta o estado materialization-supported da RB-6');
check(siteExporter.includes("['awaiting-importer', 'preflight-only', 'materialization-supported']"), 'site mantém compatibilidade de transporte RB-4/RB-5/RB-6');
const raceValidator = read('foundry/grimorio-importer/scripts/race-validator.js');
check(raceValidator.includes('["awaiting-importer", "preflight-only", "materialization-supported"]'), 'Importer aceita bundles legados e atuais');

const payloadPreflight = read('foundry/grimorio-importer/scripts/ui/payload-preflight.js');
check(payloadPreflight.includes('type: "race-build"') && payloadPreflight.includes('executable: true') && payloadPreflight.includes('raceBuildPreflightOnly: false'), 'Central reconhece Race Build como executável na RB-6');
const compendiumPreflight = read('foundry/grimorio-importer/scripts/ui/compendium-preflight.js');
check(compendiumPreflight.includes('plannedRaceBuildDocuments') && compendiumPreflight.includes('phase: "RB-6"') && compendiumPreflight.includes('raceBuildPreflightOnly: false'), 'preflight planeja documentos raciais em RB-6');

const materializer = read('foundry/grimorio-importer/scripts/race-materializer.js');
check(materializer.includes('withWritablePacks(runtime, ["racialFeatures", "races"]'), 'materializador abre somente os dois packs raciais para escrita');
check(materializer.includes('type: "feat"') && materializer.includes('documentRole: "racial-feature"'), 'materializador cria Características Raciais como feat gerenciado');
check(materializer.includes('type: "race"') && materializer.includes('documentRole: "race"'), 'materializador cria Race Item gerenciado');
check(materializer.includes('type: "ItemGrant"') && materializer.includes('optional: false') && materializer.includes('spell: null'), 'ItemGrant Advancement concede características por UUID de compêndio');
check(materializer.includes('type: "AbilityScoreImprovement"') && materializer.includes('locked: [...ABILITY_KEYS]'), 'ASI fixo é materializado como Advancement bloqueado à distribuição resolvida');
check(materializer.includes('type: "Size"') && materializer.includes('configuration: { sizes: [size] }'), 'tamanho resolvido usa Size Advancement');
check(materializer.includes('type: "Trait"') && materializer.includes('languages:standard:common'), 'idioma Comum usa Trait Advancement com identificador DnD5e explícito');
check(!materializer.includes('languages:*'), 'RB-6 não inventa wildcard genérico de idiomas');
check(materializer.includes('advancement: advancements') && !materializer.includes('advancement: ['), 'system.advancement é objeto, não array');
check(materializer.includes('walk: Number.isFinite(walk)') && materializer.includes('units: "m"'), 'deslocamento racial é projetado em metros');
check(!/movementFromBundle[\s\S]{0,500}\bbonus\s*:/.test(materializer) && !/movementFromBundle[\s\S]{0,500}\bspecial\s*:/.test(materializer), 'Race movement não serializa campos bonus/special desabilitados pelo modelo');
check(!/creatureTypeFromBundle[\s\S]{0,700}\bswarm\s*:/.test(materializer), 'Race type não serializa swarm');
check(materializer.includes('nativePolicy: "description-first"'), 'Características Raciais permanecem description-first por padrão');
check(materializer.includes('worldItemsCreated: 0') && materializer.includes('actorApplication: false'), 'RB-6 declara zero World Items e sem aplicação em Actor');
check(!/\.update\([^\n]*actor|actor\.update|updateEmbeddedDocuments|createEmbeddedDocuments/i.test(materializer), 'materializador racial não grava Actor/embedded items');
check(materializer.includes('grimorioId: text(feature?.key)') && materializer.includes('grimorioId: text(bundle.identity.grimorioId)'), 'reimportação usa identidades estáveis separadas para feature e race');

const main = read('foundry/grimorio-importer/scripts/main.js');
check(main.includes('materializeRaceBuild') && main.includes('importRaceBuild') && main.includes('isRaceBuildBundle(payload)'), 'main despacha Race Build para o materializador RB-6');
check(!main.includes('materialização racial permanece desabilitada até a RB-6'), 'bloqueio histórico de escrita RB-5 removido');

for (const fixture of ['human-woodlander-rb4.json','hanyou-emberash-rb4.json','human-woodlander-rb6.json','hanyou-emberash-rb6.json']) {
  const f = `examples/races/${fixture}`;
  check(exists(f), `fixture racial: ${fixture}`);
}
const human4 = json('examples/races/human-woodlander-rb4.json');
const human6 = json('examples/races/human-woodlander-rb6.json');
const hanyou4 = json('examples/races/hanyou-emberash-rb4.json');
const hanyou6 = json('examples/races/hanyou-emberash-rb6.json');
check(human4.identity.selectionHash === human6.identity.selectionHash && human4.identity.contentHash === human6.identity.contentHash && human4.identity.grimorioId === human6.identity.grimorioId, 'fixture Humano preserva hashes/identidade RB-4 → RB-6');
check(hanyou4.identity.selectionHash === hanyou6.identity.selectionHash && hanyou4.identity.contentHash === hanyou6.identity.contentHash && hanyou4.identity.grimorioId === hanyou6.identity.grimorioId, 'fixture Hanyou preserva hashes/identidade RB-4 → RB-6');
check(human6.foundryPlan?.status === 'materialization-supported' && hanyou6.foundryPlan?.status === 'materialization-supported', 'fixtures atuais usam foundryPlan materialization-supported');

for (const f of [
  'js/exporters/foundry-race-build-bundle.js',
  'js/exporters/foundry-race-export-ui.js',
  'foundry/grimorio-importer/scripts/race-validator.js',
  'foundry/grimorio-importer/scripts/race-support.js',
  'foundry/grimorio-importer/scripts/race-materializer.js',
  'foundry/grimorio-importer/scripts/pack-storage.js',
  'foundry/grimorio-importer/scripts/ui/payload-preflight.js',
  'foundry/grimorio-importer/scripts/ui/compendium-preflight.js',
  'foundry/grimorio-importer/scripts/ui/import-executor.js',
  'foundry/grimorio-importer/scripts/ui/release-readiness.js',
  'foundry/grimorio-importer/scripts/main.js',
  'foundry/grimorio-importer/tests/validate-race-materializer-013.mjs',
  'foundry/grimorio-importer/tests/validate-race-preflight-013.mjs'
]) syntax(f);

run('foundry/grimorio-importer/tests/validate-race-materializer-013.mjs', 'gate de materialização racial RB-6 aprovado');
run('foundry/grimorio-importer/tests/validate-race-preflight-013.mjs', 'gate de preflight racial RB-6 aprovado');

if (errors.length) {
  console.error(`Race Build RB-6 v5.65.0 reprovado: ${errors.length} erro(s).`);
  errors.forEach(e => console.error('✗ ' + e));
  process.exit(1);
}
passed.forEach(m => console.log('✓ ' + m));
console.log(`\nRace Build RB-6 v5.65.0 aprovado: ${passed.length} verificações, 0 erros.`);
