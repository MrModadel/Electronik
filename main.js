
//burger-menu
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

//surfacing
let surfacing__close = document.querySelector('.surfacing__close');
let surfacing = document.querySelector('.surfacing');

setTimeout(() => {
    setTimeout(() => {
        surfacing.style.opacity = '1';
    }, 300);
    surfacing.style.display = 'flex';
}, 10000);
surfacing__close.onclick = () => {
    surfacing.style.display = 'none';
    surfacing.style.opacity = '0';

}

//video

let video__close = document.querySelector('.video__close');
let video = document.querySelector('.video');
let btn = document.querySelector('.btn-sec');
let iframe = document.querySelector('.video iframe');
if (btn){
    btn.onclick = () => {
        setTimeout(() => {
            video.style.opacity = '1';
        }, 300);
        video.style.display = 'flex';
        iframe.src = ' https://www.youtube.com/embed/yfewY3J4Gf0?si=WUt66CnZV3Z1X8Se'
    }
}
if (video__close){
    video__close.onclick = () => {
        video.style.display = 'none';
        video.style.opacity = '0';
        iframe.src = ' '
    }
}


let telegramHs = document.querySelectorAll('.telegramH');
let whatsappHs = document.querySelectorAll('.whatsappH');

clickH(telegramHs, 'https://t.me/youwinbro')
clickH(whatsappHs, 'https://wa.me/79885457238')
function clickH(arr, id) {
    arr.forEach(item => {
        if (item){
            item.onclick = () => {
                location.assign(id)
            }
        }
      
    })
}