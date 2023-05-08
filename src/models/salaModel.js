const db = require("./db");
function listarSalas(){
    return db.findAll("salas")
}


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