import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { test } from 'node:test';
import { RACE_ART_FILES } from '../../api/_lib/admin/config.mjs';
import { editArtSource, parseArtSource } from '../../api/_lib/admin/art-source.mjs';
import { RaceArtService } from '../../api/_lib/admin/race-art-service.mjs';
import { MockRepositoryService } from '../../api/_lib/admin/repository.mjs';
import { validateRaceArtSavePayload } from '../../api/_lib/admin/validation.mjs';

process.env.GRIMORIO_ADMIN_WRITE_MODE='mock';
process.env.VERCEL_ENV='development';
const covers=await readFile(new URL('../../data/race-covers.js',import.meta.url),'utf8');
const details=await readFile(new URL('../../data/race-detail-art.js',import.meta.url),'utf8');
const expected={coverFileSha:'12345678',coverEntryHash:'abcdefgh',detailFileSha:'87654321',detailEntryHash:'hgfedcba'};

test('mapas raciais possuem 42 entradas literais e edição isolada',()=>{
  const before=parseArtSource(covers,'covers').entries;
  assert.equal(Object.keys(before).length,42);
  assert.equal(Object.keys(parseArtSource(details,'detailArt').entries).length,42);
  const result=editArtSource(covers,'cover','arhcoon',{position:'70% 20%'},RACE_ART_FILES);
  const after=parseArtSource(result.source,'covers').entries;
  assert.equal(after.arhcoon.position,'70% 20%');
  for(const id of Object.keys(before))if(id!=='arhcoon')assert.deepEqual(after[id],before[id]);
});

test('payload racial aceita campos próprios e rejeita ID, alt e escala inválidos',()=>{
  const ids=new Set(['arhcoon']);
  const payload={raceId:'arhcoon',changes:{cover:{alt:'Uma inventora Arhcoon.'},detailArt:{scale:1.2}},expected};
  assert.equal(validateRaceArtSavePayload(payload,ids),payload);
  assert.throws(()=>validateRaceArtSavePayload({...payload,raceId:'elf'},ids),/não existe/i);
  assert.throws(()=>validateRaceArtSavePayload({raceId:'arhcoon',changes:{cover:{alt:'x'.repeat(241)}},expected},ids),/inválido/i);
  assert.throws(()=>validateRaceArtSavePayload({raceId:'arhcoon',changes:{detailArt:{scale:1.3}},expected},ids),/inválido/i);
});

test('serviço lista 42 raças e simula commit atômico sem persistir',async()=>{
  const service=new RaceArtService(new MockRepositoryService()),initial=await service.list();
  assert.equal(initial.races.length,42);
  const selected=initial.races.find(item=>item.id==='arhcoon');
  const saved=await service.save({raceId:'arhcoon',changes:{cover:{position:'70% 20%'},detailArt:{scale:1.2}},expected:{coverFileSha:initial.revisions.coverFileSha,coverEntryHash:selected.revisions.coverEntryHash,detailFileSha:initial.revisions.detailFileSha,detailEntryHash:selected.revisions.detailEntryHash}});
  assert.equal(saved.race.cover.position,'70% 20%');assert.equal(saved.race.detailArt.scale,1.2);assert.match(saved.commit.commitSha,/^mock-/);
  assert.deepEqual(Object.keys(saved.commit.files).sort(),['data/race-covers.js','data/race-detail-art.js']);
  assert.equal((await service.list()).races.find(item=>item.id==='arhcoon').detailArt.scale,1.12);
});

test('serviço exige alt para imagem e detecta conflito por entrada',async()=>{
  const service=new RaceArtService(new MockRepositoryService()),initial=await service.list(),elf=initial.races.find(item=>item.id==='elf');
  const base={raceId:'elf',expected:{coverFileSha:initial.revisions.coverFileSha,coverEntryHash:elf.revisions.coverEntryHash,detailFileSha:initial.revisions.detailFileSha,detailEntryHash:elf.revisions.detailEntryHash}};
  await assert.rejects(()=>service.save({...base,changes:{cover:{image:'assets/race-art/elf.png'}}}),error=>error.status===400&&error.code==='INVALID_VALUE');
  await assert.rejects(()=>service.save({...base,changes:{cover:{position:'left top'}},expected:{...base.expected,coverEntryHash:'wrong-entry-hash'}}),error=>error.status===409&&error.code==='CONFLICT');
});
