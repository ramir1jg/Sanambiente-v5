/* Clase que contiene los metodos y la logica de la vista html en la cual se crean y editan las periodicidades de los mantenimientos*/

/* Se importan los componentes y caracteristicas necesarias para el funcionamiento de esta clase */
import { Component, OnInit, HostBinding } from '@angular/core'; // Angular lo importa por defecto
import { FormGroup, FormControl, Validators } from '@angular/forms'; // Caracteristicas que permiten crear y manejar validaciones para formularios
import { Router, ActivatedRoute } from '@angular/router'; // La propiedad activateRoute permite saber lo que se esta recibiendo como parametro
import { PeriodicitiesService } from '../../../Services/Periodicities_Service/Periodicities_Service'; //Importo los servicios de la clase Periodicities_Service

@Component({
  selector: 'app-Periodicities_Body',
  templateUrl: './Periodicities_Body.component.html',
  styleUrls: ['./Periodicities_Body.component.css']
})
export class PeriodicitiesBodyComponent implements OnInit {

  public formPeriodicity: FormGroup; // La variable formPeriodicity permite administrar las validaciones y restricciones del formulario
  public arrayPeriodicities; // La variable arrayPeriodicities almacena el listado de las periodicidades existentes.
  public edit: boolean = false; // Le permite identificar al boton guardar cuando se esta Guardando una nueva periodicidad o se esta editando una periodicidad
  public hide = false; // Permite identificar cuando se debe o no, mostrar el campo del id de la periodicidad, en la vista html

  constructor(private periodicityService: PeriodicitiesService, private router: Router, private activedRoute: ActivatedRoute) { // instancio el servicio dentro de una variable llamada periodicityService
    this.formPeriodicity = new FormGroup({
      'tipo_periodicidad': new FormControl('', [Validators.required, Validators.maxLength(49.9)]),
      'observacion_periodicidad': new FormControl('', [Validators.required, Validators.maxLength(49.9)]),
    });
    this.arrayPeriodicities = {
      observacion_periodicidad: ''//Se usa para definir el campo observacion_periodicidad y poder mostrar el conteo de caracteres restantes
    };
  }
  /* Se establecen los metodos que se ejecutaran cada vez que se visite la vista Periodicities_Body */
  ngOnInit(): void {
    this.viewPeriodicityById() // Toma el id de la periodicidad, cuando se vaya a editar alguna de ellas
  }

  @HostBinding('class') classes = 'row'; // Genera que las columnas de ordenamiento del contenido en la vista html esten alineadas.

  /* Método con el cual se crea una nueva periodicidad */
  async createPeriodicity() {
    if (this.formPeriodicity.valid) {
      await this.periodicityService.createPeriodicity(this.formPeriodicity.value);
      alert('Periodicidad creada correctamente');
      this.router.navigate(['/periodicity']);
    }
  }

  /* Método con el cual se identifica la periodicidad cuya información va a ser actualizada */
  async viewPeriodicityById() {
    let id = this.activedRoute.snapshot.params.id_periodicidad;
    if (id !== undefined) {
      let periodicity = await this.periodicityService.viewPeriodicityById(id).subscribe((element: any) => {
        this.arrayPeriodicities = element.message[0];
        this.edit = true;
        this.hide = true;
      });
    }
  }

  /* Método con el cual se actualiza la información de la periodicidad seleccionada */
  async updatePeriodicity() {
    let id = this.activedRoute.snapshot.params.id_periodicidad;
    this.formPeriodicity.patchValue({
      tipo_periodicidad: this.arrayPeriodicities.tipo_periodicidad,
      observacion_periodicidad: this.arrayPeriodicities.observacion_periodicidad
    })
    this.periodicityService.updatePeriodicity(this.formPeriodicity.value, id)
    alert('Periodicidad actualizada correctamente');
    this.router.navigate(['/periodicity']);
  }
}
