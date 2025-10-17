const express = require('express')
const mongoose  = require('mongoose')
const dotenv = require('dotenv').config()

const DB_HOST = process.env.DB_HOST
const DB_USER= process.env.DB_USER
const DB_PASS= process.env.DB_PASS
const DB_NAME= process.env.DB_NAME

const url = `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/$${DB_NAME}?retryWrites=true&w=majority&appName=Gabriella0`

const app = express()
app.use(express.json())

//conectar no mango

mongoose.connect('mongodb+srv://gabriella:gaby1011@gabriella0.svyvxpt.mongodb.net/?retryWrites=true&w=majority&appName=Gabriella0')
.then(() => {
    console.log("Conectar ao MongoDB")
})
.catch(erro => {
    console.log("erro ao conectar no banco MangoDB:", erro)
})

//Interface com banco de dados -Model
//Cada modelo respresenta uma Collection(Tabela)
const TarefaModel = mongoose.model('Tarefas', new mongoose.Schema(
{
nome: String
}
))

//CRUD
//Create
app.post('/tarefas',async(req, res, next) =>{
const tarefa = req.body
if (!tarefa.nome){
    return res.status(400).json({erro: "O campo nome é obrigatório!!!"})
}
const tarefaCriada = await TarefaModel.create(tarefa)
res.status(201).json(tarefaCriada)
})
//start
app.listen(300, () => {
    console.log("Aplicação rodando em http://localhost:300") 
})