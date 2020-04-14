/* Clase que contiene los metodos y la logica de la vista html en la cual se crean y editan las Variables*/

/* Se importan los componentes y caracteristicas necesarias para el funcionamiento de esta clase */
import { Component, OnInit, HostBinding } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'; // Caracteristicas que permiten crear y manejar validaciones para formularios
import { Router, ActivatedRoute } from '@angular/router'; // La propiedad activateRoute permite saber lo que se esta recibiendo como parametro
import { VariablesService } from '../../../Services/Variables_Service/Variables_Service'; //Importo los servicios de la clase Variables_Service


@Component({
  selector: 'app-Variables_Body',
  templateUrl: './Variables_Body.component.html',
  styleUrls: ['./Variables_Body.component.css']
})
export class VariablesBodyComponent implements OnInit {

  public formVariable: FormGroup; // La variable formVarible permite administrar las validaciones y restricciones del formulario
  public arrayVariables; // La variable arrayVariables almacena el listado de las variables existentes. Utilizada cuando se edita una variable
  public edit: boolean = false; // Le permite identificar al boton guardar cuando se esta Guardando una nueva variable o se esta editando una variable
  public hide = false; // Permite identificar cuando se debe o no, mostrar el campo del id de la variable, en la vista html


  constructor(private variableService: VariablesService, private router: Router, private activedRoute: ActivatedRoute) {
    this.formVariable = new FormGroup({
      'nombre_variable': new FormControl('', [Validators.required, Validators.maxLength(49.9)]),
      'observacion_variable': new FormControl('', [Validators.required, Validators.maxLength(49.9)]),
    });
    this.arrayVariables = {
      observacion_variable: ''//Se usa para definir el campo observacion_variable y poder mostrar el conteo de caracteres restantes 
    };
  }

  /* Se establecen los metodos que se ejecutaran cada vez que se visite la vista Variables_Body */
  ngOnInit(): void {
    this.viewVariableById() // Toma el id de la variable, cuando se vaya a editar alguna de ellas
  }

  @HostBinding('class') classes = 'row'; // Genera que las columnas de ordenamiento del contenido en la vista html esten alineadas.

  /* Método con el cual se crea una nueva variable */
  async createVariable() {
    if (this.formVariable.valid) {
      await this.variableService.createVariable(this.formVariable.value);
      alert('Variable creada correctamente');
      this.router.navigate(['/variable']);
    }
  }

  /* Método con el cual se identifica la variable cuya información va a ser actualizada */
  async viewVariableById() {
    let id = this.activedRoute.snapshot.params.id_variable;
    if (id !== undefined) {
      let variable = await this.variableService.viewVariableById(id).subscribe((element: any) => {
        this.arrayVariables = element.message[0];
        this.edit = true;
        this.hide = true;
      });
    }
  }

  /* Método con el cual se actualiza la información de la variable seleccionada */
  async updateVariable() {
    let id = this.activedRoute.snapshot.params.id_variable;
    this.formVariable.patchValue({
      nombre_variable: this.arrayVariables.nombre_variable,
      observacion_variable: this.arrayVariables.observacion_variable
    })
    this.variableService.updateVariable(this.formVariable.value, id)
    alert('Variable actualizada correctamente');
    this.router.navigate(['/variable']);
  }
}





