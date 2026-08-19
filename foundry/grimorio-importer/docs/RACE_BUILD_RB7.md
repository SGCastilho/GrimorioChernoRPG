# Race Build RB-7 — Automação Racial e Casos Especiais

**Importer:** `0.13.0-alpha.3`  
**Grimório:** `5.66.0`  
**Foundry homologado:** `13.351`  
**DnD5e homologado:** `5.3.3`

A RB-7 mantém o contrato `grimorio-foundry-race-build-bundle@1` e a materialização introduzida na RB-6, mas adiciona uma camada separada de **compilação de automação racial conservadora**. O Race Build continua sendo declarativo; o módulo decide quais partes podem ser representadas com segurança no DnD5e e quais devem permanecer assistidas, runtime-descriptor ou puramente descritivas.

## Contrato de automação

- Schema: `grimorio-foundry-race-automation-plan`
- Schema version: `1`
- Compiler version: `1`
- Phase: `RB-7`
- Política: `native-safe-first+native-choice+assisted+runtime-descriptor+description`

O plano de automação é **derivado no Importer** a partir das características resolvidas do Race Build. Ele não é aceito como estrutura arbitrária vinda do site.

## Tiers

| Tier | Significado |
| --- | --- |
| `native` | O sistema consegue representar a mecânica sem escolher por conta do jogador nem alterar seu significado. |
| `native-choice` | A mecânica pode ser uma escolha nativa de Advancement com pool explícito. |
| `assisted` | A decisão depende do estado atual do Actor ou de uma opção que o bundle não resolveu. |
| `runtime` | A regra depende de gatilho, posição, evento, transformação ou outro contexto comportamental. RB-7 registra o requisito, mas não injeta hooks globais. |
| `description` | A característica é preservada integralmente como Item, sem automação mecânica segura disponível. |

A classificação é conservadora. Um Item pode possuir uma pequena parte nativa e ainda ser classificado como `runtime` ou `assisted` se o restante da regra exigir contexto adicional.

## Active Effects considerados seguros

A RB-7 materializa Active Effects transferíveis somente quando a prosa descreve um benefício **estático e inequívoco**:

- resistência a dano → `system.traits.dr.value`;
- imunidade a dano → `system.traits.di.value`;
- vulnerabilidade a dano → `system.traits.dv.value`;
- imunidade a condição → `system.traits.ci.value`;
- Especialização fixa em uma perícia → Upgrade de `system.skills.<abbr>.value` para `2`.

Frases que envolvem escolha, estado temporário, transformação, condição, "enquanto", "quando", "durante", substituição ou alternativas não são achatadas em Active Effects permanentes.

### Barreiras específicas

- Uma característica que diz **"frio ou trovão, escolha"** não recebe ambas as resistências.
- **Forma Sazonal** não converte opções de estação em efeitos permanentes.
- Resistências condicionais de transformações permanecem no texto/runtime.
- Exceções como "a menos que" impedem uma imunidade estática simplificada.

## Trait Advancements

Quando a fonte fornece um pool explícito ou uma proficiência estática, a RB-7 pode construir `Trait` Advancements para:

- perícias fixas;
- escolha entre perícias explicitamente listadas;
- escolha de armas;
- escolha de ferramentas;
- escolha de idioma quando há pool seguro;
- proficiências fixas em categorias de armadura/arma.

Escolhas que dependem do que o Actor **já possui** continuam `assisted`. Exemplo: Treinamento de Combate do Humano consegue representar a escolha inicial de três armas, mas a progressão "primeira opção em que ainda não seja proficiente" depende da ficha e não é presumida pela RB-7.

## Movimento e sentidos

A Race continua armazenando projeções nativas no próprio Item `race`. A RB-7 amplia a projeção para características selecionadas quando elas são estáticas e inequívocas.

### Movimento

Podem ser projetados:

- deslocamento estático em metros;
- escalada/natação/escavação iguais ao deslocamento base;
- aumento estático do deslocamento base quando a regra não é temporária.

Não são projetados como permanentes:

- deslocamentos concedidos apenas durante Dash, Rage, transformação ou outro estado;
- teleporte;
- movimento com duração limitada;
- **Belabored Flight / voo laborioso**, pois é uma mecânica distinta de um `fly` nativo comum.

