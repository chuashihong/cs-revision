// script.js
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', event => {
        document.querySelectorAll('section').forEach(section => {
            section.style.display = 'none';
        });
        const target = document.querySelector(link.getAttribute('href'));
        if (target) target.style.display = 'block';
    });
});
