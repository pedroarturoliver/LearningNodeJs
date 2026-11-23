// ==========================================
// IMPORTAÇÃO DE PACOTES E MÓDULOS
// ==========================================
// Express: Framework web para criar o servidor e gerenciar rotas
const express = require('express');
// body-parser: Middleware que ajuda a ler e extrair os dados enviados por formulários HTML
const bodyParser = require('body-parser');
// path: Módulo nativo do Node para manipular caminhos de pastas e arquivos
const path = require('path');

// Inicializa a nossa aplicação Express
const app = express();

// ==========================================
// IMPORTAÇÃO DAS NOSSAS ROTAS
// ==========================================
// Rotas de administração (cadastro de produtos e a lista de produtos)
const adminData = require('./routes/admin');
// Rotas públicas da loja (página inicial / catálogo)
const shopRoutes = require('./routes/shop');
// Rota de erro 404 para URLs não encontradas
const erroRoute = require('./routes/erro');

// ==========================================
// MIDDLEWARES (Processamentos antes das rotas)
// ==========================================
// Configura o body-parser para entender os dados vindos de formulários (application/x-www-form-urlencoded).
// Com isso, podemos acessar os campos enviados através de 'req.body.nomeDoCampo'.
app.use(bodyParser.urlencoded({ extended: false }));

// Permite servir arquivos estáticos (como arquivos .css, imagens e javascript do frontend).
// Qualquer arquivo colocado dentro da pasta 'public' pode ser acessado diretamente pelo navegador.
app.use(express.static(path.join(__dirname, 'public')));

// ==========================================
// REGISTRO DAS ROTAS
// ==========================================
// Rotas de admin: todas as rotas de 'adminData.routes' terão o prefixo '/admin'.
// Exemplo: se no arquivo admin.js tem '/add-product', o acesso real será '/admin/add-product'.
app.use('/admin', adminData.routes);

// Rotas da loja: acessíveis diretamente (ex: '/')
app.use(shopRoutes);

// Rota 404: Como fica por último, qualquer requisição que não casar com as rotas
// de cima cairá aqui para exibir a página de erro.
app.use(erroRoute);

// ==========================================
// INICIALIZAÇÃO DO SERVIDOR
// ==========================================
// Inicia o servidor HTTP e o coloca para escutar requisições na porta indicada.
// Você pode acessar no navegador em: http://localhost:3473
app.listen(3473);
