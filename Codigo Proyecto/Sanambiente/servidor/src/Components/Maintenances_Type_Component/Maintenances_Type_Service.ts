/*Esta clase contiene la configuracion de los servicios del lado del servidor
 utilizados para la tabla tipo de Mantenimiento */
import BaseService from '../Base_Component/Base_Service';
import ConnectionDataBase from '../../basedatos';
import { handlerQuery } from '../../Hanldlers/Handle_Queries';
import { Request, Response } from 'express';
import handleMessage from '../../Hanldlers/Handle_Message';

// Se "llenan" los metodos abstractos creados en la clase BaseService.ts
class MaintenanceTypeService implements BaseService<any> {

    //metodo para crear un tipo de mantenimiento
    async create(request: Request, response: Response): Promise<any> {
        try {
            let { nombre_tipo_mantenimiento, observacion_tipo_mantenimiento } = request.body;
            await ConnectionDataBase.query(handlerQuery['createMaintenanceType'], [nombre_tipo_mantenimiento, observacion_tipo_mantenimiento]);
            return Promise.resolve(handleMessage(response, 200, 'Create Maintenance Type'));
        } catch (error) {
            Promise.reject(handleMessage(response, 404, 'Error'));
        }
    }

    //metodo para actualizar el tipo de mantenimiento
    async update(request: Request, response: Response): Promise<any> {
        try {
            const { id_tipo_mantenimiento } = request.params;
            let { nombre_tipo_mantenimiento, observacion_tipo_mantenimiento } = request.body;
            await ConnectionDataBase.query(handlerQuery['updateMaintenanceType'], [nombre_tipo_mantenimiento, observacion_tipo_mantenimiento, id_tipo_mantenimiento]);
            return Promise.resolve(handleMessage(response, 200, 'Update Maintenance Type'))

        } catch (error) {
            Promise.reject(handleMessage(response, 404, 'Error'));
        }
    }

    // metodo para ver todos los tipos de mantenimientos
    async view(request: Request, response: Response): Promise<any> {
        try {
            let maintenancesType = await ConnectionDataBase.query(handlerQuery['viewMaintenancesType']);
            return Promise.resolve(handleMessage(response, 200, maintenancesType.rows));
        } catch (error) {
            Promise.reject(handleMessage(response, 404, 'Error'));
        }
    }

    // metodo para ver el tipo de mantenimiento con todos sus campos los cuales se utilizaran cuando se vaya a modificar el tipo de mantenimiento
    async viewById(request: Request, response: Response): Promise<any> {
        try {
            const { id_tipo_mantenimiento } = request.params;
            let maintenanceType = await ConnectionDataBase.query(handlerQuery.viewMaintenanceType, [id_tipo_mantenimiento]);
            console.log(maintenanceType.rows);
            if (maintenanceType.rows.length === 0) {
                return Promise.resolve(handleMessage(response, 200, 'Maintenance type doesn´t exist'));
            } else {
                return Promise.resolve(handleMessage(response, 200, maintenanceType.rows));
            }
        } catch (error) {
            Promise.reject(handleMessage(response, 404, 'Error'));
        }
    }

    // metodo para ver solo el nombre de los tipos de mantenimiento en una lista desplegable. Lo utiliza la vista de mantenimiento
    async viewNameTypesMaintenance(request: Request, response: Response): Promise<any> {
        try {
            let typesMaintenance = await ConnectionDataBase.query(handlerQuery['viewTypesMaintenance']);
            return Promise.resolve(handleMessage(response, 200, typesMaintenance.rows));
        } catch (error) {
            Promise.reject(handleMessage(response, 404, 'Error'));
        }
    }
}

// Se crea y exporta una constante que contiene los servicios de esta clase.
const maintenanceTypeService = new MaintenanceTypeService();
export default maintenanceTypeService;