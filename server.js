const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

//Iniciando App.
const app = express();

//Conexão com o Banco de Dados
mongoose.connect(
    "mongodb://localhost:27017/apiestagiarios", 
    {useNewUrlParser: true}
);

requireDir('./src/models');

const Product = mongoose.model('Product');

//Primeira rota.
app.get('/', (req, res) => {
    Product.create({
        title: 'Api Estagiários',
        description: 'Testando a crianção de API',
        url: 'http://www.dst.com'
    });

    return res.send("<h1>Olá, Mundo!</h1>");
});

app.listen(3001);