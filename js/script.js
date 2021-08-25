const navButton = document.querySelector('.nav__burger');

navButton.addEventListener('click', e => {
    navButton.classList.toggle('active');
    document.querySelector('.nav__burger-menu_mobile').classList.toggle('active');
    document.querySelector('body').classList.toggle('lock')
})