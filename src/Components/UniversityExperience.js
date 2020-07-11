import React from 'react';

function UniversityExperience(props){
  return (
      <div className="col-md-6">
        <div className="card mb-2 border-success">
          <div className="card-header bg-success text-white">
            {props.universityExperience.place}
          </div>
          <div className="card-body">
            {props.universityExperience.experience}
            <div className="text-right">
              <footer className="blockquote-footer">
                {props.universityExperience.date}
              </footer>
            </div>
          </div>
        </div>
      </div>
  );
}

export default UniversityExperience