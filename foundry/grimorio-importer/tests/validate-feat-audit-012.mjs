import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { buildFeatSource } from "../scripts/feat-materializer.js";
import { auditFeatDocuments, auditFeatDocument, featCompendiumAudit, featAuditSupport } from "../scripts/feat-audit.js";
import { FEAT_AUDIT_BASELINE, FEAT_AUDIT_SOURCE } from "../scripts/feat-audit-baseline.js";
import { IMPORTER_BUILD, IMPORTER_VERSION } from "../scripts/version.js";

const here=path.dirname(fileURLToPath(import.meta.url));
const root=path.resolve(here,"..");
const pkg=JSON.parse(fs.readFileSync(path.join(root,"examples","feats","phb-2014-feats-package-v2.json"),"utf8"));
const assert=(value,message)=>{ if(!value) throw new Error(message); };
const clone=value=>JSON.parse(JSON.stringify(value));

assert(IMPORTER_VERSION==="0.12.0",`Versão FA-5 inesperada: ${IMPORTER_VERSION}`);
assert(IMPORTER_BUILD.phase==="0.12.0 Stable" && IMPORTER_BUILD.label==="0.12.0 Stable","Build FA-5 não sincronizada");
const support=featAuditSupport();
assert(support.phase==="FA-5" && support.expectedFeats===42,"Contrato de auditoria FA-5 incorreto");
assert(FEAT_AUDIT_SOURCE.siteVersion==="5.42.0" && FEAT_AUDIT_SOURCE.bundleSchemaVersion===2,"Baseline não aponta para Grimório 5.42.0 / Bundle v2");
assert(Object.keys(FEAT_AUDIT_BASELINE).length===42,"Baseline deveria possuir 42 Talentos");

const sources=pkg.bundles.map(bundle=>buildFeatSource(bundle));
const audit=auditFeatDocuments(sources);
assert(audit.readyForStable===true && audit.readyForRc===true && audit.structuralOk===true,"Catálogo materializado não ficou íntegro para Stable");
assert(audit.expected===42 && audit.managed===42 && audit.verified===42 && audit.failed===0,"Auditoria 42/42 falhou");
assert(audit.missing.length===0 && audit.duplicates.length===0 && audit.extras.length===0,"Catálogo íntegro gerou ausências/duplicações/extras");
assert(audit.totals.actual.advancements===26 && audit.totals.expected.advancements===26,"Advancements auditados divergiram");
assert(audit.totals.actual.activities===22 && audit.totals.expected.activities===22,"Activities auditadas divergiram");
assert(audit.totals.actual.effects===10 && audit.totals.expected.effects===10,"Effects auditados divergiram");
assert(audit.totals.actual.uses===2 && audit.totals.expected.uses===2,"Uses auditados divergiram");
assert(audit.totals.actual.runtime===56 && audit.totals.expected.runtime===56,"Runtime auditado divergiu");
assert(audit.totals.actual.assistedChoices===3 && audit.totals.expected.assistedChoices===3,"Escolhas assistidas auditadas divergiram");
assert(audit.native===6,"Esperados 6 Talentos de cobertura nativa; encontrados ${audit.native}");
assert(audit.runtime===7,"Esperados 7 Talentos runtime/Activity sem assistência adicional; encontrados ${audit.runtime}");
assert(audit.assisted===25,"Esperados 25 Talentos de cobertura assistida; encontrados ${audit.assisted}");
assert(audit.narrative===4,"Esperados 4 Talentos com cobertura nativa + parcela textual; encontrados ${audit.narrative}");

for(const row of audit.rows){
  assert(row.ok,`${row.name}: deveria passar auditoria: ${row.issues.map(issue=>issue.detail).join("; ")}`);
  assert(row.actual.advancements===row.expected.advancements,`${row.name}: Advancement divergiu`);
  assert(row.actual.activities===row.expected.activities,`${row.name}: Activity divergiu`);
  assert(row.actual.effects===row.expected.effects,`${row.name}: Effect divergiu`);
  assert(row.actual.runtime===row.expected.runtime,`${row.name}: runtime divergiu`);
}

// Uma Activity removida deve bloquear a auditoria, provando que não auditamos apenas flags agregadas.
const broken=sources.map(clone);
const sharpshooter=broken.find(doc=>doc.flags?.["grimorio-importer"]?.grimorioId==="phb-2014-atirador-agucado");
const activityKey=Object.keys(sharpshooter.system.activities)[0];
delete sharpshooter.system.activities[activityKey];
const brokenAudit=auditFeatDocuments(broken);
const brokenRow=brokenAudit.rows.find(row=>row.grimorioId==="phb-2014-atirador-agucado");
assert(!brokenAudit.readyForStable && !brokenAudit.readyForRc && brokenAudit.failed===1,"Activity removida deveria bloquear Stable");
assert(brokenRow.issues.some(issue=>issue.code==="activities"),"Auditoria não detectou Activity ausente");

// Duplicatas e ausências também são bloqueantes.
const duplicateAudit=auditFeatDocuments([...sources,sources[0]]);
assert(!duplicateAudit.readyForStable && !duplicateAudit.readyForRc && duplicateAudit.duplicates.length===1,"Duplicata de grimorioId não foi detectada");
const missingAudit=auditFeatDocuments(sources.slice(1));
assert(!missingAudit.readyForStable && !missingAudit.readyForRc && missingAudit.missing.length===1 && missingAudit.failed===1,"Talento ausente não foi detectado");

// O auditor de compêndio usa a mesma função sobre dados reais/mocados do pack.
const runtime={ listPackItems:async key=>{ assert(key==="feats","Auditoria consultou pack incorreto"); return sources; } };
const packAudit=await featCompendiumAudit(runtime);
assert(packAudit.readyForStable && packAudit.readyForRc && packAudit.verified===42,"featCompendiumAudit não confirmou 42/42");

// O helper por documento também precisa aceitar um Item isolado.
const first=sources[0];
const firstId=first.flags["grimorio-importer"].grimorioId;
assert(auditFeatDocument(first,FEAT_AUDIT_BASELINE[firstId],{grimorioId:firstId}).ok,"Auditoria isolada do primeiro Talento falhou");

console.log("GRIMORIO_IMPORTER_FA5_AUDIT_OK",JSON.stringify({
  importer:IMPORTER_VERSION, phase:IMPORTER_BUILD.phase, expected:audit.expected, verified:audit.verified, failed:audit.failed,
  coverage:{native:audit.native,runtime:audit.runtime,assisted:audit.assisted,narrative:audit.narrative,needsAssistance:audit.needsAssistance}, totals:audit.totals,
  mutationDetection:true, duplicateDetection:true, missingDetection:true, readyForStable:audit.readyForStable, readyForRc:audit.readyForRc
},null,2));
