//Importa o exprees
const exprees = require('express')
//criar um router(Roteador 
const router = exprees.Router()

//Mapeamento das rotas e implemeto a lógica

router.get('/nota1', (req, res, next)=>{
const exeecício = parseFloat (req.query.exercício)
const trabalho = parseFloat (req.query.trabalho)
const prova = parseFloat (req.query.prova)

//validar se os marametros existem 
if(isNaN(exercício) || isNaN(trabalho) || isNaN(prova)){
    return res.status(400).json({erro:"Notas inválidas"})
}

//validar se as notas estão no intervalo correto
if(exeecício < 0 || exeecício > 1 || trabalho < 0 || trabalho > 3 || prova < 0 || prova > 6 ){
    return res.status(400).json({erro:"Notas inválidas"})
}

const notaA1 = exercício + trabalho + prova

res.json({notaA1})


res.sed("calculadora Nota A1 Funcionando")
})









module.exports = router
