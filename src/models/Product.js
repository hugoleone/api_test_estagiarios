const mongoose = require('mongoose');

//Campos que devem ser salvos no Banco de Dados para cada produto.
const ProductSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
    url:{
        type: String,
        required: true,
    },
    createAt:{
        type: Date,
        default: Date.now,
    },
});

//Registrar Model na aplicação.
mongoose.model('Product', ProductSchema);