document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('toggle');
  btn.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');
    console.log('Toggled theme (Mar 26 project).');
  });
  console.log('Web Combo Project (Mar 26) loaded.');
});
