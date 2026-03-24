// Importar o Express para criar o router
const express = require('express');
const router = express.Router();

// Importar as funções do Controller
const ClienteController = require('../Controllers/controller');

// ============================================================
// DEFINIÇÃO DAS ROTAS
// ============================================================

// GET /produtos - Listar todos os produtos
router.get('/', ClienteController.listarTodos);

// GET /produtos/categoria/:categoria - Buscar por categoria
router.get('/nome/:nome', ClienteController.buscarPorNome);

// GET /produtos/:id - Buscar produto específico por ID
router.get('/:id', ClienteController.buscarPorId);

// POST /produtos - Criar novo produto
router.post('/', ClienteController.criar);

// PUT /produtos/:id - Atualizar produto completo
router.put('/:id', ClienteController.atualizar);

// DELETE /produtos/:id - Deletar produto
router.delete('/:id', ClienteController.deletar);

// ============================================================
// EXPORTAR O ROUTER
// ============================================================
module.exports = router;