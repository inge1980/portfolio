import React from "react";
import { Card, Nav } from "react-bootstrap";
import "./Intro.css";
import image from "../../img/author.png";
import { LinkContainer } from "react-router-bootstrap";
import ScrollToTop from "./../ScrollToTop/ScrollToTop";

const Intro = () => {
  const text = {
    title: "Who am I?",
    desc1: (
      <React.Fragment>
        I am a Fullstack and Frontend Developer seeking new opportunities.
        <br />
        <br />
        I have{" "}
      </React.Fragment>
    ),
    linkText:
      "12 years of professional development experience, plus several years of programming experience from personal projects.",
    desc2: (
      <React.Fragment>
        {" "}
        Much of my professional experience has been building and modernizing
        web applications and enterprise systems using PHP, JavaScript, HTML, CSS,
        Bootstrap, jQuery, MySQL, and SQL Server. My work has included large-scale
        CMS modernization, ERP platform development, PIM functionality, REST API
        integration, and responsive web applications.
        <br />
        <br />
        In recent years, I have expanded into React, React Native, TypeScript,
        C# and .NET through practical projects and a structured backend development
        training program. My recent C#/.NET work includes ASP.NET Core APIs,
        PostgreSQL, Entity Framework Core, Docker, Azure, Terraform, CI/CD and
        AI-assisted applications using RAG, embeddings, vector databases and
        semantic search.
        <br />
        <br />
        I have particular experience working with established production systems,
        where new functionality needs to coexist with existing business logic,
        integrations, and legacy architecture. I also enjoy building focused
        applications and interfaces around complex backend systems.
        <br />
        <br />
        My background combines long-term experience with established technologies
        and continued development with modern tools and frameworks. I am looking
        to bring that combination to my next role.
      </React.Fragment>
    ),
  };

  return (
    <React.Fragment>
      <ScrollToTop />
      <div className="col-md-12 introCard">
        <Card className="cardSmall">
          <Card.Img variant="top" src={image} />
          <Card.Body>
            <Card.Title>{text.title}</Card.Title>
            <Card.Text className="text-start">
              {text.desc1}
              <LinkContainer to="/portfolio/projects">
                <Nav.Link href="#" className="link-primary">
                  {text.linkText}
                </Nav.Link>
              </LinkContainer>
              {text.desc2}
              <br />
              <br />
              <p className="card-text text-center">
                <LinkContainer to="/portfolio/contact/">
                  <Nav.Link href="#" className="link-primary">
                    Contact me
                  </Nav.Link>
                </LinkContainer>
              </p>
            </Card.Text>
          </Card.Body>
        </Card>

        <div className="cardBig card mb-3">
          <div className="row g-0">
            <div className="col-sm-3 col-md-4">
              <img
                src={image}
                className="img-fluid"
                alt="Profile"
              />
            </div>
            <div className="col-sm-9 col-md-8">
              <div className="card-body">
                <h5 className="card-title">{text.title}</h5>
                <p className="card-text">{text.desc}</p>
                <p className="card-text text-start">
                  {text.desc1}
                  <LinkContainer to="/portfolio/projects">
                    <Nav.Link href="#" className="link-primary">
                      {text.linkText}
                    </Nav.Link>
                  </LinkContainer>
                  {text.desc2}
                </p>
                <p className="card-text text-center">
                  <LinkContainer to="/portfolio/contact/">
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

export default Intro;