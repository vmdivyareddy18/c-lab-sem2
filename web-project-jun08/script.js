document.addEventListener('DOMContentLoaded',()=>{
  const btn = document.getElementById('start')
  const status = document.getElementById('status')
  let c = 0
  btn.addEventListener('click',()=>{
    c++
    status.textContent = `Started ${c} time${c>1?'s':''}`
  })
})
// script note 4
// script note 7
