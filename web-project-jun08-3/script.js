document.addEventListener('DOMContentLoaded',()=>{
  const btn = document.getElementById('go')
  const status = document.getElementById('status')
  let c = 0
  btn.addEventListener('click',()=>{
    c++
    status.textContent = `Goed ${c} time${c>1?'s':''}`
  })
})
// script note 4
