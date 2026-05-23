document.addEventListener('DOMContentLoaded',()=>{
  const btn = document.getElementById('toggle')
  const status = document.getElementById('status')
  let on = false
  btn.addEventListener('click',()=>{
    on = !on
    status.textContent = on ? 'On' : 'Off'
    document.body.style.background = on ? '#e8fff5' : ''
  })
})
// script note 4
// script note 7
