const open = document.getElementById('open')
const close = document.getElementById('close')
const container = document.querySelector('.container')
const search = document.querySelector('.search')
const input = document.querySelector('.input')
const btn = document.querySelector('.bnt-search')

open.addEventListener('click', () => container.classList.toggle('show-nav'))
close.addEventListener('click', () => container.classList.toggle('show-nav'))

btn.addEventListener('click', () => {
    search.classList.toggle('active')
    input.focus()
})
