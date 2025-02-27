const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong']


sounds.forEach(sound => {
    const btn = document.createElement('button')
    btn.classList.add('btn')
    btn.innerText = sound
    btn.addEventListener('click',()=>{
        stopSong()
        document.querySelector(`#${sound}`).play()
    })
    document.querySelector('#buttons').appendChild(btn)
})

function stopSong(){
    sounds.forEach(sound =>{
        let song = document.getElementById(sound)
        song.pause()
        song.currentTime = 0
    })
}
