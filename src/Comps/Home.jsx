import React from 'react'
import { useState, useEffect } from 'react';

const Home = () => {

    const [isAnimated, setIsAnimated] = useState(false);

    useEffect(() => {     
      setIsAnimated(true);
      const intervalId = setInterval(() => {
        setIsAnimated((prev) => !prev);
      }, 1000);
      
      return () => clearInterval(intervalId);
    }, []);
  
    const welcomeClasses = `welcome ${isAnimated ? 'animate__animated animate__lightSpeedInRight' : ''}`;    
  return (
    <div className='container home-content sections' id='home'>
        <div className="quote">IDK why are you here but</div>
        <div className={welcomeClasses}>WELCOME</div>
        <div className="ig"><sub>(I guess)</sub></div>
        <div className="anyway">Anyways</div>
        <div className="welcome-content">`Scroll down to find out how awesome I am! ;)`</div>
        <div className="middle">
        <div className="mouse">

        </div>
        </div>
    </div>
  )
}

export default Home