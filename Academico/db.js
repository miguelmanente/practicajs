const mysql = require('mysql2');

const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:'Mibero606487',
    database: 'educacion'
});

conexion.connect((error) => {
    if (error){
        console.error('Error al conectarse a: ',error);
    }else{
        console.log('Base de datos CONECTADA!!!');
    }
});

module.exports = conexion;
