document.addEventListener('DOMContentLoaded', ()=>{
  const btn = document.getElementById('toggle');
  btn.addEventListener('click', ()=>{
    document.documentElement.classList.toggle('dark');
    console.log('Toggled theme (Jan 24 project).');
  });
  console.log('Web Combo Project (Jan 24) loaded.');
});
