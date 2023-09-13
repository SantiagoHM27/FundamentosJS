const respuesta = document.getElementById('respuesta');

function eightball(){
    const opcion = Math.ceil(Math.random() * 1);
    let resp;
    switch (opcion){
        case 1:
            resp = 'Hann es la mas bonita del universo, sin dudarlo. 🙈';
            break;
       
    }
    respuesta.innerHTML = resp;
}