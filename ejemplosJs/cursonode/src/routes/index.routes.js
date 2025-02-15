/* CREACIÓN DE RUTAS DEL SERVIDOR */

const express = require('express')
const router = express.Router()
const controller = require('../controllers/index.controller')

// Creación de la ruta que viene de la URL del navegador(cliente) son todas GET
router.get('/', controller.index)

// Todo lo que está en router se exporte si se pueda utilizar en otros archivos
module.exports = router 