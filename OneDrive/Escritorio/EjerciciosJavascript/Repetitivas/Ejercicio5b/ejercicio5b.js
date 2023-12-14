/*Al array anterior 5a) convertir la primera letra de cada palabra en mayúscula 
y mostrar una alerta por cada palabra modificada. */

let array = ["uno", "dos", "tres", "cuatro", "cinco"];
let c2 = '';
let palabra = [];

for(let i = 0;i < array.length; i++){
    
    letra = array[i].length;
    palabra = array[i];
    let c1=palabra[0].toUpperCase();
    
    for(let j=1;j<letra;j++){
        c2 += palabra[j].toLocaleLowerCase();
    }
    alert(c1+c2);
    c2='';
}
