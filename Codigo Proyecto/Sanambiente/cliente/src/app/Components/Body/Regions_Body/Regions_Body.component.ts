/* Clase que contiene los metodos y la logica de la vista html en la cual se crean y editan las regiones*/

/* Se importan los componentes y caracteristicas necesarias para el funcionamiento de esta clase */
import { Component, OnInit, HostBinding } from '@angular/core'; // Angular lo importa por defecto
import { FormGroup, FormControl, Validators } from '@angular/forms'; // Caracteristicas que permiten crear y manejar validaciones para formularios
import { Router, ActivatedRoute } from '@angular/router'; // La propiedad activateRoute permite saber lo que se esta recibiendo como parametro
import { RegionsService } from '../../../Services/Regions_Service/Regions_Service'; //Importo los servicios de la clase Regions_Service

@Component({
  selector: 'app-Regions_Body',
  templateUrl: './Regions_Body.component.html',
  styleUrls: ['./Regions_Body.component.css']
})
export class RegionsBodyComponent implements OnInit {

  public formRegion: FormGroup; // La variable formRegion permite administrar las validaciones y restricciones del formulario
  public arrayRegions; // La variable arrayRegions almacena el listado de las regiones existentes.
  public edit: boolean = false; // Le permite identificar al boton guardar cuando se esta Guardando una nueva region o se esta editando una region
  public hide = false; // Permite identificar cuando se debe o no, mostrar el campo del id de la region, en la vista html

  constructor(private regionService: RegionsService, private router: Router, private activedRoute: ActivatedRoute) { // instancio el servicio dentro de una variable llamada regionService
    this.formRegion = new FormGroup({
      'nombre_region': new FormControl('', [Validators.required, Validators.maxLength(49.9)]),
      'observacion_region': new FormControl('', [Validators.required, Validators.maxLength(49.9)]),
    });
    this.arrayRegions = {
      observacion_region: ''//Se usa para definir el campo observacion_region y poder mostrar el conteo de caracteres restantes
    };
  }

  /* Se establecen los metodos que se ejecutaran cada vez que se visite la vista Regions_Body */
  ngOnInit(): void {
    this.viewRegionById() // Toma el id de la region, cuando se vaya a editar alguna de ellas
  }

  @HostBinding('class') classes = 'row'; // Genera que las columnas de ordenamiento del contenido en la vista html esten alineadas.

  /* Método con el cual se crea una nueva región */
  async createRegion() {
    if (this.formRegion.valid) {
      await this.regionService.createRegion(this.formRegion.value);
      alert('Región creada correctamente');
      this.router.navigate(['/region']);
    }
  }

  /* Método con el cual se identifica la region cuya información va a ser actualizada */
  async viewRegionById() {
    let id = this.activedRoute.snapshot.params.id_region;
    if (id !== undefined) {
      let region = await this.regionService.viewRegionById(id).subscribe((element: any) => {
        this.arrayRegions = element.message[0];
        this.edit = true;
        this.hide = true;
      });
    }
  }

  /* Método con el cual se actualiza la información de la región seleccionada */
  async updateRegion() {
    let id = this.activedRoute.snapshot.params.id_region;
    this.formRegion.patchValue({
      nombre_region: this.arrayRegions.nombre_region,
      observacion_region: this.arrayRegions.observacion_region
    })
    this.regionService.updateRegion(this.formRegion.value, id)
    alert('Region actualizada correctamente');
    this.router.navigate(['/region']);
  }
}
