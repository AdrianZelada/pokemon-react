import { selectorFightPokemon, useAppSelector } from "../../store-1/hooks";
import PokemonCard from "../pokemon-card/pokemon-card.component";

// const selectItem = (data: any) =>{}

function FightList(props: any) {
    const listPokemon = useAppSelector(selectorFightPokemon);
  
    return (
        <div className="col-4 color-gray p-4 mt-4">
            <h4 >Listos para el combate</h4>
            <div className="row text-center justify-content-lg-center">
            { 
                listPokemon.length > 0 ?
                listPokemon.map((item: any)=>{
                    return <PokemonCard key={item.id} id={item.id} name={item.name} image={item.image} className="col-md-12 col-xl-6 col-lg-8" status={item.status} dispatch={props.dispatch} selectItem={props.selectItem}></PokemonCard>
                }) : 
                <p className="fs-6">Lista vacia, no hay ningun pokemon listo</p> 
            }      
            </div>
        </div>
    );
  }
  export default FightList;
  