const mongoose = require('mongoose');

const schema = new mongoose.Schema(
  {
    titulo: { type: String, required: true },
    autor: { type: String, required: true },
    anoPublicacao: { type: Number, required: true },
    preco: { type: Number, required: true, min: 0 },
    editora: { type: String, required: true },
  },
  // Parâmetros: salva data de criação e atualização do registro
  { timestamps: true }
);

// Modelo
const LivroModel = mongoose.model('Livros', schema);

module.exports = LivroModel;
