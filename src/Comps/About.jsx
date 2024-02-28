import React from 'react'
import { useState } from 'react'
import myCV from '../Ghassaan_CV.pdf';
import SkillsGraph from './SkillsGraph';

const About = () => {
  const [btnValue, setBtnValue] = useState("More / Download my CV")
  const btnClicked = () => {
    if (btnValue === "More / Download my CV") {
      setBtnValue("Reverse the details");
      setPara(paraNew);
    } else if (btnValue === "Reverse the details") {
      setBtnValue("More / Download my CV");
      setPara(paraOld);
    }
  };
  const paraOld = "Hey there! I'm Ghassaan, a budding ReactJS developer passionate about crafting awesome web experiences. Although I haven't dived into the professional world yet, my journey has been filled with hands-on learning, fueled by my love for coding."
  const paraNew = "I'm currently a student of BSCS in a reputable institue and have also been learning new tech everyday. I'm also a good at JAVA, C, and WordPress. I have a CV attached down below so if you are interested in recruiting me for a task, you can have a full detail about me!"
  const [para, setPara] = useState(paraOld);
  return (
    <div className='container sections about-content' id='about'>
      <div className="me"></div>
      <div className="dummy"></div>
      {/* <SkillsGraph/> */}
      <div className="myAbout">
        <p>{para}</p>
        <input type="button" className='btn btn-danger' id="myBtn" onClick={btnClicked} value={btnValue} />
        {btnValue === "Reverse the details" && (
          <a href={myCV} id='myCV' download="Ghassaan_CV.pdf">Download Resume</a>
        )}
      </div>
    </div>
  )
}

export default About