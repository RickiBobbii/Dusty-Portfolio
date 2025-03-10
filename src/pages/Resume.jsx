import { FaLinkedin, FaGithub, FaEnvelope, FaFileAlt } from "react-icons/fa";
import resume from "../assets/DustinGrayResumeCV25.pdf";

export default function Resume() {
  return (
    <div className="container vh-100 pt-5">
      <div className="row text-center justify-content-center">
        <div className="col col-md-8 mb-5">
          <div className="rounded shadow-sm py-4 px-4 bg-dark text-dark bg-opacity-50" style={{backdropFilter: "blur(60px)"}}>
            <h1 className="mb-3 text-white">Resume</h1>
            <a href={resume} className="">
              <i className="social-links" style={{ fontSize: '50px' }}>
                <FaFileAlt />
              </i>
            </a>
            <h2 className="fs-3 text-uppercase text-secondary line mt-4">
              Full Stack Web Developer
            </h2>
            <h2 className="text-info pt-2">Front-End Skills</h2>
            <p className="fs-5 text-white">
              HTML5, CSS, JavaScript, jQuery, React, Handlebars, Bootstrap,
              Tailwind, Bulma, PWA, IndexedDB, RESTful APIs, Responsive Design
            </p>
            <h2 className="text-info">Back-End Skills</h2>
            <p className="fs-5 text-white">
              Node.js, Express, Express-Session, MySQL, Sequelize, MongoDB, Mongoose, NoSQL,
              Bcrypt, Dotenv, Git
            </p>
            <h3 className="text-info">Developer Tools/ Platforms</h3>
            <p className="fs-5 text-white">
              Visual Studio Code, GitHub, Heroku, GitLab, Insomnia, MongoDB
              Compass, MongoDB Atlas, GraphQL, Slack, Zoom, Discord, Google Workspace, Microsoft Office
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
