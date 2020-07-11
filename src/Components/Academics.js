import React from 'react';

import './css/Academic.css'
import Academic from "./Academic";

function Academics (props){
  return (
      <div>
        <div className="mb-2">
          <button className="btn btn-outline-dark btn-block" data-toggle="collapse" data-target="#collapseTwo"
                  aria-expanded="true" aria-controls="collapseTwo">
            <h3>GRADO ACADEMICO</h3>
          </button>
        </div>
        <div id="collapseTwo" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
          <div className="row">
            {props.academics.map(academic => {
              return (
                  <Academic key={academic.id} academic={academic}/>
              );
            })}
          </div>
        </div>
      </div>
  );
}

export default Academics;