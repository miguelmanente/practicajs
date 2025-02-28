/* Copiar la función anterior y agregarle una validación para controlar si alguno 
de los parametros no es un número; de no ser un número mostrar un alert aclarando 
que uno de los parámetros tiene error y retornar el valor NaN como resultado  */

function suma(numero1, numero2){
    if(typeof numero1 === 'number' && typeof numero2 === 'number'){
        let resultado = numero1 + numero2;
        return resultado;
    }else{
        alert("Uno de los parametros ingresados no es un número");
        return NaN
    }
}

console.log(suma(200,'b'));