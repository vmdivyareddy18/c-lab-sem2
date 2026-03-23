document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('toggle');
    btn.addEventListener('click', () => {
        document.documentElement.classList.toggle('dark');
        console.log('Toggled theme (Feb 03 project).');
    });
    console.log('Web Combo Project (Feb 03) loaded.');
});
