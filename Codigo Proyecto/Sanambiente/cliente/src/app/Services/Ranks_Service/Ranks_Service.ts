/* Clase que contiene los servicios del lado del cliente para la tabla rango */

import { Injectable } from '@angular/core';
import { Rank } from '../../Models/Ranks_Model/Rank'; // Se importa el modelo City para rango
import BaseService from '../Base_Service/Base_Service'; // Se importan las propiedades de la clase Base_Service
import { environment } from 'src/environments/environment'; // Se importan las constantes de la clase environment

@Injectable({
  providedIn: 'root'
})
export class RanksService {

  constructor(private baseService: BaseService) { }

  /* Se crean los metodos utilizados por la vista de rango */

  // metodo para crear
  createRank(body: Rank) {
    return this.baseService.create(body, `${environment.hostCreateRank}`);
  }
  // metodo para listar las estaciones
  viewStationsRank() {
    return this.baseService.view(`${environment.viewStationsRank}`).toPromise().then((data: any) => data.message).catch((error) => error);
  }
  // metodo para listar todos los rangos
  viewRanks() {
    return this.baseService.view(`${environment.viewRanks}`).toPromise().then((data: any) => data.message).catch((error) => error);
  }
  // metodo para seleccionar un rango por id
  viewRankById(id_rango: number) {
    return this.baseService.view(`${environment.viewRankById}/${id_rango}`);
  }
  // metodo para actualizar
  updateRank(body: Rank, id_rango: number) {
    return this.baseService.update(body, `${environment.hostUpdateRank}/${id_rango}`);
  }

}
