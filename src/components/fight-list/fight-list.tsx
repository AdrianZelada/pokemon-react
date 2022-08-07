import PokemonCard from "../pokemon-card/pokemon-card.component";

function FightList(props: any) {
  
    return (
        <div className="col-4 color-gray p-4 mt-4">
            <p>Listos para el combate</p>
            <div className="row text-center">
            { 
                props.list.length > 0 ?
                props.list.map((item: any)=>{
                    return <PokemonCard key={item.id} id={item.id} name={item.name} image={item.image} className="col-6" status={item.status} dispatch={props.dispatch}></PokemonCard>
                }) : 
                "Lista vacia, no hay ningun pokemon listo"
            }      
            </div>
        </div>
    );
  }
  export default FightList;
  