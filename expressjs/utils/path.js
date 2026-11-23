// Importa o módulo nativo 'path' do Node.js para trabalhar com caminhos de pastas e arquivos
const path = require('path');

// Descobre o caminho da pasta raiz do projeto.
// require.main.filename: pega o caminho do arquivo principal que iniciou o app (geralmente app.js).
// path.dirname(...): pega a pasta onde esse arquivo principal está localizado.
// Exportamos isso para facilitar a montagem de caminhos (como a pasta /views) em qualquer arquivo.
module.exports = path.dirname(require.main.filename);
