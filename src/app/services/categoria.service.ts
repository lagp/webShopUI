import { Injectable } from '@angular/core';
import { Categoria } from '../core/models';
import { CATEGORIAS } from './mock-categorias';

@Injectable()
export class CategoriaService {

  constructor() { }

  getCategorias(): Promise<Categoria[]> { 
    return new Promise(resolve => {
      // Simular latencia de una llamada HTTP
      setTimeout(() => resolve(CATEGORIAS), 2000);
    });
  }
}
