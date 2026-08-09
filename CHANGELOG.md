## 5.28.0

- Adicionada **Animar Energia (Animate Energy)** ao catálogo do **Cultivador**, traduzida diretamente da captura de tela fornecida pelo usuário.
- Criado `data/cultivator-homebrew-spells.js`, com catálogo `cultivator-homebrew-spells` e fonte `cultivator-homebrew-spells` (**Magias Homebrew — Cultivador**).
- Preservados: Necromancia de 1º nível (ritual), conjuração de 1 minuto, alcance de 9 m, componentes V/S/M, duração instantânea, comando a 18 m, limite base de 2 criaturas e escalonamento até o teto de 4 descrito pela fonte.
- A ausência de estatísticas do servo morto-vivo/esfera necromântica foi documentada sem criação de mecânicas inferidas.
- Atualizada a referência `MAGIAS EXTERNAS DA LISTA` do Cultivador: **Animate Energy** deixa de ser tratado como ficha indisponível.
- Catálogo passa a **1.171 registros-base**, **9 catálogos de magia** e **16 fontes registradas**.
- Readiness Foundry de magias passa para **1.170 exportáveis**, **1.168 prontas**, 2 em revisão e 1 bloqueada; **Animar Energia** é exportável sem avisos.
- Grimório Importer embutido sincronizado para **0.9.3** e removido do exporter o aviso obsoleto de incompatibilidade do Lutador de Rua.
- Adicionado `tools/validate-cultivator-homebrew-spell-5.28.js`.

## 5.27.0

- Integrada a classe homebrew original **Lutador de Rua** a partir do PDF fornecido pelo usuário.
- Adicionada progressão completa do 1º ao 20º nível, incluindo **Dado de Briga** de 1d6 a 1d12.
- Estruturados **62 registros de características/opções**, com **Cólera**, Surtos de Cólera e **20 Essências de Cólera selecionáveis**.
- Adicionado o Arquétipo de Rua **Dragão de Dojima** com características nos níveis 3, 6, 11 e 17, preservando Rush Style, Beast Style e Dragon Style.
- Registradas notas editoriais para lacunas explícitas da fonte: Ataque Extra, Incremento de Habilidade e Essência Adicional não recebem mecânicas externas ao PDF.
- Registradas as inconsistências nominais **Deita Tigre / Queda do Tigre** e **Essência do Deita Tigre** sem criar conteúdo adicional.
- Registrada nova fonte `street-fighter-homebrew`; total de fontes passa para **15**.
- Catálogo passa para **26 classes, 381 subclasses/especializações e 26 progressões estruturadas**.
- Exporter de classes recebe identificador estável `street-fighter` e aviso de compatibilidade: o **Grimório Importer 0.9.2** ainda não possui perfil nativo para a nova classe.
- Adicionado `tools/validate-street-fighter-5.27.js`.

## 5.26.0

- Integrada a classe **Cultivador (Cultivator)** em PT-BR a partir do PDF do D&D Wiki fornecido pelo usuário.
- Adicionada progressão completa do 1º ao 20º nível com Qi, Nível de Magia e Limite de Amplificação.
- Estruturados **22 blocos de características da classe**, **10 tabelas** e referências de multiclasse/regras opcionais/editoriais.
- Adicionados **3 Chamados à Divindade** — Chamado do Mal, Chamado Acromático e Chamado do Céu — com **19 características** e **3 tabelas de magias de Chamado**.
- Preservados Núcleo da Alma, seis tipos de Qi, Magias da Alma, Ritual de Coleta de Almas, Dados de Alma, Amplificação, Autoridade Divina e as demais regras de alto nível.
- Preservada explicitamente a inconsistência da fonte na tabela de Amplificação da Alma e o cabeçalho sem regra `Sweeping Soul Shaping`; nenhuma regra foi inventada para magias externas citadas sem bloco mecânico no PDF.
- Registrada nova fonte `dandwiki-cultivator`; total de fontes passa para **14**.
- Catálogo passa para **25 classes, 380 subclasses/especializações e 25 progressões estruturadas**.
- Bundles Foundry passam para **405**; características de origem passam para **2.411** e características materializadas para **2.329**.
- Atualizado **Grimório Importer para 0.9.2**, com perfil `cultivator`, seleção de Chamado no 6º nível e sem criação de spell slots nativos para o sistema de Qi.
- Adicionado perfil parcial para **Autoridade Divina**, com Activity de ação e rolagem `1d100`; a recarga condicional permanece manual.
- Cobertura de automação passa para **72 perfis**, **87 Activities**, 37 recursos/usos e 11 Active Effects.
- Auditoria atualizada: 72 perfiladas, 292 candidatas de alta prioridade, 732 médias e 1.315 predominantemente textuais/contextuais.
- Adicionado `tools/validate-cultivator-5.26.js` e novos artefatos/roteiros de validação do Cultivador.

