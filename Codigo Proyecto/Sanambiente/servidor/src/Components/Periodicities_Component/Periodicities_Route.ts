/*Esta clase contiene la configuracion de las rutas del lado del servidor
 utilizadas para la tabla periodicidad*/

import { Router } from 'express';
import periodicityService from './Periodicities_Service'; // Se importa la constante PeriodicityService de la clase Region_Service

class PeriodicityRoute {

    public router: Router = Router();

    constructor() {
        this.configuracion();
    }

    /* Se establecen los metodos de la clase Periodicity_Route, que seran utilizados cuando se llame a cada una de 
    las rutas de periodicidad*/

    configuracion(): void {
        this.router.post('/createPeriodicity', periodicityService.create);
        this.router.get('/viewPeriodicityById/:id_periodicidad', periodicityService.viewById);
        this.router.get('/viewPeriodicities', periodicityService.view);
        this.router.put('/updatePeriodicity/:id_periodicidad', periodicityService.update);
        this.router.get('/viewPeriodicitiesMaintenance', periodicityService.viewTypesPeriodicitiesMaintenance);
    }
}

// Se crea y exporta una constante que contiene las rutas de esta clase.
const periodicitiesRoutes = new PeriodicityRoute();
export default periodicitiesRoutes.router; 