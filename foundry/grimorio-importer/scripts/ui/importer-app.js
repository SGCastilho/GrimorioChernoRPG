import { TARGET_DND5E, TARGET_FOUNDRY } from "../bundle-validator.js";
import { IMPORTER_VERSION, IMPORTER_BUILD } from "../version.js";
import { MODULE_ID } from "../pack-storage.js";
import { ImporterSession } from "./importer-session.js";
import { executeImportEntries, importExecutionSupport } from "./import-executor.js";
import { selectedActorSelection } from "../actor-selection.js";
import { centralParitySupport } from "./central-support.js";

const { ApplicationV2, HandlebarsApplicationMixin } = foundry.applications.api;

export const IMPORTER_APP_ID = "grimorio-importer-central";
export const IMPORTER_SECTIONS = Object.freeze([
  Object.freeze({ id: "import", label: "Importar", icon: "fa-solid fa-file-import", phase: "0.11-D" }),
  Object.freeze({ id: "status", label: "Status", icon: "fa-solid fa-heart-pulse", phase: IMPORTER_BUILD.phase }),
  Object.freeze({ id: "packs", label: "Compêndios", icon: "fa-solid fa-box-archive", phase: "0.11-E" }),
  Object.freeze({ id: "automation", label: "Automação", icon: "fa-solid fa-gears", phase: "0.11-E" }),
  Object.freeze({ id: "audit", label: "Auditoria", icon: "fa-solid fa-magnifying-glass-chart", phase: "0.11-E" }),
  Object.freeze({ id: "special", label: "Actor Especial", icon: "fa-solid fa-user-gear", phase: "0.11-E" }),
  Object.freeze({ id: "help", label: "Ajuda", icon: "fa-solid fa-circle-question", phase: IMPORTER_BUILD.phase })
]);

const SECTION_IDS = new Set(IMPORTER_SECTIONS.map(section => section.id));

function runtimeSnapshot() {
  const foundryVersion = String(globalThis.game?.version ?? globalThis.game?.release?.version ?? "—");
  const systemId = String(globalThis.game?.system?.id ?? "—");
  const systemVersion = String(globalThis.game?.system?.version ?? "—");
  const compatible = systemId === "dnd5e" && systemVersion === TARGET_DND5E && foundryVersion === TARGET_FOUNDRY;
  return Object.freeze({ foundryVersion, systemId, systemVersion, compatible });
}

function panelCopy(section) {
  const copy = {
    import: {
      eyebrow: "Importação",
      title: "Importar conteúdo do Grimório",
      description: "Selecione ou arraste JSONs para identificar, validar e revisar o conteúdo antes de qualquer alteração no Foundry.",
      icon: "fa-solid fa-file-import"
    },
    status: {
      eyebrow: "Diagnóstico",
      title: "Status do ambiente",
      description: "Diagnóstico consolidado do ambiente, compatibilidade, compêndios disponíveis e conteúdo legado do protótipo.",
      icon: "fa-solid fa-heart-pulse"
    },
    packs: {
      eyebrow: "Armazenamento",
      title: "Compêndios gerenciados",
      description: "Visão dos quatro compêndios gerenciados, contagens, pastas e estado de bloqueio.",
      icon: "fa-solid fa-box-archive"
    },
    automation: {
      eyebrow: "Mecânicas",
      title: "Cobertura de automação",
      description: "Cobertura dos perfis mecânicos, Activities, recursos, Active Effects e distribuição por nível de automação.",
      icon: "fa-solid fa-gears"
    },
    audit: {
      eyebrow: "Revisão",
      title: "Auditoria de automação",
      description: "Auditoria das Características materializadas, separando perfis aplicados, candidatos e conteúdo textual.",
      icon: "fa-solid fa-magnifying-glass-chart"
    },
    special: {
      eyebrow: "Actors",
      title: "Classes especiais do Actor",
      description: "Actor selecionado, classes especiais detectadas, parâmetros atuais e configuração assistida pelo mesmo runtime dos comandos.",
      icon: "fa-solid fa-user-gear"
    },
    help: {
      eyebrow: "Referência",
      title: "Ajuda do Grimório Importer",
      description: "Referência rápida da Central, equivalência com os comandos de chat e políticas de segurança do módulo.",
      icon: "fa-solid fa-circle-question"
    }
  };
  return copy[section] ?? copy.import;
}


