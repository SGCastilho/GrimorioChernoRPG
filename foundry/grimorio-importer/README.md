# Grimório Importer — v0.10.0

Módulo complementar do **Grimório D&D 5e PT-BR** para **Foundry VTT 13.351 + DnD5e 5.3.3**.

## Atualização 0.10.0 — Talentos

O importador passa a consumir os bundles/pacotes de Talentos produzidos pelo Grimório 5.41.0.

- Novo compêndio **Grimório — Talentos** (`grimorio-importer.grimorio-feats`).
- Suporte aos schemas `grimorio-foundry-feat-bundle` v1 e `grimorio-foundry-feat-package` v1.
- O catálogo inicial contém os **42 Talentos do Livro do Jogador 2014**.
- Cada entrada é criada como Item DnD5e `feat`, preservando descrição, fonte/página, pré-requisito textual, `system.identifier`, escolhas estruturadas e repetibilidade.
- Os Talentos são organizados em pastas de fonte. A primeira é **Livro do Jogador**.
- O matching usa `flags.grimorio-importer.grimorioId`; reimportar atualiza o Item existente e preserva o UUID.
- Nenhum Talento é criado automaticamente no diretório de Items do Mundo.
- A política de automação é **conservative-description-first**: regras condicionais permanecem no texto até existir um perfil mecânico explícito e testado.
- `/grimorio-import` detecta automaticamente JSONs de classes/subclasses e de Talentos; `/grimorio-import-feats` é um alias conveniente.
- `package.json`, `module.json` e `IMPORTER_VERSION` estão sincronizados em **0.10.0**.

### Teste da integração de Talentos

```bash
node tests/validate-feats-010.mjs
```

O teste materializa os 42 Talentos em um runtime simulado, valida o compêndio/pasta, confere metadados representativos e executa uma segunda importação para provar idempotência/estabilidade dos UUIDs.


## Atualização 0.9.3 — Lutador de Rua

O importador passa a reconhecer a classe homebrew **Lutador de Rua** (`identifier: street-fighter`) e o Arquétipo de Rua **Dragão de Dojima** (`street-fighter-dragon-dojima`) exportados pelo Grimório 5.27.

- Catálogo atual: **26 classes + 381 subclasses/especializações = 407 bundles**.
- O bundle da classe gerado pelo Grimório 5.27 ainda carrega o aviso histórico de que o Importer 0.9.2 não possuía perfil nativo. A 0.9.3 reconhece esse aviso como obsoleto e usa seu **CLASS_PROFILE local homologado**, sem exigir que o usuário regenere o JSON.
- Lutador de Rua usa **d10**, salvaguardas de **Força e Constituição**, armadura leve e escolha de duas perícias entre as nove opções documentadas.
- Armas simples são concedidas nativamente. Armas improvisadas e armas marciais corpo a corpo sem a propriedade Pesada permanecem descritas para conferência manual, evitando conceder toda a categoria marcial de forma incorreta.
- **Arquétipo de Rua** é criado como Advancement de `Subclass` no **3º nível**. Dragão de Dojima concede `ItemGrant` nos níveis **3, 6, 11 e 17**.
- O PDF lista **Incremento de Habilidade** nos níveis 4, 8, 12, 16 e 19 sem fornecer o bloco de regras. Por fidelidade à fonte, a 0.9.3 materializa e concede essas entradas como características textuais e **não cria AbilityScoreImprovement nativo por inferência**.
- No 3º nível, o PDF afirma explicitamente que o personagem aprende **duas Essências de Cólera**. O módulo cria um `ItemChoice` de 2 entre as **5 Essências inicialmente disponíveis**.
- As **15 Essências posteriores** ficam preservadas no compêndio com seus níveis de disponibilidade (9, 13, 15 e 17), mas não são concedidas automaticamente: a fonte registra “Essência Adicional” nesses níveis sem definir explicitamente a quantidade concedida.
- **Cólera** recebe uma reserva nativa com máximo calculado por bônus de proficiência + Força, respeitando o mínimo pelo bônus de proficiência e os aumentos de +2 nos níveis 10 e 18. Ganho/perda da reserva continua manual porque depende de eventos de combate que a fonte descreve de forma contextual.
- A automação conservadora sobe para **99 perfis**: **86 de classe + 13 de subclasse**, cobrindo **26/26 famílias**, com **121 Activities**, 39 reservas/usos e 11 Active Effects. O Lutador de Rua responde por **27 perfis**, incluindo os quatro Surtos básicos, as 20 Essências, Ímpeto Indomável, Não Acabou Ainda, Coração Indomável, Recusar a Derrota e as reações da Técnica Komaki.
- `package.json`, `module.json` e `IMPORTER_VERSION` estão sincronizados em **0.9.3**.


## Atualização 0.9.2 — Cultivador

O importador passa a reconhecer a nova classe **Cultivador** (`identifier: cultivator`) e seus três Chamados à Divindade.

