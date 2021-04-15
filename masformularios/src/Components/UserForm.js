import React, { useState,useEffect,useRef } from "react";

const UserForm = (props) => {
  /* const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  */ 
const [form,setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({
    firstNameE: "",
    lastNameE: "",
    emailE: "",
    passwordE: "",
    confirmPasswordE: "",
    match: false
  });

  const passwordRef=useRef(null);
  const cPasswordRef=useRef(null);

  const [iguales,setIguales]=useState(true);



  const onChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    const { firstName, lastName, email, password, confirmPassword } = form;

    

    if(e.target.name==='firstName' && e.target.value.length<2){
        setErrors({
            ...errors,
            firstNameE: "Nombre tiene menos de 2 caracteres",
          });
    }
    if(e.target.name==='firstName' && (e.target.value.length>=2||e.target.value.length===0)){
        setErrors({
            ...errors,
            firstNameE: "",
          });
    }
    
    if(e.target.name==='lastName' && e.target.value.length<2){
        setErrors({
            ...errors,
            lastNameE: "Apellido tiene menos de 2 caracteres",
          });
    }
    if(e.target.name==='lastName' && (e.target.value.length>=2||e.target.value.length===0)){
        setErrors({
            ...errors,
            lastNameE: "",
          });
    }

    if(e.target.name==='email' && e.target.value.length<5){
        setErrors({
            ...errors,
            emailE: "Email tiene menos de 5 caracteres",
          });
    }
    if(e.target.name==='email' && (e.target.value.length>=5||e.target.value.length===0)){
        setErrors({
            ...errors,
            emailE: "",
          });
    }

    if(e.target.name==='password' && e.target.value.length<8){
        setErrors({
            ...errors,
            passwordE: "Contraseña debe tener al menos 8 caracteres",
          });
    }
    if(e.target.name==='password' && (e.target.value.length>=8||e.target.value.length===0)){
        setErrors({
            ...errors,
            passwordE: "",
          });
          
          }

    const valp=passwordRef.current.value;
    const valcp=cPasswordRef.current.value;

    setIguales(valp===valcp);

  };

  


  const createUser = (e) => {
    e.preventDefault();
    console.log(e);

    const { username, email, password } = form;
    const newUser = { form };
    console.log("Welcome", newUser);
    setForm({ username: "", email: "", password: "" });
  };

  let redstyle={color:'red'};

  return (
    <div>
      <form>
      <div className="form-group">
        <label htmlFor="firstName">Nombre</label>
        <input onChange={onChange} type="text" name="firstName"></input>
        <p style={redstyle}> {errors.firstNameE} </p>
      </div>
      <div className="form-group">
        <label htmlFor="lastName">Apellido</label>
        <input onChange={onChange} type="text" name="lastName"></input>
        <p style={redstyle}> {errors.lastNameE} </p>
      </div>
      <div className="form-group">
        <label htmlFor="email">Correo Electrónico</label>
        <input onChange={onChange} type="text" name="email"></input>
        <p style={redstyle}> {errors.emailE} </p>
      </div>
      <div className="form-group">
        <label htmlFor="password">Contraseña</label>
        <input onChange={onChange} type="text" name="password" ref={passwordRef}></input>
        <p style={redstyle}> {errors.passwordE} </p>
      </div>
      <div className="form-group">
        <label htmlFor="confirmPassword">Confirmar Contraseña</label>
        <input onChange={onChange} type="text" name="confirmPassword" ref={cPasswordRef}></input>
        <p style={redstyle}> {iguales ? '' : 'Las contraseñas deben ser iguales'} </p>
      </div>
    </form>

    </div>
    
  );
};

export default UserForm;
