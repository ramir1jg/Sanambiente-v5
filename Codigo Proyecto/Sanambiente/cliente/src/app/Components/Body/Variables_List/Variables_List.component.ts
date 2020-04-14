/* Clase que contiene los metodos y la logica de la vista html en la cual se crean y editan las variables*/

/* Se importan los componentes y caracteristicas necesarias para el funcionamiento de esta clase */
import { Component, OnInit, HostBinding } from '@angular/core'; // Angular lo importa por defecto
import { VariablesService } from '../../../Services/Variables_Service/Variables_Service'; // Importo los servicios de la clase Variables_Service

@Component({
  selector: 'app-Variables_List',
  templateUrl: './Variables_List.component.html',
  styleUrls: ['./Variables_List.component.css']
})
export class VariablesListComponent implements OnInit {

  @HostBinding('class') classes = 'row'; // Genera que las columnas de ordenamiento del contenido en la vista html esten alineadas.

  public arrayVariables: Array<any>; // La variable arrayVariables almacena el listado de las variables existentes
  searchText; // Variable que alimenta el campo de busqueda de la vista html

  constructor(private variableService: VariablesService) {
    this.arrayVariables = [];
  }

  /* Se establecen los metodos que se ejecutaran cada vez que se visite la vista Variable_List */
  ngOnInit() {
    this.getVariables();
  }

  /* Método con el cual se obtienen las variables existentes */
  async getVariables() {
    this.arrayVariables = await this.variableService.viewVariables();
  }

}
