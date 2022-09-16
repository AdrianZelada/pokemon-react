import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from './store'

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export const selectorListPokemon = (state:any) => {
    return state.pokemonReducer.list;
};

export const selectorFightPokemon = (state:any) => {
    return state.pokemonReducer.fightList;
};

export const selectorPokemon = (state:any) => {
    return state.pokemonReducer;
};

export const selectorPokemonByName = (name: any) => {
    return (state: any) => {
        const auxPokemon = state.pokemonReducer.list.filter( (item: any) => name === item.name);
        return auxPokemon[0] ? auxPokemon[0] : null;

    }
};

export const selectorPokemonDisabled = (state:any) => {
    return state.pokemonReducer.disabled;
};