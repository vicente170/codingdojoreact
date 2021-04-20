import logo from './logo.svg';
import './App.css';
import Tab from './Components/Tab';
import Tabs from './Components/Tabs';

function App() {
  return (
    <div className="App">
      <Tabs>
        <Tab title="Primer Tab" content="Este es el contenido del primer Tab" state='active' />
        <Tab title="2º tab" content="Contenido del Segundo Tab" state=''  />
        <Tab title="3º tab" content="Contenido Tab #3" state='' />
      </Tabs>
     
    </div>
  );
}

export default App;
