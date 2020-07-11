import React from 'react'

import Course from "./Course";
import './css/Course.css'

function Courses (props) {
  return (
    <div>
      <div className="mb-2">
        <button className="btn btn-outline-dark btn-block" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          <h3>CURSOS, SEMINARIO y TALLERES DE EDUCACIÓN CONTINUA</h3>
        </button>
      </div>
      <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
        <div className="row">
          {props.courses.map((course, index) => {
            return (
              <Course key={index} course={course}/>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Courses;