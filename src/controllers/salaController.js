const salaModel = require("../models/salaModel");
const usuarioModel = require("../models/usuarioModel");

exports.get = async() => {
    return await salaModel.listarSalas();
}

exports.get = async(req, res) => {
    return {"status": "OK", "controller": "Sala"};
}

exports.get = () => {
    return salaModel.listarSalas();
}

exports.entrar = async(iduser, idsala) => {
    const sala = await salaModel.buscarSala(idsala);
    let user = await usuarioModel.buscarUsuario(iduser);
    user.sala = {_id: sala._id, nome: sala.nome, tipo: sala.tipo};
    if(await usuarioModel.alterarUsuario(user)){
        return {msg: "OK", timestamp:timestamp = Date.now()};
    }
    return false;
}

exports.enviarMensagem = async(nick, msg, idsala) => {
    const sala = await salaModel.buscarSala(idsala);
    if(!sala.msgs){
        sala.msgs = [];
    }
    timestamp = Date.now()
    sala.msgs.push({
        timestamp: timesstamp,
        msg: msg,
        nick: nick
    })
    let resp = await salaModel.atualizarMensagens(sala);
    return {"msg": "OK", "timestamp":timesstamp};
}

exports.buscarMensagens = async(idsala, timesstamp) => {
    let mensagens = await salaModel.atualizarMensagens(idsala, timesstamp);
    return{
        "timestamp": mensagens[mensagens.length - 1].timesstamp,
        "msgs": mensagens
    };
}

// exports.sair = async(iduser, idsala) = {
//     let sairSala = await salaModel.
// }