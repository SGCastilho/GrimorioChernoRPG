# Validação — Grimório 5.2 / Costa da Espada — Guia de Aventureiros

## Escopo do PDF

O PDF fornecido é um scan de 150 páginas. O conteúdo de jogo relevante ao Grimório está no Capítulo 4: Classes, nas páginas impressas 121–144.

O livro não apresenta uma nova classe-base. O capítulo traz opções de classes, subclasses, expansões de características existentes e quatro truques para Feiticeiro, Bruxo e Mago.

## Subclasses exclusivas incorporadas

Foram adicionadas seis subclasses que não estavam representadas como subclasses próprias no projeto:

1. Bárbaro — Caminho da Fúria da Batalha (p. 121)
2. Clérigo — Domínio Arcano (pp. 125–126)
3. Guerreiro — Cavaleiro Dragão Púrpura (p. 128)
4. Monge — Caminho da Morte Extensa (pp. 130–131)
5. Paladino — Juramento da Coroa (pp. 132–133)
6. Bruxo — O Eterno (pp. 139–140)

Total: 29 registros de características e 5 tabelas próprias.

## Expansão de subclasse existente

O Caminho do Guerreiro Totêmico recebeu as opções adicionais de Cervo e Tigre para Espírito Totem, Aspecto da Besta e Ligação Totêmica, além da tabela Totens Uthgardt. Isso foi adicionado à própria subclasse já existente em vez de criar uma cópia.

## Subclasses republicadas — deduplicação

As opções abaixo já estavam no Grimório por meio de versões posteriores e não receberam uma segunda entrada:

- Caminho da Alma do Sol — associado à entrada posterior de Alma Solar.
- Manipulador — associado à entrada posterior de Mentor.
- Espadachim — associado à entrada posterior de mesmo conceito.
- Feiticeiro da Tempestade — associado à entrada posterior de Xanathar.
- Lâmina Cantante — associado à entrada revisada de Tasha.

A procedência de Costa da Espada passa a aparecer como fonte adicional nessas subclasses.

## Magias

Costa da Espada apresenta quatro truques. Todos foram posteriormente republicados/revisados e já possuíam uma entrada correspondente no catálogo. Para evitar duplicação, o Grimório preserva a versão de Costa da Espada dentro da página da magia atual:

- Lâmina Efervescente → Lâmina Estrondosa
- Lâmina Verde Flamejante → Lâmina da Chama Esverdeada
- Atração Elétrica → Chicote Elétrico
- Explosão de Espadas → Rompante de Espadas

As versões históricas preservam nome, escola, tempo de conjuração, alcance, componentes, duração, classes, página e texto de regras do PDF. A busca reconhece os nomes de ambas as versões, e o filtro de fonte `Costa da Espada` retorna as quatro entradas.

## Totais após integração

- Classes: 15
- Subclasses: 119
- Novas subclasses exclusivas de Costa da Espada: 6
- Características das novas subclasses: 29
- Expansões estruturadas adicionais: Totens Uthgardt + opções Cervo/Tigre
- Registros-base de magias/poderes: 718
- Conceitos de magia vindos de Costa da Espada: 4
- Novas linhas de magia criadas: 0 (deduplicação intencional)

## Verificações técnicas

- Todos os arquivos em `js/` e `data/` passaram por `node --check`.
- `manifest.json` validado como JSON.
- 0 IDs duplicados de classe.
- 0 IDs duplicados de subclasse.
- 0 IDs duplicados no catálogo-base de magias/poderes.
- As seis subclasses estão vinculadas às classes-base corretas.
- O Caminho do Guerreiro Totêmico foi ampliado sem criar uma segunda subclasse.
- O filtro `Costa da Espada` retorna exatamente os quatro truques históricos.
- A busca pelos quatro nomes impressos em Costa da Espada resolve para as entradas revisadas correspondentes.

## Teste de navegador

Foi tentada uma inicialização headless do Chromium para screenshot funcional. O processo ficou bloqueado por indisponibilidade do DBus/serviços de sistema do ambiente de execução. Por isso, a validação automática final foi baseada em sintaxe JavaScript, integridade dos dados, execução dos módulos em VM JavaScript e testes programáticos de deduplicação/fonte/busca.
