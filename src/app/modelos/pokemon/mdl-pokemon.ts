// 2. Segundo paso: Crear la interfaz
export interface Pokemon {
    id: number;
    name: string;
    type: string;
    base_experience?: number;
    height?: number;
    weight?: number;
    abilities?: string[];
    moves?: string[];
    sprites?: {
        front_default?: string;
        back_default?: string;
    };
}


export interface NamedAPIResource{
    name: string;
    url: string;
}
