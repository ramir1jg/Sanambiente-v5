/*Esta clase contiene la configuracion de los servicios del lado del servidor
 utilizados para la tabla de Rangos */
import BaseService from '../Base_Component/Base_Service';
import ConnectionDataBase from '../../basedatos';
import { handlerQuery } from '../../Hanldlers/Handle_Queries';
import { Request, Response } from 'express';
import handleMessage from '../../Hanldlers/Handle_Message';

// Se "llenan" los metodos abstractos creados en la clase BaseService.ts
class RankService implements BaseService<any> {

    //metodo para crear un Rango
    async create(request: Request, response: Response): Promise<any> {
        try {
            let { nombre_rango, valor_minimo, valor_maximo, id_estacion, observacion_rango } = request.body;
            await ConnectionDataBase.query(handlerQuery['createRank'], [nombre_rango, valor_minimo, valor_maximo, id_estacion, observacion_rango]);
            return Promise.resolve(handleMessage(response, 200, 'Create Rank'));
        } catch (error) {
            Promise.reject(handleMessage(response, 404, 'Error'));
        }
    }

    // metodo para actualizar el Rango 
    async update(request: Request, response: Response): Promise<any> {
        try {
            const { id_rango } = request.params;
            let { nombre_rango, valor_minimo, valor_maximo, id_estacion, observacion_rango } = request.body;
            await ConnectionDataBase.query(handlerQuery['updateRank'], [nombre_rango, valor_minimo, valor_maximo, id_estacion, observacion_rango, id_rango]);
            return Promise.resolve(handleMessage(response, 200, 'Update Rank'))

        } catch (error) {
            Promise.reject(handleMessage(response, 404, 'Error'));
        }
    }

    // metodo para ver todos los Rangos
    async view(request: Request, response: Response): Promise<any> {
        try {
            let stations = await ConnectionDataBase.query(handlerQuery['viewRanks']);
            return Promise.resolve(handleMessage(response, 200, stations.rows));
        } catch (error) {
            Promise.reject(handleMessage(response, 404, 'Error'));
        }
    }

    // metodo para consultar si exite un Rango 
    async viewById(request: Request, response: Response): Promise<any> {
        try {
            const { id_rango } = request.params;
            let rank = await ConnectionDataBase.query(handlerQuery.viewRank, [id_rango]);
            if (rank.rows.length === 0) {
                return Promise.resolve(handleMessage(response, 200, 'Rank doesn´t exist'));
            } else {
                return Promise.resolve(handleMessage(response, 200, rank.rows));
            }
        } catch (error) {
            Promise.reject(handleMessage(response, 404, 'Error'));
        }
    }
}

// Se crea y exporta una constante que contiene los servicios de esta clase.
const rankService = new RankService();
export default rankService;