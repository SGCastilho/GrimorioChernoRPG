# Validação do catálogo Spellblade — Grimório 4.4

## Escopo incorporado

O catálogo foi estruturado a partir do PDF **Kibbles' Casting Compendium v2.1** fornecido ao projeto.

- **240** entradas com bloco de regras completo.
- **206** magias do compêndio principal.
- **22** Magias de Sangue.
- **12** poderes Psiônicos.
- **1** referência incompleta adicional: **Investida Santificada (Sanctified Charge)**.

A referência incompleta aparece nas listas de Clérigo e Paladino e no histórico de alterações do PDF, mas o documento fornecido não contém seu bloco de regras. Ela foi registrada no Grimório com um aviso explícito; nenhuma mecânica foi criada para preencher essa ausência.

## Tratamento editorial

Para as 240 entradas completas foram estruturados e traduzidos:

- nome em português brasileiro e nome original;
- nível e escola;
- classes;
- tempo de conjuração;
- alcance convertido para metros;
- componentes e componentes materiais;
- duração, ritual e concentração;
- descrição integral e efeitos em níveis superiores;
- categoria, página e observações especiais da fonte.

A entrada **Golpes Cintilantes (Flickering Strikes)** precisou ser reconstruída manualmente porque a extração textual do PDF mesclava a linha de componentes ao início da descrição. A reconstrução usou o conteúdo visível da própria página, sem completar regras por inferência externa.

## Conferência de integridade

Foram executadas as seguintes verificações:

- 240 nomes originais da extração possuem exatamente uma entrada estruturada;
- nenhum identificador ou nome original está duplicado;
- níveis restritos ao intervalo de truque a 9º nível;
- páginas de origem restritas ao intervalo do PDF;
- todas as entradas completas possuem descrição, fonte e metadados obrigatórios;
- toda magia com componente material possui o material traduzido;
- nenhum fragmento evidente dos rótulos ou textos de regras permaneceu em inglês;
- os arquivos JavaScript passam na verificação sintática do Node.js;
- todos os scripts e folhas de estilo referenciados por `index.html` existem no projeto.

## Observações sobre a organização da fonte

O índice do documento contém uma ocorrência repetida de **Flicker**, consolidada em uma única entrada. As entradas **Aether Lance** e **Glimpse the Future**, presentes no corpo do PDF, também foram incluídas mesmo não sendo recuperadas como itens únicos pela leitura inicial do índice.
