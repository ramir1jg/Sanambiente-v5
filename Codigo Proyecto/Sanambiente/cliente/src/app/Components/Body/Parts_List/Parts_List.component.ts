/* Clase que contiene los metodos y la logica de la vista html en la cual se crean y editan las partes*/

/* Se importan los componentes y caracteristicas necesarias para el funcionamiento de esta clase */
import { Component, OnInit, HostBinding } from '@angular/core'; // Angular lo importa por defecto
import { PartsService } from '../../../Services/Parts_Service/Parts_Service'; // Importo los servicios de la clase Parts_Service

@Component({
  selector: 'app-Parts_List',
  templateUrl: './Parts_List.component.html',
  styleUrls: ['./Parts_List.component.css']
})
export class PartsListComponent implements OnInit {

  @HostBinding('class') classes = 'row'; // Genera que las columnas de ordenamiento del contenido en la vista html esten alineadas.

  public arrayParts: Array<any>; // La variable arrayParts almacena el listado de las partes existentes
  searchText; // Variable que alimenta el campo de busqueda de la vista html

  constructor(private partService: PartsService) { // instancio el servicio dentro de una variable llamada partService
    this.arrayParts = [];
  }

  /* Se establecen los metodos que se ejecutaran cada vez que se visite la vista Parts_List */
  ngOnInit() {
    this.getParts();
  }

  /* Método con el cual se obtienen las partes existentes */
  async getParts() {
    this.arrayParts = await this.partService.viewParts();
  }

}
