const smallCups = document.querySelectorAll('.cup-small')
const liters = document.getElementById('liters')
const percentage = document.getElementById('percentage')
const remained = document.getElementById('remained')

updateBigCup()
smallCups.forEach((cup,indx)=>{
    cup.addEventListener('click',()=>highlightCups(indx))
})


function highlightCups (indx) {
    if (indx ===7 && smallCups[indx].classList.contains('full')) {
        indx--
    } else if (smallCups[indx].classList.contains('full') && !smallCups[indx].nextElementSibling.classList.contains('full')) {
        indx--
    }
    smallCups.forEach((cup,indx2)=>{
        if (indx2<=indx) {
            cup.classList.add('full')
        } else {
            cup.classList.remove('full')
        }
    })

    updateBigCup()
}

function updateBigCup(){
    let fullCups = document.querySelectorAll('.cup-small.full').length
    let totalCups = smallCups.length

    if (fullCups === 0) {
        percentage.style.visibility = 'hidden'
        percentage.style.height = 0
    } else {
        percentage.style.visibility = 'visible'
        percentage.style.height = `${fullCups/totalCups * 300}px`
        percentage.innerText = `${fullCups/totalCups * 100}%`
    }
    if (fullCups === totalCups) {
        remained.style.visibility = 'hidden'
        remained.style.height = 0
    } else {
        remained.style.visibility = 'visible'
        liters.innerText = `${2-(250*fullCups/1000)}L`
    }
}
