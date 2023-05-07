const express = require('express'), app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const categoriasRoutes = require('./routes/categoriaRoutes');
const libroRoutes = require('./routes/libroRoutes');
const cestaRoutes = require('./routes/cestaRoutes');
const pedidoRoutes = require('./routes/pedidoRoutes');

app.use('/api/categorias', categoriasRoutes);
app.use('/api/libros', libroRoutes);
app.use('/api/cesta', cestaRoutes);
app.use('/api/pedidos', pedidoRoutes);

const port = 3000;
app.listen(port);

console.log(`Servidor está corriendo en: ${port}`)