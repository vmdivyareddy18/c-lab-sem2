document.addEventListener('DOMContentLoaded', function () {
  const btn = document.getElementById('action');
  const status = document.getElementById('status');
  let count = 0;
  btn.addEventListener('click', () => {
    count += 1;
    status.textContent = `Tapped ${count} time${count === 1 ? '' : 's'}`;
  });
});
