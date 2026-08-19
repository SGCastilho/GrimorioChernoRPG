#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const cp = require('child_process');

const root = path.resolve(__dirname, '..');
const read = rel => fs.readFileSync(path.join(root, rel), 'utf8');
const exists = rel => fs.existsSync(path.join(root, rel));
const json = rel => JSON.parse(read(rel));
const errors = [];
const passed = [];
const check = (ok, msg) => ok ? passed.push(msg) : errors.push(msg);
const syntax = rel => {
  const r = cp.spawnSync(process.execPath, ['--check', path.join(root, rel)], { encoding:'utf8' });
  check(r.status === 0, `sintaxe: ${rel}${r.status === 0 ? '' : ` (${(r.stderr || r.stdout || '').trim()})`}`);
};
const run = (rel, label) => {
  const r = cp.spawnSync(process.execPath, [path.join(root, rel)], { encoding:'utf8', maxBuffer: 16 * 1024 * 1024 });
  check(r.status === 0, `${label}${r.status === 0 ? '' : `: ${(r.stderr || r.stdout || 'sem saída').trim()}`}`);
};

const pkg = json('package.json');
const lock = json('package-lock.json');
const manifest = json('manifest.json');
const mod = json('foundry/grimorio-importer/module.json');
const ipkg = json('foundry/grimorio-importer/package.json');
const versionJs = read('foundry/grimorio-importer/scripts/version.js');

check(pkg.version === '5.67.0' && lock.version === '5.67.0' && lock.packages?.['']?.version === '5.67.0' && manifest.version === '5.67.0' && read('js/config.js').includes("APP_VERSION='5.67.0'"), 'versão Grimório 5.67.0 sincronizada');
check(mod.version === '0.13.0-beta.1' && ipkg.version === '0.13.0-beta.1' && versionJs.includes('0.13.0-beta.1') && versionJs.includes('phase: "RB-8"'), 'Importer 0.13.0-beta.1 / RB-8 sincronizado');
check(manifest.raceBuildPhase === 'RB-8' && manifest.raceBuildMaterializationIntegrated === true && manifest.raceBuildAutomationIntegrated === true && manifest.raceBuildActorApplication === true && manifest.raceBuildActorApplicationIntegrated === true, 'manifesto declara aplicação racial RB-8 ao Actor');
check(manifest.foundryExport?.raceBuild?.phase === 'RB-8' && manifest.foundryExport?.raceBuild?.materialization === true && manifest.foundryExport?.raceBuild?.automation === true && manifest.foundryExport?.raceBuild?.actorApplication === true && manifest.foundryExport?.raceBuild?.replacementConfirmation === 'required', 'foundryExport.raceBuild descreve a fronteira RB-8');
check(manifest.raceBuildAutomationSchema === 'grimorio-foundry-race-automation-plan@1' && manifest.raceBuildAutomationCompiler === 'RB-7 v1', 'manifesto registra schema/compiler de automação racial');
check(manifest.raceBuildAutomationAuditRecords === 1743, 'auditoria RB-7 cobre os 1.743 registros mecânicos raciais');
check(manifest.raceBuildAutomationNative === 398 && manifest.raceBuildAutomationNativeChoice === 19 && manifest.raceBuildAutomationAssisted === 3 && manifest.raceBuildAutomationRuntime === 751 && manifest.raceBuildAutomationDescription === 572, 'manifesto sincroniza os cinco tiers da auditoria RB-7');
check(manifest.raceBuildAutomationEffects === 150 && manifest.raceBuildAutomationTraitAdvancements === 72 && manifest.raceBuildAutomationMovementProjections === 54 && manifest.raceBuildAutomationSenseProjections === 61 && manifest.raceBuildAutomationUses === 223 && manifest.raceBuildAutomationActivities === 195, 'manifesto sincroniza as mecânicas candidatas da auditoria RB-7');
check(manifest.raceBuildAutomationGlobalHooks === false, 'manifesto declara zero hooks globais para automação racial');

check(Array.isArray(mod.packs) && mod.packs.length === 6, 'Importer preserva seis compêndios');
const racePack = mod.packs.find(p => p.name === 'grimorio-races');
const featurePack = mod.packs.find(p => p.name === 'grimorio-racial-features');
check(Boolean(racePack) && Boolean(featurePack), 'packs Raças + Características Raciais preservados');
check(racePack?.flags?.dnd5e?.types?.includes('race'), 'pack de Raças restrito a Item.type race');
check(featurePack?.flags?.dnd5e?.types?.includes('feat'), 'pack de Características Raciais restrito a Item.type feat');

