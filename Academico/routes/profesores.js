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

module.exports = router;