 // la funcion recibe un array de numeros enteros y debe devolver otro arreglo con el doble de cada valor
// ej: doble([1, 2, 3]) devuelve [2, 4, 6]

function doble(array) {
    
    let arrDoble=[];
    for(let i=0;i<array.length;i++){
        arrDoble[i] =array[i]*2;
    }    
    return arrDoble;
}

console.log(doble([1,2,3]));
