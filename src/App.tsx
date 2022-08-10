import { useEffect, useReducer } from 'react';
import './App.css';
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import { pokemonReducer } from './reducers/pokemon.reducer';
import { addFight, addPokemons, removeFight } from './actions/pokemon.action';
import pokemonService from './pokemon.service';
import Board from './components/board/board';
import FightList from './components/fight-list/fight-list';
import PokemonDetails from './components/pokemon-details/pokemon-details';
import { Pokemon } from './types';
function App() {
  const [state, dispatch] = useReducer(pokemonReducer, {list: [], fightList: []});

  useEffect(() => {
    pokemonService.getPokemons().then((response) => {      
      const typeReducer = addPokemons(response.results);      
      dispatch(typeReducer);      
    })
  }, []);

  let navigate = useNavigate();  
  
  const actionItem =(props: Pokemon)=>{
    let typeReducer: any;
    if (!props.status) {
      if(state.fightList.length < 6) {
        typeReducer = addFight({
            ...props,
            status: true
        });
        dispatch(typeReducer);
      } else {
        alert("Ya selecciono 6 pokemons");
      }
        
    } else {
        typeReducer = removeFight({
            ...props,
            status: false
        });
        dispatch(typeReducer);
    }
  }

  const goTo = (name:string)=> {    
    navigate('/board/'+name);
  }

  return (
    <div className="container p-5">
      <div className="row text-center">
        <Routes>          
          <Route path='/board' element={<Board list={state.list} dispatch={actionItem} selectItem={goTo}></Board>}></Route>
          <Route path='/board/:name' element={<PokemonDetails state={state} actionItem={actionItem} dispatch={dispatch}></PokemonDetails>}></Route>
          <Route path="" element={<Navigate to="/board" />} />
        </Routes>        
        <FightList list={state.fightList} dispatch={actionItem} selectItem={goTo}></FightList>
      </div>
    </div>
  );
}
export default App;
