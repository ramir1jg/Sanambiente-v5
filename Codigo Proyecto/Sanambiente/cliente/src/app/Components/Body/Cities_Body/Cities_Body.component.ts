/* Clase que contiene los metodos y la logica de la vista html en la cual se crean y editan las ciudades*/

/* Se importan los componentes y caracteristicas necesarias para el funcionamiento de esta clase */
import { Component, OnInit, HostBinding } from '@angular/core'; // Angular lo importa por defecto
import { FormGroup, FormControl, Validators } from '@angular/forms'; // Caracteristicas que permiten crear y manejar validaciones para formularios
import { Router, ActivatedRoute } from '@angular/router'; // La propiedad activateRoute permite saber lo que se esta recibiendo como parametro
import { CitiesService } from '../../../Services/Cities_Service/Cities_Service'; //Importo los servicios de la clase Cities_Service

@Component({
  selector: 'app-Cities_Body',
  templateUrl: './Cities_Body.component.html',
  styleUrls: ['./Cities_Body.component.css']
})
export class CitiesBodyComponent implements OnInit {

  public formCity: FormGroup; // La variable formCity permite administrar las validaciones y restricciones del formulario
  public regionCity: Array<any> = []; // La variable regionCity almacena el listado de las regiones existentes
  public arrayCities: any; // La variable arrayCities almacena el listado de las ciudades existentes. Utilizada cuando se edita una ciudad
  public edit = false; // Le permite identificar al boton guardar cuando se esta Guardando una nueva ciudad o se esta editando una ciudad
  public hide = false; // Permite identificar cuando se debe o no, mostrar el campo del id de la ciudad, en la vista html

  @HostBinding('class') classes = 'row'; // Genera que las columnas de ordenamiento del contenido en la vista html esten alineadas.

  constructor(private cityService: CitiesService, private router: Router, private activedRoute: ActivatedRoute) {
    this.formCity = new FormGroup({
      'nombre_ciudad': new FormControl('', [Validators.required, Validators.maxLength(49.9)]),
      'id_region': new FormControl('', [Validators.required]),
      'observacion_ciudad': new FormControl('', [Validators.required, Validators.maxLength(49.9)]),
    })
    this.arrayCities = {
      observacion_ciudad: ''//Se usa para definir el campo observacion_ciudad y poder mostrar el conteo de caracteres restantes
    };
  }

  /* Se establecen los metodos que se ejecutaran cada vez que se visite la vista Cities_Body */
  ngOnInit(): void {
    this.viewRegionsCity(); // Carga las regiones existentes
    this.viewCityById(); // Toma el id de la cuidad, cuando se vaya a editar alguna de ellas
  }

  /* Método con el cual se crea una nueva ciudad */
  async createCity() {
    if (this.formCity.valid) {
      await this.cityService.createCity(this.formCity.value);
      alert('Ciudad creada correctamente');
      this.router.navigate(['/city']);
    }
  }

  /* Método con el cual se listan las regiones existentes */
  async viewRegionsCity() {
    this.regionCity = (await this.cityService.viewRegionsCity());
  }

  /* Método con el cual se identifica la ciudad cuya información va a ser actualizada */
  async viewCityById() {
    let id = this.activedRoute.snapshot.params.id_ciudad;
    if (id !== undefined) {
      let city = await this.cityService.viewCityById(id).subscribe(async (element: any) => {
        this.arrayCities = await element.message[0];
        this.edit = true;
        this.hide = true;
      });
    }
  }

  /* Método con el cual se actualiza la información de la ciudad seleccionada */
  async updateCity() {
    let id = this.activedRoute.snapshot.params.id_ciudad;
    this.formCity.patchValue({
      nombre_ciudad: this.arrayCities.nombre_ciudad,
      observacion_ciudad: this.arrayCities.observacion_ciudad,
    })
    this.cityService.updateCity(this.formCity.value, id)
    alert('Ciudad actualizada correctamente');
    this.router.navigate(['/city']);
  }
}
