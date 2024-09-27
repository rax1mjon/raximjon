document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu');
    const navLinks = document.getElementById('nav-menu');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('login');
    const navLinks = document.getElementById('form');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active-form');
    });
});