## 5.25.1

- Atualizado o **Grimório Importer para 0.9.1**.
- Adicionada organização hierárquica nativa ao compêndio **Grimório — Características**: uma pasta por classe e uma subpasta por subclasse/especialização.
- Características de classe são sincronizadas diretamente na pasta da classe; características de subclasse são sincronizadas na subpasta correspondente.
- Adicionadas flags estáveis às pastas gerenciadas (`classIdentifier`, `subclassGrimorioId`, `folderRole`) para permitir atualização sem depender do nome visual da pasta.
- Reimportações migram Items gerenciados existentes para a pasta correta sem recriar documentos e sem alterar UUIDs.
- Títulos de características originalmente em caixa-alta agora são normalizados para capitalização natural em PT-BR; IDs, `featureKey`, `system.identifier` e matching de automação continuam baseados nos dados estáveis anteriores.
- Preservados acrônimos de uso comum como **CA**, **CD**, **PV**, **HP**, **XP**, **VTT**, **NPC** e **PC**.
- Registrada a homologação real da Fase 12 após confirmação do usuário.
- Criado `tools/validate-foundry-organization-5.25.1.js`, validando 24 pastas de classe, 377 subpastas de subclasse, 2.293 características, migração, reimportação e estabilidade de UUIDs.

## 5.25.0

### Fase 12 — expansão e auditoria da automação

- Atualizado o **Grimório Importer para 0.9.0** e o schema de automação para v3.
- Expansão para **71 perfis**: 59 de classe e 12 de subclasse, representando todas as 24 famílias de classe.
- Cobertura declarativa de **86 Activities, 37 recursos/usos e 11 Active Effects**.
- Matching de subclasse por bundle ID exato para impedir colisões entre características homônimas.
- Adicionada recuperação parcial por fórmula para recursos, incluindo Canalização de Foco.
- Implementados recursos compartilhados e Activities adicionais para Bardo, Bruxo, Clérigo, Druida, Feiticeiro, Mago, Artífice e classes homebrew do Grimório.
- Primeiros perfis dirigidos de subclasses: Arquifada, Corruptor, Guerra, Luz, Lua, Magia Selvagem, Mestre de Batalha, Ladrão, Adivinhação, Mão Aberta, Vingança e Kaiju.
- Auditoria automática das **2.370 características** com classificação de candidatos para expansão futura.
- Novo comando `/grimorio-auditoria-automacao`.
- Registrada a homologação real da Fase 11; Fase 12 permanece pendente de teste real.

## 5.24.0

### Fase 11.2 — Active Effects seguros e expansão da automação

- Atualizado o **Grimório Importer para 0.8.0**.
- `feature-automation.js` evoluiu para schema 2 e passa a gerar Active Effects com IDs estáveis e flags de gerenciamento.
- Cobertura ampliada para **25 perfis**, **6 classes representativas**, **23 Activities**, **6 recursos** e **8 Active Effects**.
- Implementados 6 efeitos passivos/transferíveis e 2 efeitos temporários aplicados por Activities.
- Fúria: vantagem em testes/salvaguardas de Força e resistência a contundente, perfurante e cortante; dano/restrição de conjuração/término continuam manuais.
- Defesa Paciente: consumo de Chi preservado, efeito próprio temporário, status `dodging` e vantagem em salvaguardas de Destreza.
- Instinto Selvagem e Explorador Natural: vantagem passiva em iniciativa.
- Estilo de Luta — Arquearia: +2 a ataques `rwak` para Guerreiro e Patrulheiro.
- Pureza Corporal: imunidade a doença, condição Envenenado e dano de veneno; Saúde Divina: imunidade a doença.
- Patrulheiro: Pés Rápidos e Desaparecer recebem Activities de ação bônus.
- Destruição Divina Aprimorada recebe Activity manual de 1d8 radiante para evitar bônus global excessivo.
- Auras de Proteção/Coragem, propagação de efeitos a aliados e efeitos condicionais de ataque continuam fora da automação automática por segurança.
- Reimportação preserva UUIDs e IDs internos dos Active Effects; nenhum Item de Mundo é criado.
- Atualizados manifestos, documentação e validação da Fase 11.2.

