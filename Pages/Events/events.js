const prevButtons = document.querySelectorAll('.prev');
const nextButtons = document.querySelectorAll('.next');

prevButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
        alert('Previous Slide');
    });
});

nextButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
        alert('Next Slide');
    });
});
