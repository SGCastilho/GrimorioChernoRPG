'use strict';

// FA-1 — contrato declarativo de automação de Talentos.
// Este arquivo descreve a intenção mecânica. A materialização Foundry fica a cargo
// do Grimório Importer 0.12+; não são embutidos documentos Foundry brutos aqui.
(function initFoundryFeatAutomation(global) {
  const SCHEMA = 'grimorio-foundry-feat-automation-plan';
  const SCHEMA_VERSION = 1;
  const TARGET = Object.freeze({
    foundryVersion: '13.351',
    dnd5eVersion: '5.3.3',
    minimumImporterVersion: '0.12.0'
  });

  const TIER = Object.freeze({ FULL: 'full', PARTIAL: 'partial', DESCRIPTION: 'description' });
  const ADVANCEMENT_TYPES = Object.freeze(['ability-score', 'trait-proficiency', 'item-choice', 'spell-choice', 'linked-choice']);
  const EFFECT_MECHANICS = Object.freeze(['initiative-bonus', 'conditional-ac-bonus', 'speed-bonus', 'skill-passive-bonus', 'hp-per-level', 'conditional-armor-rule', 'conditional-damage-reduction', 'unarmed-damage-minimum']);
  const ACTIVITY_TYPES = Object.freeze(['utility', 'heal', 'attack', 'check', 'reaction', 'toggle']);

  function clone(value) { return value === undefined ? undefined : JSON.parse(JSON.stringify(value)); }
  function arr(value) { return Array.isArray(value) ? value : value == null ? [] : [value]; }
  function clean(value) { return String(value ?? '').trim(); }

  function advancement(key, type, config = {}) {
    return Object.freeze({ key, type, ...clone(config) });
  }
  function effect(key, mechanic, config = {}) {
    return Object.freeze({ key, mechanic, ...clone(config) });
  }
  function activity(key, type, name, config = {}) {
    return Object.freeze({ key, type, name, ...clone(config) });
  }
  function runtime(key, trigger, behavior, config = {}) {
    return Object.freeze({ key, trigger, behavior, ...clone(config) });
  }
  function itemUses(max, recovery, config = {}) {
    return Object.freeze({ max: String(max), recovery: arr(recovery).map(String), ...clone(config) });
  }
  function profile(featId, tier, config = {}) {
    return Object.freeze({
      featId,
      tier,
      advancements: Object.freeze(arr(config.advancements)),
      effects: Object.freeze(arr(config.effects)),
      activities: Object.freeze(arr(config.activities)),
      uses: config.uses ? Object.freeze(clone(config.uses)) : null,
      runtime: Object.freeze(arr(config.runtime)),
      limitations: Object.freeze(arr(config.limitations).map(String)),
      notes: Object.freeze(arr(config.notes).map(String))
    });
  }

  const PROFILES = Object.freeze([
    profile('phb-2014-adepto-elemental', TIER.PARTIAL, {
      advancements: [advancement('damage-type', 'linked-choice', {
        sourceChoiceId: 'damage-type', count: 1, options: ['acid', 'lightning', 'fire', 'cold', 'thunder'],
        label: 'Tipo de dano do Adepto Elemental'
      })],
      runtime: [
        runtime('ignore-resistance', 'spell-damage-resolution', 'ignore-resistance-for-chosen-damage-type', { choiceRef: 'damage-type' }),
        runtime('minimum-damage-die', 'spell-damage-roll', 'replace-damage-die-result-one-with-two', { choiceRef: 'damage-type' })
      ],
      limitations: ['A escolha do tipo de dano é estruturada; ignorar resistência e elevar resultados 1 para 2 exigem runtime para não afetar tipos de dano diferentes do escolhido.']
    }),

    profile('phb-2014-adepto-marcial', TIER.PARTIAL, {
      advancements: [advancement('maneuvers', 'item-choice', {
        sourceChoiceId: 'maneuvers', count: 2, itemType: 'feat', selection: 'open-drag-drop',
        filter: { family: 'battle-master-maneuver' }, label: 'Duas manobras do Mestre de Batalha'
      })],
      uses: itemUses('1', ['sr', 'lr'], { label: 'Dado de Superioridade do talento', denomination: 'd6', fallbackOnly: true }),
      runtime: [runtime('superiority-resource', 'feat-acquisition', 'merge-or-create-superiority-die-resource', {
        fallbackDie: 'd6', additionalDice: 1, recovery: ['sr', 'lr'], savingThrowFormula: '8 + @prof + max(@abilities.str.mod,@abilities.dex.mod)'
      })],
      limitations: ['Se o Actor já possuir Dados de Superioridade, o talento deve acrescentar um dado ao recurso existente; caso contrário, cria um d6 próprio. Essa fusão exige runtime.']
    }),

    profile('phb-2014-alerta', TIER.PARTIAL, {
      effects: [effect('initiative', 'initiative-bonus', { value: 5, transfer: true, label: 'Alerta — +5 iniciativa' })],
      runtime: [
        runtime('cannot-be-surprised', 'combat-surprise-evaluation', 'prevent-surprised-while-conscious'),
        runtime('hidden-attackers', 'attack-advantage-evaluation', 'deny-hidden-attacker-advantage-against-owner')
      ],
      limitations: ['O bônus de iniciativa é passivo e seguro; as regras de surpresa e atacantes escondidos dependem do estado do combate.']
    }),

    profile('phb-2014-ambidestro', TIER.PARTIAL, {
      activities: [activity('two-weapon-stance', 'toggle', 'Ambidestro — Duas Armas', {
        activation: 'special', target: 'self', appliesEffect: 'dual-wield-ac',
        condition: 'Somente enquanto empunhar uma arma corpo a corpo em cada mão.'
      })],
      effects: [effect('dual-wield-ac', 'conditional-ac-bonus', { value: 1, transfer: false, condition: 'two-melee-weapons-wielded' })],
      runtime: [runtime('dual-wield-validation', 'equipment-change', 'validate-two-melee-weapons-and-toggle-effect')],
      limitations: ['A permissão para combater com duas armas sem a propriedade leve e sacar/guardar duas armas permanece contextual; o +1 CA só pode ficar ativo com duas armas corpo a corpo empunhadas.']
    }),

    profile('phb-2014-atacante-bestial', TIER.PARTIAL, {
      activities: [activity('reroll-weapon-damage', 'utility', 'Atacante Bestial — Rerrolar Dano', {
        activation: 'special', cadence: 'once-per-turn', condition: 'Ao rolar dano de um ataque corpo a corpo com arma.'
      })],
      runtime: [runtime('weapon-damage-reroll', 'melee-weapon-damage-roll', 'offer-reroll-and-choose-either-result', { cadence: 'once-per-turn' })],
      limitations: ['O talento permite escolher qualquer um dos dois resultados; a decisão deve ocorrer no contexto da rolagem de dano.']
    }),

    profile('phb-2014-atirador-agucado', TIER.PARTIAL, {
      activities: [activity('power-shot', 'toggle', 'Atirador Aguçado — Tiro Potente', {
        activation: 'special', attackModifier: -5, damageBonus: 10, appliesTo: 'next-qualified-ranged-weapon-attack'
      })],
      runtime: [
        runtime('long-range', 'ranged-weapon-attack', 'suppress-long-range-disadvantage'),
        runtime('cover', 'ranged-weapon-attack', 'ignore-half-and-three-quarters-cover'),
        runtime('power-shot', 'ranged-weapon-attack', 'apply-minus-five-plus-ten-when-toggle-consumed')
      ],
      limitations: ['O -5/+10 não deve ser um efeito global; aplica-se apenas a um ataque à distância com arma no qual o personagem seja proficiente.']
    }),

    profile('phb-2014-atirador-de-magia', TIER.PARTIAL, {
      advancements: [advancement('attack-cantrip', 'spell-choice', {
        sourceChoiceId: 'attack-cantrip', count: 1, spellLevel: 0, requiresAttackRoll: true,
        lists: ['bard', 'warlock', 'cleric', 'druid', 'sorcerer', 'wizard'], selection: 'open-drag-drop',
        abilityByList: { bard: 'cha', warlock: 'cha', sorcerer: 'cha', cleric: 'wis', druid: 'wis', wizard: 'int' }
      })],
      runtime: [
        runtime('double-range', 'spell-attack-preparation', 'double-range-for-spells-requiring-attack-roll'),
        runtime('cover', 'ranged-spell-attack', 'ignore-half-and-three-quarters-cover')
      ],
      limitations: ['O Grimório Importer ainda não administra um compêndio próprio de magias; a escolha do truque deve aceitar drag-and-drop de uma magia compatível.']
    }),

    profile('phb-2014-atleta', TIER.PARTIAL, {
      advancements: [advancement('ability', 'ability-score', { sourceChoiceId: 'ability', amount: 1, maximum: 20, options: ['str', 'dex'] })],
      runtime: [
        runtime('stand-up', 'movement-cost', 'reduce-standing-from-prone-cost-to-five-feet'),
        runtime('climb', 'movement-cost', 'remove-extra-climb-cost'),
        runtime('running-jump', 'jump-calculation', 'reduce-running-start-to-five-feet')
      ],
      limitations: ['O +1 de atributo é nativo; custos de movimento e salto dependem do controle de movimento do Foundry e exigem runtime/assistência.']
    }),

    profile('phb-2014-ator', TIER.PARTIAL, {
      advancements: [advancement('charisma', 'ability-score', { amount: 1, maximum: 20, options: ['cha'], locked: true })],
      activities: [activity('mimic', 'check', 'Ator — Imitar Voz ou Som', {
        activation: 'action', ability: 'cha', skill: 'deception', opposedBy: { ability: 'wis', skill: 'insight' },
        condition: 'O personagem deve ter ouvido a voz ou o som por pelo menos 1 minuto.'
      })],
      runtime: [runtime('impersonation-advantage', 'ability-check', 'grant-advantage-only-when-impersonating-another-person', { skills: ['performance', 'deception'] })],
      limitations: ['A vantagem não pode ser aplicada globalmente a Atuação e Enganação; ela depende de estar se passando por outra pessoa.']
    }),

    profile('phb-2014-combatente-montado', TIER.PARTIAL, {
      activities: [activity('redirect-attack', 'reaction', 'Combatente Montado — Redirecionar Ataque', {
        activation: 'reaction', condition: 'Um ataque é direcionado à sua montaria enquanto você está montado e não incapacitado.'
      })],
      runtime: [
        runtime('mounted-advantage', 'melee-attack-advantage', 'grant-advantage-against-smaller-unmounted-target-while-mounted'),
        runtime('mount-dex-save', 'mount-dexterity-save-damage', 'apply-evasion-like-mount-damage-rule')
      ],
      limitations: ['Tamanho relativo, estado montado e dano da montaria exigem informação contextual do combate.']
    }),

    profile('phb-2014-conjurador-de-guerra', TIER.PARTIAL, {
      activities: [activity('opportunity-spell', 'reaction', 'Conjurador de Guerra — Magia de Oportunidade', {
        activation: 'reaction', condition: 'Movimento de criatura hostil provoca ataque de oportunidade; a magia deve usar 1 ação e ter apenas essa criatura como alvo.'
      })],
      runtime: [
        runtime('concentration-advantage', 'concentration-save-after-damage', 'grant-advantage-on-concentration-save'),
        runtime('opportunity-spell', 'opportunity-attack-trigger', 'allow-qualified-single-target-action-spell-instead-of-weapon-attack')
      ],
      limitations: ['Não é seguro conceder vantagem global em salvaguardas de Constituição; a vantagem existe somente para manter concentração após sofrer dano.', 'A permissão de componentes somáticos com mãos ocupadas permanece uma regra de validação de conjuração/contexto.']
    }),

    profile('phb-2014-conjurador-de-ritual', TIER.PARTIAL, {
      advancements: [
        advancement('spell-list', 'linked-choice', { sourceChoiceId: 'spell-list', count: 1, options: ['bard', 'warlock', 'cleric', 'druid', 'sorcerer', 'wizard'] }),
        advancement('ritual-spells', 'spell-choice', { count: 2, spellLevel: 1, ritualOnly: true, sameListAs: 'spell-list', selection: 'open-drag-drop', acquisition: 'ritual-book' })
      ],
      runtime: [runtime('ritual-book-growth', 'spell-drop-on-ritual-book', 'validate-list-level-and-ritual-before-adding', { maxSpellLevelFormula: 'ceil(@details.level / 2)' })],
      limitations: ['Copiar novos rituais envolve tempo e custo em po; a automação só deve validar a elegibilidade, sem gastar recursos monetários silenciosamente.']
    }),

    profile('phb-2014-curandeiro', TIER.PARTIAL, {
      activities: [
        activity('stabilize', 'heal', 'Curandeiro — Estabilizar', { activation: 'action', healing: '1', consumesExternalItem: { name: 'Kit de Primeiros-Socorros', uses: 1 }, target: 'one-creature-at-0-hp' }),
        activity('treat-wounds', 'heal', 'Curandeiro — Tratar Ferimentos', { activation: 'action', healing: '1d6 + 4 + @details.level', consumesExternalItem: { name: 'Kit de Primeiros-Socorros', uses: 1 }, target: 'one-creature', targetCooldown: ['sr', 'lr'] })
      ],
      runtime: [runtime('healer-kit', 'activity-use', 'consume-healers-kit-use-and-track-target-cooldown')],
      limitations: ['A cura usa o total de Dados de Vida do alvo; em personagens padrão isso coincide com o nível total, mas o Importer deve preferir a quantidade real de Dados de Vida quando disponível.']
    }),

    profile('phb-2014-duelista-defensivo', TIER.PARTIAL, {
      activities: [activity('parry', 'reaction', 'Duelista Defensivo', { activation: 'reaction', appliesEffect: 'proficiency-ac', condition: 'Ao ser atingido por ataque corpo a corpo enquanto empunha arma de acuidade com a qual é proficiente.' })],
      effects: [effect('proficiency-ac', 'conditional-ac-bonus', { value: '@prof', transfer: false, duration: 'one-triggering-attack' })],
      runtime: [runtime('parry-resolution', 'melee-attack-hit', 'offer-reaction-and-recalculate-hit-with-temporary-ac-bonus')],
      limitations: ['O bônus de CA vale apenas contra o ataque que disparou a reação e não pode permanecer após sua resolução.']
    }),

    profile('phb-2014-especialista-em-besta', TIER.PARTIAL, {
      activities: [activity('hand-crossbow-bonus', 'attack', 'Especialista em Besta — Ataque Bônus', { activation: 'bonus', weapon: 'hand-crossbow', condition: 'Após usar a ação de Ataque e atacar com uma arma de uma mão.' })],
      runtime: [
        runtime('ignore-loading', 'weapon-attack-preparation', 'ignore-loading-property-for-proficient-crossbows'),
        runtime('close-range', 'ranged-attack-disadvantage', 'suppress-disadvantage-from-hostile-creature-within-five-feet')
      ],
      limitations: ['O ataque bônus deve reutilizar uma besta de mão realmente empunhada; o Feat não cria uma arma própria.']
    }),

    profile('phb-2014-especialista-em-briga', TIER.PARTIAL, {
      advancements: [advancement('ability', 'ability-score', { sourceChoiceId: 'ability', amount: 1, maximum: 20, options: ['str', 'con'] })],
      effects: [effect('unarmed-damage', 'unarmed-damage-minimum', { denomination: 'd4', transfer: true })],
      activities: [activity('grapple', 'check', 'Especialista em Briga — Agarrar', { activation: 'bonus', condition: 'Após atingir uma criatura com ataque desarmado ou arma improvisada no seu turno.', check: 'grapple' })],
      limitations: ['A fonte fornecida não lista proficiência com armas improvisadas; nenhuma proficiência adicional é inventada pelo perfil.']
    }),

    profile('phb-2014-explorador-de-cavernas', TIER.PARTIAL, {
      runtime: [
        runtime('secret-doors', 'secret-door-search-check', 'grant-advantage-to-perception-and-investigation'),
        runtime('traps-save', 'trap-saving-throw', 'grant-advantage'),
        runtime('traps-damage', 'trap-damage-application', 'grant-resistance-to-trap-damage'),
        runtime('travel-trap-search', 'travel-pace', 'allow-trap-search-at-normal-pace')
      ],
      limitations: ['Nenhum bônus global é aplicado a Percepção, Investigação ou salvaguardas: todos os benefícios dependem de portas secretas ou armadilhas.']
    }),

    profile('phb-2014-imobilizador', TIER.PARTIAL, {
      activities: [activity('pin', 'check', 'Imobilizador — Imobilizar', { activation: 'action', check: 'grapple', target: 'creature-grappled-by-owner', onSuccess: ['restrained-owner', 'restrained-target'] })],
      runtime: [
        runtime('grappled-advantage', 'attack-advantage', 'grant-advantage-against-creature-grappled-by-owner'),
        runtime('pin', 'grapple-check-result', 'apply-restrained-to-owner-and-target-until-grapple-ends')
      ],
      limitations: ['A condição Impedido deve terminar quando o agarre terminar; isso exige vínculo entre os efeitos do agressor e do alvo.']
    }),

    profile('phb-2014-iniciado-em-magia', TIER.PARTIAL, {
      advancements: [
        advancement('spell-list', 'linked-choice', { sourceChoiceId: 'spell-list', count: 1, options: ['bard', 'warlock', 'cleric', 'druid', 'sorcerer', 'wizard'] }),
        advancement('cantrips', 'spell-choice', { count: 2, spellLevel: 0, sameListAs: 'spell-list', selection: 'open-drag-drop', acquisition: 'learn' }),
        advancement('first-level-spell', 'spell-choice', { count: 1, spellLevel: 1, sameListAs: 'spell-list', selection: 'open-drag-drop', acquisition: 'learn-and-once-per-long-rest' })
      ],
      runtime: [runtime('daily-spell', 'chosen-level-one-spell-use', 'limit-feat-granted-cast-to-once-per-long-rest', { castAtLevel: 1 })],
      limitations: ['Como o Importer não administra um compêndio próprio de magias, as escolhas devem aceitar drag-and-drop e registrar qual magia de 1º nível recebe o uso 1/descanso longo.']
    }),

    profile('phb-2014-investida-poderosa', TIER.PARTIAL, {
      activities: [
        activity('charge-attack', 'attack', 'Investida Poderosa — Ataque', { activation: 'bonus', damageBonus: 5, condition: 'Usou Disparada e moveu pelo menos 3 m em linha reta imediatamente antes.' }),
        activity('charge-shove', 'check', 'Investida Poderosa — Empurrar', { activation: 'bonus', check: 'shove', pushDistance: '3 m', condition: 'Usou Disparada e moveu pelo menos 3 m em linha reta imediatamente antes.' })
      ],
      runtime: [runtime('charge-condition', 'bonus-action-availability', 'validate-dash-and-ten-foot-straight-line-movement')],
      limitations: ['O Foundry precisa conhecer o movimento realizado no turno para validar automaticamente os 3 m em linha reta.']
    }),

    profile('phb-2014-lider-inspirador', TIER.PARTIAL, {
      activities: [activity('inspire', 'heal', 'Líder Inspirador', { activation: '10-minute', healingType: 'temphp', healing: '@details.level + @abilities.cha.mod', target: 'up-to-six-friendly-creatures-within-9m', targetCooldown: ['sr', 'lr'] })],
      runtime: [runtime('target-cooldown', 'activity-use', 'track-per-target-short-or-long-rest-cooldown')],
      limitations: ['A atividade pode aplicar PV temporários; compreender o personagem e o cooldown individual por alvo continuam dependentes do runtime.']
    }),

    profile('phb-2014-maestria-em-arma-de-haste', TIER.PARTIAL, {
      activities: [activity('butt-end-attack', 'attack', 'Maestria em Arma de Haste — Haste Oposta', { activation: 'bonus', damage: '1d4', damageType: 'bludgeoning', ability: 'same-as-triggering-attack', qualifyingWeapons: ['glaive', 'halberd', 'quarterstaff'] })],
      runtime: [runtime('enter-reach-oa', 'creature-enters-reach', 'allow-opportunity-attack-with-qualifying-polearm', { qualifyingWeapons: ['glaive', 'halberd', 'pike', 'quarterstaff'] })],
      limitations: ['A atividade precisa reutilizar o modificador da arma empunhada; o Feat não cria uma arma separada.']
    }),

    profile('phb-2014-maestria-em-armadura-media', TIER.PARTIAL, {
      effects: [effect('medium-armor-rules', 'conditional-armor-rule', { transfer: true, armor: 'medium', suppressStealthDisadvantage: true, dexterityAcCap: 3, dexterityMinimum: 16 })],
      runtime: [runtime('medium-armor-state', 'equipment-change', 'apply-medium-armor-master-rules-only-while-medium-armor-equipped')],
      limitations: ['A alteração do limite de Destreza e da Furtividade só é válida com armadura média equipada; nenhum efeito global é seguro.']
    }),

    profile('phb-2014-maestria-em-armadura-pesada', TIER.PARTIAL, {
      advancements: [advancement('strength', 'ability-score', { amount: 1, maximum: 20, options: ['str'], locked: true })],
      effects: [effect('damage-reduction', 'conditional-damage-reduction', { value: 3, damageTypes: ['bludgeoning', 'piercing', 'slashing'], source: 'nonmagical-attack', condition: 'heavy-armor-equipped' })],
      runtime: [runtime('heavy-armor-damage-reduction', 'damage-application', 'reduce-qualified-nonmagical-attack-damage-by-three-while-heavy-armor-equipped')],
      limitations: ['A redução não vale contra dano mágico nem contra dano que não provenha de ataque; portanto não pode ser resistência ou redução global.']
    }),

    profile('phb-2014-matador-de-conjuradores', TIER.PARTIAL, {
      activities: [activity('caster-reaction', 'reaction', 'Matador de Conjuradores — Ataque de Reação', { activation: 'reaction', condition: 'Uma criatura a até 1,5 m conjura uma magia.', attack: 'melee-weapon' })],
      runtime: [
        runtime('caster-reaction', 'nearby-creature-casts-spell', 'offer-melee-reaction-attack'),
        runtime('concentration-pressure', 'owner-damages-concentrating-creature', 'grant-disadvantage-on-resulting-concentration-save'),
        runtime('nearby-spell-save', 'saving-throw-against-nearby-caster-spell', 'grant-advantage')
      ],
      limitations: ['Os três benefícios dependem do conjurador, distância e/ou estado de concentração do alvo; não há Active Effect global seguro.']
    }),

    profile('phb-2014-mente-afiada', TIER.PARTIAL, {
      advancements: [advancement('intelligence', 'ability-score', { amount: 1, maximum: 20, options: ['int'], locked: true })],
      limitations: ['Direção do norte, tempo até nascer/pôr do sol e memória do último mês são benefícios informacionais e permanecem na descrição.']
    }),

    profile('phb-2014-mestre-de-armas', TIER.FULL, {
      advancements: [
        advancement('ability', 'ability-score', { sourceChoiceId: 'ability', amount: 1, maximum: 20, options: ['str', 'dex'] }),
        advancement('weapon-proficiencies', 'trait-proficiency', { sourceChoiceId: 'weapon-proficiencies', trait: 'weapon', count: 4, choicesFrom: ['simple', 'martial'] })
      ]
    }),

    profile('phb-2014-mestre-de-armas-grandes', TIER.PARTIAL, {
      activities: [activity('power-attack', 'toggle', 'Mestre de Armas Grandes — Ataque Poderoso', { activation: 'special', attackModifier: -5, damageBonus: 10, appliesTo: 'next-qualified-heavy-melee-weapon-attack' })],
      runtime: [
        runtime('bonus-attack', 'melee-weapon-critical-or-kill', 'offer-bonus-action-melee-weapon-attack'),
        runtime('power-attack', 'heavy-melee-weapon-attack', 'apply-minus-five-plus-ten-when-toggle-consumed')
      ],
      limitations: ['O -5/+10 deve valer somente para um ataque corpo a corpo com arma pesada na qual haja proficiência; não é bônus global.']
    }),

    profile('phb-2014-mestre-de-escudo', TIER.PARTIAL, {
      activities: [
        activity('shield-shove', 'check', 'Mestre de Escudo — Empurrar', { activation: 'bonus', check: 'shove', condition: 'Após realizar a ação de Ataque no turno e enquanto empunhar um escudo.' }),
        activity('shield-evasion', 'reaction', 'Mestre de Escudo — Interpor Escudo', { activation: 'reaction', condition: 'Teste de resistência de Destreza permitiria sofrer metade do dano e o personagem passou no teste.' })
      ],
      runtime: [
        runtime('shield-save-bonus', 'dexterity-save-single-target-effect', 'add-equipped-shield-ac-bonus-to-save'),
        runtime('shield-evasion', 'successful-dexterity-save-half-damage', 'replace-half-damage-with-zero-when-reaction-used')
      ],
      limitations: ['Todos os benefícios exigem um escudo empunhado; o bônus de salvaguarda só vale quando a magia/efeito tem o personagem como único alvo.']
    }),

    profile('phb-2014-mobilidade', TIER.PARTIAL, {
      effects: [effect('speed', 'speed-bonus', { value: '3 m', valueFeet: 10, transfer: true })],
      runtime: [
        runtime('dash-terrain', 'movement-cost-after-dash', 'ignore-difficult-terrain-extra-cost-for-turn'),
        runtime('no-opportunity-from-attacked-target', 'opportunity-attack-evaluation', 'suppress-opportunity-attacks-from-creatures-owner-attacked-this-turn')
      ],
      limitations: ['O aumento de deslocamento é passivo; os demais benefícios dependem das ações e alvos do turno.']
    }),

    profile('phb-2014-observador', TIER.PARTIAL, {
      advancements: [advancement('ability', 'ability-score', { sourceChoiceId: 'ability', amount: 1, maximum: 20, options: ['int', 'wis'] })],
      effects: [
        effect('passive-perception', 'skill-passive-bonus', { skill: 'perception', value: 5, transfer: true }),
        effect('passive-investigation', 'skill-passive-bonus', { skill: 'investigation', value: 5, transfer: true })
      ],
      limitations: ['Leitura labial depende de visão da boca e compreensão do idioma e permanece descritiva; os +5 passivos são automatizáveis.']
    }),

    profile('phb-2014-perito', TIER.FULL, {
      advancements: [advancement('skills-tools', 'trait-proficiency', { sourceChoiceId: 'skills-tools', count: 3, trait: 'skill-or-tool', choicesFrom: ['skills', 'tools'], combinationAllowed: true })]
    }),

    profile('phb-2014-poliglota', TIER.PARTIAL, {
      advancements: [
        advancement('intelligence', 'ability-score', { amount: 1, maximum: 20, options: ['int'], locked: true }),
        advancement('languages', 'trait-proficiency', { sourceChoiceId: 'languages', count: 3, trait: 'language', choicesFrom: ['languages'] })
      ],
      limitations: ['A criação e decifração de criptogramas é uma regra narrativa/teste contextual e permanece na descrição.']
    }),

    profile('phb-2014-protecao-leve', TIER.FULL, {
      advancements: [
        advancement('ability', 'ability-score', { sourceChoiceId: 'ability', amount: 1, maximum: 20, options: ['str', 'dex'] }),
        advancement('light-armor', 'trait-proficiency', { trait: 'armor', add: ['light'] })
      ]
    }),

    profile('phb-2014-protecao-moderada', TIER.FULL, {
      advancements: [
        advancement('ability', 'ability-score', { sourceChoiceId: 'ability', amount: 1, maximum: 20, options: ['str', 'dex'] }),
        advancement('medium-armor', 'trait-proficiency', { trait: 'armor', add: ['medium'] }),
        advancement('shields', 'trait-proficiency', { trait: 'armor', add: ['shield'] })
      ]
    }),

    profile('phb-2014-protecao-pesada', TIER.FULL, {
      advancements: [
        advancement('strength', 'ability-score', { amount: 1, maximum: 20, options: ['str'], locked: true }),
        advancement('heavy-armor', 'trait-proficiency', { trait: 'armor', add: ['heavy'] })
      ]
    }),

    profile('phb-2014-resiliente', TIER.PARTIAL, {
      advancements: [advancement('ability-and-save', 'linked-choice', {
        sourceChoiceId: 'ability', count: 1, options: ['str', 'dex', 'con', 'int', 'wis', 'cha'],
        grants: [{ type: 'ability-score', amount: 1, maximum: 20, sameChoice: true }, { type: 'saving-throw-proficiency', sameChoice: true }]
      })],
      limitations: ['O +1 e a proficiência em salvaguarda devem apontar para a mesma habilidade; o Importer 0.12 deve materializar a escolha de forma vinculada.']
    }),

    profile('phb-2014-resistente', TIER.PARTIAL, {
      advancements: [advancement('constitution', 'ability-score', { amount: 1, maximum: 20, options: ['con'], locked: true })],
      runtime: [runtime('hit-die-minimum', 'hit-die-healing-roll', 'enforce-minimum-healing-equal-two-times-constitution-modifier', { absoluteMinimum: 2 })],
      limitations: ['O mínimo é aplicado à recuperação produzida por cada Dado de Vida rolado e depende do modificador atual de Constituição.']
    }),

    profile('phb-2014-robusto', TIER.FULL, {
      effects: [effect('hp-per-level', 'hp-per-level', { value: 2, transfer: true, includeCurrentLevel: true })]
    }),

    profile('phb-2014-sentinela', TIER.PARTIAL, {
      activities: [activity('retaliation', 'reaction', 'Sentinela — Retaliação', { activation: 'reaction', attack: 'melee-weapon', condition: 'Criatura a até 1,5 m ataca um alvo diferente de você e esse alvo não possui Sentinela.' })],
      runtime: [
        runtime('oa-stop', 'opportunity-attack-hit', 'set-target-speed-to-zero-for-rest-of-turn'),
        runtime('disengage', 'opportunity-attack-evaluation', 'allow-opportunity-attack-despite-disengage'),
        runtime('retaliation', 'nearby-creature-attacks-other-target', 'offer-reaction-melee-weapon-attack')
      ],
      limitations: ['Os efeitos dependem de ataques de oportunidade, Desengajar e posição dos combatentes, portanto exigem runtime de combate.']
    }),

    profile('phb-2014-sorrateiro', TIER.PARTIAL, {
      runtime: [
        runtime('light-obscurement-hide', 'hide-eligibility', 'allow-hide-while-lightly-obscured-from-observer'),
        runtime('miss-does-not-reveal', 'hidden-ranged-attack-miss', 'preserve-hidden-position'),
        runtime('dim-light-perception', 'perception-check-vision-in-dim-light', 'suppress-dim-light-disadvantage')
      ],
      limitations: ['Os três benefícios dependem de obscurecimento, estado escondido e iluminação; nenhum Active Effect global é seguro.']
    }),

    profile('phb-2014-sortudo', TIER.PARTIAL, {
      uses: itemUses('3', ['lr'], { label: 'Pontos de Sorte' }),
      activities: [activity('spend-luck', 'utility', 'Sortudo — Gastar Ponto de Sorte', { activation: 'special', consumesItemUse: 1, condition: 'Depois de rolar um ataque, teste ou salvaguarda e antes de saber o resultado, ou quando uma jogada de ataque é feita contra você.' })],
      runtime: [
        runtime('owner-roll', 'post-d20-roll-before-outcome', 'roll-additional-d20-and-let-owner-choose-result', { rollTypes: ['attack', 'ability-check', 'saving-throw'] }),
        runtime('incoming-attack', 'attack-roll-against-owner', 'roll-additional-d20-and-let-owner-choose-attacker-or-luck-die'),
        runtime('mutual-cancel', 'multiple-luck-points-on-same-roll', 'cancel-opposing-luck-points-without-extra-die')
      ],
      limitations: ['O gasto de pontos é automatizável; a intervenção na rolagem exige runtime porque ocorre depois do d20 e antes do resultado ser conhecido.']
    })
  ]);

  const BY_ID = new Map(PROFILES.map(item => [item.featId, item]));

  function buildPlan(featOrId) {
    const featId = clean(typeof featOrId === 'object' ? featOrId?.id : featOrId);
    const source = BY_ID.get(featId);
    if (!source) throw new Error(`Perfil Foundry de Talento ausente: ${featId || '(sem id)'}`);
    return {
      schema: SCHEMA,
      schemaVersion: SCHEMA_VERSION,
      target: clone(TARGET),
      profileId: source.featId,
      tier: source.tier,
      advancements: clone(source.advancements),
      effects: clone(source.effects),
      activities: clone(source.activities),
      uses: clone(source.uses),
      runtime: clone(source.runtime),
      limitations: clone(source.limitations),
      notes: clone(source.notes)
    };
  }

  function validatePlan(plan, feat = null) {
    const errors = [];
    const warnings = [];
    if (!plan || typeof plan !== 'object' || Array.isArray(plan)) return { ok: false, errors: ['Plano de automação inválido.'], warnings };
    if (plan.schema !== SCHEMA) errors.push(`Schema de automação incompatível: esperado ${SCHEMA}.`);
    if (Number(plan.schemaVersion) !== SCHEMA_VERSION) errors.push(`Versão do plano incompatível: esperado ${SCHEMA_VERSION}.`);
    if (!BY_ID.has(clean(plan.profileId))) errors.push(`profileId não homologado: ${plan.profileId || '(vazio)'}.`);
    if (!Object.values(TIER).includes(plan.tier)) errors.push(`Tier de automação inválido: ${plan.tier}.`);
    for (const key of ['advancements', 'effects', 'activities', 'runtime', 'limitations', 'notes']) if (!Array.isArray(plan[key])) errors.push(`${key} precisa ser um array.`);

    const uniqueKeys = (items, label) => {
      const seen = new Set();
      for (const item of arr(items)) {
        if (!clean(item?.key)) { errors.push(`${label} possui entrada sem key.`); continue; }
        if (seen.has(item.key)) errors.push(`${label} possui key duplicada: ${item.key}.`);
        seen.add(item.key);
      }
    };
    uniqueKeys(plan.advancements, 'advancements');
    uniqueKeys(plan.effects, 'effects');
    uniqueKeys(plan.activities, 'activities');
    uniqueKeys(plan.runtime, 'runtime');

    for (const item of arr(plan.advancements)) if (!ADVANCEMENT_TYPES.includes(item.type)) errors.push(`Advancement ${item.key} possui tipo inválido: ${item.type}.`);
    for (const item of arr(plan.effects)) if (!EFFECT_MECHANICS.includes(item.mechanic)) errors.push(`Effect ${item.key} possui mechanic inválido: ${item.mechanic}.`);
    for (const item of arr(plan.activities)) if (!ACTIVITY_TYPES.includes(item.type)) errors.push(`Activity ${item.key} possui tipo inválido: ${item.type}.`);

    if (feat?.id && feat.id !== plan.profileId) errors.push(`Plano ${plan.profileId} não corresponde ao talento ${feat.id}.`);
    const choiceIds = new Set(arr(feat?.choices).map(choice => choice?.id).filter(Boolean));
    for (const adv of arr(plan.advancements)) {
      if (adv.sourceChoiceId && feat && !choiceIds.has(adv.sourceChoiceId)) errors.push(`Advancement ${adv.key} referencia choice ausente no talento: ${adv.sourceChoiceId}.`);
    }

    if (plan.tier === TIER.FULL && plan.runtime.length) warnings.push('Perfil marcado como full contém runtime; revise se a cobertura realmente é integralmente nativa.');
    if (plan.tier === TIER.DESCRIPTION && (plan.advancements.length || plan.effects.length || plan.activities.length || plan.uses || plan.runtime.length)) warnings.push('Perfil description contém automação declarada.');
    if (plan.tier === TIER.PARTIAL && !plan.limitations.length) warnings.push('Perfil partial sem limitações documentadas.');
    return { ok: errors.length === 0, errors, warnings };
  }

  function audit(feats = []) {
    const list = arr(feats);
    const errors = [];
    const warnings = [];
    const plans = [];
    for (const feat of list) {
      try {
        const plan = buildPlan(feat);
        const validation = validatePlan(plan, feat);
        plans.push(plan);
        validation.errors.forEach(error => errors.push(`${feat?.name || feat?.id}: ${error}`));
        validation.warnings.forEach(warning => warnings.push(`${feat?.name || feat?.id}: ${warning}`));
      } catch (error) {
        errors.push(`${feat?.name || feat?.id || 'Talento'}: ${error.message || String(error)}`);
      }
    }
    const profileIds = new Set(PROFILES.map(item => item.featId));
    const featIds = new Set(list.map(item => item?.id).filter(Boolean));
    for (const id of profileIds) if (list.length && !featIds.has(id)) warnings.push(`Perfil sem talento carregado: ${id}.`);
    return {
      ok: errors.length === 0,
      errors,
      warnings: [...new Set(warnings)],
      summary: {
        feats: list.length,
        profiles: PROFILES.length,
        full: plans.filter(plan => plan.tier === TIER.FULL).length,
        partial: plans.filter(plan => plan.tier === TIER.PARTIAL).length,
        description: plans.filter(plan => plan.tier === TIER.DESCRIPTION).length,
        advancements: plans.reduce((sum, plan) => sum + plan.advancements.length, 0),
        effects: plans.reduce((sum, plan) => sum + plan.effects.length, 0),
        activities: plans.reduce((sum, plan) => sum + plan.activities.length, 0),
        uses: plans.filter(plan => plan.uses).length,
        runtime: plans.reduce((sum, plan) => sum + plan.runtime.length, 0),
        limitations: plans.reduce((sum, plan) => sum + plan.limitations.length, 0)
      }
    };
  }

  const API = Object.freeze({
    schema: Object.freeze({ name: SCHEMA, version: SCHEMA_VERSION }),
    target: TARGET,
    tier: TIER,
    profileCount: PROFILES.length,
    buildPlan,
    validatePlan,
    audit,
    listProfiles: () => PROFILES.map(item => clone(item))
  });

  global.GRIMORIO_FOUNDRY_FEAT_AUTOMATION = API;
})(window);
