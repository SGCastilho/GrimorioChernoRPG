#!/usr/bin/env node
'use strict';

const fs=require('fs');
const path=require('path');
const vm=require('vm');
const {execSync}=require('child_process');
const root=path.resolve(__dirname,'..');
const read=f=>fs.readFileSync(path.join(root,f),'utf8');
const errors=[],passed=[];
const check=(cond,msg)=>cond?passed.push(msg):errors.push(msg);
function ctx(extra={}){const c={console,...extra};c.window=c;vm.createContext(c);return c;}
function load(c,f){vm.runInContext(read(f),c,{filename:f});}
const FILES=[
 'js/registry.js','data/sources.js','data/lyre-races.js','data/lyre-races-phase2-structure.js','data/lyre-races-phase2-text.js',
 'data/lyre-races-phase3-structure.js','data/lyre-races-phase3-text.js','data/lyre-races-phase4-structure.js','data/lyre-races-phase4-text.js',
 'data/blade-bone-benefit-races.js','data/zagalhta-exolunar-races.js','data/paraprismatic-tempest-races.js','data/race-build-eligibility-rules.js',
 'js/race-build-resolver.js','js/exporters/registry.js','js/exporters/foundry-race-build-bundle.js'
];
const c=ctx();
for(const f of FILES){try{load(c,f)}catch(e){errors.push(`${f}: ${e.message}`)}}
if(errors.length)finish();
const R=c.GRIMORIO_RACE_BUILD_RESOLVER,B=c.GRIMORIO_FOUNDRY_RACE_BUILD_BUNDLE,E=c.GRIMORIO_RACE_BUILD_ELIGIBILITY;
const races=c.GRIMORIO_RACES||[];const manifest=JSON.parse(read('manifest.json'));
const subCount=races.reduce((n,r)=>n+(r.subraces?.length||0),0);
const race=id=>R.findRace(id), sub=(id,sid)=>R.findSubrace(race(id),sid), legacy=(id,n=2)=>race(id).legacyTraits.slice(0,n).map(t=>`${id}:legacy:${t.id}`);
const has=(res,code)=>res.errors.some(e=>e.code===code);
const firstSize=(id,state={})=>R.baseSizeRequirement(race(id),state).options?.[0]||null;

check(races.length===46,`baseline: 46 raças (obtido ${races.length})`);
check(subCount===382,`baseline: 382 subraças (obtido ${subCount})`);
check(manifest.version==='5.62.0','manifest sincronizado em 5.62.0');
check(manifest.raceBuildPhase==='RB-3'&&manifest.raceBuildEligibilityIntegrated===true,'manifest declara RB-3 + eligibility integrado');
check(E?.schema==='grimorio-race-build-eligibility-rules'&&E?.schemaVersion===1&&E?.phase==='RB-3','política RB-3 congelada em eligibility-rules@1');
check(R?.phase==='RB-3','resolver declara fase RB-3');
check(R?.builderSchema?.version===2&&R?.resolutionSchema?.version===1,'RB-3 preserva estado v2 e resolução v1');
check(B?.schema?.version===1&&B?.profile?.id==='foundry13-dnd5e533-grimorio-race-build-v1','Race Build Bundle v1/profile permanecem estáveis');

// Regra geral: Legado normal de ambas; Mixed Blood só da secundária.
let st={subraceId:'woodlander',mixed:true,secondaryRaceId:'feralus',legacy:[]};
let pool=R.legacyPool(race('human'),st);
check(pool.some(x=>x.key.startsWith('human:legacy:'))&&pool.some(x=>x.key.startsWith('feralus:legacy:')),'Sangue Misto combina listas normais da dominante e secundária');
check(pool.some(x=>x.key.startsWith('feralus:mixed:'))&&!pool.some(x=>x.key.startsWith('human:mixed:')),'Traços de Sangue Misto vêm apenas da raça secundária');

// Caminho simples pronto.
let human=R.resolve('human',{subraceId:'woodlander',legacy:legacy('human')});
check(human.status==='ready'&&human.canExport===true,'Humano/Habitante das Florestas puro fica canExport=true');
check(human.capabilities.exportEnabled===false,'RB-3 ainda não habilita execução de exportação (RB-4)');

