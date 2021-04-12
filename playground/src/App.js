import logo from './logo.svg';
import './App.css';
import PersonCard from './components/PersonCard';
import UserForm from './components/UserForm';
import LightSwitch from './components/LightSwitch';

function App() {
  return (
    <div className="App">
      <UserForm />
      <PersonCard />
      {/* <PersonCard firstName="John" lastName="Smith" age={88} hairColor='Brown'  />
      <PersonCard firstName="Millard" lastName="Fillmore" age={50} hairColor='Brown'  />
      <PersonCard firstName="Maria" lastName="Smith" age={62} hairColor='Brown'  /> */}
      <LightSwitch />
    </div>
  );
}

export default App;
