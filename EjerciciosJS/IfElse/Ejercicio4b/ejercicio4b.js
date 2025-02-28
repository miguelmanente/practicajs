/*Crear una variable "Age* que contenga un número entero entre 0 y 100 y muestre los
siguientes mensajes de alerta:
i. "Bebe" si la edad es menor a 2 años;
ii."Niño si la edad es entre 2 y 12 años;
iii."Adolescente" entre 13 y 19 años;
iv. "Joven" entre 20 y 30 años;
v. "Adulto" entre 31 y 60años;
vi. "Adulto mayor" entre 61 y 75 años;
vii. "Anciano" si es mayor a 75 años.*/

let age = 80;

if (age > 0 && age < 2){
    alert("Bebe");
}else if(age >= 2 && age < 12){
    alert("Niño");
}else if(age >= 13 && age < 19){
    alert("Adolescente");
}else if(age >= 20 && age < 30){
        alert("Joven");
}else if(age >= 31 && age < 60){
    alert("Adulto");
}else if(age >= 61 && age < 75){
    alert("Adulto Mayor");
}else{
    alert("Anciano");
}   