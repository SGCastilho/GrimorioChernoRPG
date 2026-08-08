# Changelog


## 5.15.0

### Foundry Export — Fase 3

- Adicionada interface de exportação de magias diretamente no Grimório.
- Fichas de magia recebem o botão **Exportar Foundry**.
- Criada pré-validação individual com perfil, status, dados normalizados e diagnóstico de compatibilidade.
- Adicionadas ações **Copiar YAML** e **Baixar YAML**.
- Adicionada exportação em lote pelo **filtro atual** do catálogo, considerando todos os resultados e não apenas a página visível.
- O resumo do lote informa quantidades prontas, em revisão e bloqueadas.
- Itens bloqueados são omitidos do YAML em lote e exibidos no diagnóstico.
- Mantida cobertura da Fase 2: 1.170 analisadas, 1.169 exportáveis, 1.167 prontas, 2 em revisão e 1 bloqueada.
- Criado `js/exporters/foundry-export-ui.js`, carregado após `dynamic-consultation.js`, sem acoplar o `app.js` ao Foundry.
- Adicionados `FOUNDRY_EXPORT_FASE3.md`, `VALIDACAO_FOUNDRY_EXPORT_5.15.md` e `tools/validate-foundry-export-ui.js`.

## 5.14.0

### Foundry VTT — Fase 2

- Fase 0 confirmada no ambiente real Foundry 13.351 / DnD5e 5.3.3 / 5e Item Importer 13.9.1.
- Normalização de magias ampliada de 938 para **1.167 entradas prontas sem alertas**.
- Cobertura final da fase: **1.170 analisadas, 1.169 exportáveis, 2 em revisão editorial e 1 bloqueada**.
- Rituais homologados no fluxo do importer; 43 entradas deixam de exigir revisão apenas por serem rituais.
- Conversão exata de alcances decimais entre unidades compatíveis com os campos inteiros do Strict Spell Template.
- Tempos alternativos e valores explicitamente especiais passam a usar `Special`/`spec`, preservando a redação original.
- Normalização expandida de durações, alvos e áreas; overrides explícitos adicionados para geometrias e quantidades dinâmicas.
- 12 magias Psiônicas de Kibbles recebem classificação técnica Foundry individual, preservando `Psiônica` na descrição exportada.
- `Investida Santificada` permanece bloqueada por ausência do bloco mecânico na fonte; `Geada Divina` e `Chuva de Flechas de Tamamo` permanecem exportáveis com revisão por duração editorial incompleta.
- Adicionados `FOUNDRY_EXPORT_FASE2.md`, `VALIDACAO_FOUNDRY_EXPORT_5.14.md` e bateria de regressão em `tests/foundry-v13/phase2/`.
- O botão de exportação permanece reservado para a Fase 3.

## 5.13.0

### Foundry VTT — Fases 0 e 1

- Criado o perfil `foundry13-dnd5e533-item-importer1391` para Foundry VTT 13.351, DnD5e 5.3.3 e 5e Item Importer 13.9.1.
- Criado `js/exporters/registry.js` para registrar formatos externos sem acoplar o `app.js`.
- Criado `js/exporters/foundry-v13.js` para gerar Strict Spell Template v2 em YAML.
- A conversão cobre escola, nível, V/S/M, materiais e custos, consumo, preparação, ativação, alcance, duração, concentração, alvo, áreas comuns, descrição HTML, níveis superiores e fonte/página.
- Criado `data/export/foundry-v13-overrides.js` para casos especiais revisados.
- Criado kit de prova Fase 0 com cinco magias e lote YAML em `tests/foundry-v13/phase0/`.
- Criados `tools/generate-foundry-phase0.js` e `tools/validate-foundry-export.js`.
- Auditoria dos 8 catálogos atuais: 1.170 magias; 1.157 exportáveis; 938 prontas; 232 com revisão; 13 bloqueadas.
- Bloqueios conhecidos mantidos explícitos: 12 magias de escola Psiônica e uma entrada sem escola informada.
- Botões de exportação permanecem fora da interface até validação real da Fase 0.


## 5.12.0

### Ryoko's Guide to the Yokai Realms — Capítulo 13: Magias

