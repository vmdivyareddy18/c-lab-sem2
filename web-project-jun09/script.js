document.addEventListener('DOMContentLoaded',()=>{
  const btn = document.getElementById('doit')
  const status = document.getElementById('status')
  let n = 0
  btn.addEventListener('click',()=>{
    n++
    status.textContent = `Done ${n} time${n>1?'s':''}`
  })
})
// script note 4
