const { getTodosFavoritos, insertFavorito, deletarFavoritoPorId } = require("../servicos/favoritoServico")


function getFavoritos(req, res) {
    try{
        const livros = getTodosFavoritos()
        res.send(livros)
    } catch(error){
        res.status(500)
        res.send(error.message)
    }
}

function postFavorito(req,res) {
    try{
            const id = req.params.id
            insertFavorito(livroNovo)
            res.status(201)
            res.send("Livro inserido!")
        }
        catch(error){
        res.status(500)
        res.send(error)
    }
}

function deleteFavorito(req,res){
    try{
        const id = req.params.id
        if(id && Number(id)){
            deletarFavoritoPorId(id)
            res.send("Item deletado com sucesso!")
        }else{
            res.status(422)
            res.send("ID invalido")
        }
        
    }catch(error){
        res.status(500)
        res.send(error)
    }
}

module.exports = {
    getFavoritos,
    postFavorito,
    deleteFavorito
}