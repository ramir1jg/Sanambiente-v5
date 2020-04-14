/* Clase que contiene los servicios del lado del cliente para la tabla tipo de mantenimiento */

import { Injectable } from '@angular/core';
import { MaintenanceType } from '../../Models/Maintenances_Type_Model/Maintenance_Type'; // Se importa el modelo Maintenancetype para tipo de mantenimiento
import BaseService from '../Base_Service/Base_Service'; // Se importan las propiedades de la clase Base_Service
import { environment } from 'src/environments/environment'; // Se importan las constantes de la clase environment

@Injectable({
  providedIn: 'root'
})
export class MaintenancesTypeService {

  constructor(private baseService: BaseService) { }

  /* Se crean los metodos utilizados por la vista de Tipo de Mantenimiento */

  // metodo para crear un tipo de mantenimiento 
  createMaintenanceType(body: MaintenanceType) {
    return this.baseService.create(body, `${environment.hostCreateMaintenanceType}`);
  }
  // metodo para listar todos los tipos de mantenimientos
  viewMaintenancesType() {
    return this.baseService.view(`${environment.viewMaintenancesType}`).toPromise().then((data: any) => data.message).catch((error) => error);
  }
  // metodo para seleccionar un tipo de mantenimiento por id
  viewMaintenanceTypeById(id_tipo_mantenimiento: number) {
    return this.baseService.view(`${environment.viewMaintenanceTypeById}/${id_tipo_mantenimiento}`);
  }
  //metodo para actualizar un tipo de mantenimiento
  updateMaintenanceType(body: MaintenanceType, id_tipo_mantenimiento: number) {
    return this.baseService.update(body, `${environment.hostUpdateMaintenanceType}/${id_tipo_mantenimiento}`);
  }

}
