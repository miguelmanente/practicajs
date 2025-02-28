/*Copiar y renombrar la función suma del ejercicio 6b) y agregarle una llamada a la
función del ejercicio 6c. y que valide que los números sean enteros. En caso que haya
decimales mostrar un alert con el error y retomar el número convertido a entero(redondeado)  */

function total(numero1, numero2,fn){
    fn();
    if(typeof numero1 === 'number' && typeof numero2 === 'number' && numero1 - Math.floor(numero1) == 0 && numero2 - Math.floor(numero2) == 0){
        let resultado = numero1 + numero2;
        return resultado;
    }else{
        resultado = numero1 + numero2;
        return Math.round(resultado);
    }
}

function validateInteger(numero){
    if(Number.isInteger(numero)){
        return "verdadero";
    }else{
        return "False";
    }
 }
 let res = total(6.3,10.1,validateInteger);
 console.log(res);