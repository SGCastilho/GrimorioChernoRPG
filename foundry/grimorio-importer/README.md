# RB-8 · Aplicação ao Actor e Homologação (0.13.0-beta.1)

A RB-8 fecha o fluxo racial: um Race Build validado/materializado pode ser aplicado a um Actor `character` através do `AdvancementManager` nativo do DnD5e. A substituição de uma raça existente exige confirmação explícita; múltiplos Race Items, Advancements desabilitados ou runtime fora de Foundry 13.351 / DnD5e 5.3.3 bloqueiam a operação.

A linha permanece **Beta**: os testes automatizados cobrem contratos, ordem de substituição, cancelamento e idempotência, mas a promoção para RC/Stable depende do checklist de homologação real em `docs/RACE_BUILD_RB8.md`.

---

# RB-7 · Automação Racial e Casos Especiais (0.13.0-alpha.3)

A linha **0.13.x** mantém a materialização do `Race Build Bundle v1` e adiciona um compiler conservador de automação racial. Cada característica é classificada como `native`, `native-choice`, `assisted`, `runtime` ou `description`; somente mecânicas estáticas/inequívocas são convertidas em estruturas nativas do DnD5e 5.3.3.

A RB-7 pode materializar Active Effects seguros, Trait Advancements, projeções estáticas de movimento/sentidos, Uses simples e Activities utilitárias. Regras contextuais recebem metadados `assisted`/`runtime` em vez de hooks aproximados. **Não há aplicação direta ao Actor nem hooks globais nesta fase.**

A reimportação continua idempotente por `grimorioId`/`feature.key`, preserva UUIDs, restaura locks e cria zero Items gerenciados no Mundo.

Consulte `docs/RACE_BUILD_RB7.md` para os tiers, limites e auditoria; `docs/RACE_BUILD_RB6.md` documenta a materialização-base.

# Grimório Importer — v0.12.0

Módulo complementar do **Grimório D&D 5e PT-BR** para **Foundry VTT 13.351 + DnD5e 5.3.3**.

## 0.12.0 Stable — automação de Talentos 42/42

A `0.12.0` é a versão estável que consolida as fases **FA-1–FA-5**. O comportamento mecânico homologado na `0.12.0-alpha.3` e auditado na `0.12.0-alpha.4` foi congelado para release: nenhum materializador, runtime ou regra de identidade foi promovido ou aproximado durante a estabilização.

### Estado consolidado

| Métrica | Resultado |
| --- | ---: |
| Talentos PHB 2014 auditados | **42/42** |
| Advancements nativos | **26** |
| Escolhas assistidas | **3** |
| Activities | **22** |
| Active Effects | **10** |
| Uses | **2** |
| Runtime records | **56/56** |
| Talentos ausentes/divergentes no baseline | **0** |

A cobertura permanece deliberadamente conservadora: regras que dependem de cobertura, iluminação, posição, origem exata de uma rolagem ou decisão pós-rolagem continuam assistidas quando o DnD5e 5.3.3 não fornece contexto suficiente para uma automação fiel.

**Grimório 5.44.0 — Lyre.** O site passa a exportar também um pacote v2 com os 28 talentos de *Lyre's Guide to Retia — Land of Industry* (p. 331–335). Eles entram com perfis explícitos `description`: o módulo 0.12.0 aceita, valida e materializa o conteúdo no compêndio de Talentos sem inferir automações para subsistemas próprios da 5.19. O fixture de regressão é `examples/feats/lyre-retia-feats-package-v2.json`, validado por `tests/validate-feats-lyre-544.mjs`.

**Grimório 5.43.0 — Ryoko.** O site passa a exportar também um pacote v2 com 39 talentos de *Ryoko's Guide to the Yokai Realms*. Esses talentos entram com perfis explícitos `description`: o módulo 0.12.0 aceita, valida e materializa o conteúdo no compêndio de Talentos, mas não inventa automação para Ataques de Combo, Maestria Avançada de Armas, próteses, familiares ou traços raciais. Um fixture de regressão está disponível em `examples/feats/ryoko-yokai-realms-feats-package-v2.json`. A validação dedicada é `tests/validate-feats-ryoko-543.mjs`.

