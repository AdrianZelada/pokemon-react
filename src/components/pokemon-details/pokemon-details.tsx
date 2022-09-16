import { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import pokemonService from '../../pokemon.service';
import { editPokemon } from "../../actions/pokemon.action";
import { selectorPokemonByName, selectorPokemonDisabled, useAppDispatch, useAppSelector } from "../../store-1/hooks";

function PokemonDetails(props: any) {
    const {name} = useParams();    
    let navigate = useNavigate(); 
    const pokemon = useAppSelector(selectorPokemonByName(name));
    const disabled = useAppSelector(selectorPokemonDisabled);
    const dispatch = useAppDispatch();
    const labels: any = {
        hp: 'Vida',
        defense: "Defensa",
        attack: "Ataque",
        "special-attack": "Ataque especial",
        "special-defense": "Defensa especial",
        speed: "Velocidad"
    }
    
    useEffect(() => {
        if(pokemon) {
            if(!pokemon.details) {
                pokemonService.getPokemon(name).then((response) => {
                    const edit = editPokemon({
                        image: response.sprites?.front_default,
                        name: response.name,
                        number: response.id,
                        height: response.height,
                        types: response.types,
                        stats: response.stats,
                        id: response.id
                    });
                    dispatch(edit);
                })
            }
        } else {
            navigate('/');
        }
      }, [name, pokemon]);

    const actionItem = () =>{        
        props.actionItem(pokemon);
    }

    return (
        <div className="col-8 p-4">
            <nav className="navbar bg-light">
                <div className="container-fluid">
                    <Link to='/'> Atras</Link>
                    { !disabled ? <div className="d-flex">
                        <button className={"btn " + (pokemon?.status? "btn-danger": "btn-primary")} type="submit" onClick={actionItem}>{pokemon?.status ? "Remover de la Lista": "Agregar a Lista"}</button>
                    </div> : '' 
                    }
                    {/* <div className="d-flex">
                        <button className={"btn " + (pokemon?.status? "btn-danger": "btn-primary")} type="submit" onClick={actionItem}>{pokemon?.status ? "Remover de la Lista": "Agregar a Lista"}</button>
                    </div> */}
                </div>
            </nav>
            <div className="card" >
                <img src={pokemon?.details?.image} className="image-details" alt="..."/>
                <div className="card-body">
                    <h3 className="card-title text-uppercase">{pokemon?.name}</h3>
                    <dl className="row justify-content-md-center">
                        <dt className="col-sm-6">Numero: </dt>
                        <dd className="col-sm-6 props-align"> {pokemon?.details?.number}</dd>

                        <dt className="col-sm-6">Altura: </dt>
                        <dd className="col-sm-6 props-align"> {pokemon?.details?.height}</dd>

                        <dt className="col-sm-6">Tipos</dt>
                        <dd className="col-sm-6 props-align">
                            {pokemon?.details?.types.map((item: any) =>{
                                return <p className="mb-0">{item.type.name}</p>
                            })}
                        </dd>
                        <dt className="col-sm-6">Estadisticas base :</dt>
                        
                        <dd className="col-sm-6 props-align">                            
                            {pokemon?.details?.stats.map((item: any) =>{
                                return <p className="mb-0"> <span>{labels[item.stat.name]} -</span> {item.base_stat}</p>
                            })}
                        </dd>
                    </dl>                    
                </div>
            </div>
        </div>
    );
  }
  export default PokemonDetails;
  