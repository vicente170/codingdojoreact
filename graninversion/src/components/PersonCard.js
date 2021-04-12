import React, { Component } from 'react';

const PersonCard = props =>{
    
      /* addYear = () => {
          let ageplusone=this.state.ageperson+1;
          this.setState({ ageperson: ageplusone });
      }; */
    

        const {firstName,lastName,age,hairColor}=props;
        

        return (
            <div>
                <h1>{lastName},{firstName}</h1>
                <p>Age: {age} </p>
                <p>Hair Color: {hairColor} </p>
            </div>
        );

    
    
}

export default PersonCard;