import { useEffect, useReducer, useState } from 'react';
import './App.css';
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import { pokemonReducer } from './reducers/pokemon.reducer';
import { addFight, addPokemons, changeStatus, removeFight } from './actions/pokemon.action';
import pokemonService from './pokemon.service';
import Board from './components/board/board';
import FightList from './components/fight-list/fight-list';
import PokemonDetails from './components/pokemon-details/pokemon-details';
function App() {
  const [state, dispatch] = useReducer(pokemonReducer, {list: [], fightList: []});
  useEffect(() => {
    pokemonService.getPokemons().then((response) => {      
      const typeReducer = addPokemons(response.results);      
      dispatch(typeReducer);      
    })
  }, []);

  let navigate = useNavigate(); 
  const [search, setNewSearch] = useState("");

  const actionItem =(props: any)=>{
    let typeReducer: any;
    if (!props.status) {
        typeReducer = addFight({
            ...props,
            status: true
        });
    } else {
        typeReducer = removeFight({
            ...props,
            status: false
        });
    }
    dispatch(typeReducer);
    dispatch(changeStatus({id: props.id, status: !props.status}));
  }

  const goTo = (name:string)=> {
    navigate('/board/'+name);
  }

  const filtered = !search
  ? state.list
  : state.list.filter((item:any) =>{
     return item.name.toLowerCase().includes(search.toLowerCase()) || item.id == search;
  });

  const pressInput = (e : any) => {    
    setNewSearch(e.target.value);
  }

  return (
    <div className="container p-5">
      <input type="text" className="form-control" placeholder='Busque el pokemon por Nombre o numero' onChange={pressInput}/>
      <div className="row text-center">
        <Routes>          
          <Route path='/board' element={<Board list={filtered} dispatch={actionItem} selectItem={goTo}></Board>}></Route>
          <Route path='/board/:name' element={<PokemonDetails state={state} dispatch={actionItem}></PokemonDetails>}></Route>
          <Route path="" element={<Navigate to="/board" />} />
        </Routes>        
        <FightList list={state.fightList} dispatch={actionItem}></FightList>
      </div>
    </div>
  );
}
export default App;
