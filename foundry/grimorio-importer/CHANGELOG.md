# Changelog

## 0.12.0 — Stable / consolidação FA-1–FA-5

- Promovida a linha 0.12 para a versão estável **0.12.0** após homologação das fases FA-1–FA-5.
- `module.json`, `package.json` e `scripts/version.js` sincronizados em `0.12.0`.
- `IMPORTER_BUILD` passa a `channel: stable`, `featureFreeze: true`, `phase: 0.12.0 Stable`.
- O gate do Status passa de preparação para RC para **Integridade da versão 0.12.0 Stable**, mantendo 11 verificações bloqueantes/não bloqueantes.
- `releaseReadiness` acrescenta `readyForStable`; `readyForFinal` e `readyForRc` continuam como aliases compatíveis.
- Auditoria 42/42 acrescenta `readyForStable`, preservando `readyForRc` para compatibilidade.
- `centralParitySupport()` passa a reportar `stableBuild`, `finalReadinessGate` e `stableIntegrityGate`.
- Adicionados `tests/validate-stable-012.mjs`, `npm run test:stable` e `npm run test:release`.
- Adicionados `RELEASE_NOTES_0.12.0.md` e `STABLE_RELEASE_CHECKLIST.md`.
- Os arquivos mecânicos centrais de Talentos e materialização permanecem byte a byte idênticos à `0.12.0-alpha.4`; a promoção Stable altera apenas metadados, gate, documentação e testes de release.

## 0.12.0-alpha.4 — FA-5 / auditoria mecânica 42/42 e preparação para RC

- `IMPORTER_BUILD.phase` passa a `FA-5`; versão sincronizada em `module.json`, `package.json` e `scripts/version.js` como `0.12.0-alpha.4`.
- Adicionado `scripts/feat-audit-baseline.js` com baseline explícito dos **42 Talentos** produzido a partir do Grimório D&D 5.42.0 / PHB 2014 / Feat Bundle v2.
- Adicionado `scripts/feat-audit.js`, que audita os Items efetivamente materializados por identidade estável e compara chaves exatas de Advancement, Activity e Effect, Uses, runtime, escolhas assistidas, schema/tier e itens diferidos.
- Auditoria agregada aprovada em **42/42**, com **26 Advancements, 22 Activities, 10 Active Effects, 2 Uses, 56 runtime records e 3 escolhas assistidas**.
- A classificação de cobertura fica em **6 Nativa, 7 Runtime/Activity, 25 Assistida e 4 Nativa + textual**; `42/42 verificados` não significa que regras contextuais tenham sido transformadas em automações aproximadas.
- Detecção bloqueante adicionada para Talento ausente, `grimorioId` duplicado, Item extra gerenciado, schema/role/identidade divergente, Activity/Advancement/Effect removido, contagens divergentes ou qualquer elemento ainda `deferred`.
- Testes negativos removem deliberadamente uma Activity de Atirador Aguçado, duplicam um `grimorioId` e omitem um Talento; todos os cenários bloqueiam `readyForRc`.
- A aba **Auditoria** da Central passa a integrar a auditoria 42/42 com tabela por Talento, estado, categoria de cobertura, contagens mecânicas e divergências.
- A aba **Status** integra a auditoria ao gate de desenvolvimento, que passa a ter **11 verificações** para preparação da `0.12.0 RC`.
- Novas APIs: `featAuditSupport()`, `featCompendiumAudit()` e `auditFeatDocuments()`.
- Adicionados `FA5_AUTOMATION_AUDIT.md` e `FA5_TEST_CHECKLIST.md`.
- Adicionado `tests/validate-feat-audit-012.mjs` e `npm run test:fa5`; a suíte agregada passa a executar **13 testes**.
- Os arquivos mecânicos centrais da FA-4 (`feat-automation.js`, `feat-choice-runtime.js`, `feat-runtime.js`, `feat-materializer.js`, `pack-storage.js`, `materializer.js`) permaneceram byte a byte idênticos à `0.12.0-alpha.3`; a FA-5 é uma fase de auditoria/consolidação, não de promoção mecânica.
- Feat Bundle v1/v2, reimportação por `grimorioId`, preservação de UUIDs, restauração de locks e política de zero World Items continuam inalterados.

## 0.12.0-alpha.3 — FA-4 / runtime seguro dos Talentos

