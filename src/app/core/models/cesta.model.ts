import { ItemCesta } from "./itemCesta.model";

export class Cesta {
  localizador!: string;
  estado!: string;
  items!: ItemCesta[];
  fecha!: Date;
  totalUnidades!: number;
  totalPrecio!: number;
}