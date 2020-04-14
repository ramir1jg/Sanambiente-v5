/* Clase que contiene y exporta la interfaz con el modelo (campos) necesario para ConexionFTP */

export interface Ftp {
    id_ftp?: number;
    puerto_ftp?: string;
    usuario_ftp?: string;
    contrasena_ftp?: string;
    ip_ftp?: string;
}