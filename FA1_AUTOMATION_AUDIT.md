# FA-1 — Auditoria de automação dos Talentos · Grimório 5.42.0

Contrato: `grimorio-foundry-feat-automation-plan@1`  
Alvo: Foundry 13.351 · DnD5e 5.3.3 · Importer mínimo 0.12.0

## Resumo

- Talentos/perfis: **42**
- Cobertura completa: **6**
- Cobertura parcial: **36**
- Advancements: **28**
- Effects: **10**
- Activities: **22**
- Perfis com Uses: **2**
- Requisitos de Runtime: **56**
- Limitações explícitas: **37**

## Matriz 42/42

| Talento | Tier | Adv | Eff | Act | Uses | Runtime |
|---|---:|---:|---:|---:|---:|---:|
| Adepto Elemental | partial | 1 | 0 | 0 | 0 | 2 |
| Adepto Marcial | partial | 1 | 0 | 0 | 1 | 1 |
| Alerta | partial | 0 | 1 | 0 | 0 | 2 |
| Ambidestro | partial | 0 | 1 | 1 | 0 | 1 |
| Atacante Bestial | partial | 0 | 0 | 1 | 0 | 1 |
| Atirador Aguçado | partial | 0 | 0 | 1 | 0 | 3 |
| Atirador de Magia | partial | 1 | 0 | 0 | 0 | 2 |
| Atleta | partial | 1 | 0 | 0 | 0 | 3 |
| Ator | partial | 1 | 0 | 1 | 0 | 1 |
| Combatente Montado | partial | 0 | 0 | 1 | 0 | 2 |
| Conjurador de Guerra | partial | 0 | 0 | 1 | 0 | 2 |
| Conjurador de Ritual | partial | 2 | 0 | 0 | 0 | 1 |
| Curandeiro | partial | 0 | 0 | 2 | 0 | 1 |
| Duelista Defensivo | partial | 0 | 1 | 1 | 0 | 1 |
| Especialista em Besta | partial | 0 | 0 | 1 | 0 | 2 |
| Especialista em Briga | partial | 1 | 1 | 1 | 0 | 0 |
| Explorador de Cavernas | partial | 0 | 0 | 0 | 0 | 4 |
| Imobilizador | partial | 0 | 0 | 1 | 0 | 2 |
| Iniciado em Magia | partial | 3 | 0 | 0 | 0 | 1 |
| Investida Poderosa | partial | 0 | 0 | 2 | 0 | 1 |
| Líder Inspirador | partial | 0 | 0 | 1 | 0 | 1 |
| Maestria em Arma de Haste | partial | 0 | 0 | 1 | 0 | 1 |
| Maestria em Armadura Média | partial | 0 | 1 | 0 | 0 | 1 |
| Maestria em Armadura Pesada | partial | 1 | 1 | 0 | 0 | 1 |
| Matador de Conjuradores | partial | 0 | 0 | 1 | 0 | 3 |
| Mente Afiada | partial | 1 | 0 | 0 | 0 | 0 |
| Mestre de Armas | full | 2 | 0 | 0 | 0 | 0 |
| Mestre de Armas Grandes | partial | 0 | 0 | 1 | 0 | 2 |
| Mestre de Escudo | partial | 0 | 0 | 2 | 0 | 2 |
| Mobilidade | partial | 0 | 1 | 0 | 0 | 2 |
| Observador | partial | 1 | 2 | 0 | 0 | 0 |
| Perito | full | 1 | 0 | 0 | 0 | 0 |
| Poliglota | partial | 2 | 0 | 0 | 0 | 0 |
| Proteção Leve | full | 2 | 0 | 0 | 0 | 0 |
| Proteção Moderada | full | 3 | 0 | 0 | 0 | 0 |
| Proteção Pesada | full | 2 | 0 | 0 | 0 | 0 |
| Resiliente | partial | 1 | 0 | 0 | 0 | 0 |
| Resistente | partial | 1 | 0 | 0 | 0 | 1 |
| Robusto | full | 0 | 1 | 0 | 0 | 0 |
| Sentinela | partial | 0 | 0 | 1 | 0 | 3 |
| Sorrateiro | partial | 0 | 0 | 0 | 0 | 3 |
| Sortudo | partial | 0 | 0 | 1 | 1 | 3 |

## Política

- O arquivo editorial de Talentos não contém objetos Foundry brutos.
- O bundle v2 transporta uma intenção mecânica declarativa; o Importer 0.12+ será responsável por traduzi-la para documentos DnD5e 5.3.3.
- Bônus condicionais não são convertidos em efeitos globais.
- Lacunas da fonte permanecem lacunas; a automação não cria benefícios ausentes.
- A RC 0.11.0-rc.1 permanece congelada e não consome o schema v2.
