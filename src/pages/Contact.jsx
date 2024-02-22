import React from "react";
import { useState } from 'react';
import { validateEmail } from '../utils/helpers';
import ContactInfo from "../components/ContactInfo";
import CozyCat from "../assets/CatAI-1.jpg";
import { FaEnvelope } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "../index.css";

export default function Contact() {
  // Using useState, set the initial value for name, email, and message
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleNameChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'name') {
      setName(inputValue);
    } 
  };

  const handleEmailChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'email') {
      setEmail(inputValue);
    }
  };

  const handleMessageChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'message') {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();
    // Set a boolean variable to indicate if there is an valid input in the form fields
    let valid = true;

    if (!name) {
      setErrorMessage('Name is required');
      valid = false;
      return;
    }
    // Check if email is valid
    if (!validateEmail(email)) {
      setErrorMessage('Email or name is invalid');
      valid = false;
      return;
    }
    if (!message) {
      setErrorMessage(
        `Please enter a message.`
      );
      valid = false;
      return;
    }
    if (valid) {
      setErrorMessage('Message sent!');
    }
    // Clear Inputs
    setName('');
    setEmail('');
    setMessage('');
  };


  return (
    // <section className="vh-100" style={{backgroundImage: `url(${CozyCat})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center",
    // backgroundAttachment:"fixed"}}> 
      <div className="container vh-100 mw-100" >
        <div className="row justify-content-center">
          {/* Form container */}
          <div className="col col-10 col-md-8 col-lg-4  rounded mt-5" style={{backdropFilter: "blur(60px)"}}>
          <h1 className="text-center text-warning py-3 mt-3">Contact Me</h1>
            {/* Form */}
            <form className="contactForm justify-content-center"
              method="POST"
              name="contact"
              >
              <input type="hidden" name="form-name" value="contact" />

              {/* Name */}
              <div data-mdb-input-init className="form-outline mb-4 mt-3">
                <input
                  name="name"
                  value={name}
                  onChange={handleNameChange}
                  type="text"
                  id="name"
                  className="form-control"
                  placeholder="Name"
                />
                <label className="form-label"></label>
              </div>
              {/* Email */}
              <div data-mdb-input-init className="form-outline mb-4">
                <input
                  name="email"
                  value={email}
                  onChange={handleEmailChange}
                  type="email"
                  id="email"
                  className="form-control"
                  placeholder="Email"
                />
                <label className="form-label"></label>
              </div>
              {/* Message */}
              <div data-mdb-input-init className="form-outline mb-4">
                <textarea
                  name="message"
                  value={message}
                  onChange={handleMessageChange}
                  className="form-control"
                  id="message"
                  rows="4"
                  placeholder="Message"
                ></textarea>
                <label className="form-label"></label>
              </div>
              
              {/* Email Link */}
              <div className="d-flex justify-content-between align-items-start">
                {/* Send Button */}
              <button type="button" onClick={handleFormSubmit} className="btn btn-warning btn-block mb-4">
                Send Message
              </button>
              </div>    
            </form>
            {errorMessage && (
              <div>
                <p className="">{errorMessage}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    // </section>
  );
}
