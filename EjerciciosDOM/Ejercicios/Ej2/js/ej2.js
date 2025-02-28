
    // La función llamada 'stringMasLarga', recibe como argumento un arreglo de strings llamado 'strings'
    // y debe devolver el string más largo que hay en el arreglo (Es decir el de mayor cantidad de caracteres)
    // Ej:
    // stringMasLarga(['hi', 'hello', 'ni hao', 'guten tag']); debe retornar 'guten tag'
    // stringMasLarga(['JavaScript', 'HTML', 'CSS']); debe retornar 'JavaScript'
  
  
  // No modifiques nada debajo de esta linea //
  
  //module.exports = stringMasLarga
  
  let texto = ['boca','river','independiente','colon'];

  console.log(stringMasLarga(texto));

  function stringMasLarga (texto) {
    for(let i=0;i<texto.length-1;i++){
      if (texto[i].length > texto[i+1].length){
            mayor = texto[i];
      }
    }
    return mayor;
  }

  /*let texto = ['boca','river','independiente','colon'];

  console.log(stringMasLarga(texto));

  function stringMasLarga (texto) {
    let mayor =texto[0].length;
    for(let i=1;i<texto.length;i++){
        if (texto[i].length > mayor){
          mayor = texto[i].length;
          var pos=i;
      }
    }
    let resul = texto[pos];
    return resul;
  }*/