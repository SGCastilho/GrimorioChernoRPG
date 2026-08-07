# Validação — Grimório 5.4 / Classes de Lyre's Guide to Retia

## Escopo desta etapa

A seção **New Classes** do Capítulo 8 apresenta quatro classes novas. Esta versão integra somente essas quatro classes-base, em português brasileiro:

1. **Alma Favorecida** (*Favored Soul*)
2. **Inscritor** (*Inscriptor*)
3. **Cavaleiro das Pétalas** (*Petal Knight*)
4. **Santo da Espada** (*Sword Saint*)

O **Patrulheiro Revisado** (*Ranger Revised*) não foi incluído nesta fase. A própria fonte o descreve como uma alternativa independente/revisão da classe Patrulheiro existente, e não como uma das quatro classes novas. Ele poderá ser incorporado em uma etapa separada caso desejado.

As opções que funcionam como subclasses — **Fardos Cósmicos**, **Intenções Autorais**, **Epítetos** e **Caminhos de Devoção** — também não foram incluídas nesta fase. As classes registram apenas os níveis em que essas escolhas concedem características, para que a progressão já esteja preparada para a próxima etapa.

## Conteúdo estruturado

- 4 classes novas.
- 80 linhas de progressão, exatamente 20 por classe.
- 84 referências clicáveis de características nas quatro tabelas de progressão, todas com destino válido.
- 26 Inscrições do Inscritor estruturadas em uma tabela real.
- Fundamentos, proficiências, equipamentos, criação e características-base em português brasileiro.
- Sigilos e cores próprios para as quatro classes.
- Regras de Magia de Pacto e demais mecânicas 5.19 preservadas conforme a fonte.

## Classes

### Alma Favorecida

Inclui a progressão de Magias Preparadas, Magias Conhecidas, Espaços de Pacto e Nível do Espaço, além de Fardo Cósmico, Magia de Pacto, Essência Divergente, Purificação, Estilo de Luta, Foco/Expansão/Maestria da Essência, Coroa do Esplendor e Verdadeiro Manto Divino.

### Inscritor

Inclui Truques, Magias Conhecidas, Espaços de Pacto, Nível do Espaço e número de Inscrições. O catálogo de Inscrições está em dados estruturados e pode ser consultado na aba de tabelas da classe.

### Cavaleiro das Pétalas

Inclui Magias Conhecidas, Espaços de Pacto, Nível do Espaço, Ramos Virtuosos, Flora Virtuosa, Magia Florescente, Aura de Dignidade, Resplandecência e Paragão da Proteção.

**Lacuna preservada:** a tabela impressa deixa vazia a célula de quantidade de Espaços de Pacto no 16º nível. O Grimório registra `—` nesse campo e não infere um valor.

### Santo da Espada

Inclui Pontos de Foco, limite de Foco por turno, cinco Técnicas de Foco básicas, Surto do Dragão, Ataque Extra, Aprimoramento de Estilo de Luta, Maestria Florescente, Vínculo com a Arma Santa, Alma de Luxus e Lenda Inabalável.

## Verificações executadas

- `node --check` executado em todos os 21 arquivos JavaScript de `js/` e `data/`: **sem erros de sintaxe**.
- `manifest.json` validado como JSON.
- Total do projeto: **19 classes**, **119 subclasses** e **19 progressões de classe**.
- IDs das classes: **sem duplicações**.
- IDs das subclasses existentes: **sem duplicações**.
- Cada uma das quatro classes de Retia possui exatamente 20 linhas de progressão.
- 84/84 rótulos de características nas novas progressões encontram um destino clicável na classe.
- Catálogo do Inscritor: **26 inscrições**.
- Total de magias/poderes-base permanece **998**; esta etapa não alterou o catálogo de magias.

## Arquivos principais desta integração

- `data/lyre-classes.js`
- `js/config.js`
- `index.html`
- `README.md`
- `manifest.json`
