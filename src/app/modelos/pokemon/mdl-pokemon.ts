// Interface para un Pokémon completo
export interface MdlPokemon {
    id: number;
    name: string;
    height: number;
    weight: number;
    base_experience: number;
    sprites: {
        front_default: string | null;
        front_shiny: string | null;
        back_default: string | null;
        back_shiny: string | null;
        other: {
            'official-artwork': {
                front_default: string | null;
                front_shiny: string | null;
            };
        };
    };
    types: PokemonType[];
    stats: PokemonStat[];
}

// Interface para item de la lista
export interface PokemonListItem {
    name: string;
    url: string;
}

// Interface para respuesta de la API lista
export interface PokemonListResponse {
    count: number;
    next: string | null;
    previous: string | null;
    results: PokemonListItem[];
}

// Interfaces auxiliares
export interface PokemonType {
    slot: number;
    type: {
        name: string;
        url: string;
    };
}

export interface PokemonStat {
    base_stat: number;
    effort: number;
    stat: {
        name: string;
        url: string;
    };
}
