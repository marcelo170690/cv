import React from 'react'

import Experience from "./Experience";

function Experiences (props){
  return (
      <div className="mb-2">
        <div className="mb-2">
          <button className="btn btn-outline-dark btn-block" data-toggle="collapse" data-target="#collapseThree"
                  aria-expanded="true" aria-controls="collapseThree">
            <h3>EXPERIENCIA PROFESIONAL</h3>
          </button>
        </div>
        <div id="collapseThree" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
          {props.experiences.map(experience => {
            return (
              <Experience key={experience.id} experience={experience}/>
            );
          })}
        </div>
      </div>
  );
}

export default Experiences