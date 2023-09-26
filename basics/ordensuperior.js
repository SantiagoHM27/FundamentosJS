// Funciones de Orden Superior
// High order Functions
/*
    Funciones que reciben funciones
    como parametros
*/

const myFunction = () => {
    console.log('Ejecuta Mi Función');
}
myFunction();
const sameFunction = myFunction;
sameFunction();

const otherSameFunction = myFunction;
otherSameFunction();

const funOne = () => {
    console.log('Ejecuta función One');
}

const funTwo = (username) => {
    console.log('Ejecuta Función Two');
    console.log('Holaa ' + username);
}
const funThree = (otherFunction) => {
    console.log('Inicia Función 3');
    otherFunction();
    console.log('Termina Funcion 3');
}

funOne();
funTwo('Santiago');
funTwo('Clark Kent');
funThree(funOne);
funThree(() => console.log('Soy una Arrow Function'));