// Beast Tribe secundária: Bloodline obrigatório e tipo Besta.
let beastMissing=R.resolve('human',{subraceId:'woodlander',mixed:true,secondaryRaceId:'beast-tribe',legacy:legacy('human')});
check(has(beastMissing,'mixed.required-trait'),'Tribo Bestial secundária exige Bloodline');
const beastOpt=R.bloodlineOptions(race('beast-tribe'))[0];
let beastReady=R.resolve('human',{subraceId:'woodlander',mixed:true,secondaryRaceId:'beast-tribe',legacy:[legacy('human',1)[0],'beast-tribe:mixed:bloodline'],bloodlineChoices:{'beast-tribe:mixed:bloodline':beastOpt.key}});
check(beastReady.canExport&&!has(beastReady,'mixed.required-trait')&&beastReady.facts.creatureTypes.includes('Besta'),'Bloodline da Tribo Bestial resolve e adiciona tipo Besta');

// Vanquis secundária: Bloodline + Deathless automático + morto-vivo.
let vanqMissing=R.resolve('human',{subraceId:'woodlander',mixed:true,secondaryRaceId:'vanquis',legacy:legacy('human')});
check(has(vanqMissing,'mixed.required-trait'),'Vanquis secundário exige Bloodline');
const vanqOpt=R.bloodlineOptions(race('vanquis')).find(o=>o.subraceId!=='amalgamation')||R.bloodlineOptions(race('vanquis'))[0];
let vanqReady=R.resolve('human',{subraceId:'woodlander',mixed:true,secondaryRaceId:'vanquis',legacy:[legacy('human',1)[0],'vanquis:mixed:bloodline'],bloodlineChoices:{'vanquis:mixed:bloodline':vanqOpt.key}});
check(vanqReady.canExport&&vanqReady.features.automaticSecondary.some(t=>t.id==='deathless-traits'),'Vanquis secundário concede Traços Sem Morte automaticamente');
check(vanqReady.facts.creatureTypes.includes('Morto-Vivo'),'Vanquis secundário acrescenta tipo Morto-Vivo');

// Hanyou dominante: ASI source + tamanho + heranças. Emberash 2+1.
const hanyou=race('hanyou'), aquatic=sub('hanyou','aquatic'), aq=R.heritageOptions(hanyou,aquatic);
let hanyouReady=R.resolve(hanyou,{subraceId:'aquatic',legacy:legacy('hanyou'),heritage:{positive:aq.positive.slice(0,2).map(x=>x.key),detrimental:aq.detrimental.slice(0,2).map(x=>x.key),lineage:[]},abilityChoices:{hanyou:{plus:['str','dex'],minus:'con'}},traitChoices:{'race:size':firstSize('hanyou')}});
check(hanyouReady.canExport&&hanyouReady.features.heritage.length===4,'Hanyou dominante resolve ASI, tamanho e Herança 2+2');
const ember=sub('hanyou','emberash'), eo=R.heritageOptions(hanyou,ember);
let emberReady=R.resolve(hanyou,{subraceId:'emberash',legacy:legacy('hanyou'),heritage:{positive:eo.positive.slice(0,2).map(x=>x.key),detrimental:eo.detrimental.slice(0,1).map(x=>x.key),lineage:[]},abilityChoices:{hanyou:{plus:['str','dex'],minus:'con'}},traitChoices:{'race:size':firstSize('hanyou')}});
check(emberReady.canExport&&emberReady.limits.heritage.positive===2&&emberReady.limits.heritage.detrimental===1,'Emberash aplica override 2 positivos + 1 prejudicial');

