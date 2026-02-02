const fs = require("fs")

function getTodosLivros (){
    return JSON.parse( fs.readFileSync("livros.json"))
}

function getLivroById(id){
    const livros = JSON.parse(fs.readFileSync("livros.json"))
    
    const livroFiltrado = livros.filter(livro => livro.id == id)[0]
    return livroFiltrado
}

function insertLivro(livroNovo){
    const livros = JSON.parse(fs.readFileSync("livros.json"))

    const novaListaDeLivros = [...livros, livroNovo]

    fs.writeFileSync("livros.json", JSON.stringify(novaListaDeLivros))
}

function modificarLivro(modificacoes, id){
    let livrosAtuais = JSON.parse(fs.readFileSync("livros.json"))
    const indiceLivro = livrosAtuais.findIndex(livro => livro.id == id)

    const conteudoMudado = {...livrosAtuais[indiceLivro], ...modificacoes}

    livrosAtuais[indiceLivro] = conteudoMudado

    fs.writeFileSync("livros.json", JSON.stringify(livrosAtuais))
}

function deletarLivroPorId(id){
    const livros = JSON.parse(fs.readFileSync("livros.json"))
    const livroFiltrado = livros.filter(livro => livro.id != id)

    fs.writeFileSync("livros.json", JSON.stringify(livroFiltrado))
}

module.exports = {
    getTodosLivros,
    getLivroById,
    insertLivro,
    modificarLivro,
    deletarLivroPorId
}