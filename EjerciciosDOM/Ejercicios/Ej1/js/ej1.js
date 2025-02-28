/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
//function menorMayor(numeros)
// La función llamada 'menorMayor' recibe como argumento un arreglo de números llamado 'numeros' y debe devolver un
// arreglo que contenga el menor número del arreglo 'numeros' en la posición cero y el mayor número del arreglo
// 'numeros' en la posición 1.
// Ej:
// menorMayor([4, 6, 1, 7, 15]) debe retornar [1, 15]
// ya que 1 es el número más chico (menor) dentro del arreglo [4, 6, 1, 7, 15]
// y 15 es el número más grande (mayor) dentro del arreglo [4, 6, 1, 7, 15]

/* let numero = [3, 15, 1, 8, 10];

console.log(menorMayor(numero));

function menorMayor(numero) {
    let menor = numero[0];
    let mayor = numero[0];

    for (let i = 1; i < numero.length; i++) {
        if (numero[i] > mayor) {
            mayor = numero[i];
        }
        if (numero[i] < menor) {
            menor = numero[i];
        }
    }
    let menorMayor =[menor,mayor];
    return (menorMayor);
} */

/*let numero = [3, 15, 1, 8, 10];

console.log(numero);

numero.sort(function(a, b){
    return a - b
});

console.log(numero);

console.log([numero[0],numero[4]]);

//let menor = numero[0];
//let mayor =numero[4];

//console.log('[',menor, mayor,']');*/



///**************************************  PRACTICA CON FUNCIONES  ******************************************* */




//Mostrar un arreglo a través de una funcion
/*  function arreglo(numeros){
    console.log(numeros);
}
arreglo([2, 3, 4, 5, 6, 7]); */

//Mostrar un arreglo con foreach y funciones
function arreglo(numeros){
    numeros.forEach(function(dato){console.log(dato)}); 
}
arreglo([2, 3, 4, 5, 6, 7]); 

//Mostrar un arreglo con foreach y funciones flecha
/* function arreglo(numeros){
    numeros.forEach((dato) => console.log(dato)); 
}
arreglo([2, 3, 4, 5, 6, 7]); */



//funcion sumar todo el array

/*function sumarArray(numeros){
    let suma = numeros.reduce((acumulador,numero) => acumulador + numero);
    return suma;
}
console.log("la suma total del Array es: "+sumarArray([2, 3, 4, 5, 6, 7])); */

//funcion sumar con forEach
/*let suma=0;

function sumarArray(numeros){
    numeros.forEach(function(a){
        suma = suma + a;
    });
    return suma;
}
console.log("la suma total del Array es: "+sumarArray([2, 3, 4, 5, 6, 7]));*/

//funcion sumar con forEachlet suma=0;
let suma = 0;
function sumarArray(numeros){
    numeros.forEach((a) => suma += a);
    return suma;
}
console.log("la suma total del Array es: "+sumarArray([2, 3, 4, 5, 6, 7]))
