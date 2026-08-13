# Changelog — Grimório Importer

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
