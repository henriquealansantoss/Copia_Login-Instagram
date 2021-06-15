let time = 3500,
    indexImage = 0,
    images = document
    .querySelectorAll('.mobile img')
max = images.length;

function nextImg() {
    images[indexImage].classList.remove("selected");
    indexImage++

    if (indexImage >= max) {
        indexImage = 0;
    }

    images[indexImage].classList.add("selected");
}

function start() {
    setInterval(() => {
        // trocar imagem 
        nextImg();
    }, time);
}

window.addEventListener('load', start);