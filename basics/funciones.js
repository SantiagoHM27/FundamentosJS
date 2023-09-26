// Funciones con Javascript

/*
function nombre(params){
    body function
}
*/
/**
 const nombre = function(params){
    body function
 }
 */
// funcion sin parametros sin retorno
function saluda(){
    console.log('Hellooooo!');
}
saluda();

// funcion con parametros sin retorno
const saludaA = function(name){
    console.log(`Hola ${ name }`);
}
saludaA('Spiderman');

// funcion con paramtros y retorno
const duplica = function(num){
    return num * 2;
}
const doble = duplica(26);
console.log(doble);

// Arrow Function, funciones de flecha ES6

/*
(params) => {
    body function
}
*/
const getFullName =(firstName, lastName) =>{
    return firstName + '' + lastName;
}
const nombre = getFullName('Peter', 'Parker');
console.log(nombre);

// Podemos omitir () con un unico parametro
const minusculas = (word) => {
    return word.toLowerCase();
}
console.log(minusculas('HELLO'))
const mayusculas = word => {
    return word.toUpperCase();
}
console.log(mayusculas ('hello'));

// podemos omitir llaves y return si solo hay una linea
const cuadrado = num => num * num
console.log(cuadrado(25));
