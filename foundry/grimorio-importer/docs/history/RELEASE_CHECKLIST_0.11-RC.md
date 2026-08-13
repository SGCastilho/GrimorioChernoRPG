# Grimório Importer 0.11.0-rc.1 — Checklist de validação manual

Alvo homologado: **Foundry VTT 13.351 + DnD5e 5.3.3**.

A RC está em **feature freeze**. Antes da 0.11.0 final, registrar apenas correções de regressão, compatibilidade, acessibilidade, documentação ou empacotamento.

## 1. Inicialização

- [ ] O módulo carrega sem erro no console.
- [ ] O botão de livro aparece nos controles de Token apenas para o Mestre.
- [ ] A Central abre e reutiliza uma única janela.
- [ ] O cabeçalho mostra `v0.11.0-rc.1 · RC.1`.

## 2. Status e gate final

- [ ] Foundry ativo: `13.351`.
- [ ] Sistema ativo: `dnd5e 5.3.3`.
- [ ] Os quatro compêndios aparecem disponíveis.
- [ ] **Prontidão para 0.11.0 final** não possui bloqueios.
- [ ] O gate mostra 10 verificações, incluindo **Feature freeze da Release Candidate**.
- [ ] Items legados, se existirem, aparecem somente como observação não bloqueante.

## 3. Importação visual

- [ ] Seleção múltipla de JSON funciona.
- [ ] Drag-and-drop de JSON funciona.
- [ ] Classe/Subclasse/pacote/Talento/pacote de Talentos são reconhecidos corretamente.
- [ ] JSON inválido não interrompe a análise dos demais arquivos.
- [ ] Preflight mostra `NOVO` para conteúdo ausente.
- [ ] Preflight mostra `ATUALIZAR` para conteúdo já gerenciado.
- [ ] O botão de importação exige confirmação explícita.
- [ ] O relatório final diferencia criados, atualizados, avisos e falhas.
- [ ] Uma segunda importação preserva os mesmos documentos/UUIDs.
- [ ] Nenhum Item gerenciado é criado automaticamente no diretório de Items do Mundo.

## 4. Compêndios e locks

- [ ] Classes são sincronizadas em **Grimório — Classes**.
- [ ] Subclasses são sincronizadas em **Grimório — Subclasses**.
- [ ] Características são sincronizadas em **Grimório — Características**.
- [ ] Talentos são sincronizados em **Grimório — Talentos**.
- [ ] O estado de bloqueio dos compêndios é restaurado após importação bem-sucedida.
- [ ] O estado de bloqueio também é restaurado após uma falha de importação.

## 5. Painéis administrativos

- [ ] Status atualiza corretamente.
- [ ] Compêndios mostra contagens/pastas/locks.
- [ ] Automação apresenta 99 perfis, 121 Activities, 39 recursos e 11 Active Effects.
- [ ] Auditoria carrega sem erro.
- [ ] Actor Especial detecta corretamente um Token selecionado.
- [ ] Sem Token, Actor Especial usa o personagem atribuído ao Mestre.
- [ ] Configurar Classes Especiais usa o mesmo runtime já existente.
- [ ] Ajuda exibe a equivalência Central ↔ comandos.

## 6. Comandos Central-first

- [ ] `/grimorio-import` abre Importar e o seletor visual.
- [ ] `/grimorio-import-feats` abre Importar e o seletor visual.
- [ ] `/grimorio-status` abre Status.
- [ ] `/grimorio-packs` abre Compêndios.
- [ ] `/grimorio-automacao` abre Automação.
- [ ] `/grimorio-auditoria-automacao` abre Auditoria.
- [ ] `/grimorio-special` abre Actor Especial.
- [ ] `/grimorio-configurar` abre Actor Especial e inicia a configuração assistida.
- [ ] `/grimorio-help` abre Ajuda.

## 7. Acessibilidade/UX

- [ ] `↑`, `↓`, `Home` e `End` navegam pela barra lateral.
- [ ] Foco por teclado permanece visível.
- [ ] Minimizar, maximizar e redimensionar funcionam normalmente.
- [ ] A interface permanece utilizável com `prefers-reduced-motion` ativo.

## Promoção para 0.11.0

A RC pode ser promovida quando este checklist estiver aprovado no ambiente real, `npm test` permanecer verde e a aba Status estiver sem bloqueios.
