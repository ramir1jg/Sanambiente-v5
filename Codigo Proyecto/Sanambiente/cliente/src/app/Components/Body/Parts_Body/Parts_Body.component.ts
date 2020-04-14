/* Clase que contiene los metodos y la logica de la vista html en la cual se crean y editan las partes de las estaciones*/

/* Se importan los componentes y caracteristicas necesarias para el funcionamiento de esta clase */
import { Component, OnInit, HostBinding } from '@angular/core'; // Angular lo importa por defecto
import { FormGroup, FormControl, Validators } from '@angular/forms'; // Caracteristicas que permiten crear y manejar validaciones para formularios
import { Router, ActivatedRoute } from '@angular/router'; // La propiedad activateRoute permite saber lo que se esta recibiendo como parametro
import { PartsService } from '../../../Services/Parts_Service/Parts_Service'; //Importo los servicios de la clase Parts_Service

@Component({
  selector: 'app-Parts_Body',
  templateUrl: './Parts_Body.component.html',
  styleUrls: ['./Parts_Body.component.css']
})
export class PartsBodyComponent implements OnInit {

  public formPart: FormGroup; // La variable formPart permite administrar las validaciones y restricciones del formulario
  public arrayParts; // La variable arrayParts almacena el listado de las partes existentes.
  public edit: boolean = false; // Le permite identificar al boton guardar cuando se esta Guardando una nueva parte o se esta editando una parte
  public hide = false; // Permite identificar cuando se debe o no, mostrar el campo del id de la parte, en la vista html

  constructor(private partService: PartsService, private router: Router, private activedRoute: ActivatedRoute) { // instancio el servicio dentro de una variable llamada partService
    this.formPart = new FormGroup({
      'nombre_parte': new FormControl('', [Validators.required, Validators.maxLength(49.9)]),
      'codigo_catalogo': new FormControl('', [Validators.required, Validators.maxLength(49.9)]),
      'observacion_parte': new FormControl('', [Validators.required, Validators.maxLength(49.9)]),
    });
    this.arrayParts = {
      observacion_parte: ''//Se usa para definir el campo observacion_parte y poder mostrar el conteo de caracteres restantes
    };
  }

  /* Se establecen los metodos que se ejecutaran cada vez que se visite la vista Parts_Body */
  ngOnInit(): void {
    this.viewPartById() // Toma el id de la parte, cuando se vaya a editar alguna de ellas
  }

  @HostBinding('class') classes = 'row'; // Genera que las columnas de ordenamiento del contenido en la vista html esten alineadas.

  /* Método con el cual se crea una nueva parte */
  async createPart() {
    if (this.formPart.valid) {
      await this.partService.createPart(this.formPart.value);
      alert('Parte creada correctamente');
      this.router.navigate(['/part']);
    }
  }

  /* Método con el cual se identifica la parte cuya información va a ser actualizada */
  async viewPartById() {
    let id = this.activedRoute.snapshot.params.id_parte;
    if (id !== undefined) {
      let part = await this.partService.viewPartById(id).subscribe((element: any) => {
        this.arrayParts = element.message[0];
        this.edit = true;
        this.hide = true;
      });
    }
  }

  /* Método con el cual se actualiza la información de la parte seleccionada */
  async updatePart() {
    let id = this.activedRoute.snapshot.params.id_parte;
    this.formPart.patchValue({
      nombre_parte: this.arrayParts.nombre_parte,
      codigo_catalogo: this.arrayParts.codigo_catalogo,
      observacion_parte: this.arrayParts.observacion_parte
    })
    this.partService.updatePart(this.formPart.value, id)
    alert('Parte actualizada correctamente');
    this.router.navigate(['/part']);
  }
}
