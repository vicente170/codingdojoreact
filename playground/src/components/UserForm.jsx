import React, { useState } from  'react';
    
    
const UserForm = (props) => {
    /* const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  */ 

    const [form, setForm] = useState({
        username:'',
        email:'',
        password:''
    });

    const [errors, setErrors] = useState({
        usernameE:'',
        emailE:'',
        passwordE:''
    });
    
    const createUser = (e) => {
        e.preventDefault();
        console.log(e);

        const {username,email,password}=form;

        if(username.length<3){
            setErrors({...errors,usernameE:'error de validacionde user'});
            //return alert ('nombre de usuario menor a 3 caracteres');
        }

        const newUser = { form };
        console.log("Welcome", newUser);
        setForm({username:'',email:'',password:''});
    };
    
    return(
        <form onSubmit={ createUser }>
            <div>
                <label>Username: </label> 
                <input type="text" onChange={ (e) => setForm({...form,username:e.target.value}) } value={form.username}/>
                <p> {errors.usernameE} </p>
            </div>
            <div>
                <label>Email Address: </label> 
                <input type="text" onChange={ (e) => setForm({...form,email:e.target.value}) } value={form.email} />
            </div>
            <div>
                <label>Password: </label>
                <input type="text" onChange={ (e) => setForm({...form,password:e.target.value}) } value={form.password}/>
            </div>
            <input type="submit" value="Create User" />
        </form>
    );
};
    
export default UserForm;