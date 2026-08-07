# Validação — Grimório 5.3 / Magias de Lyre's Guide to Retia

## Escopo desta etapa

Esta etapa incorpora **somente as magias** de *Lyre's Guide to Retia — Land of Industry*. Nenhuma classe ou subclasse de Retia foi adicionada ou alterada como parte desta fase.

O Capítulo XI do livro apresenta a seção **Spells & Magic**, descrita no sumário como contendo quase 300 magias entre conteúdo novo, revisões Legacy e material de publicações anteriores da Nat19. A integração foi feita a partir dos blocos individuais de descrição de magia do capítulo, e não apenas da lista resumida ao final.

## Resultado da extração e localização

- Entradas de magia auditadas e incorporadas: **280**.
- Nomes originais únicos: **280**.
- Nomes localizados em PT-BR únicos dentro do catálogo de Lyre: **280**.
- IDs únicos: **280**.
- Registros-base de magias/poderes no projeto após a integração: **998**.
- Classes do projeto: **15** — inalteradas nesta etapa.
- Subclasses do projeto: **119** — inalteradas nesta etapa.

### Distribuição por nível

| Nível | Entradas |
|---|---:|
| Truques | 16 |
| 1º | 35 |
| 2º | 36 |
| 3º | 49 |
| 4º | 33 |
| 5º | 47 |
| 6º | 17 |
| 7º | 22 |
| 8º | 13 |
| 9º | 12 |
| **Total** | **280** |

## Conteúdo localizado

Cada entrada contém, quando informado pela fonte:

- nome em português brasileiro;
- nome original em inglês como referência secundária;
- nível;
- escola;
- tempo de conjuração;
- alcance convertido para unidades métricas;
- componentes;
- componente material;
- duração;
- ritual;
- concentração;
- classes/listas identificáveis na fonte;
- descrição integral;
- opções de conjuração em níveis superiores;
- grupo/coleção de magia quando aplicável;
- página de origem;
- observações de fonte para lacunas ou regras globais relevantes.

A varredura automática de campos de consulta não encontrou resíduos fortes de instruções mecânicas em inglês, como `saving throw`, `spell slot`, `Casting Time`, `feet`, `Instantaneous` ou `At Higher Levels`.

## Regras de grupos de magia

O livro define grupos que não são apenas classificações narrativas. Por isso, as regras com impacto mecânico foram anexadas às entradas afetadas:

- **Convocação Cromática** — 12 magias recebem a definição de energia/dano cromático e a regra de **Queima da Alma**.
- **Eidomancia** — 14 magias recebem as regras de dano eidólico, teste de Eidomancia/queima e reforço arcano para concentração.

Os demais grupos foram mantidos como etiquetas localizadas porque sua seção de origem é predominantemente contextual ou de procedência do conhecimento mágico.

## Revisões Legacy / 5.19

A fonte contém numerosas magias identificadas como **Legacy** e explica que algumas são versões modificadas de magias de 5e, inclusive com mudanças de nome e de mecânica.

Essas entradas foram preservadas como **versões próprias de Lyre/5.19**, com IDs e fonte independentes. Elas não substituem silenciosamente as versões do Livro do Jogador, Xanathar ou Tasha já existentes no Grimório. Isso permite consultar lado a lado as regras oficiais e a revisão utilizada em Somnus Domina.

## Lacunas e artefatos da fonte preservados

- **Chuva de Flechas de Tamamo (Tamamo's Arrowfall):** o bloco da magia não informa duração. O Grimório mostra `Não informada no PDF` em vez de presumir um valor.
- **Geada Divina (Divine Frost):** o PDF registra `Concentration, up to 1` sem unidade de tempo. O Grimório informa explicitamente que a unidade não é fornecida.
- **Meteoro Cadente (Falling Meteor):** um rótulo `Range` duplicado durante a extração foi corrigido pela conferência do bloco, resultando em `Pessoal (raio de 4,5 metros)`.
- **Mansão Magnífica (Magnificent Mansion):** durante a extração bruta, o bloco havia sido anexado ao texto de nível superior da magia anterior. A entrada foi separada, reconstruída e conferida como uma magia própria de 7º nível.

## Validação técnica

- `node --check` executado em todos os arquivos de `js/` e `data/`: **sem erros de sintaxe**.
- Carregamento dos módulos de dados em uma VM JavaScript: **15 classes, 119 subclasses e 998 registros-base de magias/poderes**.
- IDs duplicados entre Livro do Jogador, Xanathar, Tasha, Spell Compendium e Lyre: **0**.
- `data/lyre-spells.js`: **280 entradas**.
- Referências de Costa da Espada restauradas no `index.html`, preservando integralmente o conteúdo da versão 5.2.
- O módulo de Lyre é carregado diretamente do projeto e funciona offline.

## Arquivo de dados

```text
data/lyre-spells.js
```

Classes e subclasses de *Lyre's Guide to Retia* permanecem fora do escopo desta versão e poderão ser incorporadas nas próximas fases.
