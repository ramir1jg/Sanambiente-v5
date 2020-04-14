/* Clase que contiene los servicios del lado del cliente para la tabla organizacion */

import { Injectable } from '@angular/core';
import { Organization } from '../../Models/Organizations_Model/Organization'; // se importa el modelo organization para la organizacion
import BaseService from '../Base_Service/Base_Service'; // se importan las propiedades de la clase Base_Service
import { environment } from 'src/environments/environment';// Se importan las constantes de la clase environment

@Injectable({
  providedIn: 'root'
})
export class OrganizationsService {

  constructor(private baseService: BaseService) { }

  /* Se crean los metodos utilizados por la vista de organizacion */

  //crear organizacion 
  createOrganization(body: Organization) {
    return this.baseService.create(body, `${environment.hostCreateOrganization}`);
  }

  // mostrar todas las organizaciones creadas
  viewOrganizations() {
    return this.baseService.view(`${environment.viewOrganizations}`).toPromise().then((data: any) => data.message).catch((error) => error);
  }

  // actualizar las organizaciones
  updateOrganization(body: Organization, id_organizacion: number) {
    return this.baseService.update(body, `${environment.hostUpdateOrganization}/${id_organizacion}`);
  }

  // consultar si existe una organizacion para su posterior actualizacion 
  viewOrganizationById(id_organizacion: number) {
    return this.baseService.view(`${environment.hostviewOrganizationById}/${id_organizacion}`);
  }

}
