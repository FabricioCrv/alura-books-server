const fs = require("fs")

function getTodosFavoritos (){
    return JSON.parse( fs.readFileSync("favoritos.json"))
}

function insertFavorito(novoFavoritoId){
    const livros = JSON.parse(fs.readFileSync("livros.json"))
    const favoritos = JSON.parse(fs.readFileSync("favoritos.json"))

    const livroInserido = livros.find( livro => livro.id == novoFavoritoId)
    const novaListaDeFavoritos = [...favoritos, livroInserido]

    fs.writeFileSync("favoritos.json", JSON.stringify(novaListaDeFavoritos))
}

function deletarFavoritoPorId(id){
    const livros = JSON.parse(fs.readFileSync("favoritos.json"))
    const favoritoFiltrado = livros.filter(livro => livro.id != id)

    fs.writeFileSync("favoritos.json", JSON.stringify(favoritoFiltrado))
}

module.exports = {
    getTodosFavoritos,
    deletarFavoritoPorId,
    insertFavorito
}