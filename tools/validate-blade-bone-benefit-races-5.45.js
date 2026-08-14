#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');
const vm = require('vm');
const root = path.resolve(__dirname, '..');
const errors = [];
const ok = msg => console.log('✓ ' + msg);
const fail = msg => errors.push(msg);

const scripts = [
  'data/lyre-races.js',
  'data/lyre-races-phase2-structure.js',
  'data/lyre-races-phase2-text.js',
  'data/lyre-races-phase3-structure.js',
  'data/lyre-races-phase3-text.js',
  'data/lyre-races-phase4-structure.js',
  'data/lyre-races-phase4-text.js',
  'data/blade-bone-benefit-races.js'
];
const context = { window: {}, console };
context.window.window = context.window;
vm.createContext(context);
for (const relative of scripts) {
  try { vm.runInContext(fs.readFileSync(path.join(root, relative), 'utf8'), context, {filename: relative}); }
  catch (error) { fail(`Falha ao carregar ${relative}: ${error.message}`); }
}
if (errors.length) finish();

const races = context.window.GRIMORIO_RACES || [];
const sourceId = 'blade-bone-benefit';
const sourceTitle = 'Somnus Domina — Blade, Bone, & Benefit';
const newRaceIds = ['animus','drackal','noxiamorph'];
const expectedAdditional = [
  {
    "parent": "Arhcoon",
    "name": "Tanuki",
    "page": 37
  },
  {
    "parent": "Beast Tribe",
    "name": "Hound Tribe",
    "page": 37
  },
  {
    "parent": "Beast Tribe",
    "name": "Saelkie",
    "page": 37
  },
  {
    "parent": "Beast Tribe",
    "name": "Swine Tribe",
    "page": 38
  },
  {
    "parent": "Birdfolk",
    "name": "Carrion",
    "page": 38
  },
  {
    "parent": "Birdfolk",
    "name": "Peacock",
    "page": 38
  },
  {
    "parent": "Birdfolk",
    "name": "Woodpecker",
    "page": 38
  },
  {
    "parent": "Capy’hado",
    "name": "Bolndest",
    "page": 38
  },
  {
    "parent": "Capy’hado",
    "name": "Jefa’dore",
    "page": 39
  },
  {
    "parent": "Dragonkin",
    "name": "Bloodscale",
    "page": 39
  },
  {
    "parent": "Dragonkin",
    "name": "Lake Serpent",
    "page": 39
  },
  {
    "parent": "Dwarf",
    "name": "Oil Dwarf",
    "page": 39
  },
  {
    "parent": "Dwarf",
    "name": "Vault Dwarf",
    "page": 40
  },
  {
    "parent": "Elf",
    "name": "Grave Elf",
    "page": 40
  },
  {
    "parent": "Elf",
    "name": "Odaisi Elf",
    "page": 40
  },
  {
    "parent": "Enáretos",
    "name": "Crestsworn",
    "page": 41
  },
  {
    "parent": "Enáretos",
    "name": "Endowment",
    "page": 41
  },
  {
    "parent": "Enáretos",
    "name": "Extermination",
    "page": 41
  },
  {
    "parent": "Feralus",
    "name": "Streetpad",
    "page": 42
  },
  {
    "parent": "Feralus",
    "name": "Wonder White",
    "page": 42
  },
  {
    "parent": "Firbolg",
    "name": "Cryptloom Firbolg",
    "page": 42
  },
  {
    "parent": "Firbolg",
    "name": "Nemeidre Firbolg",
    "page": 42
  },
  {
    "parent": "Flooflin",
    "name": "Shifthinde",
    "page": 43
  },
  {
    "parent": "Flooflin",
    "name": "Winking Heel",
    "page": 43
  },
  {
    "parent": "Framebilt",
    "name": "FRM06 Calculator",
    "page": 43
  },
  {
    "parent": "Framebilt",
    "name": "FRM09 Spinner",
    "page": 44
  },
  {
    "parent": "Gnome",
    "name": "Grim Gnome",
    "page": 44
  },
  {
    "parent": "Gnome",
    "name": "Korrigan",
    "page": 44
  },
  {
    "parent": "Goblin",
    "name": "Jackpot Goblin",
    "page": 44
  },
  {
    "parent": "Goblin",
    "name": "Kozoglin",
    "page": 44
  },
  {
    "parent": "Goblin",
    "name": "Moonburned",
    "page": 45
  },
  {
    "parent": "Goliath",
    "name": "Fomóire",
    "page": 45
  },
  {
    "parent": "Goliath",
    "name": "Onitouched",
    "page": 45
  },
  {
    "parent": "Hádislin",
    "name": "Endrench",
    "page": 46
  },
  {
    "parent": "Hádislin",
    "name": "Kertamina",
    "page": 46
  },
  {
    "parent": "Hádislin",
    "name": "Sultris",
    "page": 47
  },
  {
    "parent": "Halfling",
    "name": "Clanmaker",
    "page": 47
  },
  {
    "parent": "Halfling",
    "name": "Peacemaker Halfling",
    "page": 47
  },
  {
    "parent": "Hanyou",
    "name": "Gashadokuro",
    "page": 47
  },
  {
    "parent": "Hanyou",
    "name": "Jorolin",
    "page": 48
  },
  {
    "parent": "Hanyou",
    "name": "Rabbit Hanyou",
    "page": 49
  },
  {
    "parent": "Hanyou",
    "name": "Snow Child",
    "page": 49
  },
  {
    "parent": "Hanyou",
    "name": "Will’s Echo",
    "page": 50
  },
  {
    "parent": "Hobgoblin",
    "name": "Forewander",
    "page": 51
  },
  {
    "parent": "Hobgoblin",
    "name": "Subwalker",
    "page": 51
  },
  {
    "parent": "Human",
    "name": "Black Soul",
    "page": 51
  },
  {
    "parent": "Human",
    "name": "Enshrined",
    "page": 51
  },
  {
    "parent": "Human",
    "name": "Wanderer",
    "page": 51
  },
  {
    "parent": "Ilthrak-yar",
    "name": "Dragonfly",
    "page": 52
  },
  {
    "parent": "Ilthrak-yar",
    "name": "Farbeast",
    "page": 52
  },
  {
    "parent": "Kaijou",
    "name": "Tall Breed",
    "page": 53
  },
  {
    "parent": "Kits’adria",
    "name": "Blackwind",
    "page": 53
  },
  {
    "parent": "Kits’adria",
    "name": "Dra’kiri",
    "page": 53
  },
  {
    "parent": "Kits’adria",
    "name": "Feeblecoat",
    "page": 54
  },
  {
    "parent": "Kits’adria",
    "name": "Pheropaw",
    "page": 54
  },
  {
    "parent": "Kobold",
    "name": "Strawcatch Kobold",
    "page": 55
  },
  {
    "parent": "Kua Hono",
    "name": "Tendriled Reaper",
    "page": 55
  },
  {
    "parent": "Merfolk",
    "name": "Deep Siren",
    "page": 55
  },
  {
    "parent": "Merfolk",
    "name": "Redriver",
    "page": 55
  },
  {
    "parent": "Minotaur",
    "name": "Alonistís",
    "page": 56
  },
  {
    "parent": "Minotaur",
    "name": "Folica",
    "page": 56
  },
  {
    "parent": "Nephilim",
    "name": "Bond Burdened",
    "page": 56
  },
  {
    "parent": "Nephilim",
    "name": "Downfall",
    "page": 56
  },
  {
    "parent": "Nephilim",
    "name": "Sanctuary",
    "page": 57
  },
  {
    "parent": "Orc",
    "name": "Craniamight Orc",
    "page": 57
  },
  {
    "parent": "Orc",
    "name": "Deathland Orc",
    "page": 57
  },
  {
    "parent": "Orc",
    "name": "Urisk",
    "page": 58
  },
  {
    "parent": "Pétratára",
    "name": "Aidía",
    "page": 58
  },
  {
    "parent": "Pétratára",
    "name": "Moíraphorcys",
    "page": 58
  },
  {
    "parent": "Pétratára",
    "name": "Orgos’",
    "page": 58
  },
  {
    "parent": "Primordia",
    "name": "Lucky Soul",
    "page": 59
  },
  {
    "parent": "Primordia",
    "name": "Metal Anntiqe",
    "page": 59
  },
  {
    "parent": "Primordia",
    "name": "Necrosoul",
    "page": 59
  },
  {
    "parent": "Tarnished",
    "name": "Sanguine",
    "page": 60
  },
  {
    "parent": "Tarnished",
    "name": "Styxswimmer",
    "page": 60
  },
  {
    "parent": "Trealtin",
    "name": "Living Straw",
    "page": 60
  },
  {
    "parent": "Trealtin",
    "name": "Lunatishee",
    "page": 60
  },
  {
    "parent": "Trealtin",
    "name": "Roseblight",
    "page": 61
  },
  {
    "parent": "Vanquis",
    "name": "Revenant",
    "page": 61
  },
  {
    "parent": "Vanquis",
    "name": "Slóg",
    "page": 62
  },
  {
    "parent": "Vanquis",
    "name": "Unending Promise",
    "page": 62
  }
];