## 5.23.0

### Fase 11.1 — primeira camada de automação mecânica de características

- Atualizado o **Grimório Importer para 0.7.0**.
- Adicionado `foundry/grimorio-importer/scripts/feature-automation.js` com perfis de automação auditáveis por característica.
- Implementados **16 perfis** em cinco classes representativas: Bárbaro, Guerreiro, Ladino, Monge e Paladino.
- Os perfis geram **20 Activities nativas** e **6 reservas/usos**, usando recuperação e consumo nativos do DnD5e quando seguro.
- Criados três tiers: `full`, `partial` e `description`; cobertura inicial 3 / 12 / 1.
- Guerreiro: Retomar o Fôlego com `heal`, Surto de Ação e Indomável com controle de usos.
- Ladino: Ação Ardilosa com três Activities de ação bônus; Ataque Furtivo e Esquiva Sobrenatural permanecem parciais.
- Monge: `CHI` como reserva compartilhada e consumo cruzado por `monk-chi` em Rajada de Golpes, Defesa Paciente e Passo do Vento.
- Paladino: Sentido Divino com usos, Cura pelas Mãos com reserva/escala e Destruição Divina com consumo de espaços e limite mecânico separado.
- Bárbaro: Fúria e Ataque Descuidado recebem Activities de acionamento/lembrete; Sentido de Perigo permanece somente descrição.
- **Active Effects não são criados** nesta primeira parte; vantagens, estados, movimento e reduções condicionais continuam manuais.
- `materializer.js` passa a inicializar `system.activities`/`system.uses` e gravar `flags.grimorio-importer.automation`.
- Adicionado `/grimorio-automacao` e API `phase11Support()` / `automationCoverage()`.
- Criado `tools/validate-foundry-phase11-module.js` e regressão self-contained em `tests/foundry-v13/phase11/`.
- Preservadas as regressões da Fase 9 e Fase 10, incluindo 401 bundles, 24 classes e 377 subclasses.
- Adicionados `FOUNDRY_IMPORTER_FASE11.md`, `TESTE_FOUNDRY_FASE11.md` e `VALIDACAO_FOUNDRY_AUTOMACAO_5.23.md`.

## 5.22.1

### Hotfix — botões Foundry em classes/subclasses

- Corrigida a regressão real reportada na ficha do Bárbaro: os botões eram gerados em `app.js`, mas desapareciam depois que `ui-enhancements.js` e `dynamic-consultation.js` substituíam `viewClass()`/`viewSubclass()`.
- `ui-enhancements.js` e `dynamic-consultation.js` agora usam `foundryClassHeaderActions()` no cabeçalho final.
- Preservados **Exportar Foundry**, **Classe + subclasses** e os controles Editar/Excluir para conteúdo personalizado.
- Atualizado o validador da Fase 10 para executar a ordem real dos scripts do `index.html`, impedindo que o mesmo bug passe novamente.
- Versão do site atualizada para 5.22.1; Grimório Importer permanece 0.6.0 e os schemas de bundle/pacote permanecem v1.

## 5.22.0

- Fase 10: corrigida a regressão que fazia os botões individuais de classes/subclasses dependerem do wrapper carregado após o primeiro render.
- `viewClass()` e `viewSubclass()` agora incluem nativamente os controles **Exportar Foundry**.
- Classe: exportação individual + **Classe + subclasses**.
- Subclasse: exportação individual do bundle correspondente.
- `viewClassList()` mantém a exportação do catálogo completo.
- Grimório Importer atualizado para **0.6.0**, preservando compatibilidade com os schemas v1.
- Registrada homologação real da Fase 9.
- Adicionados documentação, kit e validador específico da Fase 10.

