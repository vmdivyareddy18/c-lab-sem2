document.addEventListener('DOMContentLoaded',function(){
  const btn=document.getElementById('action');
  const status=document.getElementById('status');
  let clicks=0;
  btn.addEventListener('click',function(){
    clicks++;
    status.textContent = `Button clicked ${clicks} time${clicks===1? '':'s'}.`;
  });
});
// script note 4
// script note 7
