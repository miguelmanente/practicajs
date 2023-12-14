/*Crear un numero aleatorio entre 0 y 1 utilizando la funcion Math.random(), si el valor es
mayor o igual que 0.5 mostrar un alerta con el mensaje "Greater than or equal to 0,5" y
sino una alerta con el mensaje "Lower than 0,5" */

let numero = Math.random();

if (numero >= 0.5){
    alert("Greater than or equal to 0,5");
}else{
    console.log("Lower than 0,5");
}