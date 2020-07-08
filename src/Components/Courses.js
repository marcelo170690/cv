import React from 'react'

import Course from "./Course";
import './css/Course.css'

function Courses (props) {
  return (
    <div>
      <div className="title-course mb-2">
        <h3>CURSOS, SEMINARIO y TALLERES DE EDUCACIÓN CONTINUA</h3>
      </div>
      <div className="row">
        {props.courses.map((course, index) => {
          return (
            <Course key={index} course={course}/>
          );
        })}
      </div>
    </div>
  );
}

export default Courses;