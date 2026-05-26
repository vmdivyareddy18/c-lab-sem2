document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('toggle')
  const info = document.getElementById('info')
  btn.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark')
    info.textContent = document.documentElement.classList.contains('dark') ? 'Dark mode active' : 'Light mode active'
  })
})
