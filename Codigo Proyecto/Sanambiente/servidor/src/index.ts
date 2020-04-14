// Clase que contiene los metodos de configuracion inical y las rutas.

// Se importan los componentes requeridos para crear esta clase.
import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import citiesRoutes from './Components/Cities_Component/Cities_Route';
import regionsRoutes from './Components/Regions_Component/Regions_Route';
import categoriesRutes from './Components/Categories_Component/Categories_Rute';
import alertsRutes from './Components/Alerts_Component/Alerts_Route';
import ranksRoutes from './Components/Ranks_Component/Ranks_Route';
import organizationsRoutes from './Components/Organizations_Component/Organizations_Route';
import timesRoutes from './Components/Times_Component/Times_Route';
import stationsRoutes from './Components/Stations_Component/Stations_Route';
import gmtRoutes from './Components/Gmt_Component/Gmt_Route';
import maintenancesRoutes from './Components/Maintenances_Component/Maintenances_Route';
import maintenancesTypeRoutes from './Components/Maintenances_Type_Component/Maintenances_Type_Route';
import periodicitiesRoutes from './Components/Periodicities_Component/Periodicities_Route';
import partsRoutes from './Components/Parts_Component/Parts_Route';
import VariablesRoute from './Components/Variables_Componet/Variables_Route';
import TemplateRoute from './Components/Template_Component/Template_Route';
import connectionFTPRouter from './Components/Conection_FTP_Component/conection_FTP_ROUTES';
// Clase Servidor cuyos metodos se utilizaran más a adelante
class Servidor {
    public app: Application;

    // Constructor en el cual se instancian los metodos a ejecutar
    constructor() {
        this.app = express();
        this.configuracion();
        this.rutas();
    }

    //Metodo en el cual se establecen los parametros logicos que necesita el servidor
    configuracion(): void {
        this.app.set('port', process.env.port || 3000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));
    }

    //Metodo en el cual se establecen las rutas iniciales del lado del servidor de cada tabla parametro
    rutas(): void {
        this.app.use('/api/city', citiesRoutes);
        this.app.use('/api/region', regionsRoutes);
        this.app.use('/api/category', categoriesRutes);
        this.app.use('/api/alert', alertsRutes);
        this.app.use('/api/rank', ranksRoutes);
        this.app.use('/api/organization', organizationsRoutes);
        this.app.use('/api/time', timesRoutes);
        this.app.use('/api/station', stationsRoutes);
        this.app.use('/api/gmt', gmtRoutes);
        this.app.use('/api/maintenance', maintenancesRoutes);
        this.app.use('/api/maintenance_type', maintenancesTypeRoutes);
        this.app.use('/api/periodicity', periodicitiesRoutes);
        this.app.use('/api/part', partsRoutes);
        this.app.use('/api/variable', VariablesRoute);
        this.app.use('/api/template', TemplateRoute);
        this.app.use('/api/ftp', connectionFTPRouter)
    }

    // Metodo que identifica el puerto usado para la conexion en el servidor
    iniciar(): void {
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
