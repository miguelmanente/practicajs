/*Convertir la validación del ejercicio 6d) en una función separada
y llamarla dentro de un nueva función probando que todo que todo siga
funcionando igual que en el apartado anterior*/

function total(numero1, numero2){

    validateInteger(numero1);
    validateInteger(numero2);

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
        return true;
    }else{
        return false;
    }
 }

 let res = total(4.6,10.1);
 console.log(res);