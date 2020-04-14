/* Clase que contiene los servicios del lado del cliente para la tabla estacion */

import { Injectable } from '@angular/core';
import { Station } from '../../Models/Stations_Model/Station'; // Se importa el modelo Station para estacion
import BaseService from '../Base_Service/Base_Service'; // Se importan las propiedades de la clase Base_Service
import { environment } from 'src/environments/environment'; // Se importan las constantes de la clase environment


@Injectable({
  providedIn: 'root'
})
export class StationsService {

  constructor(private baseService: BaseService) { }

  /* Se crean los metodos utilizados por la vista de estaciones */

  // crear estacion
  createStation(body: Station) {
    return this.baseService.create(body, `${environment.hostCreateStation}`);
  }

  // consultar si existe la estacion para su posterior modificacion
  viewStationById(id_estacion: number) {
    return this.baseService.view(`${environment.viewStationById}/${id_estacion}`);
  }

  // mostrar todas las categorias en la vista de estacion
  viewCategoriesStation() {
    return this.baseService.view(`${environment.viewCategoryStation}`).toPromise().then((data: any) => data.message).catch((error) => error);
  }

  // mostrar todas los tiempos en la vista de estacion
  viewTimesStation() {
    return this.baseService.view(`${environment.viewTimeStation}`).toPromise().then((data: any) => data.message).catch((error) => error);
  }

  // mostrar todas las regiones en la vista de estacion
  viewRegionsStation() {
    return this.baseService.view(`${environment.viewRegionStation}`).toPromise().then((data: any) => data.message).catch((error) => error);
  }

  // mostrar todas laos gmt en la vista de estacion
  viewGmtStation() {
    return this.baseService.view(`${environment.viewGmtStation}`).toPromise().then((data: any) => data.message).catch((error) => error);
  }

  // mostrar todas las ciudades en la vista de estacion
  viewCitiesStation() {
    return this.baseService.view(`${environment.viewCityStation}`).toPromise().then((data: any) => data.message).catch((error) => error);
  }

  // mostrar todas las estaciones que hay registradas
  viewStations() {
    return this.baseService.view(`${environment.viewStations}`).toPromise().then((data: any) => data.message).catch((error) => error);
  }

  // actualizar una estacion
  updateStation(body: Station, id_estacion: number) {
    return this.baseService.update(body, `${environment.hostUpdateStation}/${id_estacion}`);
  }

  // mostrar todas las plantillas relacionadas con la estacion
  viewTemplatesStation() {
    return this.baseService.view(`${environment.viewTemplateStation}`).toPromise().then((data: any) => data.message).catch((error) => error);
  }

}
