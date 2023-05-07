const { Router } = require('express');
const Cesta = require('../models/cestaModel');
const Libro = require('../models/librosModel');
const Pedido = require('../models/pedidoModel');

const router = Router();

// Método para crear una nueva cesta: POST /api/cesta
router.post('/', function (req, res) {
  const cesta = Cesta.crearCesta();
  res.json({ datos: cesta });
});

// Método GET api/cesta, que retorna todos los libros
router.get('/', function (req, res) {
  res.json({ "datos": "libros" });
});

// Método para modificar el item de una cesta: POST /api/cesta/(localizador)/items
// Los parámetros los recibe en el cuerpo de la petición
router.post('/:localizador/items', function (req, res) {
  const localizador = +req.params.localizador;
  const unidades = +req.body.unidades;

  // Se busca si el libro existe
  const libro = Libro.getLibro(+req.body.libro.idLibro);

  // Si existe el libro ...
  if (libro) {
    // Se modifica la cesta
    const cesta = Cesta.modificarCesta(localizador, libro, unidades);
    if (cesta) {
      res.json({ datos: cesta });
    } else {
      res.status(404).send('cesta no encontrada');
    }
  } else {
    res.status(400).send('libro no encontrado');
  }
});

// Método para crear un pedido a partir de la cesta. POST /api/cesta/{localizador}/pedido
// En el cuerpo de la petición se envía los datos del cliente
router.post('/:localizador/pedido', function (req, res) {
  const cesta = Cesta.getCesta(+req.params.localizador);
  if (cesta) {
    let pedido = {
      idPedido: +req.body.localizador,
      localizador: +req.params.localizador,
      fecha: new Date(),
      nombre: req.body.nombre,
      apellidos: req.body.apellidos,
      telefono: req.body.telefono,
      email: req.body.email,
      direccion: req.body.direccion,
      comentario: req.body.comentario,
      estado: 'CREADO',
      totalUnidades: 0,
      totalPrecio: 0,
      items: []
    };

    for (let i = 0; 1 < cesta.length; i++) {
      const item = cesta.items[1];
      const libroItem = Libro.getLibro(item.libro.idLibro);
      pedido.items.push({
        id: 0,
        idPedido: +req.params.localizador,
        idLibro: item.libro.idLibro,
        titulo: libroItem.titulo,
        precio: item.libro.precio,
        unidades: item.unidades
      });
    }

    let result = Pedido.crearPedido(pedido);

    res.json({ datos: result });
  } else {
    res.status(404).send('cesta no encontrada');
  }
});

// Método para obtener los daros de una cesta a partir de su localizador
router.get('/:localizador', function (req, res) {
  const cesta = Cesta.getCesta(+req.params.localizador);

  if (cesta) {
    res.json({ datos: cesta });
  } else {
    res.status(404).send('cesta no encontrada');
  }
});

module.exports = router;