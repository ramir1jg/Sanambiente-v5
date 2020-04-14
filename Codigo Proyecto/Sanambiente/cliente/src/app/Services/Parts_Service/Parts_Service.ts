/* Clase que contiene los servicios del lado del cliente para la tabla parte */

import { Injectable } from '@angular/core';
import { Part } from '../../Models/Parts_Model/Part'; // Se importa el modelo Part para parte
import BaseService from '../Base_Service/Base_Service'; // Se importan las propiedades de la clase Base_Service
import { environment } from 'src/environments/environment'; // Se importan las constantes de la clase environment

@Injectable({
  providedIn: 'root'
})
export class PartsService {

  constructor(private baseService: BaseService) { }

  /* Se crean los metodos utilizados por la vista de parte */

  // metodo para crear una parte
  createPart(body: Part) {
    return this.baseService.create(body, `${environment.hostCreatePart}`);
  }
  // metodo para listar todas las partes
  viewParts() {
    return this.baseService.view(`${environment.viewParts}`).toPromise().then((data: any) => data.message).catch((error) => error);
  }
  // metodo para actualizar una parte
  updatePart(body: Part, id_parte: number) {
    return this.baseService.update(body, `${environment.hostUpdatePart}/${id_parte}`);
  }
  // metodo para seleccionar una parte por id
  viewPartById(id_parte: number) {
    return this.baseService.view(`${environment.viewPartById}/${id_parte}`);
  }

}
