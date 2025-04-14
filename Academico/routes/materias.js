const express = require('express');
const router = express.Router();
const db = require('../db');

// GET todas las materias
router.get('/', (req, res) => {
  db.query('SELECT * FROM materias', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// POST nueva materia
router.post('/', (req, res) => {
  const { nombre, descripcion } = req.body;
  db.query('INSERT INTO materias (nombre, descripcion) VALUES (?, ?)', [nombre, descripcion], (err, result) => {
    if (err) throw err;
    res.json({ mensaje: 'Materia agregada', id: result.insertId });
  });
});

module.exports = router;