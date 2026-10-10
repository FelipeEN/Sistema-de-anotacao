const express = require("express")

const autenticar = require("../middlewares/auth.middleware")

const {
    criarUsuario,
    loginUsuario
    }=require("../controllers/usuario.controller") 

const router = express.Router()

router.post("/usuarios", (req, res) => {
    return res.status(403).json({
        mensagem: "Cadastro de novos usuários desativado."
    });
});
router.post("/login",loginUsuario)


module.exports = router