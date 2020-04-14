import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; // lo importo para que funcione en conjunto con httpClient
import { Ng2SearchPipeModule } from 'ng2-search-filter'; // importar para el filtro de las tablas
import BaseService from './Services/Base_Service/Base_Service';

import { AppRoutingModule } from './app-routing.module'; // Permite trabajar con rutas
import { AppComponent } from './app.component'; // Angular lo importa por defecto
import { FormsModule } from '@angular/forms'; // Permite crear validaciones a los formularios
import { ReactiveFormsModule } from '@angular/forms'; // Permite trabajar con formularios reactivos
import { HeaderComponent } from './Components/Header/Header.component'; // Importo el componente Header (Barra de menu)
import { NavigationComponent } from './Components/Navigation/Navigation.component'; // Importo el componente navigation (Menu de navegacion)
import { HomeComponent } from './Components/Body/Home/Home.component'; // Importo el componente home (Vista del inicio)

/* Importo los componentes y servicios creados para region */
import { RegionsBodyComponent } from './Components/body/Regions_Body/Regions_Body.component';
import { RegionsService } from './Services/Regions_Service/Regions_Service';
import { RegionsListComponent } from './Components/body/Regions_List/Regions_List.component';

/* Importo los componentes y servicios creados para ciudad */
import { CitiesBodyComponent } from './Components/body/Cities_Body/Cities_Body.component';
import { CitiesService } from './Services/Cities_Service/Cities_Service';
import { CitiesListComponent } from './Components/body/Cities_List/Cities_List.component';

/* Importo los componentes y servicios creados para organizacion */
import { OrganizationsBodyComponent } from './Components/Body/Organizations_Body/Organizations_Body.component';
import { OrganizationsService } from './Services/Organizations_Service/Organizations_Service';
import { OrganizationsListComponent } from './Components/Body/Organizations_List/Organizations_List.component';

/* Importo los componentes y servicios creados para Categorias */
import { CategoriesBodyComponent } from './Components/Body/Categories_Body/Categories_Body.component';
import { CategoriesService } from './Services/Categories_Service/Categories_Service';
import { CategoriesListComponent } from './Components/Body/Categories_List/Categories_List.component';

/* Importo los componentes y servicios creados para Rangos */
import { RanksBodyComponent } from './Components/Body/Ranks_Body/Ranks_Body.component';
import { RanksListComponent } from './Components//Body/Ranks_List/Ranks_List.component';
import { RanksService } from './Services/Ranks_Service/Ranks_Service';

/* Importo los componentes y servicios creados para Alertas */
import { AlertsBodyComponent } from './Components/Body/Alerts_Body/Alerts_Body.component';
import { AlertsListComponent } from './Components/Body/Alerts_List/Alerts_List.component';
import { AlertsService } from './Services/Alerts_Service/Alerts_Service';

/* Importo los componentes y servicios creados para Bases de tiempos */
import { TimesBodyComponent } from './Components/Body/Times_Body/Times_Body.component';
import { TimesListComponent } from './Components/Body/Times_List/Times_List.component';
import { TimesService } from './Services/Times_Service/Times_Service';

/* Importo los componentes y servicios creados para las estaciones */
import { StationsBodyComponent } from './Components/Body/Stations_Body/Stations_Body.component';
import { StationsListComponent } from './Components/Body/Stations_List/Stations_List.component';
import { StationsService } from './Services/Stations_Service/Stations_Service';

/* Importo los componentes y servicios creados para las GMT */
import { GmtListComponent } from './Components/Body/Gmt_List/Gmt_List.component';
import { GmtBodyComponent } from './Components/Body/Gmt_Body/Gmt_Body.component';
import { GmtService } from './Services/Gmt_Service/Gmt_Service';

/* Importo los componentes y servicios creados para los mantenimientos */
import { MaintenancesListComponent } from './Components/Body/Maintenances_List/Maintenances_List.component';
import { MaintenancesBodyComponent } from './Components/Body/Maintenances_Body/Maintenances_Body.component';
import { MaintenancesService } from './Services/Maintenances_Service/Maintenances_Service';