- Integradas e localizadas para PT-BR todas as **62 magias** do Capítulo 13.
- A própria fonte declara que o capítulo contém **44 magias inéditas e 18 provenientes de outras publicações Loot Tavern**; como essa classificação não é individualizada por ficha, nenhuma origem anterior foi atribuída por inferência.
- As 62 entradas são novas em relação ao catálogo atual do Grimório. **Acid Rain / Chuva Ácida** é mantida separada da homônima de KibblesTasty porque as duas possuem nível e mecânicas diferentes.
- Preservadas as listas de classe e as afinidades elementais do Dobrador indicadas nas fichas.
- Preservada a escola opcional **Biomancia** em 7 magias, com a respectiva escola alternativa registrada quando indicada pela fonte.
- **Cloud Stride / Passo pelas Nuvens** marcado como ritual.
- Criado `data/ryoko-spells.js` e registrado o catálogo `ryoko-spells` na fonte `ryoko-yokai-realms`.
- O catálogo-base passa de **1.108 para 1.170 registros**, e o total de catálogos registrados passa de 7 para **8**.
- `tools/validate-project.js` recebeu verificações específicas para as 62 magias de Ryoko, cobertura de nomes, Biomancia, ritual e filtro de fonte.



## 5.11.0

### Ryoko's Guide to the Yokai Realms — Capítulo 9: Classes

- Integrado e localizado para PT-BR o capítulo de classes e subclasses de *Ryoko's Guide to the Yokai Realms*.
- Adicionada a classe **Dobrador (Bender)**, com progressão do 1º ao 20º nível, escolha de Inteligência/Sabedoria/Carisma para conjuração, quatro Afinidades Elementais, Golpes Elementais, Combo Elemental, Forma Primordial e Avatar Primordial.
- Estruturadas as listas elementais do Dobrador e as quatro tabelas de benefícios do Avatar Primordial.
- Integradas as quatro Disciplinas: **Ferocidade, Fortificação, Fusão e Revigoramento**.
- Adicionada a classe **Domador (Tamer)**, reimpressa no próprio livro para consulta, com sistema de receptáculos, doma, companheiros, melhorias, progressão de ND/tamanho e conjuração.
- Estruturada integralmente a tabela **Resumo de Companheiros do Domador**, incluindo limites por nível e melhorias/Dados de Vida para ND 1/2 a ND 6.
- Integrado o paradigma **Sensei**, com Magias de Sensei, Golpes Marciais, nove Técnicas Marciais e aprimoramento de Liberar no 18º nível.
- Integradas **13 subclasses para classes-base**: Caminho do Kaiju; Colégio de Hanabi; Colégio das Máscaras; Domínio do Guardião do Santuário; Círculo dos Yokai; Lâmina Esquelética; Caminho dos Oito Portões; Juramento do Yojimbo; Rōnin; Tamaya; Invocador de Espíritos; O Shinigami; e Shinobi.
- Total da fonte nesta etapa: **2 classes**, **18 entradas de subclasse/especialização**, **99 características de subclasse** e **20 tabelas de subclasse**.
- Regras opcionais de **Ataque Extra Aprimorado** preservadas como referências para Bárbaro, Dobrador, Guerreiro, Monge, Paladino e Patrulheiro, sem sobrescrever automaticamente as regras-base.
- Fonte registrada em `data/sources.js`; adicionados `data/ryoko-classes.js`, `data/ryoko-subclasses.js` e `data/ryoko-optional-features.js`.
- `tools/validate-project.js` recebeu verificações específicas para a integração de Ryoko.
- O projeto passa a possuir **24 classes, 377 subclasses/especializações e 24 progressões estruturadas**; o catálogo de magias permanece em **1.108 registros-base** nesta etapa.


## 5.10.0

### Zagalhta's Exolunar Collection — Capítulo 7: Magias