- Catálogo atual: **25 classes + 380 subclasses = 405 bundles**.
- O Cultivador usa **Sabedoria** como habilidade de conjuração, mas não recebe progressão de slots nativos: sua classe consome **Qi**, conforme a fonte.
- A seleção de subclasse é criada no **6º nível** com o título **Chamado à Divindade**.
- As características são organizadas normalmente em `Cultivador/` e em `Cultivador/<Chamado>/` dentro de **Grimório — Características**.
- **Autoridade Divina** possui Activity parcial de ação com rolagem `1d100`; o módulo não inventa uma recarga fixa porque a fonte diferencia sucesso, falha e o 20º nível.
- O framework de automação passa a **72 perfis**, **60 de classe + 12 de subclasse**, cobrindo **25/25 famílias de classe**, com **87 Activities**, 37 reservas/usos e 11 Active Effects.

## Ajuste 0.9.1 — Pastas e nomes das características

O compêndio **Grimório — Características** agora é organizado automaticamente. Cada classe recebe uma pasta de primeiro nível e cada subclasse/especialização recebe uma subpasta dentro da classe.

Exemplo:

```text
Grimório — Características
└── Bardo
    ├── Inspiração de Bardo
    ├── Canção de Descanso
    ├── Colégio do Conhecimento
    │   └── ... características do Colégio do Conhecimento
    └── Colégio do Valor
        └── ... características do Colégio do Valor
```

As pastas são documentos gerenciados pelo módulo e recebem flags estáveis, portanto a reimportação reutiliza a mesma pasta em vez de depender apenas do texto do nome.

Características que estavam originalmente em CAIXA-ALTA são exibidas com capitalização natural, por exemplo `FÚRIA` → `Fúria`. Essa alteração não muda `featureKey`, identificadores internos, UUIDs nem o matching dos perfis de automação.

Para reorganizar conteúdo já importado com 0.9.0 ou anterior, instale 0.9.1 e **reimporte a classe/subclasse ou o pacote completo**. Os Items gerenciados existentes são atualizados e movidos para a pasta correta.

O comando `/grimorio-packs` também passa a exibir a quantidade de pastas gerenciadas do compêndio.

## Fase 12 — expansão e auditoria da automação

A Fase 12 generaliza o framework homologado da Fase 11 sem transformar texto em mecânica de forma indiscriminada.

Cobertura atual:

- **99 perfis mecânicos explícitos**;
- **86 perfis de classe** e **13 de subclasse**;
- **26/26 famílias de classe** representadas;
- **121 Activities**;
- **39 reservas/usos**;
- **11 Active Effects**;
- tiers: 12 `full`, 86 `partial`, 1 `description`.

Novidades centrais:

- matching de perfis de subclasse por bundle ID exato;
- recuperação parcial de usos por fórmula;
- recursos compartilhados adicionais, como Canalizar Divindade, Pontos de Feitiçaria, Foco, Pontos de Selo e Surto Arcano;
- expansão direcionada para 13 subclasses com perfis específicos;
- auditoria das 2.477 características de origem do catálogo 5.27, sem automatização cega;
- comando `/grimorio-auditoria-automacao`.

A auditoria atual do catálogo 5.27 identifica 99 características perfiladas, 294 candidatos de alta prioridade, 745 de prioridade média e 1.339 predominantemente textuais/contextuais. **Candidato não significa automação segura**: o perfil continua exigindo revisão explícita.

Auras dinâmicas e bônus condicionais globais continuam desativados.

### Comandos adicionais

```text
/grimorio-automacao
/grimorio-auditoria-automacao
```

### API da Fase 12

```js
game.modules.get("grimorio-importer").api.phase12Support()
game.modules.get("grimorio-importer").api.automationCoverage()
game.modules.get("grimorio-importer").api.automationCompendiumAudit()
```

Depois de atualizar o módulo, reimporte classes/subclasses para sincronizar Activities, usos e Effects novos nos Items já existentes.

## Fase 10

A Fase 10 preserva toda a cobertura mecânica e de pacotes da Fase 9 e consolida o fluxo **granular**: o site pode gerar um JSON individual para qualquer classe ou subclasse, além dos pacotes de classe completa e do catálogo. O módulo aceita todos esses formatos pelo mesmo comando `/grimorio-import`.

- **24 classes** e **377 subclasses/especializações** continuam habilitadas.
- `/grimorio-import` detecta automaticamente bundle ou pacote.
- `/grimorio-import-package` foi adicionado como alias explícito.
- Um pacote de classe completa pode conter a classe e todas as subclasses.
- O pacote de catálogo completo contém **401 bundles**.
- Classes são processadas antes das subclasses.
- Os três compêndios são mantidos em modo de escrita durante o lote e relockados ao final.
- Reimportações continuam atualizando documentos gerenciados sem duplicações.
- Nenhum Item é criado automaticamente no diretório do Mundo.

## Fase 8

A Fase 8 conclui a generalização iniciada na Fase 7 e habilita **todas as 24 classes e 377 subclasses/especializações** do Grimório. Os três compêndios portáveis continuam sendo usados e os cinco perfis especiais recebem configuração própria em vez de serem reduzidos ao modelo genérico.