### Contratos preservados

- Feat Bundle/Package v1 continuam aceitos em modo legado.
- Feat Bundle/Package v2 do Grimório 5.42.0 materializam Advancements, Activities, Effects, Uses, escolhas e runtime seguro.
- Reimportação usa `grimorioId` e preserva documentos/UUIDs em vez de duplicar conteúdo.
- Classes, Subclasses, Características e Talentos permanecem preservados; a RB-5 adiciona dois compêndios raciais, totalizando seis compêndios gerenciados.
- Nenhum Item gerenciado é criado automaticamente no Mundo.
- A Central continua GM-only, com preflight `NOVO/ATUALIZAR`, confirmação explícita e relatório visual.
- Os 12 comandos `/grimorio-*` continuam roteados para a Central.

### Gate da versão estável

A aba **Status** exibe **Integridade da versão 0.12.0 Stable** com 11 verificações: ambiente homologado, quatro compêndios, sete áreas da Central, preflight sem escrita, identidade estável, confirmação explícita, política de zero World Items, comandos Central-first, auditoria 42/42, canal stable/feature freeze e conteúdo legado no Mundo.

Itens legados continuam sendo observação não bloqueante; os demais contratos são bloqueantes.

### APIs principais 0.12

```js
game.modules.get("grimorio-importer").api.featAutomationSupport()
game.modules.get("grimorio-importer").api.featChoiceSupport()
game.modules.get("grimorio-importer").api.featRuntimeSupport()
game.modules.get("grimorio-importer").api.featAuditSupport()
game.modules.get("grimorio-importer").api.featCompendiumAudit()
game.modules.get("grimorio-importer").api.releaseReadiness()
```

`readyForStable` é o indicador atual do gate; `readyForFinal` e `readyForRc` permanecem como aliases de compatibilidade.

### Testes

```bash
npm test
npm run test:stable
npm run test:release
```

Consulte também:

- `RELEASE_NOTES_0.12.0.md` — resumo da release estável;
- `STABLE_RELEASE_CHECKLIST.md` — checklist de instalação/homologação;
- `FA5_AUTOMATION_AUDIT.md` — matriz 42/42;
- `FA5_TEST_CHECKLIST.md` — spot checks de automação.

## Histórico 0.12 — Talentos Foundry

- **FA-2 / 0.12.0-alpha.1:** consumo do Feat Bundle v2 e primeira materialização nativa segura — 16 planos de Advancement, 7 Effects, 22 Activities e 2 Uses.
- **FA-3 / 0.12.0-alpha.2:** resolução dos 12 planos de Advancement restantes — 28/28 planos, 26 documentos nativos e 3 escolhas vinculadas assistidas.
- **FA-4 / 0.12.0-alpha.3:** cobertura runtime 56/56, 10/10 Effects materializados e hooks seguros para condições que o DnD5e expõe de forma confiável.
- **FA-5 / 0.12.0-alpha.4:** auditoria mecânica 42/42 sobre os documentos materializados, gate de 11 verificações e preparação para RC sem alterar a mecânica FA-4.

Os detalhes históricos permanecem no `CHANGELOG.md` e nas checklists `FA2_TEST_CHECKLIST.md`, `FA3_TEST_CHECKLIST.md`, `FA4_TEST_CHECKLIST.md` e `FA5_TEST_CHECKLIST.md`.

## Histórico 0.11 — Central visual e Release Candidate



## Release Candidate RC.1 — Feature freeze e validação final

A `0.11.0-rc.1` congela o conjunto funcional desenvolvido nas fases **0.11-A–G**. A partir desta build, mudanças antes da `0.11.0` final devem se limitar a correções de regressão, compatibilidade, acessibilidade, documentação e empacotamento; novos fluxos funcionais ficam fora do escopo da RC.

