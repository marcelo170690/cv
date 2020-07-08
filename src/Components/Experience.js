import React from 'react'

import './css/Experience.css'

function Experience (props){
  return (
      <div className="experience small">
        <div className="experience-left">
          <div className="circle"></div>
        </div>
        <div className="experience-right">
          <p>{props.experience.place} - {props.experience.boos}</p>
          <p>{props.experience.app}</p>
          <p>{props.experience.reference} {'- ' + props.experience.link}</p>
        </div>
      </div>
  );
}

export default Experience