/*Esta clase contiene la configuracion de las rutas del lado del servidor
 utilizadas para la tabla ciudad */

import { Router } from 'express';
import CityService from './Cities_Service'; // Se importa la constante CityService de la clase City_Service


class CitiesRoute {

    public router: Router = Router();

    constructor() {
        this.configuracion();
    }
    /* Se establecen los metodos de la clase City_Service, que seran utilizados cuando se llame a cada una de 
    las rutas de ciudades*/

    configuracion(): void {
        this.router.post('/createCity', CityService.create);
        this.router.get('/viewCityById/:id_ciudad', CityService.viewById);
        this.router.get('/viewCities', CityService.view);
        this.router.put('/updateCities/:id_ciudad', CityService.update);
        this.router.get('/viewCitiesStation', CityService.viewNameCitiesStation);
    }
}

// Se crea y exporta una constante que contiene las rutas de esta clase.
const citiesRoutes = new CitiesRoute();
export default citiesRoutes.router; 