// Hanyou secundário: Bloodline automático, reserva 1 slot, 1+1 e pool sem wrapper Bloodline.
let hp=R.legacyPool(race('human'),{subraceId:'woodlander',mixed:true,secondaryRaceId:'hanyou',legacy:[]});
check(!hp.some(x=>x.key==='hanyou:mixed:bloodline'),'Hanyou secundário oculta wrapper Bloodline do pool selecionável');
const hbo=R.bloodlineOptions(hanyou).find(o=>o.subraceId==='aquatic');const sho=R.secondaryHeritageOptions('hanyou','aquatic');
let hanyouSecondary=R.resolve('human',{subraceId:'woodlander',mixed:true,secondaryRaceId:'hanyou',legacy:[legacy('human',1)[0]],bloodlineChoices:{'hanyou:mixed:bloodline':hbo.key},specialChoices:{hanyouSecondary:{subraceId:'aquatic',positive:[sho.positive[0].key],detrimental:[sho.detrimental[0].key]}}});
check(hanyouSecondary.canExport&&hanyouSecondary.limits.legacy.reservedSecondarySlots===1,'Hanyou secundário consome exatamente 1 slot normal de Legado');
check(hanyouSecondary.features.secondaryHeritage.length===2,'Hanyou secundário transporta exatamente 1 positivo + 1 prejudicial');

// Sangue Versátil: Humano é SECUNDÁRIO conforme regra geral de Mixed Blood.
const feralus=race('feralus'), ferSub=feralus.subraces[0];
let versatileState={subraceId:ferSub.id,mixed:true,secondaryRaceId:'human',legacy:[legacy('feralus',1)[0],'human:mixed:versatile-blood'],traitChoices:{'race:size':firstSize('feralus')}};
let versatileMissing=R.resolve(feralus,versatileState);
check(has(versatileMissing,'versatile-blood.count'),'Sangue Versátil exige duas escolhas de substituição');
const vp=R.extraLegacyPool(feralus,versatileState,'versatile');versatileState.extraLegacy=vp.slice(0,2).map(x=>x.key);
let versatileReady=R.resolve(feralus,versatileState);
check(versatileReady.canExport&&versatileReady.features.extraLegacy.length===2,'Sangue Versátil resolve em dois Traços normais adicionais');
check(!versatileReady.features.mixed.some(t=>t.id==='versatile-blood'),'wrapper Sangue Versátil não vira característica final');

// Bônus planar dominante: 3º slot, restrito à dominante.
const bouyan=race('bouyan');
check(R.legacySlots(bouyan).total===3,'Bouyan dominante possui 3 slots de Legado');
let foreign=R.legacyPool(bouyan,{mixed:true,secondaryRaceId:'human',legacy:[]}).filter(x=>!(x.kind==='legacy'&&x.originRaceId==='bouyan')).slice(0,3).map(x=>x.key);
let bouyanBad=R.resolve(bouyan,{mixed:true,secondaryRaceId:'human',legacy:foreign});
check(has(bouyanBad,'legacy.dominant-bonus-restricted'),'slot bônus planar rejeita terceira escolha fora da raça dominante');

// ASI variável e ambiguidade editorial.
let traversal=R.resolve('nephilim',{subraceId:'traversal',legacy:legacy('nephilim'),traitChoices:{'race:size':firstSize('nephilim')}});
check(has(traversal,'ability.subrace-required'),'Travessia exige escolha entre Constituição/Carisma');
let traversalReady=R.resolve('nephilim',{subraceId:'traversal',legacy:legacy('nephilim'),abilityChoices:{subrace:'con'},traitChoices:{'race:size':firstSize('nephilim')}});
check(traversalReady.canExport,'Travessia fica exportável após ASI variável resolvido');
let shoreline=R.resolve('merfolk',{subraceId:'shoreline',legacy:legacy('merfolk')});
check(shoreline.status==='blocked'&&has(shoreline,'ability.source-ambiguous'),'Merfolk Shoreline permanece bloqueado sem inventar atributo ausente');

// Silvistar usa o trait mecânico Médio/Grande como autoridade.
const silReq=R.baseSizeRequirement(race('silvistar'),{});
check(silReq.source==='core-trait'&&silReq.options.join(',')==='medium,large','Silvistar usa Tamanho do trait: Médio/Grande');
let sil=R.resolve('silvistar',{legacy:legacy('silvistar',3),traitChoices:{'race:size':'medium'}});
check(sil.canExport,'Silvistar fica exportável após escolha operacional de tamanho');

