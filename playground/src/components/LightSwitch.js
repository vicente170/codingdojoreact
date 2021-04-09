import react, { Component } from "react";

class LightSwitch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      position: "On",
    };
  }
  // this method goes inside of the LightSwitch Component, and on top of render
  flipSwitch = () => {
    if (this.state.position === "On") {
      this.setState({ position: "Off" });
    } else {
      this.setState({ position: "On" });
    }
  };

  render() {
      
    function handleClick(e) {
      e.preventDefault();
      alert("boton clickeado");
    }

    //Por qué no funciona?
    /* handleClick = (e) => {
        e.preventDefault();
        alert("boton clickeado");
      } */

    return (
      <fieldset>
                <p>The light is currently {this.state.position}</p>
                <button onClick={this.flipSwitch}>Flip Switch</button>
                <button onClick={handleClick}>Click Me</button>
                    
      </fieldset>
    );
  }
}

export default LightSwitch;
