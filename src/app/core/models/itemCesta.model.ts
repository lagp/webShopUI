import { Libro } from "./libro.model";

export class ItemCesta {
  unidades: number;
  libro: Libro;

  constructor(unidades: number, libro: Libro) {
    this.unidades = unidades;
    this.libro = libro;
  }
}