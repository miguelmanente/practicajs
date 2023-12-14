const cabecera = document.querySelector('#encabezado');
cabecera.style.backgroundColor='blue';
cabecera.style.padding='13px';
cabecera.style.borderRadius='15px';

const lista = document.querySelectorAll('li');
for(let elemento of lista){
    elemento.style.display='inline';
    elemento.style.fontSize='1.2em';
    elemento.style.color='#fff';
    elemento.style.textDecoration='none';
    elemento.style.fontFamily='Verdana';
    elemento.style.margin='2em';
}