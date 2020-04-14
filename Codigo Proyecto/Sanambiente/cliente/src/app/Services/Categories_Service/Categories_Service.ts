/* Clase que contiene los servicios del lado del cliente para la tabla Categoria */

import { Injectable } from '@angular/core';
import { Category } from '../../Models/Categories_Model/Category';// Se importa el modelo Category para Categoria
import BaseService from '../Base_Service/Base_Service';// Se importan las propiedades de la clase Base_Service
import { environment } from 'src/environments/environment'; // Se importan las constantes de la clase environment


@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private baseService: BaseService) { }

  /* Se crean los metodos utilizados por la vista de Categoria */

  // metodo para crear
  createCategory(body: Category) {
    return this.baseService.create(body, `${environment.hostCreateCategory}`);
  }

  // metodo para listar todas las categorias
  viewCategories() {
    return this.baseService.view(`${environment.viewCategories}`).toPromise().then((data: any) => data.message).catch((error) => error);
  }

  // metodo para actualizar
  updateCategory(body: Category, id_categoria: number) {
    return this.baseService.update(body, `${environment.hostUpdateCategory}/${id_categoria}`);
  }
  // metodo para seleccionar una categoria por id
  viewCategoryById(id_categoria: number) {
    return this.baseService.view(`${environment.hostviewCategoryById}/${id_categoria}`);
  }
}
