import React from 'react'

function Course (props) {
  return (
    <div className="col-md-4">
      <div className="card border-warning text-center mb-2">
        <div className="card-header bg-warning">
          {props.course.kind}
        </div>
        <div className="card-body">
          <p>{props.course.title}</p>
          <p>{props.course.place}</p>
          <p>{props.course.date}</p>
        </div>
      </div>
    </div>
  );
}

export default Course;