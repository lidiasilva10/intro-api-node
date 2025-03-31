const express = require('express');
const router = express.Router();

const UsuarioController = require('../controllers/usuario');

router.get('/usuarios', UsuarioController.listarUsuarios);

module.exports = router;