/*Esta clase contiene la configuracion de los servicios del lado del servidor
 utilizados para la tabla partes */

import BaseService from '../Base_Component/Base_Service';
import ConnectionDataBase from '../../basedatos';
import { handlerQuery } from '../../Hanldlers/Handle_Queries';
import { Request, Response } from 'express';
import handleMessage from '../../Hanldlers/Handle_Message';

// Se "llenan" los metodos abstractos creados en la clase BaseService.ts
class PartService implements BaseService<any> {

    //metodo para crear una nueva parte
    async create(request: Request, response: Response): Promise<any> {
        try {
            let { nombre_parte, codigo_catalogo, observacion_parte } = request.body;
            await ConnectionDataBase.query(handlerQuery['createPart'], [nombre_parte, codigo_catalogo, observacion_parte]);
            return Promise.resolve(handleMessage(response, 200, 'Created Part'));
        } catch (error) {
            Promise.reject(handleMessage(response, 404, 'Error'));
        }
    }

    // Actualizar parte
    async update(request: Request, response: Response): Promise<any> {
        try {
            const { id_parte } = request.params;
            let { nombre_parte, codigo_catalogo, observacion_parte } = request.body;
            console.log(id_parte, '\n', request.body)
            await ConnectionDataBase.query(handlerQuery['updatePart'], [nombre_parte, codigo_catalogo, observacion_parte, id_parte]);
            return Promise.resolve(handleMessage(response, 200, 'Update Periodicity'))

        } catch (error) {
            Promise.reject(handleMessage(response, 404, 'Error'));
        }
    }

    // metodo para ver todas las partes con todos sus campos 
    async view(request: Request, response: Response): Promise<any> {
        try {
            let parts = await ConnectionDataBase.query(handlerQuery['viewParts']);
            return Promise.resolve(handleMessage(response, 200, parts.rows));
        } catch (error) {
            Promise.reject(handleMessage(response, 404, 'Error'));
        }
    }

    // metodo para ver la parte con todos sus campos los cuales se utilizaran cuando se vaya a modificar la parte
    async viewById(request: Request, response: Response): Promise<any> {
        try {
            const { id_parte } = request.params;
            let part = await ConnectionDataBase.query(handlerQuery.viewPart, [id_parte]);
            if (part.rows.length === 0) {
                return Promise.resolve(handleMessage(response, 200, 'Part doesn´t exist'));
            } else {
                return Promise.resolve(handleMessage(response, 200, part.rows));
            }
        } catch (error) {
            Promise.reject(handleMessage(response, 404, 'Error'));
        }
    }

    // metodo para ver solo el nombre de las partes de las estaciones en una lista desplegable. Lo utiliza la vista de mantenimiento
    async viewNamePartsStations(request: Request, response: Response): Promise<any> {
        try {
            let parts = await ConnectionDataBase.query(handlerQuery['viewPartsStations']);
            return Promise.resolve(handleMessage(response, 200, parts.rows));
        } catch (error) {
            Promise.reject(handleMessage(response, 404, 'Error'));
        }
    }
}

// Se crea y exporta una constante que contiene los servicios de esta clase.
const partService = new PartService();
export default partService;