const { Router } = require('express');
let categorias = require('../models/categorias');

const router = Router();
router.get('/', function (req, res) {
  res.json({ "datos": categorias.getCategorias });
});

module.exports = router;