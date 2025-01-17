/*const encabezadoH1 = document.getElementById("cabecera");
    alert(
      "Tipo del nodo: " +
        encabezadoH1.nodeType +
        "\n" + //Devuelve el tipo de nodo como un valor numérico en este caso devuelve 1 pq es un elemento del Html //
        "Nombre del nodo: " +
        encabezadoH1.nodeName + // Devuelve el nombre de la etiqueta (H1)
        "\n" +
        "Valor del nodo: " +  // Devuelve el contenido de un nodo de texto en este caso Null
        encabezadoH1.nodeValue
    );*/

// Ver contenido de nodo asociado a la etiqueta H1
// const encabezadoH1 = document.getElementById("cabecera"); /*Guardamos en una variable el atributo (iD) del elemento head*/
// const textoEncabezadoH1 = encabezadoH1.firstChild;  /* Seleccionamos el 1er node con el atributo firstChild */
// alert("El texto del encabezado <h1> es: "+ textoEncabezadoH1.nodeValue); /* Vemos el contendido con nodevalue */

// o también se puede hacer de la siguiente manera
//const encabezadoH1 = document.getElementById("cabecera");
//alert("El texto del encabezado <h1> es: " + encabezadoH1.innerHTML);

//Modificar estilos y atributos de los elementos HTML con style
//const tamanioFuente = prompt("Tamaño de la fuente (en pixeles): ");
//document.getElementById("cabecera").style.fontSize = tamanioFuente;

//Toma todas las etiquetas que tengan clase cabecera y mediante la variable color van cambiando con random
const listaCabeceras =document.getElementsByClassName("cabecera");
let color ="hsl(" + Math.floor(Math.random() * 361) + ",100%," +" 50%)";
for (let i = 0; i <listaCabeceras.length; i++){
  listaCabeceras[i].style.color = color;
}


// Toma las etiquetas p y les aplica color de la fuente y el color de fondo como también el tamaño
const listaParrafos = document.getElementsByTagName("p")

for (let i = 0; i <listaParrafos.length; i++) {
  listaParrafos[i].style.color ="white";
  listaParrafos[i].style.backgroundColor = "black";
  listaParrafos[i].style.fontSize ="1em"
}






