import React from 'react'
import { useState } from 'react'

const About = () => {
    const [para, setPara] = useState('');
    const [btn, setBtn] = ('XOXO');
  return (
    <div className='container sections about-content' id='about'>
        <div className="me"></div>
        <div className="dummy"></div>
        <div className="myAbout">
            <p>Hey there! I'm Ghassaan, a budding ReactJS developer passionate about crafting awesome web experiences. Although I haven't dived into the professional world yet, my journey has been filled with hands-on learning, fueled by my love for coding. </p>
            <p>{para}</p>
            <button className='btn btn-danger' onClick={() => setPara("hehe I know you love me <3")}>XOXO?</button>
        </div>
    </div>
  )
}

export default About