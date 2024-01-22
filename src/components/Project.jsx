import { FaGithub, FaLink } from "react-icons/fa";

export default function Project(props) {
  const cardStyle = {
    width: "310px",
  };

  return (
    <div className="container">
        {/* Test grid */}
        <h1 className="text-center">Portfolio</h1>
        <div className="row justify-content-center">    
           

                    {props.projects.map((project) => (
                    <div className="col d-flex justify-content-center" key={project.id}>
                           {/* Test column cards --  col d-flex justify-content-center*/}
                    
                        <div className="card m-3 p-2"  style={cardStyle}>
                        <img className="rounded border border-black" style={{height: 200}} src={project.image} alt="Image caption" />
                        <div className="card-body">
                            <h5 className="card-header text-center bg-info-subtle">{project.name}</h5>
                            <h6 className="card-subtitle my-2 text-body-secondary">Description:</h6>
                            <p className="card-text">{project.description}</p>
                            <h6 className="card-subtitle my-2 text-body-secondary">Technologies:</h6>
                            <p className="card-text">{project.technologies}</p>
                            <div className="d-flex justify-content-around">
                                <a href={project.githubLink} className="btn btn-info pb-2">
                                <i className="p-1 fs-5"> <FaGithub /></i>
                                {" "}
                                Github
                                </a>
                                <a href={project.appLink} className="btn btn-secondary pb-2">
                                <i className="p-1 fs-5"> <FaLink /></i>
                                {" "}
                                AppLink
                                </a>
                            </div>
                        </div>
                        </div>
                    </div>                        
                    ))}
          
      
        </div>


    </div>
  );
}