# Changelog

## 5.21.0

### Foundry Classes — Fase 9 / Exportação no site e pacotes JSON

- Atualizado **Grimório Importer** para `0.5.0`.
- Adicionada exportação Foundry diretamente nas fichas de classe e subclasse.
- Classes podem gerar bundle individual ou pacote **Classe completa** com todas as subclasses.
- Catálogo de classes pode ser exportado em um único JSON com **401 bundles** (24 classes + 377 subclasses).
- Criado `grimorio-foundry-class-package@1`.
- Importador detecta automaticamente bundles e pacotes; adicionado `/grimorio-import-package`.
- Pacotes validam individualmente todos os bundles internos antes da materialização.
- Importação de pacote ordena classes antes das subclasses, usa uma janela única de escrita dos compêndios e emite resumo consolidado.
- Smoke test materializa o catálogo completo duas vezes: 24 classes, 377 subclasses, 2.293 características, zero duplicações e zero Items de Mundo.
- Confirmação do usuário da Fase 8 registrada como homologação real das cinco classes especiais.


## 5.20.0

### Foundry Classes — Fase 8 / Classes especiais

- Atualizado **Grimório Importer** para `0.4.0`.
- Materialização habilitada para **24 classes** e **377 subclasses/especializações**.
- Removida a reserva das cinco classes especiais da Fase 7.
- Criados perfis dedicados para Cavaleiro Dracônico, Piloto de Frame, Dobrador, Domador e Ministro de Sangue.
- Adicionados 12 perfis explícitos de Conceito Central do Cavaleiro Dracônico.
- Conceitos Centrais agora podem conceder Traits próprios e reconfigurar Dado de Vida/progressão de conjuração no Actor.
- Piloto de Frame recebe dois pools de escolha de salvaguarda e não recebe ASI genérico; Crescimento permanece como característica.
- Dobrador e Domador recebem escolha dinâmica de INT/WIS/CHA no Item embutido.
- Ministro de Sangue usa d8 técnico e hook `dnd5e.preRollClassHitPoints` para rolar 2d4 no ganho de PV; limitação do pool de Dados de Vida foi mantida explícita.
- Adicionados comandos `/grimorio-special` e `/grimorio-configurar`.
- Catálogo da Fase 8 gerado com todos os **401 bundles**.
- Smoke test da Fase 8 materializa 24 classes, 377 subclasses e 2.293 características no mock, sem Items de Mundo e com UUIDs estáveis.
- Confirmação do usuário da Fase 7 registrada como homologação real da generalização convencional.


## 5.19.0

### Foundry Classes — Fase 7 / Generalização

- Atualizado **Grimório Importer** para `0.3.0`.
- Materialização nativa generalizada para **19 classes** e **347 subclasses**.
- Mantidos em reserva cinco perfis especiais e 30 subclasses dependentes para evitar conversões incorretas.
- Criado catálogo Fase 7 com todos os bundles suportados.
- Adicionado suporte a `ItemChoice` para Estilos de Luta, Dádiva do Pacto e Metamágica.
- Perfis de classe agora definem spellcasting, ASI, traits, opções diretas e avisos manuais.
- Importação múltipla de bundles JSON disponível no seletor de arquivo.
- Preservados compêndios portáveis, UUIDs estáveis e atualização sem duplicações.
- Smoke test materializa todas as 19 classes e 347 subclasses sem criar Items de Mundo.
- Confirmação do usuário da Fase 6 registrada como homologação real do fluxo em compêndios.



## 5.18.0

### Foundry VTT — Fase 6: Compêndios portáveis

