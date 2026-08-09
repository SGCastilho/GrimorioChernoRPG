'use strict';

// Magias homebrew vinculadas à classe Cultivador.
// Esta ficha foi traduzida diretamente de uma captura de tela fornecida pelo usuário.
window.GRIMORIO_CULTIVATOR_HOMEBREW_SPELLS = [
  {
    id: 'cultivator-animate-energy',
    name: 'Animar Energia',
    originalName: 'Animate Energy',
    aliases: ['Animate Energy'],
    level: 1,
    school: 'Necromancia',
    time: '1 minuto',
    range: '9 metros',
    comp: 'V, S, M (uma gota de sangue, uma pitada de pó de osso e uma garrafa de vidro, que se quebra para revelar a esfera de energia necromântica)',
    material: 'uma gota de sangue, uma pitada de pó de osso e uma garrafa de vidro, que se quebra para revelar a esfera de energia necromântica',
    duration: 'Instantânea',
    classes: 'Cultivador',
    ritual: true,
    concentration: false,
    desc: 'Esta magia cria um servo morto-vivo. Escolha um ponto a até 9 metros de você. Nesse ponto, você concentra energia necromântica e cria uma minúscula esfera de energia necromântica.\n\nEm cada um dos seus turnos, você pode usar uma ação bônus para comandar mentalmente qualquer criatura que tenha criado com esta magia, desde que a criatura esteja a até 18 metros de você. Se controlar várias criaturas criadas com esta magia, você pode comandar qualquer uma ou todas elas ao mesmo tempo, dando o mesmo comando a cada uma. Você decide qual ação a criatura realizará e para onde ela se moverá durante o próximo turno dela, ou pode emitir um comando geral, como proteger uma câmara ou corredor específico. Se não emitir nenhum comando, a criatura apenas se defende contra criaturas hostis e continua atacando uma criatura à qual esteja anexada. Depois de receber uma ordem, a criatura continua a cumpri-la até concluir a tarefa.\n\nVocê pode animar até 2 criaturas usando esta magia. Quando tentar animar uma terceira, uma das criaturas que você já possui desaparece.',
    higher: 'Quando você conjura esta magia usando um espaço de magia de 2º nível ou superior, pode animar uma esfera minúscula de energia necromântica adicional para cada nível do espaço acima do 1º, e o número de esferas minúsculas de energia necromântica que você pode controlar aumenta em 1 para cada nível do espaço usado para conjurar esta magia, mas não pode ultrapassar 4. Por exemplo, ao conjurar esta magia usando um espaço de 2º nível enquanto já possui 2 criaturas, você animaria apenas mais uma; ao conjurá-la usando um espaço de 4º nível sem possuir nenhuma criatura, você animaria quatro criaturas.',
    traits: ['Cultivador — Qi Demoníaco', 'Homebrew'],
    category: 'Magias Homebrew — Cultivador',
    source: 'Magias Homebrew — Cultivador',
    sourceTitle: 'Magias Homebrew — Cultivador',
    sourceNote: 'Tradução direta da captura de tela fornecida pelo usuário. A fonte descreve a criação de um “servo morto-vivo” representado por uma minúscula esfera de energia necromântica, mas não fornece nesta ficha estatísticas de criatura, bloco de estatísticas, CA, pontos de vida ou demais valores mecânicos; o Grimório não os infere.'
  }
];

window.GRIMORIO_REGISTRY.registerSpellCatalog({
  id: 'cultivator-homebrew-spells',
  sourceId: 'cultivator-homebrew-spells',
  spells: window.GRIMORIO_CULTIVATOR_HOMEBREW_SPELLS
});
