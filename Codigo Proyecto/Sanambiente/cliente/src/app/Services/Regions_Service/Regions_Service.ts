/* Clase que contiene los servicios del lado del cliente para la tabla region */

import { Injectable } from '@angular/core';
import { Region } from '../../Models/Regions_Model/Region'; // Se importa el modelo Region para region
import BaseService from '../Base_Service/Base_Service'; // Se importan las propiedades de la clase Base_Service
import { environment } from 'src/environments/environment'; // Se importan las constantes de la clase environment

@Injectable({
  providedIn: 'root'
})
export class RegionsService {

  constructor(private baseService: BaseService) { }

  /* Se crean los metodos utilizados por la vista de region */

  // metodo para crear
  createRegion(body: Region) {
    return this.baseService.create(body, `${environment.hostCreateRegion}`);
  }
  // metdo para listar todas las regiones
  viewRegions() {
    return this.baseService.view(`${environment.viewRegions}`).toPromise().then((data: any) => data.message).catch((error) => error);
  }
  // metodo para actualizar
  updateRegion(body: Region, id_region: number) {
    return this.baseService.update(body, `${environment.hostUpdateRegion}/${id_region}`);
  }
  // metodo para seleccionar una region por id
  viewRegionById(id_region: number) {
    return this.baseService.view(`${environment.hostviewRegionById}/${id_region}`);
  }

}
