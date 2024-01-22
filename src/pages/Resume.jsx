import { FaLinkedin, FaGithub, FaEnvelope, FaFileAlt } from "react-icons/fa";
import resume from "../assets/Dusty-Gray-Resume.pdf";

export default function Resume() {
  return (
    <div className="container vh-100 pt-5">
      <div className="row text-center justify-content-center">
        <div className="col col-md-8 mb-5">
          <div className="rounded shadow-sm py-4 px-4 bg-white text-dark bg-opacity-50">
            <h1 className="mb-3">Resume</h1>
            <a href={resume} className="">
              <i className="social-links">
                <FaFileAlt />
              </i>
            </a>
            <h2 className="fs-3 text-uppercase text-muted line mt-4">
              Full Stack Web Developer
            </h2>
            <h2>Front-End Skills</h2>
            <p className="fs-5">
              HTML5, CSS, JavaScript, jQuery, React, Bootstrap, Handlebars,
              Tailwind, Bulma, PWA, IndexedDB, RESTful APIs, GIT
            </p>
            <h2>Back-End Skills</h2>
            <p className="fs-5">
              Node.js, Express, Express-Session, MySQL, Sequelize, MongoDB, Mongoose, NoSQL,
              Bcrypt, Dotenv
            </p>
            <h3>Developer Tools/ Platforms</h3>
            <p className="fs-5">
              Visual Studio Code, GitHub, Heroku, GitLab, Insomnia, MongoDB
              Compass, Slack, Zoom, Discord, Google Workspace, Microsoft Office
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
