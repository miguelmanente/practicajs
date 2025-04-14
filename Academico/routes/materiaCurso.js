const express = require('express');
const router = express.Router();
const db = require('../db');

// Asignar una materia a un curso
router.post('/', (req, res) => {
  const { id_materia, id_curso } = req.body;
  db.query('INSERT INTO materia_curso (id_materia, id_curso) VALUES (?, ?)',
    [id_materia, id_curso],
    (err, result) => {
      if (err) throw err;
      res.json({ mensaje: 'Materia asignada al curso' });
    });
});

// Ver cursos de una materia
router.get('/materia/:id_materia', (req, res) => {
  const id = req.params.id_materia;
  const sql = `
    SELECT c.id_curso, c.nombre 
    FROM materia_curso mc
    INNER JOIN cursos c ON mc.id_curso = c.id_curso
    WHERE mc.id_materia = ?`;

  db.query(sql, [id], (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

module.exports = router;
