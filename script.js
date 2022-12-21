const pianoKeys = document.querySelectorAll(".piano-keys .key")
const volumeSlider = document.querySelector(".volume-slider input")
const keysCheckbox = document.querySelector(".keys-checkbox input")

let allKeys = []
audio = new Audio(`tunes/a.wav`) 

function playNote(key) {
    audio.src = `tunes/${key}.wav` 
    audio.play() 

    const clickedKey = document.querySelector(`[data-key="${key}"]`) 
    clickedKey.classList.add("active") 
    setTimeout(() => { 
        clickedKey.classList.remove("active")
    }, 150)
}

pianoKeys.forEach(key => {
    allKeys.push(key.dataset.key) 
    
    key.addEventListener("click", () => playNote(key.dataset.key))
})

function handleVolume(e) {
    audio.volume = e.target.value 
}

function showHideKeys () {
    pianoKeys.forEach(key => key.classList.toggle("hide"))
}

function pressedKey(e) {
    if(allKeys.includes(e.key)) playNote(e.key)
}

keysCheckbox.addEventListener("click", showHideKeys)
volumeSlider.addEventListener("input", handleVolume)