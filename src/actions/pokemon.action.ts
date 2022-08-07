import{
    ADD_FIGHT,
    ADD_POKEMONS,
    CHANGE_STATUS,
    REMOVE_FIGHT
} from '../types';

export const addPokemons = (data: Array<any>) => {
    return { type: ADD_POKEMONS, payload: data}};
export const addFight = (data: Array<any>) => ({ type: ADD_FIGHT, payload: data});
export const removeFight = (data: Array<any>) => ({ type: REMOVE_FIGHT, payload: data});
export const changeStatus = (data:any) => ({ type: CHANGE_STATUS, payload: data});