- Integradas e localizadas para português brasileiro todas as **63 magias** descritas no Capítulo 7.
- Criado o catálogo registrado `data/zagalhta-spells.js` com **62 novas entradas-base**.
- **Dragonskin / Pele de Dragão** foi reconhecida como reimpressão mecanicamente equivalente à entrada de Lyre; a nova procedência e as listas de classe adicionais foram vinculadas sem duplicar a magia no catálogo.
- As versões **Legacy/5.19** de Cure Wounds, Healing Word, Mass Cure Wounds, Mass Healing Word e Slow foram preservadas como entradas próprias de Zagalhta, mantendo as alterações mecânicas da fonte separadas das versões oficiais.
- Preservados os grupos **Arsenal Temível de Ahma, Astromancia, Eidomancia, Encarnações de Milarose e Legado de Oyd** como traços pesquisáveis.
- Preservadas regras específicas como Bônus de Astromancia, Bônus do Cavaleiro Dracônico, Queima de Eidomancia, Fadiga de Combate, Pegada e efeitos de gravidade zero.
- As listas de classe das páginas finais do capítulo foram aplicadas às entradas, e a lista de magia do Cavaleiro Dracônico foi cruzada com o Capítulo 6.
- `Summon Belzer / Invocar Belzer` está marcado como ritual.
- O filtro de fonte de Zagalhta retorna **63 magias**, embora o catálogo próprio contenha 62 entradas, por incluir a reimpressão vinculada de Pele de Dragão.
- O Grimório passa a possuir **1.108 registros-base de magias/poderes** e **7 catálogos registrados**.
- `tools/validate-project.js` recebeu validações específicas para a cobertura integral do Capítulo 7.

## 5.9.0

- Integra as duas classes do Capítulo 6 de *Somnus Domina — Zagalhta's Exolunar Collection*: **Cavaleiro Dracônico** (*Dragoneer*) e **Piloto de Frame** (*Frame Pilot*), ambas integralmente localizadas para PT-BR.
- Adiciona progressões estruturadas do 1º ao 20º nível para as duas classes.
- Preserva a arquitetura incomum do Cavaleiro Dracônico, em que o **Conceito Central** determina Dados de Vida, salvaguardas, proficiências e tipo de progressão de magia.
- Integra os **9 Conceitos Centrais** do Cavaleiro Dracônico e os **19 Tipos de Encarnação** descritos pela classe.
- Integra as **5 Designações Tecnológicas** do Piloto de Frame e preserva as regras de frame unit, Junção, Crescimento e Aprimoramento Inerente.
- Integra **36 subclasses adicionais** do capítulo para 16 classes já presentes no Grimório.
- Totaliza **50 novas entradas de subclasse/especialização** de Zagalhta e eleva o projeto para **359 subclasses**.
- Vincula à nova classe Cavaleiro Dracônico as três subclasses já incorporadas de *Blade, Bone, & Benefit*: Golpeador Sombrio, Véu da Fortuna e Cavaleiro da Escama Fásica.
- Estrutura **256 características** e **30 tabelas** entre as novas especializações e subclasses de Zagalhta.
- Preserva as **Compulsões dos Fardos** de Destimus, Jalasaor, Ombra, Setanta, Sihlu e Zega como blocos complementares das subclasses de Alma Favorecida.
- Mantém os nomes originais em inglês como aliases pesquisáveis, com apresentação e regras de consulta em português brasileiro.
- Mantém as magias do Capítulo 7 de Zagalhta fora do escopo desta versão.

## 5.8.0

- Integra a classe **Ministro de Sangue** do Capítulo IX de *Somnus Domina — Blade, Bone, & Benefit*, incluindo criação, fundamentos, 17 características catalogadas e tabela de progressão do 1º ao 20º nível.
- Integra as **8 Seitas Genéticas** do Ministro de Sangue.
- Integra as **55 subclasses efetivamente enumeradas** pelo índice do Capítulo X, com 339 características de subclasses estruturadas no total da fonte.
- Estrutura **12 tabelas complementares** de magias de domínio, círculo, capítulo, juramento e listas expandidas, preservando-as na aba de Tabelas e na visão geral.
- Preserva também as regras sem nível próprio das subclasses, incluindo **Compulsões dos Fardos**, **Preceitos dos Juramentos** e as **Relíquias dos Caminhos do Santo da Espada**.
- Documenta a divergência interna do livro: o sumário anuncia 59 subclasses no Capítulo X, mas as páginas de índice do capítulo enumeram 55.
- Preserva as três subclasses de **Dragoneer** como conteúdo consultável com classe-base externa pendente, sem fabricar a classe ausente; a fonte remete o Dragoneer a *Zagalhta’s Exolunar Collection*.
- Mantém **Fardo de Gotham** e **Fardo de Scorn** como versões próprias de *Blade, Bone, & Benefit* devido às mudanças mecânicas presentes no compêndio.
- Adapta barra lateral, busca rápida e página de subclasse para lidar com subclasses cuja classe-base ainda não foi incorporada.
- Mantém intacta a integração de 108 magias de *Blade, Bone, & Benefit* feita na versão 5.7.

