import { useState } from "react";
import PokemonCard from "../pokemon-card/pokemon-card.component";

function Board(props: any) {

    const [search, setNewSearch] = useState("");
    const pressInput = (e : any) => {    
        setNewSearch(e.target.value);
    }

    const filtered = !search
    ? props.list
    : props.list.filter((item:any) =>{
       return item.name.toLowerCase().includes(search.toLowerCase()) || item.id == search;
    });
    return (
        <div className="col-8 p-4">
            <input type="text" className="form-control mb-4" placeholder='Busque el pokemon por Nombre o numero' onChange={pressInput}/>

            <div className="row text-center">
            { 
                filtered.map((item: any)=>{
                return <PokemonCard key={item.id} id={item.id} name={item.name} image={item.image} className="col-xl-3 col-md-4" status={item.status} dispatch={props.dispatch} selectItem={props.selectItem}></PokemonCard>
                })
            }      
            </div>
        </div>
    );
  }
  export default Board;
  