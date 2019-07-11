const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

//Iniciando App.
const app = express();

//Permitir que o App receba requisições na notação de objetos Javascript.
app.use(express.json());

//Conexão com o Banco de Dados
mongoose.connect(
    "mongodb://localhost:27017/apiestagiarios", 
    {useNewUrlParser: true}
);

requireDir('./src/models');

app.use('/', require('./src/routes'));

app.listen(3001);