/* Clase que contiene los metodos y la logica de la vista html en la cual se listan las Alertas*/

/* Se importan los componentes y caracteristicas necesarias para el funcionamiento de esta clase */
import { Component, OnInit, HostBinding } from '@angular/core';// Angular lo importa por defecto
import { AlertsService } from '../../../Services/Alerts_Service/Alerts_Service';//importo el servicio de la clase Alerts_Service

@Component({
  selector: 'app-alerts_list',
  templateUrl: './alerts_list.component.html',
  styleUrls: ['./alerts_list.component.css']
})
export class AlertsListComponent implements OnInit {

  @HostBinding('class') classes = 'row'; // Genera que las columnas de ordenamiento del contenido en la vista html esten alineadas.

  public arrayAlerts: Array<any>; // La variable arrayAlerts almacena el listado de las Alertas existentes
  searchText;// Variable que alimenta el campo de busqueda de la vista html

  constructor(private alertsService: AlertsService) { }

  /* Se establecen los metodos que se ejecutaran cada vez que se visite la vista Alerts_List */
  ngOnInit() {
    this.getAlerts();
  }

  /* Método con el cual se obtienen las Alertas existentes */
  async getAlerts() {
    this.arrayAlerts = await this.alertsService.viewAlerts();
  }
}
