import React from 'react';

const Page = (props) => {

    const varprops= props.var;

    const showMessage= ()=>
    {
        if(isNaN(varprops)){
            return (
                <h1>La palabra es: {varprops} </h1>
            )
        }
        else{
            return (
                <h1>El número es: {varprops} </h1>
            )
        }
    }


    return (
        <div>
            {showMessage()}
        </div>
    );
}

export default Page;
