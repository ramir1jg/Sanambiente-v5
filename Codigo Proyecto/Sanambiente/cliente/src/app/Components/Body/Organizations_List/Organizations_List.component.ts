/* Clase que contiene los metodos y la logica de la vista html en la cual se listan las organizaciones*/

/* Se importan los componentes y caracteristicas necesarias para el funcionamiento de esta clase */
import { Component, OnInit, HostBinding } from '@angular/core';  // Angular lo importa por defecto
import { OrganizationsService } from '../../../Services/Organizations_Service/Organizations_Service'; //importo el servicio

@Component({
  selector: 'app-Organizations_List',
  templateUrl: './Organizations_List.component.html'
})
export class OrganizationsListComponent implements OnInit {

  @HostBinding('class') classes = 'row';  // Genera que las columnas de ordenamiento del contenido en la vista html esten alineadas.

  public arrayOrganizations: Array<any>; // La variable arrayOrganizations almacena el listado de las organizaciones existentes
  searchText;  // Variable que alimenta el campo de busqueda de la vista html

  constructor(private organizationService: OrganizationsService) {
    this.arrayOrganizations = [];
  }

  /* Se establecen los metodos que se ejecutaran cada vez que se visite la vista Organizations_List */
  ngOnInit() {
    this.getOrganizations();
  }

  /* Método con el cual se obtienen las organizaciones existentes */
  async getOrganizations() {
    this.arrayOrganizations = await this.organizationService.viewOrganizations();
  }
}
