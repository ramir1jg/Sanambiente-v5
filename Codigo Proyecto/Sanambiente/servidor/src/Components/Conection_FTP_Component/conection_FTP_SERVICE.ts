/*Esta clase contiene la configuracion de los servicios del lado del servidor
 utilizados para la tabla Conectar por FTP */

const Client = require('ftp');
import { readFile, createWriteStream } from 'fs';
import { Request, Response } from 'express';
import { CONFIG_FTP, csvJSON } from '../../Hanldlers/Handle_FTP';
import ConnectionDataBase from '../../basedatos';
import handleMessage from '../../Hanldlers/Handle_Message';
import { handlerQuery } from '../../Hanldlers/Handle_Queries';

class ConnectionFTPService {

    //metodo para crear
    createFTP(request: Request, response: Response): void {
        const {ip_ftp, puerto_ftp, usuario_ftp, contrasena_ftp, id_plantilla, id_estacion, id_conexion} = request.body;
        let buildDataResult: any = { id_plantilla, id_estacion, id_conexion }
       let c = new Client();
        c.connect(CONFIG_FTP(ip_ftp, puerto_ftp, usuario_ftp, contrasena_ftp));
        c.list((err: any, list: any) => {
            if (err) throw err;
            c.get(list[0].name, (error: any, stream: any) => {
                if (err) throw err;
                else {
                    stream.once('close', function () { c.end(); });
                    stream.pipe(createWriteStream('C:/Users/admin/Downloads/data.cvc'));
                    readFile('C:/Users/admin/Downloads/data.cvc', "utf8", (err, data) => {
                        if (err) throw err;
                        let values = csvJSON(data)[0];
                        let valuesArray: Array<any> = [];
                        let count = 0;
                        for (let i = 1; i < values.length; i++) {
                            buildDataResult.fecha_dato_crudo = values[0];
                            if(values[i] !== '1' && values[i] !== '0' && values[i] !== '\r') {
                                valuesArray.push( [id_plantilla, id_estacion, id_conexion, (count++) ,values[i], values[1]]);
                            }
                        }
                        ConnectionDataBase.query(`SELECT * FROM plantillas WHERE id_plantilla=`+id_plantilla, (err: any, data: any) => {
                            if (err) throw err;
                                if(valuesArray.length-1 === data.rows.length) {   
                                    for (let i = 1; i < valuesArray.length; i++) {
                                        ConnectionDataBase.query(handlerQuery['insertDataFTP'],
                                        valuesArray[i], (err: any, data: any) => {
                                        if (err) throw err;
                                        });
                                    }
                                    return handleMessage(response, 200, 'Datos Guardados con exito');
                                } else {
                                    return handleMessage(response, 200, 'La cantidad de variables no corresponde a la plantilla')
                                }
                            });
                    })
                }
            });
        });
    }

    // metodo para ver todas las coneciones ftp con todos sus campos
    async viewFTPDATA(request: Request, response: Response) {
        try {
            let templates = await ConnectionDataBase.query(handlerQuery['viewConection']);
            return Promise.resolve(handleMessage(response, 200, templates.rows));
         } catch (error) {
             Promise.reject(handleMessage(response, 404, 'Error'));
         }
    }

}
// Se crea y exporta una constante que contiene los servicios de esta clase.
const connectionFTPService = new ConnectionFTPService();
export default connectionFTPService;