- `IMPORTER_BUILD.phase` passa a `FA-4`; versão sincronizada em `module.json`, `package.json` e `scripts/version.js` como `0.12.0-alpha.3`.
- Adicionado `scripts/feat-runtime.js`, motor de cobertura runtime com **56 registros reconhecidos / 53 comportamentos únicos** e política `safe-hook-first+guarded-assistance`.
- Os **3 Active Effects condicionais** anteriormente diferidos passam a ser materializados como marcadores `runtimeManaged`, sem `changes` globais inseguros.
- Conjurador de Guerra passa a aplicar vantagem somente no hook de concentração; Resistente aplica o mínimo de cura no hook de Dado de Vida; Maestria em Armadura Pesada aplica redução de dano somente quando armadura pesada e ataque não mágico qualificado podem ser confirmados.
- Ambidestro e Maestria em Armadura Média passam a sincronizar Effects de CA no Actor conforme equipamento/atributo detectados; a regra de Furtividade da armadura média permanece guardada em vez de cancelar desvantagens de outras origens.
- Curandeiro passa a validar/consumir Kit de Primeiros-Socorros e controlar cooldown por alvo através das Activities e descanso.
- Sortudo preserva Uses `3/LR` e recebe rolagem `1d20` na Activity de gasto de sorte; a escolha entre resultados permanece assistida e auditável.
- Os demais comportamentos situacionais recebem estratégia explícita `automatic`, `guarded`, `activity`, `assisted` ou `description`; nenhum dos 56 registros permanece classificado como `unsupported`.
- `feat-automation.js` avança para compiler v3 / FA-4, materializando **10 Effects, 22 Activities, 2 Uses e 56 descriptors runtime**, mantendo os 28 planos de Advancement já resolvidos pela FA-3.
- `main.js` registra os hooks FA-4 e expõe `featRuntimeSupport()`, `runtimeCoverageForActor()`, `validateFeatRuntimeCoverage()` e `syncConditionalFeatEffects()` na API pública.
- Central/Status/Ajuda passam a mostrar fase FA-4 e resumo da cobertura runtime.
- Adicionado `tests/validate-feat-runtime-012.mjs` e `npm run test:fa4`; regressão agregada passa a executar **12 testes**.
- Feat Bundle/Package v1 continuam compatíveis; reimportação por `grimorioId`, UUIDs, restauração de locks e política de zero World Items permanecem inalteradas.

## 0.12.0-alpha.2 — FA-3 / escolhas abertas e vinculadas de Talentos

- `IMPORTER_BUILD.phase` passa a `FA-3`; versão sincronizada em `module.json`, `package.json` e `scripts/version.js`.
- Os **12 Advancements diferidos pela FA-2** são resolvidos; cobertura lógica passa de 16/28 para **28/28**, com **26 documentos nativos** e **3 escolhas vinculadas assistidas**.
- `Trait Advancement` passa a materializar escolhas abertas de armas, perícias/ferramentas, idiomas e salvaguardas.
- `ItemChoice Advancement` com `allowDrops: true` passa a materializar manobras e escolhas de magia, preservando quantidade e constraints declarativas nas flags.
- Adepto Elemental, Conjurador de Ritual e Iniciado em Magia recebem configuração assistida de escolha vinculada no Actor via `scripts/feat-choice-runtime.js`.
- Resiliente passa a usar ASI + Trait de salvaguarda vinculados; `dnd5e.preAdvancementManagerComplete` bloqueia payloads em que as duas escolhas divergem quando ambas estão disponíveis.
- Expostas APIs `featChoiceSupport()`, `configureFeatChoices()`, `pendingFeatChoices()` e `validateResilientLinkage()`.
- `feat-materializer.js` passa a reportar `advancementDocumentsMaterialized` e `assistedChoicesMaterialized`; warnings distinguem escolhas assistidas de runtime FA-4.
- A Central/Status/Ajuda foram atualizadas para FA-3. Os **3 Effects condicionais** e **56 requisitos runtime** continuam explicitamente reservados para FA-4.
- Adicionado `tests/validate-feat-choices-012.mjs`; suíte FA-2 foi atualizada para verificar 28 planos resolvidos, 26 documentos nativos, 3 escolhas assistidas e zero Advancements diferidos.

## 0.12.0-alpha.1 — FA-2 / Feat Bundle v2 e automação nativa segura

