import{
    ADD_FIGHT,
    ADD_POKEMONS,    
    Pokemon,    
    REMOVE_FIGHT
} from '../types';

export const addPokemons = (data: Array<Pokemon>) => ({type: ADD_POKEMONS, payload: data});
export const addFight = (data: Pokemon) => ({ type: ADD_FIGHT, payload: data});
export const removeFight = (data: Pokemon) => ({ type: REMOVE_FIGHT, payload: data});

