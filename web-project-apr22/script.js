document.addEventListener('DOMContentLoaded', ()=>{
  const btn = document.getElementById('toggle');
  btn.addEventListener('click', ()=>{
    document.documentElement.classList.toggle('dark');
    console.log('Toggled theme (Apr 22 project).');
  });
  console.log('Web Combo Project (Apr 22) loaded.');
});
