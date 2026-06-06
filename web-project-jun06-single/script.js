document.addEventListener('DOMContentLoaded',()=>{
  const btn = document.getElementById('act')
  const status = document.getElementById('status')
  btn.addEventListener('click',()=> status.textContent = 'Actioned')
})
