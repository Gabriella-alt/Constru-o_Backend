const express = require('express');
const router = express.Router();
const LivroModel = require('../models/LivroModel'); 

// Middlewares de validação
const { validarNovoLivro } = require('../validators/LivroValidator');
const { validarID } = require('../validators/IDValidator');

// Rotas do CRUD
// Create
router.post('/livros', validarNovoLivro, async (req, res, next) => {
  try {
    const livro = req.body;
    const livroCadastrado = await LivroModel.create(livro);
    res.status(201).json(livroCadastrado);
  } catch (error) {
    next(error);
  }
});

// Read all
router.get('/livros', async (req, res, next) => {
  try {
    const livros = await LivroModel.find();
    res.json(livros);
  } catch (error) {
    next(error);
  }
});

// Read by ID
router.get('/livros/:id', validarID, async (req, res, next) => {
  try {
    const id = req.params.id;
    const livroEncontrado = await LivroModel.findById(id);
    if (!livroEncontrado) {
      return res.status(404).json({ erro: "Livro não encontrado!" });
    }
    res.json(livroEncontrado);
  } catch (error) {
    next(error);
  }
});

// Update
router.put('/livros/:id', validarID, async (req, res, next) => {
  try {
    const id = req.params.id;
    const novosDados = req.body;
    const livroAtualizado = await LivroModel.findByIdAndUpdate(id, novosDados, { new: true, runValidators: true });
    if (!livroAtualizado) {
      return res.status(404).json({ erro: "Livro não encontrado" });
    }
    res.json(livroAtualizado);
  } catch (error) {
    next(error);
  }
});

// Delete
router.delete('/livros/:id', validarID, async (req, res, next) => {
  try {
    const id = req.params.id;
    const livroDeletado = await LivroModel.findByIdAndDelete(id);
    if (!livroDeletado) {
      return res.status(404).json({ erro: "Livro não encontrado" });
    }
    res.status(204).send();
  } catch (error) {
    next(error);
  }
});

module.exports = router;
