/* Clase que contiene los metodos y la logica de la vista html en la cual se crean y editan los rangos*/

/* Se importan los componentes y caracteristicas necesarias para el funcionamiento de esta clase */
import { Component, OnInit, HostBinding } from '@angular/core';// Angular lo importa por defecto
import { FormGroup, FormControl, Validators } from '@angular/forms';// Caracteristicas que permiten crear y manejar validaciones para formularios
import { Router, ActivatedRoute } from '@angular/router'; // la propiedad activateRoute permite saber lo que estoy recibiendo como parametro
import { RanksService } from '../../../Services/Ranks_Service/Ranks_Service';//Importo los servicios de la clase Ranks_Service

@Component({
  selector: 'app-Ranks_Body',
  templateUrl: './Ranks_Body.component.html',
  styleUrls: ['./Ranks_Body.component.css']
})
export class RanksBodyComponent implements OnInit {

  public formRank: FormGroup;// La variable formRank permite administrar las validaciones y restricciones del formulario
  public stationRank: Array<any> = [];// La variable stationRank almacena el listado de las Estaciones existentes
  public arrayRanks: any;// La variable arrayRanks almacena el listado de los Rangos existentes. Utilizada cuando se edita un Rango
  public edit = false;// Le permite identificar al boton guardar cuando se esta Guardando un nuevo Rango o se esta editando un Rango
  public hide = false;// Permite identificar cuando se debe o no, mostrar el campo del id de la Rango, en la vista html


  @HostBinding('class') classes = 'row';// Genera que las columnas de ordenamiento del contenido en la vista html esten alineadas.

  constructor(private ranksService: RanksService, private router: Router, private activedRoute: ActivatedRoute) {// instancio el servicio dentro de una variable llamada ranksService
    this.formRank = new FormGroup({
      'nombre_rango': new FormControl('', [Validators.required, Validators.maxLength(49.9)]),
      'valor_minimo': new FormControl('', [Validators.required, Validators.maxLength(19.9), Validators.pattern(/^[0-9-]+\.?[0-9]{0,2}\d{0,20}$/)]),
      'valor_maximo': new FormControl('', [Validators.required, Validators.maxLength(19.9), Validators.pattern(/^[0-9-]+\.?[0-9]{0,2}\d{0,20}$/)]),
      'id_estacion': new FormControl('', [Validators.required]),
      'observacion_rango': new FormControl('', [Validators.required, Validators.maxLength(49.9)]),
    })
    this.arrayRanks = {
      observacion_rango: ''//Se usa para definir el campo observacion_rango y poder mostrar el conteo de caracteres restantes
    };
  }
  /* Se establecen los metodos que se ejecutaran cada vez que se visite la vista Ranks_Body */
  ngOnInit(): void {
    this.viewStationsRank(); // Carga las estaciones existentes
    this.viewRankById(); // Toma el id del rango, cuando se vaya a editar alguno de ellos.
  }

  /* Método con el cual se crea un nuevo rango */
  async createRank() {
    if (this.formRank.valid) {
      await this.ranksService.createRank(this.formRank.value);
      alert('Rango creado correctamente');
      this.router.navigate(['/rank']);
    }
  }

  /* Método con el cual se listan las estaciones existentes */
  async viewStationsRank() {
    this.stationRank = (await this.ranksService.viewStationsRank());
  }

  /* Método con el cual se identifica el rango cuya información va a ser actualizada */
  async viewRankById() {
    let id = this.activedRoute.snapshot.params.id_rango;
    if (id !== undefined) {
      let rango = await this.ranksService.viewRankById(id).subscribe(async (element: any) => {
        this.arrayRanks = await element.message[0];
        this.edit = true;
        this.hide = true;
      });
    }
  }

  /* Método con el cual se actualiza la información del rango seleccionado */
  async updateRank() {
    let id = this.activedRoute.snapshot.params.id_rango;
    this.formRank.patchValue({
      nombre_rango: this.arrayRanks.nombre_rango,
      valor_minimo: this.arrayRanks.valor_minimo,
      valor_maximo: this.arrayRanks.valor_maximo,
      observacion_rango: this.arrayRanks.observacion_rango,
    })
    this.ranksService.updateRank(this.formRank.value, id)
    alert('Rango actualizado correctamente');
    this.router.navigate(['/rank']);
  }
}
