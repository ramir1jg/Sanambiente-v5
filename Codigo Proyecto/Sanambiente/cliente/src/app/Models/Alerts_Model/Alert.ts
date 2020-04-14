/* Clase que contiene y exporta la interfaz con el modelo (campos) necesario para Alerta */

export interface Alert {
    id_alerta?: number;
    nombre_alerta?: string;
    email_alerta?: string;
    contrasena_alerta?: string;
    servidorsmtp_alerta?: string;
    puertosmtp_alerta?: string;
    seguridad_alerta?: string;
    autenticacion_alerta?: boolean;
    emailpara_alerta?: string;
    asunto_alerta?: string;
    emailde_alerta?: string;
    observacion_alerta?: string;

}