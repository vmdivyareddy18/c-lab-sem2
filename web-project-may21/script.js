document.addEventListener('DOMContentLoaded',()=>{
  const btn = document.getElementById('action')
  const status = document.getElementById('status')
  let count = 0
  btn.addEventListener('click',()=>{
    count++
    status.textContent = `Clicked ${count} time${count>1? 's':''}`
    btn.style.transform = `scale(${1+count*0.02})`
  })
})
