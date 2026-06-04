document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('go')
    const status = document.getElementById('status')
    let k = 0
    btn.addEventListener('click', () => {
        k++
        status.textContent = `Triggered ${k} time${k > 1 ? 's' : ''}`
    })
})
// script note 4
