import React, { useState } from  'react';
    
    
const UserForm = (props) => {
    /* const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  */ 

    const [form, setForm] = useState({
        firstName:'',
        lastName:'',
        email:'',
        password:'',
        confirmpassword:''
    });
    
    const createUser = (e) => {
        e.preventDefault();
        console.log(e);

        const newUser = { form };
        console.log("Welcome", newUser);
        setForm({firstName:'',lastName:'',email:'',password:'',confirmpassword:''});
    };
    
    return(
    <div className="person">
        <form onSubmit={ createUser }>
            <div>
                <label>Nombre: </label>
                <input type="text" onChange={ (e) => setForm({...form,firstName:e.target.value}) } value={form.firstName}/>
            </div>
            <div>
                <label>Apellido: </label>
                <input type="text" onChange={ (e) => setForm({...form,lastName:e.target.value}) } value={form.lastName}/>
            </div>
            <div>
                <label>Email Address: </label> 
                <input type="text" onChange={ (e) => setForm({...form,email:e.target.value}) } value={form.email} />
            </div>
            <div>
                <label>Contraseña: </label>
                <input type="text" onChange={ (e) => setForm({...form,password:e.target.value}) } value={form.password}/>
            </div>
            <div>
                <label>Confirmar Contraseña: </label>
                <input type="text" onChange={ (e) => setForm({...form,confirmpassword:e.target.value}) } value={form.confirmpassword}/>
            </div>
            <input type="submit" value="Create User" />
        </form>
        <div className="showinfo">
            <h1>Datos del usuario</h1>
            <h3>Nombre: {form.firstName}</h3>
            <h3>Apellido: {form.lastName}</h3>
            <h3>Email: {form.email}</h3>
            <h3>Contraseña: {form.password}</h3>
            <h3>Confirmación Contraseña: {form.confirmpassword}</h3>

        </div>

    </div>
        

    );
};
    
export default UserForm;