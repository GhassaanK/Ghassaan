import { useState } from 'react';
import React from 'react'
import emailjs from '@emailjs/browser';


const Contact = () => {

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [stateMessage, setStateMessage] = useState(null);
    const sendEmail = (e) => {
        e.persist();
        e.preventDefault();
        setIsSubmitting(true);
      
        const formData = new FormData(e.target);
      
        const templateParams = {
          user_name: formData.get('user_name'),
          user_email: formData.get('user_email'),
          user_message: formData.get('user_message'),
        };
      
        console.log('Public Key:', process.env.REACT_APP_PUBLIC_KEY);
        
        emailjs
          .send(
            process.env.REACT_APP_SERVICE_ID,
            process.env.REACT_APP_TEMPLATE_ID,
            templateParams,
            process.env.REACT_APP_PUBLIC_KEY
          )
          .then(
            (result) => {
              setStateMessage('Message sent!');
              setIsSubmitting(false);
              setTimeout(() => {
                setStateMessage(null);
              }, 30000);
            },
            (error) => {
              setStateMessage('Something went wrong, please try again later');
              setIsSubmitting(false);
              setTimeout(() => {
                setStateMessage(null);
              }, 5000);
            }
          );
      
        e.target.reset();
      };      
      
  return (
    <div className="container contact-form" id='contact'>
      <div className="contact-image">
        <img width="48" height="48" src="https://img.icons8.com/color/48/topic--v1.png" alt="Message topic icon"/>
      </div>
      <form onSubmit={sendEmail}>
        <h3>Drop Me a Message</h3>
        <div className="row">
          <div className="col-md-12">
            <div className="form-group">
              <input type="text" name="user_name" className="form-control" placeholder="Your Name *" required/>
            </div>
            <div className="form-group">
              <input type="text" name="user_email" className="form-control" placeholder="Your Email *" required/>
            </div>
          </div>
            <div className="form-group">
              <textarea name="user_message" className="form-control" placeholder="Your Message *" id='msgTextArea' required></textarea>
            </div>
            <div className="form-group col-md-12">
              <input type="submit" name="btnSubmit" disabled={isSubmitting} className="btnContact" id='btnMain' value="Send Message" />
            </div>
        </div>
        {stateMessage && <p id='successMsg'>{stateMessage}</p>}
      </form>
    </div>    
  )
}

export default Contact