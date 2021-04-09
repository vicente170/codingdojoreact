import React from "react";
import './First.css';

class First extends React.Component {
  render() {
    return (
    <div className="main">
        <h1>Hello Dojo!</h1>
        <h2>Things i need to do:
        </h2>
        <ul>
          <li>Learn React</li>
          <li>Climb mt. everest</li>
          <li>Run a marathon</li>
          <li>Feed the dogs</li>
        </ul>
      </div>
    );
  }
}

export default First;
