import { Mensaje } from '../../core/models/mensaje.model';
import { Component } from '@angular/core';
import { Categoria, Libro } from '../../core/models';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  CATEGORIAS = [
    { 'id': 1, 'nombre': 'Informática' },
    { 'id': 2, 'nombre': 'Novelas' },
    { 'id': 3, 'nombre': 'Turismo' },
    { 'id': 4, 'nombre': 'Idiomas' },
  ];
  categorias: Categoria[] = this.CATEGORIAS;
  filtro: Libro = new Libro();
  mensaje: string = '';
  selectedCategoria: Categoria | undefined = undefined;

  buscarOnClick() {
    if (this.filtro.titulo !== '' && this.filtro.titulo !== undefined) {
      this.mensaje = '';
    } else {
      this.mensaje = 'Introduzca el valor que desee buscar';
    }
  }

  categoriaOnClick(categoria: Categoria) {
    this.selectedCategoria = categoria;
  }

}
