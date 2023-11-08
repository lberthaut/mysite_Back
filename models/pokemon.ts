export interface Pokemon {
    name: string;
    sprite: string;
    height: number;
    id: number;
    stats: Stat[];
    types: PokemonType[];
}

export interface Stat {
    base_stat: number;
    effort: number;
    stat: {
        name: string;
        url: string;
    };
}

export interface PokemonType {
    slot: number;
    type: {
        name: string;
        url: string;
    };
}

export interface Pokemongenerations {
    count: number;
    next: null;
    previous: null;
    results: Generation[];
}

export interface Generation {
    name: string;
    url: string;
}
