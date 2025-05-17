const express = require('express');
const router = express.Router();
const db = require('../db');

// Ruta para mostrar el formulario de edición
router.get('/', (req, res) => {
  const {id}= req.params;
  const sql = 'SELECT * FROM profesores WHERE id = ?';
  
  db.query(sql, [id], (err, result) => {
    if (err) throw err;
    res.render('editare', { profesores: result });
  });
});

router.post('/', (req, res) => {
  const id_profesor = req.params.id_profesor;
  const { nombre, email, dni, f_nacimiento, edad, celular, direccion } = req.body;
  
  const sql = 'UPDATE profesores SET nombre = ?, email = ?, dni = ?, f_nacimiento = ?, edad = ?, celular = ?, direccion = ? WHERE id_profesor = ?';
  
  db.query(sql, [nombre, email, dni, f_nacimiento, edad, celular, direccion, id_profesor], (err, result) => {
    if (err) throw err;
    res.redirect('/resultados'); // Redirigir a la página principal después de editar
  });
});
module.exports = router;

/* 


controller.delete = (req, res) =>{
    const { id } = req.params;

    req.getConnection((err, conn) =>{
        conn.query('DELETE FROM customer WHERE id = ?', [id], (err, rows) => {
            res.redirect('/');
        });
    });

}; */
