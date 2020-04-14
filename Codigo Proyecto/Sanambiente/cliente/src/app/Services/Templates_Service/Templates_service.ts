import { Injectable } from '@angular/core';
import BaseService from '../Base_Service/Base_Service'; // Se importan las propiedades de la clase Base_Service
import { environment } from 'src/environments/environment'; // Se importan las constantes de la clase environment


@Injectable({
  providedIn: 'root'
})
export class TemplateService {

  constructor(private baseService: BaseService) { }

  // metodo para crear 
  createTemplate(body: any) {
    return this.baseService.create(body, `${environment.hostTemplateCreate}`)
  }
}
