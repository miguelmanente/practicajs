import mysql from 'mysql2';

//Creación del servidor Express
 
const express = require('express');
const mysql = require('mysql');

const app = express()
app.use(express.json())  //lee JSON en el body

//Configurar la conexion a MYSQL
const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'Profesores'
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

// Ruta principal
app.get('/', (req, res) => {
    res.send('¡Hola mundo desde Express');
});

app.get('/usuarios', (req, res) => {
    res.json([{id:1, nombre:"Juan"},{id:2, nombre:"Maria"}]);
});

app.post('/usuarios', (req, res) =>{
    res.send('Usuarios Creados');
});

//Iniciar el Servidor

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
