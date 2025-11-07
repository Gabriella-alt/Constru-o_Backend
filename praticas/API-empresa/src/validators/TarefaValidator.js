const { default: mongoose } = require('mongoose');
const yup = require('yup');

const tarefaSchema = yup.object().shape({
  titulo: yup.string().required('O título da tarefa é obrigatório'),
  descricao: yup.string().required('A descrição é obrigatória'),
  dataInicio: yup.date().required('A data de início é obrigatória'),
  dataFim: yup.date()
    .required('A data de término é obrigatória')
    .min(yup.ref('dataInicio'), 'A data de término deve ser posterior à data de início'),
  responsavel: yup.string()
    .required('O responsável é obrigatório')
    .test(
      'idValidator',
      'ID de funcionário inválido',
      value => mongoose.Types.ObjectId.isValid(value)
    ),
  projeto: yup.string()
    .required('O projeto é obrigatório')
    .test(
      'idValidator',
      'ID de projeto inválido',
      value => mongoose.Types.ObjectId.isValid(value)
    ),
});

async function validarTarefa(req, res, next) {
  try {
    await tarefaSchema.validate(req.body, { abortEarly: false });
    next();
  } catch (error) {
    res.status(400).json({ error: error.errors });
  }
}

const tarefaSchemaAtualizacao = yup.object().shape({
  titulo: yup.string(),
  descricao: yup.string(),
  dataInicio: yup.date(),
  dataFim: yup.date()
    .min(yup.ref('dataInicio'), 'A data de término deve ser posterior à data de início'),
  responsavel: yup.string()
    .nullable()
    .test(
      'idValidator',
      'ID de funcionário inválido',
      value => !value || mongoose.Types.ObjectId.isValid(value)
    ),
  projeto: yup.string()
    .nullable()
    .test(
      'idValidator',
      'ID de projeto inválido',
      value => !value || mongoose.Types.ObjectId.isValid(value)
    ),
});

async function validarAtualizacaoTarefa(req, res, next) {
  try {
    await tarefaSchemaAtualizacao.validate(req.body, { abortEarly: false });
    next();
  } catch (error) {
    res.status(400).json({ error: error.errors });
  }
}

module.exports = {
  validarTarefa,
  validarAtualizacaoTarefa,
};
