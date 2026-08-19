import { stableId } from "./materializer.js";
import { MODULE_ID } from "./pack-storage.js";

export const RACE_AUTOMATION_SCHEMA = "grimorio-foundry-race-automation-plan";
export const RACE_AUTOMATION_SCHEMA_VERSION = 1;
export const RACE_AUTOMATION_PHASE = "RB-7";
export const RACE_AUTOMATION_COMPILER_VERSION = 1;

export const RACE_AUTOMATION_TIER = Object.freeze({
  NATIVE: "native",
  NATIVE_CHOICE: "native-choice",
  ASSISTED: "assisted",
  RUNTIME: "runtime",
  DESCRIPTION: "description"
});

const ACTIVE_EFFECT_MODE = globalThis.CONST?.ACTIVE_EFFECT_MODES ?? {
  CUSTOM: 0, MULTIPLY: 1, ADD: 2, DOWNGRADE: 3, UPGRADE: 4, OVERRIDE: 5
};

const SKILLS = Object.freeze({
  acrobacia: "acr", adestrar_animais: "ani", arcana: "arc", atletismo: "ath",
  enganacao: "dec", historia: "his", intuicao: "ins", intimidacao: "itm",
  investigacao: "inv", medicina: "med", natureza: "nat", percepcao: "prc",
  atuacao: "prf", persuasao: "per", religiao: "rel", prestidigitacao: "slt",
  furtividade: "ste", sobrevivencia: "sur",
  acrobatics: "acr", animal_handling: "ani", athletics: "ath", deception: "dec",
  history: "his", insight: "ins", intimidation: "itm", investigation: "inv",
  medicine: "med", nature: "nat", perception: "prc", performance: "prf",
  persuasion: "per", religion: "rel", sleight_of_hand: "slt", stealth: "ste", survival: "sur"
});

const DAMAGE = Object.freeze({
  acido: "acid", acid: "acid",
  frio: "cold", cold: "cold",
  fogo: "fire", fire: "fire",
  eletrico: "lightning", eletricidade: "lightning", relampago: "lightning", lightning: "lightning",
  necrotico: "necrotic", necrotic: "necrotic",
  veneno: "poison", poison: "poison",
  psiquico: "psychic", psychic: "psychic",
  radiante: "radiant", radiant: "radiant",
  trovejante: "thunder", trovao: "thunder", thunder: "thunder",
  forca: "force", force: "force",
  contundente: "bludgeoning", bludgeoning: "bludgeoning",
  perfurante: "piercing", piercing: "piercing",
  cortante: "slashing", slashing: "slashing"
});

const CONDITIONS = Object.freeze({
  cego: "blinded", blinded: "blinded",
  enfeiticado: "charmed", charmed: "charmed",
  surdo: "deafened", deafened: "deafened",
  exaustao: "exhaustion", exhaustion: "exhaustion",
  amedrontado: "frightened", frightened: "frightened",
  agarrado: "grappled", grappled: "grappled",
  incapacitado: "incapacitated", incapacitated: "incapacitated",
  paralisado: "paralyzed", paralyzed: "paralyzed",
  petrificado: "petrified", petrified: "petrified",
  envenenado: "poisoned", poisoned: "poisoned",
  caido: "prone", prone: "prone",
  restrito: "restrained", restrained: "restrained",
  atordoado: "stunned", stunned: "stunned",
  inconsciente: "unconscious", unconscious: "unconscious"
});

const MOVEMENT = Object.freeze({
  escalada: "climb", climb: "climb",
  natacao: "swim", nado: "swim", swim: "swim",
  voo: "fly", fly: "fly",
  escavacao: "burrow", escavar: "burrow", burrow: "burrow"
});

const SENSES = Object.freeze({
  visao_no_escuro: "darkvision", darkvision: "darkvision",
  visao_as_cegas: "blindsight", blindsight: "blindsight",
  sentido_sismico: "tremorsense", tremorsense: "tremorsense",
  visao_verdadeira: "truesight", truesight: "truesight"
});

const FALLBACK_SKILLS = Object.freeze(["acr","ani","arc","ath","dec","his","ins","itm","inv","med","nat","prc","prf","per","rel","slt","ste","sur"]);
const FALLBACK_WEAPONS = Object.freeze(["club","dagger","greatclub","handaxe","javelin","lighthammer","mace","quarterstaff","sickle","spear","lightcrossbow","dart","shortbow","sling","battleaxe","flail","glaive","greataxe","greatsword","halberd","lance","longsword","maul","morningstar","pike","rapier","scimitar","shortsword","trident","warpick","warhammer","whip","blowgun","handcrossbow","heavycrossbow","longbow","net"]);
const FALLBACK_TOOLS = Object.freeze(["alchemist","brewer","calligrapher","carpenter","cartographer","cobbler","cook","glassblower","jeweler","leatherworker","mason","painter","potter","smith","tinker","weaver","woodcarver","disg","forg","herb","navg","pois","thief"]);
const FALLBACK_LANGUAGES = Object.freeze(["common","dwarvish","elvish","giant","gnomish","goblin","halfling","orc","abyssal","celestial","draconic","deep","infernal","primordial","sylvan","undercommon"]);

