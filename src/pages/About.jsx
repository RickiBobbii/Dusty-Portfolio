import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import profilePic from "../assets/profilePic.jpg";

export default function About() {
  return (
    <div className="container pt-5 d-flex align-items-center">
      <div className="row text-center justify-content-center">
        <div className="col col-md-8 mb-5">
          {/* Card */}
          <div className="rounded shadow-sm py-5 px-4 bg-dark text-white bg-opacity-50">
            <img
              src={profilePic}
              alt=""
              width="200"
              className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm bg-secondary border-secondary"
            ></img>
            <h1 className="mb-3 pb-1">Dusty Gray</h1>
            <h2 className="fs-3 text-uppercase text-info">
              Full Stack Web Developer
            </h2>
            <h2 className="text-secondary">About Me</h2>
            <p className="fs-5">
              Hello there! I am a full stack web developer with a passion for
              learning, creating, and problem solving. Having recently earned my
              certification in full stack web development from the Ohio State
              University, I am excited to use my new skills in web development
              to create a unique and enjoyable user experience. For more than 20
              years, I have been honing my skills as a retail manager with
              everything from excellent customer service to strong collaboration
              with others. My desire to help others has also aided me in
              striving to solve problems to deliver positive results. In my
              spare time, I volunteer as a Roller Derby Referee for the WFTDA.
              Please feel free to look around my portfolio and contact me with
              any questions or opportunities. Thank you!
            </p>
            {/* <ul className="mb-0 list-inline mt-3">
              <li className="list-inline-item">
                <a href="https://github.com/RickiBobbii" className="">
                  <i className="social-links">
                    <FaGithub className="pb-2" />
                  </i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="mailto:rickibobbiii@gmail.com" className="">
                  <i className="social-links">
                    <FaEnvelope className="pb-2" />
                  </i>
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  href="https://www.linkedin.com/in/dustin-gray-517920a7/"
                  className=""
                >
                  <i className="social-links">
                    <FaLinkedin className="pb-2" />
                  </i>
                </a>
              </li>
            </ul> */}
          </div>
        </div>
      </div>
    </div>
  );
}
