'use strict';

(function () {
  const refs = {
  "barbarian": [
    "Ataque Extra Aprimorado: Bárbaro",
    148,
    "Esta regra opcional substitui Ataque Extra. Você continua atacando duas vezes. A partir do 7º nível, quando fizer um ataque com vantagem durante a ação Atacar e ambos os d20 acertariam, force salvaguarda de Força (CD 8 + proficiência + atributo de ataque); em falha, derrube o alvo ou empurre-o 1,5 m. Criaturas mais de um tamanho maiores têm sucesso automático. Uma vez por turno."
  ],
  "fighter": [
    "Ataque Extra Aprimorado: Guerreiro",
    149,
    "Esta regra opcional substitui Ataque Extra, mantendo três ataques no 11º e quatro no 20º. A partir do 7º nível, ao atacar uma criatura durante a ação Atacar, cada ataque subsequente naquele turno contra ela recebe +1 cumulativo, até +4."
  ],
  "monk": [
    "Ataque Extra Aprimorado: Monge",
    149,
    "Esta regra opcional substitui Ataque Extra. A partir do 7º nível, ao fim do seu turno, ganhe 3 PV temporários por ataque de arma que você acertou naquele turno contra criatura que não seja Constructo."
  ],
  "paladin": [
    "Ataque Extra Aprimorado: Paladino",
    149,
    "Esta regra opcional substitui Ataque Extra. A partir do 7º nível, quando acertar dois ataques durante a ação Atacar, pode usar ação bônus para bradar, escolhendo aliado ou inimigo a 9 m. Inimigo que veja/ouça faz Sabedoria (CD 8 + proficiência + Carisma) ou fica amedrontado até fim do próximo turno; em aliado, encerra a condição amedrontado. Uma vez por turno."
  ],
  "ranger": [
    "Ataque Extra Aprimorado: Patrulheiro",
    149,
    "Esta regra opcional substitui Ataque Extra. A partir do 7º nível, a segunda vez em seu turno que acertar a mesma criatura com ataque de arma causa dano adicional igual ao bônus de proficiência."
  ],
  "bender-ryoko": [
    "Ataque Extra Aprimorado: Dobrador",
    149,
    "Esta regra opcional substitui Ataque Extra. A partir do 7º nível, ao realizar a ação Atacar, pode substituir um ataque por um truque conhecido da lista de Dobrador com tempo de conjuração de 1 ação. O truque é conjurado em seu nível mais baixo, sem escalonamento por nível do personagem."
  ]
};
  for (const [classId, data] of Object.entries(refs)) {
    const cls = (window.GRIMORIO_CLASSES || []).find(item => item.id === classId);
    if (!cls) continue;
    if (!Array.isArray(cls.references)) cls.references = [];
    if (!cls.references.some(item => item.title === data[0].toUpperCase())) cls.references.push({ title: data[0].toUpperCase(), page: data[1], text: data[2], sourceTitle: "Ryoko's Guide to the Yokai Realms" });
  }
})();
