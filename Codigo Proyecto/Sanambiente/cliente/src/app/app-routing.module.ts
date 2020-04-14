/*Clase que contiene las rutas del lado del cliente que empleara cada vista */
import { NgModule } from '@angular/core'; // Angular lo importa por defecto
import { Routes, RouterModule } from '@angular/router'; // Componente de angular para manejar rutas

/* Importo los componentes a los cuales se direccionaran las rutas creadas para el home */
import { HomeComponent } from './Components/Body/Home/Home.component'; // Importo 

/* Importo los componentes a los cuales se direccionaran las rutas creadas para region */
import { RegionsBodyComponent } from './Components/body/Regions_Body/Regions_Body.component';
import { RegionsListComponent } from './Components/body/Regions_List/Regions_List.component';

/* Importo los componentes a los cuales se direccionaran las rutas creadas para ciudad */
import { CitiesBodyComponent } from './Components/body/Cities_Body/Cities_Body.component';
import { CitiesListComponent } from './Components/body/Cities_List/Cities_List.component';

/* Importo los componentes a los cuales se direccionaran las rutas creadas para Categorias */
import { CategoriesBodyComponent } from './Components/Body/Categories_Body/Categories_Body.component';
import { CategoriesListComponent } from './Components/Body/Categories_List/Categories_List.component';

import { RanksBodyComponent } from './Components/Body/Ranks_Body/Ranks_Body.component';
import { RanksListComponent } from './Components/Body/Ranks_List/Ranks_List.component';

/* Importo los componentes a los cuales se direccionaran las rutas creadas para organiacion */
import { OrganizationsListComponent } from './Components/Body/Organizations_List/Organizations_List.component';
import { OrganizationsBodyComponent } from './Components/Body/Organizations_Body/Organizations_Body.component';

/* Importo los componentes a los cuales se direccionaran las rutas creadas para alerta */
import { AlertsBodyComponent } from './Components/Body/Alerts_Body/Alerts_Body.component';
import { AlertsListComponent } from './Components/Body/Alerts_List/Alerts_List.component';

/* Importo los componentes a los cuales se direccionaran las rutas creadas para Base de Tiempo */
import { TimesBodyComponent } from './Components/Body/Times_Body/Times_Body.component';
import { TimesListComponent } from './Components/Body/Times_List/Times_List.component';

/* Importo los componentes a los cuales se direccionaran las rutas creadas para estaciones */
import { StationsBodyComponent } from './Components/Body/Stations_Body/Stations_Body.component';
import { StationsListComponent } from './Components/Body/Stations_List/Stations_List.component';

/* Importo los componentes a los cuales se direccionaran las rutas creadas para gmt */
import { GmtBodyComponent } from './Components/Body/Gmt_Body/Gmt_Body.component';
import { GmtListComponent } from './Components/Body/Gmt_List/Gmt_List.component';

/* Importo los componentes a los cuales se direccionaran las rutas creadas para mantenimiento */
import { MaintenancesBodyComponent } from './Components/Body/Maintenances_Body/Maintenances_Body.component';
import { MaintenancesListComponent } from './Components/Body/Maintenances_List/Maintenances_List.component';

/* Importo los componentes a los cuales se direccionaran las rutas creadas para tipos de mantenimiento */
import { MaintenanceTypeBodyComponent } from './Components/Body/Maintenance_Type_Body/maintenance_type_body.component';
import { MaintenanceTypeListComponent } from './Components/Body/Maintenance_Type_List/maintenance_type_list.component';

/* Importo los componentes a los cuales se direccionaran las rutas para conectar estacion */
import { ConnectStationBodyComponent } from './Components/Body/Connect_Station_Body/Connect_Station_Body.component';
import { ConnectStationsListComponent } from './Components/Body/Connect_Station_List/Connect_Stations_List.component';

/* Importo los componentes a los cuales se direccionaran las rutas para periodicidad*/
import { PeriodicitiesBodyComponent } from './Components/Body/Periodicities_Body/Periodicities_Body.component';
import { PeriodicitiesListComponent } from './Components/Body/Periodicities_List/Periodicities_List.component';

/* Importo los componentes a los cuales se direccionaran las rutas para periodicidad*/
import { PartsBodyComponent } from './Components/Body/Parts_Body/Parts_Body.component';
import { PartsListComponent } from './Components/Body/Parts_List/Parts_List.component';

