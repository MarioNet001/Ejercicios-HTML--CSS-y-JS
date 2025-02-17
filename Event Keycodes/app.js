const insert = document.querySelector('.insert')

window.addEventListener('keydown',(e)=>{
    insert.innerHTML =/*html*/`
    <div class="key">
    ${e.key === '' ? 'space' : e.key}
    <small>event.key</small>
    </div>
    <div class="key">
  ${e.keyCode}
  <small>event.keyCode</small>
</div>
<div class="key">
  ${e.code}
  <small>event.code</small>
</div>
    `
})