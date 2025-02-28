/* CREACIÓN SERVIDOR CON EXPRESS */
    //req = resquest -> petición del cliente
    //res = response -> respuesta del servidor
    //cliente  = Navegador
    //ejecutar app = node app
    //Instalar express  npm install express
    //instalar pug(motor de plantillas) -> npm install pug

//Llamdo del mosulo express para la creación de servidor
const express =require('express')
const app = express()
const path = require('path')  //path normaliza todas las rutas a utilizar e las diferentes plataformas (windows, linux y mac)

//ASIGNACIÓN DE MOTORES DE PLANTILLAS
app.set('view engine', 'pug')  //asignamos un motor de palntillas
app.set('views', path.join(__dirname, 'views'))


//ROUTES
//const routes = require('./routes/index.routes')
//app.use(routes)   o se puede usar así:
app.use(require('./routes/index.routes'))

//Archivos Estácticos
app.use(express.static(path.join(__dirname,'../public')))  //direcciona al path desde donde estamos a la carpeta public

//Creación de ruta de pagina 404(error) en caso que no encuentre la pagina en src
app.use((req,res)=>{
    //sendFile y __dirname establecen las rutas correctas para el renderizado de las paǵinas y index que están en la carpeta public
    res.sendFile(path.join(__dirname,'../public/404.html'));
})

//Puerto que debe escuchar el modulo de express (3000)
app.listen(3000, ()=>{
    console.log('Servidor a la espera de conexiones');
})

