// Importa o módulo 'path' para montar caminhos de arquivos
const path = require('path');
// Importa o framework Express
const express = require('express');

// Cria um roteador para gerenciar a rota de erro
const router = express.Router();

// Importa a pasta raiz do projeto
const rootDir = require('../utils/path');

// ROTA DE ERRO 404 (Página Não Encontrada)
// router.use('/') aqui funciona como um "pega-tudo": qualquer endereço que o usuário
// digitar e que NÃO existir nas outras rotas anteriores cairá aqui.
router.use('/', (req, res, next) => {
    // Define o código de status HTTP como 404 (Não Encontrado)
    // e envia o arquivo HTML '404.html' para o navegador
    res.status(404).sendFile(path.join(rootDir, 'views', '404.html'));
});

// Exporta este roteador para ser conectado no app.js
module.exports = router;
