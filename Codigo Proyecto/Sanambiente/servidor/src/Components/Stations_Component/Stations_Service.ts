/*Esta clase contiene la configuracion de los servicios del lado del servidor
 utilizados para la tabla estacion */

import BaseService from '../Base_Component/Base_Service';
import ConnectionDataBase from '../../basedatos';
import { handlerQuery } from '../../Hanldlers/Handle_Queries';
import { Request, Response } from 'express';
import handleMessage from '../../Hanldlers/Handle_Message';

// Se "llenan" los metodos abstractos creados en la clase BaseService.ts
class StationService implements BaseService<any> {

    //metodo para crear una estacion
    async create(request: Request, response: Response): Promise<any> {
        try {
            let { nombre_estacion, serial_estacion, nombre_corto_estacion, id_categoria, id_tiempo, observacion_estacion, id_ciudad, latitud_estacion, longitud_estacion, elevacion_estacion, protocolo_estacion, id_gmt, id_region } = request.body;
            await ConnectionDataBase.query(handlerQuery['createStation'], [nombre_estacion, serial_estacion, nombre_corto_estacion, id_categoria, id_tiempo, observacion_estacion, id_ciudad, latitud_estacion, longitud_estacion, elevacion_estacion, protocolo_estacion, id_gmt, id_region]);
            return Promise.resolve(handleMessage(response, 200, 'Create station'));
        } catch (error) {
            Promise.reject(handleMessage(response, 404, 'Error al enviar la info'));
        }
    }

    // metodo para actualizar una estacion
    async update(request: Request, response: Response): Promise<any> {
        try {
            const { id_estacion } = request.params;
            let { nombre_estacion, serial_estacion, nombre_corto_estacion, id_categoria, id_tiempo, observacion_estacion, id_ciudad, latitud_estacion, longitud_estacion, elevacion_estacion, protocolo_estacion, id_gmt, id_region } = request.body;
            await ConnectionDataBase.query(handlerQuery['updateStation'], [nombre_estacion, serial_estacion, nombre_corto_estacion, id_categoria, id_tiempo, observacion_estacion, id_ciudad, latitud_estacion, longitud_estacion, elevacion_estacion, protocolo_estacion, id_gmt, id_region, id_estacion]);
            return Promise.resolve(handleMessage(response, 200, 'Update station'))

        } catch (error) {
            Promise.reject(handleMessage(response, 404, 'Error'));
        }
    }

    // metodo para ver todas las estaciones
    async view(request: Request, response: Response): Promise<any> {
        try {
            let stations = await ConnectionDataBase.query(handlerQuery['viewStations']);
            return Promise.resolve(handleMessage(response, 200, stations.rows));
        } catch (error) {
            Promise.reject(handleMessage(response, 404, 'Error'));
        }
    }

    // metodo para consultar si existe una organizacion para su posterior actualizacion
    async viewById(request: Request, response: Response): Promise<any> {
        try {
            const { id_estacion } = request.params;
            let station = await ConnectionDataBase.query(handlerQuery.viewStation, [id_estacion]);
            console.log(station.rows);
            if (station.rows.length === 0) {
                return Promise.resolve(handleMessage(response, 200, 'station doesn´t exist'));
            } else {
                return Promise.resolve(handleMessage(response, 200, station.rows));
            }
        } catch (error) {
            Promise.reject(handleMessage(response, 404, 'Error'));
        }
    }

    // metodo para ver solo el nombre de las Estaciones en una lista desplegable. Lo utiliza la vista de rango
    async viewNameStationsRank(request: Request, response: Response): Promise<any> {
        try {
            let stations = await ConnectionDataBase.query(handlerQuery['viewStationsRank']);
            return Promise.resolve(handleMessage(response, 200, stations.rows));
        } catch (error) {
            Promise.reject(handleMessage(response, 404, 'Error'));
        }
    }

    // metodo para ver solo el nombre de las Estaciones en una lista desplegable. Lo utiliza la vista de mantenimiento
    async viewNameStationsMaintenance(request: Request, response: Response): Promise<any> {
        try {
            let stations = await ConnectionDataBase.query(handlerQuery['viewStationsMaintenance']);
            return Promise.resolve(handleMessage(response, 200, stations.rows));
        } catch (error) {
            Promise.reject(handleMessage(response, 404, 'Error'));
        }
    }

}

// Se crea y exporta una constante que contiene los servicios de esta clase.
const stationService = new StationService();
export default stationService;