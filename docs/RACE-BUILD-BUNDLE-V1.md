# Race Build Bundle v1 — RB-1 / RB-2 / RB-3 / RB-4

**Projeto:** Grimório D&D 5e  
**Linha:** 5.63.x  
**Alvo futuro:** Grimório Importer 0.13.x+  
**Foundry homologado do projeto:** Foundry VTT 13.351 + DnD5e 5.3.3

## Objetivo

O Race Build Bundle representa uma **construção racial resolvida pelo Grimório**, e não uma raça-base genérica. A identidade do build incorpora a raça dominante, a subraça escolhida e todas as decisões persistidas pelo Race Builder v2.

O contrato foi criado para permitir que, em fases posteriores, o `grimorio-importer` transforme essa construção em um Item `race` nativo e em características raciais reutilizáveis sem precisar interpretar textos da interface ou reconstruir escolhas do jogador.

Na RB-5, **nenhum documento racial Foundry é criado**. RB-3 resolve a elegibilidade estrutural, RB-4 introduziu a prévia/download e o `grimorio-importer` 0.13.x agora reconhece, valida e calcula o preflight do mesmo Bundle v1. A escrita começa na RB-6.

## Escopo RB-1

RB-1 congela o contrato de transporte:

- schema `grimorio-foundry-race-build-bundle` versão `1`;
- profile `foundry13-dnd5e533-grimorio-race-build-v1`;
- identidade determinística do build;
- `selectionHash` baseado somente nas escolhas canônicas do jogador;
- `contentHash` baseado no conteúdo racial resolvido pelo Grimório;
- proveniência de raça, subraça e raça secundária;
- buckets descritivos de características (`core`, `subrace`, `legacy`, `mixed`, `heritage`);
- readiness do resolver;
- `foundryPlan.status = "preflight-only"` em bundles gerados na RB-5. Bundles RB-4 com `awaiting-importer` continuam válidos para compatibilidade.

O bundle é **declarativo**. O site não pode transportar `system`, `effects`, `flags`, `changes`, macros, hooks ou outros caminhos arbitrários de documento Foundry.

## Escopo RB-2

RB-2 introduz o estado persistido `grimorio-race-builder-state` versão `2` e o resolvedor normativo `GRIMORIO_RACE_BUILD_RESOLVER`.

O resolvedor é a única fonte de verdade para o estado modelado nesta fase. A UI, os validadores e o Bundle devem consumir a mesma resolução.

### Estado v2

```json
{
  "schema": "grimorio-race-builder-state",
  "schemaVersion": 2,
  "subraceId": null,
  "mixed": false,
  "secondaryRaceId": null,
  "legacy": [],
  "heritage": {
    "positive": [],
    "detrimental": [],
    "lineage": []
  },
  "bloodlineChoices": {},
  "abilityMode": "source",
  "abilityChoices": {},
  "traitChoices": {},
  "specialChoices": {},
  "extraLegacy": [],
  "optionalPools": {
    "exolunar": false,
    "paraprismatic": false
  }
}
```

### Migração v1 → v2

O armazenamento anterior `grimorio-race-builder-v1` continua sendo lido apenas para migração. Na primeira leitura sem estado v2, são preservados:

- `subraceId`;
- `mixed`;
- `secondaryRaceId`;
- `legacy`.

Os novos buckets são inicializados de forma vazia e o resultado é persistido em `grimorio-race-builder-v2`. O estado v1 não é removido automaticamente.

## Escopo RB-3

RB-3 adiciona `data/race-build-eligibility-rules.js` e transforma o resolvedor em motor de elegibilidade estrutural. Ele resolve a regra geral de Sangue Misto (listas normais de dominante + secundária; Traços de Sangue Misto apenas da secundária) e exceções auditadas de raça/subraça.

Entre as regras modeladas estão: Bloodline e suas alternativas; Hanyou dominante e secundário; Sangue Versátil quando Humano é a raça secundária; bônus de Legado das raças planares; ASI e tamanho variáveis; Persona Anterior e Corpo Remendado dos Vanquis; Legado Amaldiçoado/Magia Elemental acoplados; Bênção da Terra do Firbolg; e os dois resultados iniciais de Mutações do Mutaliate. Ambiguidades de fonte, como o atributo não especificado do Merfolk Shoreline, permanecem bloqueadas.

`canExport` passa a significar **todas as escolhas estruturais conhecidas estão resolvidas**. Durante RB-3, `exportEnabled` permanecia `false`; RB-4 agora o habilita somente quando esse mesmo `canExport` é verdadeiro.

## Semântica do resolver

