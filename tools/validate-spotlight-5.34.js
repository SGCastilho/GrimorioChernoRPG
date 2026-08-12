const fs = require('fs');
const path = require('path');
const root = path.resolve(__dirname, '..');
function read(rel){ return fs.readFileSync(path.join(root, rel), 'utf8'); }
function ok(cond,msg){ if(!cond) throw new Error(msg); }
const index=read('index.html');
const css=read('css/spotlight-cards.css');
const js=read('js/spotlight-cards.js');
const config=read('js/config.js');
const manifest=JSON.parse(read('manifest.json'));
ok(/APP_VERSION='5\.(?:3[4-9]|[4-9]\d)\./.test(config),'APP_VERSION é anterior à introdução do Spotlight 5.34.0');
ok(Number(String(manifest.version).split('.')[1])>=34,'manifest é anterior à introdução do Spotlight 5.34.0');
ok(index.includes('css/spotlight-cards.css'),'CSS spotlight não carregado no index');
ok(index.includes('js/spotlight-cards.js'),'JS spotlight não carregado no index');
for(const sel of ['.hero','.class-card','.subclass-card','.race-card','.subrace-card','.ability-budget-card','.ability-summary-card','.equipment-row']){
  ok(css.includes(sel),`Seletor ausente no CSS: ${sel}`);
  ok(js.includes(sel),`Seletor ausente no JS: ${sel}`);
}
ok(css.includes('prefers-reduced-motion'),'CSS não respeita prefers-reduced-motion');
ok(css.includes('pointer:coarse'),'CSS não trata ponteiro coarse');
ok(js.includes("focusin"),'JS não trata foco de teclado');
ok(js.includes("pointermove"),'JS não trata movimento do ponteiro');
ok(!index.includes('react') && !index.includes('tailwind'),'Stack foi alterada indevidamente para React/Tailwind');
console.log('OK — Spotlight Cards: integração nativa preservada.');
