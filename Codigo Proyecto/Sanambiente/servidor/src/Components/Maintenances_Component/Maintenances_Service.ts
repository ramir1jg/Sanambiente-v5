/*Esta clase contiene la configuracion de los servicios del lado del servidor
 utilizados para la tabla Mantenimiento */
import BaseService from '../Base_Component/Base_Service';
import ConnectionDataBase from '../../basedatos';
import { handlerQuery } from '../../Hanldlers/Handle_Queries';
import { Request, Response } from 'express';
import handleMessage from '../../Hanldlers/Handle_Message';

// Se "llenan" los metodos abstractos creados en la clase BaseService.ts
class MaintenanceService implements BaseService<any> {

    //metodo para crear un mantenimiento
    async create(request: Request, response: Response): Promise<any> {
        try {
            let { id_estacion, id_parte, id_tipo_mantenimiento, id_periodicidad, nombre_funcionario, fecha_inicial, fecha_final, validacion_mantenimiento, novedad_mantenimiento } = request.body;
            await ConnectionDataBase.query(handlerQuery['createMaintenance'], [id_estacion, id_parte, id_tipo_mantenimiento, id_periodicidad, nombre_funcionario, fecha_inicial, fecha_final, validacion_mantenimiento, novedad_mantenimiento]);
            return Promise.resolve(handleMessage(response, 200, 'Create Maintenance'));
        } catch (error) {
            Promise.reject(handleMessage(response, 404, 'Error'));
        }
    }

    //metodo para actualizar el mantenimiento
    async update(request: Request, response: Response): Promise<any> {
        try {
            const { id_mantenimiento } = request.params;
            let { id_estacion, id_parte, id_tipo_mantenimiento, id_periodicidad, nombre_funcionario, fecha_inicial, fecha_final, validacion_mantenimiento, novedad_mantenimiento } = request.body;
            await ConnectionDataBase.query(handlerQuery['updateMaintenance'], [id_estacion, id_parte, id_tipo_mantenimiento, id_periodicidad, nombre_funcionario, fecha_inicial, fecha_final, validacion_mantenimiento, novedad_mantenimiento, id_mantenimiento]);
            return Promise.resolve(handleMessage(response, 200, 'Update Maintenance'))

        } catch (error) {
            Promise.reject(handleMessage(response, 404, 'Error'));
        }
    }

    // metodo para ver todos los mantenimientos
    async view(request: Request, response: Response): Promise<any> {
        try {
            let maintenances = await ConnectionDataBase.query(handlerQuery['viewMaintenances']);
            return Promise.resolve(handleMessage(response, 200, maintenances.rows));
        } catch (error) {
            Promise.reject(handleMessage(response, 404, 'Error'));
        }
    }

    // metodo para ver el mantenimiento con todos sus campos los cuales se utilizaran cuando se vaya a modificar el mantenimiento
    async viewById(request: Request, response: Response): Promise<any> {
        try {
            const { id_mantenimiento } = request.params;
            let maintenance = await ConnectionDataBase.query(handlerQuery.viewMaintenance, [id_mantenimiento]);
            console.log(maintenance.rows);
            if (maintenance.rows.length === 0) {
                return Promise.resolve(handleMessage(response, 200, 'Maintenance doesn´t exist'));
            } else {
                return Promise.resolve(handleMessage(response, 200, maintenance.rows));
            }
        } catch (error) {
            Promise.reject(handleMessage(response, 404, 'Error'));
        }
    }

}

// Se crea y exporta una constante que contiene los servicios de esta clase.
const maintenanceService = new MaintenanceService();
export default maintenanceService;