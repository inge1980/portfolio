import React from "react";
import { Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import ProjectsData from "./ProjectsData";
import "./Projects.css";

const Projects = () => {
  return (
    <React.Fragment>
      {ProjectsData.map((projects) => {
        return (
          <div key={projects.id} className="container">
            <span id={`projects_${projects.id}`}></span>
            <h1 className="text-start">{projects.category}</h1>
            <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-3">
              {projects.data.map((item, index) => {
                const length = projects.data.length;
                let width = length % 3 === 0 ? "width-33" : "width-25";
                width = ( (projects.id === 2 && index === 0) || projects.id === 4) ? "width-100" : width;
                let target = "_blank";
                target = (projects.id === 3 && item.id === 1) ? "_self" : target;
                return (
                  <div
                    key={item.id}
                    className={`projectCard col ${width}`}
                    id={`project_${projects.id}_${item.id}`}
                  >
                    <div className="card h-100">
                      {item.image && (
                        <img
                          src={item.image}
                          className="card-img-top"
                          alt={item.title}
                        />
                      )}
                      <div className="card-body">
                        <h5 className="card-title text-start">{item.title}</h5>
                        {item.description && (
                          <p className="card-text text-start">
                            {item.description}
                          </p>
                        )}
                      </div>
                      <div className="card-footer">
                        {item.demo_link && (
                          <a
                            className="btn btn-success linkLeft"
                            href={item.demo_link}
                            rel="noreferrer"
                            target={target}
                          >
                            Demo
                          </a>
                        )}
                        {item.code_link && (
                          <a
                            className="btn btn-success linkLeft"
                            href={item.code_link}
                            rel="noreferrer"
                            target={target}
                          >
                            Kode
                          </a>
                        )}
                        {item.demoandcode_link && (
                          <a
                            className="btn btn-success linkLeft"
                            href={item.demoandcode_link}
                            rel="noreferrer"
                            target={target}
                          >
                            Demo / Kode
                          </a>
                        )}
                        {item.readmore && (
                          <LinkContainer to={item.readmore}>
                            <Nav.Link
                              href={item.readmore}
                              className="btn btn-success linkLeft"
                              rel="noreferrer"
                              target="_blank"
                            >
                              Les mer
                            </Nav.Link>
                          </LinkContainer>
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
