// Tipos específicos para mejor validación
export type TipoDocumento = 'TI' | 'CC' | 'CE';

export interface Usuario {
    id_usuario: number;
    tipo_documento: TipoDocumento;
    numero_documento: string;
    nombre: string;
    edad: string;
    apellido: string;
    juego_favorito: string;
}

export interface UsuariosResponse {
    records: Usuario[];
}