"use strict";
/* Esta clase contiene la constante en la cual se encuentran las sentencias SQL utilizadas para
la interaccion con la base de datos, por parte de cada tabla parametro*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.handlerQuery = {
    // ciudad
    createCity: 'INSERT INTO ciudades (nombre_ciudad,id_region,observacion_ciudad) VALUES ($1,$2,$3)',
    viewCities: 'SELECT id_ciudad, nombre_ciudad, observacion_ciudad, regiones.nombre_region FROM regiones, ciudades where regiones.id_region=ciudades.id_region order by id_ciudad;',
    viewCity: 'SELECT id_ciudad, nombre_ciudad, regiones.id_region, observacion_ciudad, regiones.nombre_region FROM regiones, ciudades where regiones.id_region=ciudades.id_region and id_ciudad=$1',
    updateCity: 'UPDATE ciudades set nombre_ciudad=$1,id_region=$2,observacion_ciudad=$3 where id_ciudad =$4',
    viewRegionsCity: 'SELECT id_region, nombre_region FROM regiones order by id_region',
    // region
    createRegion: 'INSERT INTO regiones (nombre_region, observacion_region) VALUES ($1,$2)',
    viewRegions: 'SELECT * FROM regiones order by id_region',
    viewRegion: 'SELECT * FROM regiones where id_region=$1',
    updateRegion: 'UPDATE regiones set nombre_region=$1,observacion_region=$2 where id_region=$3',
    // rango
    createRank: 'INSERT INTO rangos (nombre_rango, valor_minimo, valor_maximo, id_estacion, observacion_rango) VALUES ($1,$2,$3,$4,$5)',
    viewRanks: 'SELECT id_rango, nombre_rango,valor_minimo, valor_maximo, observacion_rango, estaciones.nombre_estacion FROM estaciones, rangos where estaciones.id_estacion = rangos.id_estacion order by id_rango',
    viewRank: 'SELECT id_rango, nombre_rango,valor_minimo,valor_maximo, estaciones.id_estacion, observacion_rango, estaciones.nombre_estacion FROM estaciones, rangos where estaciones.id_estacion=rangos.id_estacion and id_rango=$1',
    updateRank: 'UPDATE rangos set nombre_rango=$1, valor_minimo=$2, valor_maximo=$3, id_estacion=$4, observacion_rango=$5 where id_rango=$6',
    viewStationsRank: 'SELECT id_estacion, nombre_estacion FROM estaciones order by id_estacion',
    // categoria 
    createCategory: 'INSERT INTO categorias (nombre_categoria, observacion_categoria) VALUES ($1,$2)',
    viewCategories: 'SELECT * FROM categorias order by id_categoria',
    viewCategory: 'SELECT * FROM categorias where id_categoria=$1',
    updateCategory: 'UPDATE categorias set nombre_categoria=$1, observacion_categoria=$2 where id_categoria=$3',
    // alerta
    createAlert: 'INSERT INTO alertas (nombre_alerta, email_alerta, contrasena_alerta, servidorsmtp_alerta, puertosmtp_alerta, seguridad_alerta, autenticacion_alerta, emailpara_alerta, asunto_alerta, emailde_alerta, observacion_alerta) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11)',
    viewAlerts: 'SELECT * FROM alertas order by id_alerta',
    viewAlert: 'SELECT * FROM alertas where id_alerta=$1',
    updateAlert: 'UPDATE alertas set nombre_alerta=$1, email_alerta=$2, contrasena_alerta=$3, servidorsmtp_alerta=$4, puertosmtp_alerta=$5, seguridad_alerta=$6, autenticacion_alerta=$7, emailpara_alerta=$8, asunto_alerta=$9,  emailde_alerta=$10, observacion_alerta=$11 where id_alerta=$12',
    // organizacion
    createOrganization: 'INSERT INTO organizaciones (nombre_organizacion, observacion_organizacion, email_organizacion, telefono_organizacion) VALUES ($1,$2,$3,$4)',
    viewOrganizations: 'SELECT * FROM organizaciones order by id_organizacion',
    viewOrganization: 'SELECT * FROM organizaciones where id_organizacion=$1',
    updateOrganization: 'UPDATE organizaciones set nombre_organizacion=$1,observacion_organizacion=$2, email_organizacion=$3, telefono_organizacion=$4 where id_organizacion=$5',
    // base de tiempo
    createTime: 'INSERT INTO tiempos (nombre_tiempo, escala_tiempo, observacion_tiempo) VALUES ($1,$2,$3)',
    viewTimes: 'SELECT id_tiempo, nombre_tiempo, escala_tiempo, observacion_tiempo FROM tiempos order by id_tiempo',
    viewTime: 'SELECT id_tiempo, nombre_tiempo, escala_tiempo, observacion_tiempo FROM tiempos where id_tiempo=$1',
    updateTime: 'UPDATE tiempos set nombre_tiempo=$1, escala_tiempo=$2, observacion_tiempo=$3 where id_tiempo=$4',
    // estacion
    createStation: 'INSERT INTO estaciones (nombre_estacion, serial_estacion, nombre_corto_estacion, id_categoria, id_tiempo, observacion_estacion, id_ciudad, latitud_estacion, longitud_estacion, elevacion_estacion, protocolo_estacion, id_gmt, id_region) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13)',
    viewStations: 'SELECT estaciones.id_estacion, nombre_estacion, serial_estacion, nombre_corto_estacion, categorias.id_categoria, categorias.nombre_categoria, tiempos.id_tiempo, tiempos.nombre_tiempo, observacion_estacion, regiones.id_region, regiones.nombre_region, ciudades.id_ciudad, ciudades.nombre_ciudad, latitud_estacion, longitud_estacion, elevacion_estacion, protocolo_estacion, gmt.id_gmt, gmt.nombre_gmt FROM estaciones, regiones, ciudades, tiempos, categorias, gmt where regiones.id_region=ciudades.id_region and ciudades.id_ciudad=estaciones.id_ciudad and tiempos.id_tiempo=estaciones.id_tiempo and categorias.id_categoria=estaciones.id_categoria and gmt.id_gmt=estaciones.id_gmt order by id_estacion;',
    viewStation: 'SELECT estaciones.id_estacion, nombre_estacion, serial_estacion, nombre_corto_estacion, categorias.id_categoria, tiempos.id_tiempo, observacion_estacion, regiones.id_region, ciudades.id_ciudad, latitud_estacion, longitud_estacion, elevacion_estacion, protocolo_estacion, gmt.id_gmt, categorias.nombre_categoria, tiempos.nombre_tiempo, regiones.nombre_region, ciudades.nombre_ciudad, gmt.nombre_gmt FROM estaciones, regiones, ciudades, tiempos, categorias, gmt where regiones.id_region=ciudades.id_region and ciudades.id_ciudad=estaciones.id_ciudad and tiempos.id_tiempo=estaciones.id_tiempo and categorias.id_categoria=estaciones.id_categoria and gmt.id_gmt=estaciones.id_gmt and estaciones.id_estacion=$1',
    updateStation: 'UPDATE estaciones set nombre_estacion=$1,serial_estacion=$2,nombre_corto_estacion=$3,id_categoria=$4,id_tiempo=$5,observacion_estacion=$6,id_ciudad=$7,latitud_estacion=$8,longitud_estacion=$9,elevacion_estacion=$10,protocolo_estacion=$11,id_gmt=$12, id_region=$13 where id_estacion=$14',
    viewCategoriesStation: 'SELECT id_categoria, nombre_categoria FROM categorias order by id_categoria',
    viewTimesStation: 'SELECT id_tiempo, nombre_tiempo FROM tiempos order by id_tiempo',
    viewRegionsStation: 'SELECT id_region, nombre_region FROM regiones order by id_region',
    viewCitiesStation: 'SELECT id_ciudad, nombre_ciudad FROM ciudades order by id_ciudad',
    viewGmtStation: 'SELECT id_gmt, nombre_gmt FROM gmt order by id_gmt',
    // GMT
    createGmt: 'INSERT INTO gmt (nombre_gmt, observacion_gmt) VALUES ($1,$2)',
    viewGmts: 'SELECT * FROM gmt order by id_gmt',
    viewGmt: 'SELECT * FROM gmt where id_gmt=$1',
    updateGmt: 'UPDATE gmt set nombre_gmt=$1, observacion_gmt=$2 where id_gmt=$3',
    // mantenimiento
    createMaintenance: 'INSERT INTO mantenimientos (id_estacion, id_parte, id_tipo_mantenimiento, id_periodicidad, nombre_funcionario, fecha_inicial, fecha_final, validacion_mantenimiento, novedad_mantenimiento) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9)',
    viewMaintenances: 'SELECT id_mantenimiento, mantenimientos.id_estacion, mantenimientos.id_parte, mantenimientos.id_tipo_mantenimiento, periodicidades.id_periodicidad, nombre_funcionario, fecha_inicial, fecha_final, validacion_mantenimiento, novedad_mantenimiento, estaciones.nombre_estacion, partes.nombre_parte, tipos_mantenimiento.nombre_tipo_mantenimiento, periodicidades.tipo_periodicidad FROM estaciones, partes, tipos_mantenimiento, periodicidades, mantenimientos where estaciones.id_estacion = mantenimientos.id_estacion AND periodicidades.id_periodicidad=mantenimientos.id_periodicidad AND partes.id_parte = mantenimientos.id_parte AND tipos_mantenimiento.id_tipo_mantenimiento = mantenimientos.id_tipo_mantenimiento order by id_mantenimiento',
    viewMaintenance: 'SELECT id_mantenimiento, mantenimientos.id_estacion, mantenimientos.id_parte, mantenimientos.id_tipo_mantenimiento, mantenimientos.id_periodicidad, nombre_funcionario, fecha_inicial, fecha_final, validacion_mantenimiento, novedad_mantenimiento, estaciones.nombre_estacion, partes.nombre_parte, tipos_mantenimiento.nombre_tipo_mantenimiento, periodicidades.tipo_periodicidad FROM estaciones, partes, tipos_mantenimiento, periodicidades, mantenimientos where estaciones.id_estacion = mantenimientos.id_estacion AND partes.id_parte = mantenimientos.id_parte AND tipos_mantenimiento.id_tipo_mantenimiento = mantenimientos.id_tipo_mantenimiento AND periodicidades.id_periodicidad=mantenimientos.id_periodicidad and id_mantenimiento=$1',
    updateMaintenance: 'UPDATE mantenimientos set id_estacion=$1, id_parte=$2, id_tipo_mantenimiento=$3, id_periodicidad=$4, nombre_funcionario=$5, fecha_inicial=$6, fecha_final=$7, validacion_mantenimiento$8, novedad_mantenimiento=$7 where id_mantenimiento=$10',
    viewStationsMaintenance: 'SELECT id_estacion, nombre_estacion FROM estaciones order by id_estacion',
    viewPartsStations: 'SELECT id_parte, nombre_parte FROM partes order by id_parte',
    viewTypesMaintenance: 'SELECT id_tipo_mantenimiento, nombre_tipo_mantenimiento FROM tipos_mantenimiento order by id_tipo_mantenimiento',
    viewPeriodicitiesMaintenance: 'SELECT id_periodicidad, tipo_periodicidad FROM periodicidades order by id_periodicidad',
    // tipo mantenimiento
    createMaintenanceType: 'INSERT INTO tipos_mantenimiento (nombre_tipo_mantenimiento, observacion_tipo_mantenimiento) VALUES ($1,$2)',
    viewMaintenancesType: 'SELECT * FROM tipos_mantenimiento order by id_tipo_mantenimiento',
    viewMaintenanceType: 'SELECT * FROM tipos_mantenimiento where id_tipo_mantenimiento=$1',
    updateMaintenanceType: 'UPDATE tipos_mantenimiento set nombre_tipo_mantenimiento=$1,observacion_tipo_mantenimiento=$2 where id_tipo_mantenimiento=$3',
    // periodicidad
    createPeriodicity: 'INSERT INTO periodicidades (tipo_periodicidad, observacion_periodicidad) VALUES ($1,$2)',
    viewPeriodicities: 'SELECT * FROM periodicidades order by id_periodicidad',
    viewPeriodicity: 'SELECT * FROM periodicidades where id_periodicidad=$1',
    updatePeriodicity: 'UPDATE periodicidades set tipo_periodicidad=$1,observacion_periodicidad=$2 where id_periodicidad=$3',
    // partes
    createPart: 'INSERT INTO partes (nombre_parte, codigo_catalogo, observacion_parte) VALUES ($1,$2,$3)',
    viewParts: 'SELECT * FROM partes order by id_parte',
    viewPart: 'SELECT * FROM partes where id_parte=$1',
    updatePart: 'UPDATE partes set nombre_parte=$1,codigo_catalogo=$2,observacion_parte=$3 where id_parte=$4',
    // Variables
    createVariable: 'INSERT INTO variables (nombre_variable, observacion_variable) VALUES ($1,$2)',
    updateVariable: 'UPDATE variables set nombre_variable=$1,observacion_variable=$2 where id_variable=$3',
    viewVariables: 'SELECT * FROM variables order by id_variable',
    viewVariable: 'SELECT * FROM variables where id_variable=$1',
    // Plantillas
    viewTemplatesStation: 'SELECT DISTINCT nombre_plantilla, id_plantilla from plantillas',
    createTemplate: 'INSERT INTO plantillas (id_plantilla, id_estacion, nombre_plantilla, id_variable, posicion_variable) VALUES($1, $2, $3, $4, $5)',
    // Conexion FTP
    viewConection: 'SELECT * from datos_crudos',
    // FTP
    insertDataFTP: 'INSERT INTO datos_crudos(id_plantilla, id_estacion, id_conexion, posicion_variable, valor_variable, fecha_data_crudo) VALUES($1,$2,$3,$4,$5,$6)'
};
