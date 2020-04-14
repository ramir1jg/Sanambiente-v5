/* Clase que contiene y exporta la interfaz con el modelo (campos) necesario para Organizacion */
export interface Organization {
    id_organizacion?: number; 
    nombre_organizacion?: string;
    observacion_organizacion?: string;
    email_organizacion?: string;
    telefono_organizacion?: string
}