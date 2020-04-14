/*Esta clase contiene la configuracion de las rutas del lado del servidor
 utilizadas para la tabla de Alertas*/

import { Router } from 'express';
import alertService from './Alerts_Service';

class AlertsRoute {

    public router: Router = Router();

    constructor() {
        this.configuracion();
    }

    /* Se establecen los metodos de la clase alertService, que seran utilizados 
    cuando se llame a cada una de  las rutas de alerta*/

    configuracion(): void {
        this.router.post('/createAlert', alertService.create);
        this.router.get('/viewAlertById/:id_alerta', alertService.viewById);
        this.router.put('/updateAlerts/:id_alerta', alertService.update);
        this.router.get('/viewAlerts', alertService.view);
    }
}

// Se crea y exporta una constante que contiene las rutas de esta clase.
const alertsRoutes = new AlertsRoute();
export default alertsRoutes.router; 