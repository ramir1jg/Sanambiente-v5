/* Clase que contiene los servicios del lado del cliente para la tabla base de tiempo */

import { Injectable } from '@angular/core';
import { Time } from '../../Models/Times_Model/Time'; // Se importa el modelo Time para base de tiempo
import BaseService from '../Base_Service/Base_Service'; // Se importan las propiedades de la clase Base_Service
import { environment } from 'src/environments/environment'; // Se importan las constantes de la clase environment

@Injectable({
  providedIn: 'root'
})
export class TimesService {

  constructor(private baseService: BaseService) { }

  /* Se crean los metodos utilizados por la vista de base de tiempo */

  // metodo para crear
  createTime(body: Time) {
    return this.baseService.create(body, `${environment.hostCreateTime}`);
  }
  // metodo para listar todos las bases de tiempos
  viewTimes() {
    return this.baseService.view(`${environment.viewTimes}`).toPromise().then((data: any) => data.message).catch((error) => error);
  }
  // metodo para actualizar
  updateTime(body: Time, id_tiempo: number) {
    return this.baseService.update(body, `${environment.hostUpdateTime}/${id_tiempo}`);
  }
  // metodo para seleccionar una base de tiempo por id
  viewTimeById(id_tiempo: number) {
    return this.baseService.view(`${environment.hostviewTimeById}/${id_tiempo}`);
  }

}