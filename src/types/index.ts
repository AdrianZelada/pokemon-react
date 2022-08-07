export const ADD_POKEMONS = "ADD_POKEMONS";
export const ADD_FIGHT = "ADD_FIGHT";
export const REMOVE_FIGHT = "REMOVE_FIGHT";

export interface Pokemon {
    id: string;
    name: string;
    url: string;
    image: string;
    status: boolean;
    details?: any;
}

export interface InitialStore {
    list: Array<Pokemon>;
    fightList: Array<Pokemon>;
}
