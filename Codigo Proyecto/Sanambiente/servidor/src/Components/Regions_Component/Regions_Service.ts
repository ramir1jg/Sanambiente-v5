/*Esta clase contiene la configuracion de los servicios del lado del servidor
 utilizados para la tabla regiones */

import BaseService from '../Base_Component/Base_Service';
import ConnectionDataBase from '../../basedatos';
import { handlerQuery } from '../../Hanldlers/Handle_Queries';
import { Request, Response } from 'express';
import handleMessage from '../../Hanldlers/Handle_Message';

// Se "llenan" los metodos abstractos creados en la clase BaseService.ts
class RegionService implements BaseService<any> {

    //metodo para crear una region
    async create(request: Request, response: Response): Promise<any> {
        try {
            let { nombre_region, observacion_region } = request.body;
            await ConnectionDataBase.query(handlerQuery['createRegion'], [nombre_region, observacion_region]);
            return Promise.resolve(handleMessage(response, 200, 'Created Region'));
        } catch (error) {
            Promise.reject(handleMessage(response, 404, 'Error'));
        }
    }

    // Actualizar region
    async update(request: Request, response: Response): Promise<any> {
        try {
            const { id_region } = request.params;
            let { nombre_region, observacion_region } = request.body;
            console.log(id_region, '\n', request.body)
            await ConnectionDataBase.query(handlerQuery['updateRegion'], [nombre_region, observacion_region, id_region]);
            return Promise.resolve(handleMessage(response, 200, 'Update Region'))

        } catch (error) {
            Promise.reject(handleMessage(response, 404, 'Error'));
        }
    }

    // metodo para ver solo el nombre de las regiones en una lista desplegable. Lo utiliza la vista de ciudad
    async viewNameRegionsCity(request: Request, response: Response): Promise<any> {
        try {
            let regions = await ConnectionDataBase.query(handlerQuery['viewRegionsCity']);
            return Promise.resolve(handleMessage(response, 200, regions.rows));
        } catch (error) {
            Promise.reject(handleMessage(response, 404, 'Error'));
        }
    }

    // metodo para ver solo el nombre de las regiones en una lista desplegable. Lo utiliza la vista de estacion
    async viewNameRegionsStation(request: Request, response: Response): Promise<any> {
        try {
            let regions = await ConnectionDataBase.query(handlerQuery['viewRegionsStation']);
            return Promise.resolve(handleMessage(response, 200, regions.rows));
        } catch (error) {
            Promise.reject(handleMessage(response, 404, 'Error'));
        }
    }

    // metodo para ver todas las regiones con todos sus campos 
    async view(request: Request, response: Response): Promise<any> {
        try {
            let regions = await ConnectionDataBase.query(handlerQuery['viewRegions']);
            return Promise.resolve(handleMessage(response, 200, regions.rows));
        } catch (error) {
            Promise.reject(handleMessage(response, 404, 'Error'));
        }
    }

    // metodo para ver la Region con todos sus campos los cuales se utilizaran cuando se vaya a modificar la Region
    async viewById(request: Request, response: Response): Promise<any> {
        try {
            const { id_region } = request.params;
            let region = await ConnectionDataBase.query(handlerQuery.viewRegion, [id_region]);
            if (region.rows.length === 0) {
                return Promise.resolve(handleMessage(response, 200, 'Region doesn´t exist'));
            } else {
                return Promise.resolve(handleMessage(response, 200, region.rows));
            }
        } catch (error) {
            Promise.reject(handleMessage(response, 404, 'Error'));
        }
    }
}

// Se crea y exporta una constante que contiene los servicios de esta clase.
const regionService = new RegionService();
export default regionService;