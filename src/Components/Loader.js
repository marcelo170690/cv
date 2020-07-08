import React from 'react';
import './css/Loader.css'

function Loader(props){
  return (
    <div className="loader__container text-center mb-2">
      <br/><br/>
      <div className={'spinner-border '+props.style} role="status">
        <span className="sr-only">Loading...</span>
      </div>
      <div className={props.style}>
        <b>Cargando . . .</b>
      </div>
    </div>
  );
}

export default Loader;