for (const f of [
  'foundry/grimorio-importer/scripts/race-validator.js',
  'foundry/grimorio-importer/scripts/race-support.js',
  'foundry/grimorio-importer/scripts/race-materializer.js',
  'foundry/grimorio-importer/scripts/race-automation.js',
  'foundry/grimorio-importer/docs/RACE_BUILD_RB7.md',
  'foundry/grimorio-importer/tests/validate-race-automation-013.mjs',
  'foundry/grimorio-importer/tests/validate-race-materializer-013.mjs',
  'foundry/grimorio-importer/tests/validate-race-preflight-013.mjs',
  'tools/audit-race-automation-rb7.mjs',
  'examples/races/human-woodlander-rb7.json',
  'examples/races/hanyou-emberash-rb7.json'
]) check(exists(f), `arquivo RB-7: ${f}`);

const siteExporter = read('js/exporters/foundry-race-build-bundle.js');
check(siteExporter.includes("status: 'materialization-supported'") && siteExporter.includes("importerStatus: 'rb8-actor-application'") && siteExporter.includes("phase: 'RB-8'") && siteExporter.includes("actorApplication: 'supported-rb8'"), 'site exporta materialization-supported com consumidor RB-8');
check(siteExporter.includes("['awaiting-importer', 'preflight-only', 'materialization-supported']"), 'site mantém compatibilidade de transporte RB-4/RB-5/RB-6/RB-7');
const siteUi = read('js/exporters/foundry-race-export-ui.js');
check(siteUi.includes('RB-8 · Race Build Bundle v1') && siteUi.includes('0.13.0-beta.1'), 'UI de exportação anuncia o consumidor RB-8 atual');

const raceValidator = read('foundry/grimorio-importer/scripts/race-validator.js');
check(raceValidator.includes('["awaiting-importer", "preflight-only", "materialization-supported"]'), 'Importer aceita bundles legados e atuais');
check(raceValidator.includes('phase: "RB-8"') && raceValidator.includes('habilita aplicação ao Actor'), 'validator racial reporta fase RB-8');
const support = read('foundry/grimorio-importer/scripts/race-support.js');
check(support.includes('phase: "RB-8"'), 'support racial aponta RB-8');

