import React , {useState,useEffect} from 'react';

const Pokemones = () => {

    const [pokemons,setPokemons]=useState([]);

    const onClick = () =>{
        fetch('https://pokeapi.co/api/v2/pokemon?limit=807&offset=0')
        .then(response=>{
            return response.json()
        })
        .then(response=>{
            console.log(response.results);
            setPokemons(
                response.results
            )
        })
    
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
