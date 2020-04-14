/* Clase que contiene los metodos y la logica de la vista html en la cual se crean y editan los  tipos de mantenimiento*/

/* Se importan los componentes y caracteristicas necesarias para el funcionamiento de esta clase */
import { Component, OnInit, HostBinding } from '@angular/core'; // Angular lo importa por defecto
import { FormGroup, FormControl, Validators } from '@angular/forms'; // Caracteristicas que permiten crear y manejar validaciones para formularios
import { Router, ActivatedRoute } from '@angular/router'; // La propiedad activateRoute permite saber lo que se esta recibiendo como parametro
import { MaintenancesTypeService } from '../../../Services/Maintenances_Type_Service/Maintenances_Type_Service'; //Importo los servicios de la clase Maintenances_Type_Service

@Component({
  selector: 'app-maintenance_type_body',
  templateUrl: './maintenance_type_body.component.html',
  styleUrls: ['./maintenance_type_body.component.css']
})
export class MaintenanceTypeBodyComponent implements OnInit {

  public formMaintenanceType: FormGroup; // La variable formMaintenanceType permite administrar las validaciones y restricciones del formulario
  public arrayMaintenanceType; // La variable arrayMaintenanceType almacena el listado de los tipos de mantenimiento existentes. Utilizada cuando se edita un tipo de mantenimiento
  public edit: boolean = false; // Le permite identificar al boton guardar cuando se esta Guardando un nuevo tipo de mantenimiento o editando un tipo de mantenimiento
  public hide = false; // Permite identificar cuando se debe o no, mostrar el campo del id de tipo de mantenimiento, en la vista html

  constructor(private maintenanceTypeService: MaintenancesTypeService, private router: Router, private activedRoute: ActivatedRoute) { // instancio el servicio dentro de una variable llamada maintenanceTypeService 
    this.formMaintenanceType = new FormGroup({
      'nombre_tipo_mantenimiento': new FormControl('', [Validators.required, Validators.maxLength(49.9)]),
      'observacion_tipo_mantenimiento': new FormControl('', [Validators.required, Validators.maxLength(49.9)]),
    });
    this.arrayMaintenanceType = {
      observacion_tipo_mantenimiento: ''//Se usa para definir el campo observacion_tipo_mantenimiento y poder mostrar el conteo de caracteres restantes
    };
  }
  /* Se establecen los metodos que se ejecutaran cada vez que se visite la vista Maintenance_Type_Body */
  ngOnInit(): void {
    this.viewMaintenanceTypeById() // Toma el id del tipo de mantenimiento, cuando se vaya a editar alguno de ellos
  }

  @HostBinding('class') classes = 'row'; // Genera que las columnas de ordenamiento del contenido en la vista html esten alineadas.

  /* Método con el cual se crea una nuevo tipo de mantenimiento */
  async createMaintenanceType() {
    if (this.formMaintenanceType.valid) {
      await this.maintenanceTypeService.createMaintenanceType(this.formMaintenanceType.value);
      alert('Tipo de mantenimiento creado correctamente');
      this.router.navigate(['/maintenance_type']);
    }
  }

  /* Método con el cual se identifica el tipo de mantenimiento cuya información va a ser actualizada */
  async viewMaintenanceTypeById() {
    let id = this.activedRoute.snapshot.params.id_tipo_mantenimiento;
    if (id !== undefined) {
      let maintenanceType = await this.maintenanceTypeService.viewMaintenanceTypeById(id).subscribe((element: any) => {
        this.arrayMaintenanceType = element.message[0];
        this.edit = true;
        this.hide = true;
      });
    }
  }

  /* Método con el cual se actualiza la información del tipo de mantenimiento seleccionado */
  async updateMaintenanceType() {
    let id = this.activedRoute.snapshot.params.id_tipo_mantenimiento;
    this.formMaintenanceType.patchValue({
      nombre_tipo_mantenimiento: this.arrayMaintenanceType.nombre_tipo_mantenimiento,
      observacion_tipo_mantenimiento: this.arrayMaintenanceType.observacion_tipo_mantenimiento
    })
    this.maintenanceTypeService.updateMaintenanceType(this.formMaintenanceType.value, id)
    alert('Tipo de mantenimiento actualizado correctamente');
    this.router.navigate(['/maintenance_type']);
  }

}
