const express = require('express');
const path = require('path');
const mysql = require('mysql2');
const app = express();
const puerto = 3000;

//configurar servidor
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({extended: false}));

//importando rutas
const loginRoutes = require('./routes/login');
const inicioRoutes = require('./routes/inicio');
const profeRoutes = require('./routes/profesores');


//Rutas

//onst profesorRoutes = require('./routes/profesores');
/* const materiasRoutes = require('./routes/materias');
const cursosRoutes = require('./routes/cursos');
const profesorMateriaRoutes = require('./routes/profesorMateria');
const materiaCursoRoutes = require('./routes/materiaCurso'); */

app.use('/login', loginRoutes);
app.use('/inicio', inicioRoutes);
app.use('/profesores', profeRoutes);
/* app.use('/materias', materiasRoutes);
app.use('/cursos', cursosRoutes);
app.use('/profesor-materia', profesorMateriaRoutes);
app.use('/materia-curso', materiaCursoRoutes);
 */
app.use(express.static(path.join(__dirname, 'public')));

app.listen(puerto, () => {
    console.log(`Servidor corriendo en http://localhost:${puerto}`);
});

