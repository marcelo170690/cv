import React from 'react'

import Experience from "./Experience";

function Experiences (props){
  return (
      <div className="mb-2">
        <div className="title-experience">
          <h3>EXPERIENCIA PROFESIONAL</h3>
        </div>
        <div>
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