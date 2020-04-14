/* Clase que contiene los metodos y la logica de la vista html en la cual se listan los rangos*/

/* Se importan los componentes y caracteristicas necesarias para el funcionamiento de esta clase */
import { Component, OnInit, HostBinding } from '@angular/core'; // Angular lo importa por defecto
import { RanksService } from '../../../Services/Ranks_Service/Ranks_Service'; // Importo los servicios de la clase Ranks_Service

@Component({
  selector: 'app-Ranks_List',
  templateUrl: './Ranks_List.component.html',
  styleUrls: ['./Ranks_List.component.css']
})
export class RanksListComponent implements OnInit {

  @HostBinding('class') classes = 'row'; // Genera que las columnas de ordenamiento del contenido en la vista html esten alineadas.

  public arrayRanks: any = []; // La variable arrayRanks almacena el listado de los rangos existentes
  searchText; // Variable que alimenta el campo de busqueda de la vista html

  constructor(private rankService: RanksService) { }

  /* Se establecen los metodos que se ejecutaran cada vez que se visite la vista Ranks_List */
  ngOnInit() {
    this.getRanks();

  }
  /* Método con el cual se obtienen los rangos existentes */
  async getRanks() {
    this.arrayRanks = await this.rankService.viewRanks();
  }
}
