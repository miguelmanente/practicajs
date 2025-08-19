const express = require('express');
const router = express.Router();

const profeController = require('../controllers/profeController');

router.get('/list', profeController.list);
router.post('/add', profeController.guardar);
router.get('/borrar/:id_profesor', profeController.borrar);
router.get('/actualizar/:id_profesor', profeController.edicion);
router.post('/actualizar/:id_profesor', profeController.actualizar);
router.get('/busca', profeController.busca);
router.post('/busca1', profeController.busca1);
router.get('/inicio', profeController.inicio);
router.get('/profmat', profeController.profmat);

module.exports = router;    