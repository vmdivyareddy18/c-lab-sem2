document.addEventListener('DOMContentLoaded',()=>{
  const btn = document.getElementById('click')
  const status = document.getElementById('status')
  let count = 0
  btn.addEventListener('click',()=>{
    count++
    status.textContent = `Clicked ${count} time${count>1?'s':''}`
  })
})
// script note 4
