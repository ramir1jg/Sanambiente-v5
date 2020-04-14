/* Clase que contiene los metodos y la logica de la vista html en la cual se crean y editan los gmt*/

/* Se importan los componentes y caracteristicas necesarias para el funcionamiento de esta clase */
import { Component, OnInit, HostBinding } from '@angular/core'; // Angular lo importa por defecto
import { FormGroup, FormControl, Validators } from '@angular/forms'; // Caracteristicas que permiten crear y manejar validaciones para formularios
import { Router, ActivatedRoute } from '@angular/router'; // La propiedad activateRoute permite saber lo que se esta recibiendo como parametro
import { GmtService } from '../../../Services/Gmt_Service/Gmt_Service'; //Importo los servicios de la clase Gmt_Service

@Component({
  selector: 'app-Gmt_Body',
  templateUrl: './Gmt_Body.component.html',
  styleUrls: ['./Gmt_Body.component.css']
})
export class GmtBodyComponent implements OnInit {

  public formGmt: FormGroup; // La variable formGmt permite administrar las validaciones y restricciones del formulario
  public arrayGmt; // La variable arrayGmt almacena el listado de los gmt existentes. Utilizada cuando se edita un gmt
  public edit: boolean = false; // Le permite identificar al boton guardar cuando se esta Guardando un nuevo gmt o se esta editando un gmt
  public hide = false; // Permite identificar cuando se debe o no, mostrar el campo del id de un gmt, en la vista html

  constructor(private gmtService: GmtService, private router: Router, private activedRoute: ActivatedRoute) { // instancio el servicio dentro de una variable llamada gmtServicio
    this.formGmt = new FormGroup({
      'nombre_gmt': new FormControl('', [Validators.required, Validators.maxLength(49.9)]),
      'observacion_gmt': new FormControl('', [Validators.required, Validators.maxLength(49.9)]),
    });
    this.arrayGmt = {
      observacion_gmt: ''//Se usa para definir el campo observacion_gmt y poder mostrar el conteo de caracteres restantes
    };
  }

  /* Se establecen los metodos que se ejecutaran cada vez que se visite la vista Gmt_Body */
  ngOnInit(): void {
    this.viewGmtById() // Toma el id de la gmt, cuando se vaya a editar alguna de ellas
  }

  @HostBinding('class') classes = 'row'; // Genera que las columnas de ordenamiento del contenido en la vista html esten alineadas.

  /* Método con el cual se crea un nuevo gmt */
  async createGmt() {
    if (this.formGmt.valid) {
      await this.gmtService.createGmt(this.formGmt.value);
      alert('gmt creado correctamente');
      this.router.navigate(['/gmt']);
    }
  }

  /* Método con el cual se identifica la gmt cuya información va a ser actualizada */
  async viewGmtById() {
    let id = this.activedRoute.snapshot.params.id_gmt;
    if (id !== undefined) {
      let gmt = await this.gmtService.viewGmtById(id).subscribe((element: any) => {
        this.arrayGmt = element.message[0];
        this.edit = true;
        this.hide = true;
      });
    }
  }

  /* Método con el cual se actualiza la información del gmt seleccionado*/
  async updateGmt() {
    let id = this.activedRoute.snapshot.params.id_gmt;
    this.formGmt.patchValue({
      nombre_gmt: this.arrayGmt.nombre_gmt,
      observacion_gmt: this.arrayGmt.observacion_gmt
    })
    this.gmtService.updateGmt(this.formGmt.value, id)
    alert('gmt actualizad correctamente');
    this.router.navigate(['/gmt']);
  }


}
