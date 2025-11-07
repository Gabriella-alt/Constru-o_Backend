//importar o express 
const express = require('express')

// crio uma instância(express) da minha aplacação
const app = express()
// guardar o número da porta que vai ser alocada 
const porta = 3000
// Middlewares (Intermiadiários)
app.use((req, res, next) =>{
    console.log("time: ", new Date() .toLocaleString())
    next()
    })
//metodo e a rota
//req > dados da requisição
//res > manipulador da resposta 
//next > chamador do proxímo middleware                                                               
app.get('rota', (req, res, next) => {
res.send("teste atualizado")
})

// Executa a aplicação escolhendo a porta 
app.listen(porta, () => {
 //Imprimo uma mensagem para confirma que a aplicação está funcionando (rodando na porta escolhida) 
 console.log("Aplicação rodando em http://localhost:3000")
})