/* Clase que contiene los metodos y la logica de la vista html en la cual se listan las Bases de Tiempos*/

/* Se importan los componentes y caracteristicas necesarias para el funcionamiento de esta clase */
import { Component, OnInit, HostBinding } from '@angular/core';// Angular lo importa por defecto
import { TimesService } from '../../../Services/Times_Service/Times_Service';// importo el servicio de la clase Times_Service

@Component({
  selector: 'app-Times_List',
  templateUrl: './Times_List.component.html',
  styleUrls: ['./Times_List.component.css']
})
export class TimesListComponent implements OnInit {

  @HostBinding('class') classes = 'row'; // Genera que las columnas de ordenamiento del contenido en la vista html esten alineadas.

  public arrayTimes: any = []; // La variable arrayTimes almacena el listado de las Bases de Tiempos existentes
  searchText; // Variable que alimenta el campo de busqueda de la vista html

  constructor(private timeService: TimesService) { }

  /* Se establecen los metodos que se ejecutaran cada vez que se visite la vista Times_List */
  ngOnInit() {
    this.getTimes();
  }

  /* Método con el cual se obtienen las Bases de Tiempos existentes */
  async getTimes() {
    this.arrayTimes = await this.timeService.viewTimes();
  }
}
