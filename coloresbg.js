const body = document.querySelector('body')

function setColor(){
    const caracteres = '0123456789ABCDEF'
    let rgbColor = '#';
    for (let i = 0; i < 6; i++){
        rgbColor += caracteres.charAt(Math.floor(Math.random() *16))
    }

    body.style.background = rgbColor;
    
    h2.innerHTML = rgbColor;
}

setColor();