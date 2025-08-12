// script.js - small demo validator
document.addEventListener('DOMContentLoaded', function(){
  var demoBtn = document.getElementById('demoBtn');
  demoBtn.addEventListener('click', function(){
    // Simple client-side demo: show modal with simulated hash verification steps
    demoModal();
  });
});

function demoModal(){
  // create modal
  var modal = document.createElement('div');
  modal.style.position='fixed';modal.style.left=0;modal.style.top=0;modal.style.right=0;modal.style.bottom=0;
  modal.style.background='rgba(4,8,18,0.6)';modal.style.display='flex';modal.style.alignItems='center';modal.style.justifyContent='center';modal.style.zIndex=9999;
  var box = document.createElement('div');
  box.style.width='560px';box.style.maxWidth='92%';box.style.background='#fff';box.style.borderRadius='12px';box.style.padding='20px';box.style.boxShadow='0 20px 60px rgba(2,6,23,0.4)';
  var html = `
    <h3>Демо проверки исхода</h3>
    <p>Шаг 1: Публичный хеш (корень) опубликован: <code id="root">0x3f5a...9c7</code></p>
    <p>Шаг 2: Вы делаете офлайн-ставку (локально создаётся запись с nonce).</p>
    <p>Шаг 3: Когда вы синхронизируетесь — сервер раскрывает исход (seed) и предоставляет доказательство.</p>
    <p><strong>Нажмите "Проверить" — мы сгенерируем случайный seed и покажем валидацию.</strong></p>
    <div style="text-align:right;margin-top:14px"><button id="checkBtn" class="btn">Проверить</button> <button id="closeDemo" class="btn btn-outline">Закрыть</button></div>
    <div id="demoResult" style="margin-top:12px;font-family:monospace;color:#0b76ff"></div>
  `;
  box.innerHTML = html;
  modal.appendChild(box);
  document.body.appendChild(modal);

  document.getElementById('closeDemo').addEventListener('click', function(){ modal.remove(); });

  document.getElementById('checkBtn').addEventListener('click', function(){
    var rootEl = document.getElementById('root');
    // simulate seed and proof
    var seed = '0x'+Math.floor(Math.random()*1e16).toString(16);
    var proof = 'proof-'+Math.floor(Math.random()*1e6);
    rootEl.textContent = rootEl.textContent.replace('0x3f5a...9c7', '0x'+seed.slice(2,8)+'...'+seed.slice(-3));
    var out = 'Раскрытый seed: '+seed+'<br>Доказательство (пример): '+proof+'<br>Проверка: <strong>OK</strong>';
    document.getElementById('demoResult').innerHTML = out;
  });
}
