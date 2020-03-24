const express = require('express');
const routes = require('./routes')

const app = express();

app.use(express.json());
app.use(routes);

// Abrindo porta 3333 para o navegador - node index.js para executar
app.listen(3333);