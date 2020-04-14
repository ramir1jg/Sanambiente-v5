/*Esta clase contiene la configuracion de las rutas del lado del servidor
 utilizadas para la tabla region*/

import { Router } from 'express';
import RegionService from './Regions_Service'; // Se importa la constante RegionService de la clase Region_Service

class RegionRoute {

    public router: Router = Router();

    constructor() {
        this.configuracion();
    }

    /* Se establecen los metodos de la clase Region_Route, que seran utilizados cuando se llame a cada una de 
    las rutas de regiones*/

    configuracion(): void {
        this.router.post('/createRegion', RegionService.create);
        this.router.get('/viewRegionById/:id_region', RegionService.viewById);
        this.router.get('/viewRegions', RegionService.view);
        this.router.put('/updateRegions/:id_region', RegionService.update);
        this.router.get('/viewRegionsCity', RegionService.viewNameRegionsCity);
        this.router.get('/viewRegionsStation', RegionService.viewNameRegionsStation)
    }
}

// Se crea y exporta una constante que contiene las rutas de esta clase.
const regionsRoutes = new RegionRoute();
export default regionsRoutes.router; 