### Sentidos

São projetados apenas valores estáticos de:

- darkvision;
- blindsight;
- tremorsense;
- truesight.

Melhorias condicionais, distâncias baseadas em PB e regras do tipo "se já possuir" permanecem descritivas/runtime até existir representação fiel.

## Uses e Activities

A RB-7 reconhece somente contadores simples:

- PB por Long Rest → `@prof`;
- PB por Short/Long Rest → `@prof`;
- 1 por Long Rest;
- 1 por Short/Long Rest;
- metade do PB por Long Rest → `floor(@prof / 2)`.

Quando a característica declara explicitamente **como uma ação**, **como uma ação bônus** ou **como uma reação**, o Item pode receber uma Activity `utility` para ativação/chat e, quando aplicável, consumir `itemUses`.

A Activity não inventa CD, alvo, dano, teleporte, movimento ou condições que não tenham uma representação nativa segura. Esses efeitos continuam regidos pelo texto da característica.

## Assisted

O plano preserva escolhas que precisam da ficha para serem resolvidas. Exemplos:

- escolher proficiência baseada no que o Actor ainda não possui;
- Perícia Enraizada do Humano;
- opções transportadas pelo Race Build em `pendingFoundryChoices`;
- resistência escolhível sem decisão já resolvida no bundle.

A RB-7 não acessa nem modifica o Actor para concluir essas decisões. A aplicação direta ao personagem permanece responsabilidade da RB-8.

## Runtime descriptors

Mecânicas contextuais são registradas como metadados auditáveis, sem registrar `Hooks.on`/`Hooks.once` globais. Os descritores atuais incluem:

- `conditional-rule`;
- `proficiency-scaling`;
- `critical-trigger`;
- `teleport`;
- `transformation`.

Esses descritores servem para a futura camada de aplicação/runtime, mas **não executam código no Actor durante RB-7**.

## Materialização

A sequência RB-6 continua válida:

1. validar Race Build;
2. compilar plano RB-7;
3. criar/atualizar Características Raciais em `grimorio-racial-features`;
4. aplicar somente automações seguras ao Item de característica;
5. resolver os UUIDs das características;
6. criar/atualizar o Race Item em `grimorio-races`;
7. combinar Size/ASI/idiomas/ItemGrant da RB-6 com Trait Advancements e projeções de movimento/sentidos da RB-7;
8. restaurar os locks dos packs.

O módulo continua criando **zero World Items gerenciados** e não chama `actor.update`, `createEmbeddedDocuments` ou `updateEmbeddedDocuments` no pipeline racial.

## Auditoria do catálogo

`tools/audit-race-automation-rb7.mjs` percorre as 46 raças, 382 subraças e os **1.743 registros mecânicos raciais** carregados pelo Grimório.

Baseline RB-7:

| Métrica | Total |
| --- | ---: |
| `native` | 398 |
| `native-choice` | 19 |
| `assisted` | 3 |
| `runtime` | 751 |
| `description` | 572 |
| Active Effects planejados | 150 |
| Trait Advancements planejados | 72 |
| Projeções de movimento | 54 |
| Projeções de sentidos | 61 |
| Uses simples | 223 |
| Activities utilitárias | 195 |
| Assisted records | 8 |
| Runtime descriptors | 965 |

Essas contagens são **candidatos compilados**, não uma declaração de que toda a mecânica de cada uma dessas características está completamente automatizada. O tier final sempre reflete a parte mais contextual que ainda precisa ser preservada.

O gate também procura especificamente escolhas de resistência que tenham sido erroneamente materializadas como múltiplos efeitos estáticos.

## Fora de escopo da RB-7

- aplicar a Race diretamente a um Actor;
- substituir uma Race existente no Actor;
- concluir escolhas dependentes das proficiências atuais do Actor;
- registrar hooks globais para características raciais;
- executar teleporte/transformações automaticamente;
- automatizar spells raciais por UUID sem contrato estável de spell compendium;
- aproximar mecânicas 5.19 sem representação fiel no sistema;
- transformar Belabored Flight em voo padrão.

Esses limites são deliberados. A próxima fase, **RB-8**, pode consumir os metadados `assisted`/`runtime` quando existir uma estratégia explícita de aplicação ao Actor e confirmação de substituição racial.
