import { Categoria } from "./categoria.model";

export class Libro {
  id!: number;
  idCategoria!: number;
  titulo!: string;
  isbn!: string;
  descipcion!: string;
  autor!: string;
  categoria!: Categoria;
  precio!: number;
  foto!: string;
}