- Aberta a linha 0.12 a partir da 0.11.0-rc.1, com `IMPORTER_BUILD.phase = FA-2`, canal `development` e `featureFreeze: false`.
- Feat Bundle/Package v2 passam a ser suportados em paralelo ao transporte v1 legado.
- Adicionado `scripts/feat-automation.js`, compilador do contrato `grimorio-foundry-feat-automation-plan@1`.
- Materialização FA-2 dos 42 Talentos: **16 Advancements**, **7 Active Effects**, **22 Activities** e **2 recursos Uses**.
- Diferidos de forma explícita: **12 Advancements** de escolhas abertas (FA-3), **3 Effects condicionais** e **56 requisitos de runtime** (FA-4).
- Active Effects seguros cobrem iniciativa, CA assistida não-transferível, deslocamento, bônus passivos de perícia e PV por nível; efeitos dependentes de equipamento/origem de dano não são aplicados globalmente.
- Ability Score Improvement e concessões fixas de proficiência em armadura são materializadas como Advancements nativos; ItemChoice/SpellChoice/linked-choice/open Trait permanecem declarativos.
- Activities de cura são `heal`; demais ações condicionais são Activities `utility` assistidas com ativação, condição, consumo e vínculo a Effect quando aplicável.
- `feat-materializer.js` passa a armazenar metadados completos de automação e estatísticas materializadas/diferidas nas flags do Item.
- `feat-validator.js` valida Bundle/Package v2 e `summary.automation`, preservando v1.
- Preview da Central exibe counts de Advancements, Activities, Effects e Runtime para Talentos v2.
- Gate do Status foi convertido de gate de RC 0.11 para **Estado da FA-2 / 0.12.0**.
- Adicionado `tests/validate-feat-automation-012.mjs`; suíte agregada permanece com regressões da Central, Talentos v1 e Lutador de Rua/Dragão de Dojima.
- Reimportação dos 42 Talentos v2 preserva UUIDs e pasta; locks são restaurados e nenhum Item gerenciado é criado no Mundo.

## 0.11.0-rc.1 — Release Candidate / feature freeze e gate para versão final

- Promovida a linha 0.11-A–G para **Release Candidate** sem adicionar novos fluxos funcionais.
- `IMPORTER_VERSION` passa a `0.11.0-rc.1`; `module.json` e `package.json` foram sincronizados.
- `scripts/version.js` passa a expor `IMPORTER_BUILD` com canal `release-candidate`, rótulo `RC.1`, alvo `0.11.0` e `featureFreeze: true`.
- `centralParitySupport()` passa a reportar fase `0.11.0-RC`, feature freeze e canal RC, preservando a 0.11-G como base.
- O gate do Status evolui de “Prontidão para RC” para **“Prontidão para 0.11.0 final”** e adiciona a 10ª verificação: feature freeze/Canal Release Candidate.
- `releaseReadiness` passa a expor `readyForFinal`; `readyForRc` é preservado como alias compatível.
- A Central exibe `RC.1` como build ativa e a Ajuda documenta o feature freeze.
- Adicionado `tests/validate-rc-011.mjs` para validar versão, manifestos, build metadata, feature freeze, gate final, Central, comandos e ausência de referências alpha ativas no runtime.
- `npm run test:rc` e `npm run test:release` passam a usar a validação RC; `npm test` continua executando a suíte agregada e inclui automaticamente o teste RC.
- Nenhum schema, materializador, compêndio, perfil mecânico, contrato de identidade ou regra de reimportação foi alterado.

## 0.11.0-alpha.7 — Fase 0.11-G / Consolidação, regressão e gate de RC