- **24 classes** habilitadas.
- **377 subclasses/especializações** habilitadas.
- **5 classes especiais** com regras dedicadas: Cavaleiro Dracônico, Piloto de Frame, Dobrador, Domador e Ministro de Sangue.
- **30 subclasses** dessas classes especiais agora importáveis.
- Características em **Grimório — Características**.
- Classes em **Grimório — Classes**.
- Subclasses em **Grimório — Subclasses**.
- `ItemGrant` usa UUIDs dos compêndios.
- `ItemChoice` continua disponível para escolhas estruturadas.
- Importação de vários bundles JSON de uma vez.
- Reimportação atualiza documentos gerenciados sem gerar cópias e preserva UUIDs.
- Nenhum Item é criado automaticamente no diretório do Mundo.

## Classes especiais

### Cavaleiro Dracônico

O Item-base usa **d8 apenas como valor técnico neutro**. Quando um **Conceito Central** é adicionado ao Actor, o módulo lê o perfil da especialização e atualiza automaticamente:

- Dado de Vida;
- progressão de conjuração;
- Sabedoria como habilidade de conjuração quando aplicável.

As proficiências determinadas pelo Conceito Central são modeladas como `Trait Advancements` da própria subclasse. Existem perfis explícitos para os nove Conceitos Centrais de Zagalhta e os três conceitos de Blade, Bone, & Benefit.

**Atenção:** confira os PV do primeiro nível ao testar o fluxo real. Dependendo da ordem em que o Advancement Manager do DnD5e aplicar PV e seleção do Conceito Central, o primeiro nível pode ser processado antes de o d8 técnico ser substituído.

### Piloto de Frame

As salvaguardas são escolhas nativas:

- 1 entre Destreza, Constituição ou Sabedoria;
- 1 entre Força, Inteligência ou Carisma.

**Crescimento** permanece como característica própria. Não são criados ASIs genéricos, pois a fonte permite substituir determinados aumentos por proficiência em perícia/ferramenta ou talento em níveis específicos.

### Dobrador

Ao adicionar a classe ao Actor, o módulo solicita a habilidade de conjuração entre **Inteligência, Sabedoria e Carisma** e atualiza o Item embutido. A escolha pode ser refeita com `/grimorio-configurar`.

### Domador

Usa o mesmo mecanismo do Dobrador: escolha dinâmica entre **Inteligência, Sabedoria e Carisma**.

### Ministro de Sangue

A fonte utiliza **2d4 Dados de Vida por nível**. O DnD5e representa uma classe com uma única denominação de Dado de Vida; por isso:

- o Item de classe usa **d8 técnico**, que conserva máximo 8 no primeiro nível e média fixa 5 nos níveis posteriores;
- o hook `dnd5e.preRollClassHitPoints` substitui rolagens `1d8` por `2d4` para ganho de PV;
- o **pool de Dados de Vida gasto em descansos continua sendo uma limitação nativa** e deve ser rastreado como 2d4 por nível conforme a classe, não como um único d8.

## Instalação

Copie a pasta `grimorio-importer` para `Data/modules/`, ative o módulo no Mundo e mantenha os quatro compêndios declarados em `module.json` (Classes, Subclasses, Características e Talentos).

## Comandos

- `/grimorio-import` — seleciona um ou vários JSONs; aceita bundle individual ou pacote.
- `/grimorio-import-batch` — alias explícito para seleção múltipla.
- `/grimorio-import-package` — alias explícito para pacotes JSON.
- `/grimorio-status`
- `/grimorio-packs`
- `/grimorio-automacao` — mostra a cobertura atual da automação mecânica da Fase 12.
- `/grimorio-auditoria-automacao` — audita as características gerenciadas atualmente no compêndio.
- `/grimorio-world-preview`
- `/grimorio-special` — mostra o estado das classes especiais do Actor selecionado.
- `/grimorio-configurar` — reexecuta configurações especiais do Actor selecionado.
- `/grimorio-help`

Para `/grimorio-special` e `/grimorio-configurar`, o módulo usa um único token controlado; se não houver token controlado, usa o personagem atribuído ao usuário.

## API

```js
game.modules.get("grimorio-importer").api
```

A Fase 12 expõe `phase12Support`, `automationCoverage` e `automationCompendiumAudit`. `phase11Support` permanece como camada de compatibilidade, assim como `phase10Support`, `importPackage`, `importPayload`, `importPayloads`, `validatePackage`, `phase9PackageSupport` e as APIs especiais da Fase 8.

## Observações de fidelidade

Algumas proficiências homebrew não possuem uma categoria equivalente segura no DnD5e. Nesses casos, o módulo preserva a regra na descrição e gera aviso de revisão manual em vez de conceder uma categoria mais ampla. Isso se aplica, por exemplo, a armas de fogo, categorias como “armas à distância”, armas Leves/de Acuidade e à perícia homebrew Montaria.
