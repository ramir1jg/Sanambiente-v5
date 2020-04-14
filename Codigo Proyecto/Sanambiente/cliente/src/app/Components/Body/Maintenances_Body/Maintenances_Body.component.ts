/* Clase que contiene los metodos y la logica de la vista html en la cual se crean y editan los mantenimientos*/

/* Se importan los componentes y caracteristicas necesarias para el funcionamiento de esta clase */
import { Component, OnInit, HostBinding } from '@angular/core';// Angular lo importa por defecto
import { FormGroup, FormControl, Validators } from '@angular/forms';// Caracteristicas que permiten crear y manejar validaciones para formularios
import { Router, ActivatedRoute } from '@angular/router'; // la propiedad activateRoute permite saber lo que estoy recibiendo como parametro
import { MaintenancesService } from '../../../Services/Maintenances_Service/Maintenances_Service';//Importo los servicios de la clase Maintenances_Service

@Component({
  selector: 'app-Maintenances_Body',
  templateUrl: './Maintenances_Body.component.html',
})
export class MaintenancesBodyComponent implements OnInit {

  public formMaintenance: FormGroup;// La variable formMaintenance permite administrar las validaciones y restricciones del formulario
  public stationMaintenance: Array<any> = [];// La variable stationMaintenance almacena el listado de las estaciones existentes
  public partStation: Array<any> = [];// La variable partStation almacena el listado de las pastes de las estaciones existentes
  public typeMaintenance: Array<any> = [];// La variable typeMaintenance almacena el listado de los tipos de mantenimientos existentes
  public periodicityMaintenance: Array<any> = [];// La variable periodicityMaintenance almacena el listado tipos de periodicidades de los mantenimientos existentes
  public arrayMaintenance: any; // La variable arrayMaintenance almacena el listado de los Mantenimientos existentes. Utilizada cuando se edita un Mantenimiento
  public edit = false;// Le permite identificar al boton guardar cuando se esta Guardando un nuevo Mantenimiento o se esta editando un Mantenimiento
  public hide = false;// Permite identificar cuando se debe o no, mostrar el campo del id de la Mantenimiento, en la vista html

  @HostBinding('class') classes = 'row';// Genera que las columnas de ordenamiento del contenido en la vista html esten alineadas.

  constructor(private maintenancesService: MaintenancesService, private router: Router, private activedRoute: ActivatedRoute) {
    this.formMaintenance = new FormGroup({
      'id_estacion': new FormControl('', [Validators.required]),
      'id_parte': new FormControl('', [Validators.required]),
      'id_tipo_mantenimiento': new FormControl('', [Validators.required]),
      'id_periodicidad': new FormControl('', [Validators.required]),
      'nombre_funcionario': new FormControl('', [Validators.required, Validators.maxLength(49.9)]),
      'fecha_inicial': new FormControl('', [Validators.required]),
      'fecha_final': new FormControl('', [Validators.required]),
      'validacion_mantenimiento': new FormControl('', []),
      'novedad_mantenimiento': new FormControl('', [Validators.required, Validators.maxLength(49.9)]),
      'fecha_creacion': new FormControl(''['']),
    })
    this.arrayMaintenance = {
      novedad_mantenimiento: ''//Se usa para definir el campo novedad_mantenimiento y poder mostrar el conteo de caracteres restantes
    };
  }
  /* Se establecen los metodos que se ejecutaran cada vez que se visite la vista Maintenances_Body */
  ngOnInit(): void {
    this.viewStationsMaintenance(); // Carga las estaciones existentes
    this.viewMaintenanceById(); // Toma el id del Mantenimiento, cuando se vaya a editar alguno de ellos.
    this.viewPartsStations(); // Carga las partes de las estaciones existentes
    this.viewTypesMaintenance(); // Carga los tipos de mantenimiento existentes
    this.viewPeriodicitiesMaintenance(); // Carga las periodicidades de  los mantenimiento
  }

  /* Método con el cual se crea un nuevo Mantenimiento */
  async createMaintenance() {
    if (this.formMaintenance.valid) {
      await this.maintenancesService.createMaintenance(this.formMaintenance.value);
      alert('Mantenimiento creado correctamente');
      this.router.navigate(['/maintenance']);
    }
  }

  /* Método con el cual se listan las estaciones existentes */
  async viewStationsMaintenance() {
    this.stationMaintenance = (await this.maintenancesService.viewStationsMaintenance());
  }

  /* Método con el cual se listan las partes de las estaciones existentes */
  async viewPartsStations() {
    this.partStation = (await this.maintenancesService.viewPartsStations());
  }

  /* Método con el cual se listan los tipos de mantenimientos existentes */
  async viewTypesMaintenance() {
    this.typeMaintenance = (await this.maintenancesService.viewTypesMaintenance());
  }

  /* Método con el cual se listan los tipos de periodicidades de los mantenimientso */
  async viewPeriodicitiesMaintenance() {
    this.periodicityMaintenance = (await this.maintenancesService.viewPeriodicitiesMaintenance());
  }

  /* Método con el cual se identifica el mantenimiento cuya información va a ser actualizada */
  async viewMaintenanceById() {
    let id = this.activedRoute.snapshot.params.id_mantenimiento;
    if (id !== undefined) {
      let mantenimiento = await this.maintenancesService.viewMaintenanceById(id).subscribe(async (element: any) => {
        this.arrayMaintenance = await element.message[0];
        this.edit = true;
        this.hide = true;
      });
    }
  }

  /* Método con el cual se actualiza la información del Mantenimiento seleccionado */
  async updateMaintenance() {
    let id = this.activedRoute.snapshot.params.id_mantenimiento;
    this.formMaintenance.patchValue({
      nombre_funcionario: this.arrayMaintenance.nombre_funcionario,
      fecha_inicial: this.arrayMaintenance.fecha_inicial,
      fecha_final: this.arrayMaintenance.fecha_final,
      validacion_mantenimiento: this.arrayMaintenance.validacion_mantenimiento,
      novedad_mantenimiento: this.arrayMaintenance.novedad_mantenimiento,
    })
    this.maintenancesService.updateMaintenance(this.formMaintenance.value, id)
    alert('Mantenimiento actualizado correctamente');
    this.router.navigate(['/maintenance']);
  }
}
