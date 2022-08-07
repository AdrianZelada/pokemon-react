import{
    ADD_FIGHT,
    ADD_POKEMONS,
    CHANGE_STATUS,
    REMOVE_FIGHT
} from '../types';

export const initialState = {
    fightList: [],
    list: [],
}

export function pokemonReducer(state: any = initialState, action: any) {
    switch (action.type) {
        case ADD_POKEMONS:            
            const data = action.payload.map((element: any) => {
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
                return {
                    ...state,
                    fightList: [
                        action.payload,
                        ...state.fightList
                    ]
                }
            }
            return state;
        case REMOVE_FIGHT:
            const list = state.fightList.filter((item: any) => {
                return item.id !== action.payload.id                
            })
            return {
                ...state,
                fightList: [
                   ...list
                ]
            }
        case CHANGE_STATUS:
            const newList = state.list.map((item: any) => {
                if(item.id === action.payload.id) {
                    return {
                        ...item,
                        status: action.payload.status
                    }
                } else {
                    return item
                }                
            });            
            return {
                ...state,
                list: [...newList],                
            }
        default:
            return state;
    }
}