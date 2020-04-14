/*Esta clase contiene la configuracion de las rutas del lado del servidor
 utilizadas para la tabla Plantilla*/

import { Router } from 'express';
import templateService from './Template_Service';

class TemplateRoute {

    public router: Router = Router();

    constructor() {
        this.configuracion();
    }

    /* Se establecen los metodos de la clase TemplateRoute, que seran utilizados 
    cuando se llame a cada una de  las rutas de Plantilla*/

    configuracion(): void {
        this.router.post('/createTemplate', templateService.create);
        this.router.get('/viewTemplatesById', templateService.viewTemplateByIdStation);
    }
}

// Se crea y exporta una constante que contiene las rutas de esta clase.
const timesRoutes = new TemplateRoute();
export default timesRoutes.router; 