const express = require('express');
const app = express();
const puerto = 3000;

app.use(express.json());

//Rutas
const profesorRoutes = require('./routes/profesores');
const materiasRoutes = require('./routes/materias');
const cursosRoutes = require('./routes/cursos');
const profesorMateriaRoutes = require('./routes/profesorMateria');
const materiaCursoRoutes = require('./routes/materiaCurso');

app.use('/profesores', profesorRoutes);
app.use('/materias', materiasRoutes);
app.use('/cursos', cursosRoutes);
app.use('/profesor-materia', profesorMateriaRoutes);
app.use('/materia-curso', materiaCursoRoutes);

app.listen(puerto, () => {
    console.log(`Servidor corriendo en http://localhost:${puerto}`);
});

