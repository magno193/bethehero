// Importando o express
const express = require('express');

// Criando o app pelo express
const app = express();

// Rota raiz
app.get('/', (request, response) =>{
    response.json({
        evento: 'Semana Omnistack 11.0',
        aluno: 'Alexandre Magno de Lima Ferreira'
    })
});

// Abrindo porta 3333 para o navegador - node index.js para executar
app.listen(3333);