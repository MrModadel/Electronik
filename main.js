

let but = document.querySelector('.but-menu');
let close = document.querySelector('.burgerMenu__close');
let burgerMenu = document.querySelector('.burgerMenu');

but.onclick = () => {
    if (burgerMenu.classList[1] !== "active-br") {
        setTimeout(() => {
            burgerMenu.style.bottom = '0';
        }, 300);
        burgerMenu.classList.add('active-br');
    } else {
        burgerMenu.classList.remove('active-br');
        burgerMenu.style.bottom = '-100%';
    }
}

close.onclick = () => {
    burgerMenu.classList.remove('active-br');
    burgerMenu.style.bottom = '-100%';
}