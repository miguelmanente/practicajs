/* Crear una función "validateInteger" que reciba un número como parámetro y
 devuelva verdadero si es un número entero. */

 function validateInteger(numero){
    if(Number.isInteger(numero)){
        return "verdadero";
    }else{
        return "falso";
    }
 }

 console.log(validateInteger(25));