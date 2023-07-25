/* El método querySelector es más moderno y tiene como objetivo remplazar al método que vimos anteriormente llamado getElementById. Retorna el primer elemento que cumple la regla CSS que le pasamos como parámetro. */

/* QuerySelector mediante el selector de ID */
const li2 =document.querySelector('#item2');
li2.style.backgroundColor = 'red';
const celda = document.querySelector('#celda');
celda.style.backgroundColor = 'yellow';

/* QuerySelector con el selector de clase */

const fila = document.querySelector('.fila');
fila.style.backgroundColor = 'blue';

/* Selector de tipo de objeto
Podemos pasar como parámetro un tipo de objeto HTML, luego el método retorna la referencia del primer nodo del árbol de componentes que cumple la regla: */

const li = document.querySelector('li');
li.style.backgroundColor = 'pink';