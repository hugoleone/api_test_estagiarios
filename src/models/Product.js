const mongoose = require('mongoose');

//Campos que devem ser salvos no Banco de Dados para cada produto.
const EstagiarioSchema = new mongoose.Schema({
    matricula:{
        type: String,
        required: true,
    },
    orgaoLotado:{
        type: String,
        required: true,
    },
    createAt:{
        type: Date,
        default: Date.now,
    },
});

//Registrar Model na aplicação.
mongoose.model('Estagiario', EstagiarioSchema);