import { selectorPokemonDisabled, useAppSelector } from "../../store-1/hooks";

function PokemonCard(props: any) {

    const disabled = useAppSelector(selectorPokemonDisabled);
    const actionList = (e: any) =>{
        e.stopPropagation();
        const data = {
            ...props
        }
        delete data.dispatch;
        delete data.selectItem;
        delete data.className;        
        props.dispatch.next(data);
    } 

    const clickItem = () =>{
        props.selectItem.next(props.name);
    }
    
    return (
        <div className={"mb-4 "+props.className} > 
            <div className="card" onClick={clickItem}>
                <img className="card-img-top" src={props.image} alt="" />
                <div className="card-img-overlay">
                    <button disabled={disabled && !props.status} className={ (props.status? "select" : "notSelect" )+ " btn btn-custom p-0"} onClick={(e)=> actionList(e)}> <p>{props.status ? "-": "+"} </p></button>
                </div>
                <div className="card-body">
                    <h5 className="card-title fs-6">{props.name}</h5>
                </div>
            </div>
        </div>
      );
}
export default PokemonCard;
