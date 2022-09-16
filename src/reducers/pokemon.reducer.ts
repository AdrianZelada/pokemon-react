import{
    ADD_FIGHT,
    ADD_POKEMONS,
    EDIT_POKEMON,
    InitialStore,
    Pokemon,
    REMOVE_FIGHT
} from '../types';

export const initialState: InitialStore = {
    fightList: [],
    list: [],
    disabled: false
}

const changesStatus = (list: Array<Pokemon>, payload: Pokemon) => {
    return list.map((item: Pokemon) => {
        if (item.id === payload.id) {
            return {
                ...item,
                status: !item.status
            }
        } else {
            return item
        }
    })
}

export function pokemonReducer(state: any = initialState, action: any) {
    switch (action.type) {
        case ADD_POKEMONS:            
            const data = action.payload.map((element: Pokemon) => {
                const arrayUrl = element.url.split('/');
                const id = arrayUrl[arrayUrl.length -2];
                return {
                    ...element,
                    id,
                    image : `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
                    status: false
                }
            });            
            return {
                ...state,
                list : [
                    ...state.list,
                    ...data
                ],
            }
        case ADD_FIGHT:
            if(state.fightList.length < 6) {
                const fightList = [
                    action.payload,
                    ...state.fightList
                ]
                return {
                    ...state,
                    disabled: fightList.length === 6,
                    list: changesStatus(state.list, action.payload),
                    fightList: [...fightList]
                }
            } else {
                return {
                    ...state,
                    disabled: true
                }
            }            
        case REMOVE_FIGHT:
            const list = state.fightList.filter((item: Pokemon) => {
                return item.id !== action.payload.id                
            });
            return {
                ...state,
                disabled: false,
                list: changesStatus(state.list, action.payload),
                fightList: [
                   ...list
                ]
            }
        case EDIT_POKEMON:
            const editList = state.list.map((item: Pokemon) => {
                if(item.id == action.payload.id) {
                    return {
                        ...item,
                        details: {
                            ...action.payload
                        }
                    }
                }
                return item;
            });
            return {
                ...state,
                list: [
                    ...editList
                ]
            }
        default:
            return state;
    }
}