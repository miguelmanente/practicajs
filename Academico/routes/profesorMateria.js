const express = require('express');
const router = express.Router();
const db = require('../db');

// Asignar una materia a un profesor
router.post('/:id', (req, res) => {
  const { id_profesor, id_materia } = req.body;
  db.query('INSERT INTO profesor_materia (id_profesor, id_materia) VALUES (?, ?)',
     [id_profesor, id_materia], 
     (err, result) => {
      if (err) throw err;
        res.json({mensaje:  'Materia asignada al profesor' });
    });
});

// Ver materias asignadas a un profesor
router.get('/profesor/:id_profesor', (req, res) => {
  const id = req.params.id_profesor;
  const sql = `
    SELECT m.id_materia, m.nombre
    FROM profesor_materia pm
    INNER JOIN materias m ON pm.id_materia = m.id_materia
    WHERE pm.id_profesor = ?`;

  db.query(sql, [id], (err, results) => {
    if (err) throw err;
      res.json(results);
  });
});

module.exports = router;