- Adicionado `scripts/ui/release-readiness.js` com gate de prontidão para a futura 0.11.0 RC.
- O Status passa a consolidar 9 verificações: ambiente homologado, quatro compêndios, sete áreas da Central, preflight sem escrita, matching estável, confirmação explícita, política de zero Items no Mundo, roteamento dos 12 comandos e presença de conteúdo legado.
- Itens legados do protótipo da Fase 5 são tratados como observação não bloqueante; incompatibilidade de ambiente, compêndio ausente ou quebra dos contratos de segurança bloqueiam o gate.
- `status()` passa a expor `releaseReadiness`; as APIs públicas também oferecem `releaseReadiness()`, `releaseReadinessSupport()` e `evaluateReleaseReadiness()`.
- `centralParitySupport()` avança para 0.11-G e registra gate de RC, passagem de acessibilidade e suíte de regressão.
- A Central recebe navegação lateral por teclado (`ArrowUp`, `ArrowDown`, `Home`, `End`), foco visível, regiões `aria-live`, confirmação identificada como `alertdialog` e mensagens administrativas com `role=alert`.
- Adicionado suporte a `prefers-reduced-motion` para reduzir transições/animações quando solicitado pelo sistema do usuário.
- A aba Ajuda passa a documentar a fase de consolidação e a API `releaseReadinessSupport()`.
- Adicionado `tests/validate-ui-011g.mjs` e agregador `tests/run-all.mjs`; `npm test` executa Talentos, Lutador de Rua/Dragão de Dojima e as fases 0.11-A–G.
- `package.json` ganha `npm test` e `npm run test:release`.
- Regressão completa aprovada: 9/9 testes, sintaxe de todos os scripts e JSONs válidos.
- Nenhum schema, materializador, perfil mecânico, compêndio ou regra de reimportação foi alterado nesta fase.
- `module.json`, `package.json` e `IMPORTER_VERSION` sincronizados em `0.11.0-alpha.7`.


## 0.11.0-alpha.6 — Fase 0.11-F / Comandos roteados para a Central

- Adicionado `scripts/ui/command-router.js` com mapa centralizado dos 12 comandos/aliases existentes.
- Todos os comandos `/grimorio-*` passam a abrir a seção equivalente da Central em vez de executar a interface legada por notifications.
- Os quatro aliases `/grimorio-import*` abrem **Importar** e acionam o seletor visual, entrando no fluxo preflight → `NOVO/ATUALIZAR` → confirmação → relatório.
- `/grimorio-world-preview` passa a abrir **Status**, que já contém o diagnóstico de Items legados da Fase 5.
- `/grimorio-configurar` abre **Actor Especial** e chama a mesma configuração assistida da Central.
- `openImporter()` passa a aceitar `promptFiles`, `action` e `source`; adicionada rotina `promptImportFiles()` na Application.
- Nova API `commandRoutingSupport()` e atualização de `centralParitySupport()` para a fase 0.11-F.
- API legada `openBundleFilePicker()` preservada para compatibilidade externa, mas removida do caminho dos comandos de chat.
- Ajuda visual e README atualizados para documentar o comportamento Central-first.
- Adicionado `tests/validate-ui-011f.mjs` e executadas regressões 0.11-A/B/C/D/E, Talentos e Lutador de Rua/Dragão de Dojima.
- `module.json`, `package.json` e `IMPORTER_VERSION` sincronizados em `0.11.0-alpha.6`.


## 0.11.0-alpha.5 — Fase 0.11-E / Paridade administrativa da Central

- Conectadas as abas **Status**, **Compêndios**, **Automação**, **Auditoria**, **Actor Especial** e **Ajuda** às APIs já existentes do módulo.
- Status exibe compatibilidade Foundry/DnD5e, disponibilidade dos quatro compêndios e Items legados da Fase 5.
- Compêndios exibe totais/gerenciados, pastas e estado de bloqueio.
- Automação apresenta perfis, Activities, recursos, Active Effects, tiers e cobertura por classe.
- Auditoria visualiza `automationCompendiumAudit()` com resumo e detalhamento por bundle.
- Adicionado `scripts/actor-selection.js` para compartilhar a mesma regra Token único → personagem atribuído entre comandos e Central.
- Actor Especial diagnostica as cinco classes especiais e chama `configureActorSpecialClasses()` para configuração assistida.
- Ajuda consolida equivalência Central/comandos e políticas de segurança.
- Adicionado `scripts/ui/central-support.js` e API `centralParitySupport()`.
- Painéis administrativos são carregados sob demanda e possuem atualização manual.
- Importação 0.11-D e comandos `/grimorio-*` preservados sem mudança de comportamento.
- Adicionado `tests/validate-ui-011e.mjs` e executadas regressões 0.11-A/B/C/D, Talentos e Lutador de Rua/Dragão de Dojima.
- `module.json`, `package.json` e `IMPORTER_VERSION` sincronizados em `0.11.0-alpha.5`.


