const express = require('express');
const router = express.Router();
const db = require('../db');

//GET todos los profesores

router.get('/', (req, res) => {
    db.query('SELECT * FROM profesores', (err, results) =>{
        if (err) throw err;
        res.render('mostrarProfe', {
            profesores: results});
    });
});

/*router.get('/:id', (req, res) => {
    const {id} = req.params;
    db.query('SELECT * FROM profesores WHERE id_profesor = ?', [id], (err, results) =>{
        if (err) throw err;
        res.json(results[0]);
    });
});

//POST nuevo profesor
router.post('/', (req, res) => {
    const { nombre, email} = req.body;
    db.query('INSERT INTO profesores (nombre, email) VALUES (?, ?)', [nombre, email], (err, results) => {
        if (err) throw err;
        res.json({mensaje: 'Profesor agregado', id:results.insertId});
    });
}); */

module.exports = router;