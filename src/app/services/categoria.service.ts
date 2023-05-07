import { Injectable } from '@angular/core';
import { Respuesta } from '../core/models';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable()
export class CategoriaService {
  private categoriasUrl: string = 'api/categorias';

  constructor(
    private http: HttpClient,
  ) { }

  getCategorias() {
    return this.http.get<Respuesta>(this.categoriasUrl)
      .pipe(map(respuesta => respuesta.datos));
  }

  private handleError(error: any): Promise<any> {
    console.error('Ocurrio un error', error);
    return Promise.reject(error.message || error);
  }
  
}
