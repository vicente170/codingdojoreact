import React from 'react';

const Results = (props) => {

    const {firstName,lastName, email, password, confirmPassword} = props.data;


    return(
        <div>
            <p>Nombre: {firstName} </p>
            <p>Apellido: {lastName} </p>
            <p>Email: {email} </p>
            <p>Contraseña: {password} </p>
            <p>Confirmar Contraseña: {confirmPassword} </p>
        </div>
    )


}

export default Results;