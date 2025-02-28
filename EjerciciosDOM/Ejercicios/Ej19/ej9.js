// la funcion recibe un array de objetos en donde se detalla nombre y tipo de dieta de los integrantes de un meeting
// debe retornar un objeto que diga cuantos menus de que tipo de dieta hay que pedir
// (a fines practicos solo hay dieta "standard" y "vegan")
// Por ej:
// pedirComida([{nombre: "Harry", dieta: "standard"}, {nombre: "Luna", dieta: 'vegan'}, {nombre: "Goyle", dieta: "standard"}])
// retorna {standard: 2, vegan: 1}

function pedirComida(array) {
   
    let comida = {standard:0, vegan: 0 };
 
    for(let item of array){
      if(item.dieta=="standard"){
        comida.standard++;
      }
      else{
        comida.vegan++;
      }
    }
    return comida;
}

console.log(pedirComida([{nombre: "Harry", dieta: "standard"}, {nombre: "Luna", dieta: 'vegan'},{nombre: "Goyle", dieta: "standard"}]));
