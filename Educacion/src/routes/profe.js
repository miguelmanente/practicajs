const express = require('express');
const router = express.Router();

const profeController = require('../controllers/profeController');

router.get('/', profeController.list);
router.post('/add', profeController.guardar);

module.exports = router;