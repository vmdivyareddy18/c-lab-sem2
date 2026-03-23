document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('toggle');
    btn.addEventListener('click', () => {
        document.documentElement.classList.toggle('dark');
        console.log('Toggled theme (Feb 06 project).');
    });
    console.log('Web Combo Project (Feb 06) loaded.');
});
