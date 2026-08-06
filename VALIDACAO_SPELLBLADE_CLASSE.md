# Validação da classe Spellblade — Grimório 4.5

## Escopo incorporado

- Fonte: `SpellbladeV1.3-compressed(3).pdf`, 19 páginas.
- Classe: Spellblade.
- Progressão: 20 níveis completos.
- Técnicas/subclasses: 9.
- Características centrais da classe: 18.
- Referências adicionais de progressão da especialização: 3, nos níveis 7, 15 e 20.
- Características das técnicas: 58 registros estruturados.
- Efeitos de Égide: 32.
- Lista-base da classe: 185 referências distintas a truques e magias.
- Lista combinada, incluindo magias concedidas pelas técnicas: 198 nomes originais distintos.

## Técnicas traduzidas

1. Mago de Batalha — Battlemage
2. Lâmina de Éter — Aether Blade
3. Guardião — Guardian
4. Lâmina Veloz — Swiftblade
5. Caçador de Magos — Mage Hunter
6. Atirador Arcano — Spellshot
7. Lâmina de Geada — Rimeblade
8. Espada Voadora — Flying Sword
9. Punho Mágico — Spellfist

## Verificações executadas

- Todos os arquivos JavaScript passaram em `node --check`.
- A progressão possui exatamente 20 linhas e 10 colunas estruturadas.
- As 32 ocorrências de características na progressão da classe possuem destino clicável.
- Todas as técnicas possuem progressão própria com níveis 3, 7, 15 e 20.
- As tabelas de magias das técnicas possuem cinco linhas cada.
- Os 32 efeitos de Égide possuem nível, nome, pré-requisito e benefício.
- A lista da classe foi integrada ao filtro de magias: magias SRD e magias do Spell Compendium recebem a classe Spellblade quando aparecem na lista do PDF.
- Os textos descritivos da classe, técnicas e Égide não possuem trechos de regras remanescentes em inglês.
- As unidades de distância foram convertidas para metros usando múltiplos usuais de 1,5 metro.
- As artes do PDF não foram incorporadas.

## Terminologia adotada

- Arcane Surge: Surto Arcano
- Spellstrike: Golpe Mágico
- Aegis: Égide
- Magic Trick: Truque Mágico
- Empowered Strike: Golpe Potencializado
- Arcane Recuperation: Recuperação Arcana
- Aether Blade: Lâmina de Éter

## Divergências internas preservadas

O PDF apresenta duas inconsistências relevantes:

- A tabela chama a característica de 10º nível de `Innate Aegis`, enquanto o texto usa `Expanded Aegis`. O Grimório usa **Égide Expandida** e registra a diferença na própria regra.
- A linha de 18º nível repete `Splash Damage` e não cita `Blast Zone Control`, embora esta última característica apareça no texto da classe. A progressão do Grimório mantém a referência ao Dano Colateral e também apresenta **Controle da Zona de Explosão**, sem ocultar a divergência da fonte.
- O limite de espaços sacrificados pela Égide recebe duas formulações no documento. Ambas foram registradas no texto da característica, sem substituir silenciosamente uma pela outra.

## Licença

O texto da classe, subclasses e regras é indicado pela fonte como CC-BY-4.0. A atribuição do Kibbles’ Reference Document foi preservada na página Sobre, no README e nas referências da classe.
