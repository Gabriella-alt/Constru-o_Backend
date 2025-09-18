const express =  require('express')
const router = express.Router()


// Lista de pessoas  para simular o banco de dados
let Listapessoas = [
    { 
        id: 1,
        Nome: "João",
        CPF: "002001003",
        email: "joão@pedro.com",
        DataNascimento:"01/02/2003"

    }, 
    {
        id: 2,
        Nome: "Maria",
        CPF: "010605003",
        email: "maria@joana.com",
        DataNascimento:"10/09/2001"

    }
]
//mapear as rotas e a lógica 

//#Busca
//GET /pessoas
router.get('/pessoas', (req, res, next) =>{
    res.json(Listapessoas)
})


//#Busca por id
//GET /pessoas/:id
router.get('/pessoas/:id', (req, res, next) =>{
    const id = req.params.id
    const pessoa = Listapessoas.find(pessoa => pessoa.id == id)
    if(pessoa){
        return res.status(404). json({error: "Pessoa não encontrada!!!!"})
    }
    res.json(pessoa)
})


//exportar o roteador 
module.exports = router