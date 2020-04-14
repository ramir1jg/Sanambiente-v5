/* Clase que contiene los metodos y la logica de la vista html en la cual se crean y editan las Alertas*/

/* Se importan los componentes y caracteristicas necesarias para el funcionamiento de esta clase */
import { Component, OnInit, HostBinding } from '@angular/core';// Angular lo importa por defecto
import { FormGroup, FormControl, Validators } from '@angular/forms';// Caracteristicas que permiten crear y manejar validaciones para formularios
import { Router, ActivatedRoute } from '@angular/router'; // la propiedad activateRoute permite saber lo que estoy recibiendo como parametro
import { AlertsService } from '../../../Services/Alerts_Service/Alerts_Service';//Importo los servicios de la clase Alerts_Service


@Component({
  selector: 'app-alerts_body',
  templateUrl: './alerts_body.component.html',
  styleUrls: ['./alerts_body.component.css']
})
export class AlertsBodyComponent implements OnInit {

  public formAlert: FormGroup; // La variable formAlert permite administrar las validaciones y restricciones del formulario
  public arrayAlerts; // La variable arrayAlerts almacena el listado de las Alertas existentes. Utilizada cuando se edita una Alerta
  public edit: boolean = false; // Le permite identificar al boton guardar cuando se esta Guardando una nueva Alerta o se esta editando una Alerta
  public hide = false; // Permite identificar cuando se debe o no, mostrar el campo del id de la Alerta, en la vista html

  @HostBinding('class') classes = 'row'; // Genera que las columnas de ordenamiento del contenido en la vista html esten alineadas.

  constructor(private alertsService: AlertsService, private router: Router, private activedRoute: ActivatedRoute) {// instancio el servicio dentro de una variable llamada AlertsService

    this.formAlert = new FormGroup({
      'nombre_alerta': new FormControl('', [Validators.required, Validators.maxLength(49.9)]),
      'email_alerta': new FormControl('', [Validators.required, Validators.pattern(/^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9-]+\.[a-z0-9-]/)]),
      'contrasena_alerta': new FormControl('', [Validators.required, Validators.maxLength(49.9)]),
      'servidorsmtp_alerta': new FormControl('', [Validators.required, Validators.maxLength(49.9)]),
      'puertosmtp_alerta': new FormControl('', [Validators.required, Validators.pattern(/^[0-9-]\d{0,50}$/)]),
      'seguridad_alerta': new FormControl('', [Validators.required, Validators.maxLength(49.9)]),
      'autenticacion_alerta': new FormControl('', []),
      'emailpara_alerta': new FormControl('', [Validators.required, Validators.pattern(/^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9-]+\.[a-z0-9-]/)]),
      'asunto_alerta': new FormControl('', [Validators.required, Validators.maxLength(49.9)]),
      'emailde_alerta': new FormControl('', [Validators.required, Validators.pattern(/^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9-]+\.[a-z0-9-]/)]),
      'observacion_alerta': new FormControl('', [Validators.required, Validators.maxLength(49.9)])
    });
    
    this.arrayAlerts = {
      observacion_alerta: '', //Se usa para definir el campo observacion_alerta y poder mostrar el conteo de caracteres restantes

    };
  }

  /* Se establecen los metodos que se ejecutaran cada vez que se visite la vista Alerts_Body */
  ngOnInit(): void {
    this.viewAlertById() // Toma el id de la Alerta, cuando se vaya a editar alguna de ellas
  }

  /* Método con el cual se crea una nueva Alerta */
  async createAlert() {
    if (this.formAlert.valid) {
      await this.alertsService.createAlert(this.formAlert.value);
      alert('Alerta creada correctamente');
      this.router.navigate(['/alert']);
    }
  }

  /* Método con el cual se identifica la Alerta cuya información va a ser actualizada */
  async viewAlertById() {
    let id = this.activedRoute.snapshot.params.id_alerta;
    if (id !== undefined) {
      let alert = await this.alertsService.viewAlertById(id).subscribe((element: any) => {
        this.arrayAlerts = element.message[0];
        this.edit = true;
        this.hide = true;
      });
    }
  }

  /* Método con el cual se actualiza la información de la Alerta seleccionada */
  async updateAlert() {
    let id = this.activedRoute.snapshot.params.id_alerta;
    this.formAlert.patchValue({
      nombre_alerta: this.arrayAlerts.nombre_alerta,
      email_alerta: this.arrayAlerts.email_alerta,
      contrasena_alerta: this.arrayAlerts.contrasena_alerta,
      servidorsmtp_alerta: this.arrayAlerts.servidorsmtp_alerta,
      puertosmtp_alerta: this.arrayAlerts.puertosmtp_alerta,
      seguridad_alerta: this.arrayAlerts.seguridad_alerta,
      autenticacion_alerta: this.arrayAlerts.autenticacion_alerta,
      emailpara_alerta: this.arrayAlerts.emailpara_alerta,
      asunto_alerta: this.arrayAlerts.asunto_alerta,
      emailde_alerta: this.arrayAlerts.emailde_alerta,
      observacion_alerta: this.arrayAlerts.observacion_alerta

    })
    this.alertsService.updateAlert(this.formAlert.value, id)
    alert('Alerta actualizada correctamente');
    this.router.navigate(['/alert']);
  }

}
