import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import profilePic from "../assets/profilePic.jpg";

export default function About() {

  
  return (
   

    <div className="container vh-100 pt-5">
      <div className="row text-center justify-content-center">
        <div className="col col-md-8 mb-5">
          <div className="rounded shadow-sm py-5 px-4 bg-white text-dark bg-opacity-50">
            <img
              src={profilePic}
              alt=""
              width="200"
              className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
            ></img>
            <h1 className="mb-3">Dusty Gray</h1>
            <h2 className="fs-3 text-uppercase text-muted">
              Full Stack Web Developer
            </h2>
            <h2>About Me</h2>
            <p className="fs-5">
              Nunc pharetra finibus est at efficitur. Praesent sed congue diam.
              Integer gravida dui mauris, ut interdum nunc egestas sed. Aenean
              sed mollis diam. Nunc aliquet risus ac finibus porta. Nam quis
              arcu non lectus tincidunt fermentum. Suspendisse aliquet orci
              porta quam semper imperdiet. Praesent euismod mi justo, faucibus
              scelerisque risus cursus in. Sed rhoncus mollis diam, sit amet
              facilisis lectus blandit at.
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
                <a href="https://www.linkedin.com/in/dustin-gray-517920a7/" className="">
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
