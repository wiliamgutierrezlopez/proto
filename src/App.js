//import logo from './logo.svg';
import './App.css';
import Carrucel from './componentes/carrucel';
import Menu from'./componentes/menu'
import Contenido from"./componentes/contenido";

function App() {
  return (
    <div className="App">
     <Menu/>
       <Carrucel/>
      <Contenido/>
    </div>
  );
}

export default App;
