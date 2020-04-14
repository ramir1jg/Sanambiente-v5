"use strict";
// Clase que contiene los metodos de configuracion inical y las rutas.
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Se importan los componentes requeridos para crear esta clase.
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const Cities_Route_1 = __importDefault(require("./Components/Cities_Component/Cities_Route"));
const Regions_Route_1 = __importDefault(require("./Components/Regions_Component/Regions_Route"));
const Categories_Rute_1 = __importDefault(require("./Components/Categories_Component/Categories_Rute"));
const Alerts_Route_1 = __importDefault(require("./Components/Alerts_Component/Alerts_Route"));
const Ranks_Route_1 = __importDefault(require("./Components/Ranks_Component/Ranks_Route"));
const Organizations_Route_1 = __importDefault(require("./Components/Organizations_Component/Organizations_Route"));
const Times_Route_1 = __importDefault(require("./Components/Times_Component/Times_Route"));
const Stations_Route_1 = __importDefault(require("./Components/Stations_Component/Stations_Route"));
const Gmt_Route_1 = __importDefault(require("./Components/Gmt_Component/Gmt_Route"));
const Maintenances_Route_1 = __importDefault(require("./Components/Maintenances_Component/Maintenances_Route"));
const Maintenances_Type_Route_1 = __importDefault(require("./Components/Maintenances_Type_Component/Maintenances_Type_Route"));
const Periodicities_Route_1 = __importDefault(require("./Components/Periodicities_Component/Periodicities_Route"));
const Parts_Route_1 = __importDefault(require("./Components/Parts_Component/Parts_Route"));
const Variables_Route_1 = __importDefault(require("./Components/Variables_Componet/Variables_Route"));
const Template_Route_1 = __importDefault(require("./Components/Template_Component/Template_Route"));
const conection_FTP_ROUTES_1 = __importDefault(require("./Components/Conection_FTP_Component/conection_FTP_ROUTES"));
// Clase Servidor cuyos metodos se utilizaran más a adelante
class Servidor {
    // Constructor en el cual se instancian los metodos a ejecutar
    constructor() {
        this.app = express_1.default();
        this.configuracion();
        this.rutas();
    }
    //Metodo en el cual se establecen los parametros logicos que necesita el servidor
    configuracion() {
        this.app.set('port', process.env.port || 3000);
        this.app.use(morgan_1.default('dev'));
        this.app.use(cors_1.default());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    //Metodo en el cual se establecen las rutas iniciales del lado del servidor de cada tabla parametro
    rutas() {
        this.app.use('/api/city', Cities_Route_1.default);
        this.app.use('/api/region', Regions_Route_1.default);
        this.app.use('/api/category', Categories_Rute_1.default);
        this.app.use('/api/alert', Alerts_Route_1.default);
        this.app.use('/api/rank', Ranks_Route_1.default);
        this.app.use('/api/organization', Organizations_Route_1.default);
        this.app.use('/api/time', Times_Route_1.default);
        this.app.use('/api/station', Stations_Route_1.default);
        this.app.use('/api/gmt', Gmt_Route_1.default);
        this.app.use('/api/maintenance', Maintenances_Route_1.default);
        this.app.use('/api/maintenance_type', Maintenances_Type_Route_1.default);
        this.app.use('/api/periodicity', Periodicities_Route_1.default);
        this.app.use('/api/part', Parts_Route_1.default);
        this.app.use('/api/variable', Variables_Route_1.default);
        this.app.use('/api/template', Template_Route_1.default);
        this.app.use('/api/ftp', conection_FTP_ROUTES_1.default);
    }
    // Metodo que identifica el puerto usado para la conexion en el servidor
    iniciar() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Servidor en puerto ', this.app.get('port'));
        });
    }
}
/* Se crea una constante de tipo Servidor, la cual almacenara los metodos contenidos de esta clase y los
cuales seran utilizados por otras clases.*/
const servidor = new Servidor();
// Se ejecuta el servidor
servidor.iniciar();
