document.addEventListener('DOMContentLoaded',()=>{
  const btn = document.getElementById('show')
  const input = document.getElementById('text')
  const status = document.getElementById('status')
  btn.addEventListener('click',()=>{
    status.textContent = input.value || 'Nothing to show'
  })
})
// script note 4
