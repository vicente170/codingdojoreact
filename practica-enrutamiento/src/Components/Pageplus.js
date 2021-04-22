import React from 'react';

const Pageplus = (props) => {

    const palabra= props.var;
    const color1=props.color1;
    const color2=props.color2;

    const showMessage= ()=>
    {
        if(isNaN(palabra)){
            return (
                <h1>La palabra es: {palabra} </h1>
            )
        }
        else{
            return (
                <h1>El número es: {palabra} </h1>
            )
        }
    }


    return (
        <div style={{backgroundColor: color2,color:color1}}>
            <h1> {showMessage()} </h1>
        </div>
    );
}

export default Pageplus;
