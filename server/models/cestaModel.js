// En este array se almacenarán las cestas de la compra
const CESTAS = [];

// El localizador a asignar a la cesta
let localizador = 1;

// Método para buscar una cesta por su localizador
const getCesta = (localizador) => CESTAS.find((cesta) => cesta.localizador === localizador);

// Método para crear una nueva cesta
const crearCesta = () => {
  let cesta = {
    localizador: localizadorId,
    estado: 'CREADA',
    items: [],
    fecha: '',
    totalUnidades: 0,
    totalPrecio: 0
  };

  CESTAS.push(cesta);

  localizadorId = localizadorId + 1;

  return cesta;
};

// Método para modificar una cesta
const modificarCesta = (localizador, libro, unidades) => {
  const cesta = getCesta(localizador);

  if (cesta) {
    let item = cesta.items.find((item) => item.libro.idLibro === libro.idLibro);
    if (unidades > 0) {
      if (item) {
        item.unidades = unidades;
      } else {
        item = { unidades: unidades, libro: libro };
        cesta.items.push(item);
      }
    } else {
      if (item) {
        const itemIndex = cesta.items.findIndex((c) => c.libro.idLibro === libro.idLibro);
        if (itemIndex > -1) {
          cesta.items.splice(itemIndex, 1);
        }
      }
    }
  }

  return cesta;
};

module.exports = {
  getCesta,
  crearCesta,
  modificarCesta
}