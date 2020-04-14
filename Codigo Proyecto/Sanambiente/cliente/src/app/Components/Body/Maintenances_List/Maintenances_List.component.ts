/* Clase que contiene los metodos y la logica de la vista html en la cual se listan los Mantenimientos*/

/* Se importan los componentes y caracteristicas necesarias para el funcionamiento de esta clase */
import { Component, OnInit, HostBinding } from '@angular/core'; // Angular lo importa por defecto
import { MaintenancesService } from '../../../Services/Maintenances_Service/Maintenances_Service'; // Importo los servicios de la clase Maintenances_Service

@Component({
  selector: 'app-Maintenances_List',
  templateUrl: './Maintenances_List.component.html'
})
export class MaintenancesListComponent implements OnInit {

  @HostBinding('class') classes = 'row'; // Genera que las columnas de ordenamiento del contenido en la vista html esten alineadas.

  public arrayMaintenances: any = []; // La variable arrayMaintenances almacena el listado de los mantenimientos existentes
  searchText; // Variable que alimenta el campo de busqueda de la vista html

  constructor(private maintenanceService: MaintenancesService) { }

  /* Se establecen los metodos que se ejecutaran cada vez que se visite la vista Maintenances_List */
  ngOnInit() {
    this.getMaintenances();

  }
  /* Método con el cual se obtienen los Mantenimientos existentes */
  async getMaintenances() {
    this.arrayMaintenances = await this.maintenanceService.viewMaintenances();
  }
}
