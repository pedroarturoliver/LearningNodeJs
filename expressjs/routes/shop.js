// Importa o módulo 'path' do Node para trabalhar com caminhos de arquivos
const path = require('path');
// Importa o framework Express
const express = require('express');
// Importa o caminho da raiz do projeto para localizar as páginas HTML
const rootDir = require('../utils/path');

// Cria o roteador para as páginas públicas da loja
const router = express.Router();

// Importa os dados exportados pelo arquivo admin.js (onde estão as rotas e o array de produtos)
const adminData = require('./admin');

// ROTA GET: /
// Responsabilidade: Página inicial da loja, onde os produtos são exibidos
router.get('/', (req, res, next) => {
    // Exibe no terminal do servidor a lista atual de produtos cadastrados (para conferência)
    console.log('shop.js', adminData.products);

    // Envia o arquivo HTML 'shop.html' para ser renderizado no navegador do usuário
    res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});

// Exporta o roteador para ser utilizado no app.js
module.exports = router;
