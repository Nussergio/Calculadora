import freecodecamp from './imagenes/freecodecamp-logo.png'
import './App.css';
import Boton from './componentes/boton';
import Pantalla from './componentes/pantalla';
import Botonclear from './componentes/botonclear';
import { useState } from 'react';
import {evaluate} from 'mathjs';

function App() {

  const [ input, setInput ] = useState('');

  const agregarInput = val => (
    setInput( input + val)
  );
  const calcular = () => {
    if (input){
      setInput(evaluate(input))}
    else{
      alert('ingrese valores')
  }};

  return (
    <div className="App">
      <div className='freecodecamp-logo-contendor' >
        <img className='freecodecamp-logo'
        src={freecodecamp} alt='imagen de frecodecamp' />

      </div>

      <div className='contenedor-calculadora'>
        <Pantalla input={input}/>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>1</Boton>
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>4</Boton>
          <Boton manejarClic={agregarInput}>5</Boton>
          <Boton manejarClic={agregarInput}>6</Boton>
          <Boton manejarClic={agregarInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>7</Boton>
          <Boton manejarClic={agregarInput}>8</Boton>
          <Boton manejarClic={agregarInput}>9</Boton>
          <Boton manejarClic={agregarInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={calcular}>=</Boton>
          <Boton manejarClic={agregarInput}>0</Boton>
          <Boton manejarClic={agregarInput}>.</Boton>
          <Boton manejarClic={agregarInput}>/</Boton>
        </div>
        <div>
          <Botonclear manejarClear={() => setInput('')}>Clear</Botonclear>
        </div>
      </div>
    </div>
  );
}

export default App;
