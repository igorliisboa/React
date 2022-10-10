import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';
import Lista from './components/Lista';
import Evento from './components/Evento';

function App() {
  return (
    <div className="App">
      <HelloWorld/>
      <Frase />
      <Pessoa 
      nome='Igor'
      idade='25' 
      profissao='Programador'/>
      <SayMyName nome='Lorem Ipsum'/>
      <Lista/>
      <Evento/>
    </div>
  );
}

export default App;