// Vanquis dominante: Persona Anterior + Amalgamation/Shambled Body.
let vanqPrimary=R.resolve('vanquis',{subraceId:'ghoul',legacy:legacy('vanquis')});
check(has(vanqPrimary,'vanquis.former-persona-required'),'Vanquis dominante exige Persona Anterior');
let amalgState={subraceId:'amalgamation',legacy:legacy('vanquis'),abilityChoices:{subrace:'str'},specialChoices:{formerPersonaRaceId:'human'}};
const sp=R.extraLegacyPool(race('vanquis'),amalgState,'shambled-body');const s1=sp[0],s2=sp.find(x=>x.originRaceId!==s1.originRaceId);amalgState.specialChoices.shambledBodyLegacy=[s1.key,s2.key];
let amalg=R.resolve('vanquis',amalgState);
check(amalg.canExport&&new Set(amalg.features.extraLegacy.map(x=>x.originRaceId)).size===2,'Amálgama resolve Corpo Remendado com duas raças terceiras distintas');

// Hádísli/Primordia: escolhas acopladas e mapas de magia preservados como objetos.
for(const rid of ['hadislin','primordia']){
  const rr=race(rid), field=rid==='hadislin'?'cursedLegacySpells':'elementalMagicSpells';
  const dep=`${rid}:mixed:${rid==='hadislin'?'cursed-legacy':'elemental-magic'}`, blood=`${rid}:mixed:bloodline`;
  const opts=R.bloodlineOptions(rr,{excludeSubraceFlag:rid==='hadislin'?'crystalHadislin':null});
  if(rid==='hadislin')check(!opts.some(o=>o.subraceId==='beryl'),'Bloodline Hádísli exclui Berilo/cristal conforme regra-base de Lyre');
  const same=opts.find(o=>o.subraceId&&sub(rid,o.subraceId)?.[field]); const other=rr.subraces.find(s=>s[field]&&s.id!==same?.subraceId);
  let mismatch=R.resolve('human',{subraceId:'woodlander',mixed:true,secondaryRaceId:rid,legacy:[blood,dep],bloodlineChoices:{[blood]:same.key,[dep]:other.id}});
  check(has(mismatch,'mixed.coupled-subrace-mismatch'),`${rid}: subraças acopladas divergentes são rejeitadas`);
  let coupled=R.resolve('human',{subraceId:'woodlander',mixed:true,secondaryRaceId:rid,legacy:[blood,dep],bloodlineChoices:{[blood]:same.key,[dep]:same.subraceId}});
  check(coupled.canExport&&coupled.facts.subraceDriven[0]?.spells&&typeof coupled.facts.subraceDriven[0].spells==='object',`${rid}: escolha acoplada preserva mapa estruturado de magias`);
}

// Firbolg Land's Blessing exige Firbolg Magic.
const fir=race('firbolg'), land=R.bloodlineOptions(fir).find(o=>o.requiresMixedTraitKey);
check(Boolean(land),'Firbolg expõe Bênção da Terra como opção Bloodline estruturada');
let firBad=R.resolve('human',{subraceId:'woodlander',mixed:true,secondaryRaceId:'firbolg',legacy:['firbolg:mixed:bloodline',legacy('human',1)[0]],bloodlineChoices:{'firbolg:mixed:bloodline':land.key}});
check(has(firBad,'bloodline.requirement-missing'),'Bênção da Terra sem Magia Firbolg é rejeitada');
let firGood=R.resolve('human',{subraceId:'woodlander',mixed:true,secondaryRaceId:'firbolg',legacy:['firbolg:mixed:bloodline','firbolg:mixed:firbolg-magic'],bloodlineChoices:{'firbolg:mixed:bloodline':land.key}});
check(firGood.canExport,'Bênção da Terra + Magia Firbolg satisfaz requisito');

// Mutaliate: dois d12, duplicatas preservadas.
let mutBase={subraceId:'mutaliate-orc',legacy:legacy('orc'),traitChoices:{'race:size':firstSize('orc')}};
let mutMissing=R.resolve('orc',mutBase);check(has(mutMissing,'mutaliate.initial-mutations-required'),'Mutaliate exige dois resultados iniciais de d12');
let mut=R.resolve('orc',{...mutBase,specialChoices:{mutationRolls:[1,1]}});
check(mut.canExport&&mut.features.mutations.length===2&&mut.features.mutations[0].id===mut.features.mutations[1].id,'Mutaliate preserva resultados duplicados da tabela inicial');