const byOriginal = new Map(races.map(r => [r.originalName, r]));
const sourceSubs = races.flatMap(r => (r.subraces || []).filter(s => s.sourceId === sourceId).map(s => ({parent:r, sub:s})));
const sourceTraits = sourceSubs.flatMap(x => x.sub.traits || []);

if (races.length !== 37) fail(`Esperadas 37 raças após a integração; encontradas ${races.length}.`);
else ok('37 raças carregadas');
const totalSubs = races.reduce((n,r)=>n+(r.subraces||[]).length,0);
if (totalSubs !== 286) fail(`Esperadas 286 subraças; encontradas ${totalSubs}.`);
else ok('286 subraças carregadas');
const totalTraits = races.reduce((n,r)=>n+(r.coreTraits||[]).length+(r.legacyTraits||[]).length+(r.mixedBloodTraits||[]).length+(r.subraces||[]).reduce((m,s)=>m+(s.traits||[]).length,0),0);
if (totalTraits !== 1266) fail(`Esperados 1.266 registros mecânicos; encontrados ${totalTraits}.`);
else ok('1.266 registros mecânicos carregados');
if (sourceSubs.length !== 90) fail(`Blade, Bone, & Benefit deve fornecer 90 subraças; encontradas ${sourceSubs.length}.`);
else ok('90 subraças de Blade, Bone, & Benefit identificadas');

