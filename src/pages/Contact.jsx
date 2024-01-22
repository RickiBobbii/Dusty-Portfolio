import React from "react";
import ContactInfo from "../components/ContactInfo";
import CozyCat from "../assets/CatAI-1.jpg";
import { FaEnvelope } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "../index.css";

export default function Contact() {
  return (
    <section className="vh-100" style={{backgroundImage: `url(${CozyCat})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center",
    backgroundAttachment:"fixed"}}> 
      <div className="row justify-content-center">
        <h1 className="text-center text-warning py-3 col col-md-5 mt-3 rounded" style={{backdropFilter: "blur(60px)"}}>Contact Me</h1>
      </div>

      <div className="container" >
        <div className="row justify-content-center">
          <div className="col col-md-5 rounded" style={{backdropFilter: "blur(60px)"}}>
            <form className="justify-content-center">
              {/* Name */}
              <div data-mdb-input-init className="form-outline mb-4 mt-3">
                <input
                  type="text"
                  id="contact-name"
                  className="form-control"
                  placeholder="Name"
                />
                <label className="form-label"></label>
              </div>
              {/* Email */}
              <div data-mdb-input-init className="form-outline mb-4">
                <input
                  type="email"
                  id="contact-email"
                  className="form-control"
                  placeholder="Email"
                />
                <label className="form-label"></label>
              </div>
              {/* Message */}
              <div data-mdb-input-init className="form-outline mb-4">
                <textarea
                  className="form-control"
                  id="form4Example3"
                  rows="4"
                  placeholder="Message"
                ></textarea>
                <label className="form-label"></label>
              </div>
              
              {/* Email Link */}
              <div className="d-flex justify-content-between align-items-start">
                {/* Send Button */}
              <button type="button" className="btn btn-warning btn-block mb-4">
                Send Message
              </button>
              </div>    
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
