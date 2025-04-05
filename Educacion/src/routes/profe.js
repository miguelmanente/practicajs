const express = require('express');
const router = express.Router();

const profeController = require('../controllers/profeController');

router.get('/', profeController.list);
router.post('/add', profeController.guardar);
router.get('/borrar/:idprofesor', profeController.borrar);

module.exports = router;