- Versão sincronizada em `module.json`, `package.json` e `scripts/version.js`: **0.11.0-rc.1**.
- `IMPORTER_BUILD` centraliza canal `release-candidate`, rótulo `RC.1`, alvo `0.11.0` e `featureFreeze: true`.
- A aba **Status** passa a mostrar **Prontidão para 0.11.0 final** com 10 verificações, incluindo um novo gate bloqueante de feature freeze/Canal RC.
- O campo legado `readyForRc` permanece como alias compatível; a RC acrescenta `readyForFinal`.
- Nenhum schema, materializador, perfil de automação, compêndio, contrato de identidade ou regra de reimportação foi alterado.
- `npm test` executa toda a regressão histórica e a validação RC.
- `npm run test:rc` e `npm run test:release` executam `tests/validate-rc-011.mjs`, que valida versão, manifestos, feature freeze, gate final, Central, comandos e ausência de referências alpha ativas no runtime.

### Critério para promover a RC para 0.11.0

A RC só deve virar `0.11.0` quando: `npm test` permanecer verde, `npm run test:release` passar, a aba **Status** não apresentar bloqueios no Foundry VTT **13.351 / DnD5e 5.3.3**, e os fluxos visuais de Importar/Status/Compêndios/Automação/Auditoria/Actor Especial/Ajuda forem validados no ambiente real.

```bash
npm test
npm run test:release
```

## Build 0.11-G — Consolidação e prontidão para RC

A 0.11-G não introduz um novo tipo de conteúdo nem um novo materializador. Ela consolida as fases A–F e adiciona um gate observável para decidir quando a Central está tecnicamente pronta para virar Release Candidate.

- A aba **Status** possui agora **Prontidão para RC**, com 9 verificações independentes.
- Bloqueiam a RC: ambiente fora de Foundry 13.351 / DnD5e 5.3.3, compêndio gerenciado ausente, quebra da paridade das sete áreas, preflight que permita escrita, identidade instável, ausência de confirmação explícita, política diferente de 0 Items no Mundo ou comandos que deixem de passar pela Central.
- Items legados do protótipo da Fase 5 aparecem como **observação não bloqueante**, pois sua remoção continua manual.
- APIs novas: `releaseReadinessSupport()`, `releaseReadiness()` e o resultado `releaseReadiness` retornado por `status()`.
- A navegação lateral aceita `↑`, `↓`, `Home` e `End`; estados críticos usam `aria-live`/`role=alert`, e a confirmação é identificada como `alertdialog`.
- A folha de estilos respeita `prefers-reduced-motion` e reforça foco visível para navegação por teclado.
- `npm test` executa a suíte agregada: Talentos, Lutador de Rua/Dragão de Dojima e 0.11-A/B/C/D/E/F/G.
- `npm run test:release` executa apenas o gate/regressão 0.11-G.
- Nenhum materializador, schema ou regra de reimportação foi alterado nesta fase.

### Teste consolidado

```bash
npm test
```

A build só deve avançar para RC depois de a suíte permanecer verde e o gate visual da aba Status não apresentar bloqueios no Foundry real homologado.

## Build 0.11-F — Comandos como atalhos da Central

A Central passa a ser o caminho principal também quando um comando de chat é utilizado. Os **12 comandos/aliases existentes continuam reconhecidos**, mas o hook de chat não executa mais importações ou painéis administrativos diretamente: ele roteia o comando para a seção visual equivalente.

- `/grimorio-import`, `/grimorio-import-batch`, `/grimorio-import-package` e `/grimorio-import-feats` abrem **Importar** e acionam o seletor visual de JSONs. A seleção entra na sessão 0.11-B/C/D, portanto continua exigindo validação, diff `NOVO/ATUALIZAR` e confirmação explícita antes de qualquer escrita.
- `/grimorio-status` abre **Status**; `/grimorio-packs`, **Compêndios**; `/grimorio-automacao`, **Automação**; `/grimorio-auditoria-automacao`, **Auditoria**; `/grimorio-special`, **Actor Especial**; e `/grimorio-help`, **Ajuda**.
- `/grimorio-world-preview` abre **Status**, onde o conteúdo legado da Fase 5 já é apresentado.
- `/grimorio-configurar` abre **Actor Especial** e executa a mesma configuração assistida exposta pelo botão visual da seção.
- Adicionado `scripts/ui/command-router.js` com resolução centralizada, normalização e mapa dos 12 comandos.
- Nova API `commandRoutingSupport()` documenta o contrato Central-first da 0.11-F.
- `openImporter()` aceita `promptFiles`, `action` e `source`; a Central também expõe internamente `promptImportFiles()` para o seletor disparado pelos aliases de importação.
- A API legada `openBundleFilePicker()` foi preservada para macros/integrações externas que dependam do comportamento direto anterior, porém **nenhum comando de chat a utiliza mais**.
- Nenhum materializador, schema, compêndio ou regra de reimportação foi alterado nesta fase.