## 0.11.0-alpha.4 — Fase 0.11-D / Execução confirmada e relatório visual

- Adicionado `scripts/ui/import-executor.js` para executar sessões válidas reutilizando `importPayload()` e normalizar estatísticas dos materializadores.
- O botão **Importar conteúdo** passa a ser habilitado somente quando todos os arquivos são válidos e o diff dos compêndios está disponível.
- Antes da confirmação, a Central refaz o diagnóstico dos compêndios.
- Adicionada confirmação explícita dentro da Central com resumo de arquivos, documentos, criações e atualizações previstas.
- Adicionado estado visual de importação em andamento.
- Adicionado relatório persistente na sessão com criados, atualizados, pastas criadas/atualizadas, avisos, falhas por arquivo e falhas internas de pacotes.
- Após a execução, o diff é atualizado automaticamente para refletir o novo estado dos compêndios.
- `importPayload`, `importPackage`, `importFeatPackage` e `importPayloads` ganharam opções compatíveis para silenciar notificações individuais no fluxo visual sem alterar o comportamento padrão dos comandos.
- Adicionada API `importExecutionSupport()`.
- Mantido `continueOnError` na execução visual para que um arquivo com falha não impeça o relatório dos demais.
- Mantida a política de não criar Items gerenciados no Mundo.
- Adicionado `tests/validate-ui-011d.mjs` e executadas regressões 0.11-A/B/C, Talentos e Lutador de Rua/Dragão de Dojima.
- `module.json`, `package.json` e `IMPORTER_VERSION` sincronizados em `0.11.0-alpha.4`.


## 0.11.0-alpha.3 — Fase 0.11-C / Diff somente leitura com os compêndios

- Adicionado `scripts/ui/compendium-preflight.js` para consultar os quatro compêndios sem executar operações de escrita.
- O matching da preview usa as mesmas flags estáveis da reimportação: `documentRole + grimorioId` e, para Características, também `featureKey`.
- Classes/Subclasses reutilizam o próprio plano de armazenamento do materializador; características sintéticas que não virariam Items deixam de inflar a preview.
- Cada payload válido passa a informar quantos documentos são **NOVOS** e quantos serão **ATUALIZADOS**.
- A preview por documento mostra nome, tipo, nível/função quando aplicável e compêndio de destino.
- Pacotes grandes mantêm contagem integral, mas a lista visual é limitada a 80 linhas para preservar desempenho da Application.
- Adicionado resumo global da sessão com documentos planejados, novos, atualizações e disponibilidade do diagnóstico.
- Adicionado botão **Atualizar diagnóstico** para recalcular o diff caso o conteúdo dos compêndios mude enquanto a Central estiver aberta.
- Compêndios ausentes ou inacessíveis são apresentados como erro de inspeção, sem converter o JSON estruturalmente válido em conteúdo desconhecido.
- Adicionadas APIs `inspectPayloadCompendiums`, `plannedPayloadDocuments` e `compendiumPreflightSupport`.
- Central continua sem escrita nesta build; o botão de importação permanece bloqueado até a 0.11-D.
- `IMPORTER_VERSION` foi centralizado em `scripts/version.js` para evitar divergência em mensagens internas.
- Adicionado `tests/validate-ui-011c.mjs` e atualizados os testes 0.11-A/0.11-B para regressão da alpha.3.
- `module.json`, `package.json` e `IMPORTER_VERSION` sincronizados em `0.11.0-alpha.3`.

## 0.11.0-alpha.2 — Fase 0.11-B / Preflight visual de importação

- Adicionados `scripts/ui/payload-preflight.js` e `scripts/ui/importer-session.js`.
- A aba Importar passa a aceitar seleção múltipla e drag-and-drop de JSONs.
- Adicionada classificação automática de bundles/pacotes de Classe, Subclasse e Talento.
- A preview reutiliza os validadores oficiais do módulo e apresenta erros/avisos antes de qualquer escrita.
- Adicionados cards de preview com identidade, fonte, página, contagens, metadados e compêndios de destino.
- Adicionados resumo da sessão, remoção individual, limpeza e deduplicação de arquivos.
- JSONs vazios, malformados ou com schema desconhecido são exibidos como inválidos sem interromper os demais arquivos da sessão.
- Adicionadas APIs `previewPayload`, `classifyPayload` e `preflightSupport`.
- A Central permanece somente leitura nesta build; diff de criação/atualização fica reservado à 0.11-C e execução à 0.11-D.
- Adicionado `tests/validate-ui-011b.mjs` e ajustados testes de regressão para aceitar builds alpha 0.11.x sem perder as asserções mecânicas.
- `module.json`, `package.json` e `IMPORTER_VERSION` sincronizados em `0.11.0-alpha.2`.

