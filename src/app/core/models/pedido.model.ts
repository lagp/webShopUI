import { ItemPedido } from "./itemPedido.model";

export class Pedido {
  idPedido!: number;
  localizador!: string;
  estado!: string;
  fecha!: Date;
  nombre!: string;
  apellidos!: string;
  telefono!: string;
  email!: string;
  direccion!: string;
  comentario!: string;
  items!: ItemPedido[];
  totalUnidades!: number;
  totalPrecio!: number;
}