## Build 0.11-E — Paridade administrativa da Central

A Central deixa de concentrar apenas a importação e passa a expor visualmente as funções administrativas que já existiam por comandos de chat, reutilizando as mesmas APIs internas do módulo.

- **Status** mostra Foundry/DnD5e ativos e alvos homologados, disponibilidade dos seis compêndios e Items legados do protótipo da Fase 5.
- **Compêndios** mostra documentos totais/gerenciados, pastas e estado de bloqueio de Classes, Subclasses, Características e Talentos.
- **Automação** apresenta os mesmos dados de `automationCoverage()`: perfis, Activities, recursos, Active Effects, tiers e cobertura por classe.
- **Auditoria** executa `automationCompendiumAudit()` e exibe perfiladas, candidatos altos/médios, textuais, sem auditoria e detalhamento por bundle.
- **Actor Especial** usa a mesma seleção de Actor dos comandos: um Token controlado tem prioridade; sem Token, usa o personagem atribuído ao Mestre. A configuração chama `configureActorSpecialClasses()` sem duplicar o runtime especial.
- **Ajuda** documenta a equivalência entre as áreas visuais e todos os comandos `/grimorio-*`, que continuam preservados.
- Painéis administrativos são carregados sob demanda e podem ser atualizados pela própria Central.
- Adicionadas `actor-selection.js` e `central-support.js`; a API pública passa a expor `centralParitySupport()`.
- A importação 0.11-D permanece inalterada: preflight, confirmação explícita, materializadores existentes e relatório visual.

### Teste da paridade visual

```bash
node tests/validate-ui-011e.mjs
```

O teste cobre seleção compartilhada de Actor, contrato de paridade, presença das seis áreas administrativas, chamadas às APIs existentes e preservação dos comandos.


## Build 0.11-D — Execução confirmada e relatório visual

A Central fecha agora o ciclo de importação visual: depois do preflight 0.11-C, o Mestre pode confirmar explicitamente a escrita e acompanhar o resultado real retornado pelos materializadores existentes.

- O botão **Importar conteúdo** só é habilitado quando todos os arquivos da sessão são válidos e o diagnóstico dos compêndios está disponível.
- Antes da confirmação, a Central refaz o snapshot dos compêndios para reduzir o risco de executar sobre um diagnóstico desatualizado.
- A confirmação é exibida dentro da própria Application e informa arquivos, documentos planejados, NOVOS e ATUALIZAÇÕES.
- A execução reutiliza `importPayload()` e, portanto, os mesmos validadores/materializadores já utilizados pelos comandos de chat.
- Notificações individuais são silenciadas durante o fluxo visual; a Central apresenta um relatório único e uma notificação-resumo ao final.
- O relatório separa documentos **criados** e **atualizados**, pastas criadas/atualizadas, avisos, falhas por arquivo e falhas internas de pacotes.
- A previsão 0.11-C é exibida ao lado das estatísticas reais retornadas pelos materializadores.
- Após a execução, o diagnóstico é recalculado automaticamente; conteúdo recém-criado passa a aparecer como `ATUALIZAR` sem selecionar novamente os arquivos.
- O estado original de bloqueio dos compêndios continua sendo restaurado por `withWritablePacks()`, inclusive em caso de erro.
- A Central continua GM-only e a expectativa permanece **0 Items criados no Mundo**: Classes, Subclasses, Características e Talentos são sincronizados nos compêndios gerenciados.
- Nova API de suporte: `importExecutionSupport()`.
- Os comandos `/grimorio-import*` permanecem funcionais e compatíveis.

### Teste da execução visual

```bash
node tests/validate-ui-011d.mjs
```

