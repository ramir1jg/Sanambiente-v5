/*Esta clase contiene la configuracion de las rutas del lado del servidor
 utilizadas para la tabla Mantenimiento */

import { Router } from 'express';
import MaintenanceService from './Maintenances_Service';//Se importa la constante MaintenanceService de la clase Maintenances_Service

class MaintenancesRoute {

    public router: Router = Router();

    constructor() {
        this.configuracion();
    }

    /* Se establecen los metodos de la clase Maintenances_Service, que seran utilizados cuando se llame a cada una de 
    las rutas de Mantenimiento*/

    configuracion(): void {
        this.router.post('/createMaintenance', MaintenanceService.create);
        this.router.get('/viewMaintenanceById/:id_mantenimiento', MaintenanceService.viewById);
        this.router.get('/viewMaintenances', MaintenanceService.view);
        this.router.put('/updateMaintenances/:id_mantenimiento', MaintenanceService.update);
    }
}

// Se crea y exporta una constante que contiene las rutas de esta clase.
const maintenancesRoutes = new MaintenancesRoute();
export default maintenancesRoutes.router;