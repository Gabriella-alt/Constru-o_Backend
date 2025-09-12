const express = require('express')
const router = express.Router()

router.get('/somar', (req, res) => {
    const numA = Number(req.query.numA);
    const numB = Number(req.query.numB);
    const resultado = numA + numB
    res.send(resultado)
   
  });
router.get('/subtrair', (req, res) => {
  const numA = Number(req.query.numA);
  const numB = Number(req.query.numB);
  const resultado = numA - numB
  res.send(resultado)
});

router.get('/multiplicar', (req, res) => {
  const numA = Number(req.query.numA);
  const numB = Number(req.query.numB);
  const resultado = numA * numB
  res.send(resultado)
});

router.get('/dividir', (req, res) => {
  const numA = Number(req.query.numA);
  const numB = Number(req.query.numB);
  const resultado = numA / numB
  res.send(resultado)
});

router.get('/aoQuadrado', (req, res) => {
  const numA = Number(req.query.numA);
  const resultado = numA * numA
  res.send(resultado)
});


router.get('/raizQuadrada', (req, res) => {
  const numA = Number(req.query.numA);
  try {
    res.json({ resultado: raizQuadrada(numA) });
  } catch (err) {
    res.status(400).json({ erro: err.message });
  }
});

module.exports = router;
