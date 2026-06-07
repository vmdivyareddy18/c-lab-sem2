document.addEventListener('DOMContentLoaded',()=>{
  const btn = document.getElementById('press')
  const status = document.getElementById('status')
  let clicks = 0
  btn.addEventListener('click',()=>{
    clicks++
    status.textContent = `Pressed ${clicks} time${clicks>1?'s':''}`
  })
})
