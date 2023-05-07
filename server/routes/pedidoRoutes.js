const { Router } = require('express');
Pedido = require('../models/pedidoModel');
const router = Router();

// Método GET api/pedidos, que retorna todos los pedidos
router.get('/', function (req, res) {
  let pedidos = Pedido.getPedidos();

  if (req.query.localizador) {
    pedidos = pedidos.filter(p => p.localizador === +req.query.localizador);
  }

  res.json({ datos: pedidos });
});

// Método GET api/pedidos/:idPedido, que retorna el pedido por idPedido
router.get('/:idPedido', function (req, res) {
  const pedido = Pedido.getPedidoId(+req.params.idPedido);
  if (pedido) {
    res.json({ datos: pedido });
  } else {
    res.status(404).send({ error: 'Pedido no encontrado' });
  }
});

// Método PUT api/pedidos/:idPedido, para modificar el estado de un pedido
router.put('/:idPedido', function (req, res) {
  const pedido = Pedido.getPedidoId(+req.params.idPedido);
  if (pedido) {
    let result = Pedido.actualizarEstadoPedido(pedido.localizador, req.body.estado);
    res.json({ datos: result });
  } else {
    res.status(404).send('pedido no encontrado');
  }
});

// Método DELETE api/pedidos/:idPedido, para eliminar un pedido
router.delete('/:idPedido', function (req, res) {
  const pedido = Pedido.getPedidoId(+req.params.idPedido);
  if (pedido) {
    Pedido.eliminarPedido(pedido.localizador);
    res.json({mensajes: [{codigo: 0, mensaje: 'Se ha eliminado el pedido: ' +  req.params.idPedido}]})
  } else {
    res.status(404).send('pedido no encontrado:  ' + req.params.idPedido);
  }
});

module.exports = router;