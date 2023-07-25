/* dar color al fondo de la página con JS en el DOM */
document.body.style.backgroundColor='yellow'
/* Dar color al texto de la página con JS manipulando el DOM */
document.body.style.color='#f0f';
/* Cambiar los estilos de texto y cuadros con JS manipulando el DOM */
document.body.style.fontFamily='Courier';
document.body.style.margin='40px';
document.body.style.textAlign ='center'
document.body.style.border='1px solid #f00';
document.body.style.padding='20px';
document.body.style.visibility='hidden';
/* Podemos hacer visible u ocultar la etiqueta body accediendo a la propiedad 'visibility' de 'style', y que se actualice cada 1000 milisegundos: */
/* setInterval(()=>{
    if(document.body.style.visibility === 'visible'){
        document.body.style.visibility = 'hidden'
    } else {
        document.body.style.visibility = 'visible'
    }
}, 1000); */
/* Podemos hacer que el contenido de la página se muestre durante 3 segundos y luego se haga invisible para siempre: */
setTimeout(() => {
    document.body.style.visibility = 'hidden'
}, 5000);