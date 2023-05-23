const db = require("./db");

async function registrarUsuario(nick) {
    return await db.insertOne("usuario", {"nick": nick});

}

async function buscarUsuario(iduser){
    let user = await db.findOne("usuarios", iduser)
    return user;
}

async function alterarUsuario(user){
    return await db.updateOne("usuarios", user,{_id:user._id});
}

module.exports = {registrarUsuario, buscarUsuario, alterarUsuario}