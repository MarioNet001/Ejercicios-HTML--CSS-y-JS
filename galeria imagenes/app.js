const body = document.body
const sliders = document.querySelectorAll('.slide')
const leftBnt = document.getElementById('left')
const rightBnt = document.getElementById('right')

let activeSlider = 0 
rightBnt.addEventListener('click', ()=> {
    activeSlider ++
    activeSlider = checkSliderMax(activeSlider,sliders)
    setBgToMain()
    setActiveSlider()
})

leftBnt.addEventListener('click', () => {
    activeSlider --
   activeSlider = checkSliderMin(activeSlider,sliders)
    setActiveSlider()
    setBgToMain()
})

function setBgToMain(){
    let aux = activeSlider + 1
    aux = checkSliderMax(aux,sliders)
    aux = checkSliderMin(aux,sliders)
    body.style.backgroundImage = sliders[aux].style.backgroundImage
    
    
}
function checkSliderMax(aux,arry){
    if (aux > arry.length -1) {
        return aux = 0
    }else {return aux}
}
function checkSliderMin(aux,arry){
    if (aux < 0) {
        return aux = arry.length -1
    }else {return aux}
}
function setActiveSlider(){
    sliders.forEach((slider) => {
        slider.classList.remove('active')
    })
    sliders[activeSlider].classList.add('active')
}