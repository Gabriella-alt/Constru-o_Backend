const express =  require('express')
const router = express.Router()


// Lista de pessoas  para simular o banco de dados
let Listapessoas = [
    { 
        id: 1,
        Nome: "João",
        cpf: "002001003",
        email: "joão@pedro.com",
        DataNascimento:"01/02/2003"

    }, 
    {
        id: 2,
        Nome: "Maria",
        cpf: "010605003",
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

//#criação 
//POST/PESSOAS
router.post('/pessoas', (req, res, next)=>{
    const {Nome, cpf, email, DataNascimento}= req.body
    if(!Nome || !cpf || !email || !DataNascimento ){
        return res.status(400).json({error: "Nome, Cpf, email, e datanascimento são obrigatorios"})
    }
    if(Listapessoas.some(pessoa => pessoa.cpf == cpf)){
        return res.status(409).json({error:"CPF já cadastrado!!!"})
    }
    const novaPessoa = {
        id: Date.now(),
        Nome ,
        cpf ,
        email ,
        DataNascimento
    }
    Listapessoas.push(novaPessoa)
    res.status(201).json({message: "Pessoa cadastrada com sucesso!!!", novaPessoa})

})
//#Atualização
//PUT OU PATH /PESSOAS/;ID
router.put("/pessoas/:id", (req, res, next)=>{
    const id = req.params.id 

    const pessoa = Listapessoas.find(pessoa => pessoa.id == id)
    if (!pessoa){
        return res.status(404).json({error:"Pessoa não encontrada!!!"})
    }
    const {Nome, email, DataNascimento}= req.body
    if(!Nome || !email || !DataNascimento ){
        return res.status(400).json({error: "Nome , email, e datanascimento são obrigatorios"})
    }
//atualizo os dados das pessoas 
pessoa.Nome = Nome
pessoa.email = email
pessoa.DataNascimento = DataNascimento

res.json({message:"Pessoa atualizada com sucesso", pessoa})

})

//Remoção 
//Delete/pessoa/:id
router.delete("/pessoas/:id", (req, res, next)=>{
const id = req.params.id 
//validar se a pessoa não existe 
const pessoa  = Listapessoas.find(pessoa => pessoa.id == id) 
if (!pessoa){
    return res.status(404).json({error:"Pessoa não encontrada!!!"})
}
Listapessoas = Listapessoas.filter(pessoa => pessoa.id != id)
res.json({message:"Pessoa excluida com sucesso!!!",})
})





//exportar o roteador 
module.exports = router