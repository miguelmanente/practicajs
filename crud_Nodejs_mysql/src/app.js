//Creación del servidor express

const express = require('express');
const path = require('path');  //une directorios del proyecto
const morgan = require('morgan'); //Se utiliza para ver en consola las peticiones que llegan al servidor
const mysql = require('mysql');  //conexion a mysql
const myConnection = require('express-myconnection');  //Conexion entre express y mysql

const app = express();   //habilitamos el uso de express en la aplicacion

//Importando rutas(routers)
const customerRoutes = require('./routes/customer');



//Configuraciones de servidor, puerto, plantilla etc.
app.set('port', process.env.PORT || 3000);  //la variable port toma el puerto disponible del SO y si no encuentra nada usa 3000
app.set('view engine', 'ejs')  //definimos el motor de plantillas
app.set('views', path.join(__dirname, 'views'));   //une los directorios del proyecto


// midlewares (funciones que usara el servidor)
app.use(morgan('dev'));  //peticiones al servidor que se verán en consola
app.use(myConnection(mysql, {
    host: 'localhost',
    user: 'root',
    password: '',
    port: 3307,
    database: 'nose'
},'single'));
app.use(express.static.urlencoded({extended: false}));

//routes
app.use('/', customerRoutes);

//static files
app.use(express.static(path.join(__dirname, 'public')));

//aplicación escucha el puerto 3000
app.listen(app.get('port'), () =>{
    console.log('Server on pot 3000');
});

