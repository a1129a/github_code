// scripts.js
window.addEventListener('resize', function() {
    const container = document.querySelector('.container');
    const isMobile = window.innerWidth <= 768;

    if (isMobile) {
        container.style.flexDirection = 'column';
    } else {
        container.style.flexDirection = 'row';
    }
});