import React from "react";
import { Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import image from "../../img/author.png";
import ScrollToTop from "./../ScrollToTop/ScrollToTop";
import "./About.css";

const About = () => {
  return (
    <React.Fragment>
      <ScrollToTop />
      <div className="container">
        <span id="about"></span>
        <h1 className="text-start">About</h1>
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <div className="aboutWrapper">
                  <img
                    src={image}
                    className="aboutImage img-thumbnail"
                    alt="Profile"
                  />
                  <div className="text-start">
                    <p>
                      I am a Fullstack and Frontend Developer seeking new
                      opportunities.
                    </p>
                    <p>
                      I have{" "}
                      <LinkContainer to="/projects">
                        <Nav.Link href="#" className="link-primary aboutInlineLink">
                          12 years of professional development experience, plus
                          several years of programming experience from personal
                          projects.
                        </Nav.Link>
                      </LinkContainer>{" "}
                      Much of my professional experience has been building and
                      modernizing web applications and enterprise systems using
                      PHP, JavaScript, HTML, CSS, Bootstrap, jQuery, MySQL, and
                      SQL Server. My work has included large-scale CMS
                      modernization, ERP platform development, PIM
                      functionality, REST API integration, and responsive web
                      applications.
                    </p>
                    <p>
                      In recent years, I have expanded into React, React
                      Native, TypeScript, C# and .NET through practical
                      projects and a structured backend development training
                      program. My recent C#/.NET work includes ASP.NET Core
                      APIs, PostgreSQL, Entity Framework Core, Docker, Azure,
                      Terraform, CI/CD and AI-assisted applications using RAG,
                      embeddings, vector databases and semantic search.
                    </p>
                    <p>
                      I have particular experience working with established
                      production systems, where new functionality needs to
                      coexist with existing business logic, integrations, and
                      legacy architecture. I also enjoy building focused
                      applications and interfaces around complex backend
                      systems.
                    </p>
                    <p>
                      My background combines long-term experience with
                      established technologies and continued development with
                      modern tools and frameworks. I am looking to bring that
                      combination to my next role.
                    </p>
                  </div>
                </div>
                <p className="text-center mb-0">
                  <LinkContainer to="/contact/">
                    <Nav.Link href="#" className="link-primary">
                      Contact me
                    </Nav.Link>
                  </LinkContainer>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default About;
