document.addEventListener('DOMContentLoaded',()=>{
  const btn = document.getElementById('action')
  const status = document.getElementById('status')
  let t = 0
  btn.addEventListener('click',()=>{
    t++
    status.textContent = `Done ${t} time${t>1?'s':''}`
  })
})
