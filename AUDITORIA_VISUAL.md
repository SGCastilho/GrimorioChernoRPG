# Auditoria visual — 5.30.1

## Revisão textual racial — Fase 1
- Conferir **Raças e Subraças → Humano**: selo verde “Texto integral revisado”.
- Em **Traços fixos**, Perícia Enraizada deve mostrar dois parágrafos completos, sem a frase genérica “Modifica testes ou salvaguardas...”.
- Selecionar **Jackman**: deve aparecer a descrição narrativa, o aumento “Qualquer atributo à sua escolha (exceto Sabedoria) +1”, Conjunto Expandido de Perícias completo e Talento completo.
- Conferir que as demais raças exibem o selo “Resumo — revisão pendente”, deixando explícito que ainda não passaram pela revisão integral.
- Conferir quebra de parágrafos nos cartões longos e layout em duas colunas no desktop / uma coluna no mobile para raças revisadas.


## v5.30 — Raças e Subraças

- A opção **Raças e Subraças** aparece na seção **Início**, imediatamente abaixo de **Planejador de Atributos**, tanto na navegação base quanto na navegação aprimorada.
- O catálogo racial usa busca, filtros e cartões; a ficha de raça separa **traços fixos**, **subraça**, **Traços de Legado** e **Sangue Misto**.
- A seleção de Legado limita visualmente o personagem a **2 escolhas**, salvo exceções explicitamente descritas pela raça/subraça.
- Hanyou recebe apresentação especial para seus Traços de Herança positivos/prejudiciais, evitando confundi-los com as duas escolhas gerais de Legado.
- O estado do construtor racial é persistido localmente e não interfere no Planejador de Atributos.

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

## v5.30.2 — revisão racial Fase 2
- Conferir que Arhcoon até Framebilt (bloco revisado) exibem o selo **Texto integral revisado**.
- Conferir descrições longas, listas internas e quebras de parágrafo em Traços Fixos, Legado, Sangue Misto e subraças.
- Casos estruturais obrigatórios: Feralus/Pressa Felina em Traços Fixos; Anão Sermiano/Visão às Cegas; Enáretos/Passagem Radiante em Descoberta e Ler Adiante em Profecia; Elfo Selvagem com uma única Forma Sazonal.
- Confirmar que raças ainda não auditadas continuam exibindo **Resumo — revisão pendente**.

## v5.30.3 — revisão racial Fase 3
- Conferir que **Gnomo, Goblin, Golias, Hádislin, Halfling, Hanyou, Hobgoblin, Ilthrak-yar e Kaijou** exibem o selo **Texto integral revisado**.
- Em **Hádislin**, alternar entre subraças infernais e de cristal e confirmar o painel **Legado Amaldiçoado — magias desta subraça**, com uma magia no nível 3 e outra no nível 5.
- Em **Hanyou**, confirmar os grupos visuais separados: **Regra da Herança**, **Traço da linhagem**, **Traços de Herança positivos — escolha 2** e **Traços de Herança prejudiciais — escolha 2**, além do aviso sobre os níveis 8 e 13.
- Em **Hobgoblin**, confirmar que Hospitalidade, Passagem e Despeito não aparecem como cards independentes de Traços de Legado e estão descritos dentro de **Orientação Feérica**.
- Conferir textos extensos e listas internas em Dom da Esperteza (Gnomo), Passo Feérico (Goblin Selvagem), Resistência da Pedra (Golias), Sorte e Favor (Halfling), Regeneração Demoníaca (Hanyou), Mãos Extras (Ilthrak-yar) e Thagomizer (Kaijou).
- Confirmar que **Kits’adria** e as raças seguintes ainda exibem **Resumo — revisão pendente**.


## v5.30.4 — revisão racial Fase 4
- Confirmar que todas as 34 raças exibem `Texto integral revisado` e nenhuma mantém selo de revisão pendente.
- Primordia: trocar entre as 8 subraças e conferir o painel `Magia Elemental — magias desta subraça` com Truque / 1º nível / 2º nível.
- Povo do Mar → Litorâneo: conferir a nota editorial sobre o atributo não especificado no PDF.
- Kua Hono → Lagarto: conferir `Rastreador pelo Olfato`.
- Trealtin → Fúngico: `Sopro de Esporos` deve conter quatro efeitos dentro do mesmo cartão, sem quatro pseudo-traços separados.
- Vanquis → Carniçal: `Frenesi Alimentar` deve conter os valores por tamanho dentro do mesmo cartão.
- Nefilim em Sangue Misto: conferir a opção `Linhagem`.
