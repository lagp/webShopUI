let LIBROS = require('./libros.json');

// Método para obtener una lista de todos los libros
const getLibros = () => LIBROS;

// Método para obtener un libro a partir de su identificador
const getLibro = (idLibro) => LIBROS.find(libro => libro.idLibro === idLibro);

// Método para obtener una lista de libros cuyo título o autor contenga el
// valor indicador por parámetro
const getLibroByTituloAutor = (valor) => LIBROS.filter(libro => libro.titulo.indexOf(valor) >= 0 || libro.autor.indexOf(valor) >= 0);

module.exports = {
    getLibros,
    getLibro,
    getLibroByTituloAutor
}