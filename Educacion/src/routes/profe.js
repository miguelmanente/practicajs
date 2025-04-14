const express = require('express');
const router = express.Router();

const profeController = require('../controllers/profeController');

router.get('/', profeController.list);
router.post('/add', profeController.guardar);
router.get('/borrar/:idprofesor', profeController.borrar);
router.get('/actualizar/:idprofesor', profeController.edicion);
router.post('/actualizar/:idprofesor', profeController.actualizar);
module.exports = router;    