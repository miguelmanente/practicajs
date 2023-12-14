/*function buscarAmigo(amigos, nombre) {
  La funcion llamada 'buscarAmigo' recibe como argumento un array llamado 'amigos' que contiene
  en cada posición del arreglo un objeto que tiene como propiedades 'nombre' y 'edad'. También
  recibe un string llamado 'nombre'.
  Debe devolver el objeto cuya propiedad 'nombre' coincida con el string 'nombre' recibido por argumento.
  Ej:
  var amigos = [{ nombre: 'toni', edad: 33 } , { nombre: 'Emi', edad: 25 }];
  buscarAmigo(amigos, 'toni') debe devolver { nombre: 'toni', edad: 33 };
*/

const amigos = [{nombre: 'Miguel', edad:61},
                {nombre: 'Belkis', edad:57},
                {nombre: 'Romina', edad:35}];

function buscarAmigos(amigos, nombres){
  const dato = amigos.find(elemento => {
    return elemento.nombre === nombres;
  });  
  console.log(dato);
}

buscarAmigos(amigos,"Romina");


/* const amigos = [{nombre: 'Miguel', edad:61},
                {nombre: 'Belkis', edad:57},
                {nombre: 'Romina', edad:35}];

function buscarAmigos(nombres){
    return nombres.nombre === 'Miguel';
}

console.log(amigos.find(buscarAmigos)); */