// Bundle RB-3.
const bundle=B.buildBundle(human);const inspect=B.inspectBundle(bundle);
check(inspect.ok,'Race Build Bundle RB-3 passa no inspector');
check(bundle.readiness.canExport===human.canExport&&bundle.readiness.exportEnabled===false,'bundle transporta canExport, mas mantém exportEnabled=false até RB-4');
for(const bucket of ['secondaryHeritage','bloodline','extraLegacy','mutations','automaticSecondary'])check(Array.isArray(bundle.resolved.features[bucket]),`bundle contém bucket ${bucket}`);
const bundleRev=B.buildBundle('human',{subraceId:'woodlander',legacy:[...legacy('human')].reverse()});
check(bundle.identity.selectionHash===bundleRev.identity.selectionHash&&bundle.identity.grimorioId===bundleRev.identity.grimorioId,'hash/ID permanecem determinísticos independente da ordem de clique');

// Segurança: estado e payload não aceitam estrutura Foundry arbitrária.
const malicious=R.normalizeBuilderState('human',{traitChoices:{safe:{x:1},system:{hp:999},effects:[1],flags:{x:1},macro:'boom'}});
check(malicious.traitChoices.safe?.x===1&&!('system' in malicious.traitChoices)&&!('effects' in malicious.traitChoices)&&!('flags' in malicious.traitChoices)&&!('macro' in malicious.traitChoices),'sanitização remove chaves Foundry/execução arbitrárias');
const tampered=JSON.parse(JSON.stringify(bundle));tampered.selection.specialChoices.system={hp:999};check(!B.inspectBundle(tampered).ok,'inspector rejeita bundle adulterado');

// UI/runtime smoke.
const storageMap=new Map(); const localStorage={getItem:k=>storageMap.has(k)?storageMap.get(k):null,setItem:(k,v)=>storageMap.set(k,String(v)),removeItem:k=>storageMap.delete(k)};
const ui=ctx({localStorage,routeHref:(...a)=>'#/'+a.join('/'),shareLinkButton:()=>'',navigate:()=>{},render:()=>{},document:{querySelectorAll:()=>[],getElementById:()=>null}});
for(const f of FILES.slice(0,14))load(ui,f); // até resolver
load(ui,'js/race-browser.js');
for(const id of ['human','hanyou','vanquis','orc','silvistar']){const html=ui.GRIMORIO_RACE_BROWSER.renderRace(id);check(typeof html==='string'&&html.includes('RB-3'),`Race Browser renderiza ${id} sem exceção em RB-3`);}
check(!read('js/race-browser.js').includes('>Exportar para Foundry<'),'RB-3 não antecipa botão funcional de exportação');

// Ordem de scripts e freeze do Importer.
const index=read('index.html');const rulesAt=index.indexOf('data/race-build-eligibility-rules.js'),resolverAt=index.indexOf('js/race-build-resolver.js'),browserAt=index.indexOf('js/race-browser.js');
check(rulesAt>=0&&resolverAt>rulesAt&&browserAt>resolverAt,'index carrega eligibility → resolver → Race Browser');
const moduleJson=JSON.parse(read('foundry/grimorio-importer/module.json'));const importerPackage=JSON.parse(read('foundry/grimorio-importer/package.json'));
check(moduleJson.version==='0.12.0'&&importerPackage.version==='0.12.0'&&(moduleJson.packs||[]).length===4,'Grimório Importer permanece congelado em 0.12.0 / 4 packs');
let importerHash='';try{importerHash=execSync("find foundry/grimorio-importer -type f -print0 | sort -z | xargs -0 sha256sum | sha256sum",{cwd:root,encoding:'utf8'}).trim().split(/\s+/)[0]}catch(_){}
check(importerHash==='d78a407d582bcde49aff614015f2e689b6d080a0cafc059b9d3ffe9039f7db2f','checksum do grimorio-importer é idêntico ao baseline RB-1/RB-2');

finish();
function finish(){for(const m of passed)console.log('✓ '+m);if(errors.length){console.error(`\nRace Build RB-3 reprovado: ${errors.length} erro(s).`);for(const m of errors)console.error('✗ '+m);process.exit(1)}console.log(`\nRace Build RB-3 v5.62.0 aprovado: ${passed.length} verificações, 0 erros.`)}
