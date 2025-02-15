/* CONSTRUCCIÓN DE UN SERVIDOR HTTP */

const http = require('http');

const server =http.createServer((req, res) => {
    //req = resquest -> petición del cliente
    //res = response -> respuesta del servidor
    //cliente  = Navegador
    console.log('Un cliente se ha conectado');

    res.writeHead(200, {"Content-type": "text/html; charset=utf-8"});
    res.end('La conexión ha sido correcta');
})

server.listen(3000, ()=>{
    console.log('Servidor a la espera de conexiones');
})