"use strict";
/*Esta clase contiene la configuracion de los servicios del lado del servidor
 utilizados para la tabla Base de tiempo */
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
class TimeService {
    //metodo para crear una base de tiempo
    create(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let { nombre_tiempo, escala_tiempo, observacion_tiempo } = request.body;
                yield basedatos_1.default.query(Handle_Queries_1.handlerQuery['createTime'], [nombre_tiempo, escala_tiempo, observacion_tiempo]);
                return Promise.resolve(Handle_Message_1.default(response, 200, 'Create Time'));
            }
            catch (error) {
                Promise.reject(Handle_Message_1.default(response, 404, 'Error'));
            }
        });
    }
    //metodo para actualizar una base de tiempo
    update(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id_tiempo } = request.params;
                let { nombre_tiempo, escala_tiempo, observacion_tiempo } = request.body;
                yield basedatos_1.default.query(Handle_Queries_1.handlerQuery['updateTime'], [nombre_tiempo, escala_tiempo, observacion_tiempo, id_tiempo]);
                return Promise.resolve(Handle_Message_1.default(response, 200, 'Update Time'));
            }
            catch (error) {
                Promise.reject(Handle_Message_1.default(response, 404, 'Error'));
            }
        });
    }
    // metodo para ver solo el nombre de los tiempos en una lista desplegable. La utiliza la vista de estacion
    viewNameTimesStation(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let regions = yield basedatos_1.default.query(Handle_Queries_1.handlerQuery['viewTimesStation']);
                return Promise.resolve(Handle_Message_1.default(response, 200, regions.rows));
            }
            catch (error) {
                Promise.reject(Handle_Message_1.default(response, 404, 'Error'));
            }
        });
    }
    // metodo para ver todas los tiempos con todos sus campos 
    view(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let times = yield basedatos_1.default.query(Handle_Queries_1.handlerQuery['viewTimes']);
                return Promise.resolve(Handle_Message_1.default(response, 200, times.rows));
            }
            catch (error) {
                Promise.reject(Handle_Message_1.default(response, 404, 'Error'));
            }
        });
    }
    // metodo para ver la Base de Tiempo con todos sus campos los cuales se utilizaran cuando se vaya a modificar la Base de Tiempo
    viewById(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id_tiempo } = request.params;
                let time = yield basedatos_1.default.query(Handle_Queries_1.handlerQuery.viewTime, [id_tiempo]);
                console.log(time.rows);
                if (time.rows.length === 0) {
                    return Promise.resolve(Handle_Message_1.default(response, 200, 'Alert doesn´t exist'));
                }
                else {
                    return Promise.resolve(Handle_Message_1.default(response, 200, time.rows));
                }
            }
            catch (error) {
                Promise.reject(Handle_Message_1.default(response, 404, 'Error'));
            }
        });
    }
}
// Se crea y exporta una constante que contiene los servicios de esta clase.
const timesService = new TimeService();
exports.default = timesService;
