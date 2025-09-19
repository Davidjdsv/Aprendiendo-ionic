// models/rm-character.ts
// * DIRECCIÓN DE LA API
export interface RmRef {
    name: string;
    url: string; // puede venir vacío en algunos casos
}

// parametriza exactamente qué tipos de valores está esperando con export type
export type RmStatus = 'Alive' | 'Dead' | 'unknown';
export type RmGender = 'Female' | 'Male' | 'Genderless' | 'unknown';

// * DATOS A OBTENER DE LA API
export interface RickAndMortyMdl {
    id: number;
    name: string;
    status: RmStatus;
    species: string;
    type?: string; // suele venir vacío, hazlo opcional
    gender: RmGender;
    image: string; // URL a la imagen
    origin: RmRef;
    location: RmRef;
    episode?: string[]; // array de URLs de episodios
}

// * RESPUESTA DE LA API (paginada)
export interface RmApiResponse {
    info: {
        count: number;
        pages: number;
        next: string | null;
        prev: string | null;
    };
    results: RickAndMortyMdl[];
}

// * INFORMACIÓN DE PAGINACIÓN
export interface RmPageInfo {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
}
