import React, { Component,useState,useEffect } from "react";
import axios from 'axios';

const PersonCard = (props) => {
  const { firstName, lastName, age, hairColor } = props;

  //state es el estado
  //setState es una funcion que cambia a state.
  //useState es un hook
  const [state, setState] = useState({
    clickCount: 0,//state
});

const [pokemones, setPokemones] = useState([]);
console.log(pokemones);

// De forma similar a componentDidMount y componentDidUpdate
//Recibe primero una fguncion anonima, y despues un array que si es vaco lo ejecuta cada vezx
//se carga la pagina. Y si tiene argumentos, cada vez que se cambia el valor de esa varialbe. Uno pone
//una variable ds eestado en el array.
useEffect(() => {
    // Actualiza el título del documento usando la API del navegador
    //document.title = `You clicked ${count} times`;
    axios.get('https://rickandmortyapi.com/api/character').then(response=>{
        //console.log(response);
        console.log(response.data.results);
        setPokemones(response.data.results);
        
    }
    ).catch(e=>console.log(new Error('fallo al comunicarse con la api')));
    
  },[]);



  /* function handleClick(e) {
    e.preventDefault();
    alert("boton clickeado");
  } */

  const handleClick = () => {
    setState({
        clickCount: state.clickCount + 1
    });
}



  return (
    <div>
     {/*  <h1>
        {lastName},{firstName}
      </h1>
      <p>Age: {age} { state.clickCount } </p>
      <p>Hair Color: {hairColor} </p>
      <button onClick={ handleClick }>Click Me</button> */}

      { 
      pokemones.length>0 && pokemones.map(item=><p key={item.name}> {item.name} </p>)
      }

    </div>
  );
};

export default PersonCard;
