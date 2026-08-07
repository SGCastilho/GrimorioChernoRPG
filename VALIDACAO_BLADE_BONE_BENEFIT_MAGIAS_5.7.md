# Validação técnica — Grimório 5.7 / Blade, Bone, & Benefit — Magias

## Escopo

Esta etapa integra somente o Capítulo XI — Biblioteca de Magias de *Somnus Domina — Blade, Bone, & Benefit*. Classes e subclasses do compêndio não foram alteradas.

## Auditoria do capítulo

- Descrições individuais de magia identificadas: **108**.
- Entradas sem equivalente já cadastrado no Grimório: **48**.
- Reimpressões com equivalente já cadastrado em *Lyre's Guide to Retia*: **60**.
- Estratégia de deduplicação: as 60 reimpressões recebem `otherSources` apontando para este compêndio; as 48 restantes formam o catálogo `blade-bone-benefit-spells`.
- Total esperado de registros-base após a integração: **1046**.
- Total esperado de fontes registradas: **11**.
- Total esperado de catálogos registrados: **6**.

## Dados preservados nas novas entradas

Nome PT-BR, nome original, nível, escola, tempo de conjuração, alcance, componentes, componente material, duração, classes, ritual, concentração, descrição, efeitos em níveis superiores, página impressa, fonte e grupos de magia.

Os grupos de magia foram localizados e preservados como traços: **Artes do Valor**, **Valores Sangrentos**, **Palavras Seladas**, **Códice Pecaminoso**, **Moralismos Desvinculados** e **Zanjen**.

## Blocos complexos

`Conjurar Espírito Fantasma` e `Conjurar Assistente Morto-Vivo` mantêm no corpo da magia os respectivos blocos de estatísticas, características, ações e opções de aprimoramento, evitando a perda causada pela disposição em colunas do PDF.

## Comandos de validação

```bash
node tools/validate-project.js
find . -name '*.js' -print0 | xargs -0 -n1 node --check
```

Há ainda uma validação específica da integração que confirma as 48 novas entradas, as 60 referências de reimpressão e a cobertura total das 108 magias do capítulo.
