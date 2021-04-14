import React, {useState} from "react";

const BoxForm = (props) => {
  const { boxes, setBoxes } = props;
  

  const[color,setColor]=useState('#000000');

  const onSubmit = (e) => {
    e.preventDefault();
      setBoxes([...boxes,color]);
  }

  return (
    <div>
      <form onSubmit={onSubmit}  >
        <div className="form-group">
          <label htmlFor="box">Elegir color: </label>
          <input type="color" name="box" onChange={ (e) => setColor(e.target.value) }></input>
        </div>
        <div className="form-group">
          <input type="submit" value='Agregar Color'></input>
        </div>
      </form>
    </div>
  );
};

export default BoxForm;
