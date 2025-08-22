//importante a Lib prompt-sync
let prompt = require('prompt-sync')()

//usar a Lib do prompt-sync
let nome = prompt("qual é o seu nome?")

//usando o nome capturado pelo prompt 
console.log("Olá" + nome)
//importar o modulo calculadora 
let {calcularNotaA1,calcularNotaA2, calcularNotaFinal} = require('./calculadoraNota')

//Perguntar pro ususario a nota de exercicios, trabalho e prova
let exerciciosA1 = parseFloat(prompt("Qual a nota de exercicios A1:"))
let trabalhoA1 = parseFloat(prompt("Qual a nota de trabalho A1:"))
let provaA1 = parseFloat(prompt("Qual a nota de prova A1:"))
let notaA1 = calcularNotaA1(exerciciosA1, trabalhoA1, provaA1)

console.log("### calculo da NOTA A1 ###")
console.log("Nota Exercício A1:",  exerciciosA1)
console.log("Nota Trabalho A1:" , trabalhoA1)
console.log("Nota prova A1:" , provaA1)
console.log("NotaA1 calculada" , notaA1)

//NOTA A2
let exerciciosA2 = parseFloat(prompt("Qual a nota de exercicios A2:"))
let trabalhoA2 = parseFloat(prompt("Qual a nota de trabalho A2:"))
let provaA2 = parseFloat(prompt("Qual a nota de prova A2:"))
let notaA2 = calcularNotaA2(exerciciosA2, trabalhoA2, provaA2)

console.log("### calculo da NOTA A2 ###")
console.log("Nota Exercício A2:",  exerciciosA2)
console.log("Nota Trabalho A2:" , trabalhoA2)
console.log("Nota prova A2:" , provaA2)
console.log("NotaA2 calculada" , notaA2)

let notaFinal = calcularNotaFinal(notaA1, notaA2)

console.log("### calculo da nota final ###")
console.log("Nota final:", notaFinal)

if (notaFinal>= 5){ 
   console.log("Parabens" + nome + ", você foi aprovado !!!")
}else {
    console.log(nome + ", estude mais, infelizmente você foi reprovado!!!")
}