function moduleApi() {
  return globalThis.game?.modules?.get?.(MODULE_ID)?.api ?? null;
}

function humanizeIdentifier(value) {
  return String(value ?? "")
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, char => char.toUpperCase());
}

function percent(part, total) {
  if (!total) return "0%";
  return `${Math.round((Number(part ?? 0) / Number(total)) * 100)}%`;
}

function formatStatusData(info) {
  const packs = Array.isArray(info?.packs) ? info.packs : [];
  const ready = packs.filter(row => row.available).length;
  const byRole = Object.entries(info?.legacyWorldPrototype?.byRole ?? {}).map(([role, total]) => ({ role: humanizeIdentifier(role), total }));
  return Object.freeze({
    ready: true,
    environmentMatches: Boolean(info?.environmentMatches),
    activeFoundry: info?.activeFoundry ?? "—",
    activeSystem: info?.activeSystem ?? "—",
    activeSystemVersion: info?.activeSystemVersion ?? "—",
    targetFoundry: info?.targetFoundry ?? TARGET_FOUNDRY,
    targetDnd5e: info?.targetDnd5e ?? TARGET_DND5E,
    packsReady: ready,
    packsTotal: packs.length,
    packsReadyState: ready === packs.length,
    packs: packs.map(row => ({
      ...row,
      stateLabel: row.available ? "Disponível" : "Ausente",
      stateIcon: row.available ? "fa-solid fa-circle-check" : "fa-solid fa-circle-xmark",
      lockLabel: row.locked === null ? "—" : (row.locked ? "Bloqueado" : "Desbloqueado")
    })),
    legacy: {
      total: Number(info?.legacyWorldPrototype?.total ?? 0),
      byRole,
      clean: Number(info?.legacyWorldPrototype?.total ?? 0) === 0
    },
    readiness: info?.releaseReadiness ?? {
      phase: IMPORTER_BUILD.phase,
      readyForFinal: false,
      readyForRc: false,
      state: "blocked",
      stateLabel: "Diagnóstico indisponível",
      stateIcon: "fa-solid fa-circle-question",
      checks: [], total: 0, passed: 0, blockingFailures: 1, warnings: 0
    }
  });
}

function formatPacksData(rows) {
  const list = Array.isArray(rows) ? rows : [];
  return Object.freeze({
    ready: true,
    total: list.length,
    available: list.filter(row => row.available).length,
    managed: list.reduce((sum, row) => sum + Number(row.managed ?? 0), 0),
    rows: list.map(row => ({
      ...row,
      stateLabel: row.available ? "Disponível" : "Ausente",
      stateIcon: row.available ? "fa-solid fa-circle-check" : "fa-solid fa-circle-xmark",
      lockLabel: row.locked === null ? "—" : (row.locked ? "Bloqueado" : "Desbloqueado"),
      lockIcon: row.locked ? "fa-solid fa-lock" : "fa-solid fa-lock-open"
    }))
  });
}

function formatAutomationData(coverage) {
  const byClass = Object.entries(coverage?.byClass ?? {})
    .map(([identifier, total]) => ({ identifier, label: humanizeIdentifier(identifier), total }))
    .sort((a, b) => b.total - a.total || a.label.localeCompare(b.label, "pt-BR"));
  return Object.freeze({
    ready: true,
    ...coverage,
    tierRows: [
      { key: "full", label: "Completa", total: coverage?.byTier?.full ?? 0, className: "is-good" },
      { key: "partial", label: "Parcial", total: coverage?.byTier?.partial ?? 0, className: "is-warning" },
      { key: "description", label: "Descrição", total: coverage?.byTier?.description ?? 0, className: "is-muted" }
    ],
    byClassRows: byClass,
    byClassCount: byClass.length,
    byClassOverflow: Math.max(0, byClass.length - 80),
    displayByClass: byClass.slice(0, 80)
  });
}

