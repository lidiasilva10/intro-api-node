const express = require('express');
const router = exprress.Router();

const SetorController = require('../controllers/setor');

router.get('/setor', SetorController.listarSetor);

modulo.exports = router;