/* Clase que contiene los metodos y la logica de la vista html en la cual se crean y editan las Bases de Tiempos*/

/* Se importan los componentes y caracteristicas necesarias para el funcionamiento de esta clase */
import { Component, OnInit, HostBinding } from '@angular/core';// Angular lo importa por defecto
import { FormGroup, FormControl, Validators } from '@angular/forms'; // Caracteristicas que permiten crear y manejar validaciones para formularios
import { Router, ActivatedRoute } from '@angular/router'; // la propiedad activateRoute permite saber lo que estoy recibiendo como parametro
import { TimesService } from '../../../Services/Times_Service/Times_Service';// importo el servicio de la clase Times_Service


@Component({
  selector: 'app-times_body',
  templateUrl: './times_body.component.html',
  styleUrls: ['./times_body.component.css']
})
export class TimesBodyComponent implements OnInit {

  public formTime: FormGroup; // La variable formTime permite administrar las validaciones y restricciones del formulario
  public arrayTimes; // La variable arrayTimes almacena el listado de las Bases de Tiempos existentes. Utilizada cuando se edita una Base de Tiempo
  public edit: boolean = false; // Le permite identificar al boton guardar cuando se esta Guardando una nueva Base de Tiempo o se esta editando una Base de Tiempo
  public hide = false; // Permite identificar cuando se debe o no, mostrar el campo del id de la Base de Tiempo, en la vista html

  @HostBinding('class') classes = 'row';// Genera que las columnas de ordenamiento del contenido en la vista html esten alineadas.

  constructor(private timesService: TimesService, private router: Router, private activedRoute: ActivatedRoute) {// instancio el servicio dentro de una variable llamada timesService
    this.formTime = new FormGroup({
      'nombre_tiempo': new FormControl('', [Validators.required, Validators.maxLength(49.9)]),
      'escala_tiempo': new FormControl('', [Validators.required, Validators.maxLength(49.9), Validators.pattern(/^[0-9]*$/), Validators.min(1), Validators.max(1440)]),
      'observacion_tiempo': new FormControl('', [Validators.required, Validators.maxLength(49.9)]),
    });
    this.arrayTimes = {
      observacion_tiempo: ''//Se usa para definir el campo observacion_tiempo y poder mostrar el conteo de caracteres restantes
    };
  }

  /* Se establecen los metodos que se ejecutaran cada vez que se visite la vista Times_Body */
  ngOnInit(): void {
    this.viewTimeById(); // Toma el id de la Base de Tiempo, cuando se vaya a editar alguna de ellas
  }

  /* Método con el cual se crea una nueva Base de Tiempo */
  async createTime() {
    if (this.formTime.valid) {
      await this.timesService.createTime(this.formTime.value);
      alert('Base de Tiempo creada correctamente');
      this.router.navigate(['/time']);
    }
  }

  /* Método con el cual se identifica la Base de Tiempo cuya información va a ser actualizada */
  async viewTimeById() {
    let id = this.activedRoute.snapshot.params.id_tiempo;
    if (id !== undefined) {
      let time = await this.timesService.viewTimeById(id).subscribe((element: any) => {
        this.arrayTimes = element.message[0];
        this.edit = true;
        this.hide = true;
      });
    }
  }

  /* Método con el cual se actualiza la información de la Base de Tiempo seleccionada */
  async updateTime() {
    let id = this.activedRoute.snapshot.params.id_tiempo;
    this.formTime.patchValue({
      nombre_tiempo: this.arrayTimes.nombre_tiempo,
      escala_tiempo: this.arrayTimes.escala_tiempo,
      observacion_tiempo: this.arrayTimes.observacion_tiempo
    })
    this.timesService.updateTime(this.formTime.value, id)
    alert('Base de Tiempo actualizada correctamente');
    this.router.navigate(['/time']);
  }
}


