/* Clase que contiene los servicios del lado del cliente para la tabla Categoria */

import { Injectable } from '@angular/core';
import { Gmt } from '../../Models/Gmt_Model/Gmt';// Se importa el modelo Gmt para gmt
import BaseService from '../Base_Service/Base_Service';// Se importan las propiedades de la clase Base_Service
import { environment } from 'src/environments/environment'; // Se importan las constantes de la clase environment


@Injectable({
  providedIn: 'root'
})
export class GmtService {

  constructor(private baseService: BaseService) { }

  /* Se crean los metodos utilizados por la vista de gmt */

  // crear gmt
  createGmt(body: Gmt) {
    return this.baseService.create(body, `${environment.hostCreateGmt}`);
  }

  // mostrar todos los gmt
  viewGmt() {
    return this.baseService.view(`${environment.viewGmt}`).toPromise().then((data: any) => data.message).catch((error) => error);
  }

  // actualizar un gmt
  updateGmt(body: Gmt, id_gmt: number) {
    return this.baseService.update(body, `${environment.hostUpdateGmt}/${id_gmt}`);
  }

  // consultar si existe un gmt para su posterior actualizacion
  viewGmtById(id_gmt: number) {
    return this.baseService.view(`${environment.viewGmtById}/${id_gmt}`);
  }
}
