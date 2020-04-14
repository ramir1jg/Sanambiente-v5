/*Esta clase contiene la configuracion de los servicios del lado del servidor
 utilizados para la tabla Variables */

import BaseService from '../Base_Component/Base_Service';
import ConnectionDataBase from '../../basedatos';
import { handlerQuery } from '../../Hanldlers/Handle_Queries';
import { Request, Response } from 'express';
import handleMessage from '../../Hanldlers/Handle_Message';

// Se "llenan" los metodos abstractos creados en la clase BaseService.ts
class VariableService implements BaseService<any> {

    //metodo para crear una variable
    async create(request: Request, response: Response): Promise<any> {
        try {
            let { nombre_variable, observacion_variable } = request.body;
            await ConnectionDataBase.query(handlerQuery['createVariable'], [nombre_variable, observacion_variable]);
            return Promise.resolve(handleMessage(response, 200, 'Created Variable'));
        } catch (error) {
            Promise.reject(handleMessage(response, 404, 'Error'));
        }
    }

    // Actualizar variable
    async update(request: Request, response: Response): Promise<any> {
        try {
            const { id_variable } = request.params;
            let { nombre_variable, observacion_variable } = request.body;
            await ConnectionDataBase.query(handlerQuery['updateVariable'], [nombre_variable, observacion_variable, id_variable]);
            return Promise.resolve(handleMessage(response, 200, 'Update Variable'))

        } catch (error) {
            Promise.reject(handleMessage(response, 404, 'Error'));
        }
    }

    // metodo para ver todas las Variable con todos sus campos 
    async view(request: Request, response: Response): Promise<any> {
        try {
            let variables = await ConnectionDataBase.query(handlerQuery['viewVariables']);
            return Promise.resolve(handleMessage(response, 200, variables.rows));
        } catch (error) {
            Promise.reject(handleMessage(response, 404, 'Error'));
        }
    }
    // metodo para ver la Variable con todos sus campos los cuales se utilizaran cuando se vaya a modificar la Variable
    async viewById(request: Request, response: Response): Promise<any> {
        try {
            const { id_variable } = request.params;
            let variable = await ConnectionDataBase.query(handlerQuery.viewVariable, [id_variable]);
            if (variable.rows.length === 0) {
                return Promise.resolve(handleMessage(response, 200, 'Variable doesn´t exist'));
            } else {
                return Promise.resolve(handleMessage(response, 200, variable.rows));
            }
        } catch (error) {
            Promise.reject(handleMessage(response, 404, 'Error'));
        }
    }
}

// Se crea y exporta una constante que contiene los servicios de esta clase.
const variableService = new VariableService();
export default variableService;
