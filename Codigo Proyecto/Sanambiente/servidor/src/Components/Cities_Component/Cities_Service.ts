/*Esta clase contiene la configuracion de los servicios del lado del servidor
 utilizados para la tabla ciudad */

import BaseService from '../Base_Component/Base_Service';
import ConnectionDataBase from '../../basedatos';
import { handlerQuery } from '../../Hanldlers/Handle_Queries';
import { Request, Response } from 'express';
import handleMessage from '../../Hanldlers/Handle_Message';

// Se "llenan" los metodos abstractos creados en la clase BaseService.ts
class CityService implements BaseService<any> {

    //metodo para crear una ciudad
    async create(request: Request, response: Response): Promise<any> {
        try {
            let { nombre_ciudad, id_region, observacion_ciudad } = request.body;
            await ConnectionDataBase.query(handlerQuery['createCity'], [nombre_ciudad, id_region, observacion_ciudad]);
            return Promise.resolve(handleMessage(response, 200, 'Create city'));
        } catch (error) {
            Promise.reject(handleMessage(response, 404, 'Error'));
        }
    }

    //metodo para actualizar una ciudad
    async update(request: Request, response: Response): Promise<any> {
        try {
            const { id_ciudad } = request.params;
            let { nombre_ciudad, id_region, observacion_ciudad } = request.body;
            await ConnectionDataBase.query(handlerQuery['updateCity'], [nombre_ciudad, id_region, observacion_ciudad, id_ciudad]);
            return Promise.resolve(handleMessage(response, 200, 'Update city'))

        } catch (error) {
            Promise.reject(handleMessage(response, 404, 'Error'));
        }
    }

    // metodo para ver solo el nombre de las ciudades en una lista desplegable la utiliza la tabla se estacion
    async viewNameCitiesStation(request: Request, response: Response): Promise<any> {
        try {
            let regions = await ConnectionDataBase.query(handlerQuery['viewCitiesStation']);
            return Promise.resolve(handleMessage(response, 200, regions.rows));
        } catch (error) {
            Promise.reject(handleMessage(response, 404, 'Error'));
        }
    }

    // metodo para ver todas las ciudades con todos sus campos los cuales se listan en la tabla de ciudades
    async view(request: Request, response: Response): Promise<any> {
        try {
            let cities = await ConnectionDataBase.query(handlerQuery['viewCities']);
            return Promise.resolve(handleMessage(response, 200, cities.rows));
        } catch (error) {
            Promise.reject(handleMessage(response, 404, 'Error'));
        }
    }

    // metodo para ver la ciudad con todos sus campos los cuales se utilizaran cuando se vaya a modificar la cuidad
    async viewById(request: Request, response: Response): Promise<any> {
        try {
            const { id_ciudad } = request.params;
            let city = await ConnectionDataBase.query(handlerQuery.viewCity, [id_ciudad]);
            console.log(city.rows);
            if (city.rows.length === 0) {
                return Promise.resolve(handleMessage(response, 200, 'City doesn´t exist'));
            } else {
                return Promise.resolve(handleMessage(response, 200, city.rows));
            }
        } catch (error) {
            Promise.reject(handleMessage(response, 404, 'Error'));
        }
    }
}

// Se crea y exporta una constante que contiene los servicios de esta clase.
const cityService = new CityService();
export default cityService;