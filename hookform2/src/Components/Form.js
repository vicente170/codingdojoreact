import React from "react";

const Form = (props) => {
  const { inputs, setInputs } = props;

  const onChange = (e) => {
      /* const name=e.target.name;
      console.log(name);
      console.log([name]); */
    setInputs({
      ...inputs,
        [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <form>
      <div className="form-group">
        <label htmlFor="firstName">Nombre</label>
        <input onChange={onChange} type="text" name="firstName"></input>
      </div>
      <div className="form-group">
        <label htmlFor="lastName">Apellido</label>
        <input onChange={onChange} type="text" name="lastName"></input>
      </div>
      <div className="form-group">
        <label htmlFor="email">Correo Electrónico</label>
        <input onChange={onChange} type="text" name="email"></input>
      </div>
      <div className="form-group">
        <label htmlFor="password">Contraseña</label>
        <input onChange={onChange} type="text" name="password"></input>
      </div>
      <div className="form-group">
        <label htmlFor="confirmPassword">Confirmar Contraseña</label>
        <input onChange={onChange} type="text" name="confirmPassword"></input>
      </div>
    </form>

    </div>
    
  );
};

export default Form;
