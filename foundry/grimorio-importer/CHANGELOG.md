# Changelog — Grimório Importer

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
