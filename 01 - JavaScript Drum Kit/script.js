

function playSound(e) { 
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`); // connects the aduio to the key
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`); // conects the div/class of the key in css

    if (!audio) return; // stop the function from running all together
    audio.currentTime = 0; // rewind to start of sound

    audio.play(); // plays the audio

    key.classList.add('playing'); // connecting the 'playing' class from css to the js file
    
}


function removeTransition(e) {
    if(e.propertyName !== 'transform') return; // skip it if it's not a transform
    this.classList.remove('playing'); // removes the playing class effect after key is pressed
}
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));


window.addEventListener('keydown', playSound);