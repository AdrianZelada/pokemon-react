import{
    ADD_FIGHT,
    ADD_POKEMONS,    
    REMOVE_FIGHT
} from '../types';

export const addPokemons = (data: Array<any>) => {
    return { type: ADD_POKEMONS, payload: data}};
export const addFight = (data: Array<any>) => ({ type: ADD_FIGHT, payload: data});
export const removeFight = (data: Array<any>) => ({ type: REMOVE_FIGHT, payload: data});

