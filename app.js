const express = require("express")
const livroRota = require("./rotas/livro")

const app = express()

const port = 3000

app.listen(port, () => {
    console.log(`Escutando a porta ${port}`)
})

app.use('/livros', livroRota)