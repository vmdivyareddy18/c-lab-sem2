document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('toggle');
    btn.addEventListener('click', () => {
        document.documentElement.classList.toggle('dark');
        console.log('Toggled theme (Jan 27 project).');
    });
    console.log('Web Combo Project (Jan 27) loaded.');
});
