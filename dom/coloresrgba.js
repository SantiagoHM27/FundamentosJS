const body = document.querySelector('body');
const red = document.querySelector('#red');
const green = document.querySelector('#green');
const blue = document.querySelector('#blue');
const btnColor = document.querySelector('#btnColor');
const ba = document.querySelector('#ba');

function setColor(){
    // rgb (0, 255, 25)
    // rgba (0, 255, 34, 0.5)
    const redVal = red.value;
    const greenVal = green.value;
    const blueVal = blue.value;
    const baVal = ba.value /100;
    const rgbaColor = `rgb(${ redVal }, ${ greenVal }, ${ blueVal}, ${baVal})`;
    body.style.background = rgbaColor;
}

setColor();



red.addEventListener('input', setColor);
green.addEventListener('input', setColor);
blue.addEventListener('input', setColor);
ba.addEventListener('input', setColor);
