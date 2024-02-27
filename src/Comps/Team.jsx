import React from 'react';
import ghassaan from './G.jpg';
import anas from './A.jpg';
import wajdan from './W.jpg';

const Team = () => {
  return (
    <div className='container team sections' id='team'>
      <h1>Team</h1>
      <div className="card-container">

        <div className="card">
          <img className="card-img-top images" src={anas} alt="Card image cap" />
          <div className="card-body">
            <p className="card-text">Anas</p>
          </div>
        </div>

        <div className="card">
          <img className="card-img-top images" src={ghassaan} alt="Card image cap" />
          <div className="card-body">
            <p className="card-text">Ghassaan (Me)</p>
          </div>
        </div>

        <div className="card">
          <img className="card-img-top images" src={wajdan} alt="Card image cap" />
          <div className="card-body">
            <p className="card-text">Wajdan</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;