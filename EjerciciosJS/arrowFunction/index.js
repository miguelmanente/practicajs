/* funciones flechas son anónimas, no se coloca nombre a la función */
/* Se puede escribir como la siguiente línea */
// let saludar = (nombre) => ("HOLA  " + nombre);

/* O se puede escribir como la siguiente línea sin paréntesis en los parámetros y prescindir de return*/
//let saludar = nombre => "HOLA " + nombre;

//console.log(saludar("Miguel"));

//let suma = (a,b) => a + b;

//console.log("El resultado de la suma es: " + suma(7,5));

/* Cálculo del factorial con funciones flechas */
factorial = 1;
let fac = (numero) => {
    while (numero > 0){
        factorial = factorial * numero;
        numero --;
    }
   return factorial;
}
console.log("El factorial del número es: "+fac(7));
