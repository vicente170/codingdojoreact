import React, { Component } from 'react';

class PersonCard extends Component{
    constructor(props) {
        super(props);
        this.state = {
            ageperson: this.props.age,
        };
      }
      addYear = () => {
          let ageplusone=this.state.ageperson+1;
          this.setState({ ageperson: ageplusone });
      };
    render(){

        const {firstName,lastName,age,hairColor}=this.props;
        

        return (
            <div>
                <h1>{lastName},{firstName}</h1>
                <p>Age: {this.state.ageperson} </p>
                <p>Hair Color: {hairColor} </p>
                <button onClick={this.addYear}>Birthday button for {firstName} {lastName} </button>
            </div>
        );

    }
    
}

export default PersonCard;