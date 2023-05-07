// Array donde se almacenan los datos
const PEDIDOS = [];

// Próximo id del pedido
let localizadorId = 1;

const getPedidos = () => PEDIDOS;

// Método para obtener un pedido a partir de su localizador
const getPedidoLocalizador = (localizador) =>
  PEDIDOS.find((pedido) => pedido.localizador === localizador);

// Método para obtener un pedido a partir de su identificador numérico
const getPedidoId = (id) => PEDIDOS.find((pedido) => pedido.idPedido === id);

// Método para modificar el estado de un pedido
const actualizarEstadoPedido = (localizador, estado) => {
  let pedido = getPedidoLocalizador(localizador);

  if (pedido) {
    pedido.estado = estado;
  }

  return pedido;
};

// Método para eliminar un pedido
const eliminarPedido = (localizador) => {
  const itemIndex = PEDIDO.findIndex((p) => p.localizador === localizador);
  if (itemIndex > -1) {
    PEDIDOS.splice(itemIndex, 1);
  }
};

// Método para crear un pedido
const crearPedido = (pedido) => {
  pedido.idPedido = localizadorId;
  localizadorId = localizadorId + 1;
  PEDIDOS.push(pedido);

  return pedido;
};

module.exports = {
  getPedidos,
  getPedidoLocalizador,
  getPedidoId,
  crearPedido,
  actualizarEstadoPedido,
  eliminarPedido
}