## 0.11.0-alpha.1 — Fase 0.11-A / Fundação da Central visual

- Adicionada `GrimorioImporterApp` baseada em `ApplicationV2` + `HandlebarsApplicationMixin`.
- Adicionado template `templates/importer-app.hbs` e shell visual responsivo.
- Adicionada navegação lateral para Importar, Status, Compêndios, Automação, Auditoria, Actor Especial e Ajuda.
- Adicionado botão GM-only nos controles de Token via `getSceneControlButtons`.
- Adicionada API pública `openImporter({ section })`.
- Reabertura da Central reutiliza a instância registrada e a traz para frente.
- Adicionado snapshot do ambiente Foundry/DnD5e no rodapé da Central.
- Mantidos todos os comandos e fluxos de importação existentes sem mudança de comportamento.
- `module.json`, `package.json` e `IMPORTER_VERSION` sincronizados em `0.11.0-alpha.1`.

## 0.10.0 — Talentos

- Adicionado compêndio `grimorio-feats` / **Grimório — Talentos**.
- Adicionados `feat-validator.js` e `feat-materializer.js`.
- Adicionado suporte aos schemas de bundle/pacote de Talentos v1.
- Talentos são materializados como Items DnD5e `feat`, com texto/fonte/requisitos e flags estruturadas.
- Reimportação por `grimorioId` atualiza sem duplicar e preserva UUIDs.
- Pastas de fonte são gerenciadas por flags e reutilizadas em reimportações.
- Dispatcher `/grimorio-import` passa a reconhecer payloads de Talentos; adicionado alias `/grimorio-import-feats`.
- Mantida automação conservadora: nenhuma mecânica contextual é inferida a partir da descrição.
- Adicionados exemplos do PHB 2014 e teste `validate-feats-010.mjs`.
- Regressão de classes/subclasses 0.9.3 preservada.
- `module.json`, `package.json` e `IMPORTER_VERSION` sincronizados em 0.10.0.

## 0.9.3 — Lutador de Rua

- Adicionado `street-fighter` à lista de classes homologadas e criado `CLASS_PROFILE` dedicado.
- Adicionado suporte nativo ao Arquétipo de Rua `street-fighter-dragon-dojima`.
- Atualizado o catálogo suportado para 26 classes e 381 subclasses/especializações.
- O validador agora aceita bundles antigos que ainda marquem uma classe como `nativeMapping: review` quando a versão local do Importer já possui perfil homologado, emitindo aviso em vez de bloquear a importação.
- Lutador de Rua: d10, salvaguardas de Força/Constituição, armadura leve, armas simples e seleção de duas perícias nativas.
- Proficiências homebrew que não têm categoria nativa segura — armas improvisadas, armas marciais corpo a corpo sem Pesada e escolha híbrida de ferramentas — permanecem na descrição com aviso de revisão manual.
- `Incremento de Habilidade` do Lutador de Rua é preservado como Item textual nos níveis 4/8/12/16/19, sem ASI nativo inferido.
- Adicionado `ItemChoice` no nível 3 para escolher 2 entre as 5 Essências de Cólera inicialmente disponíveis.
- As 15 Essências posteriores são materializadas no compêndio como opções de suporte nos tiers 9/13/15/17, sem concessão automática porque o PDF não define a quantidade de `Essência Adicional`.
- Adicionada reserva de Cólera com capacidade máxima dinâmica e sem recuperação automática por descanso.
- Adicionados 27 perfis mecânicos para Lutador de Rua/Dragão de Dojima, elevando a cobertura geral para 99 perfis, 121 Activities, 39 reservas/usos e 11 Active Effects.
- Adicionados exemplos JSON do Lutador de Rua e Dragão de Dojima.
- Adicionado teste de regressão dedicado `tests/validate-street-fighter-093.mjs`.
- `module.json`, `package.json` e `IMPORTER_VERSION` sincronizados em 0.9.3.