O teste cobre confirmação como requisito de contrato, agregação de resultados reais, pacotes parcialmente bem-sucedidos, falha isolada de arquivo, avisos, contagem de pastas, comparação previsão/execução e garantia de `worldItemsCreated: 0`.


## Build 0.11-C — Diff real de criação/atualização, ainda somente leitura

A Central agora compara cada payload válido com os seis compêndios reais do módulo antes da importação. O objetivo desta build é responder com segurança **o que será criado e o que será atualizado**, sem modificar nenhum documento.

- Consulta **Grimório — Classes**, **Grimório — Subclasses**, **Grimório — Características** e **Grimório — Talentos**.
- Matching idêntico ao fluxo de reimportação: `documentRole + grimorioId`; Características acrescentam `featureKey`. Nomes não são usados como identidade.
- Classes/Subclasses usam o mesmo `plannedFeatureStorage()` do materializador, evitando contar ASIs/placeholders sintéticos que não geram Items próprios.
- Cada card mostra o resumo `NOVO` / `ATUALIZAR` e permite abrir **Ver diagnóstico por documento**.
- O diagnóstico lista nome, tipo, nível/função quando aplicável e o compêndio alvo. Para atualizações, a preview também conserva o UUID/ID existente internamente para auditoria.
- Catálogos como os 42 Talentos podem ser vistos integralmente. Para pacotes muito grandes, o resumo considera todos os documentos, enquanto a lista visual mostra até 80 linhas para não degradar a Application.
- O botão **Atualizar diagnóstico** refaz a consulta sem reler os arquivos, útil quando os compêndios mudam enquanto a Central permanece aberta.
- Compêndio ausente é apresentado como diagnóstico indisponível e não provoca nenhuma criação automática.
- APIs novas: `inspectPayloadCompendiums(payload)`, `plannedPayloadDocuments(payload)` e `compendiumPreflightSupport()`.
- `preflightSupport()` agora reporta a etapa 0.11-C e preserva `basePhase: 0.11-B`.
- **`writeOperations` continua `false`.** A confirmação e execução visual da importação permanecem reservadas à 0.11-D.
- Os comandos `/grimorio-import*` continuam funcionando como antes durante esta alpha.

### Teste do diff com compêndios

```bash
node tests/validate-ui-011c.mjs
```

O teste cobre Talento novo/existente, catálogo com mistura de 28 criações + 14 atualizações, Classe com Características parcialmente existentes, exclusão de features sintéticas, pacote Classe/Subclasse, compêndio ausente, refresh do diagnóstico e garantia de zero operações de escrita.


## Build 0.11-B — Seleção, preflight e preview somente leitura

A aba **Importar** da Central agora recebe arquivos reais e executa uma análise completa antes de qualquer escrita nos compêndios.

- Seleção de múltiplos JSONs pelo botão **Selecionar arquivos**.
- Drag-and-drop de um ou vários arquivos diretamente na Central.
- Sessão persistente enquanto a Application estiver aberta, com remoção individual e limpeza completa.
- Arquivos duplicados na mesma sessão são ignorados pelo nome/tamanho/data de modificação.
- Leitura segura de JSON, incluindo mensagem visual para arquivo vazio ou JSON malformado.
- Classificação automática de cinco formatos: bundle de Classe, bundle de Subclasse, pacote de Classes/Subclasses, bundle de Talento e pacote de Talentos.
- O preflight reutiliza `validateBundle`, `validatePackage`, `validateFeatBundle` e `validateFeatPackage`; não existe uma segunda regra de validação na UI.
- Preview visual de identidade, fonte, página, contagens relevantes, pré-requisitos, escolhas e compêndios de destino.
- Erros bloqueantes e avisos são apresentados na própria janela, sem exigir consulta ao console.
- API pública `previewPayload(payload)` para integrações que precisem obter a mesma classificação/validação da Central.
- API pública `preflightSupport()` nasceu nesta etapa; na alpha.3 ela reporta 0.11-C e mantém `basePhase: 0.11-B` para registrar esta fundação.
- **Nenhuma operação de escrita foi introduzida nesta etapa.** A alpha.3 acrescenta a distinção real `NOVO/ATUALIZAR`; a execução confirmada continua reservada à 0.11-D.
- Os comandos `/grimorio-import*` continuam preservando o comportamento anterior nesta alpha; portanto, para testar o novo fluxo somente leitura, use o botão visual da Central.

