/* Clase que contiene los metodos y la logica de la vista html en la cual se crean y editan las organizaciones*/

/* Se importan los componentes y caracteristicas necesarias para el funcionamiento de esta clase */
import { Component, OnInit, HostBinding } from '@angular/core';  // Angular lo importa por defecto
import { FormGroup, FormControl, Validators } from '@angular/forms'; // Caracteristicas que permiten crear y manejar validaciones para formularios
import { Router, ActivatedRoute } from '@angular/router'; // La propiedad activateRoute permite saber lo que se esta recibiendo como parametro
import { OrganizationsService } from '../../../Services/Organizations_Service/Organizations_Service'; //Importo los servicios de la clase Organizations_Service

@Component({
  selector: 'app-Organizations_Body',
  templateUrl: './Organizations_Body.component.html'
})
export class OrganizationsBodyComponent implements OnInit {

  public formOrganization: FormGroup;// La variable formOrganization permite administrar las validaciones y restricciones del formulario
  public arrayOrganizations;  // La variable arrayOrganizations almacena el listado de las organizaciones existentes. Utilizada cuando se edita una organizacion
  public edit: boolean = false; // Le permite identificar al boton guardar cuando se esta Guardando una nueva organizacion o se esta editando una organizacion
  public hide = false; // Permite identificar cuando se debe o no, mostrar el campo del id de la organizacion, en la vista html

  constructor(private organizationService: OrganizationsService, private router: Router, private activedRoute: ActivatedRoute) {// instancio el servicio dentro de una variable llamada organizationService
    this.formOrganization = new FormGroup({
      'nombre_organizacion': new FormControl('', [Validators.required, Validators.maxLength(49.9)]),
      'email_organizacion': new FormControl('', [Validators.required, Validators.maxLength(49.9), Validators.pattern(/^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9-]+\.[a-z0-9-]/)]),
      'telefono_organizacion': new FormControl('', [Validators.required, Validators.maxLength(49.9), Validators.pattern(/^[0-9#()+* ]+\.?[0-9]{0,2}\d{0,20}$/)]),
      'observacion_organizacion': new FormControl('', [Validators.required, Validators.maxLength(49.9)]),
    });
    this.arrayOrganizations = {
      observacion_organizacion: ''//Se usa para definir el campo observacion_organizacion y poder mostrar el conteo de caracteres restantes
    };

  }

  /* Se establecen los metodos que se ejecutaran cada vez que se visite la vista Organizations_Body */
  ngOnInit(): void {
    this.viewOrganizationById() // Toma el id de la organizacion, cuando se vaya a editar alguna de ellas
  }

  @HostBinding('class') classes = 'row';  // Genera que las columnas de ordenamiento del contenido en la vista html esten alineadas.


  /* Método con el cual se crea una nueva organizacion */
  async createOrganization() {
    if (this.formOrganization.valid) {
      await this.organizationService.createOrganization(this.formOrganization.value);
      alert('Organización creada correctamente');
      this.router.navigate(['/organization']);
    }
  }

  /* Método con el cual se identifica la organizacion cuya información va a ser actualizada */
  async viewOrganizationById() {
    let id = this.activedRoute.snapshot.params.id_organizacion;
    if (id !== undefined) {
      let organization = await this.organizationService.viewOrganizationById(id).subscribe((element: any) => {
        this.arrayOrganizations = element.message[0];
        this.edit = true;
        this.hide = true;
      });
    }
  }

  /* Método con el cual se actualiza la información de la organizacion seleccionada */
  async updateOrganization() {
    let id = this.activedRoute.snapshot.params.id_organizacion;
    this.formOrganization.patchValue({
      nombre_organizacion: this.arrayOrganizations.nombre_organizacion,
      observacion_organizacion: this.arrayOrganizations.observacion_organizacion,
      email_organizacion: this.arrayOrganizations.email_organizacion,
      telefono_organizacion: this.arrayOrganizations.telefono_organizacion
    })
    this.organizationService.updateOrganization(this.formOrganization.value, id)
    alert('Organización actualizada correctamente');
    this.router.navigate(['/organization']);
  }
}
