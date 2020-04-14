/*Esta clase contiene la configuracion de las rutas del lado del servidor
 utilizadas para la tabla Variable*/

import { Router } from 'express';
import VariableService from './Variables_Service'; // Se importa la constante VariableService de la clase Variable_Service

class VariableRoute {

    public router: Router = Router();

    constructor() {
        this.configuracion();
    }

    /* Se establecen los metodos de la clase Region_Service, que seran utilizados cuando se llame a cada una de 
    las rutas de Variables*/

    configuracion(): void {
        this.router.post('/createVariable', VariableService.create);
        this.router.get('/viewVariableById/:id_variable', VariableService.viewById);
        this.router.get('/viewVariables', VariableService.view);
        this.router.put('/updateVariables/:id_variable', VariableService.update);


    }
}

// Se crea y exporta una constante que contiene las rutas de esta clase.
const variableRoutes = new VariableRoute();
export default variableRoutes.router; 