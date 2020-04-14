/* Clase que contiene los metodos y la logica de la vista html en la cual conecta una estacion */

/* Se importan los componentes y caracteristicas necesarias para el funcionamiento de esta clase */
import { Component, OnInit, HostBinding } from '@angular/core'; // Angular lo importa por defecto
import { FormGroup, FormControl, Validators } from '@angular/forms'; // Caracteristicas para formularios
import { Router, ActivatedRoute } from '@angular/router'; // La propiedad activateRoute permite saber lo que se esta recibiendo como parametro
import { StationsService } from '../../../Services/Stations_Service/Stations_Service'; //Importo los servicios de la clase Stations_Service


@Component({
  selector: 'app-Connect_Station_Body',
  templateUrl: './Connect_Station_Body.component.html',
  styleUrls: ['./Connect_Station_Body.component.css']
})
export class ConnectStationBodyComponent implements OnInit {

  public formStation: FormGroup; // La variable formStation permite administrar formularios
  public arrayStations: any; // La variable arrayStations almacena el listado de las estaciones existentes. Utilizada cuando se edita una estacion
  public arrayTemplates: Array<any> = []; // La variable templateStation almacena el listado de las plantillas existentes. Utilizada cuando se va a conectar con una estacion.
  public id_conexion: number = 0;
  public showButton: number;

  @HostBinding('class') classes = 'row'; // Genera que las columnas de ordenamiento del contenido en la vista html esten alineadas.

  constructor(private stationService: StationsService, private router: Router, private activedRoute: ActivatedRoute) { // instancio el servicio dentro de una variable llamada stationService
    this.formStation = new FormGroup({
      'nombre_estacion': new FormControl('', []),
      'serial_estacion': new FormControl('', []),
      'nombre_corto_estacion': new FormControl('', []),
      'id_categoria': new FormControl('', []),
      'id_tiempo': new FormControl('', []),
      'id_region': new FormControl('', []),
      'id_ciudad': new FormControl('', []),
      'id_gmt': new FormControl('', []),
      'latitud_estacion': new FormControl('', []),
      'longitud_estacion': new FormControl('', []),
      'elevacion_estacion': new FormControl('', []),
      'protocolo_estacion': new FormControl('', []),
      'observacion_estacion': new FormControl('', []),
      'id_plantilla': new FormControl('', []),
    })

  }

  /* Se establecen los metodos que se ejecutaran cada vez que se visite la vista Stations_Body */
  ngOnInit(): void {
    this.viewStationById(); // Toma el id de la estacion, para conectarse con esa estacion
    this.viewTemplatesStation(); // Toma el id de la estacion, para listar las plantillas que se relaciones con dicha estacion
  }

  /* Método con el cual se crea una nueva estacion */
  async connectStation() {

  }

  /* Método con el cual se identifica la estacion cuya información es consultada en la base de datos */
  async viewStationById() {
    let id = this.activedRoute.snapshot.params.id_estacion;
    this.id_conexion = id;
    if (id !== undefined) {
      let station = await this.stationService.viewStationById(id).subscribe(async (element: any) => {
        this.arrayStations = await element.message[0];
        this.showButton = this.arrayStations.protocolo_estacion;
      });
    }
  }

  /* Método con el cual se obtienen las plantillas existentes */
  async viewTemplatesStation() {
    this.arrayTemplates = (await this.stationService.viewTemplatesStation());
  }
}
