document.querySelector('.connect-btn').addEventListener('click', function () {
    alert('Thank you for connecting with us! We will be in touch soon.');
});

const menuIcon = document.querySelector('.menu-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
