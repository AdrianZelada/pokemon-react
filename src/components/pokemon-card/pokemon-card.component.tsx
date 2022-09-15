
function PokemonCard(props: any) {
    const actionList = (e: any) =>{
        e.stopPropagation();
        const data = {
            ...props
        }
        delete data.dispatch;
        delete data.selectItem;
        delete data.className;
        props.dispatch(data);
    } 

    const clickItem = () =>{
        props.selectItem(props.name);
    }
    
    return (
        <div className={"mb-4 "+props.className} > 
            <div className="card" onClick={clickItem}>
                <img className="card-img-top" src={props.image} alt="" />
                <div className="card-img-overlay">
                    <button className={ (props.status? "select" : "notSelect" )+ " btn btn-custom p-0"} onClick={(e)=> actionList(e)}> <p>{props.status ? "-": "+"}</p> </button>                    
                </div>
                <div className="card-body">
                    <h5 className="card-title fs-6">{props.name}</h5>
                </div>
            </div>
        </div>
      );
}
export default PokemonCard;
