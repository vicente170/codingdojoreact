import logo from './logo.svg';
import BoxForm from './Components/BoxForm';
import Results from './Components/Results';
import './App.css';
import React, {useState} from "react";

function App() {


  const [boxes,setBoxes]=useState([]);

  return (
    <div className="App">
      <BoxForm boxes={boxes} setBoxes={setBoxes} />
      <Results data={boxes} />
      
    </div>
  );
}

export default App;
