import React, { useState,useEffect } from "react";

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

  const checkPasswords = () =>{
    console.log(form.password.length);
    console.log(form.confirmPassword.length);

    if (form.password.length===0 | form.confirmPassword.length===0){}else{
      if (form.password===form.confirmPassword){
      return '';
      }
      else{
        return 'Contraseña no calzan';
      }
    }

    
  }



  const onChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    const { firstName, lastName, email, password, confirmPassword } = form;

    console.log(e.target.value);//a
    console.log(form.firstName);//

    

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

    /* if (checkPasswords()){
      setErrors({
        ...errors,
        confirmPasswordE: "Contraseña calzan",
      });
    }
    else{
      setErrors({
        ...errors,
        confirmPasswordE: "Contraseña NO calzan",
      });
    } */


          

    /* if(e.target.name==='password' && e.target.value!=confirmPassword){
    setErrors({
        ...errors,
        confirmPasswordE: "Contraseñas no coinciden",
        });
    }
    if(e.target.name==='password' && e.target.value===confirmPassword){
    setErrors({
        ...errors,
        confirmPasswordE: "Contraseñas no coinciden",
        });

    } */

    /* if (firstName.length < 3 ) {
      setErrors({
        ...errors,
        firstNameE: "Nombre tiene menos de 2 caracteres",
      });
      //return alert ('nombre de usuario menor a 3 caracteres');
    } 
    if (firstName.length >= 3 ) {
        setErrors({
          ...errors,
          firstNameE: "",
        });
        //return alert ('nombre de usuario menor a 3 caracteres');
      } */

   /*  if (lastName.length < 3) {
        setErrors({
          ...errors,
          lastNameE: "Apellido tiene menos de 2 caracteres",
        });
        //return alert ('nombre de usuario menor a 3 caracteres');
      } 
      if (lastName.length >= 3) {
        setErrors({
          ...errors,
          lastNameE: "",
        });
        //return alert ('nombre de usuario menor a 3 caracteres');
      } */

      console.log(form);
      console.log(errors);

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
        <input onChange={onChange} type="text" name="password"></input>
        <p style={redstyle}> {errors.passwordE} </p>
        <p style={redstyle}> {errors.confirmPasswordE} </p>
        <p style={redstyle}> {checkPasswords()} </p>
      </div>
      <div className="form-group">
        <label htmlFor="confirmPassword">Confirmar Contraseña</label>
        <input onChange={onChange} type="text" name="confirmPassword"></input>
      </div>
    </form>
    <h1>  nombre {form.firstName} </h1>
    <h1> apellido {form.lastName} </h1>

    </div>
    
  );
};

export default UserForm;
