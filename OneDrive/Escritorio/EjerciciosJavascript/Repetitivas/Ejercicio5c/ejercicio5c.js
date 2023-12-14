/*Crear una variable llamada "sentece" que tenga un string vacío, luego al array del punto 
a) recorrerlo con un bucle for para ir guardando cada palabra dentro de la variable sentence.
Al final mostrar una única alerta con la cadena completa */

let sentece = [];

let array = ["UNO", "DOS", "TRES", "CUATRO", "CINCO"];
for(let i=0; i<array.length;i++){
    sentece += array[i] + " "
}

alert(sentece);

