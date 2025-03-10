import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../index.css";

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="d-flex justify-content-center fixed-bottom bg-dark bg-opacity-75">
            <div className="d-flex align-items-center">
            &copy; 2024 Developed by Dusty Gray.
            </div>
            <div className="">
                <a className="mx-3" href="https://github.com/RickiBobbii">
                <i className="social-links">
                    <FaGithub className="pb-2"/>
                    </i>
                </a>
                <a className="" href="mailto:dusty.a.gray@gmail.com" >
                  <i className="social-links">
                    <FaEnvelope className="pb-2"/>
                  </i>
                </a>
                <a className="mx-3" href="https://www.linkedin.com/in/dustin-gray-517920a7/">
                <i className="social-links">
                    <FaLinkedin className="pb-2"/>
                    </i>
                </a>
            </div>
        </footer>
    );
};

export default Footer;
