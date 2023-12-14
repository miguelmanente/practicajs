 // La funcion recibe un array 'array' de strings y numeros  como parametro
// la funcion debe retornar true o false dependiendo de si 'lobo' esta en el array o no
// Por ej:
// loboEstaONoEsta(['hola', 1, 3,  'palabra']) debe devolver false
// ideas(['hola', 'buena', 'lobo', 4, 5, ]) debe devolver true


 function loboEstaONoEsta(array) {
    let estaONo = array.includes('lobo');
    return estaONo;
  }
  
  console.log(loboEstaONoEsta(['hola', 'buena', 'lobo', 4, 5, ]));