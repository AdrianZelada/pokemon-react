import { useEffect } from 'react';
import './App.css';
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import { addFight, addPokemons, removeFight } from './actions/pokemon.action';
import pokemonService from './pokemon.service';
import Board from './components/board/board';
import FightList from './components/fight-list/fight-list';
import PokemonDetails from './components/pokemon-details/pokemon-details';
import { Pokemon } from './types';
import { selectorPokemon, useAppDispatch, useAppSelector } from './store-1/hooks';
function App() {
  const state = useAppSelector(selectorPokemon);
  const dispatch = useAppDispatch();
  useEffect(() => {
    pokemonService.getPokemons().then((response) => {      
      dispatch(addPokemons(response.results));
    })
  }, []);

  const keyd= 'details';
  let navigate = useNavigate();  
  pokemonService.actionItem.subscribe('app',(props: Pokemon) =>{    
    let typeReducer: any;
    if (!props.status) {
      if(state.fightList.length < 6) {
        typeReducer = addFight({
            ...props,
            status: true
        });        
        dispatch(typeReducer);
        if(state.fightList.length === 5) {
          setTimeout(() =>{
            alert("Ya selecciono 6 pokemons, ya no podra seleccionar mas");
          }, 650);
        }
      } 
    } else {
        typeReducer = removeFight({
            ...props,
            status: false
        });
        dispatch(typeReducer);
    }
  });

  pokemonService.goto.subscribe('go',(name: string) =>{
    navigate('/board/'+name);
  });

  return (
    <div className="container p-5">
      <div className="row text-center">
        <Routes>          
          <Route path='/board' element={<Board></Board>}></Route>
          <Route path='/board/:name' element={<PokemonDetails key={keyd}></PokemonDetails>}></Route>
          <Route path="" element={<Navigate to="/board" />} />
        </Routes>        
        <FightList></FightList>
      </div>
    </div>
  );  
}
export default App;
