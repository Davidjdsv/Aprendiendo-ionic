// Interface para un Pokémon completo
/**
 * Interface para un Pokémon completo
 */
// Esto es como la informacion que viene de la API pero ya estructurando lo que queremos sacar de informacion
export interface Pokemon {
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
        versions: {
            'generation-v': {
                'black-white': {
                    animated: {
                        front_default: string | null;
                        front_shiny: string | null;
                        back_default: string | null;
                        back_shiny: string | null;
                    };
                    front_default: string | null;
                    front_shiny: string | null;
                };
            };
        };
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

/**
 * Interface para item de la lista. Esta es la dirección URL de la API
 */
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
/**
 * Interface para tipos de un Pokémon.
 */
export interface PokemonType {
    slot: number;
    type: {
        name: string;
        url: string;
    };
}

/**
 * Interface para estadísticas de un Pokémon.
 */
export interface PokemonStat {
    base_stat: number;
    effort: number;
    stat: {
        name: string;
        url: string;
    };
}

// Toda esta info se va e importa al service-pokemon.ts ->
