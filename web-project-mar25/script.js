document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('toggle');
  btn.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');
    console.log('Toggled theme (Mar 25 project).');
  });
  console.log('Web Combo Project (Mar 25) loaded.');
});
