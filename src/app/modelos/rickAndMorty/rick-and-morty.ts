// models/rm-character.ts
export interface RmRef {
    name: string;
    url: string; // puede venir vacío en algunos casos
}

// parametriza exactamente qué tipos de valores está esperando con export type
export type RmStatus = 'Alive' | 'Dead' | 'unknown';
export type RmGender = 'Female' | 'Male' | 'Genderless' | 'unknown';

export interface RickAndMorty {
    id: number;
    name: string;
    status: RmStatus;
    species: string;
    type?: string; // suele venir vacío, hazlo opcional
    gender: RmGender;
    image: string; // URL a la imagen
    origin: RmRef;
    location: RmRef;
    // episode?: string[]; // si luego quieres, lo agregas
}
