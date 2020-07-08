import React from 'react';

function Academic (props){
  return (
      <div className="col-md-4">
        <div className="card text-center border-info mb-2">
          <div className="card-header bg-info">{props.academic.title}</div>
          <div className="card-body">
            <p>{props.academic.university}</p>
            <p>{props.academic.place}</p>
          </div>
        </div>
      </div>
  );
}

export default Academic;