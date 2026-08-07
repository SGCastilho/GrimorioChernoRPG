# Auditoria visual e estrutural — Grimório 4.5

## Status desta versão

A versão 4.5 mantém a consulta dinâmica e as tabelas reais da versão anterior e adiciona suporte estruturado a conteúdos homebrew com fonte própria.

## Melhorias concluídas

### Emissário Espiritual

- Classe completa adicionada ao catálogo principal.
- Progressão do 1º ao 20º nível em dados JavaScript reais.
- Coluna própria para o Dado Curativo.
- Características filtráveis pelo nível selecionado.
- Proficiências, equipamento, Pontos de Selo, Senda de Torii, ofudas, kunais e características de níveis elevados incluídos.
- Fonte identificada como **Emissário Espiritual — Homebrew Original**, sem confusão com o Livro do Jogador.

### Caminho do Santuário

- Subclasse integrada à classe Emissário Espiritual.
- Características nos níveis 3, 6, 9, 13 e 17.
- Consulta por nível e abas de Visão geral, Características e Tabelas.
- Lista de magias preparáveis em ofudas convertida para tabela HTML.

### Tabelas complementares

- Nova aba **Tabelas**, exibida somente quando existem dados estruturados.
- Tabela da Kunai do Emissário.
- Tabela de gasto de Energia Espiritual por círculo de magia.
- Tabela de progressão do Caminho do Santuário.
- Tabela de Ofudas Preparáveis.
- Cabeçalhos, rolagem horizontal, contraste e leitura em dispositivos móveis reaproveitam o padrão visual das progressões oficiais.

### Integridade editorial

- Ortografia, unidades e pluralização foram normalizadas para leitura no site.
- A mecânica do homebrew foi preservada.
- A inconsistência do documento original — subclasse iniciando no 3º nível, enquanto a linha de 3º nível da tabela principal está vazia — foi registrada na aba Referências, sem preenchimento silencioso da tabela.
- O termo não padronizado “ação completa”, usado na característica de 17º nível, foi mantido conforme o PDF.

## Validações técnicas realizadas

- Sintaxe de todos os arquivos JavaScript validada com Node.js.
- Integridade dos dados: 14 classes, 51 subclasses e 14 progressões.
- Progressão do Emissário Espiritual validada com exatamente 20 níveis.
- Teste de execução em DOM simulado para classe, subclasse e novas abas de tabelas.
- Verificação da presença das fontes homebrew em cabeçalhos, características e tabelas.

## Pendências gerais para uma versão definitiva

1. Revisão editorial manual do restante dos textos extraídos do Livro do Jogador.
2. Estruturação das demais tabelas secundárias oficiais.
3. Comparação lado a lado entre subclasses.
4. Catálogo integral de magias incorporado ao pacote para funcionamento totalmente offline.
5. Testes visuais em navegadores reais no Windows, Android e iOS.
6. Acessibilidade completa com leitor de tela e navegação integral por teclado.
7. Migração versionada de dados personalizados e modo instalável como PWA.


## Revisão 4.2

- A Visão geral passou a funcionar como consulta completa, sem obrigar o usuário a alternar abas para ler progressão, características e subclasses.
- As características da progressão receberam vínculos semânticos para os respectivos blocos de regra.
- O destino é aberto e destacado, reduzindo a perda de contexto em classes extensas.


## Revisão 4.3

- A navegação por características não cria mais um filtro de nível.
- As subclasses possuem progressão própria derivada de suas características.
- A tabela da classe-base foi removida da consulta de subclasses.
- Progressões duplicadas em tabelas complementares são ocultadas.


## Revisão 4.5

- Classe Spellblade incorporada com progressão real do 1º ao 20º nível.
- Nove Técnicas de Spellblade com progressões próprias e características clicáveis.
- Trinta e dois efeitos de Égide convertidos em tabela HTML.
- Lista de magias da classe localizada em português e integrada ao filtro Spellblade.
- Fontes e atribuição do conteúdo KibblesTasty identificadas separadamente.
- Validação estrutural concluída com 14 classes, 51 subclasses e 14 progressões.
