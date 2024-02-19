import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import profilePic from "../assets/profilePic.jpg";

export default function About() {
  return (
    <div className="container pt-4">
      <div className="row text-center justify-content-center">
        <div className="col col-md-8 mb-5">
          <div className="rounded shadow-sm py-5 px-4 bg-dark text-white bg-opacity-50">
            <img
              src={profilePic}
              alt=""
              width="200"
              className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm bg-secondary border-secondary"
            ></img>
            <h1 className="mb-3">Dusty Gray</h1>
            <h2 className="fs-3 text-uppercase text-secondary">
              Full Stack Web Developer
            </h2>
            <h2>About Me</h2>
            <p className="fs-5">
              Hello there! I am a full stack web developer with a passion for
              creating and learning. Recently, I earned my certification in full
              stack web development from the Ohio State University. For more
              than 20 years, I have been honing my skills in retail managment and customer service.
              In my spare time, I volunteer as a Roller Derby Referee for the
              WFTDA. Being engaged in both the pet industry and customer service
              industry, I have harnessed strong problem solving skills and a
              passion for helping others. I am excited to combine my passions
              with my new skills in web development to create a unique and
              enjoyable user experience.
            </p>
            <ul className="mb-0 list-inline mt-3">
              <li className="list-inline-item">
                <a href="https://github.com/RickiBobbii" className="">
                  <i className="social-links">
                    <FaGithub />
                  </i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="mailto:rickibobbiii@gmail.com" className="">
                  <i className="social-links">
                    <FaEnvelope />
                  </i>
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  href="https://www.linkedin.com/in/dustin-gray-517920a7/"
                  className=""
                >
                  <i className="social-links">
                    <FaLinkedin />
                  </i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
