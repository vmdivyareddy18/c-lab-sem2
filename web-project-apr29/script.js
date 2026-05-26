document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('theme')
    btn.addEventListener('click', () => {
        document.documentElement.classList.toggle('dark')
        const el = document.querySelector('main p')
        el.textContent = document.documentElement.classList.contains('dark') ? 'Dark mode on' : 'Dark mode off'
    })
})
