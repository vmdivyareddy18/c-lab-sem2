document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('toggle')
  const status = document.getElementById('status')
  btn.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark')
    status.textContent = document.documentElement.classList.contains('dark') ? 'Dark mode active' : 'Light mode active'
  })
})
