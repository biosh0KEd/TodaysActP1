import logo from './platzi.webp';
import './App.css';

function App() {
  return (
    <div className="App">

      <TodoItem />
      <TodoItem />

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edita el archivo <code>src/App.js</code> y guarda para recargar.
        </p>
        <a
          className="App-link"
          href="https://platzi.com/reactjs"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

function TodoItem(){
  return(
    <li>
      <span>V</span> {/* V como el botón de item completado */}
      <p>Ir de compras</p>
      <span>X</span> {/* X como el botón de item eliminado */}
    </li>
  )
}

export default App;
