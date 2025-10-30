const yup = require('yup');

// Esquema de validação para um novo livro
const schemaNovoLivro = yup.object().shape({
  titulo: yup.string().required("O campo título é obrigatório"),
  autor: yup.string().required("O campo autor é obrigatório"),
  anoPublicacao: yup
    .number()
    .min(0, "Ano de publicação inválido")
    .required("O campo anoPublicacao é obrigatório"),
  preco: yup
    .number()
    .required("O campo preço é obrigatório"),
  editora: yup.string().required("O campo editora é obrigatório")
});

// Middleware de validação
async function validarNovoLivro(req, res, next) {
  try {
    await schemaNovoLivro.validate(req.body, { abortEarly: false });
    next();
  } catch (error) {
    return res.status(400).json({ erros: error.errors });
  }
}

// Exportar os middlewares
module.exports = {
  validarNovoLivro
};

