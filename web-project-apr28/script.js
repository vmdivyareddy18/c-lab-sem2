document.addEventListener('DOMContentLoaded',()=>{
  const btn=document.getElementById('theme')
  btn.addEventListener('click',()=>{
    document.documentElement.classList.toggle('dark')
    console.log('theme toggled')
  })
})
