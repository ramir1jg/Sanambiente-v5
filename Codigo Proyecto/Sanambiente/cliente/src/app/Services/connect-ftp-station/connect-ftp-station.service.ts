import { Injectable } from '@angular/core';
import BaseService from '../Base_Service/Base_Service';// Se importan las propiedades de la clase Base_Service
import { environment } from 'src/environments/environment';// Se importan las constantes de la clase environment

@Injectable({
  providedIn: 'root'
})
export class ConnectFtpStationService {

  constructor(private baseService: BaseService) { }

  // metodo para crear
  createConnectionFTP(body) {
    return this.baseService.create(body, `${environment.hostFTPCreate}`)
  }
  // metodo para listar todas las conexiones 
  viewDataFTP() {
    return this.baseService.view(`${environment.hostFTPviewDATA}`).toPromise().then((data: any) => data.message).catch((error) => console.log(error));
  }

}
