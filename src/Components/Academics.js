import React from 'react';

import './css/Academic.css'
import Academic from "./Academic";

function Academics (props){
  return (
      <div>
        <div className="title-academic mb-2">
          <h3>GRADO ACADEMICO</h3>
        </div>
        <div className="row">
          {props.academics.map(academic => {
            return (
                <Academic key={academic.id} academic={academic}/>
            );
          })}
        </div>
      </div>
  );
}

export default Academics;