"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Client = require('ftp');
const fs_1 = require("fs");
const Handle_FTP_1 = require("../../Hanldlers/Handle_FTP");
const basedatos_1 = __importDefault(require("../../basedatos"));
const Handle_Message_1 = __importDefault(require("../../Hanldlers/Handle_Message"));
const Handle_Queries_1 = require("../../Hanldlers/Handle_Queries");
class ConnectionFTPService {
    createFTP(request, response) {
        const { ip_ftp, puerto_ftp, usuario_ftp, contrasena_ftp, id_plantilla, id_estacion, id_conexion } = request.body;
        let buildDataResult = { id_plantilla, id_estacion, id_conexion };
        let c = new Client();
        c.connect(Handle_FTP_1.CONFIG_FTP(ip_ftp, puerto_ftp, usuario_ftp, contrasena_ftp));
        c.list((err, list) => {
            if (err)
                throw err;
            c.get(list[0].name, (error, stream) => {
                if (err)
                    throw err;
                else {
                    stream.once('close', function () { c.end(); });
                    stream.pipe(fs_1.createWriteStream('C:/Users/admin/Downloads/data.cvc'));
                    fs_1.readFile('C:/Users/admin/Downloads/data.cvc', "utf8", (err, data) => {
                        if (err)
                            throw err;
                        let values = Handle_FTP_1.csvJSON(data)[0];
                        let valuesArray = [];
                        let count = 0;
                        for (let i = 1; i < values.length; i++) {
                            buildDataResult.fecha_dato_crudo = values[0];
                            if (values[i] !== '1' && values[i] !== '0' && values[i] !== '\r') {
                                valuesArray.push([id_plantilla, id_estacion, id_conexion, (count++), values[i], values[1]]);
                            }
                        }
                        basedatos_1.default.query(`SELECT * FROM plantillas WHERE id_plantilla=` + id_plantilla, (err, data) => {
                            if (err)
                                throw err;
                            if (valuesArray.length - 1 === data.rows.length) {
                                for (let i = 1; i < valuesArray.length; i++) {
                                    basedatos_1.default.query(Handle_Queries_1.handlerQuery['insertDataFTP'], valuesArray[i], (err, data) => {
                                        if (err)
                                            throw err;
                                    });
                                }
                                return Handle_Message_1.default(response, 200, 'Datos Guardados con exito');
                            }
                            else {
                                return Handle_Message_1.default(response, 200, 'La cantidad de variables no corresponde a la plantilla');
                            }
                        });
                    });
                }
            });
        });
    }
    viewFTPDATA(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let templates = yield basedatos_1.default.query(Handle_Queries_1.handlerQuery['viewConection']);
                return Promise.resolve(Handle_Message_1.default(response, 200, templates.rows));
            }
            catch (error) {
                Promise.reject(Handle_Message_1.default(response, 404, 'Error'));
            }
        });
    }
}
const connectionFTPService = new ConnectionFTPService();
exports.default = connectionFTPService;
