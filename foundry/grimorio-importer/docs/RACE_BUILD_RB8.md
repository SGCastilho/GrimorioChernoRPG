# Race Build RB-8 — Aplicação ao Actor e homologação

## Escopo

A RB-8 fecha o pipeline racial iniciado na RB-1. Um `grimorio-foundry-race-build-bundle@1` válido pode ser materializado nos dois compêndios raciais e, em uma ação separada e explícita, aplicado a um Actor `character`.

A RB-8 não transforma os compêndios em World Items. Os únicos Items fora dos compêndios são os Items **embutidos no Actor-alvo**, criados pelo workflow normal de Advancements do DnD5e.

## Perfil obrigatório

- Foundry VTT 13.351
- DnD5e 5.3.3
- Grimório Importer 0.13.0-rc.1
- usuário Mestre
- Actor `character`
- setting `dnd5e.disableAdvancements = false`

Fora desse perfil, a aplicação direta é bloqueada.

## Seleção do Actor

A Central reutiliza `selectedActorSelection()`:

1. exatamente um Token controlado tem prioridade;
2. sem Token controlado, usa `game.user.character`;
3. mais de um Token controlado é erro;
4. sem Actor disponível, o botão permanece indisponível.

## Singleton e substituição

O Race Data Model do DnD5e é singleton. A RB-8 aplica a política:

- 0 Race Items: aplica normalmente;
- 1 Race Item com mesmo `grimorioId` e `contentHash`: no-op idempotente;
- 1 Race Item diferente/desatualizado: exige confirmação explícita;
- 2+ Race Items: bloqueia e exige limpeza manual.

Nenhuma raça é escolhida para exclusão por heurística.

## AdvancementManager

A aplicação usa as factories nativas do DnD5e:

- `AdvancementManager.forNewItem(actor, raceData)` para a nova raça;
- `AdvancementManager.forDeletedItem(actor, raceId)` para reverter/remover a raça existente.

Quando existem steps, o Importer aguarda `dnd5e.advancementManagerComplete`. Se o workflow é fechado antes da conclusão, a operação é tratada como cancelada e a etapa seguinte não é iniciada.

Se não existem steps, a criação/exclusão embutida é feita diretamente com `isAdvancement: true`.

## Ordem de substituição

1. inspecionar o Actor;
2. solicitar confirmação de substituição, quando necessária;
3. materializar/atualizar o Race Build nos compêndios;
4. reverter e remover a Race atual;
5. somente após a conclusão, iniciar `forNewItem` da nova Race;
6. concluir escolhas nativas/assistidas do AdvancementManager.
7. se a aplicação da nova Race for cancelada/falhar depois da remoção, iniciar rollback assistido usando o source da Race anterior capturado antes da substituição.

Cancelar a confirmação não altera o Actor nem materializa o build apenas para tentar a substituição.

## Homologação in-app obrigatória

Os testes automatizados simulam Actor, compêndios e AdvancementManager. Antes de RC/Stable, executar em uma instância real:

1. Actor sem raça → aplicar Humano/Habitante das Florestas;
2. conferir Size/ASI/idioma/ItemGrant no fluxo de Advancements;
3. conferir Race + features embutidas no Actor;
4. aplicar novamente o mesmo build → no-op;
5. alterar para Hanyou/Emberash → confirmar substituição;
6. cancelar uma substituição → Actor deve permanecer intacto;
7. cancelar um AdvancementManager durante remoção → nova raça não pode ser adicionada;
8. desabilitar Advancements no DnD5e → aplicação deve bloquear;
9. criar artificialmente 2 Race Items → aplicação deve bloquear;
10. verificar que `game.items` não recebe Items gerenciados;
11. validar `system.details.race` após criação/exclusão;
12. reiniciar Mundo e repetir reimportação para confirmar persistência/UUIDs.

No RC.1, execute o checklist e use **Central → Status → Registrar checklist**. O registro é world-scoped e só é aceito no runtime exato Foundry 13.351 / DnD5e 5.3.3. Enquanto os 12 itens não estiverem completos, `readyForStable` permanece `false`. O módulo não se auto-certifica.
