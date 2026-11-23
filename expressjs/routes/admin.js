// Importa o framework Express para gerenciar as rotas
const express = require('express');
// Importa o módulo 'path' do Node para lidar com caminhos de arquivos
const path = require('path');

// Importa o caminho da pasta raiz do projeto que configuramos em utils/path.js
const rootDir = require('../utils/path');

// Cria um "roteador" (uma mini-aplicação Express dedicada apenas às rotas de admin)
const router = express.Router();

// Lista (array) temporária na memória do servidor para guardar os produtos cadastrados
const products = [];

// ROTA GET: /admin/add-product
// Responsabilidade: Exibir a página com o formulário para cadastrar um novo produto.
router.get('/add-product', (req, res, next) => {
    // Envia o arquivo HTML 'add-product.html' que está dentro da pasta 'views'
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});

// ROTA POST: /admin/add-product
// Responsabilidade: Receber os dados preenchidos no formulário quando o usuário clica em enviar.
router.post('/add-product', (req, res, next) => {
    // Pega o título que veio do formulário (req.body.title) e guarda na nossa lista de produtos
    products.push({ title: req.body.title });

    // Redireciona o usuário de volta para a página inicial da loja ('/')
    res.redirect('/');
});

// Exporta as rotas para serem registradas no app.js
exports.routes = router;
// Exporta a lista de produtos para que outros arquivos (como shop.js) possam lê-la
exports.products = products;
