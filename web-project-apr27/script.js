document.addEventListener('DOMContentLoaded', ()=>{
  const btn = document.getElementById('toggle')
  if(btn) btn.addEventListener('click', ()=>{
    document.documentElement.classList.toggle('dark')
    console.log('Toggled theme.')
  })
  console.log('web-project-apr27 loaded')
})
