# RB-6 — Materialização nativa de Race Builds

A **RB-6** promove a linha `0.13.x` do Grimório Importer de preflight para escrita racial controlada. O contrato de transporte continua `grimorio-foundry-race-build-bundle@1`; não existe quebra de schema entre RB-4/RB-5/RB-6.

## Destinos gerenciados

- `grimorio-importer.grimorio-races` — **Grimório — Raças** (`Item.type = race`)
- `grimorio-importer.grimorio-racial-features` — **Grimório — Características Raciais** (`Item.type = feat`)

Nenhum Item racial gerenciado é criado no diretório do Mundo. Os dois packs são destravados somente durante a transação e seu estado de lock anterior é restaurado no `finally`.

## Ordem de materialização

1. O `race-validator.js` revalida o Race Build, hashes, identidade, proveniência e segurança.
2. `resolvedRaceFeatures()` produz a lista deduplicada de características efetivamente selecionadas.
3. `race-materializer.js` cria/atualiza as Características Raciais primeiro, usando `feature.key` como `grimorioId` reutilizável.
4. Com os UUIDs reais dos Items de característica, o materializador cria/atualiza o `Item.type = race`.
5. O Race recebe um `ItemGrant` nativo apontando para os UUIDs dos Items no compêndio racial.
6. O preflight posterior passa a reportar os mesmos documentos como `ATUALIZAR`, preservando UUIDs.

## Projeções nativas seguras

A RB-6 materializa somente o que o Race Build já resolveu de forma inequívoca:

- `system.movement`: deslocamento-base métrico quando expresso diretamente nos metadados da raça;
- `system.senses.ranges.darkvision`: Visão no Escuro estática explicitamente selecionada;
- `system.type`: tipo único reconhecido; combinações múltiplas ou tipos homebrew ficam como `custom` para não apagar informação;
- `Size` Advancement: tamanho já resolvido pelo Race Builder;
- `AbilityScoreImprovement` Advancement: distribuição fixa já resolvida, inclusive valores negativos quando a fonte os exige;
- `Trait` de idiomas: somente grants cujo identificador DnD5e seja inequívoco. `Comum` usa `languages:standard:common`; escolhas abertas permanecem assistidas quando não existe pool transportado de forma segura;
- `ItemGrant`: todas as características raciais efetivamente selecionadas.

O DnD5e 5.3 armazena `system.advancement` como objeto. A RB-6 não usa o formato legado em array.

## Características Raciais reutilizáveis

Um `racial-feature` é global por `feature.key`. O Item não grava se aquela seleção ocorreu como raça dominante ou secundária, porque isso é contexto do build e faria o mesmo UUID oscilar entre importações. Proveniência canônica de raça/subraça/fonte é mantida, enquanto o papel daquele Item dentro da construção continua pertencendo ao Race Build/Race Item.

Na RB-6 as características são **description-first**: texto e proveniência são completos, mas Activities, Active Effects e automações contextuais permanecem vazios. Isso evita inferir regras mecânicas a partir de prosa. A expansão dessas automações pertence à RB-7.

## Reimportação

- Race: `documentRole = race` + `grimorioId = identity.grimorioId`.
- Característica Racial: `documentRole = racial-feature` + `grimorioId = feature.key`.

Reimportar o mesmo build atualiza os mesmos documentos e preserva UUIDs. Um build racial diferente recebe outro `selectionHash`/`grimorioId`, mas pode reutilizar os mesmos Items de Característica Racial.

## Fora de escopo

A RB-6 **não**:

- aplica automaticamente a raça ao Actor;
- substitui uma raça já existente no Actor;
- executa escolhas dependentes das proficiências atuais do Actor;
- cria Active Effects/Activities raciais por interpretação textual;
- cria ou resolve Spell Items raciais;
- cria Items gerenciados no Mundo.

A próxima etapa é **RB-7 — automação e casos especiais**. A aplicação direta ao Actor permanece separada para uma fase posterior.
