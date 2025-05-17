const express = require('express');
const router = express.Router();
const db = require('../db');

// Mostrar formulario
router.get('/', (req, res) => {
    res.render('agregaProfe');
  });


router.post('/', (req, res) => {
    const {id_profesor, nombre, email, dni, f_nacimiento, edad, celular, direccion } = req.body;
    const sql = 'INSERT INTO profesores (id_profesor, nombre, email, dni, f_nacimiento, edad, celular, direccion) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
    db.query(sql, [id_profesor, nombre, email, dni, f_nacimiento, edad, celular, direccion], (err, result) => {
      if (err) throw err;
        alert('Usuario guardado correctamente');
    });
  });

module.exports = router;