for (const id of newRaceIds) {
  const race = races.find(r => r.id === id);
  if (!race) { fail(`Raça nova ausente: ${id}.`); continue; }
  if (race.sourceId !== sourceId || race.source !== sourceTitle) fail(`${race.name}: fonte incorreta.`);
  if (!race.originalName || !race.name || !race.summary || !(race.lore||[]).length) fail(`${id}: metadados/texto principal incompletos.`);
  if ((race.coreTraits||[]).length < 1 || (race.legacyTraits||[]).length < 1 || (race.mixedBloodTraits||[]).length < 1) fail(`${id}: traços fixos/Legado/Sangue Misto incompletos.`);
  if ((race.subraces||[]).length !== 3) fail(`${id}: esperadas 3 subraças, encontradas ${(race.subraces||[]).length}.`);
  for (const sub of race.subraces || []) {
    if (!sub.originalName || !sub.name || !sub.description || !(sub.traits||[]).length) fail(`${id}/${sub.id}: texto integral ausente.`);
    if (sub.sourceId !== sourceId) fail(`${id}/${sub.id}: sourceId incorreto.`);
    if (sub.page < 29 || sub.page > 34) fail(`${id}/${sub.id}: página inesperada ${sub.page}.`);
  }
}
ok('Animus, Drackal e Noxiamorfo conferidos com 3 subraças cada');

for (const item of expectedAdditional) {
  const parent = byOriginal.get(item.parent);
  if (!parent) { fail(`Raça-base de Lyre ausente para ${item.parent} / ${item.name}.`); continue; }
  const sub = (parent.subraces || []).find(s => s.originalName === item.name);
  if (!sub) { fail(`Subraça ausente: ${item.parent} / ${item.name}.`); continue; }
  if (sub.sourceId !== sourceId || sub.source !== sourceTitle) fail(`${item.parent} / ${item.name}: fonte incorreta.`);
  if (Number(sub.page) !== Number(item.page)) fail(`${item.parent} / ${item.name}: página esperada ${item.page}, encontrada ${sub.page}.`);
  if (!sub.name || !sub.description || !(sub.traits||[]).length) fail(`${item.parent} / ${item.name}: tradução/texto mecânico incompleto.`);
  for (const trait of sub.traits || []) if (!trait.name || !trait.originalName || !trait.description) fail(`${item.parent} / ${item.name}: traço incompleto ${trait.id || '(sem id)'}.`);
}
if (!errors.some(e => e.startsWith('Subraça ausente') || e.startsWith('Raça-base'))) ok('81 subraças adicionais conferidas contra a lista canônica do capítulo');

const additionalCount = sourceSubs.filter(x => !newRaceIds.includes(x.parent.id)).length;
if (additionalCount !== 81) fail(`Esperadas 81 subraças anexadas a raças existentes; encontradas ${additionalCount}.`);
else ok('81 subraças vinculadas às raças-base existentes');

