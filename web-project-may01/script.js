document.addEventListener('DOMContentLoaded',()=>{
  const btn=document.getElementById('toggle')
  const note=document.getElementById('note')
  btn.addEventListener('click',()=>{
    document.documentElement.classList.toggle('dark')
    note.textContent = document.documentElement.classList.contains('dark') ? 'Dark mode active' : 'Light mode active'
  })
})
