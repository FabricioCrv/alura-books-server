const { getTodosLivros } = require("../servicos/livroServico")

function getLivros(req, res) {
    try{
        const livros = getTodosLivros
        res.send(livros)
    } catch(error){
        res.status(500)
        res.send(error.message)
    }
}

module.exports= {
    getLivros
}