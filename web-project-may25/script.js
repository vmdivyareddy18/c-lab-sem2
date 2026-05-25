document.addEventListener('DOMContentLoaded',()=>{
  const btn = document.getElementById('update')
  const status = document.getElementById('status')
  let n = 0
  btn.addEventListener('click',()=>{
    n++
    status.textContent = `Updated ${n} time${n>1?'s':''}`
  })
})
