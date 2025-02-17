const tags = document.querySelector("#tags")
const texarea = document.getElementById("textarea") 
const h2 = document.getElementById("tex-tag")
const randomBtn = document.getElementById("ruleta")

textarea.focus()

texarea.addEventListener("keyup",e =>{createTags(e.target.value)})

randomBtn.addEventListener("click",e =>{
    setTimeout(()=>{
        e.target.value = ""
    },10)
    randomSelector()
    randomBtn.innerText ="Otravez"
})

function createTags(value){
    let tags1 = value.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim())

    tags.innerHTML = "" 
    h2.innerHTML=""
    h2.textContent = "Los items son : "
    tags1.forEach(tag => {
        let auxtag = document.createElement("span")
        auxtag.classList.add("tag")
        auxtag.textContent = tag
        tags.appendChild(auxtag)
    });
}

function randomSelector () {
    let times = 40 
    let interval = setInterval(()=>{
        let randomTag = pickRandom()

        if(randomTag !== undefined){
            highlightTag(randomTag)
            setTimeout(()=>{
                unHighlTag(randomTag)
            },100)
        }
    },100)

    setTimeout(()=>{
        clearInterval(interval)
        setTimeout(()=>{
            let randomTag = pickRandom()
            highlightTag(randomTag)
        },100)
    }, times * 100)
}

function pickRandom(){
    let tags = document.querySelectorAll(".tag")
    return tags[Math.floor(Math.random()* tags.length)]
}

function highlightTag(tag){
    tag.classList.add("highlight")
}

function unHighlTag(tag){
    tag.classList.remove("highlight")
}
