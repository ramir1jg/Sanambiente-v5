/* Clase que contiene los metodos y la logica de la vista html en la cual se crean y editan las periodicidades*/

/* Se importan los componentes y caracteristicas necesarias para el funcionamiento de esta clase */
import { Component, OnInit, HostBinding } from '@angular/core'; // Angular lo importa por defecto
import { PeriodicitiesService } from '../../../Services/Periodicities_Service/Periodicities_Service'; // Importo los servicios de la clase Periodicities_Service

@Component({
  selector: 'app-Periodicities_List',
  templateUrl: './Periodicities_List.component.html',
  styleUrls: ['./Periodicities_List.component.css']
})
export class PeriodicitiesListComponent implements OnInit {

  @HostBinding('class') classes = 'row'; // Genera que las columnas de ordenamiento del contenido en la vista html esten alineadas.

  public arrayPeriodicities: Array<any>; // La variable arrayPeriodicities almacena el listado de las periodicidades existentes
  searchText; // Variable que alimenta el campo de busqueda de la vista html

  constructor(private periodicityService: PeriodicitiesService) { // instancio el servicio dentro de una variable llamada periodicityService
    this.arrayPeriodicities = [];
  }

  /* Se establecen los metodos que se ejecutaran cada vez que se visite la vista Periodicities_List */
  ngOnInit() {
    this.getPeriodicities();
  }

  /* Método con el cual se obtienen las periodicidades existentes */
  async getPeriodicities() {
    this.arrayPeriodicities = await this.periodicityService.viewPeriodicities();
  }

}
