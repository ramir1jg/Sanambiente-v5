/* Clase que contiene los metodos y la logica de la vista html en la cual se crean y editan los gmt*/

/* Se importan los componentes y caracteristicas necesarias para el funcionamiento de esta clase */
import { Component, OnInit, HostBinding } from '@angular/core';// Angular lo importa por defecto
import { GmtService } from '../../../Services/Gmt_Service/Gmt_Service'; // Importo los servicios que necesito para gmt



@Component({
  selector: 'app-Gmt_List',
  templateUrl: './Gmt_List.component.html',
  styleUrls: ['./Gmt_List.component.css']
})
export class GmtListComponent implements OnInit {

  @HostBinding('class') classes = 'row'; // Genera que las columnas de ordenamiento del contenido en la vista html esten alineadas.

  public arrayGmt: Array<any>;  // La variable arrayGmt almacena el listado de los gmt existentes
  searchText; // Variable que alimenta el campo de busqueda de la vista html

  constructor(private gmtService: GmtService) {
    this.arrayGmt = [];
  }

  /* Se establecen los metodos que se ejecutaran cada vez que se visite la vista -Gmt_List */
  ngOnInit() {
    this.getGmt();
  }

  // metodo para listar todos los gmt
  async getGmt() {
    this.arrayGmt = await this.gmtService.viewGmt();
  }

}
