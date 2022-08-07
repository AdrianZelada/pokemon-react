import PokemonCard from "../pokemon-card/pokemon-card.component";

function Board(props: any) {
  
    return (
        <div className="col-8 p-4">
            <div className="row text-center">
            { 
                props.list.map((item: any)=>{
                return <PokemonCard key={item.id} id={item.id} name={item.name} image={item.image} className="col-3" status={item.status} dispatch={props.dispatch} selectItem={props.selectItem}></PokemonCard>
                })
            }      
            </div>
        </div>
    );
  }
  export default Board;
  