## 5.7.0

- Integra o Capítulo XI — Biblioteca de Magias de *Somnus Domina — Blade, Bone, & Benefit*.
- Adiciona 48 novas entradas de magia localizadas para PT-BR.
- Vincula 60 reimpressões às entradas de Lyre já existentes como nova procedência, evitando duplicação na pesquisa.
- Preserva os seis grupos de magia do capítulo como traços pesquisáveis.
- Preserva integralmente os modelos de Espírito Fantasma e Assistente Morto-Vivo nas magias de conjuração correspondentes.
- Inclui fontes secundárias na busca textual e na ficha detalhada das magias, de forma genérica para futuras integrações.
- Mantém classes e subclasses do compêndio fora do escopo desta versão, conforme a etapa solicitada.

## 5.6.0

- Criado `js/registry.js`, responsável pelo registro central de fontes e catálogos.
- Criado `data/sources.js`, que concentra nomes, aliases, rótulos de filtro, ordem e textos de apresentação das fontes.
- Os cinco catálogos atuais de magia agora se registram por `GRIMORIO_REGISTRY.registerSpellCatalog(...)`.
- `allSpells()` deixou de enumerar manualmente PHB, Xanathar, Tasha, Spell Compendium e Lyre.
- Agrupamento e filtro de fontes passaram a ser resolvidos pelo registro central, incluindo Costa da Espada, Magia de Sangue e Poder Psiônico.
- Tela inicial, resumo do catálogo e página Sobre deixaram de conter listas fixas de livros.
- Adicionado `tools/validate-project.js`, que valida carregamento dos dados, fontes, catálogos, IDs, vínculos de subclasses e progressões.
- Validação da versão confirma 19 classes, 246 subclasses, 19 progressões e 998 registros-base, sem erros ou avisos.

## 5.5.0

- Corrigido o painel **Fundamentos da classe** das quatro classes de Retia: Dado de Vida, PV de 1º nível, PV dos níveis seguintes, proficiências e equipamento voltam a ocupar seus campos corretos.
- Integradas **127 subclasses** de *Lyre's Guide to Retia — Land of Industry*, todas localizadas para PT-BR.
- Adicionados os 19 Fardos Cósmicos da Alma Favorecida, 12 Intenções Autorais do Inscritor, 14 Epítetos do Cavaleiro das Pétalas e 12 Caminhos de Devoção do Santo da Espada.
- Adicionados 63 arquétipos para as classes-base, incluindo os 7 arquétipos apresentados para o Patrulheiro Revisado.
- Os arquétipos do Patrulheiro Revisado foram ligados à classe Patrulheiro existente com indicação explícita de compatibilidade com a revisão de Lyre.
- Nomes originais em inglês foram preservados como aliases pesquisáveis; regras e descrições ficam em português.
- Total de subclasses do projeto aumentado de 119 para **246**.

## 5.4.0

- Integração das quatro classes originais de Lyre's Guide to Retia em português brasileiro: Alma Favorecida, Inscritor, Cavaleiro das Pétalas e Santo da Espada.
- Progressões estruturadas completas de 1º a 20º nível para as quatro novas classes.
- Adicionado catálogo de 26 Inscrições do Inscritor.
- Criados sigilos e cores próprios para as novas classes.
- Mantidas as subclasses de Retia fora desta etapa, conforme o escopo definido. O Patrulheiro Revisado também ficou fora por ser apresentado pela fonte como uma alternativa à classe existente, não uma das quatro classes novas.

## 5.3.0

