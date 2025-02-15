/* CREACIÓN SERVIDOR CON EXPRESS */
    //req = resquest -> petición del cliente
    //res = response -> respuesta del servidor
    //cliente  = Navegador
    //ejecutar app = node app

//Llamdo del mosulo express para la creación de servidor
const express =require('express')
const app = express()
const path = require('path')  //path unifica todas las rutas de las diferentes plataformas (windows, linux y mac)


//ROUTES
//const routes = require('./routes/index.routes')
//app.use(routes)   o se puede usar así:
app.use(require('./routes/index.routes'))

//Archivos Estácticos
app.use(express.static(path.join(__dirname,'../public')))

//Creación de ruta de pagina 404(error) en caso que no encuentre la pagina en src
app.use((req,res)=>{
    //sendFile y __dirname establecen las rutas correctas para el renderizado de las paǵinas y index y demás
    res.sendFile(path.join(__dirname,'../public/index.html'));
})

//Puerto que debe escuchar el modulo de express (3000)
app.listen(3000, ()=>{
    console.log('Servidor a la espera de conexiones');
})

