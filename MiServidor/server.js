//Creación del servidor Express

const express = require('express');
const app = express()

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
