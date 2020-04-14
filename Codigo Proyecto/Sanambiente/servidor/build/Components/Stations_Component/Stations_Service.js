"use strict";
/*Esta clase contiene la configuracion de los servicios del lado del servidor
 utilizados para la tabla estacion */
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
class StationService {
    //metodo para crear una estacion
    create(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let { nombre_estacion, serial_estacion, nombre_corto_estacion, id_categoria, id_tiempo, observacion_estacion, id_ciudad, latitud_estacion, longitud_estacion, elevacion_estacion, protocolo_estacion, id_gmt, id_region } = request.body;
                yield basedatos_1.default.query(Handle_Queries_1.handlerQuery['createStation'], [nombre_estacion, serial_estacion, nombre_corto_estacion, id_categoria, id_tiempo, observacion_estacion, id_ciudad, latitud_estacion, longitud_estacion, elevacion_estacion, protocolo_estacion, id_gmt, id_region]);
                return Promise.resolve(Handle_Message_1.default(response, 200, 'Create station'));
            }
            catch (error) {
                Promise.reject(Handle_Message_1.default(response, 404, 'Error al enviar la info'));
            }
        });
    }
    // metodo para actualizar una estacion
    update(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id_estacion } = request.params;
                let { nombre_estacion, serial_estacion, nombre_corto_estacion, id_categoria, id_tiempo, observacion_estacion, id_ciudad, latitud_estacion, longitud_estacion, elevacion_estacion, protocolo_estacion, id_gmt, id_region } = request.body;
                yield basedatos_1.default.query(Handle_Queries_1.handlerQuery['updateStation'], [nombre_estacion, serial_estacion, nombre_corto_estacion, id_categoria, id_tiempo, observacion_estacion, id_ciudad, latitud_estacion, longitud_estacion, elevacion_estacion, protocolo_estacion, id_gmt, id_region, id_estacion]);
                return Promise.resolve(Handle_Message_1.default(response, 200, 'Update station'));
            }
            catch (error) {
                Promise.reject(Handle_Message_1.default(response, 404, 'Error'));
            }
        });
    }
    // metodo para ver todas las estaciones
    view(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let stations = yield basedatos_1.default.query(Handle_Queries_1.handlerQuery['viewStations']);
                return Promise.resolve(Handle_Message_1.default(response, 200, stations.rows));
            }
            catch (error) {
                Promise.reject(Handle_Message_1.default(response, 404, 'Error'));
            }
        });
    }
    // metodo para consultar si existe una organizacion para su posterior actualizacion
    viewById(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id_estacion } = request.params;
                let station = yield basedatos_1.default.query(Handle_Queries_1.handlerQuery.viewStation, [id_estacion]);
                console.log(station.rows);
                if (station.rows.length === 0) {
                    return Promise.resolve(Handle_Message_1.default(response, 200, 'station doesn´t exist'));
                }
                else {
                    return Promise.resolve(Handle_Message_1.default(response, 200, station.rows));
                }
            }
            catch (error) {
                Promise.reject(Handle_Message_1.default(response, 404, 'Error'));
            }
        });
    }
    // metodo para ver solo el nombre de las Estaciones en una lista desplegable. Lo utiliza la vista de rango
    viewNameStationsRank(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let stations = yield basedatos_1.default.query(Handle_Queries_1.handlerQuery['viewStationsRank']);
                return Promise.resolve(Handle_Message_1.default(response, 200, stations.rows));
            }
            catch (error) {
                Promise.reject(Handle_Message_1.default(response, 404, 'Error'));
            }
        });
    }
    // metodo para ver solo el nombre de las Estaciones en una lista desplegable. Lo utiliza la vista de mantenimiento
    viewNameStationsMaintenance(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let stations = yield basedatos_1.default.query(Handle_Queries_1.handlerQuery['viewStationsMaintenance']);
                return Promise.resolve(Handle_Message_1.default(response, 200, stations.rows));
            }
            catch (error) {
                Promise.reject(Handle_Message_1.default(response, 404, 'Error'));
            }
        });
    }
}
// Se crea y exporta una constante que contiene los servicios de esta clase.
const stationService = new StationService();
exports.default = stationService;
