# Validação técnica — Grimório 5.5 / Subclasses de Lyre

## Escopo da versão

A versão 5.5 integra todas as subclasses catalogadas no Capítulo 8 de `Lyre's Guide to Retia — Land of Industry`, mantendo separadas as opções das quatro classes originais de Retia e as opções das classes-base.

Também corrige a leitura de `Fundamentos da classe` para as quatro classes de Retia adicionadas na versão 5.4.

## Correção de Fundamentos

O extrator de fundamentos reconhecia apenas o rótulo `Pontos de Vida nos Níveis Seguintes`, usado pelos dados do Livro do Jogador. As classes de Lyre usam a redação `Pontos de Vida em níveis superiores`, fazendo com que o texto restante fosse anexado ao campo de 1º nível.

A versão 5.5 passa a reconhecer os dois formatos. Foram validados individualmente:

- Alma Favorecida — d10; 10 + Constituição no 1º nível; 1d10 (ou 6) + Constituição nos níveis seguintes.
- Inscritor — d8; 8 + Constituição no 1º nível; 1d8 (ou 5) + Constituição nos níveis seguintes.
- Cavaleiro das Pétalas — d10; 10 + Constituição no 1º nível; 1d10 (ou 6) + Constituição nos níveis seguintes.
- Santo da Espada — d10; 10 + Constituição no 1º nível; 1d10 (ou 6) + Constituição nos níveis seguintes.

Proficiências e Equipamento permanecem em cartões independentes e não são mais absorvidos pelo campo de pontos de vida.

## Subclasses de Lyre incorporadas

Total: **127 subclasses**, contendo **661 blocos de características** e **33 tabelas auxiliares estruturadas**.

### Classes originais de Retia

- Alma Favorecida: 19 Fardos Cósmicos / 94 características.
- Inscritor: 12 Intenções Autorais / 60 características.
- Cavaleiro das Pétalas: 14 Epítetos / 70 características.
- Santo da Espada: 12 Caminhos de Devoção / 75 características.

### Patrulheiro Revisado

- 7 arquétipos / 39 características.
- Vinculados à classe `Patrulheiro` do Grimório.
- Cada entrada recebe uma nota de compatibilidade informando que sua fonte original é o Patrulheiro Revisado de Lyre.

### Classes-base

- Bárbaro: 4 / 17 características.
- Bardo: 5 / 22 características.
- Clérigo: 10 / 57 características.
- Druida: 4 / 22 características.
- Guerreiro: 5 / 29 características.
- Monge: 5 / 25 características.
- Paladino: 5 / 21 características.
- Ladino: 6 / 32 características.
- Feiticeiro: 6 / 31 características.
- Bruxo: 8 / 39 características.
- Mago: 5 / 28 características.

## Localização

- Nome de exibição das 127 subclasses em português brasileiro.
- Descrições em português brasileiro.
- 661 características mecânicas em português brasileiro.
- Nomes originais preservados como aliases pesquisáveis.
- 12 tabelas de Magias de Capítulo do Inscritor, 7 Listas Expandidas de Magias do Bruxo, 9 tabelas de Magias de Domínio do Clérigo e 5 tabelas de Magias de Juramento do Paladino foram convertidas para dados reais em PT-BR.
- Páginas e título da fonte preservados.
- Busca automatizada por resíduos mecânicos comuns em inglês (`saving throw`, `Short Rest`, `Long Rest`, `spell slot`, `proficiency bonus`, entre outros): **0 ocorrências nos textos traduzidos**.

## Integridade do projeto

Após a integração:

- Classes: **19**.
- Subclasses: **246**.
- Subclasses de Lyre: **127**.
- Registros-base de magias/poderes: **998**.
- IDs duplicados de subclasses: **0**.
- Colisões de nome normalizado dentro da mesma classe: **0**.
- Arquivos JavaScript validados por `node --check`: **22**.
- Tabelas auxiliares de subclasses de Lyre: **33**.
- `manifest.json`: JSON válido.
- O módulo `data/lyre-subclasses.js` é carregado antes da inicialização de `app.js`.

## Distribuição final de subclasses por classe

- Bárbaro: 12
- Bardo: 12
- Bruxo: 16
- Clérigo: 23
- Druida: 11
- Feiticeiro: 13
- Guerreiro: 14
- Ladino: 15
- Mago: 16
- Monge: 14
- Paladino: 14
- Patrulheiro: 15
- Artífice: 4
- Alma Favorecida: 19
- Inscritor: 12
- Cavaleiro das Pétalas: 14
- Santo da Espada: 12
- Emissário Espiritual: 1
- Spellblade: 9
