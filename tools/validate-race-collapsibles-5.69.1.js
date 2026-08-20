const fs=require('fs');
const path=require('path');
const ROOT=path.resolve(__dirname,'..');
let errors=0,checks=0;
function ok(msg){checks++;console.log('OK  '+msg)}
function fail(msg){errors++;console.error('ERR '+msg)}
const js=fs.readFileSync(path.join(ROOT,'js/race-browser.js'),'utf8');
const css=fs.readFileSync(path.join(ROOT,'css/styles.css'),'utf8');
for(const needle of [
  '<details class="race-rules race-collapsible">',
  'Construção racial em Somnus Domina',
  '<details class="race-detail-section race-collapsible">',
  'Traços de Legado Planares',
  'race-collapse-text when-closed',
  'race-collapse-text when-open'
]) js.includes(needle)?ok('race-browser contém '+needle):fail('race-browser não contém '+needle);
if(/<details class="race-rules race-collapsible" open/.test(js))fail('Como funciona não pode iniciar aberto');else ok('Como funciona inicia recolhido');
if(/<details class="race-detail-section race-collapsible" open/.test(js))fail('Legados Planares não podem iniciar abertos');else ok('Legados Planares iniciam recolhidos');
for(const needle of ['.race-collapsible-summary','.race-collapsible[open] .race-collapse-chevron','.race-collapsible-body','.race-collapsible-side']) css.includes(needle)?ok('CSS contém '+needle):fail('CSS não contém '+needle);
if(errors){console.error(`\n${errors} erro(s) em ${checks+errors} verificações.`);process.exit(1)}
console.log(`\n${checks}/${checks} verificações aprovadas.`);