function text(value) { return String(value ?? "").trim(); }
function asArray(value) { return Array.isArray(value) ? value : []; }
function clone(value) { return value === undefined ? undefined : JSON.parse(JSON.stringify(value)); }
function normalize(value) {
  return text(value).normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()
    .replace(/[^a-z0-9]+/g, "_").replace(/^_+|_+$/g, "");
}
function unique(values) { return [...new Set(asArray(values).map(text).filter(Boolean))]; }
function metricNumber(value) {
  const match = text(value).match(/(-?\d+(?:[.,]\d+)?)\s*(?:m(?:\b|\s|\()|metros?\b)/i);
  return match ? Number(match[1].replace(",", ".")) : null;
}
function effectChange(key, value, mode = ACTIVE_EFFECT_MODE.ADD, priority = 20) {
  return { key, mode, value: String(value), priority };
}
function stableEmbeddedId(prefix, featureKey, key) { return stableId(`race:${prefix}:${featureKey}:${key}`); }
function configKeys(field, fallback = []) {
  const value = globalThis.CONFIG?.DND5E?.[field];
  if (value && typeof value === "object") {
    const keys = Object.keys(value).filter(Boolean);
    if (keys.length) return keys;
  }
  return [...fallback];
}
function prefixed(prefix, values) { return unique(values).map(value => `${prefix}:${value}`); }

function splitEnumeration(value) {
  return text(value).replace(/[.;]/g, ",").split(/\s*,\s*|\s+e\s+|\s+ou\s+/i).map(v => v.trim()).filter(Boolean);
}
function damageKey(value) { return DAMAGE[normalize(value)] ?? null; }
function conditionKey(value) { return CONDITIONS[normalize(value)] ?? null; }
function contextualSentence(value) {
  const source = text(value);
  return /\b(?:quando|sempre que|enquanto|durante|caso|ao usar|ao realizar|até que|nessas? condi[cç][oõ]es|nesse estado|neste estado|nessa forma|nesta forma|dessa forma|sob os efeitos?)\b/i.test(source)
    || /\bse\s+(?:já|posteriormente|você|voce|for|estiver|tiver|sofrer|receber|usar|utilizar|ficar|falhar|obtiver|acertar|atingir|concluir|realizar|entrar|sair|puder|ganhar|adquirir)\b/i.test(source);
}
function skillKey(value) { return SKILLS[normalize(value.replace(/Sabedoria\s*\(|Inteligência\s*\(|Carisma\s*\(|Destreza\s*\(|Força\s*\(|Constituição\s*\(|\)/gi, ""))] ?? null; }

function safeDamageModifiers(description) {
  const out = { resistance: [], immunity: [], vulnerability: [] };
  const source = text(description);
  if (/Forma Sazonal/i.test(source)) return out;
  if (/\b(?:pode\s+escolher|escolha|escolhendo|alternativamente|em vez de)\b[^.]{0,120}\b(?:resist[eê]ncia|imunidade|vulnerabilidade)\b/i.test(source)
      || /\b(?:resist[eê]ncia|imunidade|vulnerabilidade)\b[^.]{0,120}\b(?:à sua escolha|a sua escolha|escolhendo|em vez de)\b/i.test(source)) return out;
  // Deliberadamente não resolve frases com escolha/condição.
  const sentences = source.split(/(?<=[.!?])\s+/);
  for (const sentence of sentences) {
    if (contextualSentence(sentence) || /\b(?:escolha|escolhendo|escolher|à sua escolha|ao escolher)\b/i.test(sentence)) continue;
    const patterns = [
      ["resistance", /(?:possui|tem|ganha|recebe)\s+resist[eê]ncia\s+a\s+dano\s+([^.;]+)/i],
      ["immunity", /(?:possui|tem|ganha|recebe)\s+imunidade\s+a\s+dano\s+([^.;]+)/i],
      ["immunity", /(?:é|se torna)\s+imune\s+a\s+dano\s+([^.;]+)/i],
      ["vulnerability", /(?:possui|tem|ganha|recebe)\s+vulnerabilidade\s+a\s+dano\s+([^.;]+)/i],
      ["vulnerability", /(?:é|se torna)\s+vulner[aá]vel\s+a\s+dano\s+([^.;]+)/i]
    ];
    for (const [bucket, pattern] of patterns) {
      const match = sentence.match(pattern);
      if (!match) continue;
      const normalized = match[1].replace(/\ba dano\b/gi, "").replace(/\bdano\b/gi, "");
      for (const part of splitEnumeration(normalized)) {
        const key = damageKey(part.replace(/\bde\b/gi, "").trim());
        if (key) out[bucket].push(key);
      }
    }
  }
  out.resistance = unique(out.resistance);
  out.immunity = unique(out.immunity);
  out.vulnerability = unique(out.vulnerability);
  return out;
}

function safeConditionImmunities(description) {
  const source = text(description);
  const out = [];
  const sentences = source.split(/(?<=[.!?])\s+/);
  for (const sentence of sentences) {
    if (contextualSentence(sentence) || /\b(?:a menos que|exceto)\b/i.test(sentence)) continue;
    let match = sentence.match(/(?:é|voce e|você é|torna-se|se torna)\s+imune\s+(?:às?|aos?|à|ao)\s+(?:condi[cç][oõ]es?\s+)?([^.;]+)/i);
    if (!match) match = sentence.match(/(?:não pode|nao pode)\s+ser\s+([^.;]+)/i);
    if (!match) continue;
    for (const part of splitEnumeration(match[1].replace(/\bcondi[cç][aã]o\b/gi, ""))) {
      const key = conditionKey(part);
      if (key) out.push(key);
    }
  }
  return unique(out);
}

function safeExpertise(description) {
  const out = [];
  const source = text(description);
  for (const sentence of source.split(/(?<=[.!?])\s+/)) {
    if (contextualSentence(sentence)) continue;
    for (const match of sentence.matchAll(/(?:possui|ganha|recebe)\s+Especializa[cç][aã]o\s+(?:na\s+per[ií]cia\s+|em\s+)([^.;,]+)/gi)) {
      if (/\bescolha\b|\buma per[ií]cia\b/i.test(match[1])) continue;
      const key = skillKey(match[1]);
      if (key) out.push(key);
    }
  }
  return unique(out);
}

function fixedSkillGrants(description) {
  const source = text(description);
  const result = [];
  const sentences = source.split(/(?<=[.!?])\s+/);
  for (const sentence of sentences) {
    if (contextualSentence(sentence) || /\b(?:à sua escolha|a sua escolha|escolha|ou)\b/i.test(sentence)) continue;
    const match = sentence.match(/(?:possui|ganha|recebe)\s+profici[eê]ncia\s+(?:na\s+per[ií]cia|nas\s+per[ií]cias|em)\s+([^.;]+)/i);
    if (!match) continue;
    if (/armadura|arma|ferramenta|idioma|escudo/i.test(match[1])) continue;
    for (const part of splitEnumeration(match[1])) {
      const key = skillKey(part);
      if (key) result.push(key);
    }
  }
  return unique(result);
}

function choiceSkillSpec(description, featureKey) {
  const source = text(description);
  let count = null;
  let pool = [];
  let match = source.match(/profici[eê]ncia\s+na\s+per[ií]cia\s+([^.;]+?)\s+ou\s+([^.;]+?)(?:,|\.|\s+à sua escolha|\s+a sua escolha)/i);
  if (match) {
    pool = [skillKey(match[1]), skillKey(match[2])].filter(Boolean);
    count = 1;
  }
  if (!count) {
    match = source.match(/(?:ganha|recebe|possui)\s+profici[eê]ncia\s+em\s+(uma|duas|dois|tr[eê]s|\d+)\s+per[ií]cias?(?:\s+à sua escolha|\s+a sua escolha)/i);
    if (match) {
      const words = { uma:1, duas:2, dois:2, tres:3, três:3 };
      count = Number(match[1]) || words[normalize(match[1])] || 1;
      pool = configKeys("skills", FALLBACK_SKILLS);
    }
  }
  if (!count) {
    match = source.match(/(?:escolha|Escolha)\s+(uma|duas|dois|tr[eê]s|\d+)\s+(?:das\s+seguintes\s+)?per[ií]cias[^:]*:\s*([^\n.]+)/i);
    if (match) {
      const words = { uma:1, duas:2, dois:2, tres:3, três:3 };
      count = Number(match[1]) || words[normalize(match[1])] || 1;
      pool = splitEnumeration(match[2]).map(skillKey).filter(Boolean);
    }
  }
  if (!count || !pool.length) return null;
  return { key: `${featureKey}:skill-choice`, type: "Trait", title: "Escolha de Perícia", grants: [], choices: [{ count, pool: prefixed("skills", pool) }], allowReplacements: false };
}

function weaponChoiceSpec(description, featureKey) {
  const source = text(description);
  const match = source.match(/profici[eê]ncia\s+com\s+(uma|duas|dois|tr[eê]s|\d+)\s+armas?\s+(?:à sua escolha|a sua escolha)/i);
  if (!match) return null;
  const words = { uma:1, duas:2, dois:2, tres:3, três:3 };
  const count = Number(match[1]) || words[normalize(match[1])] || 1;
  const pool = configKeys("weaponProficiencies", FALLBACK_WEAPONS).filter(key => !["sim","mar","simple","martial"].includes(String(key).toLowerCase()));
  return { key: `${featureKey}:weapon-choice`, type: "Trait", title: "Escolha de Arma", grants: [], choices: [{ count, pool: prefixed("weapon", pool) }], allowReplacements: false };
}

function toolChoiceSpec(description, featureKey) {
  const source = text(description);
  const match = source.match(/profici[eê]ncia\s+(?:com|em)\s+(uma|duas|dois|tr[eê]s|\d+)\s+(?:Ferramentas? de Artes[aã]o|ferramentas?)(?:\s+à sua escolha|\s+a sua escolha)/i);
  if (!match) return null;
  const words = { uma:1, duas:2, dois:2, tres:3, três:3 };
  const count = Number(match[1]) || words[normalize(match[1])] || 1;
  return { key: `${featureKey}:tool-choice`, type: "Trait", title: "Escolha de Ferramenta", grants: [], choices: [{ count, pool: prefixed("tool", configKeys("toolProficiencies", FALLBACK_TOOLS)) }], allowReplacements: false };
}

function languageChoiceSpec(description, featureKey) {
  const source = text(description);
  if (/\b(?:substituir|em vez de|alternativamente)\b/i.test(source)) return null;
  const match = source.match(/(?:aprende|aprender|ganha|recebe)\s+(?:a profici[eê]ncia em\s+)?(um|uma|dois|duas|tr[eê]s|\d+)\s+(?:novos?\s+)?idiomas?(?:\s+à sua escolha|\s+a sua escolha)?/i);
  if (!match) return null;
  const words = { um:1, uma:1, dois:2, duas:2, tres:3, três:3 };
  const count = Number(match[1]) || words[normalize(match[1])] || 1;
  return { key: `${featureKey}:language-choice`, type: "Trait", title: "Escolha de Idioma", grants: [], choices: [{ count, pool: prefixed("languages", configKeys("languages", FALLBACK_LANGUAGES)) }], allowReplacements: false };
}

function fixedArmorWeaponGrants(description, featureKey) {
  const source = text(description);
  const grants = [];
  if (/profici[eê]ncia\s+(?:com|em)\s+(?:todas\s+as\s+)?armaduras(?:\b|,)/i.test(source) && /todas\s+as\s+armaduras/i.test(source)) grants.push("armor:lgt", "armor:med", "armor:hvy");
  if (/profici[eê]ncia\s+(?:com|em)\s+armaduras? leves?/i.test(source)) grants.push("armor:lgt");
  if (/profici[eê]ncia\s+(?:com|em)\s+armaduras? m[eé]dias?/i.test(source)) grants.push("armor:med");
  if (/profici[eê]ncia\s+(?:com|em)\s+armaduras? pesadas?/i.test(source)) grants.push("armor:hvy");
  if (/profici[eê]ncia\s+(?:com|em)\s+(?:armaduras?[^.;,]*e\s+)?escudos?/i.test(source)) grants.push("armor:shl");
  if (/profici[eê]ncia\s+(?:com|em)\s+(?:todas\s+as\s+)?armas? simples\s+e\s+marciais/i.test(source)) grants.push("weapon:sim", "weapon:mar");
  else {
    if (/profici[eê]ncia\s+(?:com|em)\s+(?:todas\s+as\s+)?armas? simples/i.test(source)) grants.push("weapon:sim");
    if (/profici[eê]ncia\s+(?:com|em)\s+(?:todas\s+as\s+)?armas? marciais/i.test(source)) grants.push("weapon:mar");
  }
  if (!grants.length) return null;
  return { key: `${featureKey}:fixed-equipment`, type: "Trait", title: "Proficiências Raciais", grants: unique(grants), choices: [], allowReplacements: false };
}


function conditionalBefore(source, index) {
  const start = Math.max(source.lastIndexOf(".", index - 1), source.lastIndexOf("!", index - 1), source.lastIndexOf("?", index - 1), source.lastIndexOf("\n", index - 1)) + 1;
  const prefix = source.slice(Math.max(0, start), index);
  return contextualSentence(prefix) || /\b(?:forma sazonal|metamorfose)\b/i.test(prefix);
}

function safeMovement(description) {
  const source = text(description);
  const rows = [];
  if (/Forma Sazonal/i.test(source)) return rows;
  // "deslocamento de escalada igual ao deslocamento-base"
  for (const match of source.matchAll(/deslocamento\s+de\s+(escalada|nata[cç][aã]o|nado|voo|escava[cç][aã]o)\s+igual\s+ao\s+(?:seu\s+)?deslocamento[- ]base/gi)) {
    if (conditionalBefore(source, match.index)) continue;
    const kind = MOVEMENT[normalize(match[1])];
    if (kind) rows.push({ kind, mode: "base", value: null, hover: kind === "fly" && /voo\s*\(hover\)|voo\s+pairado/i.test(source) });
  }
  // "deslocamento de natação de 12 metros"
  for (const match of source.matchAll(/deslocamento\s+de\s+(escalada|nata[cç][aã]o|nado|voo|escava[cç][aã]o)\s+de\s+(-?\d+(?:[.,]\d+)?)\s*metros?/gi)) {
    if (conditionalBefore(source, match.index)) continue;
    const kind = MOVEMENT[normalize(match[1])];
    const value = Number(match[2].replace(",", "."));
    if (kind && Number.isFinite(value)) rows.push({ kind, mode: "set", value, hover: kind === "fly" && /voo\s*\(hover\)|voo\s+pairado/i.test(source) });
  }
  // Base walk increase, only if unconditional.
  const inc = source.match(/(?:seu\s+)?deslocamento(?:-base| base)?\s+(?:de caminhada\s+)?aumenta\s+em\s+(-?\d+(?:[.,]\d+)?)\s*metros?/i);
  if (inc && !conditionalBefore(source, source.indexOf(inc[0]))) {
    rows.push({ kind: "walk", mode: "add", value: Number(inc[1].replace(",", ".")), hover: false });
  }
  // Belabored Flight is mechanically distinct; never flatten into native fly.
  return rows.filter(row => !(row.kind === "fly" && /voo\s+laborioso|belabored flight/i.test(source)));
}

function safeSenses(description) {
  const source = text(description);
  const rows = [];
  if (/Forma Sazonal/i.test(source)) return rows;
  const patterns = [
    ["darkvision", /Vis[aã]o no Escuro\s+(?:a|de|até)\s+(-?\d+(?:[.,]\d+)?)\s*metros?/gi],
    ["blindsight", /Vis[aã]o [aà]s Cegas\s+(?:a|de|até)\s+(-?\d+(?:[.,]\d+)?)\s*metros?/gi],
    ["tremorsense", /(?:Tremorsense|sentido s[ií]smico)\s+(?:a|de|até)\s+(-?\d+(?:[.,]\d+)?)\s*metros?/gi],
    ["truesight", /Vis[aã]o Verdadeira\s+(?:a|de|até)\s+(-?\d+(?:[.,]\d+)?)\s*metros?/gi]
  ];
  for (const [kind, re] of patterns) {
    for (const match of source.matchAll(re)) {
      if (conditionalBefore(source, match.index)) continue;
      const sentenceEnd = source.slice(match.index).search(/[.!?]/);
      const sentence = source.slice(match.index, sentenceEnd >= 0 ? match.index + sentenceEnd + 1 : source.length);
      if (contextualSentence(sentence.slice(0, Math.max(0, sentence.indexOf(match[0]))))) continue;
      const value = Number(match[1].replace(",", "."));
      if (Number.isFinite(value)) rows.push({ kind, mode: "upgrade", value });
    }
  }
  return rows;
}

function usesPlan(description) {
  const source = text(description);
  let max = "";
  let recovery = [];
  if (/um n[uú]mero de vezes por Descanso Longo igual ao seu b[oô]nus de profici[eê]ncia/i.test(source)) {
    max = "@prof"; recovery = ["lr"];
  } else if (/um n[uú]mero de vezes por Descanso (?:Curto ou Longo|Curto\/Longo) igual ao seu b[oô]nus de profici[eê]ncia/i.test(source)) {
    max = "@prof"; recovery = ["sr", "lr"];
  } else if (/uma vez por Descanso Longo/i.test(source)) {
    max = "1"; recovery = ["lr"];
  } else if (/uma vez por Descanso Curto ou Longo/i.test(source)) {
    max = "1"; recovery = ["sr", "lr"];
  } else if (/um n[uú]mero de vezes por Descanso Longo igual [aà] metade do seu b[oô]nus de profici[eê]ncia/i.test(source)) {
    max = "floor(@prof / 2)"; recovery = ["lr"];
  }
  if (!max) return null;
  return { spent: 0, max, recovery: recovery.map(period => ({ period, type: "recoverAll", formula: "" })) };
}

function activationType(description) {
  const source = text(description);
  if (/como uma a[cç][aã]o b[oô]nus/i.test(source)) return "bonus";
  if (/como uma rea[cç][aã]o/i.test(source)) return "reaction";
  if (/como uma a[cç][aã]o/i.test(source)) return "action";
  return "";
}

function utilityActivity(feature, uses) {
  const activation = activationType(feature?.description);
  if (!activation) return null;
  const featureKey = text(feature?.key);
  const id = stableEmbeddedId("activity", featureKey, "use");
  return {
    _id: id,
    type: "utility",
    name: text(feature?.name) || "Usar Característica Racial",
    activation: { type: activation, value: 1, condition: "Resolva os efeitos exatamente como descritos na característica racial." },
    consumption: {
      scaling: { allowed: false, max: "" },
      spellSlot: false,
      targets: uses ? [{ type: "itemUses", target: "", value: "1", scaling: { mode: "", formula: "" } }] : []
    },
    description: { chatFlavor: "A RB-7 automatiza apenas ativação/uso. CD, alvo, dano, movimento e condições permanecem regidos pelo texto quando não houver representação nativa segura." },
    effects: [],
    flags: { [MODULE_ID]: { managed: true, automationPhase: RACE_AUTOMATION_PHASE, automationKey: "use", racialFeatureKey: featureKey } },
    uses: { spent: 0, max: "", recovery: [] },
    visibility: { identifier: "", level: { min: null, max: null }, requireAttunement: false, requireIdentification: false, requireMagic: false },
    roll: { formula: "", name: "", prompt: false, visible: false }
  };
}

function runtimeDescriptors(feature) {
  const source = text(feature?.description);
  const runtimeSource = source.replace(/\bquando\s+(?:recebe|adquire|cria|escolhe)\s+(?:esta|este|o|a)?\s*caracter[ií]stica[^.,;]*/gi, "");
  const out = [];
  if (contextualSentence(runtimeSource)) out.push({ kind: "conditional-rule", reason: "A característica depende de um gatilho/estado de combate e não pode ser reduzida a um efeito permanente." });
  if (/\bb[oô]nus de profici[eê]ncia\b/i.test(source) && !usesPlan(source)) out.push({ kind: "proficiency-scaling", reason: "A mecânica escala com bônus de proficiência fora de um simples contador de usos." });
  if (/\bacerto cr[ií]tico|cr[ií]tico\b/i.test(source)) out.push({ kind: "critical-trigger", reason: "A característica reage a acerto crítico." });
  if (/\bteleport|teletransporte|teleportar\b/i.test(source)) out.push({ kind: "teleport", reason: "Teleporte exige resolução posicional do Actor/token." });
  if (/\btransform|forma\b/i.test(source) && /\bminuto|tamanho|equipamento\b/i.test(source)) out.push({ kind: "transformation", reason: "Transformação temporária possui múltiplos estados derivados." });
  return out;
}

function assistedDescriptors(feature, bundle) {
  const pending = asArray(bundle?.readiness?.pendingFoundryChoices);
  const traitId = text(feature?.grimorioTraitId);
  const key = text(feature?.key);
  const match = pending.find(row => text(row?.traitId) === traitId || text(row?.key) === traitId || text(row?.key) === key);
  const out = [];
  if (match) out.push({ kind: "actor-choice", key: text(match.key) || traitId, reason: text(match.reason) || "Escolha depende do Actor/Advancement." });
  if (/\bprimeira op[cç][aã]o.*na qual ainda n[aã]o seja proficiente/i.test(text(feature?.description))) {
    out.push({ kind: "actor-current-proficiency", reason: "A escolha depende das proficiências já presentes no Actor." });
  }
  if (/resist[eê]ncia\s+a\s+dano[^.;]+\bou\b[^.;]+(?:escolhendo|escolha|à sua escolha|a sua escolha)/i.test(text(feature?.description))) {
    out.push({ kind: "damage-resistance-choice", reason: "A característica exige escolher um tipo de resistência; a RB-7 não presume o resultado." });
  }
  return out;
}

function effectFromPlan(feature, damage, condition, expertise) {
  const changes = [];
  for (const key of damage.resistance) changes.push(effectChange("system.traits.dr.value", key));
  for (const key of damage.immunity) changes.push(effectChange("system.traits.di.value", key));
  for (const key of damage.vulnerability) changes.push(effectChange("system.traits.dv.value", key));
  for (const key of condition) changes.push(effectChange("system.traits.ci.value", key));
  for (const key of expertise) changes.push(effectChange(`system.skills.${key}.value`, "2", ACTIVE_EFFECT_MODE.UPGRADE));
  if (!changes.length) return null;
  return {
    _id: stableEmbeddedId("effect", text(feature?.key), "passive"),
    name: `${text(feature?.name) || "Característica Racial"} — automação segura`,
    img: "icons/svg/aura.svg",
    transfer: true,
    disabled: false,
    changes,
    statuses: [],
    description: "RB-7: somente resistências, imunidades, vulnerabilidades, imunidades de condição e Especializações estáticas inequivocamente descritas são aplicadas automaticamente.",
    flags: { [MODULE_ID]: { managed: true, automationPhase: RACE_AUTOMATION_PHASE, automationKey: "passive", racialFeatureKey: text(feature?.key) } }
  };
}

function tierFor({ effects, advancements, movement, senses, uses, activity, assisted, runtime }) {
  if (runtime.length) return RACE_AUTOMATION_TIER.RUNTIME;
  if (assisted.length) return RACE_AUTOMATION_TIER.ASSISTED;
  if (advancements.some(a => asArray(a.choices).length)) return RACE_AUTOMATION_TIER.NATIVE_CHOICE;
  if (effects.length || advancements.length || movement.length || senses.length || uses || activity) return RACE_AUTOMATION_TIER.NATIVE;
  return RACE_AUTOMATION_TIER.DESCRIPTION;
}

export function compileRacialFeatureAutomation(feature, bundle = {}) {
  const description = text(feature?.description);
  const featureKey = text(feature?.key);
  const damage = safeDamageModifiers(description);
  const conditionImmunities = safeConditionImmunities(description);
  const expertise = safeExpertise(description);
  const effects = [];
  const passive = effectFromPlan(feature, damage, conditionImmunities, expertise);
  if (passive) effects.push(passive);

  const advancements = [];
  const fixedSkills = fixedSkillGrants(description);
  if (fixedSkills.length) advancements.push({ key: `${featureKey}:fixed-skills`, type: "Trait", title: "Proficiências de Perícia", grants: prefixed("skills", fixedSkills), choices: [], allowReplacements: false });
  for (const spec of [choiceSkillSpec(description, featureKey), weaponChoiceSpec(description, featureKey), toolChoiceSpec(description, featureKey), languageChoiceSpec(description, featureKey), fixedArmorWeaponGrants(description, featureKey)]) if (spec) advancements.push(spec);

  const movement = safeMovement(description);
  const senses = safeSenses(description);
  const uses = usesPlan(description);
  const activity = utilityActivity(feature, uses);
  let assisted = assistedDescriptors(feature, bundle);
  const hasNativeChoice = advancements.some(spec => asArray(spec.choices).length > 0);
  if (hasNativeChoice) assisted = assisted.filter(row => row.kind !== "actor-choice");
  const runtime = runtimeDescriptors(feature);

  const tier = tierFor({ effects, advancements, movement, senses, uses, activity, assisted, runtime });
  return Object.freeze({
    schema: RACE_AUTOMATION_SCHEMA,
    schemaVersion: RACE_AUTOMATION_SCHEMA_VERSION,
    phase: RACE_AUTOMATION_PHASE,
    compilerVersion: RACE_AUTOMATION_COMPILER_VERSION,
    featureKey,
    tier,
    native: Object.freeze({
      effects: Object.freeze(clone(effects)),
      advancements: Object.freeze(clone(advancements)),
      movement: Object.freeze(clone(movement)),
      senses: Object.freeze(clone(senses)),
      uses: uses ? Object.freeze(clone(uses)) : null,
      activity: activity ? Object.freeze(clone(activity)) : null
    }),
    assisted: Object.freeze(clone(assisted)),
    runtime: Object.freeze(clone(runtime)),
    limitations: Object.freeze([
      ...(tier === RACE_AUTOMATION_TIER.RUNTIME ? ["Mecânicas condicionais/comportamentais permanecem descritas e marcadas para runtime; a RB-7 não injeta hooks globais no Actor."] : []),
      ...(assisted.length ? ["Escolhas dependentes do estado atual do Actor permanecem assistidas."] : [])
    ])
  });
}

function baseWalkFromBundle(bundle) {
  const raw = text(bundle?.resolved?.primaryRace?.meta?.speed);
  const value = metricNumber(raw);
  return Number.isFinite(value) ? value : null;
}

function applyMovement(base, rows) {
  const result = { burrow: "", climb: "", fly: "", swim: "", walk: Number.isFinite(base) ? String(base) : "", units: "m", hover: false, ignoredDifficultTerrain: [] };
  const currentWalk = () => Number(result.walk || 0);
  for (const row of rows) {
    if (!MOVEMENT[row.kind] && row.kind !== "walk") continue;
    if (row.kind === "walk") {
      if (row.mode === "add" && Number.isFinite(row.value)) result.walk = String(currentWalk() + row.value);
      else if (row.mode === "set" && Number.isFinite(row.value)) result.walk = String(row.value);
      continue;
    }
    if (row.mode === "base" && currentWalk() > 0) result[row.kind] = String(currentWalk());
    else if (row.mode === "set" && Number.isFinite(row.value)) result[row.kind] = String(row.value);
    if (row.kind === "fly" && row.hover) result.hover = true;
  }
  return result;
}

function applySenses(rows) {
  const ranges = {};
  for (const row of rows) {
    if (!SENSES[row.kind] && !["darkvision","blindsight","tremorsense","truesight"].includes(row.kind)) continue;
    const current = Number(ranges[row.kind] ?? 0);
    if (Number.isFinite(row.value)) ranges[row.kind] = Math.max(current, row.value);
  }
  return { ranges, units: "m", special: "" };
}

function advancementSource(bundle, spec, index) {
  return {
    _id: stableId(`${bundle.identity.grimorioId}:adv:rb7:${index}:${spec.key}`),
    type: "Trait",
    configuration: {
      allowReplacements: Boolean(spec.allowReplacements),
      choices: asArray(spec.choices).map(row => ({ count: Math.max(1, Number(row.count ?? 1) || 1), pool: unique(row.pool) })),
      grants: unique(spec.grants),
      mode: "default"
    },
    value: { chosen: [] },
    title: text(spec.title) || "Característica Racial",
    flags: { [MODULE_ID]: { managed: true, automationPhase: RACE_AUTOMATION_PHASE, automationKey: text(spec.key) } }
  };
}

export function compileRaceAutomation(bundle) {
  const featurePlans = {};
  const movementRows = [];
  const senseRows = [];
  const advancementSpecs = [];
  const tiers = { native:0, "native-choice":0, assisted:0, runtime:0, description:0 };
  let effects = 0, uses = 0, activities = 0;

  const buckets = bundle?.resolved?.features ?? {};
  for (const list of Object.values(buckets)) {
    for (const feature of asArray(list)) {
      const key = text(feature?.key);
      if (!key || featurePlans[key]) continue;
      const plan = compileRacialFeatureAutomation(feature, bundle);
      featurePlans[key] = plan;
      tiers[plan.tier] = (tiers[plan.tier] ?? 0) + 1;
      movementRows.push(...asArray(plan.native.movement));
      senseRows.push(...asArray(plan.native.senses));
      advancementSpecs.push(...asArray(plan.native.advancements));
      effects += asArray(plan.native.effects).length;
      uses += plan.native.uses ? 1 : 0;
      activities += plan.native.activity ? 1 : 0;
    }
  }

  const advancements = {};
  advancementSpecs.forEach((spec, index) => {
    const source = advancementSource(bundle, spec, index);
    advancements[source._id] = source;
  });

  const race = Object.freeze({
    movement: Object.freeze(applyMovement(baseWalkFromBundle(bundle), movementRows)),
    senses: Object.freeze(applySenses(senseRows)),
    advancements: Object.freeze(advancements)
  });

  return Object.freeze({
    schema: RACE_AUTOMATION_SCHEMA,
    schemaVersion: RACE_AUTOMATION_SCHEMA_VERSION,
    phase: RACE_AUTOMATION_PHASE,
    compilerVersion: RACE_AUTOMATION_COMPILER_VERSION,
    featurePlans: Object.freeze(featurePlans),
    race,
    summary: Object.freeze({
      features: Object.keys(featurePlans).length,
      tiers: Object.freeze({ ...tiers }),
      advancements: Object.keys(advancements).length,
      effects,
      uses,
      activities,
      assisted: Object.values(featurePlans).reduce((n,p) => n + p.assisted.length, 0),
      runtime: Object.values(featurePlans).reduce((n,p) => n + p.runtime.length, 0)
    }),
    policy: "native-safe-first+native-choice+assisted+runtime-descriptor+description"
  });
}

export function applyRacialFeatureAutomation(source, feature, bundle, plan = null) {
  const resolved = plan ?? compileRacialFeatureAutomation(feature, bundle);
  source.effects = clone(resolved.native.effects);
  source.system.activities = {};
  if (resolved.native.activity) source.system.activities[resolved.native.activity._id] = clone(resolved.native.activity);
  source.system.uses = resolved.native.uses ? clone(resolved.native.uses) : { spent: 0, max: "", recovery: [] };
  source.flags = source.flags ?? {};
  source.flags[MODULE_ID] = source.flags[MODULE_ID] ?? {};
  source.flags[MODULE_ID].nativePolicy = resolved.tier;
  source.flags[MODULE_ID].automation = {
    phase: resolved.phase,
    compilerVersion: resolved.compilerVersion,
    tier: resolved.tier,
    materialized: {
      effects: resolved.native.effects.length,
      advancements: resolved.native.advancements.length,
      movement: resolved.native.movement.length,
      senses: resolved.native.senses.length,
      uses: resolved.native.uses ? 1 : 0,
      activities: resolved.native.activity ? 1 : 0
    },
    assisted: clone(resolved.assisted),
    runtime: clone(resolved.runtime),
    limitations: clone(resolved.limitations)
  };
  return source.flags[MODULE_ID].automation;
}

export function raceAutomationSupport() {
  return Object.freeze({
    phase: RACE_AUTOMATION_PHASE,
    compilerVersion: RACE_AUTOMATION_COMPILER_VERSION,
    schema: RACE_AUTOMATION_SCHEMA,
    schemaVersion: RACE_AUTOMATION_SCHEMA_VERSION,
    tiers: Object.freeze(Object.values(RACE_AUTOMATION_TIER)),
    activeEffects: Object.freeze(["damage-resistance", "damage-immunity", "damage-vulnerability", "condition-immunity", "fixed-skill-expertise"]),
    traitAdvancements: Object.freeze(["fixed-skill", "skill-choice", "weapon-choice", "tool-choice", "language-choice", "fixed-armor-weapon"]),
    raceProjection: Object.freeze(["movement-static", "movement-equals-base", "static-senses"]),
    uses: "simple-lr-sr-formulas",
    activities: "safe-utility-activation-only",
    assistedChoices: true,
    runtimeDescriptors: true,
    globalHooks: false,
    actorApplication: false,
    policy: "native-safe-first+native-choice+assisted+runtime-descriptor+description"
  });
}
