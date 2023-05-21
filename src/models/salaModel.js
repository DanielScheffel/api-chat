const db = require("./db");


async function listarSalas(){
        let salas = await db.findAll("salas");
        return salas;
}

async function buscarSala(idsala){
    return db.findOne("salas", idsala);
}

async function atualizarMensagens(sala){
    return await db.updateOne("salas", sala,{_id:sala._id});
}

async function buscarMensagens(idsala, timesstamp){
    let sala = await buscarSala(idsala);
    if(sala.msgs){
        let msgs = [];
        sala.msgs.forEach(msg => {
            if(msg.timestamp > timesstamp){
                msgs.push(msg);
            }
        });
        return msgs;
    }
    return [];
}

// async function sairSala(idsala, iduser){
//     let sala = await buscarSala(idsala);
//     sala.users.forEach(user => {
//         if(user._id == iduser){
//             user.sala = null;
//         }
//     }
// }

function listarSalas(){
    return[
        {
            "_id": {
                "$oid": "TGvmw8wBZtbJ7c7"
            },
            "nome": "Guerreiros da InfoCimol",
            "tipo": "publica"
        }, {
            "_id": {
                "$oid": "HjhjdojTwpSY973"
            },
            "nome": "Só os confirmados da INFO",
            "tipo": "privada",
            "chave": "i6sEw2lc"
        }, {
            "_id": {
                "$oid": "7DDnjK7jF6YnVSi"
            },
            "nome": "Guerreiros da INFO",
            "tipo": "publica"
        }
    ];
}

module.exports = {listarSalas}