- Atualizado **Grimório Importer** para `0.2.0`.
- Declarados três compêndios Item/dnd5e no módulo: `grimorio-classes`, `grimorio-subclasses` e `grimorio-features`.
- Características passam a ser criadas/atualizadas no compêndio **Grimório — Características**.
- Classes e subclasses passam a ser criadas nos respectivos compêndios, sem criar Items no Mundo.
- `ItemGrant` agora usa UUIDs de compêndio, tornando as relações portáveis entre Mundos que compartilham a instalação do módulo.
- Estado de bloqueio dos packs é restaurado automaticamente após cada importação.
- Reimportação mantém a identidade dos documentos e evita duplicações.
- Adicionados diagnósticos `/grimorio-packs` e `/grimorio-world-preview`.
- Items de Mundo criados pela Fase 5 não são apagados automaticamente.
- Novo smoke test valida armazenamento, UUIDs, deduplicação, bloqueio e ausência de criação de Items de Mundo.


## 5.17.0

### Foundry Classes — Fase 5 / Grimório Importer

- Criado o módulo Foundry `grimorio-importer` v0.1.0 para Foundry 13.351 e DnD5e 5.3.3.
- Implementada leitura e validação de `Grimório Foundry Class Bundle v1`.
- Materialização inicial habilitada para Bárbaro e subclasses de Bárbaro.
- Características são criadas como Items `feat` antes da classe/subclasse para que seus UUIDs possam alimentar `ItemGrant` Advancements.
- Bárbaro gera 12 feats e 20 Advancements: HitPoints, quatro Trait, nove ItemGrant, cinco AbilityScoreImprovement e um Subclass.
- `INCREMENTO NO VALOR DE HABILIDADE` e `CAMINHO PRIMITIVO` são convertidos para estruturas nativas e não viram feats duplicados.
- Caminho do Kaiju gera cinco feats e ItemGrant nos níveis 3, 6, 10 e 14.
- `system.advancement` é gravado como objeto, conforme a alteração de dados da linha DnD5e 5.3.
- Flags `grimorio-importer` estabilizam identidade e permitem reimportação por atualização sem duplicatas.
- Adicionados comandos `/grimorio-status`, `/grimorio-import` e `/grimorio-help`, além de API pública do módulo.
- Armazenamento inicial permanece em Items de Mundo; compêndios portáveis ficam para a próxima iteração após homologação do Advancement Flow real.
- Adicionados `FOUNDRY_IMPORTER_FASE5.md`, `TESTE_FOUNDRY_FASE5.md`, `VALIDACAO_FOUNDRY_CLASSES_5.17.md` e `tools/validate-foundry-phase5-module.js`.

## 5.16.0

### Foundry Classes — Fase 4

- Criado o formato `grimorio-foundry-class-bundle@1`, um contrato JSON próprio para transportar classes e subclasses até o futuro módulo Grimório Importer.
- Adicionado o perfil `foundry13-dnd5e533-grimorio-class-bundle-v1`, separado do exportador YAML de magias.
- 24/24 classes e 377/377 subclasses/especializações geram bundles válidos.
- Preservadas 345 características de classe, 2.025 características de subclasse, 23 tabelas de classe e 135 tabelas de subclasse.
- Os 509 eventos das tabelas de progressão foram classificados em: 407 características diretas, 48 eventos de subclasse, 51 escalonamentos/variações e 3 notas de progressão.
- 29 opções internas sem nível (Estilos de Luta, Metamagias, Pactos e similares) passam a ser transportadas como `ChooseItemsCandidate`, sem inventar nível.
- Identificadores de classe foram estabilizados para futura ligação `classIdentifier` das subclasses.
- Subclasses homônimas de fontes diferentes mantêm identificadores próprios e únicos.
- 41 subclasses legadas sem metadado de fonte continuam sem fonte inferida; a lacuna original é preservada.
- 19 classes estão classificadas como prontas para o primeiro mapeamento nativo; Cavaleiro Dracônico, Piloto de Frame, Dobrador, Domador e Ministro de Sangue foram reservados para lógica específica na Fase 5.
- Adicionados `data/export/foundry-class-overrides.js`, `js/exporters/foundry-class-bundle.js`, `tools/generate-foundry-phase4.js` e `tools/validate-foundry-class-bundle.js`.
- Criados bundles de referência para Bárbaro, Dobrador, Cavaleiro Dracônico, Caminho do Kaiju e Sensei, além do índice completo das 401 opções de classe/subclasse.

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
