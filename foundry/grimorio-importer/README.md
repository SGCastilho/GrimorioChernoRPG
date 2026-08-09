# Grimório Importer — v0.9.1

Módulo complementar do **Grimório D&D 5e PT-BR** para **Foundry VTT 13.351 + DnD5e 5.3.3**.

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

- **71 perfis mecânicos explícitos**;
- **59 perfis de classe** e **12 de subclasse**;
- **24/24 famílias de classe** representadas;
- **86 Activities**;
- **37 reservas/usos**;
- **11 Active Effects**;
- tiers: 12 `full`, 58 `partial`, 1 `description`.

Novidades centrais:

- matching de perfis de subclasse por bundle ID exato;
- recuperação parcial de usos por fórmula;
- recursos compartilhados adicionais, como Canalizar Divindade, Pontos de Feitiçaria, Foco, Pontos de Selo e Surto Arcano;
- primeira expansão direcionada para 12 subclasses;
- auditoria das 2.370 características de origem, sem automatização cega;
- comando `/grimorio-auditoria-automacao`.

A auditoria atual identifica 71 características perfiladas, 289 candidatos de alta prioridade, 718 de prioridade média e 1.292 predominantemente textuais/contextuais. **Candidato não significa automação segura**: o perfil continua exigindo revisão explícita.

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

Copie a pasta `grimorio-importer` para `Data/modules/`, ative o módulo no Mundo e mantenha os três compêndios declarados em `module.json`.

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
