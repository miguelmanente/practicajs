
//Creación del servidor Express
 
const express = require('express');
const mysql = require('mysql');

const app = express()
app.use(express.json())  //lee JSON en el body

//Configurar la conexion a MYSQL
const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'profesores'
});

//Conectar a MYSQL

conexion.connect(err => {
    if (err) {
        console.log('Error conectando a MySQL:', err);
        return;
    }
    console.log('Conectado a MySQL!!!')
});

//Definir el puerto

const PORT = 3000;


//Iniciar el Servidor

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