function formatAuditData(audit) {
  const rows = Object.entries(audit?.byBundle ?? {}).map(([id, row]) => ({
    id,
    label: humanizeIdentifier(id),
    ...row,
    pending: Number(row.candidateHigh ?? 0) + Number(row.candidateMedium ?? 0) + Number(row.textual ?? 0)
  })).sort((a, b) => (b.candidateHigh - a.candidateHigh) || (b.candidateMedium - a.candidateMedium) || (b.total - a.total) || a.label.localeCompare(b.label, "pt-BR"));
  return Object.freeze({
    ready: true,
    ...audit,
    profiledPercent: percent(audit?.profiled, audit?.managed),
    bundleCount: rows.length,
    displayBundles: rows.slice(0, 160),
    bundleOverflow: Math.max(0, rows.length - 160)
  });
}

const ABILITY_LABELS = Object.freeze({ int: "Inteligência", wis: "Sabedoria", cha: "Carisma" });
const SPECIAL_LABELS = Object.freeze({
  dragoneer: "Cavaleiro Dracônico",
  "frame-pilot": "Piloto de Frame",
  bender: "Dobrador",
  tamer: "Domador",
  "blood-minister": "Ministro de Sangue"
});

function formatSpecialClass(row) {
  const identifier = String(row?.identifier ?? "");
  const config = row?.configuration ?? {};
  const ability = config.spellcastingAbility ?? row?.spellcasting?.ability ?? "";
  let configured = Boolean(config.configured);
  let stateLabel = configured ? "Configurado" : "Requer atenção";
  let detail = "Parâmetros especiais disponíveis.";
  let stateClass = configured ? "is-good" : "is-warning";
  if (identifier === "frame-pilot") {
    configured = true; stateLabel = "Suporte nativo/textual"; stateClass = "is-good";
    detail = "Salvaguardas usam Advancement Trait; Crescimento permanece escolha textual por nível.";
  } else if (identifier === "blood-minister") {
    configured = true; stateLabel = "Hook especial ativo"; stateClass = "is-good";
    detail = "PV usa o hook 2d4; o pool nativo de Dados de Vida continua como limitação documentada.";
  } else if (identifier === "dragoneer") {
    detail = configured ? `Conceito Central: ${config.conceptName ?? "configurado"}.` : "Aguardando uma subclasse/Conceito Central compatível no Actor.";
  } else if (["bender", "tamer"].includes(identifier)) {
    detail = ability ? `Habilidade de conjuração: ${ABILITY_LABELS[ability] ?? ability}.` : "Escolha de habilidade de conjuração ainda não registrada.";
  }
  return {
    ...row,
    label: SPECIAL_LABELS[identifier] ?? row?.name ?? humanizeIdentifier(identifier),
    configured,
    stateLabel,
    stateClass,
    detail,
    abilityLabel: ability ? (ABILITY_LABELS[ability] ?? ability) : "—",
    hdLabel: row?.hd || row?.sourceHitDice || "—"
  };
}

function formatSpecialData(selection, result) {
  const classes = (result?.classes ?? []).map(formatSpecialClass);
  return Object.freeze({
    ready: true,
    actorName: result?.actor ?? selection?.actor?.name ?? "Actor",
    actorId: selection?.actor?.id ?? "",
    sourceLabel: selection?.sourceLabel ?? "—",
    classes,
    classCount: classes.length,
    configuredCount: classes.filter(row => row.configured).length,
    canConfigure: classes.length > 0
  });
}