const hanyouBbb = (races.find(r => r.id === 'hanyou')?.subraces || []).filter(s => s.sourceId === sourceId);
if (hanyouBbb.length !== 5) fail(`Hanyou: esperadas 5 novas linhagens, encontradas ${hanyouBbb.length}.`);
for (const sub of hanyouBbb) {
  const roles = new Set((sub.traits||[]).map(t => t.heritageRole).filter(Boolean));
  if (!roles.has('lineage') || !roles.has('rule') || !roles.has('positive') || !roles.has('detrimental')) fail(`Hanyou/${sub.originalName}: grupos de Herança incompletos.`);
}
if (hanyouBbb.length === 5 && !errors.some(e => e.startsWith('Hanyou/'))) ok('5 linhagens Hanyou preservam agrupamento especial de Herança');

for (const x of sourceSubs) {
  if (!x.sub.originalName || !x.sub.name || !x.sub.description) fail(`Subraça BBB incompleta em ${x.parent.id}/${x.sub.id}.`);
  if (!Number.isFinite(Number(x.sub.page)) || Number(x.sub.page) < 29 || Number(x.sub.page) > 62) fail(`Página fora do Capítulo VII em ${x.parent.id}/${x.sub.id}: ${x.sub.page}.`);
}
for (const trait of sourceTraits) {
  if (!trait.originalName || !trait.name || !trait.description) fail(`Traço de subraça BBB incompleto: ${trait.id || '(sem id)'}.`);
}
if (!errors.some(e => e.includes('BBB incompleto') || e.includes('Página fora'))) ok('Proveniência, páginas e textos mecânicos das subraças conferidos');

const firbolg = races.find(r => r.id === 'firbolg');
for (const originalName of ['Cryptloom Firbolg','Nemeidre Firbolg']) {
  const sub = firbolg?.subraces?.find(s => s.originalName === originalName);
  if (!sub?.traits?.some(t => t.originalName === 'Land’s Blessing')) fail(`${originalName}: Bênção da Terra não foi preservada como traço visível.`);
}
const primordiaBbb = (races.find(r => r.id === 'primordia')?.subraces || []).filter(s => s.sourceId === sourceId);
if (primordiaBbb.some(s => !s.elementalMagicSpells)) fail('Primordia: listas de Magia Elemental ausentes nas novas subraças.');
const hadislinBbb = (races.find(r => r.id === 'hadislin')?.subraces || []).filter(s => s.sourceId === sourceId);
if (hadislinBbb.some(s => !s.cursedLegacySpells)) fail('Hádislin: listas de Legado Amaldiçoado ausentes nas novas subraças.');
if (!errors.some(e => e.startsWith('Primordia:') || e.startsWith('Hádislin:') || e.includes('Bênção da Terra'))) ok('Estruturas especiais de Firbolg, Primordia e Hádislin preservadas');

const index = fs.readFileSync(path.join(root,'index.html'),'utf8');
const p4 = index.indexOf('data/lyre-races-phase4-text.js');
const bbb = index.indexOf('data/blade-bone-benefit-races.js');
if (bbb < 0 || p4 < 0 || bbb < p4) fail('index.html: blade-bone-benefit-races.js deve carregar após a Fase 4 de Lyre.');
else ok('Ordem de carregamento racial no index.html conferida');

const browser = fs.readFileSync(path.join(root,'js/race-browser.js'),'utf8');
if (!browser.includes('s.source||race.source')) fail('race-browser.js não prioriza a fonte da subraça em cards adicionados por livros posteriores.');
else ok('Interface prioriza proveniência própria da subraça');

const sourcesText = fs.readFileSync(path.join(root,'data/sources.js'),'utf8');
if (!sourcesText.includes("id: 'blade-bone-benefit'")) fail('Fonte blade-bone-benefit ausente de data/sources.js.');
const manifest = JSON.parse(fs.readFileSync(path.join(root,'manifest.json'),'utf8'));
if (manifest.version !== '5.45.0' || manifest.races !== 37 || manifest.raceSubraces !== 286 || manifest.raceTraitRecords !== 1266 || manifest.racesTextReviewed !== 37) fail('manifest.json não está sincronizado com a v5.45.0 racial.');
else ok('manifest.json sincronizado com a v5.45.0');
const cfg = fs.readFileSync(path.join(root,'js/config.js'),'utf8');
if (!cfg.includes("APP_VERSION='5.45.0'")) fail('APP_VERSION não está em 5.45.0.');
else ok('APP_VERSION sincronizado');

finish();
function finish() {
  if (errors.length) {
    console.error(`\nFalhas (${errors.length}):`);
    errors.forEach(e => console.error('✗ ' + e));
    process.exit(1);
  }
  console.log('\nValidação Blade, Bone, & Benefit — Raças v5.45 aprovada.');
}
