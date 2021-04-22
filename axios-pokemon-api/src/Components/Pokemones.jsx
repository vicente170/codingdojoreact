import React , {useState,useEffect} from 'react';
import axios from 'axios';

const Pokemones = () => {

    const [pokemons,setPokemons]=useState([]);
    const [click,setClick]=useState(false);

    const onClick = () =>{
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=807&offset=0')
        .then(response=>{
            console.log(response.data.results);
            setPokemons(
                response.data.results
            )
        }).catch(e=>console.log(new Error('fallo al comunicarse con la api')))
        
    }

    return (
        <div>
            <button onClick={onClick}>FETCH POKEMONS</button>
            <ul className="poks">
                {pokemons? pokemons.map((item,index)=>{
                    return (<li key={index}> {item.name} </li>)
                }):null
            }
            </ul>
        </div>
    );
}

export default Pokemones;
