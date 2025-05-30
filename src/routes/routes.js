const express = require('express');
const router = express.Router();

const UsuarioController = require('../controllers/usuario');

router.get('/usuarios', UsuarioController.listarUsuarios);
router.post('/usuarios', UsuarioController.inserirUsuarios);
router.patch('/usuarios/:id', UsuarioController.atualizarUsuarios);
router.delete('/usuarios/:id', UsuarioController.excluirUsuarios);
router.get('/login', UsuarioController.loginUsuario);

const ColaboradorController = require('../controllers/colaborador');

router.get('/colaborador', ColaboradorController.listarColaborador);
router.post('/colaborador', ColaboradorController.inserirColaborador);
router.patch('/colaborador/:id', ColaboradorController.atualizarColaborador);
router.delete('/colaborador/:id', ColaboradorController.excluirColaborador);


const FuncaoController = require('../controllers/funcao');

router.get('/funcao', FuncaoController.listarFuncao);
router.post('/funcao', FuncaoController.inserirFuncao);
router.patch('/funcao', FuncaoController.atualizarFuncao);
router.delete('/funcao', FuncaoController.excluirFuncao);



module.exports = router;