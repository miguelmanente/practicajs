const express = require('express');
const router = express.Router();
const db = require('../db');

// GET todos los cursos
router.get('/', (req, res) => {
  db.query('SELECT * FROM cursos', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// POST nuevo curso
router.post('/', (req, res) => {
  const { nombre, nivel } = req.body;
  db.query('INSERT INTO cursos (nombre, nivel) VALUES (?, ?)', [nombre, nivel], (err, result) => {
    if (err) throw err;
    res.json({ mensaje: 'Curso agregado', id: result.insertId });
  });
});

module.exports = router;