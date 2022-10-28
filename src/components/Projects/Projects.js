import React from "react";
import ProjectsData from "./ProjectsData";
import "./Projects.css";
//  style={{ width: "18rem" }}
const Projects = () => {
  return (
    <React.Fragment>
      {ProjectsData.map((projects) => {
        return (
          <div key={projects.id} className="container">
            <span id={`projects_${projects.id}`}></span>
            <h1>{projects.category}</h1>
            <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-3">
              {projects.data.map((item) => {
                return (
                  <div key={item.id} className="projectCard col">
                    <div className="card h-100">
                      <img
                        src={item.image}
                        className="card-img-top"
                        alt={item.title}
                      />
                      <div className="card-body">
                        <h5 className="card-title">{item.title}</h5>
                        {item.description && (
                          <p className="card-text">{item.description}</p>
                        )}
                      </div>
                      <div class="card-footer">
                        {item.demo_link && (
                          <a
                            className="btn btn-success linkLeft"
                            href={item.demo_link}
                            rel="noreferrer"
                            target="_blank"
                          >
                            Demo
                          </a>
                        )}
                        {item.code_link && (
                          <a
                            className="btn btn-success linkLeft"
                            href={item.code_link}
                            rel="noreferrer"
                            target="_blank"
                          >
                            Kode
                          </a>
                        )}
                        {item.readmore && (
                          <a
                            className="link-dark"
                            href={item.readmore}
                            rel="noreferrer"
                            target="_blank"
                          >
                            Les mer
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </React.Fragment>
  );
};

export default Projects;
