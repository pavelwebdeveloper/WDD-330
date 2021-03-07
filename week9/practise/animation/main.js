// animation with setInterval()

/*const squareElement = document.getElementById('square');
let angle = 0;
setInterval( () => {
angle = (angle + 2) % 360;
squareElement.style.transform = `rotate(${angle}deg)`
}, 1000/60);*/



// animation with requestAnimationFrame

const squareElement = document.getElementById('square');
let angle = 0;
function rotate() {
angle = (angle + 2)%360;
squareElement.style.transform = `rotate(${angle}deg)`
window.requestAnimationFrame(rotate);
}
const id = requestAnimationFrame(rotate);

// the same animation ca be achieved merely by css in the styles.css file using css animation property and @keyframes