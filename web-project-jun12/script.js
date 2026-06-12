document.addEventListener('DOMContentLoaded', function () {
  const btn = document.getElementById('action');
  const status = document.getElementById('status');
  let n = 0;
  btn.addEventListener('click', () => {
    n += 1;
    status.textContent = `Pressed ${n} time${n===1? '':'s'}`;
  });
});
// script note 4
