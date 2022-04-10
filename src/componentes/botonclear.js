import React from 'react';
import '../style-sheets/botonclear.css'


const Botonclear = (props) => (
  <div className="botonclear" onClick={props.manejarClear}>
    {props.children}
  </div>
);

export default Botonclear;
