const respuesta = document.getElementById('respuesta');

function eightball(){
    const opcion = Math.ceil(Math.random() * 8);
    let resp;
    switch (opcion){
        case 1:
            resp = 'Todo Saldra bien!';
            break;
        case 2:
            resp = 'es el cachorro ma';
            break;
        case 3:
            resp = 'sexo anal';
            break;
        case 4:
            resp = 'ohh me vengo';
            break;
        case 5:
            resp = 'De plano no';
            break;
        case 6:
            resp = 'si';
            break;
        case 7:
            resp = 'el bra';
            break;
        default:
            resp = 'No lo sé';
    }
    respuesta.innerHTML = resp;
}