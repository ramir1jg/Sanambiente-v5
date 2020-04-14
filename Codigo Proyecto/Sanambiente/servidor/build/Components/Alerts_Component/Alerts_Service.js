"use strict";
/*Esta clase contiene la configuracion de los servicios del lado del servidor
 utilizados para la tabla Alerta */
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
const basedatos_1 = __importDefault(require("../../basedatos"));
const Handle_Queries_1 = require("../../Hanldlers/Handle_Queries");
const Handle_Message_1 = __importDefault(require("../../Hanldlers/Handle_Message"));
// Se "llenan" los metodos abstractos creados en la clase BaseService.ts
class AlertService {
    //metodo para crear una alerta
    create(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let { nombre_alerta, email_alerta, contrasena_alerta, servidorsmtp_alerta, puertosmtp_alerta, seguridad_alerta, autenticacion_alerta, emailpara_alerta, asunto_alerta, emailde_alerta, observacion_alerta } = request.body;
                yield basedatos_1.default.query(Handle_Queries_1.handlerQuery['createAlert'], [nombre_alerta, email_alerta, contrasena_alerta, servidorsmtp_alerta, puertosmtp_alerta, seguridad_alerta, autenticacion_alerta, emailpara_alerta, asunto_alerta, emailde_alerta, observacion_alerta]);
                return Promise.resolve(Handle_Message_1.default(response, 200, 'Create alert'));
            }
            catch (error) {
                Promise.reject(Handle_Message_1.default(response, 404, 'Error'));
            }
        });
    }
    //metodo para actualizar alerta
    update(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id_alerta } = request.params;
                let { nombre_alerta, email_alerta, contrasena_alerta, servidorsmtp_alerta, puertosmtp_alerta, seguridad_alerta, autenticacion_alerta, emailpara_alerta, asunto_alerta, emailde_alerta, observacion_alerta } = request.body;
                yield basedatos_1.default.query(Handle_Queries_1.handlerQuery['updateAlert'], [nombre_alerta, email_alerta, contrasena_alerta, servidorsmtp_alerta, puertosmtp_alerta, seguridad_alerta, autenticacion_alerta, emailpara_alerta, asunto_alerta, emailde_alerta, observacion_alerta, id_alerta]);
                return Promise.resolve(Handle_Message_1.default(response, 200, 'Update alert'));
            }
            catch (error) {
                Promise.reject(Handle_Message_1.default(response, 404, 'Error'));
            }
        });
    }
    // metodo para ver todas las Alertas con todos sus campos los cuales se listan en la tabla de Alerta
    view(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let alerts = yield basedatos_1.default.query(Handle_Queries_1.handlerQuery['viewAlerts']);
                return Promise.resolve(Handle_Message_1.default(response, 200, alerts.rows));
            }
            catch (error) {
                Promise.reject(Handle_Message_1.default(response, 404, 'Error'));
            }
        });
    }
    // metodo para ver la Alerta con todos sus campos los cuales se utilizaran cuando se vaya a modificar la Alerta
    viewById(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id_alerta } = request.params;
                let alert = yield basedatos_1.default.query(Handle_Queries_1.handlerQuery.viewAlert, [id_alerta]);
                console.log(alert.rows);
                if (alert.rows.length === 0) {
                    return Promise.resolve(Handle_Message_1.default(response, 200, 'Alert doesn´t exist'));
                }
                else {
                    return Promise.resolve(Handle_Message_1.default(response, 200, alert.rows));
                }
            }
            catch (error) {
                Promise.reject(Handle_Message_1.default(response, 404, 'Error'));
            }
        });
    }
}
// Se crea y exporta una constante que contiene los servicios de esta clase.
const alertService = new AlertService();
exports.default = alertService;
