import PokemonCard from "../pokemon-card/pokemon-card.component";

function FightList(props: any) {
  
    return (
        <div className="col-4 color-gray p-4 mt-4">
            <h4 >Listos para el combate</h4>
            <div className="row text-center">
            { 
                props.list.length > 0 ?
                props.list.map((item: any)=>{
                    return <PokemonCard key={item.id} id={item.id} name={item.name} image={item.image} className="col-md-12 col-xl-6 col-lg-6" status={item.status} dispatch={props.dispatch}></PokemonCard>
                }) : 
                <p className="fs-6">Lista vacia, no hay ningun pokemon listo</p> 
            }      
            </div>
        </div>
    );
  }
  export default FightList;
  