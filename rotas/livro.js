const { Router } = require("express")
const {getLivros} = require("../controladores/livro")

const router = Router()

router.get('/', getLivros)

router.post('/', (req, res) => {
    res.send('Requisição POST concluida')
})

router.patch('/', (req, res) => {
    res.send('Requisição PATCH concluida')
})

router.delete('/', (req, res) => {
    res.send('Requisição DELETE concluida')
})

module.exports = router