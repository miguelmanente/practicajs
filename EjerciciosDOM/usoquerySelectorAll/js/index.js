/* El método querySelectorAll retorna una colección con todos los objetos HTML que cumplen el selector CSS pasado como parámetro. */

/* Uso de querySelectorAll con selector id */
const lista1 = document.querySelectorAll('#item2, #celda');
for(let elemento of lista1){
    elemento.style.backgroundColor = 'red'
}

/* Con selector de clase */

const lista2 = document.querySelectorAll('.fila');
for(let elemento of lista2){
    elemento.style.backgroundColor = 'blue';
}

/* Con selector tipo Objeto */

const lista3 = document.querySelectorAll('li');
for (let elemento of lista3){
    elemento.style.fontFamily = 'Arial';
}
/* Podemos indicar varios tipos de objetos en la misma llamada a querySelectorAll: */
const lista4 = document.querySelectorAll('li, td');
for(let elemento of lista4){
    elemento.style.padding='10px'
}

/* Selector descendente */
/* Permiten seleccionar elementos que se encuentran en otros elementos. Un elemento es descendiente de otro cuando se encuentra entre las etiquetas de apertura y de cierre del otro elemento (no es obligatorio que sea el padre)

El siguiente ejemplo retorna todos los objetos 'span' que estén contenidos en una tabla: */
const lista5 = document.querySelectorAll('table span');
for(let elemento of lista5){
    elemento.style.backgroundColor='green'
}

/* Selector directo */
/*Permiten seleccionar elementos que se encuentran entre otro elemento padre.

El siguiente ejemplo retorna todos los objetos 'span' cuyo padre directo es un 'li':  */

const lista6 = document.querySelectorAll('li>span');
for(let elemento of lista6){
    elemento.style.backgroundColor='pink'
}