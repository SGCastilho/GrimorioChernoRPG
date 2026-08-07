# Validação técnica — Grimório 5.6 / Estabilização da arquitetura

## Escopo

A versão 5.6 introduz um registro central de fontes e catálogos sem alterar o conteúdo mecânico já integrado ao Grimório.

## Resultado da validação unificada

Comando executado:

```bash
node tools/validate-project.js
```

Resultado esperado e confirmado:

- 10 fontes registradas;
- 5 catálogos de magias registrados;
- 998 registros-base de magias/poderes;
- 19 classes;
- 246 subclasses;
- 19 progressões estruturadas;
- nenhum ID de magia duplicado entre os catálogos registrados;
- nenhum vínculo de subclasse para classe inexistente;
- todos os catálogos associados a uma fonte válida;
- agrupamentos de fonte reconhecidos para Livro do Jogador, Xanathar, Tasha, Lyre, Spell Compendium, Costa da Espada, Magia de Sangue e Poder Psiônico;
- validação aprovada sem avisos.

## Compatibilidade

A forma dos objetos existentes de classes, subclasses e magias foi preservada. Os arquivos de conteúdo continuam podendo usar as variáveis globais `window.GRIMORIO_*`; o registro atua como camada de integração e não exige migração em massa dos dados existentes.

## Regra para próximas integrações

Novos PDFs devem registrar sua fonte e, quando aplicável, seus catálogos. Não devem adicionar novos `if` de fonte ou novos arrays fixos dentro de `js/app.js`.
