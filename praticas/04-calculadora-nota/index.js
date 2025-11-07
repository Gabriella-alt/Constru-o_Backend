//Importa o express
const express = require ('express')
//Crio uma instância do express
const app = express()

//Middlewares (Intermediário)
//Intermediário de log
app.use((req, res, next) =>{
    console.log("--------###--------")
    console.log("Tempo:", new Date().toLocaleString())
    console.log("Metodo:", req.method)
    console.log("Rota:", req.url)
    next()
})


app.get('/nome', (req, res, next) =>{
//capturar informações 
//vão vir através dos parametros da requisição (query params)
const PrimeiroNome = req.query.PrimeiroNome
const SobreNome = req.query.SobreNome

    res.send("olá " + PrimeiroNome + " " + SobreNome + "!!!")
})

const calculadoraNotaRouter = require('./routes/calculadoraNota')
//Toda requisição que chegar na  rota /calculadora vai para o router
app.use('/calculadora', calculadoraNotaRouter)


//executar a aplicação 
app.listen(3000, () => {
    console.log("Aplicação rodando em http://localhost:3000")
})