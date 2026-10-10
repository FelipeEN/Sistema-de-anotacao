require("dotenv").config()

const express = require ("express")
const cors = require ("cors")

const pool = require("./database/connection");

const usuarioRoutes = require("./routes/usuario.routes")
const anotacaoRoutes = require("./routes/anotacao.routes")

const app = express()

const porta = process.env.PORT || 3000

app.use(cors())

app.use(express.json())


app.use("/api",usuarioRoutes)
app.use("/api",anotacaoRoutes)

app.get("/api", (req,res)=>{
    res.json({
        mensagem : "api funcionando"
    })
})

app.get("/api/teste-banco", async (req, res) => {
    try {
        const resultado = await pool.query("SELECT NOW()")

        res.json({
            mensagem: "Conexão com o banco funcionando!",
            horario: resultado.rows[0].now
        })
    } catch (erro) {
        console.error("Erro ao conectar com o banco:", erro.message)

        res.status(500).json({
            mensagem: "Erro ao consultar o banco de dados"
        })
    }
})

app.listen(porta, ()=>{
    console.log(`api funcionando na porta ${porta}`)
})