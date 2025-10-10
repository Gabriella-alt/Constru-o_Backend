const express = require('express')
const mongoose  = require('mongoose')
const dotenv = require('dotenv').config()

const DB_HOST = process.env.DB_HOST
DB_USER= process.env.DB_USER
DB_PASS= process.env.DB_PASS
DB_NAME= process.env.DB_NAME

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

app.listen(300, () => {
    console.log("Aplicação rodando em http://localhost:300") 
})