A resolução usa `grimorio-race-build-resolution` versão `1`.

Estados possíveis:

- `blocked`: estrutura inválida (ID inexistente, excesso de escolhas ou violação estrutural já modelada);
- `incomplete`: faltam decisões estruturais exigidas pelo motor;
- `review`: a estrutura racial está resolvida, mas há escolha legitimamente dependente do Actor/Advancement ou revisão posterior;
- `ready`: todas as escolhas estruturais conhecidas estão completas.

**Importante:** `ready`/`canExport=true` significa que o build pode ser serializado pela RB-4. Em RB-4, `capabilities.exportEnabled` e `readiness.exportEnabled` acompanham `canExport`. Na RB-5 isso significa que o JSON pode ser aceito para **validação e preflight**, não para escrita.

## Regras modeladas já em RB-2

- subraça deixa de assumir silenciosamente a primeira opção: quando uma raça possui subraças, a escolha passa a ser explícita;
- quantidade base de Traços de Legado;
- bônus de Traço de Legado da raça dominante;
- o slot adicional de Bouyan, Horma, Silvistar e Tinderbine só pode ser preenchido por Traço de Legado normal da raça dominante;
- pools universais Exolunar e Paraprismático podem ser preservados no estado sem serem ativados implicitamente;
- Hanyou dominante passa a persistir escolhas positivas e prejudiciais;
- overrides de Herança por subraça são respeitados, inclusive Emberash (2 positivos + 1 prejudicial);
- características de Linhagem Hanyou permanecem estruturais/fixas para a subraça dominante;
- Sangue Misto preserva raça secundária e escolhas existentes, sem inventar elegibilidade especial ainda não auditada.

## Escopo RB-4

RB-4 mantém o schema `grimorio-foundry-race-build-bundle@1` estável e adiciona a camada de transporte visível do site:

- `js/exporters/foundry-race-export-ui.js`;
- botão **Exportar para Foundry** no resumo do Race Builder;
- botão desabilitado enquanto `canExport=false`;
- prévia do build com raça, subraça, Sangue Misto, hashes e buckets de características;
- apresentação separada de bloqueios, avisos editoriais, pendências e escolhas dependentes do Actor;
- inspeção do JSON antes do download;
- cópia para a área de transferência;
- download de arquivo `.json` com nome determinístico e `selectionHash`;
- validação final por `inspectBundle()` antes da exportação.

O arquivo gerado continua sendo **um contrato declarativo**, não um Item `race` serializado. Nenhum `system.*`, Active Effect, flag de documento, macro ou hook pode ser enviado pelo site.

Na RB-5, novos bundles usam `foundryPlan.status = preflight-only`; `awaiting-importer` permanece aceito para bundles exportados pela RB-4.

## Pendências após RB-4

RB-4 conclui o transporte no lado do site. Permanecem para as próximas fases:

- RB-5: validator/preflight no Grimório Importer 0.13.x;
- RB-6+: materialização nativa e depois aplicação ao Actor;
- classificação Foundry de cada característica em native / assisted / runtime / description / blocked;
- escolhas que dependem legitimamente do Actor, resolvidas por Advancement;
- qualquer ambiguidade de fonte não solucionada explicitamente pelo material original.

## Identidade e hashes

`selectionHash` é calculado sobre uma representação canônica das escolhas. Arrays de escolhas são ordenados antes do hash para que a ordem de clique não altere a identidade do build.

`contentHash` é calculado sobre o conteúdo racial efetivamente resolvido. Assim, o mesmo conjunto de escolhas preserva o mesmo `grimorioId`, enquanto uma alteração editorial/mecânica futura pode ser detectada pelo `contentHash`.

Formato de identidade:

```text
race-build:<primaryRaceId>:<subraceId|base>:<selectionHash>
```

## Segurança do transporte

O bundle não é um documento Foundry serializado. Chaves estruturais como as seguintes são proibidas no transporte:

```text
system, effects, flags, changes, documentData,
script, macro, hook, hooks, eval
```

Escolhas estruturadas também são sanitizadas para impedir que dados persistidos/localStorage tentem introduzir essas chaves no contrato.

## Não objetivos desta fase

RB-1/RB-2/RB-3/RB-4 **não** inclui:

- materialização racial no Grimório Importer durante a RB-5;
- compêndio de Raças no módulo;
- compêndio de Características Raciais;
- materialização de Item `race`;
- Item Grant Advancements;
- aplicação ao Actor;
- aplicação automática ao Actor durante a RB-5.

Esses itens pertencem às fases RB-4 a RB-8.
