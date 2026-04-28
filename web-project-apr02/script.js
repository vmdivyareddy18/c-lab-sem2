document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('toggle');
  btn.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');
    console.log('Toggled theme (Apr 02 project).');
  });
  console.log('Web Combo Project (Apr 02) loaded.');
});