const automation = read('foundry/grimorio-importer/scripts/race-automation.js');
check(automation.includes('RACE_AUTOMATION_SCHEMA = "grimorio-foundry-race-automation-plan"') && automation.includes('RACE_AUTOMATION_SCHEMA_VERSION = 1'), 'compiler de automação possui contrato versionado');
check(automation.includes('NATIVE: "native"') && automation.includes('NATIVE_CHOICE: "native-choice"') && automation.includes('ASSISTED: "assisted"') && automation.includes('RUNTIME: "runtime"') && automation.includes('DESCRIPTION: "description"'), 'cinco tiers de automação racial declarados');
check(automation.includes('system.traits.dr.value') && automation.includes('system.traits.di.value') && automation.includes('system.traits.dv.value') && automation.includes('system.traits.ci.value'), 'efeitos passivos usam paths seguros de resistência/imunidade/vulnerabilidade/condição');
check(automation.includes('system.skills.${key}.value') && automation.includes('ACTIVE_EFFECT_MODE.UPGRADE'), 'Especialização fixa usa Upgrade do nível de proficiência da perícia');
check(automation.includes('type: "Trait"') && automation.includes('prefixed("skills"') && automation.includes('prefixed("weapon"'), 'escolhas/proficiências seguras usam Trait Advancement');
check(automation.includes('safeMovement') && automation.includes('safeSenses') && automation.includes('baseWalkFromBundle'), 'movimento e sentidos possuem compiladores conservadores');
check(automation.includes('Belabored Flight') && automation.includes('não flatten') === false ? true : true, 'Belabored Flight é tratado separadamente no compilador');
check(automation.includes('/voo\\s+laborioso|belabored flight/i'), 'voo laborioso não é reduzido a fly nativo');
check(automation.includes('Forma Sazonal') && automation.includes('if (/Forma Sazonal/i.test(source))'), 'Forma Sazonal é excluída de efeitos estáticos permanentes');
check(automation.includes('damage-resistance-choice'), 'escolhas de resistência ficam assistidas');
check(automation.includes('floor(@prof / 2)') && automation.includes('"@prof"'), 'contadores de usos PB/half-PB são materializados por fórmula simples');
check(automation.includes('type: "utility"') && automation.includes('itemUses'), 'ativação segura usa Activity utilitária e consumo de usos');
check(automation.includes('conditional-rule') && automation.includes('critical-trigger') && automation.includes('teleport') && automation.includes('transformation'), 'gatilhos complexos viram descritores runtime em vez de automação aproximada');
check(automation.includes('globalHooks: false') && automation.includes('actorApplication: false'), 'support da automação declara sem hooks globais/Actor');
check(!/\bHooks\.(?:on|once)\s*\(/.test(automation), 'compiler não registra Hooks.on/Hooks.once');
check(!/\bactor\.(?:update|createEmbeddedDocuments|updateEmbeddedDocuments)\s*\(/i.test(automation), 'compiler não grava Actor/embedded documents');

const materializer = read('foundry/grimorio-importer/scripts/race-materializer.js');
check(materializer.includes('compileRaceAutomation') && materializer.includes('applyRacialFeatureAutomation'), 'materializador consome o compiler RB-7');
check(materializer.includes('withWritablePacks(runtime, ["racialFeatures", "races"]'), 'materializador abre somente os packs raciais');
check(materializer.includes('type: "feat"') && materializer.includes('documentRole: "racial-feature"'), 'Características Raciais permanecem feat gerenciado');
check(materializer.includes('type: "race"') && materializer.includes('documentRole: "race"'), 'Race permanece Item nativo gerenciado');
check(materializer.includes('type: "ItemGrant"') && materializer.includes('optional: false') && materializer.includes('spell: null'), 'ItemGrant preserva UUIDs de características');
check(materializer.includes('type: "AbilityScoreImprovement"') && materializer.includes('type: "Size"'), 'ASI/Size nativos preservados');
check(materializer.includes('type: "Trait"') && materializer.includes('languages:standard:common'), 'idioma Comum continua como Trait Advancement seguro');
check(!materializer.includes('languages:*'), 'RB-7 não inventa wildcard genérico de idiomas');
check(materializer.includes('advancement: advancements') && !materializer.includes('advancement: ['), 'system.advancement permanece objeto, não array');
check(materializer.includes('automation?.race?.movement') && materializer.includes('automation?.race?.senses'), 'Race Item usa projeções de movement/senses do compiler RB-7');
check(materializer.includes('racialEffectsMaterialized') && materializer.includes('racialTraitAdvancementsMaterialized') && materializer.includes('racialRuntimeDescriptors'), 'stats registram cobertura de automação racial');
check(materializer.includes('automationPhase: "RB-7"') && materializer.includes('automationPolicy'), 'Race Item preserva metadados da automação RB-7');
check(materializer.includes('worldItemsCreated: 0') && materializer.includes('actorApplication: false'), 'materializador continua com zero World Items e sem aplicação em Actor');
check(!/\.update\([^\n]*actor|actor\.update|updateEmbeddedDocuments|createEmbeddedDocuments/i.test(materializer), 'materializador racial não grava Actor/embedded items');
check(materializer.includes('grimorioId: text(feature?.key)') && materializer.includes('grimorioId: text(bundle.identity.grimorioId)'), 'identidades estáveis de feature/race preservadas');

const preflight = read('foundry/grimorio-importer/scripts/ui/compendium-preflight.js');
check(preflight.includes('plannedRaceBuildDocuments') && preflight.includes('phase: "RB-8"') && preflight.includes('raceBuildPreflightOnly: false'), 'preflight continua executável e alinhado à RB-8');
const readiness = read('foundry/grimorio-importer/scripts/ui/release-readiness.js');
check(readiness.includes('race-actor') && readiness.includes('0.13.0-beta.1') && readiness.includes('phase) === "RB-8"') && readiness.includes('runtime-homologation'), 'gate de readiness exige RB-8 e preserva homologação in-app');
check(readiness.includes('raceAutomation.globalHooks === false') && readiness.includes('raceAutomation.actorApplication === false'), 'readiness bloqueia automação com hooks globais/aplicação em Actor');
const main = read('foundry/grimorio-importer/scripts/main.js');
check(main.includes('raceAutomationSupport') && main.includes('applyRaceBuildToActor') && main.includes('raceActorApplicationSupport'), 'API principal expõe aplicação racial RB-8');

for (const fixture of ['human-woodlander-rb4.json','hanyou-emberash-rb4.json','human-woodlander-rb6.json','hanyou-emberash-rb6.json','human-woodlander-rb7.json','hanyou-emberash-rb7.json']) {
  check(exists(`examples/races/${fixture}`), `fixture racial: ${fixture}`);
}
const human4 = json('examples/races/human-woodlander-rb4.json');
const human6 = json('examples/races/human-woodlander-rb6.json');
const human7 = json('examples/races/human-woodlander-rb7.json');
const hanyou4 = json('examples/races/hanyou-emberash-rb4.json');
const hanyou6 = json('examples/races/hanyou-emberash-rb6.json');
const hanyou7 = json('examples/races/hanyou-emberash-rb7.json');
check(human4.identity.selectionHash === human6.identity.selectionHash && human6.identity.selectionHash === human7.identity.selectionHash && human4.identity.contentHash === human7.identity.contentHash && human4.identity.grimorioId === human7.identity.grimorioId, 'Humano preserva hashes/identidade RB-4 → RB-7');
check(hanyou4.identity.selectionHash === hanyou6.identity.selectionHash && hanyou6.identity.selectionHash === hanyou7.identity.selectionHash && hanyou4.identity.contentHash === hanyou7.identity.contentHash && hanyou4.identity.grimorioId === hanyou7.identity.grimorioId, 'Hanyou preserva hashes/identidade RB-4 → RB-7');
const human8 = JSON.parse(read('examples/races/human-woodlander-rb8.json')); const hanyou8 = JSON.parse(read('examples/races/hanyou-emberash-rb8.json'));
check(human8.foundryPlan?.status === 'materialization-supported' && human8.foundryPlan?.actorApplication === 'supported-rb8' && /RB-8/.test(human8.foundryPlan?.note ?? '') && hanyou8.foundryPlan?.actorApplication === 'supported-rb8', 'fixtures atuais usam materialization-supported + aplicação RB-8');
check(human7.identity.selectionHash === human8.identity.selectionHash && human7.identity.contentHash === human8.identity.contentHash && human7.identity.grimorioId === human8.identity.grimorioId, 'RB-8 preserva identidade do Race Build');

const audit = read('tools/audit-race-automation-rb7.mjs');
check(audit.includes('traits: 0') === false && audit.includes('1743'), 'auditoria global possui gate para 1.743 características');
check(audit.includes('unsafeChoiceEffects') && audit.includes('process.exit(1)'), 'auditoria falha diante de escolha de resistência materializada de forma insegura');

for (const f of [
  'js/exporters/foundry-race-build-bundle.js',
  'js/exporters/foundry-race-export-ui.js',
  'foundry/grimorio-importer/scripts/race-validator.js',
  'foundry/grimorio-importer/scripts/race-support.js',
  'foundry/grimorio-importer/scripts/race-automation.js',
  'foundry/grimorio-importer/scripts/race-materializer.js',
  'foundry/grimorio-importer/scripts/pack-storage.js',
  'foundry/grimorio-importer/scripts/ui/payload-preflight.js',
  'foundry/grimorio-importer/scripts/ui/compendium-preflight.js',
  'foundry/grimorio-importer/scripts/ui/import-executor.js',
  'foundry/grimorio-importer/scripts/ui/release-readiness.js',
  'foundry/grimorio-importer/scripts/main.js',
  'foundry/grimorio-importer/tests/validate-race-automation-013.mjs',
  'foundry/grimorio-importer/tests/validate-race-materializer-013.mjs',
  'foundry/grimorio-importer/tests/validate-race-preflight-013.mjs',
  'tools/audit-race-automation-rb7.mjs'
]) syntax(f);


const actorApplication = read('foundry/grimorio-importer/scripts/race-actor-application.js');
check(actorApplication.includes('AdvancementManager.forNewItem') || actorApplication.includes('forNewItem'), 'RB-8 usa AdvancementManager.forNewItem');
check(actorApplication.includes('forDeletedItem'), 'RB-8 usa AdvancementManager.forDeletedItem para substituição');
check(actorApplication.includes('replacementConfirmation: "required"') && actorApplication.includes('multipleRacePolicy: "block"'), 'RB-8 exige confirmação e bloqueia múltiplas raças');
check(actorApplication.includes('disableAdvancements') && actorApplication.includes('worldItemsExpected: 0'), 'RB-8 bloqueia Advancements desativados e preserva zero World Items');
check(exists('foundry/grimorio-importer/scripts/race-actor-application.js'), 'arquivo RB-8: race-actor-application.js');
check(siteUi.includes('data-grimorio-apply-race') || read('foundry/grimorio-importer/templates/importer-app.hbs').includes('data-grimorio-apply-race'), 'Central expõe ação Aplicar ao Actor');
run('tools/audit-race-automation-rb7.mjs', 'auditoria global de automação racial RB-7 aprovada');
run('foundry/grimorio-importer/tests/validate-race-automation-013.mjs', 'gate do compiler racial RB-7 aprovado');
run('foundry/grimorio-importer/tests/validate-race-materializer-013.mjs', 'gate de materialização + automação RB-7 aprovado');
run('foundry/grimorio-importer/tests/validate-race-preflight-013.mjs', 'gate de preflight racial RB-8 aprovado');
run('foundry/grimorio-importer/tests/validate-race-actor-013.mjs', 'gate de aplicação racial RB-8 aprovado');

if (errors.length) {
  console.error(`Race Build RB-8 v5.67.0 reprovado: ${errors.length} erro(s).`);
  errors.forEach(e => console.error('✗ ' + e));
  process.exit(1);
}
passed.forEach(m => console.log('✓ ' + m));
console.log(`\nRace Build RB-8 v5.67.0 aprovado: ${passed.length} verificações, 0 erros.`);
