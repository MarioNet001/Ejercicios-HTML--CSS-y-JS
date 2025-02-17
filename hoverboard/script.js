const container = document.querySelector("#container")
const colors = ["#e74c3c", "#8e44ad", "#3498db", "#e67e22", "#2ecc71"] 
const SQUARES = 600

for (let i = 0; i < SQUARES; i++) {
    const squire = document.createElement("div")
    squire.classList.add("square")

    squire.addEventListener("mouseover",()=>{setColor(squire)})
    squire.addEventListener("mouseout",()=>{removeColor(squire)})

    container.appendChild(squire)
}

function setColor(elemet){
    const color = randomeColor()
    elemet.style.background = color
    elemet.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(elemet) {
    elemet.style.background = "#1d1d1d"
    elemet.style.boxShadow = `0 0 2px #000`
}

function randomeColor() {
    return colors[Math.floor(Math.random() * colors.length)]
}