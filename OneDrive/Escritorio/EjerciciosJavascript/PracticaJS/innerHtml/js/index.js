/* La propiedad innerHTML solo esta presente en los nodos de tipo elemento y no en los nodos de tipo texto. Si accedemos a su valor nos retorna un string con todos los nodos de tipo texto y nodos elementos que contiene hacia abajo en el árbol de nodos de la página web.

Por ejemplo si accedemos a la propiedad innerHTML del nodo elemento 'body' luego recuperamos un string con todo el contenido del body: */

alert(document.body.innerHTML)

/* La propiedad innerHTML solo esta presente en los nodos de tipo elemento y no en los nodos de tipo texto. Si accedemos a su valor nos retorna un string con todos los nodos de tipo texto y nodos elementos que contiene hacia abajo en el árbol de nodos de la página web.

Por ejemplo si accedemos a la propiedad innerHTML del nodo elemento 'body' luego recuperamos un string con todo el contenido del body: */

/* setTimeout(() => {
    const lista1 = document.querySelector("#lista1"); 
    lista1.innerHTML = `
    <li>Uno</li>
    <li>Dos</li>
    <li>Tres</li>
    <li>Cuatro</li>`
}, 3000) */

/* Vea luego de 3 segundo como la página web (la ventana que se encuentra abaja) se modifica su contenido (no he cambiado la página HTML original de la derecha, tener en cuenta que la propiedad innerHTML modifica el DOM en memoria y no modifica el archivo HTML físicamente)

Veamos otro ejemplo de como crear una tabla HTML en forma dinámica: */
let tabla1 = '<table id="tabla1>';
for(let fila=1;fila<10;fila++){
    tabla1 += '<tr>'
    for(let columna=1;columna<10;columna++){
        tabla1 +=`<td>(${fila}-${columna})</td>`
    }
    tabla1 += '</tr>'
}
tabla1 += '</table>'
document.querySelector("#divtabla1").innerHTML=tabla1
document.querySelector("#tabla1").style.border='1px solid #f00'
document.querySelector("#tabla1").style.borderCollapse='collapse'