function helpData() {
  const commands = [
    ["/grimorio-import", "Abre Importar na Central e o seletor de JSONs"],
    ["/grimorio-import-batch", "Abre Importar na Central e o seletor múltiplo"],
    ["/grimorio-import-package", "Abre Importar na Central e o seletor de pacotes"],
    ["/grimorio-import-feats", "Abre Importar na Central e o seletor de Talentos"],
    ["/grimorio-status", "Abre a seção Status da Central"],
    ["/grimorio-packs", "Abre a seção Compêndios da Central"],
    ["/grimorio-world-preview", "Abre Status, onde o conteúdo legado é exibido"],
    ["/grimorio-automacao", "Abre a seção Automação da Central"],
    ["/grimorio-auditoria-automacao", "Abre a seção Auditoria da Central"],
    ["/grimorio-special", "Abre a seção Actor Especial da Central"],
    ["/grimorio-configurar", "Abre Actor Especial e executa a configuração assistida"],
    ["/grimorio-help", "Abre a seção Ajuda da Central" ]
  ].map(([command, description]) => ({ command, description }));
  return Object.freeze({
    ready: true,
    visualRows: [
      { section: "Importar", action: "Selecionar/arrastar JSONs, preflight, confirmação e relatório", command: "/grimorio-import" },
      { section: "Status", action: "Ambiente, disponibilidade dos compêndios e conteúdo legado", command: "/grimorio-status · /grimorio-world-preview" },
      { section: "Compêndios", action: "Contagens, pastas e estado dos quatro compêndios", command: "/grimorio-packs" },
      { section: "Automação", action: "Cobertura dos perfis e mecânicas materializadas", command: "/grimorio-automacao" },
      { section: "Auditoria", action: "Classificação das Características nos compêndios", command: "/grimorio-auditoria-automacao" },
      { section: "Actor Especial", action: "Diagnóstico e configuração das cinco classes especiais", command: "/grimorio-special · /grimorio-configurar" }
    ],
    commands,
    commandCount: commands.length,
    safety: [
      "A Central é exclusiva para Mestres.",
      "A importação visual exige preflight válido e confirmação explícita.",
      "Reimportações usam IDs/flags estáveis e preservam documentos existentes.",
      "Classes, Subclasses, Características e Talentos são sincronizados nos compêndios; nenhum Item gerenciado é criado automaticamente no Mundo.",
      "Os comandos de chat permanecem disponíveis como atalhos para as seções equivalentes da Central.",
      "A Release Candidate congela funcionalidades e usa o gate do Status para validar a prontidão da versão 0.11.0 final."
    ],
    consolidation: {
      phase: IMPORTER_BUILD.phase,
      title: "Release Candidate e feature freeze",
      items: [
        "Funcionalidades A–G congeladas: a RC aceita apenas correções de regressão e compatibilidade até a 0.11.0 final.",
        "Gate do Status valida ambiente, quatro compêndios, preflight, identidade estável, confirmação, comandos Central-first e feature freeze.",
        "Bateria agregada inclui fases A–G, Talentos, Lutador de Rua/Dragão de Dojima e validação específica do pacote RC."
      ]
    }
  });
}

export class GrimorioImporterApp extends HandlebarsApplicationMixin(ApplicationV2) {
  static DEFAULT_OPTIONS = {
    id: IMPORTER_APP_ID,
    classes: ["grimorio-importer-app"],
    position: {
      width: 960,
      height: 700
    },
    window: {
      title: "GRIMORIO_IMPORTER.Central.Title",
      icon: "fa-solid fa-book-open",
      resizable: true
    }
  };

  static PARTS = {
    main: {
      template: "modules/grimorio-importer/templates/importer-app.hbs"
    }
  };

  #activeSection = "import";
  #session = new ImporterSession();
  #confirmation = false;
  #executing = false;
  #report = null;
  #sectionData = new Map();

  get activeSection() {
    return this.#activeSection;
  }

  get importSession() {
    return this.#session;
  }

  get importReport() {
    return this.#report;
  }

