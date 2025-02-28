/* function pluck(array, propiedad) {
    La función llamada 'pluck' recibe como argumento un array de objetos llamado 'array' y el nombre de una
    propiedad.
    La función debe devolver un nuevo arreglo con solo los valores dentro de la propiedad recibida
    Ej:
    var productos = [{ name: 'TV LCD', price: 100}, { name: 'Computadora', price: 500 }]
    productos.pluck(productos, 'name') debería devolver ['TV LCD', 'Computadora']
    Pista: es una buena oportunidad para usar map.
*/

const productos = [{ name: 'TV LCD', price: 100},
                   { name: 'Computadora', price: 500 }];

console.log(pluck(productos,'price'));

function pluck(productos, price ) {
    const producto = productos.map(dato => dato.price);
    return producto;
}


