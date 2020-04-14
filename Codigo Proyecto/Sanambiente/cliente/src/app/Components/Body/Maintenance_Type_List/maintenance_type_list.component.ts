/* Clase que contiene los metodos y la logica de la vista html en la cual se crean y editan los tipos de mantenimiento*/

import { Component, OnInit, HostBinding } from '@angular/core'; // Angular lo importa por defecto
import { MaintenancesTypeService } from '../../../Services/Maintenances_Type_Service/Maintenances_Type_Service'; // Importo los servicios de la clase Maintenances_Type_Service

@Component({
  selector: 'app-maintenance_type_list',
  templateUrl: './maintenance_type_list.component.html',
  styleUrls: ['./maintenance_type_list.component.css']
})
export class MaintenanceTypeListComponent implements OnInit {

  @HostBinding('class') classes = 'row'; // Genera que las columnas de ordenamiento del contenido en la vista html esten alineadas.

  public arrayMaintenanceTypes: Array<any>; // La variable arrayMaintenanceTypes almacena el listado de los tipos de mantenimiento existentes
  searchText; // Variable que alimenta el campo de busqueda de la vista html

  constructor(private maintenanceTypeService: MaintenancesTypeService) {
    this.arrayMaintenanceTypes = [];
  }

  /* Se establecen los metodos que se ejecutaran cada vez que se visite la vista Maintenance_Type_List */
  ngOnInit() {
    this.getMaintenanceTypes();
  }

  /* Método con el cual se obtienen los tipos de mantenimiento existentes */
  async getMaintenanceTypes() {
    this.arrayMaintenanceTypes = await this.maintenanceTypeService.viewMaintenancesType();
  }

}
