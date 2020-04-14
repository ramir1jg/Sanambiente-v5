/*Esta clase contiene la configuracion de los servicios del lado del servidor
 utilizados para la tabla periodicidad */

import BaseService from '../Base_Component/Base_Service';
import ConnectionDataBase from '../../basedatos';
import { handlerQuery } from '../../Hanldlers/Handle_Queries';
import { Request, Response } from 'express';
import handleMessage from '../../Hanldlers/Handle_Message';

// Se "llenan" los metodos abstractos creados en la clase BaseService.ts
class PeriodicityService implements BaseService<any> {

    //metodo para crear una nueva periodicidad
    async create(request: Request, response: Response): Promise<any> {
        try {
            let { tipo_periodicidad, observacion_periodicidad } = request.body;
            await ConnectionDataBase.query(handlerQuery['createPeriodicity'], [tipo_periodicidad, observacion_periodicidad]);
            return Promise.resolve(handleMessage(response, 200, 'Created Periodicity'));
        } catch (error) {
            Promise.reject(handleMessage(response, 404, 'Error'));
        }
    }

    // Actualizar periodicidad
    async update(request: Request, response: Response): Promise<any> {
        try {
            const { id_periodicidad } = request.params;
            let { tipo_periodicidad, observacion_periodicidad } = request.body;
            console.log(id_periodicidad, '\n', request.body)
            await ConnectionDataBase.query(handlerQuery['updatePeriodicity'], [tipo_periodicidad, observacion_periodicidad, id_periodicidad]);
            return Promise.resolve(handleMessage(response, 200, 'Update Periodicity'))

        } catch (error) {
            Promise.reject(handleMessage(response, 404, 'Error'));
        }
    }

    // metodo para ver todas las periodicidades con todos sus campos 
    async view(request: Request, response: Response): Promise<any> {
        try {
            let periodicities = await ConnectionDataBase.query(handlerQuery['viewPeriodicities']);
            return Promise.resolve(handleMessage(response, 200, periodicities.rows));
        } catch (error) {
            Promise.reject(handleMessage(response, 404, 'Error'));
        }
    }

    // metodo para ver la periodicidad con todos sus campos los cuales se utilizaran cuando se vaya a modificar la periodicidad
    async viewById(request: Request, response: Response): Promise<any> {
        try {
            const { id_periodicidad } = request.params;
            let periodicity = await ConnectionDataBase.query(handlerQuery.viewPeriodicity, [id_periodicidad]);
            if (periodicity.rows.length === 0) {
                return Promise.resolve(handleMessage(response, 200, 'Periodicity doesn´t exist'));
            } else {
                return Promise.resolve(handleMessage(response, 200, periodicity.rows));
            }
        } catch (error) {
            Promise.reject(handleMessage(response, 404, 'Error'));
        }
    }
    // metodo para ver solo los tipos de periodicidad en una lista desplegable. Lo utiliza la vista de mantenimiento
    async viewTypesPeriodicitiesMaintenance(request: Request, response: Response): Promise<any> {
        try {
            let periodicities = await ConnectionDataBase.query(handlerQuery['viewPeriodicitiesMaintenance']);
            return Promise.resolve(handleMessage(response, 200, periodicities.rows));
        } catch (error) {
            Promise.reject(handleMessage(response, 404, 'Error'));
        }
    }
}

// Se crea y exporta una constante que contiene los servicios de esta clase.
const periodicityService = new PeriodicityService();
export default periodicityService;