/* Clase que contiene los metodos y la logica de la vista html en la cual se listan las ciudades*/

/* Se importan los componentes y caracteristicas necesarias para el funcionamiento de esta clase */
import { Component, OnInit, HostBinding } from '@angular/core'; // Angular lo importa por defecto
import { CitiesService } from '../../../Services/Cities_Service/Cities_Service'; // Importo los servicios de la clase Cities_Service


@Component({
  selector: 'app-Cities_List',
  templateUrl: './Cities_List.component.html',
  styleUrls: ['./Cities_List.component.css']
})
export class CitiesListComponent implements OnInit {

  @HostBinding('class') classes = 'row'; // Genera que las columnas de ordenamiento del contenido en la vista html esten alineadas.

  public arrayCities: any = []; // La variable arrayCities almacena el listado de las ciudades existentes
  searchText; // Variable que alimenta el campo de busqueda de la vista html

  constructor(private cityService: CitiesService) { }

  /* Se establecen los metodos que se ejecutaran cada vez que se visite la vista Cities_List */
  ngOnInit() {
    this.getCities();
  }

  /* Método con el cual se obtienen las ciudades existentes */
  async getCities() {
    this.arrayCities = await this.cityService.viewCities();
  }
}



