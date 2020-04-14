/*Esta clase contiene la configuracion de las rutas del lado del servidor
 utilizadas para la tabla de Base de tiempo*/

import { Router } from 'express';
import timeService from './Times_Service';

class TimesRoute {

    public router: Router = Router();

    constructor() {
        this.configuracion();
    }

    /* Se establecen los metodos de la clase TimesRoute, que seran utilizados 
    cuando se llame a cada una de  las rutas de Base de tiempo*/

    configuracion(): void {
        this.router.post('/createTime', timeService.create);
        this.router.get('/viewTimeById/:id_tiempo', timeService.viewById);
        this.router.put('/updateTimes/:id_tiempo', timeService.update);
        this.router.get('/viewTimes', timeService.view);
        this.router.get('/viewTimesStation', timeService.viewNameTimesStation);
    }
}

// Se crea y exporta una constante que contiene las rutas de esta clase.
const timesRoutes = new TimesRoute();
export default timesRoutes.router; 