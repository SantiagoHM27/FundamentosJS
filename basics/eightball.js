const respuesta = document.getElementById('respuesta');

function eightball(){
    const opcion = Math.ceil(Math.random() * 1);
    let resp;
    switch (opcion){
        
        case 1:
            resp = 'Todo saldra bien';
            break;
        default:
            resp = 'No lo se, weno si se pero no te wa a decir';
        case 2:
            resp = 'De plano no'
            break;
        case 3:
            resp = 'si es lo que tu deseas';
            break;
        case 4:
            resp = 'Vida solo es una'
            break;
        case 5:
            resp = 'nel padrino'
            break;
        case 6:
            resp = 'Solo soy una bola maistro'
            break;
        case 7:
            resp = 'no we'
            break;
    }
    respuesta.innerHTML = resp;
}