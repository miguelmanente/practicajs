
const express = require('express');
const router = express.Router();
const db = require('../db');

/* // Mostrar formulario de búsqueda
router.get('/', (req, res) => {
  res.render('resultados'); // vista buscar.ejs
}); */


// Ruta para buscar estudiantes por nombre
router.get('/', (req, res) => {
  const nombre = req.query.nombre;

  db.query(
    'SELECT * FROM profesores WHERE nombre LIKE ?',
    [`%${nombre}%`],
    (err, results) => {
      if (err) throw err;
      res.render('resultados', { profesores: results });
    }
  );
});

module.exports = router;

