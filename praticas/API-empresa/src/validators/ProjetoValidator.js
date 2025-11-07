const { default: mongoose } = require('mongoose');
const yup = require('yup');

const projetoSchema = yup.object().shape({
  nome: yup.string().required('O nome do projeto é obrigatório'),
  descricao: yup.string().required('A descrição é obrigatória'),
  dataInicio: yup.date().required('A data de início é obrigatória'),
  dataFim: yup.date()
    .required('A data de término é obrigatória')
    .min(yup.ref('dataInicio'), 'A data de término deve ser posterior à data de início'),
});

async function validarProjeto(req, res, next) {
  try {
    await projetoSchema.validate(req.body, { abortEarly: false });
    next();
  } catch (error) {
    res.status(400).json({ error: error.errors });
  }
}

const projetoSchemaAtualizacao = yup.object().shape({
  nome: yup.string(),
  descricao: yup.string(),
  dataInicio: yup.date(),
  dataFim: yup.date()
    .min(yup.ref('dataInicio'), 'A data de término deve ser posterior à data de início'),
});

async function validarAtualizacaoProjeto(req, res, next) {
  try {
    await projetoSchemaAtualizacao.validate(req.body, { abortEarly: false });
    next();
  } catch (error) {
    res.status(400).json({ error: error.errors });
  }
}

module.exports = {
  validarProjeto,
  validarAtualizacaoProjeto,
};
