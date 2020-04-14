/* Clase que contiene los servicios del lado del cliente para la tabla mantenimiento */

import { Injectable } from '@angular/core';
import { Maintenance } from '../../Models/Maintenances_Model/Maintenance'; // Se importa el modelo Maintenance para mantenimiento
import BaseService from '../Base_Service/Base_Service'; // Se importan las propiedades de la clase Base_Service
import { environment } from 'src/environments/environment'; // Se importan las constantes de la clase environment

@Injectable({
  providedIn: 'root'
})
export class MaintenancesService {

  constructor(private baseService: BaseService) { }

  /* Se crean los metodos utilizados por la vista de Mantenimiento */

  //metodo para crear 
  createMaintenance(body: Maintenance) {
    return this.baseService.create(body, `${environment.hostCreateMaintenance}`);
  }
  // metodo para listar las estaciones
  viewStationsMaintenance() {
    return this.baseService.view(`${environment.viewStationsMaintenance}`).toPromise().then((data: any) => data.message).catch((error) => error);
  }
  // metodo para listar las partes de la estacion
  viewPartsStations() {
    return this.baseService.view(`${environment.viewPartsStations}`).toPromise().then((data: any) => data.message).catch((error) => error);
  }
  // metodo para listar los tipos de mantenimientos
  viewTypesMaintenance() {
    return this.baseService.view(`${environment.viewTypesMaintenance}`).toPromise().then((data: any) => data.message).catch((error) => error);
  }
  // metodo para listar la periodicidad
  viewPeriodicitiesMaintenance() {
    return this.baseService.view(`${environment.viewPeriodicitiesMaintenance}`).toPromise().then((data: any) => data.message).catch((error) => error);
  }
  // metodo para listar todos los mantenimientos
  viewMaintenances() {
    return this.baseService.view(`${environment.viewMaintenances}`).toPromise().then((data: any) => data.message).catch((error) => error);
  }
  // metodo para seleccionar por id
  viewMaintenanceById(id_mantenimiento: number) {
    return this.baseService.view(`${environment.viewMaintenanceById}/${id_mantenimiento}`);
  }
  // metodo para actualizar un mantenimiento
  updateMaintenance(body: Maintenance, id_mantenimiento: number) {
    return this.baseService.update(body, `${environment.hostUpdateMaintenance}/${id_mantenimiento}`);
  }

}
