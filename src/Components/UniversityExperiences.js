import React from 'react';
import UniversityExperience from "./UniversityExperience";
import './css/UniversityExperience.css'

function UniversityExperiences(props){
  return (
      <div className="mb-2">
        <div className="mb-2">
          <button className="btn btn-outline-dark btn-block" data-toggle="collapse"
                  data-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
            <h3>EXPERIENCIA UNIVERSITARIA</h3>
          </button>
        </div>
        <div id="collapseFour" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
          <div className="row">
            {props.universityExperiences.map((universityExperience, index) => {
              return (
                  <UniversityExperience key={index} universityExperience={universityExperience}/>
              );
            })}
          </div>
        </div>
      </div>
  );
}

export default UniversityExperiences