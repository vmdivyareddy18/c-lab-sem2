document.addEventListener('DOMContentLoaded',()=>{
  const btn = document.getElementById('run')
  const status = document.getElementById('status')
  let t = 0
  btn.addEventListener('click',()=>{
    t++
    status.textContent = `Ran ${t} time${t>1?'s':''}`
  })
})
// script note 4
// script note 7
