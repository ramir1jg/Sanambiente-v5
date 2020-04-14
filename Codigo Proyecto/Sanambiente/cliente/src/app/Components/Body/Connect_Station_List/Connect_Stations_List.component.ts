/* Clase que contiene los metodos y la logica de la vista html en la cual se conectan las estaciones*/

/* Se importan los componentes y caracteristicas necesarias para el funcionamiento de esta clase */
import { Component, OnInit, HostBinding } from '@angular/core'; // Angular lo importa por defecto
import { StationsService } from '../../../Services/Stations_Service/Stations_Service'; // Importo los servicios de la clase Stations_Service


@Component({
  selector: 'app-Connect_Stations_List',
  templateUrl: './Connect_Stations_List.component.html'
})
export class ConnectStationsListComponent implements OnInit {

  @HostBinding('class') classes = 'row'; // Genera que las columnas de ordenamiento del contenido en la vista html esten alineadas.

  public arrayStations: any = []; // La variable arrayStations almacena el listado de las estaciones existentes
  searchText; // Variable que alimenta el campo de busqueda de la vista html

  constructor(private stationService: StationsService) { }

  /* Se establecen los metodos que se ejecutaran cada vez que se visite la vista Connect_Stations_List */
  ngOnInit() {
    this.getConnectStations();
  }

  /* Método con el cual se obtienen las estaciones existentes */
  async getConnectStations() {
    this.arrayStations = await this.stationService.viewStations();
  }

}
