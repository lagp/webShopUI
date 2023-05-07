import { Mensaje } from '../../core/models/mensaje.model';
import { Component, OnInit } from '@angular/core';
import { Categoria, Libro } from '../../core/models';
import { CategoriaService } from 'src/app/services/categoria.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  categorias: Categoria[] = [];
  filtro: Libro = new Libro();
  mensaje: string = '';
  selectedCategoria: Categoria | undefined = undefined;

  constructor(
    private categoriaService: CategoriaService,
  ) { }

  ngOnInit(): void {
    this.getCategorias();
  }

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

  private getCategorias(): void {
    this.categoriaService.getCategorias().then(
      categorias => this.categorias = categorias
    );
  }

}
