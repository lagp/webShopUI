const { Router } = require('express');

let libros = require('../models/libros.json');
const router = Router();

// Método GET api/libros, que retorna todos los libros
router.get('/', function (req, res) {
  res.json({ "datos": libros });
});

// Método POST api/libros/filtro, que retorna todos los libros, pero iltrados por el idCategoría,
// que vendrá en el body de la petición
router.post('/filtro', function (req, res) {
  let lista = libros;
  if (req.body.idCategoria) {
    lista = lista.filter(libro => libro.idCategoria == +req.body.idCategoria);
  }
  res.json({ "datos": lista });
});

// Método GET api/libros/tituloAutor?valor=xxx, que filtra por el título o autor del libro.
// El valor va  indicado como paraámetro en la url
router.get('/tituloAutor', function (req, res) {
  let lista = libros;
  if (req.query.valor) {
    lista = lista.filter(libro => libro.titulo.includes(req.query.valor) || libro.autor.includes(req.query.valor));
  }
  res.json({ "datos": lista });
});

// Método GET api/libros/idLibro. Retorna el libro cuyo identificador es idLibro.
router.get('/:idLibro', function (req, res) {
  let lista = libros;
  if (req.params.idLibro) {
    let filtrados = lista.filter(libro => libro.idLibro == +req.params.idLibro);
    if (filtrados.length > 0) {
      res.json({ "datos": filtrados[0] });
    }
  }
  res.status(404).send({"mensaje": "Libro no encontrado"});
});

module.exports = router;