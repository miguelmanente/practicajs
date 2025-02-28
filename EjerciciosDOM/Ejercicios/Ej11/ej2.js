// La funcion llamada recibe como argumento un objeto 'invitados', en el objeto tenemos objetos que representan los invitados
    // a una fiesta en donde todos tienen una propiedad "edad" .
    // debe retornar la cantidad de invitados que son menores de 18.
    
let invitados = {Luna: {edad: 25},
                 Sebas: {edad: 7},
                 Marce: {edad: 34},
                 Nicky: {edad: 15}
};

function cuantosMenores(invitados) {
    const edades = Object.values(invitados);
    return edades.filter(inv => inv.edad < 18).length;
}
   
console.log(cuantosMenores(invitados)); 
