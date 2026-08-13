export function selectedActorSelection() {
  const controlled = globalThis.canvas?.tokens?.controlled ?? [];
  if (controlled.length === 1 && controlled[0]?.actor) {
    return Object.freeze({
      actor: controlled[0].actor,
      source: "token",
      sourceLabel: "Token selecionado",
      tokenCount: 1
    });
  }
  if (controlled.length > 1) throw new Error("Selecione apenas um token para configurar classes especiais.");
  const actor = globalThis.game?.user?.character ?? null;
  return Object.freeze({
    actor,
    source: actor ? "user-character" : "none",
    sourceLabel: actor ? "Personagem atribuído ao usuário" : "Nenhum Actor disponível",
    tokenCount: 0
  });
}

export function selectedActor() {
  return selectedActorSelection().actor;
}
