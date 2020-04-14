/* Clase que contiene y exporta la interfaz con el modelo (campos) necesario para estacion */

export interface Station {
    id_estacion?: number; 
    nombre_estacion?: string;
    serial_estacion?: string;
    nombre_corto_estacion?: string;
    id_categoria?: number;
    id_tiempo?: number;
    observacion_estacion?: string;
    id_ciudad?: number;
    id_region?:number;
    id_gmt?:number;
    latitud_estacion?: string;
    longitud_estacion?: string;
    elevacion_estacion?: string;
    protocolo_estacion?: string;
}


