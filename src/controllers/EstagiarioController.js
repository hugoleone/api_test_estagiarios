const mongoose = require('mongoose');

const Estagiario = mongoose.model('Estagiario');

module.exports = {
    async showAllEstagiarios(req, res){
        const estagiarios = await Estagiario.find();

        return res.json(estagiarios);
    },

    async storeEstagiario(req, res){
        const estagiario = await Estagiario.create(req.body);

        return res.json(estagiario);
    },

    async updateEstagiario(req, res){
        const estagiario = await Estagiario.findByIdAndUpdate(req.params.id, req.body, {new : true} );

        return res.json(estagiario);
    },

    async deleteEstagiario(req, res){
        let matricula = req.body.matricula;
        await Estagiario.findByIdAndRemove(req.params.id);
    
        return res.send("Estagiario de matricula "+matricula+" foi deletado com sucesso!");
    }
}