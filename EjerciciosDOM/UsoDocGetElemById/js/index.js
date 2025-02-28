/* function Accion(Tipo) {
    var elem = document.getElementById('DivBotones');
     if (Tipo == "Ocultar")
        elem.style.display = 'none';
     else 
        elem.style.display = '';
 } */

 /* En las siguientes líneas nos situamos en el segundo elmento de lista con id=item2, y le damos un color de fondo */

 const li2 = document.getElementById('item2');
 li2.style.backgroundColor = 'red';

 /*Ahora vamos a acceder a la celda de la tabla que tiene definida la propiedad id:  */

 const celda = document.getElementById('celda');
 celda.style.backgroundColor ='yellow';

 /* Una vez posicionado podemos utilizar las propiedades de navegación que ya conocemos: */

 const lista1 = document.getElementById('lista1');
 for(let item of lista1.children){
   item.style.fontFamily = 'Courier';
   item.style.fontSize = '3rem';
 }

 const tabla = document.getElementById('tabla');
 for (let datos of tabla.children){
   datos.style.fontFamily = 'Verdana';
   datos.style.color='blue';
   datos.style.fontSize = '1.5em';
 }


