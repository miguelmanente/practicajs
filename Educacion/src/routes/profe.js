const express = require('express');
const router = express.Router();

const profeController = require('../controllers/profeController');

router.get('/list', profeController.list);
router.post('/add', profeController.guardar);
router.get('/borrar/:idprofesor', profeController.borrar);
router.get('/actualizar/:idprofesor', profeController.edicion);
router.post('/actualizar/:idprofesor', profeController.actualizar);
router.get('/busca', profeController.busca);
router.post('/busca1', profeController.busca1);
router.get('/inicio', profeController.inicio);

module.exports = router;    