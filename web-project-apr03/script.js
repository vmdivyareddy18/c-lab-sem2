document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('toggle');
  btn.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');
    console.log('T