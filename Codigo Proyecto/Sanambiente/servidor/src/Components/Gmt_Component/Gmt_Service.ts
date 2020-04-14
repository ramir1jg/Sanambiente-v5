/*Esta clase contiene la configuracion de los servicios del lado del servidor
 utilizados para la tabla gmt */

import BaseService from '../Base_Component/Base_Service';
import ConnectionDataBase from '../../basedatos';
import { handlerQuery } from '../../Hanldlers/Handle_Queries';
import { Request, Response } from 'express';
import handleMessage from '../../Hanldlers/Handle_Message';

// Se "llenan" los metodos abstractos creados en la clase BaseService.ts
class GmtService implements BaseService<any> {

    //metodo para crear un gmt
    async create(request: Request, response: Response): Promise<any> {
        try {
            let { nombre_gmt, observacion_gmt } = request.body;
            await ConnectionDataBase.query(handlerQuery['createGmt'], [nombre_gmt, observacion_gmt]);
            return Promise.resolve(handleMessage(response, 200, 'Create gmt'));
        } catch (error) {
            Promise.reject(handleMessage(response, 404, 'Error'));
        }
    }

    //metodo para actualizar un gmt
    async update(request: Request, response: Response): Promise<any> {
        try {
            const { id_gmt } = request.params;
            let { nombre_gmt, observacion_gmt } = request.body;
            await ConnectionDataBase.query(handlerQuery['updateGmt'], [nombre_gmt, observacion_gmt, id_gmt]);
            return Promise.resolve(handleMessage(response, 200, 'Update gmt'))
        } catch (error) {
            Promise.reject(handleMessage(response, 404, 'Error'));
        }
    }

    // metodo para ver solo el nombre de los gmt en una lista desplegable
    async viewNameGmtStation(request: Request, response: Response): Promise<any> {
        try {
            let regions = await ConnectionDataBase.query(handlerQuery['viewGmtStation']);
            return Promise.resolve(handleMessage(response, 200, regions.rows));
        } catch (error) {
            Promise.reject(handleMessage(response, 404, 'Error'));
        }
    }

    // metodo para ver todas los gmt con todos sus campos
    async view(_: Request, response: Response): Promise<any> {
        try {
            let gmt = await ConnectionDataBase.query(handlerQuery['viewGmts']);
            return Promise.resolve(handleMessage(response, 200, gmt.rows));
        } catch (error) {
            Promise.reject(handleMessage(response, 404, 'Error'));
        }
    }

    // metodo para ver la Gmt con todos sus campos los cuales se utilizaran cuando se vaya a modificar gmt
    async viewById(request: Request, response: Response): Promise<any> {
        try {
            const { id_gmt } = request.params;
            let gmt = await ConnectionDataBase.query(handlerQuery.viewGmt, [id_gmt]);
            console.log(gmt.rows);
            if (gmt.rows.length === 0) {
                return Promise.resolve(handleMessage(response, 200, 'gmt doesn´t exist'));
            } else {
                return Promise.resolve(handleMessage(response, 200, gmt.rows));
            }
        } catch (error) {
            Promise.reject(handleMessage(response, 404, 'Error'));
        }
    }
}

// Se crea y exporta una constante que contiene los servicios de esta clase.
const gmtService = new GmtService();
export default gmtService;