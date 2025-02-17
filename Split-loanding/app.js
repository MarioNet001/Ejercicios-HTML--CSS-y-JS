const left = document.querySelector('.left')
const right = document.querySelector('.right')
const conteiner = document.querySelector('.conteiner')

left.addEventListener('mouseenter',()=>{conteiner.classList.add('hover-left')})
left.addEventListener('mouseleave',()=>{conteiner.classList.remove('hover-left')}) 


right.addEventListener('mouseenter',()=>{conteiner.classList.add('hover-rigth')})
right.addEventListener('mouseleave',()=>{conteiner.classList.remove('hover-rigth')})