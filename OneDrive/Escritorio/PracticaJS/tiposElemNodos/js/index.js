/* Coloca color de fondo rojo al primer div del body */

const div1 = document.body.firstElementChild;
div1.style.backgroundColor='red';

/* dentro del primer div1 coloca fondo amarillo al último eelemnto del div1 */
const parrafo3 = div1.lastElementChild;
parrafo3.style.backgroundColor = 'yellow';

/* la referencia del nodo hermano siguiente al div1 mediante la propiedad 'nextElementSibling' (sibling=hermano) y procedemos a cambiar el color del elemento 'ol' */

const ol = div1.nextElementSibling;
ol.style.backgroundColor = 'blue';

/* Obtenemos la referencia del último elemento de tipo 'li' mediante la propiedad 'lastElementChild' y seguidamente retrocedemos al hermano anterior para cambiar el color del Item 3: */

const li4 = ol.lastElementChild;
const li3 = li4.previousElementSibling;
li3.style.backgroundColor ='green';

/* Ahora obtenemos la referencia del siguiente nodo al objeto 'ol', que se trata del segundo div. Luego de obtener la referencia del div procedemos a acceder a la propiedad children que almacena una colección con todos sus nodos de tipo elemento hijo. Podemos recorrer dicha colección mediante un for of: */

const div2 = ol.nextElementSibling;
const hijos = div2.children
for(let elemento of hijos){
    elemento.style.backgroundColor ='yellow';
}

/* Por último vamos a obtener la referencia del nodo padre del div1 y cambiar el color (el padre del div1 es realmente el nodo elemento body): */

const padre=div1.parentElement
padre.style.backgroundColor ='black';

