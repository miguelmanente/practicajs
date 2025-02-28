/*function sumArray(array, n) {
  La función llamada 'sumArray' recibe como argumento un arreglo de números ordenados llamado 'array' y un número
  entero llamdo 'n' y debe devolver true si alguna combinación de dos números cualesquiera del arreglo sumados
  dan n, y devuelva false si ninguna combinación de dos números sumados da como resultado el número n.

 Ej:
  sumArray([2,5,7,10,11,15,20], 13)  debería devolver true ya que 2 + 11 = 13
  sumArray([2,5,7,10,11,15,20], 14)  debería devolver false ya que no es posible sumar 14 con dos números del arreglo
  Pista: Podes usar bucles/ciclos anidados
  Aclaración: No es válido sumar el mismo número dos veces
  Ej:
  sumArray([2,5,7,10,11,15,20], 4)  Si bien 2 + 2 = 4 no está permitido sumar el mismo número dos veces
  por lo tanto también debería devolver false en este ca
*/

let vector=[2,5,7,10,13,15,20];

let n = 15;

console.log(sumArray(vector, n));

function sumArray(vector, n){
   for(let i=0;i<vector.length;i++){
        if((vector[0]+vector[i+1] === n) && (vector[0] != vector[i+1])){
            var res = true;
            break;
        }else{
            var res = false;
        }      
    }
    
    return res;
}

