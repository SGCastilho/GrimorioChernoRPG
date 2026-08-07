# Validação — Zagalhta's Exolunar Collection: Classes e Subclasses — v5.9

## Escopo

Integração do **Capítulo 6 — Class Options** de *Somnus Domina — Zagalhta's Exolunar Collection*.

Esta etapa incorpora somente classes, especializações e subclasses. O Capítulo 7 — Spells permanece fora do escopo da v5.9.

## Classes incorporadas

### Cavaleiro Dracônico (Dragoneer)

- Classe-base estruturada do 1º ao 20º nível.
- Nome original preservado como alias pesquisável.
- 9 Conceitos Centrais integrados como opções de especialização:
  - Aurófago
  - Tecelão de Sangue
  - Dínamo Rompedor
  - Filho do Destino
  - Dançarino Demoníaco
  - Voz Ecoante
  - Mão Perfurante
  - Titã Furioso
  - Varredor Real
- 19 Tipos de Encarnação estruturados como dados reais.
- As quatro progressões possíveis de conjuração — Conjurador Completo, Meio Conjurador, Um Terço de Conjurador e Conjurador de Queima — foram preservadas nas tabelas da classe.
- As três opções de Cavaleiro Dracônico já incorporadas de *Blade, Bone, & Benefit* agora apontam para esta classe e não possuem mais classe-base pendente.

### Piloto de Frame (Frame Pilot)

- Classe-base estruturada do 1º ao 20º nível.
- Crescimento e Aprimoramento Inerente mantidos na progressão.
- 5 Designações Tecnológicas integradas:
  - Coordenador
  - Escaramuçador
  - Soldado de Assalto
  - Tecnocarregador
  - Manipulador de Vórtice
- Regras de Frame Boost, Frame Proficiency, reparo e Junção preservadas conforme a fonte.

## Subclasses adicionais

Foram integradas **36 subclasses** adicionais para as classes já existentes no Grimório:

- Bárbaro: 1
- Bardo: 2
- Clérigo: 3
- Druida: 2
- Alma Favorecida: 6
- Guerreiro: 2
- Inscritor: 2
- Monge: 1
- Paladino: 2
- Cavaleiro das Pétalas: 2
- Patrulheiro: 2
- Ladino: 2
- Feiticeiro: 2
- Santo da Espada: 3
- Bruxo: 2
- Mago: 2

As Compulsões dos Fardos de Destimus, Jalasaor, Ombra, Setanta, Sihlu e Zega foram mantidas como blocos complementares das respectivas subclasses.

## Totais da integração

- 2 novas classes.
- 50 novas entradas de especialização/subclasse:
  - 9 Conceitos Centrais.
  - 5 Designações Tecnológicas.
  - 36 subclasses adicionais.
- 256 características de especialização/subclasse estruturadas.
- 30 tabelas estruturadas.
- 20 níveis de progressão para cada uma das duas novas classes.
- 3 subclasses antigas de Cavaleiro Dracônico relinkadas à nova classe-base.

## Totais do Grimório v5.9

- 22 classes.
- 359 subclasses/especializações.
- 22 progressões estruturadas.
- 12 fontes registradas.
- 6 catálogos de magia.
- 1046 registros-base de magias/poderes.

## Convenções editoriais

- Nomes de classe, subclasse, características e textos de consulta foram localizados para português brasileiro.
- `originalName` e aliases preservam a nomenclatura inglesa para pesquisa.
- Termos mecânicos próprios da 5.19 não foram convertidos silenciosamente para regras diferentes de D&D 5e básico.
- Astromancia, Fadiga de Combate, aceleração 0-G, Cargas Arcanas, Junção, Dado de Favor, Bônus de Favor e demais subsistemas permanecem identificáveis quando necessários para interpretar a regra.

## Validação automática

Comando executado:

```bash
node tools/validate-project.js
```

Resultado esperado da v5.9:

```text
✓ 12 fontes registradas
✓ 6 catálogos de magias registrados
✓ 1046 registros-base de magias/poderes validados
✓ 22 classes e 359 subclasses com IDs verificados
✓ 22 progressões estruturadas verificadas
✓ Blade, Bone, & Benefit: 1 classe, 8 Seitas Genéticas, 55 subclasses do Capítulo X, 339 características, 12 tabelas e 12 blocos complementares verificados
✓ Zagalhta: 2 classes, 9 Conceitos Centrais, 5 Designações Tecnológicas, 36 subclasses adicionais, 256 características e 30 tabelas verificados
✓ Agrupamento de fontes das magias verificado

Validação aprovada sem avisos.
```
