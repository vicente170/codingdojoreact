import React , {useState,useEffect} from 'react';

const Pokemones = () => {

    const [pokemons,setPokemons]=useState([]);
    const [click,setClick]=useState(false);

    const onClick = () =>{

        
    }

    useEffect(() => {
        console.log('hola');
        if(click){
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
        
    }, [click]);




    return (
        <div>
            <button onClick={e=>setClick(true)}>FETCH POKEMONS</button>
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
