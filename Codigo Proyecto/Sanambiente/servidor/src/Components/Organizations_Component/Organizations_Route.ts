/*Esta clase contiene la configuracion de las rutas del lado del servidor
 utilizadas para la tabla de organizaciones*/

import { Router } from 'express';
import organizationService from './Organizations_Service';

class OrganizationRoute {

    public router: Router = Router();

    constructor() {
        this.configuracion();
    }

    /* Se establecen los metodos de la clase Organizacion_Service, que seran utilizados 
    cuando se llame a cada una de  las rutas de organizacion*/

    configuracion(): void {
        this.router.post('/createOrganization', organizationService.create);
        this.router.get('/viewOrganizationById/:id_organizacion', organizationService.viewById);
        this.router.put('/updateOrganizations/:id_organizacion', organizationService.update);
        this.router.get('/viewOrganizations', organizationService.view)
    }
}

// Se crea y exporta una constante que contiene las rutas de esta clase.
const organizationsRoutes = new OrganizationRoute();
export default organizationsRoutes.router; 