/*Esta clase contiene la configuracion de las rutas del lado del servidor
 utilizadas para la tabla tipo de Mantenimiento */

import { Router } from 'express';
import MaintenanceTypeService from './Maintenances_Type_Service';//Se importa la constante MaintenanceService de la clase Maintenances_Service

class maintenancesTypeRoute {

    public router: Router = Router();

    constructor() {
        this.configuracion();
    }

    /* Se establecen los metodos de la clase Maintenances_Service, que seran utilizados cuando se llame a cada una de 
    las rutas de Mantenimiento*/

    configuracion(): void {
        this.router.post('/createMaintenanceType', MaintenanceTypeService.create);
        this.router.get('/viewMaintenanceTypeById/:id_tipo_mantenimiento', MaintenanceTypeService.viewById);
        this.router.get('/viewMaintenancesType', MaintenanceTypeService.view);
        this.router.put('/updateMaintenancesType/:id_tipo_mantenimiento', MaintenanceTypeService.update);
        this.router.get('/viewTypesMaintenance', MaintenanceTypeService.viewNameTypesMaintenance);

    }
}

// Se crea y exporta una constante que contiene las rutas de esta clase.
const maintenancesTypeRoutes = new maintenancesTypeRoute();
export default maintenancesTypeRoutes.router;