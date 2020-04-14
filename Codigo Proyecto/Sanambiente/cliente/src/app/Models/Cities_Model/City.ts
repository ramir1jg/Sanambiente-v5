/* Clase que contiene y exporta la interfaz con el modelo (campos) necesario para ciudad */

export interface City {
    id_ciudad?: number; 
    nombre_ciudad?: string;
    id_region?:number;
    observacion_ciudad?: string;
}