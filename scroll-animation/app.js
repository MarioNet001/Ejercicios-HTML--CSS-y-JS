const boxes = document.querySelectorAll('.box')
const loading = document.querySelector('.Loading');
const content = document.querySelector('.content');

let load = 0;

let int = setInterval(blurring, 30);

function blurring() {
    load++
    if (load > 99) {
        clearInterval(int)

    }
    loading.innerText = `cargando ${load}% `
    loading.style.opacity = scale(load, 0, 100, 1, 0)
    content.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}

const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min
}

window.addEventListener('scroll', checkBoxes)

checkBoxes()

function checkBoxes() {
    const triggerBottom = window.innerHeight / 5 * 4

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top

        if(boxTop < triggerBottom) {
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    })
}