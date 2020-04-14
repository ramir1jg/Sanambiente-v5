/* Clase que contiene los metodos y la logica de la vista html en la cual se crean y editan las regiones*/

/* Se importan los componentes y caracteristicas necesarias para el funcionamiento de esta clase */
import { Component, OnInit, HostBinding } from '@angular/core'; // Angular lo importa por defecto
import { RegionsService } from '../../../Services/Regions_Service/Regions_Service'; // Importo los servicios de la clase Regions_Service

@Component({
  selector: 'app-Regions_List',
  templateUrl: './Regions_List.component.html',
  styleUrls: ['./Regions_List.component.css']
})
export class RegionsListComponent implements OnInit {

  @HostBinding('class') classes = 'row'; // Genera que las columnas de ordenamiento del contenido en la vista html esten alineadas.

  public arrayRegions: Array<any>; // La variable arrayRegions almacena el listado de las regiones existentes
  searchText; // Variable que alimenta el campo de busqueda de la vista html

  constructor(private regionService: RegionsService) {
    this.arrayRegions = [];
  }

  /* Se establecen los metodos que se ejecutaran cada vez que se visite la vista Region_List */
  ngOnInit() {
    this.getRegions();
  }

  /* Método con el cual se obtienen las regiones existentes */
  async getRegions() {
    this.arrayRegions = await this.regionService.viewRegions();
  }
}
