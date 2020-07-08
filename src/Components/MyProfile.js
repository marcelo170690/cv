import React from 'react';

import marcelo from '../Img/marceloNormal.png'

function MyProfile (){
  return (
    <div>
      <div className="card">
        <img src={marcelo} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h4 className="card-title text-center">DESARROLLADOR WEB</h4>
          <h5 className="card-title text-center">INGENIERO INFORMATICO</h5>
          <div className="text-center">
            <p className="card-text">
              marcelo170690@gmail.com marcelo@team7binary.com
            </p>
            <p className="card-text">
              <b>TELEFONO</b> 77562023
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyProfile;