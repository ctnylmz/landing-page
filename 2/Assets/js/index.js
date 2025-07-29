const mobileIconButton = document.querySelector('#mobile-icon-button');
const headerMenu = document.querySelector('.header-menu');

mobileIconButton.addEventListener('click', () => {
    if (headerMenu.style.maxHeight === '0px' || headerMenu.style.maxHeight === '') {
        headerMenu.style.maxHeight = "300px";
    } else {
        headerMenu.style.maxHeight = "0px";
    }
});
