/*Esta clase contiene la configuracion de los servicios del lado del servidor
 utilizados para la tabla Base de tiempo */

import BaseService from '../Base_Component/Base_Service';
import ConnectionDataBase from '../../basedatos';
import { handlerQuery } from '../../Hanldlers/Handle_Queries';
import { Request, Response } from 'express';
import handleMessage from '../../Hanldlers/Handle_Message';

// Se "llenan" los metodos abstractos creados en la clase BaseService.ts
class TimeService implements BaseService<any> {

    //metodo para crear una base de tiempo
    async create(request: Request, response: Response): Promise<any> {
        try {
            let { nombre_tiempo, escala_tiempo, observacion_tiempo } = request.body;
            await ConnectionDataBase.query(handlerQuery['createTime'], [nombre_tiempo, escala_tiempo, observacion_tiempo]);
            return Promise.resolve(handleMessage(response, 200, 'Create Time'));
        } catch (error) {
            Promise.reject(handleMessage(response, 404, 'Error'));
        }
    }

    //metodo para actualizar una base de tiempo
    async update(request: Request, response: Response): Promise<any> {
        try {
            const { id_tiempo } = request.params;
            let { nombre_tiempo, escala_tiempo, observacion_tiempo } = request.body;
            await ConnectionDataBase.query(handlerQuery['updateTime'], [nombre_tiempo, escala_tiempo, observacion_tiempo, id_tiempo]);
            return Promise.resolve(handleMessage(response, 200, 'Update Time'))

        } catch (error) {
            Promise.reject(handleMessage(response, 404, 'Error'));
        }
    }

    // metodo para ver solo el nombre de los tiempos en una lista desplegable. La utiliza la vista de estacion
    async viewNameTimesStation(request: Request, response: Response): Promise<any> {
        try {
            let regions = await ConnectionDataBase.query(handlerQuery['viewTimesStation']);
            return Promise.resolve(handleMessage(response, 200, regions.rows));
        } catch (error) {
            Promise.reject(handleMessage(response, 404, 'Error'));
        }
    }

    // metodo para ver todas los tiempos con todos sus campos 
    async view(request: Request, response: Response): Promise<any> {
        try {
            let times = await ConnectionDataBase.query(handlerQuery['viewTimes']);
            return Promise.resolve(handleMessage(response, 200, times.rows));
        } catch (error) {
            Promise.reject(handleMessage(response, 404, 'Error'));
        }
    }

    // metodo para ver la Base de Tiempo con todos sus campos los cuales se utilizaran cuando se vaya a modificar la Base de Tiempo
    async viewById(request: Request, response: Response): Promise<any> {
        try {
            const { id_tiempo } = request.params;
            let time = await ConnectionDataBase.query(handlerQuery.viewTime, [id_tiempo]);
            console.log(time.rows);
            if (time.rows.length === 0) {
                return Promise.resolve(handleMessage(response, 200, 'Alert doesn´t exist'));
            } else {
                return Promise.resolve(handleMessage(response, 200, time.rows));
            }
        } catch (error) {
            Promise.reject(handleMessage(response, 404, 'Error'));
        }
    }
}

// Se crea y exporta una constante que contiene los servicios de esta clase.
const timesService = new TimeService();
export default timesService;