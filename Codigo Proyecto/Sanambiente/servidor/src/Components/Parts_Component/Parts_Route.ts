/*Esta clase contiene la configuracion de las rutas del lado del servidor
 utilizadas para la tabla partes*/

import { Router } from 'express';
import partService from './Parts_Service'; // Se importa la constante PartService de la clase Parts_Service

class PartRoute {

    public router: Router = Router();

    constructor() {
        this.configuracion();
    }

    /* Se establecen los metodos de la clase Part_Route, que seran utilizados cuando se llame a cada una de 
    las rutas de partes*/

    configuracion(): void {
        this.router.post('/createPart', partService.create);
        this.router.get('/viewPartById/:id_parte', partService.viewById);
        this.router.get('/viewParts', partService.view);
        this.router.put('/updatePart/:id_parte', partService.update);
        this.router.get('/viewPartsStations', partService.viewNamePartsStations);
    }
}

// Se crea y exporta una constante que contiene las rutas de esta clase.
const partsRoutes = new PartRoute();
export default partsRoutes.router; 