### Teste do preflight

```bash
node tests/validate-ui-011b.mjs
```

O teste cobre Classe, Subclasse, pacote de Classe, Talento, catálogo de 42 Talentos, schema desconhecido, JSON malformado, deduplicação de arquivos e garantia de `writeOperations: false`.


## Build 0.11-A — Fundação da Central visual

Esta build inaugura a interface visual do Grimório Importer sem alterar a lógica de importação consolidada na 0.10.0.

- Nova janela **Grimório Importer — Central**, construída sobre `ApplicationV2` + `HandlebarsApplicationMixin`.
- Navegação lateral preparada para Importar, Status, Compêndios, Automação, Auditoria, Actor Especial e Ajuda.
- Acesso GM-only por um botão de livro nos **controles de Token** do Foundry.
- API pública `game.modules.get("grimorio-importer").api.openImporter()`.
- Instância única: reabrir a Central traz a janela existente para frente, em vez de multiplicar janelas.
- Janela movível, redimensionável e minimizável pelo frame nativo do Foundry.
- Snapshot visual do ambiente ativo (Foundry/DnD5e e perfil homologado).
- A área Importar já reserva o espaço para seleção, preflight e preview que serão implementados na **0.11-B**.
- Todos os comandos `/grimorio-*` e materializadores 0.10.0 permanecem operacionais e inalterados nesta subfase.

> Esta é uma build de desenvolvimento da Fase 3. Ela deve ser instalada sobre a 0.10.0 apenas para validar o shell visual e o acesso à Central antes da implementação do preflight.

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

Copie a pasta `grimorio-importer` para `Data/modules/`, ative o módulo no Mundo e mantenha os seis compêndios declarados em `module.json` (Classes, Subclasses, Características, Talentos, Raças e Características Raciais).

## Comandos

Na 0.11-F, os comandos abaixo são **atalhos para a Central visual**:

- `/grimorio-import` — abre **Importar** e o seletor de JSONs.
- `/grimorio-import-batch` — mesmo fluxo visual, com seleção múltipla.
- `/grimorio-import-package` — abre o mesmo fluxo visual; o tipo de pacote continua sendo detectado automaticamente.
- `/grimorio-import-feats` — abre o mesmo fluxo visual para JSONs de Talentos.
- `/grimorio-status` — abre **Status**.
- `/grimorio-packs` — abre **Compêndios**.
- `/grimorio-automacao` — abre **Automação**.
- `/grimorio-auditoria-automacao` — abre **Auditoria**.
- `/grimorio-world-preview` — abre **Status**, incluindo a área de conteúdo legado.
- `/grimorio-special` — abre **Actor Especial**.
- `/grimorio-configurar` — abre **Actor Especial** e executa a configuração assistida.
- `/grimorio-help` — abre **Ajuda**.

Para `/grimorio-special` e `/grimorio-configurar`, o módulo usa um único token controlado; se não houver token controlado, usa o personagem atribuído ao usuário. A API legada `openBundleFilePicker()` continua disponível para integrações externas, mas os comandos de chat não executam mais importação direta por ela.

## API

```js
game.modules.get("grimorio-importer").api
```

A Fase 0.11-F expõe `openImporter`, `centralParitySupport` e `commandRoutingSupport` para a camada visual/roteamento. A Fase 12 continua expondo `phase12Support`, `automationCoverage` e `automationCompendiumAudit`. `phase11Support` permanece como camada de compatibilidade, assim como `phase10Support`, `importPackage`, `importPayload`, `importPayloads`, `validatePackage`, `phase9PackageSupport` e as APIs especiais da Fase 8.

## Observações de fidelidade

Algumas proficiências homebrew não possuem uma categoria equivalente segura no DnD5e. Nesses casos, o módulo preserva a regra na descrição e gera aviso de revisão manual em vez de conceder uma categoria mais ampla. Isso se aplica, por exemplo, a armas de fogo, categorias como “armas à distância”, armas Leves/de Acuidade e à perícia homebrew Montaria.
