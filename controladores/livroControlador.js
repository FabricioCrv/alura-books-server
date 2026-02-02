const { getTodosLivros,getLivroById, insertLivro, modificarLivro, deletarLivroPorId } = require("../servicos/livroServico")

function getLivros(req, res) {
    try{
        const livros = getTodosLivros()
        res.send(livros)
    } catch(error){
        res.status(500)
        res.send(error.message)
    }
}

function getLivro(req, res) {
    try{
        const id = req.params.id
        const livro = getLivroById(id)
        res.send(livro)
    } catch(error){
        res.status(500)
        res.send(error.message)
    }
}

function postLivro(req,res) {
    try{
        const livroNovo = req.body
        insertLivro(livroNovo)
        res.status(201)
        res.send("Livro inserido!")
    }catch(error){
        res.status(500)
        res.send(error)
    }
}

function patchLivro(req,res){
    try{
        const id = req.params.id
        const body = req.body

        modificarLivro(body, id)
        res.send("Item modificado com sucesso!")
    }catch(error){
        res.status(500)
        res.send(error)
    }
}

function deleteLivro(req,res){
    try{
        const id = req.params.id
        deletarLivroPorId(id)
        res.send("Item deletado com sucesso!")
    }catch(error){
        res.status(500)
        res.send(error)
    }
}

module.exports= {
    getLivros,
    getLivro,
    postLivro,
    patchLivro,
    deleteLivro
}