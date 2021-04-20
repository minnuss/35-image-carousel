const imageContainer = document.querySelector('.image-container');
const images = document.querySelectorAll('.image-container img')
const btnPrev = document.querySelector('.left');
const btnNext = document.querySelector('.rigth');

// keep track of active img index
let activeIdx = 0

// get dynamic width of image
let imageWidth = images[0].getBoundingClientRect().width
// console.log(imageWidth)

let interval = setInterval(() => {
    run()
}, 2000);

function run() {
    activeIdx++
    changeImage()
}

function changeImage() {
    if (activeIdx > images.length - 1) {
        activeIdx = 0
    } else if (activeIdx < 0) {
        activeIdx = images.length - 1
    }
    // move every image by imageWidth * activeIdx
    imageContainer.style.transform = `translateX(${-activeIdx * imageWidth}px)`
}

// if prev or next buttons are pressed, pause the interval, reset it
function resetInterval() {
    clearInterval(interval)
    interval = setInterval(run, 2000)
}

btnPrev.addEventListener('click', () => {
    activeIdx--
    changeImage()
    resetInterval()
})

btnNext.addEventListener('click', () => {
    activeIdx++
    changeImage()
    resetInterval()
})