/*Esta clase contiene la configuracion de las rutas del lado del servidor
 utilizadas para la tabla GMT */

import { Router } from 'express';
import GmtService from './Gmt_Service'; // Se importa la constante Gmt_Service de la clase Gmt_Service


class GmtRoute {

    public router: Router = Router();

    constructor() {
        this.configuracion();
    }
    /* Se establecen los metodos de la clase Gmt_Service, que seran utilizados cuando se llame a cada una de 
    las rutas de gmt*/

    configuracion(): void {
        this.router.post('/createGmt', GmtService.create);
        this.router.get('/viewGmtById/:id_gmt', GmtService.viewById);
        this.router.get('/viewGmt', GmtService.view);
        this.router.put('/updateGmt/:id_gmt', GmtService.update);
        this.router.get('/viewGmtStation', GmtService.viewNameGmtStation);
    }
}

// Se crea y exporta una constante que contiene las rutas de esta clase.
const gmtRoutes = new GmtRoute();
export default gmtRoutes.router;