const express = require("express");
const app = express();
const salaController = require("./controllers/salaController");
const usuarioController = require("./controllers/usuarioController");


app.use(express.urlencoded({extended : true}));
app.use(express.json());

const router = express.Router();
app.use('/', router.get('/', (req, res) => {
    res.status(200).send("<h1>API - CHAT </h1>")
}))

app.use("/", router.get("/sobre", (req, res, next) => {
    res.status(200).send({
        "nome": "API - CHAT",
        "versão": "0.1.0",
        "autor": "Daniel Scheffel"
    })
}));

app.use("/salas", router.get("/salas", async(req, res, next) => {
    let resp = salaController.get();
    res.status(200).send(resp);
}));

app.use("/entrar", router.post("/entrar", async(req, res, next) => {
    if(Token.checkToken(req.headers.token.req.headers.idUser.req.headers.nick)) return false;
    let resp = await usuarioController.entrar(req.body.nick);
    res.status(200).send(resp);
}));

app.use("/sala/entrar", router.put("/sala/entrar", async(req, res) => {
    if(!token.checkToken(req.headers.token, req.headers.iduser,req.headers.nick)) return false;
    let resp = await salaController.entrar(req.headers.iduser, req.query.idsala);
    res.status(200).send(resp);
}))

app.use("/sala/mensagem/", router.post("/sala/mensagem", async(req, res) => {
    if(!token.checkToken(req.headers.token, req.headers.iduser,req.headers.nick)) return false;
    let resp = await salaController.enviarMensagem(req.headers.nick, req.body.msg, req.body.idsala);
    res.status(200).send(resp);
}))

app.use("/sala/mensgens/", router.get("/sala/mensagens", async(req, res) => {
    if(!token.checkToken(req.headers.token, req.headers.iduser,req.headers.nick)) return false;
    let resp = await salaController.buscarMensagens(req.query.idsala, req.query.timestamp);
    res.status(200).send(resp);
}))

// app.use("/sala/sair", router.get("/sala/sair", async(req, res) => {
//     if(!token.checkToken(req.headers.token, req.headers.iduser,req.headers.nick)) return false;
//     let resp = await salaController.sair(req.headers.iduser, req.query.idsala);
//     res.status(200).send(resp);
// }))

// app.use("/sair", router.post("/sair", async(req, res) => {
//     if(!token.checkToken(req.headers.token, req.headers.iduser,req.headers.nick)) return false;
//     let resp = await usuarioController.sair(req.headers.iduser);
//     res.status(200).send(resp);
// }))

module.exports = app;