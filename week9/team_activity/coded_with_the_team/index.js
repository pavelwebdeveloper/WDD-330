document.querySelector('div.keys').addEventListener('keydown', function(event) {
    let key = event.keyCode;
    let audio = document.querySelector(`[data-key="${key}"]`);
    audio.play();
});