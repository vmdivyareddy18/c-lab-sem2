document.addEventListener('DOMContentLoaded',()=>{
  const inc = document.getElementById('inc')
  const reset = document.getElementById('reset')
  const status = document.getElementById('status')
  let n = 0
  inc.addEventListener('click',()=>{ n++; status.textContent = `Count: ${n}` })
  reset.addEventListener('click',()=>{ n=0; status.textContent = 'Reset to 0' })
})
// script note 4
// script note 7
// script note 10
