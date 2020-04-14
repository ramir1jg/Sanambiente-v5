/* Clase que contiene y exporta la interfaz con el modelo (campos) necesario para mantenimiento*/

export interface Maintenance {
    id_mantenimiento?: number;
    id_estacion?:number;
    id_parte?:number;
    id_tipo_mantenimiento?: number;
    id_periodicidad?: number;
    nombre_funcionario?: string;
    fecha_inicial?: Date;
    fecha_final?: Date;
    validacion_mantenimiento?:boolean;
    novedad_mantenimiento?: string;
    fecha_creacion?:Date;
}