/* Importo los componentes a los cuales se direccionaran las rutas creadas para variables */
import { VariablesBodyComponent } from './Components/body/Variables_Body/Variables_Body.component';
import { VariablesListComponent } from './Components/body/Variables_List/Variables_List.component';

/* Importo los componentes a los cuales se direccionaran las rutas creadas para plantillas */
import { TemplateComponent } from './Components/Body/Templates_Body/Template_Body.component';

/* Importo los componentes a los cuales se direccionaran las rutas creadas para conectar con ftp */
import { ConnectFTPStationComponent } from './Components/Body/connect-ftp-station/connect-ftp-station.component';
import { ConnectModbusStationComponent } from './Components/Body/connect-modbus-station/connect-modbus-station.component';


/* ------ Rutas de las vistas ------- */
const rutas: Routes = [

  /*--- Ruta de vista principal ---*/
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent }, // Ruta para la pagina vista principal

  /*--- Ruta de plantillas ---*/
  { path: 'template', component: TemplateComponent }, // Ruta para la pagina vista principal

  /*--- Rutas de region ---*/
  { path: 'region', redirectTo: '/region', pathMatch: 'full' },
  { path: 'region', component: RegionsListComponent }, // Ruta para listar todos los registros  
  { path: 'region/add_region', component: RegionsBodyComponent },  // Ruta para adicionar registros  
  { path: 'region/edit_region/:id_region', component: RegionsBodyComponent }, // Ruta para editar registros 

  /*--- Rutas de Organizacion ---*/
  { path: 'category', redirectTo: '/category', pathMatch: 'full' },
  { path: 'category', component: CategoriesListComponent }, // Ruta para listar todos los registros  
  { path: 'category/add_category', component: CategoriesBodyComponent },  // Ruta para adicionar registros  
  { path: 'category/edit_category/:id_categoria', component: CategoriesBodyComponent }, // Ruta para editar registros  

  /*--- Rutas de ciudad ---*/
  { path: 'city', redirectTo: '/city', pathMatch: 'full' },
  { path: 'city', component: CitiesListComponent },
  { path: 'city/add_city', component: CitiesBodyComponent },
  { path: 'city/edit_city/:id_ciudad', component: CitiesBodyComponent },

  /*--- Rutas de alerta ---*/
  { path: 'alert', redirectTo: '/alert', pathMatch: 'full' },
  { path: 'alert', component: AlertsListComponent }, // Ruta para listar todos los registros  
  { path: 'alert/add_alert', component: AlertsBodyComponent },  // Ruta para adicionar registros  
  { path: 'alert/edit_alert/:id_alerta', component: AlertsBodyComponent }, // Ruta para editar registros

  /*--- Rutas de rango ---*/
  { path: 'rank', redirectTo: '/rank', pathMatch: 'full' },
  { path: 'rank', component: RanksListComponent }, // Ruta para listar todos los registros  
  { path: 'rank/add_rank', component: RanksBodyComponent },  // Ruta para adicionar registros  
  { path: 'rank/edit_rank/:id_rango', component: RanksBodyComponent }, // Ruta para editar registros

  /*--- Rutas de Organizacion ---*/
  { path: 'organization', redirectTo: '/organization', pathMatch: 'full' },
  { path: 'organization', component: OrganizationsListComponent }, // Ruta para listar todos los registros  
  { path: 'organization/add_organization', component: OrganizationsBodyComponent },  // Ruta para adicionar registros  
  { path: 'organization/edit_organization/:id_organizacion', component: OrganizationsBodyComponent }, // Ruta para editar registros

  /*--- Rutas de Estaciones ---*/
  { path: 'station', redirectTo: '/station', pathMatch: 'full' },
  { path: 'station', component: StationsListComponent }, // Ruta para listar todos los registros  
  { path: 'station/add_station', component: StationsBodyComponent },  // Ruta para adicionar registros  
  { path: 'station/edit_station/:id_estacion', component: StationsBodyComponent }, // Ruta para editar registros

  /*--- Rutas de Gmt ---*/
  { path: 'gmt', redirectTo: '/gmt', pathMatch: 'full' },
  { path: 'gmt', component: GmtListComponent }, // Ruta para listar todos los registros  
  { path: 'gmt/add_gmt', component: GmtBodyComponent },  // Ruta para adicionar registros  
  { path: 'gmt/edit_gmt/:id_gmt', component: GmtBodyComponent }, // Ruta para editar registros

  /*--- Rutas de base de tiempo ---*/
  { path: 'time', redirectTo: '/time', pathMatch: 'full' },
  { path: 'time', component: TimesListComponent }, // Ruta para listar todos los registros  
  { path: 'time/add_time', component: TimesBodyComponent },  // Ruta para adicionar registros  
  { path: 'time/edit_time/:id_tiempo', component: TimesBodyComponent }, // Ruta para editar registros

  /*--- Rutas de mantenimiento ---*/
  { path: 'maintenance', redirectTo: '/maintenance', pathMatch: 'full' },
  { path: 'maintenance', component: MaintenancesListComponent }, // Ruta para listar todos los registros  
  { path: 'maintenance/add_maintenance', component: MaintenancesBodyComponent },  // Ruta para adicionar registros  
  { path: 'maintenance/edit_maintenance/:id_mantenimiento', component: MaintenancesBodyComponent }, // Ruta para editar registros

  /*--- Rutas de tipos mantenimiento ---*/
  { path: 'maintenance_type', redirectTo: '/maintenance_type', pathMatch: 'full' },
  { path: 'maintenance_type', component: MaintenanceTypeListComponent }, // Ruta para listar todos los registros  
  { path: 'maintenance_type/add_maintenance_type', component: MaintenanceTypeBodyComponent },  // Ruta para adicionar registros  
  { path: 'maintenance_type/edit_maintenance_type/:id_tipo_mantenimiento', component: MaintenanceTypeBodyComponent }, // Ruta para editar registros

  /*--- Rutas de conectar Estaciones ---*/
  { path: 'connect', redirectTo: '/connect', pathMatch: 'full' },
  { path: 'connect', component: ConnectStationsListComponent }, // Ruta para listar todos los registros  
  { path: 'connect/station/:id_estacion', component: ConnectStationBodyComponent },  // Ruta para conectar una estacion 

  /*--- Rutas de periodicidad de mantenimiento ---*/
  { path: 'periodicity', redirectTo: '/periodicity', pathMatch: 'full' },
  { path: 'periodicity', component: PeriodicitiesListComponent }, // Ruta para listar todos los registros  
  { path: 'periodicity/add_periodicity', component: PeriodicitiesBodyComponent },  // Ruta para adicionar registros  
  { path: 'periodicity/edit_periodicity/:id_periodicidad', component: PeriodicitiesBodyComponent }, // Ruta para editar registros

  /*--- Rutas de periodicidad de parte ---*/
  { path: 'part', redirectTo: '/part', pathMatch: 'full' },
  { path: 'part', component: PartsListComponent }, // Ruta para listar todos los registros  
  { path: 'part/add_part', component: PartsBodyComponent },  // Ruta para adicionar registros  
  { path: 'part/edit_part/:id_parte', component: PartsBodyComponent }, // Ruta para editar registros

    /*--- Rutas de variables ---*/
    { path: 'variable', redirectTo: '/variable', pathMatch: 'full' },
    { path: 'variable', component: VariablesListComponent }, // Ruta para listar todos los registros  
    { path: 'variable/add_variable', component: VariablesBodyComponent },  // Ruta para adicionar registros  
    { path: 'variable/edit_variable/:id_variable', component: VariablesBodyComponent }, // Ruta para editar registros 

    /*--- Rutas de conectar ftp con estacion ---*/
    { path: 'ftp', redirectTo: '/ftp', pathMatch: 'full' },
    { path: 'ftp/add_ftp/:id_estacion/:id_plantilla', component: ConnectFTPStationComponent },  // Ruta para adicionar una conexion ftp    

    /**  */
    /*--- Rutas de conectar ftp con estacion ---*/
    { path: 'modbus', redirectTo: '/modbus', pathMatch: 'full' },
    { path: 'modbus/add_modbus/:id_estacion/:id_plantilla', component: ConnectModbusStationComponent },  // Ruta para adicionar una conexion ftp   
    /***
     * Ruta de plantilla
     */
];

@NgModule({
  imports: [RouterModule.forRoot(rutas)],
  exports: [RouterModule]
})

//Exporto la clase que sera utilizada por las demas clases
export class AppRoutingModule { }