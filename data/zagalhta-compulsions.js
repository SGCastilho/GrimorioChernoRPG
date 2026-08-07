'use strict';

(function () {
  const sourceTitle = "Somnus Domina — Zagalhta's Exolunar Collection";
  const compulsions = {
    'zagalhta-favored-soul-destimus': 'Amaldiçoado com uma mente que funciona mais como a de uma máquina, você é compelido a analisar tudo friamente. Todo teste ou salvaguarda baseado em Carisma usa Inteligência em seu lugar. Além disso, qualquer magia que não possa ter um construto como alvo também não pode ter você como alvo.',
    'zagalhta-favored-soul-jalasaor': 'Você não suporta ver injustiça contra os outros. Se testemunhar um ato maligno que não sirva a um propósito maior em nome do bem, é compelido a intervir. Se não o fizer, faça salvaguarda de Carisma CD 10 + metade do nível de Alma Favorecida (arredondado para cima); em falha, recebe um nível de exaustão.',
    'zagalhta-favored-soul-ombra': 'Sua natureza busca a escuridão. Sob luz solar direta, ou ao atacar um alvo em luz plena do sol, você tem desvantagem nos ataques e testes de perícia relevantes. Além disso, ao completar um Descanso fora de escuridão total, recupera apenas metade dos PV que recuperaria normalmente, seja por Dados de Vida ou por Descanso Longo.',
    'zagalhta-favored-soul-setanta': 'A natureza impulsiva de Setanta guia suas ações. Quando criatura adjacente dentro de seu alcance for alvo de ataque ou efeito hostil, você é compelido a usar a reação para trocar de lugar com ela e tornar-se o alvo. Até o fim daquele turno, enquanto ela estiver ao alcance, ataques e efeitos hostis continuam sendo redirecionados para você. Na primeira vez em cada rodada, faça Sabedoria CD 10 + metade do nível de Alma Favorecida; em sucesso, resiste à compulsão pelo restante do encontro.',
    'zagalhta-favored-soul-sihlu': 'Se você seria enfeitiçado ou atordoado, fica enfurecido no lugar pela mesma duração; a CD do efeito torna-se 10 + metade do nível de Alma Favorecida se não fosse maior. Você tem desvantagem em salvaguardas contra ficar enfurecido e considera todas as criaturas hostis enquanto estiver assim. Quando sofre um acerto crítico, faça Sabedoria contra essa mesma CD; em falha, fica enfurecido por 1 minuto ou até obter sucesso na salvaguarda.',
    'zagalhta-favored-soul-zega': 'Ligado rigidamente à lei, você sofre ao quebrá-la. Quando desobedece diretamente uma lei que não seja completamente oposta à sua natureza, ou recebe uma ordem de alguém investido de autoridade por um líder legítimo, faça Carisma CD 10 + metade do nível de Alma Favorecida. Em falha, recebe 1 ponto de Fadiga de Combate.'
  };

  const subclasses = window.GRIMORIO_SUBCLASSES || [];
  for (const [id, text] of Object.entries(compulsions)) {
    const subclass = subclasses.find(item => item.id === id);
    if (!subclass) continue;
    if (!Array.isArray(subclass.references)) subclass.references = [];
    if (!subclass.references.some(ref => ref.title === 'COMPULSÃO DO FARDO')) {
      subclass.references.push({ title: 'COMPULSÃO DO FARDO', page: 154, sourceTitle, text });
    }
  }
})();