- Integradas 280 entradas de magia de **Lyre's Guide to Retia — Land of Industry**.
- Todo o conteúdo de consulta dessas magias foi traduzido para português brasileiro.
- Adicionado `data/lyre-spells.js` como módulo separado e totalmente offline.
- Adicionado o filtro de fonte **Lyre's Guide to Retia**.
- Incluídas nas entradas afetadas as regras globais de **Convocação Cromática** e **Eidomancia**, necessárias para interpretar corretamente essas magias.
- Preservadas as revisões Legacy/5.19 como regras próprias da fonte, sem substituir silenciosamente as versões oficiais existentes.
- Preservadas lacunas explícitas do PDF, incluindo a duração não informada de **Chuva de Flechas de Tamamo**.
- Nenhuma classe ou subclasse de Retia foi adicionada nesta etapa.

## 5.1.0

- Integrado o conteúdo de subclasses e magias do **Caldeirão de Tasha para Tudo**.
- Adicionada a classe **Artífice**, com tabela de progressão real de 20 níveis e quatro especializações.
- Adicionadas 30 subclasses e 167 características de subclasse.
- Adicionadas 21 magias novas de Tasha em português.
- Adicionadas 13 tabelas auxiliares estruturadas.
- Catálogo de magias passa a reconhecer a fonte **Caldeirão de Tasha**.
- Verificada ausência de IDs e nomes duplicados nas novas entradas.
- Documentadas divergências internas do PDF sem substituir silenciosamente a fonte.

## 5.0.0

- Incorporadas 31 subclasses do Guia de Xanathar para Todas as Coisas.
- Estruturadas 165 características de subclasses e 10 tabelas auxiliares.
- Incorporadas 95 magias do Capítulo 3 em português.
- Adicionado o agrupamento/filtro de fonte Guia de Xanathar.
- Verificados IDs únicos entre os catálogos do Livro do Jogador, Xanathar e Spell Compendium.
- Corrigidos artefatos de OCR detectados nas novas magias e em mudanças de página/coluna das subclasses.
- Corrigido o carregamento de `homebrew-paladin-bahamut.js` no arquivo principal.
- Versão principal elevada para 5.0.0 devido à expansão ampla do compêndio.

## 4.8.0

- Incorporadas as 361 magias do Livro do Jogador de D&D 5e 2014 em português.
- O catálogo do Livro do Jogador passou a ser local e offline, sem dependência de sincronização SRD.
- Adicionadas as magias ausentes do SRD, incluindo Braços de Hadar.
- Reconstruídas as associações de classes a partir das listas de magia do Capítulo 11.
- Adicionadas páginas de origem a todas as magias oficiais.
- Catalogadas e documentadas três divergências internas de metadados no PDF: Falar com Plantas, Muralha de Pedra e Telepatia.
- Validada a unicidade das 361 magias oficiais.

## 4.7.0

- Criados ícones exclusivos em SVG para cada escola de magia, seguindo a linguagem visual do Grimório.
- Aplicados os ícones de escola em todas as magias da listagem principal.
- Cabeçalhos das páginas de magia agora usam o ícone correspondente à escola da magia.
- Busca rápida (Ctrl+K) de magias agora exibe os ícones corretos por escola.
- Reorganizada a meta das linhas de magia para mostrar escola, nível, ritual, concentração e fonte com melhor legibilidade.

## 4.6.0

- Corrigida a quebra e contenção de fontes longas nos cartões de subclasses.
- Removidos os banners “Consulta completa” das páginas de classe e subclasse.
- Removidos da interface os botões Exportar, Importar e Sincronizar.
- Removido do painel principal o cartão de status do cache/tradução das magias.
- Ajustados os textos de armazenamento para refletir a interface atual.

## 4.5.0

- Adicionada a classe Spellblade v1.3 integralmente em PT-BR.
- Adicionadas nove subclasses/técnicas com progressões próprias.
- Adicionada progressão estruturada de 20 níveis.
- Adicionados 32 efeitos de Égide como dados reais.
- Adicionada lista de magias da classe e tabelas de magias das técnicas.
- Preservadas e documentadas inconsistências internas de nomenclatura entre a tabela e o texto da Égide.
- Adicionada atribuição CC-BY-4.0 de KibblesTasty.
- Corrigido o carregamento do catálogo Spell Compendium no HTML principal.