/* Importo los componentes y servicios creados para los tipos de mantenimientos */
import { MaintenanceTypeListComponent } from './Components/Body/Maintenance_Type_List/maintenance_type_list.component';
import { MaintenanceTypeBodyComponent } from './Components/Body/Maintenance_Type_Body/maintenance_type_body.component';
import { MaintenancesTypeService } from './Services/Maintenances_Type_Service/Maintenances_Type_Service';

/* Importo los componentes y servicios creados para la conexion */
import { ConnectStationsListComponent } from './Components/Body/Connect_Station_List/Connect_Stations_List.component';
import { ConnectStationBodyComponent } from './Components/Body/Connect_Station_Body/Connect_Station_Body.component';

/* Importo los componentes y servicios creados para las periodicidades de los mantenimientos */
import { PeriodicitiesListComponent } from './Components/Body/Periodicities_List/Periodicities_List.component';
import { PeriodicitiesBodyComponent } from './Components/Body/Periodicities_Body/Periodicities_Body.component';
import { PeriodicitiesService } from './Services/Periodicities_Service/Periodicities_Service';

/* Importo los componentes y servicios creados para las partes */
import { PartsListComponent } from './Components/Body/Parts_List/Parts_List.component';
import { PartsBodyComponent } from './Components/Body/Parts_Body/Parts_Body.component';
import { PartsService } from './Services/Parts_Service/Parts_Service';

/* Importo los componentes y servicios creados para variables */
import { VariablesBodyComponent } from './Components/body/Variables_Body/Variables_Body.component';
import { VariablesService } from './Services/Variables_Service/Variables_Service';
import { VariablesListComponent } from './Components/body/Variables_List/Variables_List.component';

/* Importo los componentes y servicios creados para las plantillas */
import { TemplateComponent } from './Components/Body/Templates_Body/Template_Body.component';
import { TemplateService } from './Services/Templates_Service/Templates_service';

/* Importo los componentes y servicios creados para conectar por FTP */
import { ConnectFTPStationComponent } from './Components/Body/connect-ftp-station/connect-ftp-station.component';
import { FtpServiceService } from './Services/ftp_service/ftp-service.service';
import { ConnectModbusStationComponent } from './Components/Body/connect-modbus-station/connect-modbus-station.component';


@NgModule({
  declarations: [
    // Declaro los componentes o propiedades importadas desde cada clase
    AppComponent,
    HeaderComponent,
    NavigationComponent,
    HomeComponent,
    RegionsBodyComponent,
    RegionsListComponent,
    CitiesBodyComponent,
    CitiesListComponent,
    OrganizationsBodyComponent,
    OrganizationsListComponent,
    CategoriesBodyComponent,
    CategoriesListComponent,
    RanksBodyComponent,
    RanksListComponent,
    AlertsBodyComponent,
    AlertsListComponent,
    TimesBodyComponent,
    TimesListComponent,
    StationsBodyComponent,
    StationsListComponent,
    GmtListComponent,
    GmtBodyComponent,
    MaintenancesListComponent,
    MaintenancesBodyComponent,
    MaintenanceTypeListComponent,
    MaintenanceTypeBodyComponent,
    ConnectStationsListComponent,
    ConnectStationBodyComponent,
    PeriodicitiesBodyComponent,
    PeriodicitiesListComponent,
    PartsListComponent,
    PartsBodyComponent,
    VariablesListComponent,
    VariablesBodyComponent,
    TemplateComponent,
    ConnectFTPStationComponent,
    ConnectModbusStationComponent
  ],
  imports: [
    // Importo los componentes que importados desde los modulos de angular
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    Ng2SearchPipeModule
  ],
  providers: [
    BaseService,
    RegionsService,
    CitiesService,
    OrganizationsService,
    CategoriesService,
    RanksService,
    AlertsService,
    TimesService,
    GmtService,
    StationsService,
    MaintenancesService,
    MaintenancesTypeService,
    PeriodicitiesService,
    PartsService,
    VariablesService,
    FtpServiceService,
    TemplateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
