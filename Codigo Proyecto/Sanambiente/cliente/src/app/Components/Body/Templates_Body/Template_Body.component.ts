/* Clase que contiene los metodos y la logica de la vista html en la cual se crean y las Plantillas*/

/* Se importan los componentes y caracteristicas necesarias para el funcionamiento de esta clase */
import { Component, OnInit } from '@angular/core';// Angular lo importa por defecto
import { FormGroup, FormControl, Validators } from '@angular/forms';// Caracteristicas que permiten crear y manejar validaciones para formularios
import { MaintenancesService } from 'src/app/Services/Maintenances_Service/Maintenances_Service';//Importo los servicios de la clase Maintenances_Service
import { VariablesService } from 'src/app/Services/Variables_Service/Variables_Service';//Importo los servicios de la clase Variables_Service
import { TemplateService } from 'src/app/Services/Templates_Service/Templates_service';//Importo los servicios de la clase Templates_service
import { StationsService } from 'src/app/Services/Stations_Service/Stations_Service';//Importo los servicios de la clase Stations_Service
import { Router } from '@angular/router';//Importo las rutas

@Component({
  selector: 'app-template',
  templateUrl: './template_Body.component.html',
  styleUrls: ['./template_Body.component.css']
})
export class TemplateComponent implements OnInit {

  public formTemplate: FormGroup;// La variable formTemplate permite administrar las validaciones y restricciones del formulario
  public stationArray: Array<any> = [];// La variable stationArray almacena el listado de las Estaciones existentes
  public variableArray: Array<any> = [];// La variable variableArray almacena el listado de las Variables existentes
  public arrayAddVariable: Array<any> = [];// La variable arrayAddVariable almacena que se van agregando
  public arrayForm: Array<any> = [];

  constructor(private maintenancesService: MaintenancesService, private variableService: VariablesService, private stationService: StationsService, private templateService: TemplateService, private router: Router) {
    this.formTemplate = new FormGroup({
      id_plantilla: new FormControl(),
      id_estacion: new FormControl('', [Validators.required]),
      nombre_plantilla: new FormControl('', [Validators.required, Validators.maxLength(49.9)]),
      id_variable: new FormControl('', [Validators.required]),
      posicion: new FormControl(),
    })
  }

  /* Se establecen los metodos que se ejecutaran cada vez que se visite la vista Template_Body */
  async ngOnInit() {
    this.viewStation();// Carga las estacion existentee
    this.viewVariables();// Carga las variables existentes
    const count = await this.getCountTemplate()
    this.formTemplate.get('id_plantilla').setValue(count);
  }

  /* Método con el cual se listan las estaciones existentes */
  async viewStation() {
    this.stationArray = (await this.maintenancesService.viewStationsMaintenance());
  }

  /* Método con el cual se listan las Variabbles existentes */
  async viewVariables() {
    this.variableArray = await this.variableService.viewVariables();
  }

  /* Método con el cual se agregan un item de varible dentro de plantilla */
  addField() {
    this.arrayAddVariable.push(this.formTemplate.value);
  }

  /* Método con el cual se elimina un item de varible dentro de plantilla */
  deleteField() {
    this.arrayAddVariable.pop();
  }

  /* Método con el cual se guarda la informacion de la plantilla */
  saveInformation() {
    for (let index = 0; index < this.arrayAddVariable.length; index++) {
      this.arrayAddVariable[index].posicion = index + 1;
      this.arrayForm.push(this.arrayAddVariable[index]);
    }
    this.formTemplate.value.posicion = this.arrayForm.length + 1;
    this.arrayForm.push(this.formTemplate.value);
    this.templateService.createTemplate(this.getValuesFormGroup(this.arrayForm));
    this.arrayForm = [];
    alert('Plantilla creada correctamente');
    this.router.navigate(['/connect']);
  }

  getValuesFormGroup(arrayValues: Array<any>) {
    let arrayInformation = [];
    arrayValues.forEach((elements) => {
      arrayInformation.push(Object.values(elements));
    })
    return arrayInformation;
  }

  async getCountTemplate() {
    const templates: any = await this.stationService.viewTemplatesStation();
    const lengthTemplate: number = templates.length;
    console.log(lengthTemplate);
    if (lengthTemplate === 0) {
      return 1;
    } else {
      return templates[lengthTemplate - 1].id_plantilla + 1;
    }
  }

}
