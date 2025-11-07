const express = require('express');
const router = express.Router();
const ProjetoModel = require('../models/ProjetoModel');
const { validarProjeto, validarAtualizacaoProjeto } = require('../validators/ProjetoValidator');
const { validarId } = require('../validators/IDValidator');

router.get('/projetos', async (req, res) => {
  const projetos = await ProjetoModel.find();
  res.json(projetos);
});

router.get('/projetos/:id', validarId, async (req, res) => {
  const projeto = await ProjetoModel.findById(req.params.id);
  if (!projeto) {
    return res.status(404).json({ error: 'Projeto não encontrado' });
  }
  res.json(projeto);
});

router.post('/projetos', validarProjeto, async (req, res) => {
  const novoProjeto = await ProjetoModel.create(req.body);
  res.status(201).json(novoProjeto);
});

router.put('/projetos/:id', validarId, validarAtualizacaoProjeto, async (req, res) => {
  const projetoAtualizado = await ProjetoModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!projetoAtualizado) {
    return res.status(404).json({ error: 'Projeto não encontrado' });
  }
  res.json(projetoAtualizado);
});

router.delete('/projetos/:id', validarId, async (req, res) => {
  const projetoDeletado = await ProjetoModel.findByIdAndDelete(req.params.id);
  if (!projetoDeletado) {
    return res.status(404).json({ error: 'Projeto não encontrado' });
  }
  res.status(204).send();
});

module.exports = router;
