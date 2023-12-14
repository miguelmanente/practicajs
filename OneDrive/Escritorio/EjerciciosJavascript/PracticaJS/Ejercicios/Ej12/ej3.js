// La funcion llamada 'fakeBinary' recibe como argumento un string con numeros
// y debe devolver un string en donde se remplaza los numeros menores de 5 con '0'
// y los numeros iguales o mayores a 5 con '1'
// Por ej:
// fakeBinary2('5627') devuelve "1101"
// fakeBinary("729") devuelve "101"

function fakeBinary2(string) {
    
    let enBinario = "";
    
    for (let i = 0; i < string.length; i++) {
        if (string[i] < 5) {
            enBinario += "0";
        } else {
            enBinario += "1";
        }
    }
    return enBinario;
}

console.log(fakeBinary2('5627'));
 