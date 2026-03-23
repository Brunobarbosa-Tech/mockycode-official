
let btnMobile = document.querySelector('#btn-mobile');
let line1 = document.querySelector('.line-mobile-1');
let line2 = document.querySelector('.line-mobile-2');
let menuMobile = document.querySelector('#menu-mobile');
let body = document.querySelector('body');

btnMobile.addEventListener('click', () => {
    line1.classList.toggle('ativo1')
    line2.classList.toggle('ativo2')
    menuMobile.classList.toggle('abrir')

    body.classList.toggle('no-overflow')
})
