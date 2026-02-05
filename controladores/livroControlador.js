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
        if(id && Number(id)){
            const livro = getLivroById(id)
            res.send(livro)
        } else{
            res.status(422)
            res.send("ID invalido")
        }
        
    } catch(error){
        res.status(500)
        res.send(error.message)
    }
}

function postLivro(req,res) {
    try{
        const livroNovo = req.body
        if(req.body.nome && req.body.id){
            insertLivro(livroNovo)
            res.status(201)
            res.send("Livro inserido!")
        } else{
            res.status(422)
            res.send("O campos obrigatórios como ID ou nome estão em branco")
        }

        
    }catch(error){
        res.status(500)
        res.send(error)
    }
}

function patchLivro(req,res){
    try{
        const id = req.params.id
        const body = req.body
        if(id && Number(id)){
            modificarLivro(body, id)
            res.send("Item modificado com sucesso!")
        }else{
            res.status(422)
            res.send("ID invalido")
        }
        
    }catch(error){
        res.status(500)
        res.send(error)
    }
}

function deleteLivro(req,res){
    try{
        const id = req.params.id
        if(id && Number(id)){
            deletarLivroPorId(id)
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

module.exports= {
    getLivros,
    getLivro,
    postLivro,
    patchLivro,
    deleteLivro
}