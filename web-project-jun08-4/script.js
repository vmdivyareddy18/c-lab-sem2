document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('tap')
    const status = document.getElementById('status')
    let n = 0
    btn.addEventListener('click', () => {
        n++
        status.textContent = `Tapped ${n} time${n > 1 ? 's' : ''}`
    })
})
