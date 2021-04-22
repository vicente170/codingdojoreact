import logo from './logo.svg';
import './App.css';
import { Router } from '@reach/router';
import Home from './Components/Home';
import Page from './Components/Page'
import Pageplus from './Components/Pageplus';

function App() {
  return (
    <div className="App">
      <Router>
        <Home path='/home' />
        <Page path='/:var' />
        <Pageplus path='/:var/:color1/:color2' />

      </Router>
      
      
    </div>
  );
}

export default App;
