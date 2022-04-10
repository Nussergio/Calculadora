import React from "react";
import '../style-sheets/boton.css';

const esOperador = Valor =>{
  return isNaN(Valor) && (Valor != '.') && (Valor != '=') 
}

function Boton(props){
    return (
      <div className={`boton-contenedor ${ esOperador(props.children) ? 'operador' : 'null'}`.trimEnd()}
      onClick={() => props.manejarClic(props.children)}>
        {props.children}
      </div>
    );

};
export default Boton

