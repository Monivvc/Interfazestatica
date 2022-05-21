import logo from './logo.svg';
import './App.css';

const App = () => {
  function ejemplo (){
    return "Hola desde la funcion"
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
           Hola : D
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React {2+2} {
            ejemplo () 
          }
        </a>
      </header>
    </div>
  );
}

export default App;