  async activateSection(section, { render = true } = {}) {
    const requested = String(section ?? "import");
    this.#activeSection = SECTION_IDS.has(requested) ? requested : "import";
    if (this.#activeSection === "special") this.#sectionData.delete("special");
    if (render && this.rendered) await this.render();
    return this;
  }

  async #ensureSectionData(section, { force = false } = {}) {
    if (section === "import") return null;
    if (section === "help") {
      const data = helpData();
      this.#sectionData.set("help", data);
      return data;
    }
    if (!force && this.#sectionData.has(section)) return this.#sectionData.get(section);

    const api = moduleApi();
    if (!api) {
      const error = { ready: false, error: "A API do Grimório Importer ainda não está disponível. Reabra a Central após o carregamento do Mundo." };
      this.#sectionData.set(section, error);
      return error;
    }

    try {
      let data = null;
      if (section === "status") data = formatStatusData(await api.status());
      else if (section === "packs") data = formatPacksData(await api.compendiumStatus());
      else if (section === "automation") data = formatAutomationData(api.automationCoverage());
      else if (section === "audit") data = formatAuditData(await api.automationCompendiumAudit());
      else if (section === "special") {
        const selection = selectedActorSelection();
        if (!selection.actor) throw new Error("Nenhum Actor selecionado e nenhum personagem atribuído ao usuário.");
        data = formatSpecialData(selection, api.specialActorStatus(selection.actor));
      }
      this.#sectionData.set(section, data ?? { ready: false, error: "Seção sem provedor de dados." });
    } catch (error) {
      console.error(`[${MODULE_ID}] Falha ao carregar a seção ${section}`, error);
      this.#sectionData.set(section, { ready: false, error: String(error?.message ?? error) });
    }
    return this.#sectionData.get(section);
  }

  async refreshActiveSection() {
    if (this.#activeSection === "import") return await this.refreshImportPreflight();
    this.#sectionData.delete(this.#activeSection);
    await this.#ensureSectionData(this.#activeSection, { force: true });
    if (this.rendered) await this.render();
    return this;
  }

  async configureSelectedSpecialActor() {
    if (!globalThis.game?.user?.isGM) {
      globalThis.ui?.notifications?.warn?.("Somente um Mestre pode configurar classes especiais do Grimório.");
      return null;
    }
    try {
      const selection = selectedActorSelection();
      if (!selection.actor) throw new Error("Nenhum Actor selecionado e nenhum personagem atribuído ao usuário.");
      const api = moduleApi();
      if (!api?.configureActorSpecialClasses) throw new Error("API de classes especiais indisponível.");
      const result = await api.configureActorSpecialClasses(selection.actor);
      const configured = result.filter(row => row?.configured).length;
      globalThis.ui?.notifications?.info?.(`${selection.actor.name}: configuração especial concluída (${configured}/${result.length}).`);
      console.info(`[${MODULE_ID}] Configuração especial pela Central`, result);
      this.#sectionData.delete("special");
      await this.#ensureSectionData("special", { force: true });
      if (this.rendered) await this.render();
      return result;
    } catch (error) {
      console.error(`[${MODULE_ID}] Falha ao configurar Actor pela Central`, error);
      globalThis.ui?.notifications?.error?.(`Grimório Importer: ${error?.message ?? error}`);
      return null;
    }
  }

  async promptImportFiles() {
    if (this.#executing) {
      globalThis.ui?.notifications?.warn?.("Aguarde a importação atual terminar antes de selecionar novos arquivos.");
      return false;
    }
    if (!globalThis.game?.user?.isGM) {
      globalThis.ui?.notifications?.warn?.("Somente um Mestre pode selecionar arquivos para o Grimório Importer.");
      return false;
    }
    if (this.#activeSection !== "import") await this.activateSection("import", { render: true });
    const documentRef = globalThis.document;
    if (!documentRef?.createElement) return false;
    const input = documentRef.createElement("input");
    input.type = "file";
    input.accept = ".json,application/json";
    input.multiple = true;
    input.style.display = "none";
    input.addEventListener("change", event => {
      const files = event.currentTarget?.files;
      input.remove();
      if (files?.length) void this.addImportFiles(files);
    }, { once: true });
    documentRef.body?.appendChild?.(input);
    input.click();
    return true;
  }

  async addImportFiles(files) {
    if (this.#executing) {
      globalThis.ui?.notifications?.warn?.("Aguarde a importação atual terminar antes de alterar a sessão.");
      return { added: 0, ignored: 0, entries: this.#session.entries };
    }
    if (!globalThis.game?.user?.isGM) {
      globalThis.ui?.notifications?.warn?.("Somente um Mestre pode preparar importações do Grimório.");
      return { added: 0, ignored: 0, entries: this.#session.entries };
    }
    this.#confirmation = false;
    this.#report = null;
    const result = await this.#session.addFiles(files, runtimeSnapshot());
    if (result.ignored) globalThis.ui?.notifications?.info?.(`${result.ignored} arquivo(s) já estavam na sessão e foram ignorados.`);
    if (this.rendered) await this.render();
    return result;
  }

  async clearImportFiles() {
    if (this.#executing) return this;
    this.#confirmation = false;
    this.#report = null;
    this.#session.clear();
    if (this.rendered) await this.render();
    return this;
  }

  async removeImportFile(id) {
    if (this.#executing) return this;
    this.#confirmation = false;
    this.#report = null;
    this.#session.remove(id);
    if (this.rendered) await this.render();
    return this;
  }

  async refreshImportPreflight() {
    if (this.#executing) return this;
    if (!globalThis.game?.user?.isGM) {
      globalThis.ui?.notifications?.warn?.("Somente um Mestre pode consultar os compêndios do Grimório.");
      return this;
    }
    this.#confirmation = false;
    await this.#session.refreshInspections();
    if (this.rendered) await this.render();
    return this;
  }

  async requestImportConfirmation() {
    if (!globalThis.game?.user?.isGM) {
      globalThis.ui?.notifications?.warn?.("Somente um Mestre pode importar conteúdo do Grimório.");
      return this;
    }
    if (this.#executing) return this;
    await this.#session.refreshInspections();
    const summary = this.#session.summary();
    if (!summary.canImport) {
      globalThis.ui?.notifications?.warn?.("A importação só pode continuar quando todos os arquivos forem válidos e o diagnóstico dos compêndios estiver disponível.");
      if (this.rendered) await this.render();
      return this;
    }
    this.#report = null;
    this.#confirmation = true;
    if (this.rendered) await this.render();
    return this;
  }

  async cancelImportConfirmation() {
    this.#confirmation = false;
    if (this.rendered) await this.render();
    return this;
  }

  async executeConfirmedImport() {
    if (!globalThis.game?.user?.isGM) {
      globalThis.ui?.notifications?.warn?.("Somente um Mestre pode importar conteúdo do Grimório.");
      return null;
    }
    if (!this.#confirmation || this.#executing) return null;
    const summary = this.#session.summary();
    if (!summary.canImport) {
      this.#confirmation = false;
      globalThis.ui?.notifications?.warn?.("O diagnóstico não está mais pronto para execução. Atualize o preflight e tente novamente.");
      if (this.rendered) await this.render();
      return null;
    }

    this.#confirmation = false;
    this.#executing = true;
    this.#report = null;
    if (this.rendered) await this.render();

    try {
      const report = await executeImportEntries(this.#session.executableEntries(), { continueOnError: true });
      this.#report = report;
      await this.#session.refreshInspections();
      if (report.state === "success") {
        globalThis.ui?.notifications?.info?.(`Grimório Importer: ${report.documentsChanged} documento(s) sincronizado(s) — ${report.created} criado(s), ${report.updated} atualizado(s).`);
      } else if (report.state === "partial") {
        globalThis.ui?.notifications?.warn?.(`Grimório Importer: importação concluída com falhas. ${report.documentsChanged} documento(s) sincronizado(s); ${report.failed + report.partial} arquivo(s) exigem revisão.`);
      } else {
        globalThis.ui?.notifications?.error?.("Grimório Importer: a importação falhou. Consulte o relatório na Central.");
      }
      console.info(`[${MODULE_ID}] Relatório da importação visual`, report);
      return report;
    } catch (error) {
      console.error(`[${MODULE_ID}] Falha na execução visual`, error);
      this.#report = {
        state: "failed",
        stateLabel: "Importação falhou",
        stateIcon: "fa-solid fa-circle-xmark",
        files: 0, succeeded: 0, partial: 0, failed: 1, filesWithIssues: 1, created: 0, updated: 0, documentsChanged: 0,
        foldersCreated: 0, foldersUpdated: 0, worldItemsCreated: 0, warningCount: 0, internalFailureCount: 0,
        predictedDocuments: summary.documents, predictedCreate: summary.create, predictedUpdate: summary.update, durationLabel: "—",
        rows: [{ title: "Execução da Central", fileName: "", typeLabel: "Importação", status: "failed", statusLabel: "Falhou", statusIcon: "fa-solid fa-circle-xmark", error: String(error?.message ?? error), predicted: { documents: summary.documents, create: summary.create, update: summary.update }, actual: { created: 0, updated: 0, foldersCreated: 0, foldersUpdated: 0, worldItemsCreated: 0, warnings: [], internalFailures: [] } }]
      };
      globalThis.ui?.notifications?.error?.(`Grimório Importer: ${error?.message ?? error}`);
      return null;
    } finally {
      this.#executing = false;
      if (this.rendered) await this.render();
    }
  }

  async _prepareContext(options) {
    const context = await super._prepareContext(options);
    const runtime = runtimeSnapshot();
    const activePanel = panelCopy(this.#activeSection);
    const sectionData = await this.#ensureSectionData(this.#activeSection);
    return {
      ...context,
      moduleId: MODULE_ID,
      importerVersion: IMPORTER_VERSION,
      buildLabel: IMPORTER_BUILD.label,
      buildInfo: IMPORTER_BUILD,
      activeSection: this.#activeSection,
      isImportSection: this.#activeSection === "import",
      isStatusSection: this.#activeSection === "status",
      isPacksSection: this.#activeSection === "packs",
      isAutomationSection: this.#activeSection === "automation",
      isAuditSection: this.#activeSection === "audit",
      isSpecialSection: this.#activeSection === "special",
      isHelpSection: this.#activeSection === "help",
      sectionData,
      centralSupport: centralParitySupport(),
      sections: IMPORTER_SECTIONS.map(section => ({
        ...section,
        active: section.id === this.#activeSection
      })),
      panel: activePanel,
      importSession: this.#session.context(),
      importExecution: {
        support: importExecutionSupport(),
        confirming: this.#confirmation,
        executing: this.#executing,
        report: this.#report,
        hasReport: Boolean(this.#report)
      },
      runtime: {
        ...runtime,
        targetFoundry: TARGET_FOUNDRY,
        targetDnd5e: TARGET_DND5E,
        stateLabel: runtime.compatible ? "Ambiente homologado" : "Fora do perfil homologado",
        stateIcon: runtime.compatible ? "fa-solid fa-circle-check" : "fa-solid fa-triangle-exclamation"
      }
    };
  }

  _attachPartListeners(partId, htmlElement, options) {
    super._attachPartListeners(partId, htmlElement, options);
    if (partId !== "main") return;

    const navButtons = [...htmlElement.querySelectorAll("[data-grimorio-section]")];
    for (const button of navButtons) {
      button.addEventListener("click", event => {
        event.preventDefault();
        void this.activateSection(button.dataset.grimorioSection);
      });
      button.addEventListener("keydown", event => {
        const keys = ["ArrowDown", "ArrowUp", "Home", "End"];
        if (!keys.includes(event.key)) return;
        event.preventDefault();
        const current = navButtons.indexOf(button);
        let next = current;
        if (event.key === "Home") next = 0;
        else if (event.key === "End") next = navButtons.length - 1;
        else if (event.key === "ArrowDown") next = (current + 1) % navButtons.length;
        else if (event.key === "ArrowUp") next = (current - 1 + navButtons.length) % navButtons.length;
        navButtons[next]?.focus?.();
      });
    }

    htmlElement.querySelector("[data-grimorio-refresh-section]")?.addEventListener("click", event => {
      event.preventDefault();
      void this.refreshActiveSection();
    });
    htmlElement.querySelector("[data-grimorio-configure-special]")?.addEventListener("click", event => {
      event.preventDefault();
      void this.configureSelectedSpecialActor();
    });

    const fileInput = htmlElement.querySelector("[data-grimorio-file-input]");
    const selectButton = htmlElement.querySelector("[data-grimorio-select-files]");
    selectButton?.addEventListener("click", event => {
      event.preventDefault();
      fileInput?.click();
    });
    fileInput?.addEventListener("change", event => {
      const files = event.currentTarget?.files;
      if (files?.length) void this.addImportFiles(files);
      event.currentTarget.value = "";
    });

    htmlElement.querySelector("[data-grimorio-clear-files]")?.addEventListener("click", event => {
      event.preventDefault();
      void this.clearImportFiles();
    });
    htmlElement.querySelector("[data-grimorio-refresh-diff]")?.addEventListener("click", event => {
      event.preventDefault();
      void this.refreshImportPreflight();
    });
    htmlElement.querySelector("[data-grimorio-request-import]")?.addEventListener("click", event => {
      event.preventDefault();
      void this.requestImportConfirmation();
    });
    htmlElement.querySelector("[data-grimorio-cancel-import]")?.addEventListener("click", event => {
      event.preventDefault();
      void this.cancelImportConfirmation();
    });
    htmlElement.querySelector("[data-grimorio-confirm-import]")?.addEventListener("click", event => {
      event.preventDefault();
      void this.executeConfirmedImport();
    });
    for (const button of htmlElement.querySelectorAll("[data-grimorio-remove-file]")) {
      button.addEventListener("click", event => {
        event.preventDefault();
        void this.removeImportFile(button.dataset.grimorioRemoveFile);
      });
    }

    const dropZone = htmlElement.querySelector("[data-grimorio-dropzone]");
    if (dropZone) {
      for (const eventName of ["dragenter", "dragover"]) {
        dropZone.addEventListener(eventName, event => {
          event.preventDefault();
          event.stopPropagation();
          dropZone.classList.add("is-dragover");
          if (event.dataTransfer) event.dataTransfer.dropEffect = "copy";
        });
      }
      for (const eventName of ["dragleave", "dragend"]) {
        dropZone.addEventListener(eventName, event => {
          event.preventDefault();
          event.stopPropagation();
          dropZone.classList.remove("is-dragover");
        });
      }
      dropZone.addEventListener("drop", event => {
        event.preventDefault();
        event.stopPropagation();
        dropZone.classList.remove("is-dragover");
        const files = event.dataTransfer?.files;
        if (files?.length) void this.addImportFiles(files);
      });
    }
  }
}

export async function openImporter({ section = "import", promptFiles = false, action = null, source = "api" } = {}) {
  if (!globalThis.game?.user?.isGM) {
    globalThis.ui?.notifications?.warn?.("Somente um Mestre pode abrir a Central do Grimório Importer.");
    return null;
  }

  const instances = foundry.applications.instances;
  let app = instances?.get?.(IMPORTER_APP_ID) ?? null;
  if (!(app instanceof GrimorioImporterApp)) app = new GrimorioImporterApp();

  await app.activateSection(section, { render: false });
  if (app.rendered) {
    if (app.minimized) await app.maximize();
    await app.render();
    app.bringToFront();
  } else {
    await app.render({ force: true });
  }

  if (promptFiles) await app.promptImportFiles();
  if (action === "configure-special") await app.configureSelectedSpecialActor();
  if (source === "chat-command") console.info(`[${MODULE_ID}] Comando de chat roteado para a Central`, { section, promptFiles, action });
  return app;
}
