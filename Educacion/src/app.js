const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mysql = require('mysql');
const morgan = require('morgan');
const myConnection = require('express-myconnection');

const app = express();

//Importando rutas
const profeRoutes = require('./routes/profe');


//Configuracion del servidor
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//middlewares
app.use(morgan('dev'));
app.use(myConnection(mysql, {
    host: 'localhost',
    user: 'root',
    password: '1234',
    port: 3306,
    database: 'profesores'
},'single'));
app.use(bodyParser.urlencoded({ extended: true }));
//app.use(express.static.urlencoded({extended: false}));

//routes
app.use('/', profeRoutes);

//archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

//Escucha las peticiones del puerto
app.listen(app.get('port'), () => {
    console.log('Servidor corriendo en el puerto 3000');
});