/*Esta clase contiene la configuracion de las rutas del lado del servidor
 utilizadas para la tabla estaciones */

import { Router } from 'express';
import stationService from './Stations_Service';  // Se importa la constante StationsService de la clase Station_Service


class StationsRoute {

    public router: Router = Router();

    constructor() {
        this.configuracion();
    }
    /* Se establecen los metodos de la clase Stations_Service, que seran utilizados cuando se llame a cada una de 
    las rutas de estaciones*/

    configuracion(): void {
        this.router.post('/createStation', stationService.create);
        this.router.get('/viewStationById/:id_estacion', stationService.viewById);
        this.router.get('/viewStations', stationService.view);
        this.router.put('/updateStations/:id_estacion', stationService.update);
        this.router.get('/viewStationsRank', stationService.viewNameStationsRank);
        this.router.get('/viewStationsMaintenance', stationService.viewNameStationsMaintenance);
    }
}

// Se crea y exporta una constante que contiene las rutas de esta clase.
const stationsRoutes = new StationsRoute();
export default stationsRoutes.router; 